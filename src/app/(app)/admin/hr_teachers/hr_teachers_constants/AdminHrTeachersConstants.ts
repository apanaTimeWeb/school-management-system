import type { Teacher } from "../hr_teachers_types/AdminHrTeachersTypes";

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: "tch-1",
    teacherId: "TCH-2023-01",
    firstName: "Arun",
    lastName: "Sharma",
    email: "arun.s@school.com",
    phone: "9876543210",
    status: "Active",
    
    department: "Mathematics",
    qualification: "M.Sc Mathematics, B.Ed",
    experienceYears: 12,
    
    subjects: ["Mathematics", "Physics"],
    classes: ["Class 9", "Class 10", "Class 11"],
    sections: ["A", "B", "C"],
    classTeacherOf: "10-A",
    
    periodsPerWeek: 32,
    maxPeriods: 40,
    
    attendancePercentage: 98.5,
    leavesTaken: 3,
    leavesPending: 0,
    
    documents: [
      { id: "d1", name: "Degree_Certificate.pdf", type: "Academic", uploadDate: "2023-01-10" },
      { id: "d2", name: "ID_Proof.pdf", type: "Personal", uploadDate: "2023-01-10" }
    ]
  },
  {
    id: "tch-2",
    teacherId: "TCH-2023-02",
    firstName: "Meera",
    lastName: "Nair",
    email: "meera.n@school.com",
    phone: "9123456789",
    status: "On Leave",
    
    department: "Science",
    qualification: "M.Sc Chemistry, Ph.D",
    experienceYears: 8,
    
    subjects: ["Chemistry", "Biology"],
    classes: ["Class 11", "Class 12"],
    sections: ["A"],
    classTeacherOf: null,
    
    periodsPerWeek: 28,
    maxPeriods: 40,
    
    attendancePercentage: 92.0,
    leavesTaken: 12,
    leavesPending: 2,
    
    documents: [
      { id: "d3", name: "PhD_Thesis_Abstract.pdf", type: "Academic", uploadDate: "2023-03-15" }
    ]
  },
  {
    id: "tch-3",
    teacherId: "TCH-2023-03",
    firstName: "Vikram",
    lastName: "Singh",
    email: "vikram.s@school.com",
    phone: "9988776655",
    status: "Active",
    
    department: "Humanities",
    qualification: "M.A History, B.Ed",
    experienceYears: 15,
    
    subjects: ["History", "Civics"],
    classes: ["Class 8", "Class 9", "Class 10"],
    sections: ["A", "B", "D"],
    classTeacherOf: "9-B",
    
    periodsPerWeek: 36,
    maxPeriods: 40,
    
    attendancePercentage: 100,
    leavesTaken: 0,
    leavesPending: 0,
    
    documents: []
  }
];
