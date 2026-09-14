"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, X, LayoutDashboard, Users, GraduationCap, UserCheck, CalendarOff, UserPlus, UserCog, FolderOpen, FileSignature, TrendingUp, UserMinus, Banknote, BarChart3, Briefcase, Badge, Building, MessageSquare, Video, Monitor, PieChart, History, Search, UserCircle } from 'lucide-react';
import { useHRLayoutStore } from './useHRLayoutStore';

const MENU_ITEMS = [
  { href: '/admin/hr_dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} className="text-blue-500" /> },
  { href: '/admin/hr_employees', label: 'Employees', icon: <Users size={20} className="text-indigo-500" /> },
  { href: '/admin/hr_teachers', label: 'Teachers', icon: <GraduationCap size={20} className="text-purple-500" /> },
  { href: '/admin/hr_staff_attendance', label: 'Staff Attendance', icon: <UserCheck size={20} className="text-emerald-500" /> },
  { href: '/admin/hr_leave_management', label: 'Leave Management', icon: <CalendarOff size={20} className="text-amber-500" /> },
  { href: '/admin/hr_recruitment', label: 'Recruitment', icon: <UserPlus size={20} className="text-teal-500" /> },
  { href: '/admin/hr_onboarding', label: 'Onboarding', icon: <UserCog size={20} className="text-sky-500" /> },
  { href: '/admin/hr_documents', label: 'Employee Documents', icon: <FolderOpen size={20} className="text-rose-500" /> },
  { href: '/admin/hr_letters', label: 'Appointment & Letters', icon: <FileSignature size={20} className="text-fuchsia-500" /> },
  { href: '/admin/hr_transfer_promotion', label: 'Transfer & Promotion', icon: <TrendingUp size={20} className="text-orange-500" /> },
  { href: '/admin/hr_exit', label: 'Employee Exit', icon: <UserMinus size={20} className="text-red-500" /> },
  { href: '/admin/hr_payroll', label: 'Payroll', icon: <Banknote size={20} className="text-green-500" /> },
  { href: '/admin/hr_performance', label: 'Performance', icon: <BarChart3 size={20} className="text-pink-500" /> },
  { href: '/admin/hr_workload', label: 'Workload & Assignment', icon: <Briefcase size={20} className="text-violet-500" /> },
  { href: '/admin/hr_id_cards', label: 'ID Cards', icon: <Badge size={20} className="text-cyan-600" /> },
  { href: '/admin/office_admin', label: 'Office Administration', icon: <Building size={20} className="text-emerald-600" /> },
  { href: '/admin/hr_communication', label: 'Staff Communication', icon: <MessageSquare size={20} className="text-amber-600" /> },
  { href: '/admin/hr_meetings', label: 'Staff Meetings', icon: <Video size={20} className="text-blue-600" /> },
  { href: '/admin/hr_assets', label: 'Employee Assets', icon: <Monitor size={20} className="text-indigo-600" /> },
  { href: '/admin/hr_reports', label: 'HR Reports', icon: <PieChart size={20} className="text-purple-600" /> },
  { href: '/admin/hr_audit', label: 'Audit & History', icon: <History size={20} className="text-rose-600" /> },
  { href: '/admin/hr_search', label: 'Search & Filters', icon: <Search size={20} className="text-sky-600" /> },
  { href: '/admin/hr_my_profile', label: 'My Profile', icon: <UserCircle size={20} className="text-fuchsia-600" /> },
];

export default function HRSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useHRLayoutStore();

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
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-extrabold text-[18px]">
              HR
            </div>
            <span className="font-bold text-[18px] text-sidebar-text tracking-tight">School<span className="text-indigo-500">ERP</span></span>
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
          <p className="text-[11px] font-bold text-sidebar-text-muted uppercase tracking-wider mb-3 px-2">HR Menu</p>
          {MENU_ITEMS.map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[14px]
                  ${isActive 
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                    : 'text-sidebar-text-muted hover:text-sidebar-text hover:bg-sidebar-hover border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-indigo-600' : 'text-sidebar-text-muted group-hover:text-sidebar-text'}>
                  {item.icon}
                </span>
                {String(index + 1).padStart(2, '0')} - {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/20 bg-sidebar">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-text-muted hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <Settings size={20} className="text-zinc-400" />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}
