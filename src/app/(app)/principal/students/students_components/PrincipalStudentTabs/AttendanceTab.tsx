import React from 'react';
import { PrincipalStudentAttendance } from '../../students_types/PrincipalStudents.types';
import { Calendar } from 'lucide-react';

interface AttendanceTabProps {
  records: PrincipalStudentAttendance[];
}

export default function AttendanceTab({ records }: AttendanceTabProps) {
  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-text-secondary bg-card border border-border rounded-lg">
        <Calendar size={40} className="mb-4 text-border" />
        <p>No attendance records found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Quick Stats based on latest record or aggregate - simulating latest for now */}
        <div className="bg-card border border-border p-4 rounded-lg text-center flex flex-col justify-center items-center">
          <p className="text-[12px] text-text-secondary uppercase tracking-wide mb-1">Average Attendance</p>
          <p className="text-[32px] font-bold text-success">
            {Math.round(records.reduce((acc, curr) => acc + curr.percentage, 0) / records.length)}%
          </p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg text-center flex flex-col justify-center items-center">
          <p className="text-[12px] text-text-secondary uppercase tracking-wide mb-1">Total Absences</p>
          <p className="text-[32px] font-bold text-danger">
            {records.reduce((acc, curr) => acc + curr.absentDays, 0)}
          </p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg text-center flex flex-col justify-center items-center">
          <p className="text-[12px] text-text-secondary uppercase tracking-wide mb-1">Total Late Arrivals</p>
          <p className="text-[32px] font-bold text-warning">
            {records.reduce((acc, curr) => acc + curr.lateDays, 0)}
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-4 border-b border-border bg-black/20">
          <h3 className="text-[15px] font-bold text-text-primary">Monthly Attendance Log</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                <th className="p-4">Month</th>
                <th className="p-4 text-center">Total Days</th>
                <th className="p-4 text-center text-success">Present</th>
                <th className="p-4 text-center text-danger">Absent</th>
                <th className="p-4 text-center text-warning">Late</th>
                <th className="p-4 text-right">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-[14px] font-medium text-text-primary">{record.month}</td>
                  <td className="p-4 text-[13px] text-center text-text-secondary">{record.totalDays}</td>
                  <td className="p-4 text-[14px] text-center font-bold text-success">{record.presentDays}</td>
                  <td className="p-4 text-[14px] text-center font-bold text-danger">{record.absentDays}</td>
                  <td className="p-4 text-[14px] text-center font-bold text-warning">{record.lateDays}</td>
                  <td className="p-4 text-[14px] text-right font-bold text-text-primary">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-24 h-2 bg-page rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${record.percentage >= 75 ? 'bg-success' : 'bg-danger'}`} 
                          style={{ width: `${record.percentage}%` }}
                        />
                      </div>
                      {record.percentage}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
