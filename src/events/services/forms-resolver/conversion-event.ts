import { Subjects } from "../../subjects";

export interface ConversionEvent {
  subject: Subjects.Conversion;
  data: {
    email: string;
    company_id: number;
    fields: any;
  };
}
