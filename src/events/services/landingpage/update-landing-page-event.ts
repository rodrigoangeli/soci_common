import { Subjects } from "../../subjects";

export interface UpdateLandingPageEvent {
  subject: Subjects.UpdateLandingPage;
  data: {
    company_id: number;
  };
}
