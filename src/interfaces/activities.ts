// activities.ts

// Interface for scoring activities with additional details
export interface EmailOpens {
  type: "Email Opens";
  details: {
    email_id: string; // ID of the email that was opened
  };
  timestamp: Date;
}

export interface LinkClicks {
  type: "Link Clicks";
  details: {
    email_id: string; // ID of the email containing the link
    link: string; // URL of the link that was clicked
  };
  timestamp: Date;
}

export interface FormSubmissions {
  type: "Form Submissions";
  details: {
    form_id: string; // ID of the form submitted
  };
  timestamp: Date;
}

export interface WebsiteVisits {
  type: "Website Visits";
  details: {
    url: string; // URL of the website visited
  };
  timestamp: Date;
}

export interface PageViews {
  type: "Page Views";
  details: {
    url: string; // URL of the page viewed
    query?: string; // Query string parameters (optional)
  };
  timestamp: Date;
}

export interface SocialMediaInteractions {
  type: "Social Media Interactions";
  details: {
    platform: string; // Social media platform (e.g., Twitter, LinkedIn)
    post_id: string; // ID of the social media post
  };
  timestamp: Date;
}

export interface Downloads {
  type: "Downloads";
  details: {
    resource_id: string; // ID of the resource downloaded
  };
  timestamp: Date;
}

export interface EventAttendance {
  type: "Event Attendance";
  details: {
    event_id: string; // ID of the event attended
  };
  timestamp: Date;
}

export interface DemographicFit {
  type: "Demographic Fit";
  details: {
    fitScore: number; // How well the lead matches the target demographic profile
  };
  timestamp: Date;
}

// Interface for non-scoring activities with detailed information
export interface LeadOwnerChange {
  type: "Lead Owner Change";
  details: {
    oldOwnerId: string;
    newOwnerId: string;
    changedBy: string;
  };
  timestamp: Date;
}

export interface EmailReceived {
  type: "Email Received";
  details: {
    email_id: string;
  };
  timestamp: Date;
}

export interface FunnelStageChange {
  type: "Funnel Stage Change";
  details: {
    oldStage: string;
    newStage: string;
    changedBy: string;
  };
  timestamp: Date;
}

export interface EnteredFunnel {
  type: "Entered Funnel";
  details: {
    funnel_id: string;
  };
  timestamp: Date;
}

export interface UserNote {
  type: "User Note";
  details: {
    note: string;
    wroteBy: string;
  };
  timestamp: Date;
}

export interface ScheduledCall {
  type: "Scheduled Call";
  details: {
    date: string;
    time: string;
    with: string;
    scheduledBy: string;
  };
  timestamp: Date;
}

export interface ScheduledMeeting {
  type: "Scheduled Meeting";
  details: {
    date: string;
    time: string;
    with: string;
    location: string;
    scheduledBy: string;
  };
  timestamp: Date;
}
