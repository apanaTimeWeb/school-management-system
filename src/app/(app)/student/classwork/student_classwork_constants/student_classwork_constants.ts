import type { StudentClassworkData } from '../student_classwork_types/student_classwork_types';

export const MOCK_CLASSWORK_DATA: StudentClassworkData = {
  history: [
    {
      id: "cw_today",
      date: "Today, Aug 15",
      dayOfWeek: "Thursday",
      records: [
        {
          id: "rec_1",
          subject: "Mathematics",
          teacher: "Mr. R.K. Singh",
          chapter: "Chapter 4: Quadratic Equations",
          topic: "Solving by Factorization",
          notes: "Discussed the middle-term splitting method. Covered examples 3, 4, and 5 from the NCERT textbook.",
          teacherInstructions: "Review the examples discussed today before attempting the homework."
        },
        {
          id: "rec_2",
          subject: "Science",
          teacher: "Mrs. N. Patel",
          chapter: "Chapter 10: Light",
          topic: "Refraction through a Glass Slab",
          notes: "Performed the glass slab experiment in the lab. Derived the lateral displacement formula.",
          teacherInstructions: "Ensure you draw the ray diagram accurately in your lab manuals by tomorrow."
        }
      ]
    },
    {
      id: "cw_yesterday",
      date: "Yesterday, Aug 14",
      dayOfWeek: "Wednesday",
      records: [
        {
          id: "rec_3",
          subject: "English",
          teacher: "Ms. S. Gupta",
          chapter: "Poem 3: A Tiger in the Zoo",
          topic: "Poetic Devices & Stanza Analysis",
          notes: "Analyzed the contrast between the tiger in the zoo and the tiger in its natural habitat. Identified metaphors and personification.",
          teacherInstructions: "Read the poem aloud at home to understand the rhythm."
        },
        {
          id: "rec_4",
          subject: "History",
          teacher: "Mr. V. Kumar",
          chapter: "Chapter 2: Nationalism in India",
          topic: "Non-Cooperation Movement",
          notes: "Discussed the causes and the events that led to the Non-Cooperation Movement.",
          teacherInstructions: "Memorize the timeline of events discussed in class."
        }
      ]
    },
    {
      id: "cw_2days",
      date: "Aug 13, 2024",
      dayOfWeek: "Tuesday",
      records: []
    }
  ]
};
