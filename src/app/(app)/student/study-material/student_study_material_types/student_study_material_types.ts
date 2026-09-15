export type MaterialType = 'PDF' | 'Document' | 'Video' | 'Link' | 'Notes';

export interface StudyMaterialChapter {
  id: string;
  title: string;
  chapterNumber: number;
}

export interface StudyMaterialSubject {
  id: string;
  name: string;
  teacherName: string;
  chapters: StudyMaterialChapter[];
}

export interface StudyMaterialItem {
  id: string;
  subjectId: string;
  chapterId: string;
  title: string;
  description: string;
  type: MaterialType;
  url: string; // link to file or video
  fileSize?: string;
  uploadDate: string;
  uploadedBy: string; // Teacher name
}

export interface StudentStudyMaterialData {
  subjects: StudyMaterialSubject[];
  materials: StudyMaterialItem[];
}
