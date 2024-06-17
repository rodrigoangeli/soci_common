import { Subjects } from "../../subjects";

export interface ActivityEvent {
  subject: Subjects.Activity;
  data: {
    company_id: number;
    lead_id: number;
    type: string;
    details: any;
    timestamp: any;
  };
}
