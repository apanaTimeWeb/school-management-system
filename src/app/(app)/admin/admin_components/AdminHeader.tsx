"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown, UserCircle, Menu, LogOut, CheckCircle, AlertCircle, Info } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 1, title: "New Admission Application", desc: "Aarav Sharma (Class 10)", time: "10 mins ago", type: "info", read: false },
    { id: 2, title: "Fee Defaulter Alert", desc: "5 students missed deadline", time: "1 hr ago", type: "alert", read: false },
    { id: 3, title: "Leave Approved", desc: "Ramesh Singh (Teacher)", time: "2 hrs ago", type: "success", read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="fixed top-0 right-0 left-0 md:left-[280px] z-50 h-16 bg-header/90 backdrop-blur-md border-b border-border flex items-center justify-between px-4 md:px-6 transition-all duration-300">
      
      {/* Left side */}
      <div className="flex items-center gap-3">
        <button 
          className="md:hidden p-2 -ml-2 rounded-md text-sidebar-text-muted hover:bg-primary-subtle hover:text-sidebar-text transition-colors"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-semibold text-sidebar-text">School Admin Portal</h2>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-4 relative">
        
        {/* Notifications */}
        <div ref={notifRef} className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className={clsx(
              "relative p-2 rounded-full transition-colors",
              showNotifications ? "bg-primary-subtle text-sidebar-text" : "hover:bg-primary-subtle text-sidebar-text-muted hover:text-sidebar-text"
            )}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-danger rounded-full border-2 border-header flex items-center justify-center"></span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden fade-in z-50">
               <div className="flex justify-between items-center p-3 border-b border-border bg-bg-page">
                 <h3 className="font-bold text-sm">Notifications</h3>
                 <span className="text-[10px] font-bold text-primary cursor-pointer hover:underline">Mark all as read</span>
               </div>
               <div className="max-h-80 overflow-y-auto flex flex-col">
                 {notifications.map(notif => (
                    <div key={notif.id} className={clsx("p-3 border-b border-border hover:bg-bg-page transition cursor-pointer flex gap-3", !notif.read && "bg-primary/5")}>
                       <div className={clsx("mt-0.5", notif.type === 'info' ? 'text-info' : notif.type === 'alert' ? 'text-danger' : 'text-success')}>
                         {notif.type === 'info' && <Info size={16}/>}
                         {notif.type === 'alert' && <AlertCircle size={16}/>}
                         {notif.type === 'success' && <CheckCircle size={16}/>}
                       </div>
                       <div className="flex flex-col flex-1">
                         <div className="flex justify-between items-start gap-2">
                           <span className={clsx("text-sm font-bold", !notif.read && "text-primary")}>{notif.title}</span>
                           {!notif.read && <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1"></span>}
                         </div>
                         <span className="text-xs font-semibold text-text-secondary mt-0.5">{notif.desc}</span>
                         <span className="text-[10px] font-bold text-text-secondary/60 mt-1">{notif.time}</span>
                       </div>
                    </div>
                 ))}
               </div>
               <div className="p-2 border-t border-border bg-bg-page text-center">
                 <button className="text-xs font-bold text-primary hover:underline">View All Activity</button>
               </div>
            </div>
          )}
        </div>

        <div className="hidden sm:block h-6 w-px bg-sidebar-text-muted/30"></div>

        {/* User Profile */}
        <div ref={profileRef} className="relative">
          <button 
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className={clsx(
              "flex items-center gap-2 p-1.5 rounded-md transition-colors group",
              showProfileMenu ? "bg-primary-subtle" : "hover:bg-primary-subtle"
            )}
          >
            <UserCircle size={28} className={clsx("transition-colors", showProfileMenu ? "text-sidebar-text" : "text-sidebar-text-muted group-hover:text-sidebar-text")} />
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-sm font-semibold text-sidebar-text">Principal / Admin</span>
              <span className="text-xs text-sidebar-text-muted hidden md:block">admin@erp360.com</span>
            </div>
            <ChevronDown size={16} className={clsx("ml-1 hidden sm:block transition-colors", showProfileMenu ? "text-sidebar-text" : "text-sidebar-text-muted group-hover:text-sidebar-text")} />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden fade-in z-50 py-1">
               <div className="px-4 py-2 border-b border-border mb-1 block sm:hidden">
                 <p className="text-sm font-bold truncate">Principal / Admin</p>
                 <p className="text-xs text-text-secondary truncate">admin@erp360.com</p>
               </div>
               <Link href="/admin/my-profile" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-text-primary hover:bg-bg-page transition">
                 <UserCircle size={16}/> My Profile
               </Link>
               <div className="h-px w-full bg-border my-1"></div>
               <Link href="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-danger hover:bg-danger/10 transition">
                 <LogOut size={16}/> Logout
               </Link>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
