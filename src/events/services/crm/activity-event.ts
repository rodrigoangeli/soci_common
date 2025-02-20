import { Subjects } from "../../subjects";

export interface ActivityEvent {
  subject: Subjects.Activity;
  data: {
    company_id: number;
    lead_id?: number;
    email?: string;
    content: {
      name: string;
      type: string;
      details: any;
      timestamp: any;
    };
  };
}
