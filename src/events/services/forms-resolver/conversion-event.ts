import { Subjects } from "../../subjects";

export interface ConversionEvent {
  subject: Subjects.Conversion;
  data: {
    email: string;
    fields: any;
  };
}
