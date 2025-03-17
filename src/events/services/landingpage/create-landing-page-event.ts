import { Subjects } from "../../subjects";

export interface CreateLandingPageEvent {
  subject: Subjects.CreateLandingPage;
  data: {
    company_id: number;
    title: string;
    template?: any;
  };
}
