"use client";

import type { MonthlyAttendanceRecord, AttendanceStatus } from "../hr_staff_attendance_types/AdminHrStaffAttendanceTypes";

interface AdminHrStaffAttendanceMonthlyProps {
  records: MonthlyAttendanceRecord[];
  openCorrection: (empId: string, name: string, day: number) => void;
}

export default function AdminHrStaffAttendanceMonthly({ records, openCorrection }: AdminHrStaffAttendanceMonthlyProps) {
  
  const getCellColor = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present': return 'bg-success/20 text-success border border-success/30 font-bold';
      case 'Absent': return 'bg-danger/20 text-danger border border-danger/30 font-bold';
      case 'Late': return 'bg-warning/20 text-warning border border-warning/30 font-bold';
      case 'Half Day': return 'bg-info/20 text-info border border-info/30 font-bold';
      case 'Leave': return 'bg-purple-500/20 text-purple-500 border border-purple-500/30 font-bold';
      default: return 'bg-input text-muted-foreground/30 font-bold';
    }
  };

  const getLetter = (status: AttendanceStatus) => {
    switch (status) {
      case 'Present': return 'P';
      case 'Absent': return 'A';
      case 'Late': return 'L';
      case 'Half Day': return 'H';
      case 'Leave': return 'V';
      default: return '-';
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="border-b border-border bg-input/50">
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider sticky left-0 bg-input/50 z-10 w-48 border-r border-border">Employee</th>
              {Array.from({length: 30}, (_, i) => i + 1).map(day => (
                <th key={day} className="p-2 text-[10px] font-bold text-muted-foreground text-center border-r border-border/50 min-w-[32px]">{day}</th>
              ))}
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase text-center bg-input/50 border-l border-border sticky right-0">Stats</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <tr key={record.employeeId} className="border-b border-border hover:bg-primary/5 transition-colors">
                <td className="p-4 sticky left-0 bg-card z-10 border-r border-border">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground truncate">{record.name}</span>
                    <span className="text-xs font-medium text-muted-foreground">{record.employeeId}</span>
                  </div>
                </td>
                
                {Array.from({length: 30}, (_, i) => i + 1).map(day => (
                  <td key={day} className="p-1 border-r border-border/50 text-center">
                    <button 
                      onClick={() => openCorrection(record.employeeId, record.name, day)}
                      title={`Click to correct Day ${day}`}
                      className={`w-6 h-6 rounded flex items-center justify-center text-[10px] transition-transform hover:scale-110 active:scale-95 cursor-pointer mx-auto ${getCellColor(record.days[day])}`}
                    >
                      {getLetter(record.days[day])}
                    </button>
                  </td>
                ))}

                <td className="p-4 sticky right-0 bg-card border-l border-border min-w-[120px]">
                  <div className="flex gap-2 justify-center">
                    <span className="text-xs font-bold text-success" title="Present">{record.totalPresent}P</span>
                    <span className="text-xs font-bold text-danger" title="Absent">{record.totalAbsent}A</span>
                    <span className="text-xs font-bold text-warning" title="Late">{record.totalLate}L</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
