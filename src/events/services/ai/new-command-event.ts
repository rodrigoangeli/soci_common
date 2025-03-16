import { Subjects } from "../../subjects";

export interface NewCommandEvent {
  subject: Subjects.NewCommand;
  data: {
    company_id: number;
    tokensUsed: number;
  };
}
