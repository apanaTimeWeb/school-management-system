export type FeedbackCategory = 'Food' | 'Cleanliness' | 'Discipline' | 'General' | 'Maintenance' | 'Security';
export type FeedbackStatus = 'NEW' | 'REVIEWED' | 'ACTION_TAKEN' | 'CLOSED';

export interface HostelFeedback {
  id: string;
  category: FeedbackCategory;
  isAnonymous: boolean;
  studentName?: string; // Hidden if anonymous
  studentId?: string;   // Hidden if anonymous
  roomNumber?: string;  // Hidden if anonymous
  dateSubmitted: string;
  subject: string;
  description: string;
  status: FeedbackStatus;
  wardenResponse?: string;
  actionTakenDate?: string;
}
