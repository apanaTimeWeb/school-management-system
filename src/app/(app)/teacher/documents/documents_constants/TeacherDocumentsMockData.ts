import { DocumentData } from '../documents_store/useTeacherDocumentsStore';

export const TEACHER_DOCUMENTS_MOCK: DocumentData[] = [
  {
    id: 'DOC-001',
    title: 'Physics Chapter 4 Lesson Plan',
    category: 'Lesson Plan',
    class: 'Class 10 A',
    subject: 'Physics',
    uploadDate: '2023-11-20',
    fileSize: '1.2 MB',
    fileType: 'PDF'
  },
  {
    id: 'DOC-002',
    title: 'Chemistry Organic Reactions Notes',
    category: 'Notes',
    class: 'Class 11 Sci',
    subject: 'Chemistry',
    uploadDate: '2023-11-18',
    fileSize: '3.5 MB',
    fileType: 'PPTX'
  },
  {
    id: 'DOC-003',
    title: 'Math Board Exam Question Bank',
    category: 'Study Material',
    class: 'Class 10 A',
    subject: 'Mathematics',
    uploadDate: '2023-11-15',
    fileSize: '5.1 MB',
    fileType: 'PDF'
  },
  {
    id: 'DOC-004',
    title: 'Q1 Syllabus Completion Report Format',
    category: 'Assigned Document',
    class: 'All Classes',
    subject: 'General',
    uploadDate: '2023-11-01',
    fileSize: '0.8 MB',
    fileType: 'DOCX',
    uploadedBy: 'Principal'
  }
];
