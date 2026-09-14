import type { IdCardEmployeeRecord } from "../hr_id_cards_types/HrIdCardsTypes";

export const MOCK_IDCARD_RECORDS: IdCardEmployeeRecord[] = [
  {
    id: "emp-1", employeeId: "EMP-045", employeeName: "Priya Sharma", designation: "Teacher", department: "Science", role: "Teacher",
    bloodGroup: "O+", emergencyContact: "+91 98765 43210", dateOfJoining: "2021-04-01", idCardPrinted: true
  },
  {
    id: "emp-2", employeeId: "EMP-012", employeeName: "Sunita Rao", designation: "Senior Teacher", department: "Mathematics", role: "Teacher",
    bloodGroup: "B+", emergencyContact: "+91 87654 32109", dateOfJoining: "2018-06-15", idCardPrinted: true
  },
  {
    id: "emp-3", employeeId: "EMP-088", employeeName: "Rakesh Singh", designation: "HR Exec", department: "Administration", role: "Staff",
    bloodGroup: "A-", emergencyContact: "+91 76543 21098", dateOfJoining: "2023-01-10", idCardPrinted: false
  },
  {
    id: "emp-4", employeeId: "EMP-092", employeeName: "Amit Kumar", designation: "Security Head", department: "Security", role: "Staff",
    bloodGroup: "O-", emergencyContact: "+91 65432 10987", dateOfJoining: "2022-09-01", idCardPrinted: false
  },
  {
    id: "emp-5", employeeId: "EMP-001", employeeName: "Dr. Anil Verma", designation: "Principal", department: "Management", role: "Admin",
    bloodGroup: "AB+", emergencyContact: "+91 99999 88888", dateOfJoining: "2015-05-01", idCardPrinted: true
  }
];

