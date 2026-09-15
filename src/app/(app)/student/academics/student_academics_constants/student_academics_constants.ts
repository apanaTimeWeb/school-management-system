import type { StudentAcademicsData } from '../student_academics_types/student_academics_types';

export const MOCK_ACADEMICS_DATA: StudentAcademicsData = {
  currentClass: "10th",
  section: "A",
  academicSession: "2024-2025",
  subjects: [
    { id: "sub_1", name: "Mathematics", teacherName: "Mr. R.K. Singh", curriculumCode: "CBSE-MATH-10", totalChapters: 15, completedChapters: 8 },
    { id: "sub_2", name: "Science", teacherName: "Mrs. N. Patel", curriculumCode: "CBSE-SCI-10", totalChapters: 16, completedChapters: 10 },
    { id: "sub_3", name: "English", teacherName: "Ms. S. Gupta", curriculumCode: "CBSE-ENG-10", totalChapters: 12, completedChapters: 5 },
    { id: "sub_4", name: "Social Science", teacherName: "Mr. V. Kumar", curriculumCode: "CBSE-SST-10", totalChapters: 20, completedChapters: 9 },
  ],
  syllabus: [
    { id: "ch_1", subjectId: "sub_1", chapterNumber: 8, title: "Introduction to Trigonometry", status: "in_progress", lastUpdated: "Today" },
    { id: "ch_2", subjectId: "sub_2", chapterNumber: 10, title: "Light - Reflection and Refraction", status: "completed", lastUpdated: "2 days ago" },
    { id: "ch_3", subjectId: "sub_3", chapterNumber: 6, title: "The Making of a Scientist", status: "not_started", lastUpdated: "N/A" },
    { id: "ch_4", subjectId: "sub_1", chapterNumber: 7, title: "Coordinate Geometry", status: "completed", lastUpdated: "Last week" },
  ],
  academicHistory: [
    { id: "yr_1", academicYear: "2023-2024", class: "9th", overallGrade: "A", percentage: 89.5, status: "Promoted" },
    { id: "yr_2", academicYear: "2022-2023", class: "8th", overallGrade: "A+", percentage: 92.0, status: "Pass" },
    { id: "yr_3", academicYear: "2021-2022", class: "7th", overallGrade: "A", percentage: 88.0, status: "Pass" },
  ]
};
