import { Subjects } from "../../subjects";

export interface ActivityEvent {
  subject: Subjects.Activity;
  data: {
    type: string;
    details: any;
    timestamp: any;
  };
}
