// activities.ts

// Interface for scoring activities with additional details
export interface EmailOpens {
  type: "Email Opens";
  details: {
    emailId: string; // ID of the email that was opened
    count: number; // Number of times the lead has opened this email
  };
  timestamp: Date;
}

export interface LinkClicks {
  type: "Link Clicks";
  details: {
    emailId: string; // ID of the email containing the link
    link: string; // URL of the link that was clicked
    count: number; // Number of times the lead has clicked this link
  };
  timestamp: Date;
}

export interface FormSubmissions {
  type: "Form Submissions";
  details: {
    formId: string; // ID of the form submitted
    count: number; // Number of times the lead has submitted this form
  };
  timestamp: Date;
}

export interface WebsiteVisits {
  type: "Website Visits";
  details: {
    url: string; // URL of the website visited
    count: number; // Number of visits to this website
  };
  timestamp: Date;
}

export interface PageViews {
  type: "Page Views";
  details: {
    url: string; // URL of the page viewed
    count: number; // Number of times the lead has viewed this page
  };
  timestamp: Date;
}

export interface SocialMediaInteractions {
  type: "Social Media Interactions";
  details: {
    platform: string; // Social media platform (e.g., Twitter, LinkedIn)
    postId: string; // ID of the social media post
    count: number; // Number of interactions with this post
  };
  timestamp: Date;
}

export interface Downloads {
  type: "Downloads";
  details: {
    resourceId: string; // ID of the resource downloaded
    count: number; // Number of times the lead has downloaded this resource
  };
  timestamp: Date;
}

export interface EventAttendance {
  type: "Event Attendance";
  details: {
    eventId: string; // ID of the event attended
    count: number; // Number of times the lead attended this event
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
  };
  timestamp: Date;
}

export interface EmailReceived {
  type: "Email Received";
  details: {
    from: string;
    subject: string;
    body: string;
  };
  timestamp: Date;
}

export interface FunnelStageChange {
  type: "Funnel Stage Change";
  details: {
    oldStage: string;
    newStage: string;
  };
  timestamp: Date;
}

export interface EnteredFunnel {
  type: "Entered Funnel";
  details: {
    funnelId: string;
    funnelName: string;
  };
  timestamp: Date;
}

export interface UserNote {
  type: "User Note";
  details: {
    note: string;
  };
  timestamp: Date;
}

export interface ScheduledCall {
  type: "Scheduled Call";
  details: {
    date: string;
    time: string;
    with: string;
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
  };
  timestamp: Date;
}
