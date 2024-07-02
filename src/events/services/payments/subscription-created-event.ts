import { Subjects } from "../../subjects";

export interface SubscriptionCreatedEvent {
  subject: Subjects.SubscriptionCreated;
  data: {
    company_id: number;
    stripeCustomerId: string;
    stripeSubscriptionId: string;
    plan: string;
    status: string;
    currentPeriodEnd: Date;
    trialUsed: boolean;
    trialStartDate: Date | null;
    trialEndDate: Date | null;
  };
}
