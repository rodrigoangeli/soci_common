// activities.ts

// Interface for scoring activities with additional details
export interface EmailOpens {
  name: "Email Opens";
  type: "email_open";
  details: {
    email_id: string; // ID of the email that was opened
  };
  timestamp: Date;
}

export interface LinkClicks {
  name: "Link Clicks";
  type: "email_click";
  details: {
    email_id: string; // ID of the email containing the link
    link: string; // URL of the link that was clicked
  };
  timestamp: Date;
}

export interface FormSubmissions {
  name: "Form Submissions";
  type: "conversion_form";
  details: {
    form_id: string; // ID of the form submitted
  };
  timestamp: Date;
}

export interface WebsiteVisits {
  name: "Website Visits";
  type: "website_visits";
  details: {
    url: string; // URL of the website visited
  };
  timestamp: Date;
}

export interface PageViews {
  name: "Page Views";
  type: "website_view";
  details: {
    url: string; // URL of the page viewed
    query?: string; // Query string parameters (optional)
  };
  timestamp: Date;
}

export interface SocialMediaInteractions {
  name: "Social Media Interactions";
  type: "social";
  details: {
    platform: string; // Social media platform (e.g., Twitter, LinkedIn)
    post_id: string; // ID of the social media post
  };
  timestamp: Date;
}

export interface Downloads {
  name: "Downloads";
  type: "conversion_download";
  details: {
    resource_id: string; // ID of the resource downloaded
  };
  timestamp: Date;
}

export interface EventAttendance {
  name: "Event Attendance";
  type: "website_event";
  details: {
    event_id: string; // ID of the event attended
  };
  timestamp: Date;
}

// Interface for non-scoring activities with detailed information
export interface LeadOwnerChange {
  name: "Lead Owner Change";
  type: "owner";
  details: {
    oldOwnerId: string;
    newOwnerId: string;
    changedBy: string;
  };
  timestamp: Date;
}

export interface EmailReceived {
  name: "Email Received";
  type: "email";
  details: {
    email_id: string;
  };
  timestamp: Date;
}

export interface FunnelStageChange {
  name: "Funnel Stage Change";
  type: "funnel_stage";
  details: {
    oldStage: string;
    newStage: string;
    changedBy: string;
  };
  timestamp: Date;
}

export interface EnteredFunnel {
  name: "Entered Funnel";
  type: "funnel";
  details: {
    funnel_id: string;
  };
  timestamp: Date;
}

export interface UserNote {
  name: "User Note";
  type: "note";
  details: {
    note: string;
    wroteBy: string;
  };
  timestamp: Date;
}

export interface ScheduledCall {
  name: "Scheduled Call";
  type: "scheduled_call";
  details: {
    date: string;
    time: string;
    with: string;
    scheduledBy: string;
  };
  timestamp: Date;
}

export interface ScheduledMeeting {
  name: "Scheduled Meeting";
  type: "scheduled_meeting";
  details: {
    date: string;
    time: string;
    with: string;
    location: string;
    scheduledBy: string;
  };
  timestamp: Date;
}
