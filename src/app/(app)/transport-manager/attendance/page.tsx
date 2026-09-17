import React from 'react';
import TransportAttendanceMain from './transport_attendance_components/TransportAttendanceMain';
import { Metadata } from 'next';

// RESPONSIBILITY: Server component for Student Transport Attendance Route

export const metadata: Metadata = {
  title: 'Transport Attendance | Transport Manager',
  description: 'Track live boarding status, drop times, and handovers for every student on the transport route.',
};

export default function TransportAttendancePage() {
  return (
    <div className="w-full h-full min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <TransportAttendanceMain />
    </div>
  );
}
