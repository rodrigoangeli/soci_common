import { Stan, Subscription } from "node-nats-streaming";
import { randomBytes } from "crypto";

interface Event {
  subject: string;
  data: any;
}

export abstract class RequestResponsePublisher<T extends Event> {
  abstract subject: T["subject"];
  private client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T["data"]): Promise<any> {
    return new Promise((resolve, reject) => {
      const replySubject = `reply.${randomBytes(8).toString("hex")}`; // Unique reply subject

      // Timeout after 10 seconds if no response is received
      const timeout = setTimeout(() => {
        subscription.unsubscribe(); // Unsubscribe the listener on timeout
        reject(new Error("Request timed out"));
      }, 10000);

      // Subscribe to the reply subject and store the subscription object
      const subscription: Subscription = this.client.subscribe(replySubject);

      subscription.on("message", (msg) => {
        clearTimeout(timeout); // Clear the timeout on response
        subscription.unsubscribe(); // Clean up the subscription
        try {
          const response = JSON.parse(msg.getData().toString()); // Parse the response
          resolve(response); // Resolve with the response data
        } catch (error) {
          reject(new Error("Failed to parse response"));
        }
      });

      // Publish the request with the reply subject included
      this.client.publish(
        this.subject,
        JSON.stringify({ ...data, replyTo: replySubject }),
        (err) => {
          if (err) {
            clearTimeout(timeout);
            subscription.unsubscribe(); // Unsubscribe on error
            reject(err);
          }
        }
      );
    });
  }
}
