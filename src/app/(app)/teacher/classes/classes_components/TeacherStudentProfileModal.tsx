"use client";
import React from 'react';
import { X, UserCircle, Phone, Mail, GraduationCap, MapPin, Activity } from 'lucide-react';
import { useTeacherClassesStore } from '../classes_store/useTeacherClassesStore';
import { TEACHER_CLASSES_LIST, TEACHER_STUDENT_PROFILE_MOCK } from '../classes_constants/TeacherClassesMockData';

export default function TeacherStudentProfileModal() {
  const { isStudentProfileModalOpen, closeStudentProfileModal, selectedStudentId, selectedClassId, activeStudentTab, setActiveStudentTab } = useTeacherClassesStore();

  if (!isStudentProfileModalOpen || !selectedStudentId || !selectedClassId) return null;

  const classData = TEACHER_CLASSES_LIST.find(c => c.id === selectedClassId);
  const studentData = classData?.students.find(s => s.id === selectedStudentId);

  if (!studentData) return null;

  const mockExtData = TEACHER_STUDENT_PROFILE_MOCK;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-2xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            Student Information
          </h2>
          <button 
            onClick={closeStudentProfileModal}
            className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Card */}
        <div className="p-6 bg-page border-b border-border flex gap-5">
           <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary">
              <UserCircle size={48} />
           </div>
           <div className="flex-1 pt-2">
             <h1 className="text-[24px] font-bold text-text-primary leading-tight">{studentData.name}</h1>
             <p className="text-[13px] text-text-secondary mt-1">Roll No: {studentData.rollNo} | Class {classData?.class} {classData?.section}</p>
             <div className="flex gap-4 mt-4">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-success/20 text-success border border-success/30 uppercase tracking-wider">{studentData.status}</span>
                <span className="flex items-center gap-1 text-[13px] font-bold text-warning"><Activity size={14}/> {studentData.attendance}% Attd</span>
             </div>
           </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex border-b border-border px-6 bg-card">
           <button onClick={() => setActiveStudentTab('profile')} className={`px-4 py-3 text-[13px] font-bold border-b-2 transition-colors ${activeStudentTab === 'profile' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}>Overview</button>
           <button onClick={() => setActiveStudentTab('academic')} className={`px-4 py-3 text-[13px] font-bold border-b-2 transition-colors ${activeStudentTab === 'academic' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}>Academic History</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeStudentTab === 'profile' && (
            <>
              {/* Personal Details */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-[14px] font-bold text-text-primary mb-4 border-b border-border pb-2">Personal Details</h3>
                <div className="grid grid-cols-2 gap-4 text-[13px]">
                  <div><span className="text-text-secondary block mb-1">Date of Birth</span><span className="font-bold text-text-primary">{mockExtData.profile.dob}</span></div>
                  <div><span className="text-text-secondary block mb-1">Blood Group</span><span className="font-bold text-text-primary">{mockExtData.profile.bloodGroup}</span></div>
                  <div><span className="text-text-secondary block mb-1">Gender</span><span className="font-bold text-text-primary">{studentData.gender}</span></div>
                  <div><span className="text-text-secondary block mb-1">Admission Date</span><span className="font-bold text-text-primary">{mockExtData.profile.admissionDate}</span></div>
                </div>
              </div>

              {/* Parent/Guardian Details */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-[14px] font-bold text-text-primary mb-4 border-b border-border pb-2">Guardian Details</h3>
                <div className="space-y-4 text-[13px]">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-info/10 text-info flex items-center justify-center"><UserCircle size={16}/></div>
                     <div><span className="text-text-secondary text-[11px] uppercase block">Parent Name</span><span className="font-bold text-text-primary">{studentData.parentName}</span></div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center"><Phone size={16}/></div>
                     <div><span className="text-text-secondary text-[11px] uppercase block">Contact No</span><span className="font-bold text-text-primary">{studentData.parentContact}</span></div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-warning/10 text-warning flex items-center justify-center"><MapPin size={16}/></div>
                     <div><span className="text-text-secondary text-[11px] uppercase block">Address</span><span className="font-bold text-text-primary">{mockExtData.profile.address}</span></div>
                   </div>
                </div>
              </div>
            </>
          )}

          {activeStudentTab === 'academic' && (
            <div className="bg-card border border-border rounded-lg overflow-hidden">
               <div className="p-4 border-b border-border bg-black/20">
                 <h3 className="text-[14px] font-bold text-text-primary">Recent Examinations</h3>
               </div>
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-primary/5 border-b border-border text-[12px] font-bold text-text-secondary">
                     <th className="p-3">Exam</th>
                     <th className="p-3 text-center">Math</th>
                     <th className="p-3 text-center">Physics</th>
                     <th className="p-3 text-center">Chem</th>
                     <th className="p-3 text-center">Eng</th>
                   </tr>
                 </thead>
                 <tbody>
                   {mockExtData.academicPerformance.map((perf, i) => (
                     <tr key={i} className="border-b border-border/50 text-[13px] font-medium text-text-primary">
                       <td className="p-3">{perf.exam}</td>
                       <td className="p-3 text-center text-info">{perf.math}</td>
                       <td className="p-3 text-center text-info">{perf.physics}</td>
                       <td className="p-3 text-center text-info">{perf.chemistry}</td>
                       <td className="p-3 text-center text-info">{perf.english}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
