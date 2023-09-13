import { Subjects } from "../../subjects";

export interface FormPublishedEvent {
  subject: Subjects.FormPublished;
  data: {
    slug: string;
    form_id: number;
    formTitle: string;
    formDescription: string;
    formAction: string;
    formActionData: string;
    submitButton: string;
    customStyle: any;
    inputs: any;
    company_id: number;
  };
}
