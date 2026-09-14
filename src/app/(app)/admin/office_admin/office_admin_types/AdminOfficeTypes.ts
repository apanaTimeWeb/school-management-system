export type NoticeType = 'Notice' | 'Circular';
export type TaskStatus = 'Pending' | 'In Progress' | 'Completed';
export type DocumentCategory = 'Office Document' | 'Official Correspondence' | 'Administrative Record' | 'Register Log';

export interface OfficeNotice {
  id: string;
  title: string;
  type: NoticeType;
  datePublished: string;
  targetAudience: string; // e.g. "All Staff", "Teachers Only"
  content: string;
  priority: 'Normal' | 'High' | 'Urgent';
}

export interface OfficeTask {
  id: string;
  taskName: string;
  registerType?: string; // e.g. "Visitor Register", "Dispatch Log"
  assignedTo: string;
  dueDate: string;
  status: TaskStatus;
}

export interface OfficeDocument {
  id: string;
  fileName: string;
  category: DocumentCategory;
  uploadDate: string;
  size: string; // e.g. "2.4 MB"
}

export interface FetchOfficeParams {
  type?: string;
  search?: string;
}

export interface OfficeResponse<T> {
  success: boolean;
  data: T;
}
