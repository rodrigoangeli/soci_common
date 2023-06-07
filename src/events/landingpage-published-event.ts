import { Subjects } from "./subjects";

export interface LandingPagePublishedEvent {
  subject: Subjects.LandingPagePublished;
  data: {
    id: string;
    title: string;
    html: string;
    company_id: string;
  };
}
