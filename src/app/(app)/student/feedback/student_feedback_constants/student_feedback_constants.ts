import type { StudentFeedbackData } from '../student_feedback_types/student_feedback_types';

export const MOCK_FEEDBACK_DATA: StudentFeedbackData = {
  allowAnonymous: true,
  teachersList: ["Mr. Sharma (Maths)", "Mrs. Gupta (English)", "Mr. Verma (Science)"],
  coursesList: ["Mathematics 101", "Advanced English", "Physics Practical"],
  history: [
    {
      id: "fb_1",
      category: "Complaint/Grievance",
      date: "Oct 10, 2024",
      rating: 0, // Ratings might not apply to complaints
      isAnonymous: false,
      comments: "The water cooler on the 2nd floor has not been working for 3 days.",
      status: "Resolved",
      adminReply: "Thank you for letting us know. The maintenance team has fixed it."
    },
    {
      id: "fb_2",
      category: "Teacher Feedback",
      date: "Sep 20, 2024",
      rating: 5,
      isAnonymous: true,
      comments: "Mrs. Gupta's English classes are extremely engaging and helpful.",
      status: "Reviewed"
    }
  ]
};
