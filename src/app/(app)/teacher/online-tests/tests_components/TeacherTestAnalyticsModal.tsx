"use client";
import React from 'react';
import { X, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { useTeacherTestsStore } from '../tests_store/useTeacherTestsStore';
import { TEST_STUDENT_ATTEMPTS } from '../tests_constants/TeacherTestsMockData';

export default function TeacherTestAnalyticsModal() {
  const { isAnalyticsModalOpen, closeAnalyticsModal, selectedTest } = useTeacherTestsStore();

  if (!isAnalyticsModalOpen || !selectedTest) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-4xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card shrink-0">
          <div>
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary mb-2 inline-block">Test Analytics</span>
            <h2 className="text-[18px] font-bold text-text-primary">
              {selectedTest.title}
            </h2>
            <p className="text-[13px] text-text-secondary mt-1">{selectedTest.class} • {selectedTest.subject} • Total Marks: {selectedTest.totalMarks}</p>
          </div>
          <button onClick={closeAnalyticsModal} className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Analytics Summary */}
        <div className="p-6 border-b border-border bg-page shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="bg-card border border-border p-4 rounded-xl text-center">
             <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-1">Total Attempts</p>
             <p className="text-[24px] font-bold text-text-primary">{selectedTest.attempts}</p>
           </div>
           <div className="bg-card border border-border p-4 rounded-xl text-center">
             <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-1">Avg Score</p>
             <p className="text-[24px] font-bold text-info">{selectedTest.avgScore}</p>
           </div>
           <div className="bg-card border border-border p-4 rounded-xl text-center">
             <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-1">Pass Rate</p>
             <p className="text-[24px] font-bold text-success">85%</p>
           </div>
           <div className="bg-card border border-border p-4 rounded-xl text-center">
             <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-1">Avg Time Taken</p>
             <p className="text-[24px] font-bold text-primary">38m</p>
           </div>
        </div>

        {/* Student Attempts Table */}
        <div className="flex-1 overflow-x-auto custom-scrollbar p-6 bg-card">
          <h3 className="text-[14px] font-bold text-text-primary mb-4">Student Submissions</h3>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-page border border-border text-[12px] font-bold text-text-secondary uppercase tracking-wider">
                <th className="p-3 pl-4 rounded-l-lg border-r border-border">Student Name</th>
                <th className="p-3 text-center border-r border-border">Score</th>
                <th className="p-3 text-center border-r border-border">Time Taken</th>
                <th className="p-3 pr-4 text-center rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {TEST_STUDENT_ATTEMPTS.map((attempt) => (
                <tr key={attempt.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-text-primary">{attempt.studentName}</td>
                  <td className="p-4 text-[14px] font-bold text-center">
                    <span className={attempt.score >= (selectedTest.totalMarks * 0.4) ? 'text-success' : 'text-danger'}>
                      {attempt.score} / {selectedTest.totalMarks}
                    </span>
                  </td>
                  <td className="p-4 text-[13px] text-text-secondary font-bold text-center flex items-center justify-center gap-1.5">
                    <Clock size={14}/> {attempt.timeTaken}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider ${
                      attempt.status === 'Passed' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'
                    }`}>
                      {attempt.status === 'Passed' ? <CheckCircle2 size={12}/> : <XCircle size={12}/>}
                      {attempt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
