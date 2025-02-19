import { Subjects } from "../../subjects";

export interface LandingPageUnpublishedEvent {
  subject: Subjects.LandingPageUnpublished;
  data: {
    landingpage_id: number;
    company_id: number;
  };
}
