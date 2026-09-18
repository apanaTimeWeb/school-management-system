"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { 
  LayoutDashboard, UserCircle, GraduationCap, Calendar, UserCheck, 
  BookOpen, FileText, Library, FileVideo, CheckSquare, Award, MonitorPlay, 
  Wallet, Clock, MessageSquare, Inbox, CalendarDays, Bus, Bed, Activity, 
  AlertTriangle, FileBadge, CreditCard, MessageSquareQuote, Bell, PieChart, Inbox as InboxRequest, ShieldCheck, LogOut, PanelLeftClose, PanelLeftOpen
} from 'lucide-react';

const navItems = [
  // User's Checklist
  { label: 'My Profile', href: '/student/profile', icon: <UserCircle size={20} /> },
  { label: 'My Academics', href: '/student/academics', icon: <GraduationCap size={20} /> },
  { label: 'Timetable', href: '/student/timetable', icon: <Calendar size={20} /> },
  { label: 'Attendance view', href: '/student/attendance-view', icon: <UserCheck size={20} /> },
  { label: 'Homework', href: '/student/homework', icon: <BookOpen size={20} /> },
  { label: 'Assignments', href: '/student/assignments', icon: <FileText size={20} /> },
  { label: 'Study Material', href: '/student/study-material', icon: <FileVideo size={20} /> },
  { label: 'Classwork', href: '/student/classwork', icon: <CheckSquare size={20} /> },
  { label: 'Exams', href: '/student/exams', icon: <FileText size={20} /> },
  { label: 'Results', href: '/student/results', icon: <Award size={20} /> },
  { label: 'Online Tests', href: '/student/online-tests', icon: <MonitorPlay size={20} /> },
  { label: 'Fees', href: '/student/fees', icon: <Wallet size={20} /> },
  { label: 'Payment', href: '/student/payment', icon: <CreditCard size={20} /> },
  { label: 'Receipts', href: '/student/receipts', icon: <FileText size={20} /> },
  { label: 'Leave Request', href: '/student/leave-request', icon: <Clock size={20} /> },
  { label: 'Communication', href: '/student/communication', icon: <MessageSquare size={20} /> },
  { label: 'Messages', href: '/student/messages', icon: <Inbox size={20} /> },
  { label: 'Events', href: '/student/events', icon: <CalendarDays size={20} /> },
  { label: 'Library', href: '/student/library', icon: <Library size={20} /> },
  { label: 'Transport', href: '/student/transport', icon: <Bus size={20} /> },
  { label: 'Hostel', href: '/student/hostel', icon: <Bed size={20} /> },
  { label: 'Health', href: '/student/health', icon: <Activity size={20} /> },
  { label: 'Discipline', href: '/student/discipline', icon: <AlertTriangle size={20} /> },
  { label: 'Certificates', href: '/student/certificates', icon: <FileBadge size={20} /> },
  { label: 'ID Card', href: '/student/id-card', icon: <CreditCard size={20} /> },
  { label: 'Feedback', href: '/student/feedback', icon: <MessageSquareQuote size={20} /> },
  { label: 'My Requests', href: '/student/my-requests', icon: <InboxRequest size={20} /> },
  { label: 'Security', href: '/student/security', icon: <ShieldCheck size={20} /> },
  // Preserved Defaults (Ensuring no removal of original non-overlapping features)
  { label: 'Dashboard', href: '/student/dashboard', icon: <LayoutDashboard size={20} /> },
  { label: 'Notifications', href: '/student/notifications', icon: <Bell size={20} /> },
  { label: 'Reports', href: '/student/reports', icon: <PieChart size={20} /> },
];

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function StudentSidebar({ isOpen, setIsOpen }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login/student');
  };

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
          <Link href="/student/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              Student<span className="text-primary">ERP</span>
            </span>
          </Link>
          <button 
            className="lg:hidden text-text-secondary hover:text-primary transition-colors"
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
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-text-secondary hover:bg-page hover:text-primary"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="opacity-50 text-xs font-bold w-4">{serialNo}</span>
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                {/* Micro hover indicator */}
                {!isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r-full transition-all group-hover:h-1/2"></span>
                )}
              </Link>
            )
          })}
        </div>

      </aside>
    </>
  );
}
