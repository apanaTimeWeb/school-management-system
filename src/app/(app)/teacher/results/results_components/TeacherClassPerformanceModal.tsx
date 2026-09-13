"use client";
import React, { useState } from 'react';
import { X, TrendingUp, User, Award, CheckCircle2, MessageSquare, LineChart as LineChartIcon } from 'lucide-react';
import { useTeacherResultsStore, StudentResultData } from '../results_store/useTeacherResultsStore';
import { TEACHER_STUDENT_RESULTS_MOCK } from '../results_constants/TeacherResultsMockData';

export default function TeacherClassPerformanceModal() {
  const { isPerformanceModalOpen, closePerformanceModal, selectedClassResult } = useTeacherResultsStore();
  const [selectedStudent, setSelectedStudent] = useState<StudentResultData | null>(null);

  if (!isPerformanceModalOpen || !selectedClassResult) return null;

  const handleUpdateRemarks = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Remarks updated successfully.' }));
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-6xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card shrink-0">
          <div>
            <h2 className="text-[20px] font-bold text-text-primary flex items-center gap-2">
              <TrendingUp size={24} className="text-primary" /> Performance Analytics
            </h2>
            <p className="text-[13px] text-text-secondary mt-1">{selectedClassResult.className} • {selectedClassResult.subject} • {selectedClassResult.examName}</p>
          </div>
          <button onClick={closePerformanceModal} className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body Layout: 2 Columns */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Column: Students List */}
          <div className="w-full md:w-1/2 lg:w-[60%] border-r border-border flex flex-col">
             <div className="p-4 border-b border-border bg-page">
               <h3 className="text-[14px] font-bold text-text-primary">Student Wise Marks</h3>
             </div>
             <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
                {TEACHER_STUDENT_RESULTS_MOCK.map((student) => (
                  <div 
                    key={student.id} 
                    onClick={() => setSelectedStudent(student)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedStudent?.id === student.id 
                      ? 'bg-primary/10 border-primary text-text-primary' 
                      : 'bg-card border-border hover:border-primary/50 text-text-secondary'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-input flex items-center justify-center font-bold text-[12px]">{student.rollNo}</div>
                         <div>
                           <p className={`text-[14px] font-bold ${selectedStudent?.id === student.id ? 'text-primary' : 'text-text-primary'}`}>{student.name}</p>
                           <p className="text-[12px]">Roll No: {student.rollNo}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <span className="block text-[16px] font-bold text-text-primary">{student.marksObtained} <span className="text-[12px] font-normal text-text-secondary">/ {student.totalMarks}</span></span>
                         <span className={`text-[12px] font-bold ${student.percentage >= 40 ? 'text-success' : 'text-danger'}`}>{student.percentage}% (Grade: {student.grade})</span>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Right Column: Student Details & History */}
          <div className="hidden md:flex md:w-1/2 lg:w-[40%] flex-col bg-page">
            {selectedStudent ? (
              <div className="h-full flex flex-col p-6 animate-in fade-in duration-300 overflow-y-auto custom-scrollbar">
                
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-card border-2 border-border rounded-full mx-auto flex items-center justify-center mb-3">
                    <User size={32} className="text-text-secondary" />
                  </div>
                  <h3 className="text-[20px] font-bold text-text-primary">{selectedStudent.name}</h3>
                  <p className="text-[13px] text-text-secondary">Roll No: {selectedStudent.rollNo}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-card border border-border rounded-xl p-4 text-center">
                     <p className="text-[11px] text-text-secondary uppercase tracking-wider font-bold mb-1">Percentage</p>
                     <p className={`text-[24px] font-bold ${selectedStudent.percentage >= 40 ? 'text-success' : 'text-danger'}`}>{selectedStudent.percentage}%</p>
                   </div>
                   <div className="bg-card border border-border rounded-xl p-4 text-center">
                     <p className="text-[11px] text-text-secondary uppercase tracking-wider font-bold mb-1">Grade</p>
                     <p className="text-[24px] font-bold text-info">{selectedStudent.grade}</p>
                   </div>
                </div>

                {/* Performance History Chart (Visual Mock) */}
                <div className="bg-card border border-border rounded-xl p-5 mb-6">
                  <h4 className="text-[13px] font-bold text-text-primary mb-4 flex items-center gap-2"><LineChartIcon size={16}/> Performance History</h4>
                  <div className="space-y-4">
                    {selectedStudent.history?.map((hist, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-[12px] mb-1">
                          <span className="text-text-secondary">{hist.exam}</span>
                          <span className="font-bold text-text-primary">{hist.percentage}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-input rounded-full overflow-hidden">
                          <div className={`h-full ${hist.percentage >= 40 ? 'bg-success' : 'bg-danger'}`} style={{ width: `${hist.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remarks Form */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="text-[13px] font-bold text-text-primary mb-3 flex items-center gap-2"><MessageSquare size={16}/> Teacher's Remarks</h4>
                  <form onSubmit={handleUpdateRemarks}>
                    <textarea 
                      defaultValue={selectedStudent.remarks}
                      className="w-full h-24 bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar mb-3"
                    ></textarea>
                    <button type="submit" className="w-full py-2 bg-primary text-black font-bold text-[13px] rounded hover:bg-primary/90 transition-colors">
                      Update Remarks
                    </button>
                  </form>
                </div>

              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-text-secondary p-6 text-center">
                <Award size={48} className="mb-4 text-border" />
                <p className="text-[16px] font-bold">Select a student</p>
                <p className="text-[13px]">Click on a student from the list to view their detailed performance and add remarks.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
