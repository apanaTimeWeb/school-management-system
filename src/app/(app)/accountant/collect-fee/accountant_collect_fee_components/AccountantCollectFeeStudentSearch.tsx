"use client";
import React, { useState } from "react";
import { Search, User, AlertTriangle } from "lucide-react";
import { useAccountantCollectFeeStore } from "../accountant_collect_fee_store/useAccountantCollectFeeStore";
import { MOCK_STUDENT_RESULTS, formatCurrency } from "../accountant_collect_fee_utils/AccountantCollectFeeConstants";

// RESPONSIBILITY: Renders the search bar to find a student, and displays their summary info if selected.

export default function AccountantCollectFeeStudentSearch() {
  const { selectedStudent, setSelectedStudent } = useAccountantCollectFeeStore();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // In a real app, this would trigger an API call. For now, we auto-select if there's a match.
    if (e.target.value.length > 2) {
      const match = MOCK_STUDENT_RESULTS.find(s => s.studentName.toLowerCase().includes(e.target.value.toLowerCase()));
      if (match) setSelectedStudent(match);
      else setSelectedStudent(null);
    } else {
      setSelectedStudent(null);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-border bg-primary/5">
        <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider">Step 1: Select Student</h2>
      </div>
      
      <div className="p-6 flex flex-col gap-6">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by Name, Admission No, or Phone..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        {selectedStudent ? (
          <div className="border border-primary/30 bg-primary/5 rounded-lg p-4 flex flex-col gap-4 fade-in">
            <div className="flex items-center gap-4 border-b border-border/50 pb-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <User size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">{selectedStudent.studentName}</h3>
                <div className="text-xs text-text-secondary mt-1">
                  ID: <span className="font-semibold text-text-primary">{selectedStudent.admissionNo}</span> &nbsp;|&nbsp; 
                  Class: <span className="font-semibold text-text-primary">{selectedStudent.className}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-page border border-border rounded-lg p-3">
                <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider block mb-1">Total Pending</span>
                <span className="text-xl font-bold text-danger">{formatCurrency(selectedStudent.totalPending)}</span>
              </div>
              <div className="bg-bg-page border border-border rounded-lg p-3">
                <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider block mb-1">Pending Installments</span>
                <span className="text-xl font-bold text-warning">{selectedStudent.installmentsPending}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-warning bg-warning/10 p-2 rounded-md border border-warning/20">
              <AlertTriangle size={14} /> Please verify the student details before proceeding.
            </div>
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center text-text-secondary border-2 border-dashed border-border rounded-lg">
            <Search size={32} className="mb-2 opacity-50" />
            <p className="text-sm font-semibold">Search for a student to view their pending dues</p>
            <p className="text-xs mt-1 opacity-70">Type "Priya" or "Amit" to test mock data.</p>
          </div>
        )}
      </div>
    </div>
  );
}
