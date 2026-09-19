"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Menu, Search, Bell, Info, AlertCircle, CheckCircle, UserCircle, ChevronDown, LogOut, ShieldAlert } from 'lucide-react';
import { useHRLayoutStore } from './useHRLayoutStore';
import clsx from 'clsx';
import Link from 'next/link';

export default function HRHeader() {
  const { toggleMobileSidebar } = useHRLayoutStore();

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
    { id: 1, title: "Leave Request", desc: "Aman Sharma requested 2 days Sick Leave", time: "10 mins ago", type: "alert", read: false },
    { id: 2, title: "Payroll Processed", desc: "July Payroll has been finalized", time: "2 hrs ago", type: "success", read: false },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="h-16 bg-[#831843] backdrop-blur-md border-b border-white/10 sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 transition-all duration-300">
      {/* Left side: Hamburger (Mobile) & Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden p-2 -ml-2 rounded-md text-white/80 hover:bg-[#EC4899]/20 hover:text-white transition-colors"
        >
          <Menu size={24} className="text-white" />
        </button>
        <h2 className="text-lg font-semibold text-white hidden sm:block">HR & Office Admin</h2>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-4 relative">
        {/* Global Search */}
        <div className="hidden md:flex items-center gap-2 bg-black/20 border border-white/10 rounded-md px-3 py-1.5 focus-within:border-[#EC4899]/50 transition-colors w-64">
          <Search size={16} className="text-white/80" />
          <input
            type="text"
            placeholder="Search employee or doc..."
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
              showNotifications ? "bg-[#EC4899] text-white shadow-sm" : "bg-transparent hover:bg-[#EC4899]/20 text-white/80 hover:text-[#EC4899]"
            )}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 text-white bg-[#BE185D] rounded-full border-2 border-header flex items-center justify-center"></span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden fade-in z-50">
              <div className="flex justify-between items-center p-3 border-b border-border bg-bg-page">
                <h3 className="font-bold text-sm text-[#BE185D]">Notifications</h3>
                <span className="text-[10px] font-bold text-[#BE185D] cursor-pointer hover:underline">Mark all as read</span>
              </div>
              <div className="max-h-80 overflow-y-auto flex flex-col">
                {notifications.map(notif => (
                  <div key={notif.id} className={clsx("p-3 border-b border-border hover:bg-bg-page transition cursor-pointer flex gap-3", !notif.read && "bg-[#BE185D]/10/50")}>
                    <div className={clsx("mt-0.5", notif.type === 'info' ? 'text-info' : notif.type === 'alert' ? 'text-warning' : 'text-success')}>
                      {notif.type === 'info' && <Info size={16} />}
                      {notif.type === 'alert' && <AlertCircle size={16} />}
                      {notif.type === 'success' && <CheckCircle size={16} />}
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start gap-2">
                         <span className={clsx("text-sm font-bold text-[#BE185D]", !notif.read && "text-[#BE185D]")}>{notif.title}</span>
                         {!notif.read && <span className="w-2 h-2 rounded-full bg-[#BE185D] shrink-0 mt-1"></span>}
                      </div>
                      <span className="text-xs font-semibold text-text-secondary mt-0.5">{notif.desc}</span>
                      <span className="text-[10px] font-bold text-text-secondary/60 mt-1">{notif.time}</span>
                    </div>
                  </div>
                ))}
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
              showProfileMenu ? "bg-[#EC4899]/20 shadow-sm" : "bg-transparent hover:bg-[#EC4899]/20"
            )}
          >
            <UserCircle size={28} className={clsx("transition-colors", showProfileMenu ? "text-[#EC4899]" : "text-white/80 group-hover:text-[#EC4899]")} />
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className={clsx("text-sm font-semibold transition-colors", showProfileMenu ? "text-[#EC4899]" : "text-white group-hover:text-[#EC4899]")}>Neha K.</span>
              <span className="text-xs text-white/80 hidden md:block">HR Manager</span>
            </div>
            <ChevronDown size={16} className={clsx("ml-1 hidden sm:block transition-colors", showProfileMenu ? "text-[#EC4899]" : "text-white/80 group-hover:text-[#EC4899]")} />
          </button>

          {/* Profile Dropdown (My Profile & Logout in Header as requested) */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden fade-in z-50 py-1">
              <Link href="/hr/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#BE185D] hover:bg-[#BE185D]/10 transition border-b border-border">
                <UserCircle size={16} className="text-[#EC4899]" /> My Profile
              </Link>
              <Link href="/login" className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-danger hover:bg-danger/10 transition">
                <LogOut size={16} /> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
