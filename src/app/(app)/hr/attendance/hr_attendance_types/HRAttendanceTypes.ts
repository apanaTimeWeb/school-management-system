export type HRAttendanceRecord = {
  id: string;
  employeeId: string;
  name: string;
  role: 'Teacher' | 'Admin' | 'Support';
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Half Day' | 'Late';
  shift: string;
};
