"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, PowerOff, Power, Library } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SubjectType } from "@/app/(app)/super-admin/academic-master/super_admin_academic_master_types/super_admin_academic_master.types";
import SuperAdminSubjectDrawer from "./SuperAdminSubjectDrawer";

export default function SuperAdminSubjectsTab() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const subjects: SubjectType[] = [
    { id: "sub1", subjectName: "Mathematics", subjectCode: "MAT-101", subjectCategory: "Core", maxMarks: 100, passMarks: 33, credit: 4, theoryMarks: 80, practicalMarks: 0, internalAssessment: 20, isActive: true },
    { id: "sub2", subjectName: "Physics", subjectCode: "PHY-102", subjectCategory: "Practical", maxMarks: 100, passMarks: 33, credit: 4, theoryMarks: 70, practicalMarks: 30, internalAssessment: 0, isActive: true },
    { id: "sub3", subjectName: "English Language", subjectCode: "ENG-01", subjectCategory: "Language", maxMarks: 100, passMarks: 33, credit: 3, theoryMarks: 80, practicalMarks: 0, internalAssessment: 20, isActive: true },
    { id: "sub4", subjectName: "Computer Science", subjectCode: "CS-404", subjectCategory: "Elective", maxMarks: 100, passMarks: 33, credit: 3, theoryMarks: 60, practicalMarks: 40, internalAssessment: 0, isActive: true },
  ];

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Core': return 'bg-primary-subtle text-primary border-primary/20';
      case 'Elective': return 'bg-purple-bg text-purple border-purple/20';
      case 'Optional': return 'bg-warning-bg text-warning border-warning/20';
      case 'Practical': return 'bg-info-bg text-info border-info/20';
      case 'Language': return 'bg-success-bg text-success border-success/20';
      default: return 'bg-bg-page text-text-secondary';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary flex items-center gap-2">
          <Library size={18} className="text-primary" /> Subject Configuration Master
        </h2>
        <button onClick={() => setIsDrawerOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded hover:bg-primary-hover transition-colors shadow-sm">
          <Plus size={14} /> Add Subject
        </button>
      </div>
      
      <div className="bg-card border border-border rounded-lg overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
            <tr>
              <th className="px-4 py-3 border-b border-border">Subject Code & Name</th>
              <th className="px-4 py-3 border-b border-border text-center">Category</th>
              <th className="px-4 py-3 border-b border-border text-center">Credit</th>
              <th className="px-4 py-3 border-b border-border text-center">Marks (Max / Pass)</th>
              <th className="px-4 py-3 border-b border-border text-center">Distribution (Th/Pr/In)</th>
              <th className="px-4 py-3 border-b border-border text-center">Status</th>
              <th className="px-4 py-3 border-b border-border text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {subjects.map((sub) => (
              <tr key={sub.id} className="hover:bg-bg-page transition-colors group cursor-pointer">
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-semibold text-text-primary">{sub.subjectName}</span>
                    <span className="text-[11px] text-text-secondary">{sub.subjectCode}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium border", getCategoryColor(sub.subjectCategory))}>
                    {sub.subjectCategory}
                  </span>
                </td>
                <td className="px-4 py-3 text-center text-text-secondary">{sub.credit || '-'}</td>
                <td className="px-4 py-3 text-center font-medium text-text-primary">
                  {sub.maxMarks} / <span className="text-danger">{sub.passMarks}</span>
                </td>
                <td className="px-4 py-3 text-center text-text-secondary text-[12px]">
                  {sub.theoryMarks} / {sub.practicalMarks} / {sub.internalAssessment}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={cn("px-2 py-0.5 rounded text-[10px] font-medium", sub.isActive ? "bg-success-bg text-success" : "bg-danger-bg text-danger")}>
                    {sub.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    <button className="p-1 text-text-secondary hover:text-info" title="Edit"><Edit size={14} /></button>
                    <button className="p-1 text-text-secondary hover:text-danger" title="Delete"><Trash2 size={14} /></button>
                    <button className="p-1 text-text-secondary hover:text-warning" title={sub.isActive ? "Deactivate" : "Activate"}>
                      {sub.isActive ? <PowerOff size={14} /> : <Power size={14} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SuperAdminSubjectDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
