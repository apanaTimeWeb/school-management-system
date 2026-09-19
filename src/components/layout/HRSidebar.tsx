"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, X, LayoutDashboard, Users, GraduationCap, UserCheck, CalendarOff, UserPlus, UserCog, FolderOpen, FileSignature, TrendingUp, UserMinus, Banknote, BarChart3, Briefcase, Badge, Building, MessageSquare, Video, Monitor, PieChart, History, Search, UserCircle } from 'lucide-react';
import { useHRLayoutStore } from './useHRLayoutStore';

const MENU_ITEMS = [
  // HR Checklist Items
  { href: '/hr/employee-master', label: 'Employee Master', icon: <Users size={20} className="text-indigo-500" /> },
  { href: '/hr/recruitment', label: 'Recruitment', icon: <UserPlus size={20} className="text-teal-500" /> },
  { href: '/hr/joining', label: 'Joining', icon: <UserCheck size={20} className="text-emerald-500" /> },
  { href: '/hr/onboarding', label: 'Onboarding', icon: <UserCog size={20} className="text-sky-500" /> },
  { href: '/hr/documents', label: 'Employee Documents', icon: <FolderOpen size={20} className="text-rose-500" /> },
  { href: '/hr/appointments', label: 'Appointment Letters', icon: <FileSignature size={20} className="text-fuchsia-500" /> },
  { href: '/hr/id-cards', label: 'ID Cards', icon: <Badge size={20} className="text-cyan-600" /> },
  { href: '/hr/attendance', label: 'Attendance', icon: <UserCheck size={20} className="text-emerald-500" /> },
  { href: '/hr/leaves', label: 'Leave', icon: <CalendarOff size={20} className="text-amber-500" /> },
  { href: '/hr/transfers', label: 'Transfer', icon: <TrendingUp size={20} className="text-orange-500" /> },
  { href: '/hr/promotions', label: 'Promotion', icon: <TrendingUp size={20} className="text-orange-500" /> },
  { href: '/hr/performance', label: 'Performance', icon: <BarChart3 size={20} className="text-pink-500" /> },
  { href: '/hr/workload', label: 'Workload', icon: <Briefcase size={20} className="text-violet-500" /> },
  { href: '/hr/assets', label: 'Assets', icon: <Monitor size={20} className="text-white" /> },
  { href: '/hr/exit', label: 'Exit', icon: <UserMinus size={20} className="text-red-500" /> },
  { href: '/hr/payroll', label: 'Payroll', icon: <Banknote size={20} className="text-green-500" /> },
  { href: '/hr/salary-slip', label: 'Salary Slip', icon: <Banknote size={20} className="text-green-500" /> },
  { href: '/hr/reports', label: 'HR Reports', icon: <PieChart size={20} className="text-purple-600" /> },
  // Office Checklist Items
  { href: '/hr/admission-enquiry', label: 'Admission enquiry support', icon: <Building size={20} className="text-emerald-600" /> },
  { href: '/hr/application-processing', label: 'Application processing', icon: <Building size={20} className="text-emerald-600" /> },
  { href: '/hr/document-verification', label: 'Document verification', icon: <FolderOpen size={20} className="text-rose-500" /> },
  { href: '/hr/office-admin', label: 'Office administration', icon: <Building size={20} className="text-emerald-600" /> },
  { href: '/hr/communication', label: 'Staff communication', icon: <MessageSquare size={20} className="text-amber-600" /> },
  { href: '/hr/meetings', label: 'Meetings', icon: <Video size={20} className="text-blue-600" /> },
  { href: '/hr/general-documents', label: 'General documents', icon: <FolderOpen size={20} className="text-rose-500" /> },
  // Restored Defaults (Ensuring no removal of original non-overlapping features)
  { href: '/hr/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} className="text-blue-500" /> },
  { href: '/hr/teachers', label: 'Teachers', icon: <GraduationCap size={20} className="text-purple-500" /> },
  { href: '/hr/audit-history', label: 'Audit & History', icon: <History size={20} className="text-rose-600" /> },
  { href: '/hr/search', label: 'Search & Filters', icon: <Search size={20} className="text-sky-600" /> },
  { href: '/hr/my-profile', label: 'My Profile', icon: <UserCircle size={20} className="text-fuchsia-600" /> },
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
        fixed top-0 left-0 z-50 h-screen w-64 bg-[#831843] border-r border-white/10 transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-[#831843]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#EC4899] flex items-center justify-center text-white font-extrabold text-[18px]">
              HR
            </div>
            <span className="font-bold text-[18px] text-white tracking-tight">School<span className="text-[#EC4899]">ERP</span></span>
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
          <p className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-3 px-2">HR Menu</p>
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
                    ? 'bg-[#BE185D] text-white shadow-sm' 
                    : 'text-white/60 hover:text-white hover:bg-[#BE185D]/50 border border-transparent'}
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
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-[#831843]">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <Settings size={20} className="text-white/60" />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}
