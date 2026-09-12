import { CalendarCheck } from "lucide-react";

export default function AttendanceSummary() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
        <CalendarCheck size={18} className="text-info" />
        Today's Attendance
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-border rounded-md p-3 text-center bg-bg-page">
          <span className="block text-xs text-text-secondary uppercase mb-1">Students</span>
          <span className="text-lg font-bold text-text-primary">92%</span>
        </div>
        <div className="border border-border rounded-md p-3 text-center bg-bg-page">
          <span className="block text-xs text-text-secondary uppercase mb-1">Teachers</span>
          <span className="text-lg font-bold text-text-primary">98%</span>
        </div>
        <div className="border border-border rounded-md p-3 text-center bg-bg-page">
          <span className="block text-xs text-text-secondary uppercase mb-1">Support Staff</span>
          <span className="text-lg font-bold text-text-primary">95%</span>
        </div>
        <div className="border border-border rounded-md p-3 text-center bg-danger-bg">
          <span className="block text-xs text-danger uppercase mb-1">Absentees</span>
          <span className="text-lg font-bold text-danger">245</span>
        </div>
      </div>
    </div>
  );
}
