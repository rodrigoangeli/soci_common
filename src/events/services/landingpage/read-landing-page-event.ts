import { Subjects } from "../../subjects";

export interface ReadLandingPageEvent {
  subject: Subjects.ReadLandingPage;
  data: {
    company_id: number;
  };
}
