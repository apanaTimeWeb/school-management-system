"use client";
import React from 'react';
import { X, UserCircle, Phone, MapPin, Activity, GraduationCap, ClipboardCheck, BookOpen, AlertTriangle } from 'lucide-react';
import { useTeacherStudentsStore } from '../students_store/useTeacherStudentsStore';
import { TEACHER_ASSIGNED_STUDENTS, TEACHER_ADVANCED_STUDENT_MOCK } from '../students_constants/TeacherStudentsMockData';

export default function TeacherStudentProfileModal() {
  const { isStudentProfileModalOpen, closeStudentProfileModal, selectedStudentId, activeProfileTab, setActiveProfileTab } = useTeacherStudentsStore();

  if (!isStudentProfileModalOpen || !selectedStudentId) return null;

  const studentData = TEACHER_ASSIGNED_STUDENTS.find(s => s.id === selectedStudentId);
  if (!studentData) return null;

  const mockExtData = TEACHER_ADVANCED_STUDENT_MOCK;

  const tabs = [
    { id: 'profile', label: 'Profile & History', icon: <UserCircle size={16} /> },
    { id: 'academic', label: 'Academic / Marks', icon: <GraduationCap size={16} /> },
    { id: 'attendance', label: 'Attendance', icon: <ClipboardCheck size={16} /> },
    { id: 'assignments', label: 'Homework / Assignments', icon: <BookOpen size={16} /> },
    { id: 'behaviour', label: 'Behaviour & Discipline', icon: <AlertTriangle size={16} /> },
  ] as const;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-4xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-text-primary">
            Student Management - Detailed View
          </h2>
          <button 
            onClick={closeStudentProfileModal}
            className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Card */}
        <div className="p-6 bg-page border-b border-border flex flex-col sm:flex-row gap-5 items-start sm:items-center">
           <div className="w-24 h-24 rounded-full bg-info/10 border-2 border-info flex items-center justify-center text-info shrink-0">
              <UserCircle size={48} />
           </div>
           <div className="flex-1">
             <h1 className="text-[24px] font-bold text-text-primary leading-tight">{studentData.name}</h1>
             <p className="text-[14px] text-text-secondary mt-1">Roll No: <span className="font-bold text-text-primary">{studentData.rollNo}</span> | Class: <span className="font-bold text-text-primary">{studentData.class}</span></p>
             <div className="flex flex-wrap gap-4 mt-4">
                <span className="px-3 py-1.5 rounded-md text-[12px] font-bold bg-success/20 text-success border border-success/30 uppercase tracking-wider">{studentData.status}</span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-bold bg-warning/10 text-warning border border-warning/20">
                  <Activity size={16}/> {studentData.attendance}% Attendance
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-bold bg-primary/10 text-primary border border-primary/20">
                  <GraduationCap size={16}/> {studentData.avgMarks}% Avg Marks
                </span>
             </div>
           </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex overflow-x-auto custom-scrollbar border-b border-border bg-card px-2">
           {tabs.map(tab => (
             <button 
               key={tab.id}
               onClick={() => setActiveProfileTab(tab.id as any)} 
               className={`flex items-center gap-2 px-4 py-4 text-[13px] font-bold border-b-2 transition-colors whitespace-nowrap ${activeProfileTab === tab.id ? 'border-info text-info' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
             >
               {tab.icon} {tab.label}
             </button>
           ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          
          {activeProfileTab === 'profile' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-text-primary mb-4 border-b border-border pb-2">Personal Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-[13px]">
                    <div><span className="text-text-secondary block mb-1">Date of Birth</span><span className="font-bold text-text-primary">{mockExtData.profile.dob}</span></div>
                    <div><span className="text-text-secondary block mb-1">Blood Group</span><span className="font-bold text-text-primary">{mockExtData.profile.bloodGroup}</span></div>
                    <div><span className="text-text-secondary block mb-1">Gender</span><span className="font-bold text-text-primary">{studentData.gender}</span></div>
                    <div><span className="text-text-secondary block mb-1">Email</span><span className="font-bold text-text-primary truncate block">{mockExtData.profile.email}</span></div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="text-[14px] font-bold text-text-primary mb-4 border-b border-border pb-2">Parent / Guardian Contact</h3>
                  <div className="space-y-4 text-[13px]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-info/10 text-info flex items-center justify-center"><UserCircle size={16}/></div>
                      <div><span className="text-text-secondary text-[11px] uppercase block">Parent Name</span><span className="font-bold text-text-primary">{studentData.parentName}</span></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center"><Phone size={16}/></div>
                      <div><span className="text-text-secondary text-[11px] uppercase block">Contact No</span><span className="font-bold text-text-primary">{studentData.parentContact}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="text-[14px] font-bold text-text-primary mb-4 border-b border-border pb-2">Student History / Notes</h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">{mockExtData.profile.history}</p>
              </div>
            </div>
          )}

          {activeProfileTab === 'academic' && (
            <div className="bg-card border border-border rounded-xl overflow-hidden">
               <div className="p-4 border-b border-border bg-black/20">
                 <h3 className="text-[14px] font-bold text-text-primary">Academic Details & Marks</h3>
               </div>
               <table className="w-full text-left border-collapse min-w-[600px]">
                 <thead>
                   <tr className="bg-primary/5 border-b border-border text-[12px] font-bold text-text-secondary">
                     <th className="p-4">Examination Name</th>
                     <th className="p-4 text-center">Math</th>
                     <th className="p-4 text-center">Physics</th>
                     <th className="p-4 text-center">Chemistry</th>
                     <th className="p-4 text-center">English</th>
                   </tr>
                 </thead>
                 <tbody>
                   {mockExtData.academicPerformance.map((perf, i) => (
                     <tr key={i} className="border-b border-border/50 text-[14px] font-medium text-text-primary hover:bg-white/5 transition-colors">
                       <td className="p-4 font-bold">{perf.exam}</td>
                       <td className="p-4 text-center text-info">{perf.math}</td>
                       <td className="p-4 text-center text-info">{perf.physics}</td>
                       <td className="p-4 text-center text-info">{perf.chemistry}</td>
                       <td className="p-4 text-center text-info">{perf.english}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          )}

          {activeProfileTab === 'attendance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                 <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <p className="text-[12px] text-text-secondary uppercase tracking-wider mb-1">Total Days</p>
                    <p className="text-[24px] font-bold text-text-primary">{mockExtData.attendance.totalDays}</p>
                 </div>
                 <div className="bg-success/5 border border-success/20 rounded-xl p-4 text-center">
                    <p className="text-[12px] text-success uppercase tracking-wider mb-1">Present</p>
                    <p className="text-[24px] font-bold text-success">{mockExtData.attendance.present}</p>
                 </div>
                 <div className="bg-danger/5 border border-danger/20 rounded-xl p-4 text-center">
                    <p className="text-[12px] text-danger uppercase tracking-wider mb-1">Absent</p>
                    <p className="text-[24px] font-bold text-danger">{mockExtData.attendance.absent}</p>
                 </div>
                 <div className="bg-warning/5 border border-warning/20 rounded-xl p-4 text-center">
                    <p className="text-[12px] text-warning uppercase tracking-wider mb-1">Late</p>
                    <p className="text-[24px] font-bold text-warning">{mockExtData.attendance.late}</p>
                 </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                 <h3 className="text-[14px] font-bold text-text-primary mb-4 border-b border-border pb-2">Recent Absences</h3>
                 <div className="flex gap-3">
                   {mockExtData.attendance.recentAbsences.map((date, i) => (
                     <span key={i} className="px-3 py-1.5 bg-danger/10 text-danger border border-danger/20 rounded-md text-[13px] font-bold">
                       {date}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          )}

          {activeProfileTab === 'assignments' && (
            <div className="bg-card border border-border rounded-xl overflow-hidden">
               <div className="p-4 border-b border-border bg-black/20">
                 <h3 className="text-[14px] font-bold text-text-primary">Homework & Assignments</h3>
               </div>
               <div className="p-4 space-y-4">
                 {mockExtData.assignments.map((assignment, i) => (
                   <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-page border border-border rounded-lg gap-4">
                     <div>
                       <h4 className="text-[15px] font-bold text-text-primary">{assignment.title}</h4>
                       <p className="text-[13px] text-text-secondary mt-1">Subject: <span className="font-medium text-info">{assignment.subject}</span></p>
                     </div>
                     <div className="flex items-center gap-6">
                       <div className="text-center">
                         <span className="block text-[11px] text-text-secondary uppercase mb-1">Status</span>
                         <span className={`text-[13px] font-bold px-2 py-1 rounded ${
                           assignment.status === 'Submitted' ? 'bg-success/20 text-success' :
                           assignment.status === 'Pending' ? 'bg-warning/20 text-warning' :
                           'bg-danger/20 text-danger'
                         }`}>
                           {assignment.status}
                         </span>
                       </div>
                       <div className="text-center">
                         <span className="block text-[11px] text-text-secondary uppercase mb-1">Grade</span>
                         <span className="text-[16px] font-bold text-primary">{assignment.grade}</span>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {activeProfileTab === 'behaviour' && (
            <div className="bg-card border border-border rounded-xl overflow-hidden">
               <div className="p-4 border-b border-border bg-black/20">
                 <h3 className="text-[14px] font-bold text-text-primary">Behaviour & Discipline Logs</h3>
               </div>
               <div className="p-4 space-y-4">
                 {mockExtData.behaviour.map((log, i) => (
                   <div key={i} className={`p-4 border rounded-lg flex items-start gap-4 ${
                     log.severity === 'Positive' ? 'bg-success/5 border-success/20' :
                     log.severity === 'Low' ? 'bg-warning/5 border-warning/20' :
                     'bg-danger/5 border-danger/20'
                   }`}>
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                       log.severity === 'Positive' ? 'bg-success/20 text-success' :
                       log.severity === 'Low' ? 'bg-warning/20 text-warning' :
                       'bg-danger/20 text-danger'
                     }`}>
                       <AlertTriangle size={20} />
                     </div>
                     <div>
                       <div className="flex items-center gap-3 mb-1">
                         <h4 className="text-[15px] font-bold text-text-primary">{log.incident}</h4>
                         <span className="text-[12px] font-medium text-text-secondary">{log.date}</span>
                       </div>
                       <p className="text-[13px] text-text-secondary">Action Taken: <span className="font-medium text-text-primary">{log.action}</span></p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
