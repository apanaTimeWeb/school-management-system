"use client";
import React from 'react';
import { useTeacherClassesStore } from '../classes_store/useTeacherClassesStore';
import { TEACHER_CLASSES_LIST } from '../classes_constants/TeacherClassesMockData';
import { Users, GraduationCap, MapPin, ChevronRight, Activity } from 'lucide-react';

export default function TeacherClassList() {
  const { openClassDetailsModal } = useTeacherClassesStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {TEACHER_CLASSES_LIST.map((cls) => (
        <div key={cls.id} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col group hover:border-info/50 transition-colors cursor-pointer" onClick={() => openClassDetailsModal(cls.id)}>
          <div className="p-5 border-b border-border bg-black/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-info/5 rounded-full blur-2xl group-hover:bg-info/20 transition-colors"></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="text-[20px] font-bold text-text-primary">Class {cls.class} {cls.section}</h3>
                <p className="text-[13px] text-info font-medium mt-1">{cls.subject}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center text-info">
                <GraduationCap size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[12px] text-text-secondary font-medium relative z-10">
              <MapPin size={14} className="text-text-secondary" /> {cls.room}
            </div>
          </div>
          
          <div className="p-5 flex-1 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Strength</p>
              <p className="text-[18px] font-bold text-text-primary flex items-center justify-center gap-1.5"><Users size={16} className="text-primary"/> {cls.strength}</p>
            </div>
            <div className="text-center border-l border-r border-border">
              <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Attendance</p>
              <p className="text-[18px] font-bold text-success flex items-center justify-center gap-1.5"><Activity size={16}/> {cls.attendanceToday}%</p>
            </div>
            <div className="text-center">
              <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Avg Score</p>
              <p className="text-[18px] font-bold text-warning">{cls.avgPerformance}%</p>
            </div>
          </div>

          <div className="px-5 py-3 border-t border-border bg-page flex justify-between items-center group-hover:bg-info/5 transition-colors">
            <span className="text-[13px] font-bold text-info">View Students</span>
            <ChevronRight size={16} className="text-info transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      ))}
    </div>
  );
}
