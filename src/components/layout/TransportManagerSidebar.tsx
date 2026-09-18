"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  X, Activity, Bus, FileText, UserCheck, Users, Map, MapPin, GraduationCap, 
  Send, Route, CalendarCheck, Navigation, Wrench, Fuel, ClipboardCheck, ShieldAlert, 
  IndianRupee, Bell, MessageSquare, Calendar, Ticket, Archive, PieChart, History, 
  Settings, User, LogOut
} from 'lucide-react';
import { useTransportManagerLayoutStore } from './useTransportManagerLayoutStore';

const MENU_ITEMS = [
  { href: '/transport-manager/dashboard', label: 'Dashboard', icon: <Activity size={20} className="text-blue-500" /> },
  { href: '/transport-manager/vehicles', label: 'Vehicles', icon: <Bus size={20} className="text-indigo-500" /> },
  { href: '/transport-manager/vehicle-documents', label: 'Vehicle Documents', icon: <FileText size={20} className="text-purple-500" /> },
  { href: '/transport-manager/drivers', label: 'Drivers', icon: <UserCheck size={20} className="text-emerald-500" /> },
  { href: '/transport-manager/conductors', label: 'Conductors / Staff', icon: <Users size={20} className="text-amber-500" /> },
  { href: '/transport-manager/routes', label: 'Routes', icon: <Map size={20} className="text-teal-500" /> },
  { href: '/transport-manager/stops', label: 'Stops', icon: <MapPin size={20} className="text-sky-500" /> },
  { href: '/transport-manager/student-allocations', label: 'Student Transport', icon: <GraduationCap size={20} className="text-rose-500" /> },
  { href: '/transport-manager/requests', label: 'Transport Requests', icon: <Send size={20} className="text-fuchsia-500" /> },
  { href: '/transport-manager/daily-trips', label: 'Daily Trips', icon: <Route size={20} className="text-orange-500" /> },
  { href: '/transport-manager/attendance', label: 'Transport Attendance', icon: <CalendarCheck size={20} className="text-red-500" /> },
  { href: '/transport-manager/live-tracking', label: 'Live Tracking', icon: <Navigation size={20} className="text-pink-500" /> },
  { href: '/transport-manager/maintenance', label: 'Maintenance', icon: <Wrench size={20} className="text-green-500" /> },
  { href: '/transport-manager/fuel-management', label: 'Fuel Management', icon: <Fuel size={20} className="text-violet-500" /> },
  { href: '/transport-manager/vehicle-inspection', label: 'Vehicle Inspection', icon: <ClipboardCheck size={20} className="text-emerald-600" /> },
  { href: '/transport-manager/safety-emergency', label: 'Safety & Emergency', icon: <ShieldAlert size={20} className="text-cyan-600" /> },
  { href: '/transport-manager/transport-fee', label: 'Transport Fee', icon: <IndianRupee size={20} className="text-blue-600" /> },
  { href: '/transport-manager/notifications', label: 'Notifications', icon: <Bell size={20} className="text-indigo-600" /> },
  { href: '/transport-manager/communication', label: 'Communication', icon: <MessageSquare size={20} className="text-purple-600" /> },
  { href: '/transport-manager/transport-calendar', label: 'Transport Calendar', icon: <Calendar size={20} className="text-sky-600" /> },
  { href: '/transport-manager/special-transport', label: 'Special / Event Transport', icon: <Ticket size={20} className="text-amber-600" /> },
  { href: '/transport-manager/transport-documents', label: 'Documents', icon: <Archive size={20} className="text-stone-500" /> },
  { href: '/transport-manager/reports', label: 'Reports & Analytics', icon: <PieChart size={20} className="text-rose-600" /> },
  { href: '/transport-manager/audit-history', label: 'Audit & History', icon: <History size={20} className="text-teal-600" /> },
  // 25 features + Settings + My Profile = 27
];

export default function TransportManagerSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useTransportManagerLayoutStore();

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
              T
            </div>
            <span className="font-bold text-[18px] text-sidebar-text tracking-tight">Transport<span className="text-secondary">Pro</span></span>
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
          <p className="text-[11px] font-bold text-sidebar-text-muted uppercase tracking-wider mb-3 px-2">Transport Modules</p>
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
            href="/transport-manager/my-profile"
            onClick={() => setMobileSidebarOpen(false)}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[13px]
              ${pathname.startsWith('/transport-manager/my-profile') 
                ? 'bg-secondary text-primary shadow-sm' 
                : 'text-sidebar-text-muted hover:text-sidebar-text hover:bg-secondary/10 border border-transparent'}
            `}
          >
            <span className={pathname.startsWith('/transport-manager/my-profile') ? 'text-primary' : 'text-sidebar-text-muted'}>
              <User size={20} />
            </span>
            <span>25 - My Profile</span>
          </Link>
          
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-text-muted hover:text-sidebar-text hover:bg-secondary/10 transition-colors font-semibold text-[13px]">
             <Settings size={20} className="text-zinc-400" />
             <span>26 - Settings</span>
          </button>
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/20 bg-sidebar shrink-0">
          <Link href="/login" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-text-muted hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <LogOut size={20} className="text-red-400" />
            <span>27 - Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
