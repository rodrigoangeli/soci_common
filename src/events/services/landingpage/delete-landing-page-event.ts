import { Subjects } from "../../subjects";

export interface DeleteLandingPageEvent {
  subject: Subjects.DeleteLandingPage;
  data: {
    company_id: number;
  };
}
