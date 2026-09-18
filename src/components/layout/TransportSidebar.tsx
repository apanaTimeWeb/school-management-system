"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { 
  Bus, FileText, Users, Map, MapPin, ClipboardList, Activity, Navigation, Wrench, Fuel, ShieldAlert, HeartHandshake, Siren, IndianRupee, Bell, Trophy, PieChart, ShieldCheck, LayoutDashboard, PanelLeftClose
} from 'lucide-react';

const navItems = [
  // User's Checklist
  { label: 'Vehicles', href: '/transport/vehicles', icon: <Bus size={20} /> },
  { label: 'Vehicle Documents', href: '/transport/vehicle-documents', icon: <FileText size={20} /> },
  { label: 'Drivers', href: '/transport/drivers', icon: <Users size={20} /> },
  { label: 'Conductors', href: '/transport/conductors', icon: <Users size={20} /> },
  { label: 'Routes', href: '/transport/routes', icon: <Map size={20} /> },
  { label: 'Stops', href: '/transport/stops', icon: <MapPin size={20} /> },
  { label: 'Student Transport', href: '/transport/student-transport', icon: <Users size={20} /> },
  { label: 'Transport Requests', href: '/transport/transport-requests', icon: <ClipboardList size={20} /> },
  { label: 'Daily Trips', href: '/transport/daily-trips', icon: <Activity size={20} /> },
  { label: 'Transport Attendance', href: '/transport/transport-attendance', icon: <ClipboardList size={20} /> },
  { label: 'Live Tracking', href: '/transport/live-tracking', icon: <Navigation size={20} /> },
  { label: 'Maintenance', href: '/transport/maintenance', icon: <Wrench size={20} /> },
  { label: 'Fuel', href: '/transport/fuel', icon: <Fuel size={20} /> },
  { label: 'Vehicle Inspection', href: '/transport/vehicle-inspection', icon: <ShieldCheck size={20} /> },
  { label: 'Safety', href: '/transport/safety', icon: <ShieldAlert size={20} /> },
  { label: 'Emergency', href: '/transport/emergency', icon: <Siren size={20} /> },
  { label: 'Transport Fee view', href: '/transport/transport-fee-view', icon: <IndianRupee size={20} /> },
  { label: 'Transport Notifications', href: '/transport/transport-notifications', icon: <Bell size={20} /> },
  { label: 'Special/Event Transport', href: '/transport/special-event-transport', icon: <Trophy size={20} /> },
  { label: 'Reports', href: '/transport/reports', icon: <PieChart size={20} /> },
  { label: 'Audit', href: '/transport/audit', icon: <ShieldCheck size={20} /> },
  // Defaults
  { label: 'Dashboard', href: '/transport/dashboard', icon: <LayoutDashboard size={20} /> }
];

interface Props {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export default function TransportSidebar({ isOpen = true, setIsOpen }: Props) {
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
          <Link href="/transport/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
              T
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              Transport<span className="text-orange-500">Manager</span>
            </span>
          </Link>
          {setIsOpen && (
            <button 
              className="lg:hidden text-text-secondary hover:text-orange-500 transition-colors"
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
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20" 
                    : "text-text-secondary hover:bg-page hover:text-orange-500"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-50 text-xs font-bold w-4">{serialNo}</span>
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                {!isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-500 rounded-r-full transition-all group-hover:h-1/2"></span>
                )}
              </Link>
            )
          })}
        </div>
      </aside>
    </>
  );
}
