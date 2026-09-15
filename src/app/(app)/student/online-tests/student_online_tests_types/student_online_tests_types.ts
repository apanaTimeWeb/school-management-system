export type TestStatus = 'Available' | 'Missed' | 'Completed';

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number; // Only used for calculating mock results
  marks: number;
}

export interface OnlineTest {
  id: string;
  subject: string;
  title: string;
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  dueDate: string;
  status: TestStatus;
  questions?: QuizQuestion[]; // Only loaded when taking the test
}

export interface TestAttemptHistory {
  id: string;
  testId: string;
  testTitle: string;
  subject: string;
  attemptDate: string;
  score: number;
  totalMarks: number;
  percentage: number;
  status: 'Pass' | 'Fail';
}

export interface StudentOnlineTestsData {
  availableTests: OnlineTest[];
  attemptHistory: TestAttemptHistory[];
}
