import type { StudentStudyMaterialData } from '../student_study_material_types/student_study_material_types';

export const MOCK_STUDY_MATERIAL_DATA: StudentStudyMaterialData = {
  subjects: [
    {
      id: "sub_1",
      name: "Mathematics",
      teacherName: "Mr. R.K. Singh",
      chapters: [
        { id: "ch_1_1", chapterNumber: 1, title: "Real Numbers" },
        { id: "ch_1_2", chapterNumber: 2, title: "Polynomials" },
        { id: "ch_1_8", chapterNumber: 8, title: "Introduction to Trigonometry" },
      ]
    },
    {
      id: "sub_2",
      name: "Science",
      teacherName: "Mrs. N. Patel",
      chapters: [
        { id: "ch_2_10", chapterNumber: 10, title: "Light - Reflection and Refraction" },
        { id: "ch_2_11", chapterNumber: 11, title: "Human Eye and Colourful World" },
      ]
    }
  ],
  materials: [
    {
      id: "mat_1",
      subjectId: "sub_1",
      chapterId: "ch_1_8",
      title: "Trigonometry Basic Formulas",
      description: "A comprehensive cheat sheet for all basic trigonometric ratios and identities.",
      type: "PDF",
      url: "#",
      fileSize: "2.5 MB",
      uploadDate: "Aug 12, 2024",
      uploadedBy: "Mr. R.K. Singh"
    },
    {
      id: "mat_2",
      subjectId: "sub_1",
      chapterId: "ch_1_8",
      title: "Solving Complex Trig Equations",
      description: "Video lecture covering advanced problems from Exercise 8.4.",
      type: "Video",
      url: "https://youtube.com/watch?v=example",
      uploadDate: "Aug 14, 2024",
      uploadedBy: "Mr. R.K. Singh"
    },
    {
      id: "mat_3",
      subjectId: "sub_2",
      chapterId: "ch_2_10",
      title: "Ray Diagrams Rules",
      description: "Summary notes on drawing ray diagrams for spherical mirrors and lenses.",
      type: "Notes",
      url: "#",
      fileSize: "1.1 MB",
      uploadDate: "Aug 10, 2024",
      uploadedBy: "Mrs. N. Patel"
    },
    {
      id: "mat_4",
      subjectId: "sub_2",
      chapterId: "ch_2_10",
      title: "Virtual Physics Lab Simulator",
      description: "External link to an interactive simulation for light refraction.",
      type: "Link",
      url: "https://phet.colorado.edu",
      uploadDate: "Aug 05, 2024",
      uploadedBy: "Mrs. N. Patel"
    },
    {
      id: "mat_5",
      subjectId: "sub_1",
      chapterId: "ch_1_2",
      title: "Polynomials Question Bank",
      description: "Important previous year board questions with solutions.",
      type: "Document",
      url: "#",
      fileSize: "5.4 MB",
      uploadDate: "Jul 25, 2024",
      uploadedBy: "Mr. R.K. Singh"
    }
  ]
};
