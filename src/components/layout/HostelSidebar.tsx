"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { 
  Home, Building, DoorOpen, BedDouble, Users, UserPlus, CalendarCheck, ArrowRightLeft, Clock, UserCheck, AlertTriangle, Wrench, Package, Utensils, HeartPulse, Scale, Trophy, GraduationCap, IndianRupee, Siren, FileText, Bell, PieChart, ShieldCheck, LayoutDashboard, PanelLeftClose
} from 'lucide-react';

const navItems = [
  // User's Checklist
  { label: 'Hostel Management', href: '/hostel/hostel-management', icon: <Home size={20} /> },
  { label: 'Buildings/Floors', href: '/hostel/buildings-floors', icon: <Building size={20} /> },
  { label: 'Rooms', href: '/hostel/rooms', icon: <DoorOpen size={20} /> },
  { label: 'Beds', href: '/hostel/beds', icon: <BedDouble size={20} /> },
  { label: 'Student Allocation', href: '/hostel/student-allocation', icon: <Users size={20} /> },
  { label: 'Hostel Admission', href: '/hostel/hostel-admission', icon: <UserPlus size={20} /> },
  { label: 'Hostel Attendance', href: '/hostel/hostel-attendance', icon: <CalendarCheck size={20} /> },
  { label: 'Outing/Movement', href: '/hostel/outing-movement', icon: <ArrowRightLeft size={20} /> },
  { label: 'Hostel Leave', href: '/hostel/hostel-leave', icon: <Clock size={20} /> },
  { label: 'Visitors', href: '/hostel/visitors', icon: <UserCheck size={20} /> },
  { label: 'Complaints', href: '/hostel/complaints', icon: <AlertTriangle size={20} /> },
  { label: 'Maintenance', href: '/hostel/maintenance', icon: <Wrench size={20} /> },
  { label: 'Inventory', href: '/hostel/inventory', icon: <Package size={20} /> },
  { label: 'Mess/Food', href: '/hostel/mess-food', icon: <Utensils size={20} /> },
  { label: 'Health', href: '/hostel/health', icon: <HeartPulse size={20} /> },
  { label: 'Discipline', href: '/hostel/discipline', icon: <Scale size={20} /> },
  { label: 'Events', href: '/hostel/events', icon: <Trophy size={20} /> },
  { label: 'Academic Monitoring', href: '/hostel/academic-monitoring', icon: <GraduationCap size={20} /> },
  { label: 'Hostel Fees view', href: '/hostel/hostel-fees-view', icon: <IndianRupee size={20} /> },
  { label: 'Emergency/Safety', href: '/hostel/emergency-safety', icon: <Siren size={20} /> },
  { label: 'Rules/Notices', href: '/hostel/rules-notices', icon: <FileText size={20} /> },
  { label: 'Notifications', href: '/hostel/notifications', icon: <Bell size={20} /> },
  { label: 'Reports', href: '/hostel/reports', icon: <PieChart size={20} /> },
  { label: 'Audit', href: '/hostel/audit', icon: <ShieldCheck size={20} /> },
  // Defaults
  { label: 'Dashboard', href: '/hostel/dashboard', icon: <LayoutDashboard size={20} /> }
];

interface Props {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export default function HostelSidebar({ isOpen = true, setIsOpen }: Props) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && setIsOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside 
        className={clsx(
          "fixed top-0 left-0 h-screen bg-white border-r border-border shadow-xl lg:shadow-none flex flex-col transition-all duration-300 z-50",
          isOpen ? "w-[280px] translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-[280px]"
        )}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-border bg-card shrink-0">
          <Link href="/hostel/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
              H
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              Hostel<span className="text-teal-500">Warden</span>
            </span>
          </Link>
          {setIsOpen && (
            <button 
              className="lg:hidden text-text-secondary hover:text-teal-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <PanelLeftClose size={24} />
            </button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const serialNo = (index + 1).toString().padStart(2, '0') + ".";
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold transition-all group relative",
                  isActive 
                    ? "bg-teal-500 text-white shadow-md shadow-teal-500/20" 
                    : "text-text-secondary hover:bg-page hover:text-teal-500"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-50 text-xs font-bold w-4">{serialNo}</span>
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                {!isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-teal-500 rounded-r-full transition-all group-hover:h-1/2"></span>
                )}
              </Link>
            )
          })}
        </div>
      </aside>
    </>
  );
}
