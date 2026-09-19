"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, X, GraduationCap } from 'lucide-react';
import { useLayoutStore } from './useLayoutStore';
import { useSchoolConfig } from '@/hooks/useSchoolConfig';

const MENU_ITEMS = [
  { href: '/principal/student-overview', label: 'Student overview', icon: <GraduationCap size={20} /> },
  { href: '/principal/admissions', label: 'Admissions monitoring', icon: <GraduationCap size={20} /> },
  { href: '/principal/academics', label: 'Academic monitoring', icon: <GraduationCap size={20} /> },
  { href: '/principal/attendance', label: 'Attendance monitoring', icon: <GraduationCap size={20} /> },
  { href: '/principal/teacher-monitoring', label: 'Teacher/Class monitoring', icon: <GraduationCap size={20} /> },
  { href: '/principal/timetable', label: 'Timetable oversight', icon: <GraduationCap size={20} /> },
  { href: '/principal/examinations', label: 'Examination oversight', icon: <GraduationCap size={20} /> },
  { href: '/principal/results', label: 'Result approval/review', icon: <GraduationCap size={20} /> },
  { href: '/principal/student-performance', label: 'Student performance', icon: <GraduationCap size={20} /> },
  { href: '/principal/staff-overview', label: 'Staff & Teacher overview', icon: <GraduationCap size={20} /> },
  { href: '/principal/leaves', label: 'Leave approval', icon: <GraduationCap size={20} /> },
  { href: '/principal/discipline', label: 'Discipline', icon: <GraduationCap size={20} /> },
  { href: '/principal/parents', label: 'Parent issues', icon: <GraduationCap size={20} /> },
  { href: '/principal/complaints', label: 'Complaints & Grievance', icon: <GraduationCap size={20} /> },
  { href: '/principal/meetings', label: 'Meetings', icon: <GraduationCap size={20} /> },
  { href: '/principal/events', label: 'Events', icon: <GraduationCap size={20} /> },
  { href: '/principal/health', label: 'Health overview', icon: <GraduationCap size={20} /> },
  { href: '/principal/library', label: 'Library overview', icon: <GraduationCap size={20} /> },
  { href: '/principal/transport', label: 'Transport overview', icon: <GraduationCap size={20} /> },
  { href: '/principal/hostel', label: 'Hostel overview', icon: <GraduationCap size={20} /> },
  { href: '/principal/inventory', label: 'Inventory overview', icon: <GraduationCap size={20} /> },
  { href: '/principal/approvals', label: 'Approval Center', icon: <GraduationCap size={20} /> },
  { href: '/principal/reports', label: 'Reports & Analytics', icon: <GraduationCap size={20} /> },
  { href: '/principal/dashboard', label: 'School performance dashboards', icon: <GraduationCap size={20} /> },
  // Original items not in the list but kept
  { href: '/principal/communication', label: 'Communication', icon: <GraduationCap size={20} /> },
  { href: '/principal/documents', label: 'Documents & Certs', icon: <GraduationCap size={20} /> },
  { href: '/principal/fees', label: 'Fees Monitoring', icon: <GraduationCap size={20} /> },
  { href: '/principal/analytics', label: 'Principal Analytics', icon: <GraduationCap size={20} /> },
];

export default function PrincipalSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useLayoutStore();
  const { modules, isLoaded } = useSchoolConfig();

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
        fixed top-0 left-0 z-50 h-screen w-64 bg-[#7C3AED] border-r border-border transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/20 bg-[#7C3AED]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-white font-extrabold text-[18px]">
              P
            </div>
            <span className="font-bold text-[18px] text-white tracking-tight">School<span className="text-secondary">ERP</span></span>
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
            if (item.href.includes('/library') && modules.library === false) return null;
            if (item.href.includes('/transport') && modules.transport === false) return null;
            if (item.href.includes('/hostel') && modules.hostel === false) return null;

            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[14px]
                  ${isActive 
                    ? 'bg-secondary text-white shadow-sm' 
                    : 'text-white/60 hover:text-white hover:bg-[#7C3AED]/50 border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}>
                  {item.icon}
                </span>
                {String(index + 1).padStart(2, '0')} - {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/20 bg-[#7C3AED]">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}

