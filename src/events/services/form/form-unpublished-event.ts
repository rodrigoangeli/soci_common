import { Subjects } from "../../subjects";

export interface FormUnpublishedEvent {
  subject: Subjects.FormUnpublished;
  data: {
    form_id: number;
  };
}
