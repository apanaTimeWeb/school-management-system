"use client";
import React from "react";
import { Search, ChevronRight, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { MOCK_STUDENTS_LIST, formatCurrency } from "../accountant_student_fees_utils/AccountantStudentFeesConstants";
import clsx from "clsx";

// RESPONSIBILITY: Renders the searchable list of students for the accountant to select and view their fee profile.

export default function AccountantStudentFeesListMain() {
  const router = useRouter();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Clear': return 'text-success bg-success/10';
      case 'Pending': return 'text-warning bg-warning/10';
      case 'Overdue': return 'text-danger bg-danger/10';
      default: return 'text-text-secondary bg-bg-page';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Student Fees</h1>
          <p className="text-sm text-text-secondary mt-1">Search and manage individual student fee profiles.</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
        
        {/* Controls */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 bg-bg-input border border-border rounded-md px-3 py-2 focus-within:border-primary w-full sm:w-80 transition-colors">
            <Search size={16} className="text-text-secondary" />
            <input
              type="text"
              placeholder="Search by Name or Admission No..."
              className="bg-transparent border-none outline-none text-sm text-text-primary w-full placeholder:text-text-secondary"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none focus:border-primary cursor-pointer w-full sm:w-auto">
              <option value="">All Classes</option>
              <option value="10th A">10th A</option>
              <option value="9th B">9th B</option>
            </select>
            <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none focus:border-primary cursor-pointer w-full sm:w-auto">
              <option value="">All Statuses</option>
              <option value="Clear">Clear</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Table Area */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
                <th className="p-4">Student</th>
                <th className="p-4">Class</th>
                <th className="p-4 text-right">Total Fees</th>
                <th className="p-4 text-right">Paid</th>
                <th className="p-4 text-right">Pending</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody>
              {MOCK_STUDENTS_LIST.map((student, index) => (
                <tr 
                  key={student.id} 
                  onClick={() => router.push(`/accountant/student-fees/${student.id}`)}
                  className={clsx(
                    "border-b border-border/50 hover:bg-primary/5 cursor-pointer transition-colors group",
                    index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                  )}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <User size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors truncate max-w-[150px] sm:max-w-xs">{student.studentName}</div>
                        <div className="text-xs text-text-secondary">{student.admissionNo}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-text-primary">
                    {student.className}
                  </td>
                  <td className="p-4 text-sm font-semibold text-text-primary text-right">
                    {formatCurrency(student.totalFees)}
                  </td>
                  <td className="p-4 text-sm font-semibold text-success text-right">
                    {formatCurrency(student.paidAmount)}
                  </td>
                  <td className="p-4 text-sm font-bold text-danger text-right">
                    {formatCurrency(student.pendingAmount + student.overdueAmount)}
                  </td>
                  <td className="p-4 text-center">
                    <span className={clsx("px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-transparent", getStatusBadge(student.status))}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4 text-right text-text-secondary group-hover:text-primary transition-colors">
                    <ChevronRight size={18} />
                  </td>
                </tr>
              ))}
              {MOCK_STUDENTS_LIST.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-text-secondary text-sm">
                    No students found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
