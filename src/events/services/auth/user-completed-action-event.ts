import { Subjects } from "../../subjects";

export interface UserCompletedActionEvent {
  subject: Subjects.UserCompletedAction;
  data: {
    company_id: number;
    category: string; // e.g., "GUIDES_MARKETING"
    title: string; // e.g., "START"
    step: string; // e.g., "NEW_CONTACT"
  };
}
