import { HRAttendanceRecord } from '../hr_attendance_types/HRAttendanceTypes';

export const MOCK_HR_ATTENDANCE: HRAttendanceRecord[] = [
  {
    id: "ATT-001",
    employeeId: "T101",
    name: "Dr. Ananya Sharma",
    role: "Teacher",
    date: new Date().toISOString().split('T')[0],
    checkIn: "07:45 AM",
    checkOut: "03:30 PM",
    status: "Present",
    shift: "Morning (8 AM - 3 PM)"
  },
  {
    id: "ATT-002",
    employeeId: "E101",
    name: "Ramesh Kumar",
    role: "Admin",
    date: new Date().toISOString().split('T')[0],
    checkIn: "08:15 AM",
    checkOut: "-",
    status: "Late",
    shift: "Morning (8 AM - 4 PM)"
  },
  {
    id: "ATT-003",
    employeeId: "E103",
    name: "Vijay Singh",
    role: "Support",
    date: new Date().toISOString().split('T')[0],
    checkIn: "-",
    checkOut: "-",
    status: "Absent",
    shift: "Morning (8 AM - 4 PM)"
  },
  {
    id: "ATT-004",
    employeeId: "T102",
    name: "Mr. Rahul Verma",
    role: "Teacher",
    date: new Date().toISOString().split('T')[0],
    checkIn: "07:50 AM",
    checkOut: "12:00 PM",
    status: "Half Day",
    shift: "Morning (8 AM - 3 PM)"
  }
];
