import { Subjects } from "../../subjects";

export interface NewCompanyDomainEvent {
  subject: Subjects.NewCompanyDomain;
  data: {
    domain: number;
  };
}
