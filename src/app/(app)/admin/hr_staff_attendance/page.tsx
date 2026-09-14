import AdminHrStaffAttendanceMain from "./hr_staff_attendance_components/AdminHrStaffAttendanceMain";

export const metadata = {
  title: "Staff Attendance | Smart Gym 360",
  description: "Manage daily and monthly staff attendance records.",
};

export default function AdminHrStaffAttendancePage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Staff Attendance</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Mark daily attendance, sync biometric data, and correct records.</p>
      </div>
      <AdminHrStaffAttendanceMain />
    </main>
  );
}
