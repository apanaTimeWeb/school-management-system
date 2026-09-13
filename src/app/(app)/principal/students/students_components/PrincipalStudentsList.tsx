"use client";
// RESPONSIBILITY: Renders the paginated table of students. Handles row clicks to open the profile modal.
import React from 'react';
import { PrincipalStudent } from '../students_types/PrincipalStudents.types';
import { usePrincipalStudentsStore } from '../students_store/usePrincipalStudentsStore';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

interface PrincipalStudentsListProps {
  students: PrincipalStudent[];
  isLoading: boolean;
}

export default function PrincipalStudentsList({ students, isLoading }: PrincipalStudentsListProps) {
  const { openProfileModal } = usePrincipalStudentsStore();

  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-4 bg-black/20 border-b border-border h-12" />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-4 border-b border-border/50 flex gap-4">
            <div className="h-4 w-12 bg-skeleton-base animate-pulse rounded" />
            <div className="h-4 w-48 bg-skeleton-base animate-pulse rounded" />
            <div className="h-4 w-24 bg-skeleton-base animate-pulse rounded" />
            <div className="h-4 w-24 bg-skeleton-base animate-pulse rounded" />
          </div>
        ))}
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-success/20 text-success border border-success/30">Active</span>;
      case 'Transferred':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-info/20 text-info border border-info/30">Transferred</span>;
      case 'Suspended':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-danger/20 text-danger border border-danger/30">Suspended</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-page text-text-secondary border border-border">{status}</span>;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 font-semibold w-24">Roll No</th>
              <th className="p-4 font-semibold">Student Name</th>
              <th className="p-4 font-semibold w-32">Admission No</th>
              <th className="p-4 font-semibold w-24">Class</th>
              <th className="p-4 font-semibold w-32">Contact</th>
              <th className="p-4 font-semibold w-28 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <User size={32} className="text-border" />
                    <p>No students found matching your filters.</p>
                  </div>
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr
                  key={student.id}
                  onClick={() => openProfileModal(student.id)}
                  className="border-b border-border/50 hover:bg-primary/5 transition-colors cursor-pointer group"
                >
                  <td className="p-4 text-[14px] font-medium text-text-secondary group-hover:text-primary transition-colors">
                    {student.rollNo}
                  </td>
                  <td className="p-4 text-center">
                    <button className="p-2 bg-primary/10 border border-primary/30 rounded-md text-primary hover:bg-primary hover:text-black hover:border-primary transition-colors shadow-sm">
                      <Eye size={16} />
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-[12px] font-bold text-text-secondary">
                        {student.firstName[0]}{student.lastName[0]}
                      </div>
                      <span className="text-[14px] font-medium text-text-primary">
                        {student.firstName} {student.lastName}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-[13px] text-text-secondary">{student.admissionNo}</td>
                  <td className="p-4 text-[13px] text-text-secondary">{student.class} - {student.section}</td>
                  <td className="p-4 text-[13px] text-text-secondary">{student.contactNo}</td>
                  <td className="p-4 text-center">{getStatusBadge(student.status)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="p-4 border-t border-border flex items-center justify-between bg-black/20">
        <span className="text-[13px] text-text-secondary">
          Showing <strong className="text-text-primary">{students.length}</strong> results
        </span>
        <div className="flex gap-2">
          <button className="p-1.5 rounded bg-page border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors disabled:opacity-50">
            <ChevronLeft size={16} />
          </button>
          <button className="p-1.5 rounded bg-page border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors disabled:opacity-50">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
