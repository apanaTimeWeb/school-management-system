export interface ClassworkSubjectRecord {
  id: string;
  subject: string;
  teacher: string;
  chapter: string;
  topic: string;
  notes: string;
  teacherInstructions: string;
}

export interface DailyClasswork {
  id: string;
  date: string; // e.g. "Aug 15, 2024"
  dayOfWeek: string;
  records: ClassworkSubjectRecord[];
}

export interface StudentClassworkData {
  history: DailyClasswork[];
}
