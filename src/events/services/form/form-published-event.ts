import { Subjects } from "../../subjects";

export interface FormPublishedEvent {
  subject: Subjects.FormPublished;
  data: {
    slug: string;
    form_id: number;
    variationData: any;
    data: any;
    domain: string;
    subdomain: string;
  };
}
