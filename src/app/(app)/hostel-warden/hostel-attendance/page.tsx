import React from 'react';
import HostelAttendanceMain from './attendance_components/HostelAttendanceMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hostel Attendance | Hostel Warden',
  description: 'Track daily attendance, biometric logs, and absentee alerts.',
};

export default function HostelAttendancePage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <HostelAttendanceMain />
    </div>
  );
}
