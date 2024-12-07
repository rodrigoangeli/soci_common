import { Subjects } from "../../subjects";

export interface FetchSegmentationEvent {
  subject: Subjects.FetchSegmentationEvent;
  data: {
    company_id: number;
    to: string;
    emailId: string;
    replyTo?: string;
  };
}
