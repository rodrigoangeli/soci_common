import { Subjects } from "../../subjects";

export interface NewCompanyCreatedEvent {
  subject: Subjects.NewCompanyCreated;
  data: {
    company_id: number;
    email: string;
  };
}
