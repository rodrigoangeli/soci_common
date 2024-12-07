import { Subjects } from "../../subjects";

export interface EmailFiringEvent {
  subject: Subjects.EmailFiringEvent;
  data: {
    company_id: number;
    emailId: number;
    to: {
      email: string;
      name: string;
      data: any;
    }[];
  };
}
