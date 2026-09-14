import type { EmployeeSearchResult } from "../hr_search_types/HrSearchTypes";

export const MOCK_SEARCH_DATABASE: EmployeeSearchResult[] = [
  {
    id: "emp-1", employeeId: "EMP-001", name: "Amit Sharma", department: "Science", designation: "Senior Teacher",
    employmentType: "Full-Time", joiningDate: "2020-04-15", status: "Active", qualification: "M.Sc Physics",
    location: "Main Campus", documentStatus: "Verified", email: "amit.s@school.edu", phone: "+91 9876543210"
  },
  {
    id: "emp-2", employeeId: "EMP-002", name: "Neha Gupta", department: "Administration", designation: "HR Manager",
    employmentType: "Full-Time", joiningDate: "2021-08-01", status: "Active", qualification: "MBA HR",
    location: "Main Campus", documentStatus: "Verified", email: "neha.g@school.edu", phone: "+91 9876543211"
  },
  {
    id: "emp-3", employeeId: "EMP-003", name: "Rahul Verma", department: "Sports", designation: "PTI",
    employmentType: "Contract", joiningDate: "2023-01-10", status: "Active", qualification: "B.P.Ed",
    location: "North Branch", documentStatus: "Pending", email: "rahul.v@school.edu", phone: "+91 9876543212"
  },
  {
    id: "emp-4", employeeId: "EMP-004", name: "Sunita Rao", department: "Library", designation: "Librarian",
    employmentType: "Part-Time", joiningDate: "2019-11-20", status: "On Leave", qualification: "M.Lib",
    location: "Main Campus", documentStatus: "Expired", email: "sunita.r@school.edu", phone: "+91 9876543213"
  },
  {
    id: "emp-5", employeeId: "EMP-005", name: "Vikas Singh", department: "Security", designation: "Chief Guard",
    employmentType: "Full-Time", joiningDate: "2018-05-05", status: "Resigned", qualification: "12th Pass",
    location: "North Branch", documentStatus: "Verified", email: "vikas.s@school.edu", phone: "+91 9876543214"
  },
  {
    id: "emp-6", employeeId: "EMP-006", name: "Priya Das", department: "Mathematics", designation: "Teacher",
    employmentType: "Full-Time", joiningDate: "2024-02-15", status: "Active", qualification: "M.Sc Math",
    location: "South Branch", documentStatus: "Pending", email: "priya.d@school.edu", phone: "+91 9876543215"
  }
];

