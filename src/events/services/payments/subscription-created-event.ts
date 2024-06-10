import { Subjects } from "../../subjects";

export interface SubscriptionCreatedEvent {
  subject: Subjects.SubscriptionCreated;
  data: {
    company_id: number;
  };
}
