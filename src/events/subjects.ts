export enum Subjects {
  NewCompanyCreated = "auth:companyCreated",
  NewCompanyDomain = "auth:companyDomain",
  UserCompletedAction = "auth:userCompletedAtion",
  SubscriptionCreated = "subscription:created",

  LandingPagePublished = "landingpage:published",
  LandingPageUnpublished = "landingpage:unpublished",

  FormPublished = "form:published",
  FormUnpublished = "form:unpublished",
  Conversion = "forms-resolver:conversion",

  FetchSegmentationEvent = "emails:fetchSegmentation",
  EmailFiringEvent = "emails:firing",
  EmailSentEvent = "emails:sent",

  Activity = "crm:activty",
  ResponseSegmentationFetchEvent = "crm:responseSegmentationFetch",

  StatsRegister = "landingpage-resolver:statsRegister",
}
