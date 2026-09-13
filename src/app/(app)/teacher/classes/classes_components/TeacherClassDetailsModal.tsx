"use client";
import React, { useState } from 'react';
import { X, Search, UserCircle, Users, Calendar, Bell, Activity, GraduationCap } from 'lucide-react';
import { useTeacherClassesStore } from '../classes_store/useTeacherClassesStore';
import { TEACHER_CLASSES_LIST } from '../classes_constants/TeacherClassesMockData';

export default function TeacherClassDetailsModal() {
  const { isClassDetailsModalOpen, closeClassDetailsModal, selectedClassId, openStudentProfileModal } = useTeacherClassesStore();
  const [activeTab, setActiveTab] = useState<'students' | 'timetable' | 'announcements' | 'performance'>('students');
  const [exporting, setExporting] = useState(false);

  if (!isClassDetailsModalOpen || !selectedClassId) return null;

  const classData = TEACHER_CLASSES_LIST.find(c => c.id === selectedClassId);
  if (!classData) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-3xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 bg-card border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-text-primary">
              Class {classData.class} {classData.section} - {classData.subject}
            </h2>
            <p className="text-[13px] text-text-secondary mt-1">Student Roster & Overview</p>
          </div>
          <button 
            onClick={closeClassDetailsModal}
            className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-card px-2 overflow-x-auto custom-scrollbar">
          {[
            { id: 'students', label: 'Students List', icon: <Users size={16} /> },
            { id: 'timetable', label: 'Class Timetable', icon: <Calendar size={16} /> },
            { id: 'announcements', label: 'Announcements', icon: <Bell size={16} /> },
            { id: 'performance', label: 'Performance Overview', icon: <Activity size={16} /> }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-4 text-[13px] font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id ? 'border-info text-info' : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          
          {activeTab === 'students' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                 <div className="relative w-64">
                   <Search className="absolute left-3 top-2.5 text-text-secondary" size={16} />
                   <input type="text" placeholder="Search student..." className="w-full bg-input border border-border rounded-md pl-9 pr-3 py-2 text-[13px] text-text-primary focus:outline-none focus:border-info" />
                 </div>
                 <button 
                   onClick={(e) => {
                     setExporting(true);
                     setTimeout(() => setExporting(false), 2000);
                   }} 
                   disabled={exporting}
                   className="px-4 py-2 bg-page border border-border rounded text-[13px] text-text-primary hover:bg-white/5 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                 >
                   {exporting ? (
                     <><span className="animate-spin h-3 w-3 border-2 border-primary border-t-transparent rounded-full"></span> Exporting...</>
                   ) : 'Export CSV'}
                 </button>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
                      <th className="p-4 w-20 text-center">Roll No</th>
                      <th className="p-4">Student Name</th>
                      <th className="p-4 text-center">Attendance</th>
                      <th className="p-4 text-center">Performance</th>
                      <th className="p-4 text-right w-24">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classData.students.map((student) => (
                      <tr key={student.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                        <td className="p-4 text-[14px] font-bold text-text-secondary text-center">{student.rollNo}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-text-secondary">
                              <UserCircle size={18} />
                            </div>
                            <div>
                              <p className="text-[14px] font-bold text-text-primary">{student.name}</p>
                              <p className="text-[11px] text-text-secondary">{student.gender}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`text-[13px] font-bold ${student.attendance >= 75 ? 'text-success' : 'text-danger'}`}>{student.attendance}%</span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="text-[13px] font-bold text-warning">{student.performance}%</span>
                        </td>
                        <td className="p-4 text-right">
                           <button onClick={() => openStudentProfileModal(student.id)} className="text-[12px] font-bold text-info hover:underline">
                             View Profile
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'timetable' && (
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 border-b border-border bg-black/20">
                <h3 className="text-[14px] font-bold text-text-primary">Weekly Timetable ({classData.subject})</h3>
              </div>
              <div className="p-4 space-y-3">
                {classData.timetable.map((t, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-page border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-info/10 text-info flex items-center justify-center font-bold">
                        {t.day.substring(0, 3)}
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-text-primary">{t.day}</h4>
                        <p className="text-[13px] text-text-secondary">{t.time}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-warning/10 text-warning border border-warning/20 rounded text-[11px] font-bold uppercase tracking-wider">{t.type}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'announcements' && (
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-4 border-b border-border bg-black/20 flex items-center justify-between">
                <h3 className="text-[14px] font-bold text-text-primary">Class Announcements</h3>
                <button className="text-[12px] text-info font-bold hover:underline">+ New Notice</button>
              </div>
              <div className="p-4 space-y-4">
                {classData.announcements.map((ann, i) => (
                  <div key={i} className="p-4 border border-border bg-page rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-info"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-[15px] font-bold text-text-primary">{ann.title}</h4>
                      <span className="text-[11px] text-text-secondary bg-input px-2 py-1 rounded">{ann.date}</span>
                    </div>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{ann.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="p-4 border-b border-border bg-black/20">
                  <h3 className="text-[14px] font-bold text-text-primary">Class Performance Overview</h3>
                </div>
                <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-success/5 border border-success/20 p-4 rounded-xl text-center">
                    <p className="text-[12px] text-success uppercase font-bold tracking-wider mb-1">Excellent (&gt;90%)</p>
                    <p className="text-[28px] font-bold text-success">{classData.performanceOverview.excellent}</p>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl text-center">
                    <p className="text-[12px] text-primary uppercase font-bold tracking-wider mb-1">Good (75-90%)</p>
                    <p className="text-[28px] font-bold text-primary">{classData.performanceOverview.good}</p>
                  </div>
                  <div className="bg-warning/5 border border-warning/20 p-4 rounded-xl text-center">
                    <p className="text-[12px] text-warning uppercase font-bold tracking-wider mb-1">Average (50-75%)</p>
                    <p className="text-[28px] font-bold text-warning">{classData.performanceOverview.average}</p>
                  </div>
                  <div className="bg-danger/5 border border-danger/20 p-4 rounded-xl text-center">
                    <p className="text-[12px] text-danger uppercase font-bold tracking-wider mb-1">Poor (&lt;50%)</p>
                    <p className="text-[28px] font-bold text-danger">{classData.performanceOverview.poor}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
