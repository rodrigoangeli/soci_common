import { Subjects as SubjectLandingPage } from "./services/landingpage/subjects";

export const Subjects = { ...SubjectLandingPage };
export type Subjects = keyof typeof Subjects;
