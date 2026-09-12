"use client";

import { useState } from "react";
import { Receipt, History, User, Calendar, Clock, Filter, Search } from "lucide-react";

export default function SuperAdminConfigurationChangeHistoryConfig() {
  const [search, setSearch] = useState("");

  const historyLogs = [
    { id: 1, setting: 'Fee Receipt Prefix', old: 'SCH/FEE/', new: 'SCHOOL/FEE/', by: 'Super Admin', date: '12 Sep 2026', time: '14:30:12 IST' },
    { id: 2, setting: 'Maintenance Mode', old: 'OFF', new: 'ON', by: 'System Admin', date: '10 Sep 2026', time: '22:15:00 IST' },
    { id: 3, setting: 'Stripe Secret Key', old: 'sk_live_...98x', new: 'sk_live_...54y', by: 'Super Admin', date: '05 Sep 2026', time: '09:10:45 IST' },
    { id: 4, setting: 'Student Login Policy', old: 'Email Only', new: 'Email or Mobile OTP', by: 'Super Admin', date: '01 Sep 2026', time: '11:45:22 IST' },
    { id: 5, setting: 'Hostel Module', old: 'Enabled', new: 'Disabled', by: 'Super Admin', date: '25 Aug 2026', time: '16:20:00 IST' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <Receipt size={16} /> Configuration Change History
      </div>

      <div className="p-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-text-primary uppercase">System Settings Audit Trail</h3>
            <span className="text-xs text-text-secondary">Track every configuration change made by Super Admins.</span>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input 
                type="text" 
                placeholder="Search settings..." 
                className="w-full bg-bg-page border border-border rounded-md pl-9 pr-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none"
              />
            </div>
            <button className="p-1.5 bg-bg-page border border-border rounded-md text-text-secondary hover:text-primary transition-colors">
              <Filter size={16} />
            </button>
          </div>
        </div>

        <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden">
          <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
            <tr>
              <th className="px-4 py-3 border-b border-border">Setting Changed</th>
              <th className="px-4 py-3 border-b border-border">Old Value</th>
              <th className="px-4 py-3 border-b border-border">New Value</th>
              <th className="px-4 py-3 border-b border-border">Changed By</th>
              <th className="px-4 py-3 border-b border-border">Date & Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {historyLogs.map((log) => (
              <tr key={log.id} className="hover:bg-bg-page group transition-colors">
                <td className="px-4 py-3">
                  <span className="text-xs font-bold text-text-primary">{log.setting}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[11px] font-mono bg-danger-bg text-danger px-2 py-0.5 rounded line-through opacity-70">
                    {log.old}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-[11px] font-mono bg-success-bg text-success px-2 py-0.5 rounded font-bold">
                    {log.new}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs flex items-center gap-1.5 text-text-secondary group-hover:text-primary transition-colors">
                    <User size={12} /> {log.by}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-text-primary flex items-center gap-1.5"><Calendar size={10} className="text-text-secondary"/> {log.date}</span>
                    <span className="text-[10px] text-text-secondary flex items-center gap-1.5"><Clock size={10}/> {log.time}</span>
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
