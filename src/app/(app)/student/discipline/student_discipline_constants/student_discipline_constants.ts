import type { StudentDisciplineData } from '../student_discipline_types/student_discipline_types';

export const MOCK_DISCIPLINE_DATA: StudentDisciplineData = {
  remarks: [
    {
      id: "rem_1",
      date: "Oct 12, 2024",
      teacherName: "Mr. Sharma (Maths)",
      type: "Positive",
      remark: "Excellent participation in class discussions and helping peers."
    },
    {
      id: "rem_2",
      date: "Sep 25, 2024",
      teacherName: "Mrs. Gupta (English)",
      type: "Improvement Needed",
      remark: "Needs to focus more during lectures instead of talking to benchmates."
    }
  ],
  warnings: [
    {
      id: "warn_1",
      date: "Aug 10, 2024",
      incidentType: "Late Arrival",
      description: "Arrived late to school for the 3rd consecutive day.",
      actionTaken: "Verbal Warning & Note in Diary",
      status: "Resolved"
    }
  ],
  counselling: [
    {
      id: "coun_1",
      date: "Sep 15, 2024",
      counsellorName: "Dr. Anjali (School Counsellor)",
      topic: "Time Management and Study Stress",
      nextSessionDate: "Oct 20, 2024"
    }
  ]
};
