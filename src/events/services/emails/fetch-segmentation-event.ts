import { Subjects } from "../../subjects";

export interface FetchSegmentationEvent {
  subject: Subjects.FetchSegmentationEvent;
  data: {
    to: string;
    replyTo: string;
  };
}
