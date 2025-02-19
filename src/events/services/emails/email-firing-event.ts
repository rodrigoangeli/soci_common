import { Subjects } from "../../subjects";
/* Email Firing */
export interface EmailFiringEvent {
  subject: Subjects.EmailFiringEvent;
  data: {
    company_id: number;
    emailId: string;
    to: {
      email: string;
      name: string;
      data?: any;
    }[];
  };
}
