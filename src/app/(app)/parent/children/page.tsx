"use client";

import React, { useState } from 'react';
import { 
  UserCircle, BookOpen, GraduationCap, School, MapPin, BadgeInfo,
  CalendarDays, Star, Users, Briefcase, FileBadge, CheckCircle2, QrCode
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data for Children
const childrenData = [
  {
    id: 'c1',
    name: 'Aarav Kumar',
    profilePhoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4',
    admissionNumber: 'ADM-2023-0104',
    studentId: 'ST-104-AA',
    class: 'Class 5',
    section: 'A',
    rollNumber: '12',
    academicSession: '2023-2024',
    house: 'Red House',
    classTeacher: 'Mrs. Anjali Sharma',
    subjects: ['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies', 'Computer'],
    attendancePercent: 92,
    status: 'Active'
  },
  {
    id: 'c2',
    name: 'Riya Kumar',
    profilePhoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3',
    admissionNumber: 'ADM-2020-0452',
    studentId: 'ST-452-RY',
    class: 'Class 8',
    section: 'B',
    rollNumber: '24',
    academicSession: '2023-2024',
    house: 'Blue House',
    classTeacher: 'Mr. Rajesh Singh',
    subjects: ['Mathematics', 'Science', 'English', 'Sanskrit', 'History', 'Geography', 'Art'],
    attendancePercent: 88,
    status: 'Active'
  },
  {
    id: 'c3',
    name: 'Rahul Kumar',
    profilePhoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=e3f4b6',
    admissionNumber: 'ADM-2018-0991',
    studentId: 'ST-991-RH',
    class: 'Class 10',
    section: 'A',
    rollNumber: '05',
    academicSession: '2023-2024',
    house: 'Green House',
    classTeacher: 'Mrs. Kavita Patel',
    subjects: ['Mathematics (Standard)', 'Science', 'English (Comm.)', 'Hindi (Course A)', 'Social Science', 'IT'],
    attendancePercent: 95,
    status: 'Active'
  }
];

export default function MyChildrenPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenData[0].id);
  
  const selectedChild = childrenData.find(c => c.id === selectedChildId) || childrenData[0];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">My Children</h1>
        <p className="text-text-secondary text-sm mt-1">View comprehensive academic profiles of your children.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Sidebar: Child List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-sm font-bold text-text-tertiary uppercase tracking-wider pl-2">Select Child</h2>
          <div className="space-y-3">
            {childrenData.map((child) => (
              <button
                key={child.id}
                onClick={() => setSelectedChildId(child.id)}
                className={clsx(
                  "w-full flex items-center gap-4 p-3 rounded-2xl border transition-all duration-200 group text-left",
                  selectedChildId === child.id 
                    ? "bg-pink-500 border-pink-500 shadow-lg shadow-pink-500/30 text-white transform scale-[1.02]" 
                    : "bg-white border-border hover:border-pink-300 hover:shadow-md text-text-primary"
                )}
              >
                <div className="relative">
                  <img 
                    src={child.profilePhoto} 
                    alt={child.name} 
                    className={clsx(
                      "w-12 h-12 rounded-full border-2 transition-colors",
                      selectedChildId === child.id ? "border-white bg-pink-400" : "border-border bg-page"
                    )} 
                  />
                  {child.status === 'Active' && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className={clsx("text-sm font-bold truncate", selectedChildId === child.id ? "text-white" : "text-text-primary")}>
                    {child.name}
                  </h3>
                  <p className={clsx("text-xs truncate", selectedChildId === child.id ? "text-pink-100" : "text-text-secondary")}>
                    {child.class} - {child.section}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Action Links for Selected Child */}
          <div className="mt-8 bg-white rounded-2xl border border-border p-4 shadow-sm">
            <h3 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Link href="/parent/attendance" className="flex items-center gap-3 p-2 hover:bg-page rounded-xl text-sm font-semibold text-text-secondary hover:text-pink-600 transition-colors">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg"><CalendarDays size={16} /></div> Attendance
              </Link>
              <Link href="/parent/academics" className="flex items-center gap-3 p-2 hover:bg-page rounded-xl text-sm font-semibold text-text-secondary hover:text-pink-600 transition-colors">
                <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg"><BookOpen size={16} /></div> Homework
              </Link>
              <Link href="/parent/fees" className="flex items-center gap-3 p-2 hover:bg-page rounded-xl text-sm font-semibold text-text-secondary hover:text-pink-600 transition-colors">
                <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg"><FileBadge size={16} /></div> Fee Details
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content: Student Detailed Profile */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Main Identity Card */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-bl-[100px] -z-0"></div>
            
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 p-2">
                  <img src={selectedChild.profilePhoto} alt={selectedChild.name} className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary">{selectedChild.name}</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-200 mx-auto md:mx-0">
                    <CheckCircle2 size={14} /> Active Student
                  </div>
                </div>
                
                <p className="text-pink-600 font-bold text-lg mb-6">{selectedChild.class} - Section {selectedChild.section}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-page/50 p-3 rounded-xl border border-border">
                    <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider mb-1">Student ID</p>
                    <p className="text-sm font-bold text-text-primary flex items-center gap-1"><QrCode size={14} className="text-pink-500"/> {selectedChild.studentId}</p>
                  </div>
                  <div className="bg-page/50 p-3 rounded-xl border border-border">
                    <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider mb-1">Admission No</p>
                    <p className="text-sm font-bold text-text-primary flex items-center gap-1"><BadgeInfo size={14} className="text-blue-500"/> {selectedChild.admissionNumber}</p>
                  </div>
                  <div className="bg-page/50 p-3 rounded-xl border border-border">
                    <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider mb-1">Roll Number</p>
                    <p className="text-sm font-bold text-text-primary flex items-center gap-1"><UserCircle size={14} className="text-purple-500"/> {selectedChild.rollNumber}</p>
                  </div>
                  <div className="bg-page/50 p-3 rounded-xl border border-border">
                    <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider mb-1">Session</p>
                    <p className="text-sm font-bold text-text-primary flex items-center gap-1"><CalendarDays size={14} className="text-orange-500"/> {selectedChild.academicSession}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* School & Class Info */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="px-6 py-4 border-b border-border bg-page/50 flex items-center gap-2">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  <School size={18} />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Academic Information</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Users size={16} className="text-blue-500" /></div>
                    <span className="text-sm font-semibold text-text-secondary">Class Teacher</span>
                  </div>
                  <span className="text-sm font-bold text-text-primary">{selectedChild.classTeacher}</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center"><Star size={16} className="text-orange-500" /></div>
                    <span className="text-sm font-semibold text-text-secondary">House</span>
                  </div>
                  <span className={clsx("text-sm font-bold px-3 py-1 rounded-full border", 
                    selectedChild.house.includes('Red') ? "bg-red-50 text-red-600 border-red-200" :
                    selectedChild.house.includes('Blue') ? "bg-blue-50 text-blue-600 border-blue-200" :
                    selectedChild.house.includes('Green') ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                    "bg-yellow-50 text-yellow-600 border-yellow-200"
                  )}>
                    {selectedChild.house}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center"><CheckCircle2 size={16} className="text-emerald-500" /></div>
                    <span className="text-sm font-semibold text-text-secondary">Attendance</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-600">{selectedChild.attendancePercent}%</span>
                </div>
              </div>
            </div>

            {/* Enrolled Subjects */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="px-6 py-4 border-b border-border bg-page/50 flex items-center gap-2">
                <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                  <BookOpen size={18} />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Enrolled Subjects</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {selectedChild.subjects.map((subject, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-bg-main border border-border rounded-lg text-sm font-semibold text-text-primary hover:border-pink-300 hover:text-pink-600 transition-colors cursor-default">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
