import React from 'react';
import TransportStaffAttendanceMain from './transport_staff_attendance_components/TransportStaffAttendanceMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Transport Staff Attendance Route

export const metadata: Metadata = {
  title: 'Staff Attendance | Transport Manager',
  description: 'Manage daily check-ins, shifts, and leaves for Transport Drivers and Conductors.',
};

export default function TransportStaffAttendancePage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportStaffAttendanceMain />
    </div>
  );
}
