export type AssignmentStatus = 'Pending' | 'Submitted' | 'Graded' | 'Overdue';

export interface AssignmentAttachment {
  id: string;
  fileName: string;
  fileSize: string;
  url: string;
}

export interface SubmissionHistory {
  id: string;
  submittedAt: string;
  fileUrl: string;
  fileName: string;
  status: 'Accepted' | 'Rejected' | 'Pending Review';
  teacherComment?: string;
}

export interface AssignmentItem {
  id: string;
  subject: string;
  title: string;
  instructions: string;
  dueDate: string;
  assignedDate: string;
  status: AssignmentStatus;
  attachments: AssignmentAttachment[];
  
  // Feedback & Marks (if Graded)
  marks?: string;
  teacherFeedback?: string;
  
  // Submission
  allowResubmission: boolean;
  submissionHistory: SubmissionHistory[];
}

export interface StudentAssignmentsData {
  assignments: AssignmentItem[];
}
