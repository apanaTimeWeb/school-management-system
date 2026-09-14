"use client";

import { Eye, Edit, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Teacher } from "../hr_teachers_types/AdminHrTeachersTypes";
import { AdminHrTeachersUrlConfig } from "../hr_teachers_url_config";

interface AdminHrTeachersTableProps {
  teachers: Teacher[];
}

export default function AdminHrTeachersTable({ teachers }: AdminHrTeachersTableProps) {
  const router = useRouter();

  if (teachers.length === 0) {
    return (
      <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
        <span className="text-muted-foreground text-sm font-medium">No teachers found.</span>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <span className="bg-success/10 text-success border border-success/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      case 'On Leave': return <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      case 'Inactive': return <span className="bg-danger/10 text-danger border border-danger/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{status}</span>;
      default: return <span className="bg-input text-foreground px-2.5 py-0.5 rounded-full text-xs font-bold">{status}</span>;
    }
  };

  return (
    <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
      <table className="w-full text-left border-collapse min-w-[900px]">
        <thead>
          <tr className="border-b border-border bg-input/50">
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Teacher Profile</th>
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Subjects & Dept</th>
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Class Teacher</th>
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
            <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold border border-purple-500/20 group-hover:scale-110 motion-safe:transition-transform shadow-sm">
                    {t.firstName[0]}{t.lastName[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{t.firstName} {t.lastName}</span>
                    <span className="text-xs text-muted-foreground font-medium">{t.teacherId}</span>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{t.subjects.join(', ')}</span>
                  <span className="text-xs text-muted-foreground">{t.department} Dept</span>
                </div>
              </td>
              <td className="p-4">
                {t.classTeacherOf ? (
                  <span className="inline-flex items-center justify-center px-2 py-1 bg-info/10 text-info font-bold text-xs rounded-md border border-info/20">
                    Class {t.classTeacherOf}
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground italic">—</span>
                )}
              </td>
              <td className="p-4">
                {getStatusBadge(t.status)}
              </td>
              <td className="p-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button 
                    onClick={() => router.push(AdminHrTeachersUrlConfig.routes.profile(t.id))}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-info bg-info/10 hover:bg-info hover:text-white rounded-md transition-all active:scale-95 shadow-sm"
                  >
                    <Eye size={14} /> Profile
                  </button>
                  <button 
                    onClick={() => alert(`Edit config for ${t.firstName}`)}
                    className="p-1.5 text-primary bg-primary/10 hover:bg-primary hover:text-white rounded-md transition-all active:scale-95 shadow-sm" title="Edit Teacher"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => alert(`Suspend teacher ${t.firstName}?`)}
                    className="p-1.5 text-danger bg-danger/10 hover:bg-danger hover:text-white rounded-md transition-all active:scale-95 shadow-sm" title="Suspend Teacher"
                  >
                    <ShieldAlert size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
