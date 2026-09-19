"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Bell, UserCircle, ChevronDown, LogOut } from 'lucide-react';
import { useTeacherLayoutStore } from './useTeacherLayoutStore';
import clsx from 'clsx';
import Link from 'next/link';

export default function TeacherHeader() {
  const { toggleMobileSidebar } = useTeacherLayoutStore();
  
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

  return (
    <header className="h-16 bg-[#14532D] backdrop-blur-md border-b border-white/10 sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 transition-all duration-300">
      {/* Left side: Hamburger (Mobile) & Title */}
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleMobileSidebar}
          className="lg:hidden p-2 -ml-2 rounded-md text-white/80 hover:bg-[#22C55E]/20 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-semibold text-white hidden sm:block">Teacher Portal</h2>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-4 relative">
        
        {/* Global Search */}
        <div className="hidden md:flex items-center gap-2 bg-black/20 border border-white/10 rounded-md px-3 py-1.5 focus-within:border-[#22C55E]/50 transition-colors w-64">
          <Search size={16} className="text-white/80" />
          <input 
            type="text" 
            placeholder="Search portal..." 
            className="bg-transparent border-none outline-none text-[13px] text-white w-full placeholder:text-white/80"
          />
        </div>

        {/* Notifications */}
        <div ref={notifRef} className="relative">
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className={clsx(
              "relative p-2 rounded-full transition-all duration-200 ease-in-out hover:scale-105",
              showNotifications ? "bg-[#22C55E] text-white shadow-sm" : "bg-transparent hover:bg-[#22C55E]/20 text-white/80 hover:text-[#22C55E]"
            )}
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 text-white bg-[#15803D] rounded-full border-2 border-header flex items-center justify-center"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden fade-in z-50">
              <div className="flex justify-between items-center p-3 border-b border-border bg-bg-page">
                 <h3 className="font-bold text-sm text-[#15803D]">Notifications</h3>
                 <span className="text-[10px] font-bold text-[#15803D] cursor-pointer hover:underline">Mark all as read</span>
               </div>
               <div className="p-4 text-center text-sm text-text-secondary">
                 You have 3 new notifications.
               </div>
               <div className="p-2 border-t border-border bg-bg-page text-center">
                 <button className="text-xs font-bold text-[#15803D] hover:underline">View All</button>
               </div>
            </div>
          )}
        </div>

        <div className="hidden sm:block h-6 w-px bg-white/30 mx-1"></div>

        {/* Profile */}
        <div ref={profileRef} className="relative">
          <button 
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className={clsx(
              "flex items-center gap-2 p-1.5 pr-2 rounded-lg transition-all duration-200 ease-in-out group",
              showProfileMenu ? "bg-[#22C55E]/20 shadow-sm" : "bg-transparent hover:bg-[#22C55E]/20"
            )}
          >
            <UserCircle size={28} className={clsx("transition-colors", showProfileMenu ? "text-[#22C55E]" : "text-white/80 group-hover:text-[#22C55E]")} />
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className={clsx("text-sm font-semibold transition-colors", showProfileMenu ? "text-[#22C55E]" : "text-white group-hover:text-[#22C55E]")}>Mr. R. Kumar</span>
              <span className="text-xs text-white/80 hidden md:block">Mathematics</span>
            </div>
            <ChevronDown size={16} className={clsx("ml-1 hidden sm:block transition-colors", showProfileMenu ? "text-[#22C55E]" : "text-white/80 group-hover:text-[#22C55E]")} />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden fade-in z-50 py-1">
               <div className="px-4 py-2 border-b border-border mb-1 block sm:hidden">
                 <p className="text-sm font-bold text-[#15803D] truncate">Mr. R. Kumar</p>
                 <p className="text-xs text-text-secondary truncate">Mathematics</p>
               </div>
               <Link href="/teacher/profile" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#15803D] hover:bg-[#15803D]/10 transition">
                 <UserCircle size={16}/> My Profile
               </Link>
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
