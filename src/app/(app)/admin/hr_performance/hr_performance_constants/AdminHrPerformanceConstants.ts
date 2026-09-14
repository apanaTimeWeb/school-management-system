import type { EmployeePerformanceRecord } from "../hr_performance_types/AdminHrPerformanceTypes";

export const MOCK_PERFORMANCE_RECORDS: EmployeePerformanceRecord[] = [
  {
    id: "perf-1", employeeId: "EMP-045", employeeName: "Priya Sharma", designation: "Teacher", department: "Science",
    cycle: "FY 2024-25 Mid Year", status: "Draft",
    goals: [
      { id: "g-1", description: "Improve Class Average in Science by 10%", weightage: 40, achieved: 0 },
      { id: "g-2", description: "Organize Annual Science Fair", weightage: 30, achieved: 0 },
      { id: "g-3", description: "100% attendance & punctuality", weightage: 30, achieved: 0 }
    ],
    overallRating: 0, managerRemarks: "", hrReview: "", promotionRecommended: false
  },
  {
    id: "perf-2", employeeId: "EMP-088", employeeName: "Rakesh Singh", designation: "HR Exec", department: "Administration",
    cycle: "FY 2024-25 Mid Year", status: "In Review",
    goals: [
      { id: "g-4", description: "Reduce Hiring Turnaround Time by 5 days", weightage: 50, achieved: 40 },
      { id: "g-5", description: "Digitize 100% of employee records", weightage: 50, achieved: 45 }
    ],
    overallRating: 4, managerRemarks: "Rakesh has shown excellent initiative in digitization.", hrReview: "", promotionRecommended: false
  },
  {
    id: "perf-3", employeeId: "EMP-012", employeeName: "Sunita Rao", designation: "Senior Teacher", department: "Mathematics",
    cycle: "FY 2023-24 Annual", status: "Completed",
    goals: [
      { id: "g-6", description: "Mentorship of 3 Junior Teachers", weightage: 50, achieved: 50 },
      { id: "g-7", description: "Develop advanced Math curriculum", weightage: 50, achieved: 50 }
    ],
    overallRating: 5, 
    managerRemarks: "Exceptional performance across the board.", 
    hrReview: "Approved for promotion to HOD.", 
    promotionRecommended: true,
    completedDate: "2024-03-31"
  }
];
