"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  X, Activity, Building, Building2, DoorOpen, Bed, UserCheck, 
  FileSignature, CalendarCheck, MapPin, CalendarDays, Users, 
  MessageSquareWarning, Wrench, Package, Utensils, Stethoscope, 
  ShieldAlert, Trophy, BookOpen, IndianRupee, AlertTriangle, 
  ScrollText, Bell, MessageSquare, Archive, PieChart, History, 
  User, LogOut
} from 'lucide-react';
import { useHostelWardenLayoutStore } from './useHostelWardenLayoutStore';

const MENU_ITEMS = [
  { href: '/hostel-warden/dashboard', label: 'Dashboard', icon: <Activity size={20} className="text-blue-500" /> },
  { href: '/hostel-warden/hostel-management', label: 'Hostel Management', icon: <Building size={20} className="text-indigo-500" /> },
  { href: '/hostel-warden/buildings', label: 'Buildings / Floors', icon: <Building2 size={20} className="text-purple-500" /> },
  { href: '/hostel-warden/rooms', label: 'Rooms', icon: <DoorOpen size={20} className="text-emerald-500" /> },
  { href: '/hostel-warden/beds', label: 'Beds', icon: <Bed size={20} className="text-amber-500" /> },
  { href: '/hostel-warden/student-allocation', label: 'Student Allocation', icon: <UserCheck size={20} className="text-teal-500" /> },
  { href: '/hostel-warden/admission-requests', label: 'Hostel Admission / Requests', icon: <FileSignature size={20} className="text-sky-500" /> },
  { href: '/hostel-warden/attendance', label: 'Hostel Attendance', icon: <CalendarCheck size={20} className="text-rose-500" /> },
  { href: '/hostel-warden/outing', label: 'Outing / Movement', icon: <MapPin size={20} className="text-fuchsia-500" /> },
  { href: '/hostel-warden/leave', label: 'Hostel Leave', icon: <CalendarDays size={20} className="text-orange-500" /> },
  { href: '/hostel-warden/visitors', label: 'Visitors', icon: <Users size={20} className="text-red-500" /> },
  { href: '/hostel-warden/complaints', label: 'Complaints', icon: <MessageSquareWarning size={20} className="text-pink-500" /> },
  { href: '/hostel-warden/maintenance', label: 'Maintenance', icon: <Wrench size={20} className="text-green-500" /> },
  { href: '/hostel-warden/inventory', label: 'Inventory', icon: <Package size={20} className="text-violet-500" /> },
  { href: '/hostel-warden/mess', label: 'Mess / Food', icon: <Utensils size={20} className="text-emerald-600" /> },
  { href: '/hostel-warden/health', label: 'Health & Medical', icon: <Stethoscope size={20} className="text-cyan-600" /> },
  { href: '/hostel-warden/discipline', label: 'Discipline', icon: <ShieldAlert size={20} className="text-blue-600" /> },
  { href: '/hostel-warden/events', label: 'Events & Activities', icon: <Trophy size={20} className="text-indigo-600" /> },
  { href: '/hostel-warden/academic-monitoring', label: 'Academic Monitoring', icon: <BookOpen size={20} className="text-purple-600" /> },
  { href: '/hostel-warden/fees', label: 'Hostel Fees', icon: <IndianRupee size={20} className="text-sky-600" /> },
  { href: '/hostel-warden/emergency', label: 'Emergency & Safety', icon: <AlertTriangle size={20} className="text-red-600" /> },
  { href: '/hostel-warden/rules', label: 'Rules & Notices', icon: <ScrollText size={20} className="text-amber-600" /> },
  { href: '/hostel-warden/notifications', label: 'Notifications', icon: <Bell size={20} className="text-teal-600" /> },
  { href: '/hostel-warden/communication', label: 'Communication', icon: <MessageSquare size={20} className="text-fuchsia-600" /> },
  { href: '/hostel-warden/documents', label: 'Documents', icon: <Archive size={20} className="text-stone-500" /> },
  { href: '/hostel-warden/reports', label: 'Reports & Analytics', icon: <PieChart size={20} className="text-rose-600" /> },
  { href: '/hostel-warden/audit-history', label: 'Audit & History', icon: <History size={20} className="text-cyan-700" /> },
];

export default function HostelWardenSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useHostelWardenLayoutStore();

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
        fixed top-0 left-0 z-50 h-screen w-[280px] bg-sidebar border-r border-border transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/20 bg-sidebar shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-extrabold text-[18px]">
              H
            </div>
            <span className="font-bold text-[18px] text-sidebar-text tracking-tight">Hostel<span className="text-secondary">ERP</span></span>
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
          <p className="text-[11px] font-bold text-sidebar-text-muted uppercase tracking-wider mb-3 px-2">Warden Modules</p>
          {MENU_ITEMS.map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[13px]
                  ${isActive 
                    ? 'bg-secondary text-primary shadow-sm' 
                    : 'text-sidebar-text-muted hover:text-sidebar-text hover:bg-secondary/10 border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-primary' : 'text-sidebar-text-muted group-hover:text-sidebar-text shrink-0'}>
                  {item.icon}
                </span>
                <span className="truncate">{String(index + 1).padStart(2, '0')} - {item.label}</span>
              </Link>
            );
          })}

          <div className="my-4 border-t border-border/20"></div>
          
          <Link 
            href="/hostel-warden/my-profile"
            onClick={() => setMobileSidebarOpen(false)}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[13px]
              ${pathname.startsWith('/hostel-warden/my-profile') 
                ? 'bg-secondary text-primary shadow-sm' 
                : 'text-sidebar-text-muted hover:text-sidebar-text hover:bg-secondary/10 border border-transparent'}
            `}
          >
            <span className={pathname.startsWith('/hostel-warden/my-profile') ? 'text-primary' : 'text-sidebar-text-muted'}>
              <User size={20} />
            </span>
            <span>28 - My Profile</span>
          </Link>
          
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/20 bg-sidebar shrink-0">
          <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-text-muted hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <LogOut size={20} className="text-red-400" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
