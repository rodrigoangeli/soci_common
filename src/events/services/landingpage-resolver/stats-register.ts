import { Subjects } from "../../subjects";

export interface StatsRegisterEvent {
  subject: Subjects.StatsRegister;
  data: Array<{
    landingpage_id: number;
    company_id: number;
    date: Date;
    views: number;
    conversions: number;
    totalVisitDuration: number;
    trafficSources: object;
    deviceDistribution: object;
  }>;
}
