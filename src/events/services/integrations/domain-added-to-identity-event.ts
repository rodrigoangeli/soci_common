import { Subjects } from "../../subjects";

export interface DomainAddedToIdentityEvent {
  subject: Subjects.DomainAddedToIdentity;
  data: {
    domain: string;
    company_id: number;
    verificationToken: string;
  };
}
