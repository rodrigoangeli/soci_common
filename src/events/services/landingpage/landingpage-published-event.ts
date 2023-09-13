import { Subjects } from "../../subjects";

export interface LandingPagePublishedEvent {
  subject: Subjects.LandingPagePublished;
  data: {
    slug: string;
    landingpage_id: number;
    variationData: any;
    data: any;
    company_id: number;
  };
}
