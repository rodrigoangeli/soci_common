import { Subjects } from "../../subjects";

export interface LandingPagePublishedEvent {
  subject: Subjects.LandingPagePublished;
  data: {
    slug: string;
    landingpage_id: number;
    company_id: number;
    data: any;
    domain: string;
    subdomain: string;
  };
}
