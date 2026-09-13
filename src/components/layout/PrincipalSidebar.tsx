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
  X,
  LineChart,
  Briefcase,
  CalendarOff,
  Scale,
  Contact,
  MessageSquare,
  CalendarHeart,
  Presentation,
  MessageSquareWarning,
  ScrollText,
  IndianRupee,
  Library,
  Bus,
  Home,
  HeartPulse,
  PackageSearch,
  BarChart3
} from 'lucide-react';
import { useLayoutStore } from './useLayoutStore';

const MENU_ITEMS = [
  { href: '/principal/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { href: '/principal/students', label: 'Student Management', icon: <Users size={20} /> },
  { href: '/principal/admissions', label: 'Admissions', icon: <UserPlus size={20} /> },
  { href: '/principal/parents', label: 'Parents & Guardians', icon: <Contact size={20} /> },
  { href: '/principal/academics', label: 'Academic Management', icon: <BookOpen size={20} /> },
  { href: '/principal/attendance', label: 'Attendance', icon: <CalendarCheck size={20} /> },
  { href: '/principal/timetable', label: 'Timetable', icon: <Clock size={20} /> },
  { href: '/principal/examinations', label: 'Examinations', icon: <BookOpen size={20} /> },
  { href: '/principal/results', label: 'Results & Performance', icon: <LineChart size={20} /> },
  { href: '/principal/staff', label: 'Staff & HR', icon: <Briefcase size={20} /> },
  { href: '/principal/communication', label: 'Communication', icon: <MessageSquare size={20} /> },
  { href: '/principal/events', label: 'Events & Activities', icon: <CalendarHeart size={20} /> },
  { href: '/principal/meetings', label: 'Meetings', icon: <Presentation size={20} /> },
  { href: '/principal/complaints', label: 'Complaints & Grievance', icon: <MessageSquareWarning size={20} /> },
  { href: '/principal/documents', label: 'Documents & Certs', icon: <ScrollText size={20} /> },
  { href: '/principal/fees', label: 'Fees Monitoring', icon: <IndianRupee size={20} /> },
  { href: '/principal/library', label: 'Library Usage', icon: <Library size={20} /> },
  { href: '/principal/transport', label: 'Transport Monitoring', icon: <Bus size={20} /> },
  { href: '/principal/hostel', label: 'Hostel Monitoring', icon: <Home size={20} /> },
  { href: '/principal/health', label: 'Health & Medical', icon: <HeartPulse size={20} /> },
  { href: '/principal/inventory', label: 'Inventory & Assets', icon: <PackageSearch size={20} /> },
  { href: '/principal/reports', label: 'Reports & Analytics', icon: <BarChart3 size={20} /> },
  { href: '/principal/leaves', label: 'Leave Management', icon: <CalendarOff size={20} /> },
  { href: '/principal/discipline', label: 'Discipline & Rules', icon: <Scale size={20} /> },
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
        fixed top-0 left-0 z-50 h-screen w-64 bg-sidebar border-r border-border transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/20 bg-sidebar">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-extrabold text-[18px]">
              P
            </div>
            <span className="font-bold text-[18px] text-sidebar-text tracking-tight">School<span className="text-secondary">ERP</span></span>
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
                    ? 'bg-secondary text-primary shadow-sm' 
                    : 'text-sidebar-text-muted hover:text-sidebar-text hover:bg-secondary/10 border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-primary' : 'text-sidebar-text-muted group-hover:text-sidebar-text'}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/20 bg-sidebar">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-text-muted hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}
