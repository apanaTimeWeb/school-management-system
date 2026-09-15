export type FeedbackCategory = 'Course Feedback' | 'Teacher Feedback' | 'School Feedback' | 'Event Feedback' | 'Suggestion' | 'Complaint/Grievance';

export interface FeedbackSubmission {
  id: string;
  category: FeedbackCategory;
  date: string;
  rating: number; // 1-5 stars
  isAnonymous: boolean;
  comments: string;
  status: 'Pending' | 'Reviewed' | 'Resolved'; // Especially for complaints
  adminReply?: string; // If the school replied
}

export interface StudentFeedbackData {
  allowAnonymous: boolean; // Policy config
  teachersList: string[]; // For populating teacher dropdown
  coursesList: string[]; // For course dropdown
  history: FeedbackSubmission[];
}
