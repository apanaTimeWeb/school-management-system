import type { StudentAssignmentsData } from '../student_assignments_types/student_assignments_types';

export const MOCK_ASSIGNMENTS_DATA: StudentAssignmentsData = {
  assignments: [
    {
      id: "asn_1",
      subject: "Science",
      title: "Science Fair Proposal",
      instructions: "Upload a detailed 2-page PDF proposal for your science fair project. Include hypothesis, materials required, and estimated timeline.",
      assignedDate: "Aug 10, 2024",
      dueDate: "Aug 20, 2024",
      status: "Pending",
      allowResubmission: true,
      attachments: [
        { id: "att_1", fileName: "Project_Guidelines.pdf", fileSize: "1.5 MB", url: "#" }
      ],
      submissionHistory: []
    },
    {
      id: "asn_2",
      subject: "English",
      title: "Book Review: The Great Gatsby",
      instructions: "Submit your final draft of the book review. Make sure to follow MLA formatting guidelines.",
      assignedDate: "Jul 25, 2024",
      dueDate: "Aug 02, 2024",
      status: "Graded",
      allowResubmission: false,
      attachments: [],
      marks: "9/10",
      teacherFeedback: "Excellent analysis of the green light symbol. Well structured.",
      submissionHistory: [
        { id: "sub_1", submittedAt: "Aug 01, 2024 - 10:30 AM", fileName: "Review_Draft1.pdf", fileUrl: "#", status: "Rejected", teacherComment: "Formatting is incorrect. Please fix and resubmit." },
        { id: "sub_2", submittedAt: "Aug 02, 2024 - 09:15 AM", fileName: "Review_Final.pdf", fileUrl: "#", status: "Accepted" }
      ]
    },
    {
      id: "asn_3",
      subject: "Mathematics",
      title: "Trigonometry Assignment 2",
      instructions: "Solve all problems in the attached worksheet and upload the scanned copy.",
      assignedDate: "Aug 05, 2024",
      dueDate: "Aug 10, 2024",
      status: "Overdue",
      allowResubmission: true,
      attachments: [
        { id: "att_2", fileName: "Trig_Worksheet.pdf", fileSize: "800 KB", url: "#" }
      ],
      submissionHistory: []
    },
    {
      id: "asn_4",
      subject: "History",
      title: "World War II Timeline",
      instructions: "Create a digital timeline of major WWII events and upload as a PDF or Image.",
      assignedDate: "Aug 12, 2024",
      dueDate: "Aug 25, 2024",
      status: "Submitted",
      allowResubmission: true,
      attachments: [],
      submissionHistory: [
        { id: "sub_3", submittedAt: "Yesterday - 04:20 PM", fileName: "WW2_Timeline.pdf", fileUrl: "#", status: "Pending Review" }
      ]
    }
  ]
};
