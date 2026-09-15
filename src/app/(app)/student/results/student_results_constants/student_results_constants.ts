import type { StudentResultsData } from '../student_results_types/student_results_types';

export const MOCK_RESULTS_DATA: StudentResultsData = {
  results: [
    {
      id: "res_1",
      termName: "Mid Term Examination 2024-25",
      datePublished: "Oct 10, 2024",
      totalMaxMarks: 500,
      totalObtainedMarks: 425,
      percentage: 85.0,
      grade: "A",
      gpa: "8.5",
      rank: "5th",
      status: "Pass",
      teacherRemarks: "Excellent performance overall. Needs slightly more focus on Science practicals to achieve top rank.",
      subjects: [
        { id: "sub_1", subjectName: "Mathematics", maxMarks: 100, obtainedMarks: 95, grade: "A+" },
        { id: "sub_2", subjectName: "Science", maxMarks: 100, obtainedMarks: 78, grade: "B+", remarks: "Improvement needed in Physics." },
        { id: "sub_3", subjectName: "English", maxMarks: 100, obtainedMarks: 88, grade: "A" },
        { id: "sub_4", subjectName: "History & Civics", maxMarks: 100, obtainedMarks: 82, grade: "A" },
        { id: "sub_5", subjectName: "Hindi", maxMarks: 100, obtainedMarks: 82, grade: "A" },
      ]
    },
    {
      id: "res_2",
      termName: "Unit Test 1 (2024-25)",
      datePublished: "Aug 05, 2024",
      totalMaxMarks: 250,
      totalObtainedMarks: 210,
      percentage: 84.0,
      grade: "A",
      status: "Pass",
      teacherRemarks: "Good start to the academic year. Keep up the consistent effort.",
      subjects: [
        { id: "ut_1", subjectName: "Mathematics", maxMarks: 50, obtainedMarks: 48, grade: "A+" },
        { id: "ut_2", subjectName: "Science", maxMarks: 50, obtainedMarks: 38, grade: "B+" },
        { id: "ut_3", subjectName: "English", maxMarks: 50, obtainedMarks: 42, grade: "A" },
        { id: "ut_4", subjectName: "History & Civics", maxMarks: 50, obtainedMarks: 42, grade: "A" },
        { id: "ut_5", subjectName: "Hindi", maxMarks: 50, obtainedMarks: 40, grade: "A" },
      ]
    }
  ]
};
