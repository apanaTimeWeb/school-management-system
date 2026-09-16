"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { 
  LayoutDashboard, UserCircle, Users, PanelLeftClose, Wallet, BookOpen, Calendar, AlertCircle, FileText, FileVideo, GraduationCap, Award
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/parent/dashboard', icon: <LayoutDashboard size={20} /> },
  { label: 'My Profile', href: '/parent/profile', icon: <UserCircle size={20} /> },
  { label: 'Children Summary', href: '/parent/children', icon: <Users size={20} /> },
  { label: 'Fees & Payments', href: '/parent/fees', icon: <Wallet size={20} /> },
  { label: 'Homework', href: '/parent/homework', icon: <BookOpen size={20} /> },
  { label: 'Assignments', href: '/parent/assignments', icon: <FileText size={20} /> },
  { label: 'Study Material', href: '/parent/study-material', icon: <FileVideo size={20} /> },
  { label: 'Examinations', href: '/parent/examinations', icon: <GraduationCap size={20} /> },
  { label: 'Results', href: '/parent/results', icon: <Award size={20} /> },
  { label: 'Academics', href: '/parent/academics', icon: <BookOpen size={20} /> },
  { label: 'Timetable & Events', href: '/parent/timetable', icon: <Calendar size={20} /> },
  { label: 'Leave & Attendance', href: '/parent/attendance', icon: <AlertCircle size={20} /> },
];

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ParentSidebar({ isOpen, setIsOpen }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={clsx(
          "fixed top-0 left-0 h-screen bg-bg-main border-r border-border shadow-xl lg:shadow-none flex flex-col transition-all duration-300 z-50",
          isOpen ? "w-[280px] translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-[280px]"
        )}
      >
        
        {/* Header Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border bg-card shrink-0">
          <Link href="/parent/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
              P
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              Parent<span className="text-pink-500">Portal</span>
            </span>
          </Link>
          <button 
            className="lg:hidden text-text-secondary hover:text-pink-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <PanelLeftClose size={24} />
          </button>
        </div>

        {/* Navigation Links */}
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
                    ? "bg-pink-500 text-white shadow-md shadow-pink-500/20" 
                    : "text-text-secondary hover:bg-page hover:text-pink-500"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-50 text-xs font-bold w-4">{serialNo}</span>
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                {/* Micro hover indicator */}
                {!isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-pink-500 rounded-r-full transition-all group-hover:h-1/2"></span>
                )}
              </Link>
            )
          })}
        </div>

      </aside>
    </>
  );
}
