"use client";
import React from 'react';
import TeacherClassList from './TeacherClassList';
import TeacherClassDetailsModal from './TeacherClassDetailsModal';
import TeacherStudentProfileModal from './TeacherStudentProfileModal';

export default function TeacherClassesMain() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-text-primary">My Classes</h1>
        <p className="text-[14px] text-text-secondary mt-1">View and manage your assigned classes and student details.</p>
      </div>
      
      <TeacherClassList />
      
      <TeacherClassDetailsModal />
      <TeacherStudentProfileModal />
    </div>
  );
}
