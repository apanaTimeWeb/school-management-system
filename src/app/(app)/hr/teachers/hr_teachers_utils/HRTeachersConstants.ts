import { HRTeacher } from '../hr_teachers_types/HRTeachersTypes';

export const MOCK_HR_TEACHERS: HRTeacher[] = [
  {
    id: "TCH-001",
    teacherId: "T101",
    name: "Dr. Ananya Sharma",
    qualification: "Ph.D. in Mathematics",
    subjects: ["Mathematics", "Physics"],
    email: "ananya@school.edu",
    phone: "+91 9876543220",
    dateOfJoin: "2015-06-10",
    status: "Active",
    salary: 85000
  },
  {
    id: "TCH-002",
    teacherId: "T102",
    name: "Mr. Rahul Verma",
    qualification: "M.A. English, B.Ed",
    subjects: ["English", "Social Studies"],
    email: "rahul@school.edu",
    phone: "+91 9876543221",
    dateOfJoin: "2018-04-15",
    status: "Active",
    salary: 65000
  },
  {
    id: "TCH-003",
    teacherId: "T103",
    name: "Ms. Priya Singh",
    qualification: "M.Sc. Chemistry",
    subjects: ["Chemistry", "Biology"],
    email: "priya@school.edu",
    phone: "+91 9876543222",
    dateOfJoin: "2020-07-01",
    status: "On Leave",
    salary: 60000
  },
  {
    id: "TCH-004",
    teacherId: "T104",
    name: "Mr. Vikram Patel",
    qualification: "B.Tech Computer Science",
    subjects: ["Computer Science"],
    email: "vikram@school.edu",
    phone: "+91 9876543223",
    dateOfJoin: "2021-02-20",
    status: "Active",
    salary: 70000
  }
];
