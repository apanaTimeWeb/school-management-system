"use client";
import React from "react";
import { Edit, Eye, Phone, Mail } from "lucide-react";
import { useHRTeachersStore } from "../hr_teachers_store/useHRTeachersStore";
import clsx from "clsx";

export default function HRTeachersTable() {
  const { teachers, searchQuery, subjectFilter, statusFilter, setViewModalOpen, setSelectedTeacher } = useHRTeachersStore();

  const filteredTeachers = teachers.filter(tch => {
    const matchesSearch = tch.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tch.teacherId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tch.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = subjectFilter === "All" || tch.subjects.includes(subjectFilter);
    const matchesStatus = statusFilter === "All" || tch.status === statusFilter;
    
    return matchesSearch && matchesSubject && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'On Leave': return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Resigned': return 'text-rose-700 bg-rose-50 border-rose-200';
      default: return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const handleView = (tch: any) => {
    setSelectedTeacher(tch);
    setViewModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-input border-b border-border">
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Teacher</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Qualification</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Subjects</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider hidden md:table-cell">Contact</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-black text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredTeachers.map((tch) => (
              <tr key={tch.id} className="hover:bg-bg-page/50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold shrink-0">
                      {tch.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary group-hover:text-purple-600 transition-colors">{tch.name}</p>
                      <p className="text-xs font-semibold text-text-secondary">{tch.teacherId}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <p className="text-sm font-semibold text-text-primary">{tch.qualification}</p>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {tch.subjects.map(sub => (
                      <span key={sub} className="px-2 py-0.5 rounded text-[10px] font-bold bg-bg-page border border-border text-text-secondary">
                        {sub}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary mb-1">
                    <Mail size={12} className="text-purple-400" /> {tch.email}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
                    <Phone size={12} className="text-emerald-500" /> {tch.phone}
                  </div>
                </td>
                <td className="p-4">
                  <span className={clsx("px-2.5 py-1 rounded-md text-[11px] font-bold border", getStatusColor(tch.status))}>
                    {tch.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleView(tch)}
                      className="p-1.5 text-text-secondary hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      className="p-1.5 text-text-secondary hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="Edit Teacher"
                    >
                      <Edit size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredTeachers.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary font-semibold">
                  No teachers found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
