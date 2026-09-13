"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  BookOpen, 
  CalendarCheck, 
  Clock, 
  Settings, 
  X
} from 'lucide-react';
import { useLayoutStore } from './useLayoutStore';

const MENU_ITEMS = [
  { href: '/principal/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { href: '/principal/students', label: 'Student Management', icon: <Users size={20} /> },
  { href: '/principal/admissions', label: 'Admissions', icon: <UserPlus size={20} /> },
  { href: '/principal/academics', label: 'Academic Management', icon: <BookOpen size={20} /> },
  { href: '/principal/attendance', label: 'Attendance', icon: <CalendarCheck size={20} /> },
  { href: '/principal/timetable', label: 'Timetable', icon: <Clock size={20} /> },
  { href: '/principal/examinations', label: 'Examinations', icon: <BookOpen size={20} /> },
];

export default function PrincipalSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useLayoutStore();

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
        fixed top-0 left-0 z-50 h-screen w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border bg-page">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-black text-[18px]">
              E
            </div>
            <span className="font-bold text-[18px] text-text-primary tracking-wide">ERP <span className="text-primary">360</span></span>
          </div>
          <button 
            className="lg:hidden text-text-secondary hover:text-white transition-colors"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* User Info (Optional) */}
        <div className="p-4 border-b border-border/50 bg-black/10">
          <p className="text-[12px] font-bold text-text-secondary uppercase tracking-wider mb-1">Role</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-info/20 border border-info/30 flex items-center justify-center text-info font-bold">
              PR
            </div>
            <div>
              <p className="text-[14px] font-bold text-text-primary">Dr. A. Sharma</p>
              <p className="text-[12px] text-info">Principal</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1.5 overflow-y-auto h-[calc(100vh-140px)] custom-scrollbar">
          <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-3 px-2">Main Menu</p>
          {MENU_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[14px]
                  ${isActive 
                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-primary' : 'text-text-secondary'}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border bg-card">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-secondary hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}
