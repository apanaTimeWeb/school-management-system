export type HomeworkStatus = 'Pending' | 'Completed' | 'Overdue';

export interface HomeworkAttachment {
  id: string;
  fileName: string;
  fileSize: string;
  fileType: 'pdf' | 'doc' | 'image' | 'link';
  url: string;
}

export interface HomeworkItem {
  id: string;
  subject: string;
  teacher: string;
  title: string;
  description: string;
  assignedDate: string;
  dueDate: string;
  status: HomeworkStatus;
  attachments: HomeworkAttachment[];
  marks?: string;
  teacherRemarks?: string;
}

export interface StudentHomeworkData {
  homeworks: HomeworkItem[];
}
