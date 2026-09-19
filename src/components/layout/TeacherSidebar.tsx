"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, X, UserCircle } from 'lucide-react';
import { useTeacherLayoutStore } from './useTeacherLayoutStore';

const MENU_ITEMS = [
  // User's Checklist Items
  { href: '/teacher/my-classes', label: 'My Classes', icon: <UserCircle size={20} /> },
  { href: '/teacher/my-subjects', label: 'My Subjects', icon: <UserCircle size={20} /> },
  { href: '/teacher/attendance', label: 'Attendance', icon: <UserCircle size={20} /> },
  { href: '/teacher/timetable', label: 'Timetable', icon: <UserCircle size={20} /> },
  { href: '/teacher/homework', label: 'Homework', icon: <UserCircle size={20} /> },
  { href: '/teacher/assignments', label: 'Assignments', icon: <UserCircle size={20} /> },
  { href: '/teacher/study-material', label: 'Study Material', icon: <UserCircle size={20} /> },
  { href: '/teacher/classwork', label: 'Classwork', icon: <UserCircle size={20} /> },
  { href: '/teacher/syllabus', label: 'Syllabus', icon: <UserCircle size={20} /> },
  { href: '/teacher/teaching-progress', label: 'Teaching Progress', icon: <UserCircle size={20} /> },
  { href: '/teacher/exams', label: 'Exams', icon: <UserCircle size={20} /> },
  { href: '/teacher/marks-entry', label: 'Marks Entry', icon: <UserCircle size={20} /> },
  { href: '/teacher/results-assigned', label: 'Result-related assigned work', icon: <UserCircle size={20} /> },
  { href: '/teacher/online-tests', label: 'Online Tests/Quizzes', icon: <UserCircle size={20} /> },
  { href: '/teacher/student-performance', label: 'Student Performance', icon: <UserCircle size={20} /> },
  { href: '/teacher/student-remarks', label: 'Student Remarks', icon: <UserCircle size={20} /> },
  { href: '/teacher/discipline-remarks', label: 'Discipline Remarks', icon: <UserCircle size={20} /> },
  { href: '/teacher/parent-communication', label: 'Parent Communication', icon: <UserCircle size={20} /> },
  { href: '/teacher/ptm', label: 'PTM', icon: <UserCircle size={20} /> },
  { href: '/teacher/substitute-classes', label: 'Substitute Classes', icon: <UserCircle size={20} /> },
  { href: '/teacher/leave', label: 'Leave', icon: <UserCircle size={20} /> },
  { href: '/teacher/teaching-reports', label: 'Teaching Reports', icon: <UserCircle size={20} /> },
  // Un-removed default items (Restored to ensure no loss of features)
  { href: '/teacher/dashboard', label: 'Dashboard', icon: <UserCircle size={20} /> },
  { href: '/teacher/documents', label: 'Documents', icon: <UserCircle size={20} /> },
  { href: '/teacher/notifications', label: 'Notifications', icon: <UserCircle size={20} /> },
  { href: '/teacher/communication', label: 'Communication', icon: <UserCircle size={20} /> },
  { href: '/teacher/notices', label: 'Notice Board', icon: <UserCircle size={20} /> },
];

export default function TeacherSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useTeacherLayoutStore();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-[#14532D] border-r border-white/10 transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-[#14532D]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center text-white font-extrabold text-[18px]">
              T
            </div>
            <span className="font-bold text-[18px] text-white tracking-tight">School<span className="text-[#22C55E]">ERP</span></span>
          </div>
          <button 
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1.5 overflow-y-auto h-[calc(100vh-140px)] custom-scrollbar">
          <p className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-3 px-2">Main Menu</p>
          {MENU_ITEMS.map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[14px] group
                  ${isActive 
                    ? 'bg-[#15803D] text-white shadow-sm' 
                    : 'text-white/60 hover:text-white hover:bg-[#15803D]/50 border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-white' : 'text-white/60 group-hover:text-white transition-colors'}>
                  {item.icon}
                </span>
                {String(index + 1).padStart(2, '0')} - {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-[#14532D]">
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Settings module coming soon.' })); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]"
          >
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}

