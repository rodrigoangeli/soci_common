import { Subjects } from "../../subjects";

export interface StatsRegisterEvent {
  subject: Subjects.StatsRegister;
  data: {
    landingpage_id: number;
    company_id: number;
    date: Date;
    views: number;
    conversions: number;
    bounceRate: number;
    avgTimeOnPage: number;
    totalVisitDuration: number;
    trafficSources: object;
    deviceDistribution: object;
  };
}
