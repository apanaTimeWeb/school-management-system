import { HREmployee } from '../hr_employees_types/HREmployeesTypes';

export const MOCK_HR_EMPLOYEES: HREmployee[] = [
  {
    id: "EMP-001",
    employeeId: "E101",
    name: "Ramesh Kumar",
    designation: "Security Head",
    department: "Administration",
    email: "ramesh@school.edu",
    phone: "+91 9876543210",
    dateOfJoin: "2020-05-12",
    status: "Active",
    salary: 45000
  },
  {
    id: "EMP-002",
    employeeId: "E102",
    name: "Sita Verma",
    designation: "Clerk",
    department: "Office",
    email: "sita@school.edu",
    phone: "+91 9876543211",
    dateOfJoin: "2021-08-20",
    status: "Active",
    salary: 25000
  },
  {
    id: "EMP-003",
    employeeId: "E103",
    name: "Vijay Singh",
    designation: "Lab Assistant",
    department: "Science",
    email: "vijay@school.edu",
    phone: "+91 9876543212",
    dateOfJoin: "2019-11-05",
    status: "On Leave",
    salary: 30000
  },
  {
    id: "EMP-004",
    employeeId: "E104",
    name: "Amit Patel",
    designation: "System Admin",
    department: "IT",
    email: "amit@school.edu",
    phone: "+91 9876543213",
    dateOfJoin: "2022-01-15",
    status: "Active",
    salary: 55000
  }
];
