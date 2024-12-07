export enum Subjects {
  NewCompanyCreated = "auth:companyCreated",
  NewCompanyDomain = "auth:companyDomain",

  SubscriptionCreated = "subscription:created",

  LandingPagePublished = "landingpage:published",
  LandingPageUnpublished = "landingpage:unpublished",

  FormPublished = "form:published",
  FormUnpublished = "form:unpublished",
  Conversion = "forms-resolver:conversion",

  FetchSegmentationEvent = "emails:fetchSegmentation",

  Activity = "crm:activty",
  ResponseSegmentationFetchEvent = "crm:responseSegmentationFetch",
}
