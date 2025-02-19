import { Subjects } from "../../subjects";

export interface EmailSentEvent {
  subject: Subjects.EmailSentEvent;
  data: {
    company_id: number;
    emails_sent: number;
  };
}
