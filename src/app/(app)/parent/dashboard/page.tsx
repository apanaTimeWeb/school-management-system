"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, ChevronDown, CheckCircle2, AlertCircle, Clock, Calendar as CalendarIcon, 
  FileText, Award, Wallet, Bell, ChevronRight, BookOpen, GraduationCap, ArrowRight
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5-A', roll: '12', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8-B', roll: '24', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
  { id: 'c3', name: 'Rahul Kumar', class: 'Class 10-A', roll: '05', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=e3f4b6' },
];

export default function ParentDashboardPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);

  const selectedChild = childrenList.find(c => c.id === selectedChildId) || childrenList[0];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Welcome */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Welcome, Ramesh! 👋</h1>
          <p className="text-text-secondary text-sm mt-1">Here is the latest update on your children's progress.</p>
        </div>
      </div>

      {/* Child Switcher */}
      <div className="bg-white rounded-2xl border border-border p-4 shadow-sm relative z-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
            <Users size={24} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-text-secondary">Viewing data for</h3>
            <div className="relative">
              <button 
                onClick={() => setShowChildSwitcher(!showChildSwitcher)}
                className="flex items-center gap-2 text-xl font-bold text-text-primary hover:text-pink-600 transition-colors focus:outline-none"
              >
                {selectedChild.name} — {selectedChild.class} <ChevronDown size={20} className={clsx("transition-transform", showChildSwitcher && "rotate-180")} />
              </button>
              
              {showChildSwitcher && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden z-50 animate-[fadeIn_0.15s_ease-out]">
                  {childrenList.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                      className={clsx(
                        "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                        selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                        <div>
                          <p className="text-sm font-bold text-text-primary">{child.name}</p>
                          <p className="text-xs text-text-secondary">{child.class}</p>
                        </div>
                      </div>
                      {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Child Quick Stats in Switcher */}
        <div className="flex gap-4">
          <div className="text-center px-4 border-r border-border">
            <p className="text-xs font-bold text-text-tertiary uppercase mb-1">Attendance</p>
            <p className="text-lg font-bold text-emerald-500">92%</p>
          </div>
          <div className="text-center px-4">
            <p className="text-xs font-bold text-text-tertiary uppercase mb-1">Today</p>
            <p className="text-lg font-bold text-text-primary flex items-center gap-1"><CheckCircle2 size={16} className="text-emerald-500"/> Present</p>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        
        {/* Left Column (Academics & Timetable) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Today's Schedule & Homework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Homework */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-orange-500">
                  <BookOpen size={20} />
                  <h3 className="font-bold text-text-primary">Pending Homework</h3>
                </div>
                <Link href="/parent/academics" className="text-xs font-bold text-pink-600 hover:underline">View All</Link>
              </div>
              <div className="space-y-3">
                <div className="p-3 border border-border rounded-xl bg-page/50 flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">Mathematics</h4>
                    <p className="text-xs text-text-secondary">Complete Ex 4.2</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-red-100 text-red-600 rounded-md">Due Tomorrow</span>
                </div>
                <div className="p-3 border border-border rounded-xl bg-page/50 flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">Science</h4>
                    <p className="text-xs text-text-secondary">Read Chapter 5</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-orange-100 text-orange-600 rounded-md">Due in 2 days</span>
                </div>
              </div>
            </div>

            {/* Timetable */}
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-blue-500">
                  <Clock size={20} />
                  <h3 className="font-bold text-text-primary">Today's Classes</h3>
                </div>
                <Link href="/parent/timetable" className="text-xs font-bold text-pink-600 hover:underline">Full Schedule</Link>
              </div>
              <div className="space-y-3">
                 <div className="flex items-center gap-3">
                    <div className="w-12 text-center text-xs font-bold text-text-tertiary">09:00<br/>AM</div>
                    <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                    <div className="flex-1 p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-xs font-bold text-blue-800">English</p>
                      <p className="text-[10px] text-blue-600">Room 101 - Mrs. Smith</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-12 text-center text-xs font-bold text-text-tertiary">10:00<br/>AM</div>
                    <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
                    <div className="flex-1 p-2 bg-purple-50 rounded-lg border border-purple-100">
                      <p className="text-xs font-bold text-purple-800">Physics</p>
                      <p className="text-[10px] text-purple-600">Lab 2 - Mr. John</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          {/* Exams & Results */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-indigo-500">
                <Award size={20} />
                <h3 className="font-bold text-text-primary">Exams & Results</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-xl bg-gradient-to-br from-indigo-50 to-white">
                <h4 className="text-sm font-bold text-indigo-800 mb-1">Upcoming Exam</h4>
                <p className="text-lg font-extrabold text-text-primary mb-1">Mid-Term Exams</p>
                <p className="text-xs text-text-secondary mb-3 flex items-center gap-1"><CalendarIcon size={12}/> Starts in 12 days</p>
                <button className="text-xs font-bold text-white bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">View Syllabus</button>
              </div>
              <div className="p-4 border border-border rounded-xl bg-gradient-to-br from-emerald-50 to-white">
                <h4 className="text-sm font-bold text-emerald-800 mb-1">Latest Result</h4>
                <p className="text-lg font-extrabold text-text-primary mb-1">Unit Test 2</p>
                <p className="text-xs text-text-secondary mb-3 text-emerald-600 font-bold">Grade: A | 88%</p>
                <button className="text-xs font-bold text-white bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">View Report Card</button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Finance, Alerts, Quick Actions) */}
        <div className="space-y-6">
          
          {/* Fees Overview */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white text-center">
              <Wallet size={32} className="mx-auto mb-2 opacity-80" />
              <h3 className="text-sm font-bold opacity-90 mb-1">Total Fee Due</h3>
              <p className="text-3xl font-extrabold tracking-tight">₹ 15,500</p>
              <p className="text-xs mt-1 bg-white/20 inline-block px-3 py-1 rounded-full">Due by 10th Oct</p>
            </div>
            <div className="p-4 bg-white">
               <button className="w-full py-3 bg-text-primary text-white rounded-xl font-bold text-sm shadow-md hover:bg-text-secondary transition-colors flex items-center justify-center gap-2">
                 Pay Now <ArrowRight size={16} />
               </button>
               <div className="mt-4 pt-4 border-t border-border">
                 <h4 className="text-xs font-bold text-text-tertiary uppercase mb-3">Recent Payments</h4>
                 <div className="flex items-center justify-between text-sm">
                   <span className="text-text-primary font-semibold">Q1 Tuition Fee</span>
                   <span className="text-emerald-500 font-bold">Paid</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
            <h3 className="font-bold text-text-primary mb-4 text-sm uppercase tracking-wider text-text-tertiary">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="#" className="flex flex-col items-center justify-center p-3 border border-border rounded-xl hover:bg-pink-50 hover:border-pink-200 transition-colors group">
                <AlertCircle size={24} className="text-pink-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-text-primary">Apply Leave</span>
              </Link>
              <Link href="#" className="flex flex-col items-center justify-center p-3 border border-border rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors group">
                <FileText size={24} className="text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-text-primary">Notices</span>
              </Link>
              <Link href="#" className="flex flex-col items-center justify-center p-3 border border-border rounded-xl hover:bg-purple-50 hover:border-purple-200 transition-colors group">
                <CalendarIcon size={24} className="text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-text-primary">Events</span>
              </Link>
              <Link href="#" className="flex flex-col items-center justify-center p-3 border border-border rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition-colors group">
                <Bell size={24} className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-text-primary">Alerts</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
