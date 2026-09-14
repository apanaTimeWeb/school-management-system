"use client";
import React from 'react';
import { X, TrendingUp, TrendingDown, Minus, Save, User, FileText, CheckCircle2 } from 'lucide-react';
import { useTeacherPerformanceStore } from '../performance_store/useTeacherPerformanceStore';

export default function TeacherStudentPerformanceModal() {
  const { isModalOpen, closePerformanceModal, selectedStudent } = useTeacherPerformanceStore();
  const [successMessage, setSuccessMessage] = useState('');

  if (!isModalOpen || !selectedStudent) return null;

  const handleUpdateRemarks = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Performance Remarks updated successfully.');
    setTimeout(() => setSuccessMessage(''), 2500);
  };

  const renderTrendIcon = (status: string) => {
    if (status === 'Improving') return <TrendingUp size={24} className="text-success" />;
    if (status === 'Declining') return <TrendingDown size={24} className="text-danger" />;
    return <Minus size={24} className="text-warning" />;
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-5xl bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-card shrink-0">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-input flex items-center justify-center text-text-secondary">
               <User size={24} />
             </div>
             <div>
               <h2 className="text-[20px] font-bold text-text-primary flex items-center gap-3">
                 {selectedStudent.name}
                 {selectedStudent.isWeakStudent && (
                   <span className="px-2 py-0.5 bg-danger/20 text-danger text-[10px] uppercase tracking-wider rounded font-bold">Needs Attention</span>
                 )}
               </h2>
               <p className="text-[13px] text-text-secondary mt-1">Roll No: {selectedStudent.rollNo} • {selectedStudent.class} • {selectedStudent.subject}</p>
             </div>
          </div>
          <button onClick={closePerformanceModal} className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Col: Trends & Charts Mockup */}
              <div className="lg:col-span-2 space-y-6">
                 
                 {/* Top Stats */}
                 <div className="grid grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center">
                      <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-2">Overall Grade</span>
                      <span className="text-[32px] font-black text-primary leading-none">{selectedStudent.overallGrade}</span>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center">
                      <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-2">Assignments</span>
                      <span className={`text-[32px] font-black leading-none ${selectedStudent.assignmentCompletion >= 80 ? 'text-success' : 'text-warning'}`}>{selectedStudent.assignmentCompletion}%</span>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center text-center">
                      <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-2">Trend</span>
                      <div className="flex flex-col items-center gap-1">
                        {renderTrendIcon(selectedStudent.improvementStatus)}
                        <span className={`text-[12px] font-bold ${
                          selectedStudent.improvementStatus === 'Improving' ? 'text-success' : 
                          selectedStudent.improvementStatus === 'Declining' ? 'text-danger' : 'text-warning'
                        }`}>{selectedStudent.improvementStatus}</span>
                      </div>
                    </div>
                 </div>

                 {/* Marks Trend Chart (Mock CSS Chart) */}
                 <div className="bg-card border border-border rounded-xl p-5">
                   <h3 className="text-[14px] font-bold text-text-primary mb-4 flex items-center gap-2">
                     <TrendingUp size={16} className="text-primary"/> Marks Trend (Last 5 Exams)
                   </h3>
                   <div className="flex items-end justify-between h-40 mt-6 pt-4 border-b border-border relative">
                     {/* Y-Axis labels */}
                     <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-text-secondary pb-4">
                       <span>100%</span><span>50%</span><span>0%</span>
                     </div>
                     <div className="w-8"></div> {/* Spacer for y-axis */}
                     {selectedStudent.marksTrend.map((mark, index) => (
                       <div key={index} className="flex flex-col items-center w-12 group">
                         <span className="text-[10px] font-bold text-primary mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{mark}%</span>
                         <div className={`w-full rounded-t-sm transition-all duration-500 ${mark >= 75 ? 'bg-success' : mark >= 40 ? 'bg-warning' : 'bg-danger'}`} style={{ height: `${mark}%` }}></div>
                         <span className="text-[10px] text-text-secondary mt-2">Ex {index + 1}</span>
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* Attendance Trend */}
                 <div className="bg-card border border-border rounded-xl p-5">
                   <h3 className="text-[14px] font-bold text-text-primary mb-4 flex items-center gap-2">
                     <CheckCircle2 size={16} className="text-info"/> Attendance Trend (Last 5 Months)
                   </h3>
                   <div className="flex items-end justify-between h-32 mt-6 pt-4 border-b border-border relative">
                     <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-text-secondary pb-4">
                       <span>100%</span><span>0%</span>
                     </div>
                     <div className="w-8"></div>
                     {selectedStudent.attendanceTrend.map((att, index) => (
                       <div key={index} className="flex flex-col items-center w-12 group">
                         <span className="text-[10px] font-bold text-info mb-1 opacity-0 group-hover:opacity-100 transition-opacity">{att}%</span>
                         <div className={`w-full rounded-t-sm transition-all duration-500 ${att >= 80 ? 'bg-info' : 'bg-danger'}`} style={{ height: `${att}%` }}></div>
                         <span className="text-[10px] text-text-secondary mt-2">M {index + 1}</span>
                       </div>
                     ))}
                   </div>
                 </div>

              </div>

              {/* Right Col: Remarks & Actions */}
              <div className="space-y-6">
                 
                 <div className="bg-page border border-border rounded-xl p-5 h-full flex flex-col">
                    <h3 className="text-[14px] font-bold text-text-primary mb-4 flex items-center gap-2">
                      <FileText size={16} className="text-primary" /> Teacher Remarks
                    </h3>
                    <p className="text-[12px] text-text-secondary mb-4">
                      Add academic remarks for {selectedStudent.name}. This helps track interventions and improvement plans.
                    </p>
                    <form onSubmit={handleUpdateRemarks} className="flex flex-col flex-1 relative z-0">
                      <textarea 
                        defaultValue={selectedStudent.teacherRemarks}
                        className="w-full flex-1 min-h-[200px] bg-input border border-border rounded-lg p-3 text-[13px] text-text-primary focus:outline-none focus:border-primary resize-none custom-scrollbar mb-4"
                        placeholder="Enter remarks..."
                        required
                      ></textarea>
                      <button type="submit" disabled={!!successMessage} className="w-full py-3 bg-primary text-black font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {successMessage ? (
                          <><CheckCircle2 size={18} /> {successMessage}</>
                        ) : (
                          <><Save size={18} /> Update Remarks</>
                        )}
                      </button>
                    </form>
                 </div>

              </div>

           </div>
        </div>

      </div>
    </div>
  );
}
