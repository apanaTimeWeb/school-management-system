import type { StudentOnlineTestsData, QuizQuestion } from '../student_online_tests_types/student_online_tests_types';

export const MOCK_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q_1",
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctOptionIndex: 2,
    marks: 5
  },
  {
    id: "q_2",
    questionText: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctOptionIndex: 1,
    marks: 5
  },
  {
    id: "q_3",
    questionText: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correctOptionIndex: 1,
    marks: 5
  },
  {
    id: "q_4",
    questionText: "What is the chemical symbol for Water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    correctOptionIndex: 0,
    marks: 5
  }
];

export const MOCK_ONLINE_TESTS_DATA: StudentOnlineTestsData = {
  availableTests: [
    {
      id: "test_1",
      subject: "General Knowledge",
      title: "Weekly GK Quiz 5",
      durationMinutes: 10,
      totalQuestions: 4,
      totalMarks: 20,
      dueDate: "Tomorrow, 11:59 PM",
      status: "Available",
      questions: MOCK_QUIZ_QUESTIONS
    },
    {
      id: "test_2",
      subject: "Science",
      title: "Chapter 10: Light Assessment",
      durationMinutes: 30,
      totalQuestions: 15,
      totalMarks: 30,
      dueDate: "Aug 20, 2024",
      status: "Available",
      questions: MOCK_QUIZ_QUESTIONS // using same mock for simplicity
    }
  ],
  attemptHistory: [
    {
      id: "hist_1",
      testId: "test_past_1",
      testTitle: "Weekly GK Quiz 4",
      subject: "General Knowledge",
      attemptDate: "Aug 10, 2024",
      score: 18,
      totalMarks: 20,
      percentage: 90,
      status: "Pass"
    },
    {
      id: "hist_2",
      testId: "test_past_2",
      testTitle: "Algebra Basics Test",
      subject: "Mathematics",
      attemptDate: "Aug 05, 2024",
      score: 8,
      totalMarks: 20,
      percentage: 40,
      status: "Fail"
    }
  ]
};
