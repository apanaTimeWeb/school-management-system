"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, X, UserCircle } from 'lucide-react';
import { useTeacherLayoutStore } from './useTeacherLayoutStore';

const MENU_ITEMS = [
  { href: '/teacher/dashboard', label: 'Dashboard', icon: <UserCircle size={20} /> },
  { href: '/teacher/students', label: 'Student Management', icon: <UserCircle size={20} /> },
  { href: '/teacher/classes', label: 'My Classes', icon: <UserCircle size={20} /> },
  { href: '/teacher/attendance', label: 'Student Attendance', icon: <UserCircle size={20} /> },
  { href: '/teacher/homework', label: 'Homework', icon: <UserCircle size={20} /> },
  { href: '/teacher/academics', label: 'Academics & Timetable', icon: <UserCircle size={20} /> },
  { href: '/teacher/classwork', label: 'Classwork', icon: <UserCircle size={20} /> },
  { href: '/teacher/syllabus', label: 'Syllabus & Progress', icon: <UserCircle size={20} /> },
  { href: '/teacher/study-material', label: 'Study Material', icon: <UserCircle size={20} /> },
  { href: '/teacher/assignments', label: 'Assignments', icon: <UserCircle size={20} /> },
  { href: '/teacher/examinations', label: 'Examinations', icon: <UserCircle size={20} /> },
  { href: '/teacher/results', label: 'Results & Analytics', icon: <UserCircle size={20} /> },
  { href: '/teacher/online-tests', label: 'Online Tests', icon: <UserCircle size={20} /> },
  { href: '/teacher/performance', label: 'Student Performance', icon: <UserCircle size={20} /> },
  { href: '/teacher/leaves', label: 'Leave Requests', icon: <UserCircle size={20} /> },
  { href: '/teacher/substitutes', label: 'Substitutes', icon: <UserCircle size={20} /> },
  { href: '/teacher/discipline', label: 'Discipline', icon: <UserCircle size={20} /> },
  { href: '/teacher/remarks', label: 'Student Remarks', icon: <UserCircle size={20} /> },
  { href: '/teacher/meetings', label: 'Parent Meetings', icon: <UserCircle size={20} /> },
  { href: '/teacher/documents', label: 'Documents', icon: <UserCircle size={20} /> },
  { href: '/teacher/notifications', label: 'Notifications', icon: <UserCircle size={20} /> },
  { href: '/teacher/reports', label: 'Reports', icon: <UserCircle size={20} /> },
  { href: '/teacher/communication', label: 'Communication', icon: <UserCircle size={20} /> },
  { href: '/teacher/notices', label: 'Notice Board', icon: <UserCircle size={20} /> },
  { href: '/teacher/profile', label: 'My Profile', icon: <UserCircle size={20} /> },
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
        fixed top-0 left-0 z-50 h-screen w-64 bg-sidebar border-r border-border transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/20 bg-sidebar">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-info flex items-center justify-center text-black font-extrabold text-[18px]">
              T
            </div>
            <span className="font-bold text-[18px] text-sidebar-text tracking-tight">School<span className="text-info">ERP</span></span>
          </div>
          <button 
            className="lg:hidden text-sidebar-text-muted hover:text-sidebar-text transition-colors"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1.5 overflow-y-auto h-[calc(100vh-140px)] custom-scrollbar">
          <p className="text-[11px] font-bold text-sidebar-text-muted uppercase tracking-wider mb-3 px-2">Main Menu</p>
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
                    ? 'bg-info/20 text-info shadow-sm' 
                    : 'text-sidebar-text-muted hover:text-sidebar-text hover:bg-info/10 border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-info' : 'text-sidebar-text-muted group-hover:text-info transition-colors'}>
                  {item.icon}
                </span>
                {String(index + 1).padStart(2, '0')} - {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/20 bg-sidebar">
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-teacher-coming-soon', { detail: 'Settings module coming soon.' })); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-text-muted hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]"
          >
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}

