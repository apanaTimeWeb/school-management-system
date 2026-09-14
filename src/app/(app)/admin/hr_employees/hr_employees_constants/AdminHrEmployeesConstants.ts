import type { Employee } from "../hr_employees_types/AdminHrEmployeesTypes";

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: "uuid-1",
    employeeId: "EMP-001",
    status: "Active",
    personal: {
      firstName: "Amit",
      lastName: "Kumar",
      dob: "1990-05-15",
      gender: "Male",
      bloodGroup: "O+",
    },
    contact: {
      phone: "9876543210",
      email: "amit.kumar@school.com",
      address: "123, Model Town, Delhi",
      emergencyContactName: "Sumit Kumar",
      emergencyContactPhone: "9876543211",
    },
    joining: {
      joinDate: "2020-04-01",
      department: "Mathematics",
      designation: "Senior Teacher",
      employmentType: "Full-time",
      qualification: "M.Sc Mathematics, B.Ed",
      experienceYears: 8,
    },
    documents: [
      { id: "doc-1", name: "Aadhar Card.pdf", type: "ID Proof", uploadDate: "2020-04-01", url: "#" },
      { id: "doc-2", name: "Degree Certificate.pdf", type: "Qualification", uploadDate: "2020-04-01", url: "#" }
    ],
    bankDetails: {
      accountName: "Amit Kumar",
      accountNumber: "XXXX-XXXX-1234",
      bankName: "HDFC Bank",
      ifscCode: "HDFC0001234",
    },
    history: [
      { id: "hist-1", type: "Promotion", date: "2023-04-01", description: "Promoted to Senior Teacher." }
    ]
  },
  {
    id: "uuid-2",
    employeeId: "EMP-002",
    status: "On Leave",
    personal: {
      firstName: "Priya",
      lastName: "Sharma",
      dob: "1992-08-22",
      gender: "Female",
      bloodGroup: "B+",
    },
    contact: {
      phone: "9876500000",
      email: "priya.sharma@school.com",
      address: "45, Green Park, Delhi",
      emergencyContactName: "Rahul Sharma",
      emergencyContactPhone: "9876500001",
    },
    joining: {
      joinDate: "2021-07-15",
      department: "Science",
      designation: "Science Teacher",
      employmentType: "Full-time",
      qualification: "M.Sc Physics, B.Ed",
      experienceYears: 5,
    },
    documents: [
      { id: "doc-3", name: "Aadhar Card.pdf", type: "ID Proof", uploadDate: "2021-07-15", url: "#" }
    ],
    bankDetails: {
      accountName: "Priya Sharma",
      accountNumber: "XXXX-XXXX-5678",
      bankName: "ICICI Bank",
      ifscCode: "ICIC0005678",
    },
    history: []
  },
  {
    id: "uuid-3",
    employeeId: "EMP-003",
    status: "Exited",
    personal: {
      firstName: "Rajesh",
      lastName: "Singh",
      dob: "1985-11-10",
      gender: "Male",
      bloodGroup: "A+",
    },
    contact: {
      phone: "9123456780",
      email: "rajesh.singh@school.com",
      address: "88, Civil Lines, Delhi",
      emergencyContactName: "Sunita Singh",
      emergencyContactPhone: "9123456781",
    },
    joining: {
      joinDate: "2018-02-10",
      department: "Administration",
      designation: "Admin Officer",
      employmentType: "Full-time",
      qualification: "MBA",
      experienceYears: 12,
    },
    documents: [],
    history: [
      { id: "hist-2", type: "Resignation", date: "2024-01-15", description: "Resigned for better opportunities." },
      { id: "hist-3", type: "Exit", date: "2024-02-15", description: "Completed notice period and exited." }
    ]
  }
];
