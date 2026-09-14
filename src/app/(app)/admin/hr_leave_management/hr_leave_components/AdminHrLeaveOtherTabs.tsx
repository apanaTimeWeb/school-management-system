"use client";

import type { LeaveBalance, LeaveType, Holiday } from "../hr_leave_types/AdminHrLeaveTypes";

export function AdminHrLeaveBalances({ balances }: { balances: LeaveBalance[] }) {
  if (balances.length === 0) return <div className="p-12 text-center text-muted-foreground font-bold bg-card border border-border rounded-lg border-dashed">No balances found.</div>;

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {balances.map(b => (
        <div key={b.employeeId} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors">
          <div className="mb-4 pb-4 border-b border-border">
            <h3 className="text-lg font-bold text-foreground">{b.employeeName}</h3>
            <p className="text-xs font-bold text-muted-foreground">{b.employeeId} • {b.employeeType}</p>
          </div>
          <div className="space-y-3">
            {b.balances.map(bal => (
              <div key={bal.type} className="flex justify-between items-center text-sm">
                <span className="font-bold text-foreground">{bal.type}</span>
                <div className="flex gap-3 text-xs font-bold text-muted-foreground">
                  <span className="text-danger" title="Used Leaves">{bal.used} Used</span>
                  <span className="text-success" title="Available Leaves">{bal.available} Left</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdminHrLeaveTypes({ types }: { types: LeaveType[] }) {
  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300 grid grid-cols-1 md:grid-cols-2 gap-6">
      {types.map(t => (
        <div key={t.id} className="bg-card border border-border rounded-xl p-5 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-2 bg-primary"></div>
          <h3 className="text-lg font-bold text-foreground mb-1">{t.name}</h3>
          <p className="text-sm font-medium text-muted-foreground mb-4">{t.description}</p>
          <div className="flex gap-4">
            <div className="bg-input/50 px-3 py-2 rounded-md">
              <p className="text-xs font-bold text-muted-foreground uppercase">Allowance</p>
              <p className="text-sm font-bold text-primary">{t.totalDaysAllowed} Days</p>
            </div>
            <div className="bg-input/50 px-3 py-2 rounded-md">
              <p className="text-xs font-bold text-muted-foreground uppercase">Carry Forward</p>
              <p className="text-sm font-bold text-foreground">{t.carryForward ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdminHrLeaveHolidayCalendar({ holidays }: { holidays: Holiday[] }) {
  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300 bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-border bg-input/50">
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Date & Day</th>
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Holiday Name</th>
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Type</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map(h => (
            <tr key={h.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
              <td className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">{h.date}</span>
                  <span className="text-xs font-medium text-muted-foreground">{h.dayOfWeek}</span>
                </div>
              </td>
              <td className="p-4 text-sm font-bold text-foreground group-hover:text-primary transition-colors">{h.name}</td>
              <td className="p-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  h.type === 'National' ? 'bg-purple-500/10 text-purple-500' :
                  h.type === 'State' ? 'bg-info/10 text-info' : 'bg-success/10 text-success'
                }`}>
                  {h.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
