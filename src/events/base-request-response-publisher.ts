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

  publish(
    data: Omit<T["data"], "replyTo">
  ): Promise<{ replyTo: string; response: any[] }> {
    return new Promise((resolve, reject) => {
      const replyTo = `reply.${randomBytes(8).toString("hex")}`; // Generate replyTo internally

      // Timeout after 10 seconds if no response is received
      const timeout = setTimeout(() => {
        subscription.unsubscribe(); // Unsubscribe the listener on timeout
        reject(new Error("Request timed out"));
      }, 40000);

      const subscription: Subscription = this.client.subscribe(replyTo);

      subscription.on("message", (msg) => {
        clearTimeout(timeout); // Clear the timeout on response
        subscription.unsubscribe();
        try {
          const response = JSON.parse(msg.getData().toString()); // Parse the response
          resolve({ replyTo, response }); // Resolve with both replyTo and response
        } catch (error) {
          reject(new Error("Failed to parse response"));
        }
      });

      this.client.publish(
        this.subject,
        JSON.stringify({ ...data, replyTo }), // Merge replyTo into the data
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
