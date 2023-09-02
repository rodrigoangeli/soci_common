import { Subjects } from "../../subjects";

export interface FormPublishedEvent {
  subject: Subjects.FormPublished;
  data: {
    slug: string;
    form_id: number;
    formTitle: string;
    formDescription: string;
    submitButton: string;
    customStyle: any;
    data: any;
    domain: string;
    subdomain: string;
  };
}
