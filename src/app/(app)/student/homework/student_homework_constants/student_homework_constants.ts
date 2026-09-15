import type { StudentHomeworkData } from '../student_homework_types/student_homework_types';

export const MOCK_HOMEWORK_DATA: StudentHomeworkData = {
  homeworks: [
    {
      id: "hw_1",
      subject: "Mathematics",
      teacher: "Mr. R.K. Singh",
      title: "Algebra Exercise 4.2",
      description: "Complete all odd-numbered questions from Exercise 4.2 in the textbook. Ensure you show all steps clearly.",
      assignedDate: "Aug 12, 2024",
      dueDate: "Tomorrow, 08:00 AM",
      status: "Pending",
      attachments: [
        { id: "att_1", fileName: "Algebra_Formulas.pdf", fileSize: "1.2 MB", fileType: "pdf", url: "#" }
      ]
    },
    {
      id: "hw_2",
      subject: "Science",
      teacher: "Mrs. N. Patel",
      title: "Physics Lab Report",
      description: "Write down the observations and conclusion for the 'Reflection of Light' experiment conducted in today's lab.",
      assignedDate: "Aug 10, 2024",
      dueDate: "Aug 15, 2024",
      status: "Pending",
      attachments: []
    },
    {
      id: "hw_3",
      subject: "English",
      teacher: "Ms. S. Gupta",
      title: "Essay on Climate Change",
      description: "Write a 500-word essay on the impact of climate change on coastal cities.",
      assignedDate: "Aug 05, 2024",
      dueDate: "Aug 08, 2024",
      status: "Completed",
      attachments: [
        { id: "att_2", fileName: "Reference_Material.doc", fileSize: "800 KB", fileType: "doc", url: "#" }
      ],
      marks: "8.5/10",
      teacherRemarks: "Good vocabulary used. Structure can be slightly improved."
    },
    {
      id: "hw_4",
      subject: "History",
      teacher: "Mr. V. Kumar",
      title: "Map Work: Harappan Civilization",
      description: "Mark the major Harappan sites on the outline map of India.",
      assignedDate: "Aug 01, 2024",
      dueDate: "Aug 03, 2024",
      status: "Overdue",
      attachments: [
        { id: "att_3", fileName: "Blank_Map.jpg", fileSize: "2.1 MB", fileType: "image", url: "#" }
      ]
    }
  ]
};
