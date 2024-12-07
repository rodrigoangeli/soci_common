import { Subjects } from "../../subjects";

export interface ResponseSegmentationFetchEvent {
  subject: Subjects.ResponseSegmentationFetchEvent;
  data: {
    to: string[];
  };
}
