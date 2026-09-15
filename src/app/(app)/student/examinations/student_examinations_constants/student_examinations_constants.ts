import type { StudentExaminationsData } from '../student_examinations_types/student_examinations_types';

export const MOCK_EXAMINATIONS_DATA: StudentExaminationsData = {
  upcomingExams: [
    {
      id: "exam_term_1",
      termName: "Mid Term Examination 2024-25",
      startDate: "Sep 15, 2024",
      endDate: "Sep 25, 2024",
      generalInstructions: "Students must report 30 minutes before the exam starts. Admit cards are mandatory. Electronic devices are strictly prohibited.",
      schedules: [
        {
          id: "sch_1",
          subject: "Mathematics",
          date: "Sep 15, 2024",
          startTime: "09:00 AM",
          endTime: "12:00 PM",
          room: "Hall A",
          type: "Theory",
          syllabus: "Chapters 1 to 5 (Real Numbers, Polynomials, Linear Equations, Quadratic Equations, A.P.)",
          instructions: "Bring your own geometry box."
        },
        {
          id: "sch_2",
          subject: "Science",
          date: "Sep 18, 2024",
          startTime: "09:00 AM",
          endTime: "12:00 PM",
          room: "Hall B",
          type: "Theory",
          syllabus: "Physics: Ch 10, 11 | Chemistry: Ch 1, 2 | Biology: Ch 6",
        },
        {
          id: "sch_3",
          subject: "Science (Practical)",
          date: "Sep 20, 2024",
          startTime: "01:00 PM",
          endTime: "03:00 PM",
          room: "Physics Lab",
          type: "Practical",
          syllabus: "Experiments 1 to 4 in Physics and Chemistry.",
          instructions: "Lab coat and manual are mandatory."
        },
        {
          id: "sch_4",
          subject: "English",
          date: "Sep 22, 2024",
          startTime: "09:00 AM",
          endTime: "12:00 PM",
          room: "Hall A",
          type: "Theory",
          syllabus: "Prose: Chapters 1-4 | Poetry: Poems 1-3 | Grammar and Writing Skills"
        },
        {
          id: "sch_5",
          subject: "History (Internal)",
          date: "Sep 25, 2024",
          startTime: "10:00 AM",
          endTime: "11:00 AM",
          room: "Class 10-A",
          type: "Internal Assessment",
          syllabus: "Map pointing and Viva on Chapter 2: Nationalism in India",
        }
      ]
    }
  ],
  pastExams: [
    {
      id: "exam_term_past_1",
      termName: "Unit Test 1 (2024-25)",
      startDate: "Jul 10, 2024",
      endDate: "Jul 15, 2024",
      generalInstructions: "Standard unit test rules applied.",
      schedules: [
        {
          id: "sch_p1",
          subject: "Mathematics",
          date: "Jul 10, 2024",
          startTime: "08:30 AM",
          endTime: "10:00 AM",
          room: "Class 10-A",
          type: "Theory",
          syllabus: "Chapter 1 and 2"
        },
        {
          id: "sch_p2",
          subject: "Science",
          date: "Jul 12, 2024",
          startTime: "08:30 AM",
          endTime: "10:00 AM",
          room: "Class 10-A",
          type: "Theory",
          syllabus: "Physics Ch 10, Chemistry Ch 1"
        }
      ]
    }
  ]
};
