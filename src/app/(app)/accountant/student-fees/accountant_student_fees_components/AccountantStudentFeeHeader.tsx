"use client";
import React from "react";
import { User, Phone, Mail, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { MOCK_STUDENTS_LIST, formatCurrency } from "../accountant_student_fees_utils/AccountantStudentFeesConstants";

// RESPONSIBILITY: Renders the top header for the student fee profile containing basic info and top-level aggregates.

export default function AccountantStudentFeeHeader({ studentId }: { studentId: string }) {
  const router = useRouter();
  const student = MOCK_STUDENTS_LIST.find(s => s.id === studentId) || MOCK_STUDENTS_LIST[0];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 md:p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left: Back Button & Profile Info */}
        <div className="flex items-start gap-4">
          <button 
            onClick={() => router.push('/accountant/student-fees')}
            className="mt-1 w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors shrink-0"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <User size={32} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-primary">{student.studentName}</h2>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-text-secondary">
                <span className="font-semibold text-text-primary bg-bg-page px-2 py-0.5 rounded border border-border">Class: {student.className}</span>
                <span>ID: {student.admissionNo}</span>
                <span className="flex items-center gap-1"><Phone size={12} /> +91 9876543210</span>
                <span className="flex items-center gap-1"><Mail size={12} /> student@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Aggregated Stats */}
        <div className="flex gap-4 sm:gap-6 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <div className="flex flex-col min-w-24">
            <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Fees</span>
            <span className="text-lg font-bold text-text-primary">{formatCurrency(student.totalFees)}</span>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block"></div>
          <div className="flex flex-col min-w-24">
            <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Paid</span>
            <span className="text-lg font-bold text-success">{formatCurrency(student.paidAmount)}</span>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block"></div>
          <div className="flex flex-col min-w-24">
            <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Total Pending</span>
            <span className="text-lg font-bold text-danger">{formatCurrency(student.pendingAmount + student.overdueAmount)}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
