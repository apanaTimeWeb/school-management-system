"use client";

import React, { useState } from 'react';
import { Bell, Search, Menu, ChevronDown, User, Settings, LogOut, MessageSquare } from 'lucide-react';
import { useTransportManagerLayoutStore } from './useTransportManagerLayoutStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TransportManagerHeader() {
  const { toggleMobileSidebar } = useTransportManagerLayoutStore();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const pathname = usePathname();

  // Logic to determine the current page title based on pathname
  let pageTitle = "Transport Overview";
  if (pathname.includes('/dashboard')) pageTitle = "Dashboard";
  else if (pathname.includes('/vehicles')) pageTitle = "Vehicles";
  else if (pathname.includes('/vehicle-documents')) pageTitle = "Vehicle Documents";
  else if (pathname.includes('/drivers')) pageTitle = "Drivers";
  else if (pathname.includes('/conductors')) pageTitle = "Conductors";
  else if (pathname.includes('/routes')) pageTitle = "Routes";
  else if (pathname.includes('/stops')) pageTitle = "Stops";
  else if (pathname.includes('/student-allocations')) pageTitle = "Student Transport";
  else if (pathname.includes('/requests')) pageTitle = "Transport Requests";
  else if (pathname.includes('/daily-trips')) pageTitle = "Daily Trips";
  else if (pathname.includes('/attendance')) pageTitle = "Transport Attendance";
  else if (pathname.includes('/live-tracking')) pageTitle = "Live Tracking";
  else if (pathname.includes('/maintenance')) pageTitle = "Maintenance";
  else if (pathname.includes('/fuel-management')) pageTitle = "Fuel Management";
  else if (pathname.includes('/vehicle-inspection')) pageTitle = "Vehicle Inspection";
  else if (pathname.includes('/safety-emergency')) pageTitle = "Safety & Emergency";
  else if (pathname.includes('/transport-fee')) pageTitle = "Transport Fee";
  else if (pathname.includes('/notifications')) pageTitle = "Notifications";
  else if (pathname.includes('/communication')) pageTitle = "Communication";
  else if (pathname.includes('/transport-calendar')) pageTitle = "Transport Calendar";
  else if (pathname.includes('/special-transport')) pageTitle = "Special / Event Transport";
  else if (pathname.includes('/transport-documents')) pageTitle = "Documents";
  else if (pathname.includes('/reports')) pageTitle = "Reports & Analytics";
  else if (pathname.includes('/audit-history')) pageTitle = "Audit & History";
  else if (pathname.includes('/my-profile')) pageTitle = "My Profile";

  return (
    <>
      <header className="fixed top-0 right-0 left-0 lg:left-[280px] z-10 h-16 bg-sidebar border-b border-border/20 flex items-center justify-between px-4 lg:px-6 transition-all duration-300">
        
        {/* Left Side: Mobile Menu Toggle & Title */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMobileSidebar}
            className="lg:hidden p-2 -ml-2 rounded-md text-sidebar-text-muted hover:bg-[#0891B2]-subtle hover:text-sidebar-text transition-colors"
          >
            <Menu size={20} />
          </button>
          <h2 className="text-lg font-semibold text-sidebar-text hidden sm:block">{pageTitle}</h2>
        </div>

        {/* Right Side: Search, Notifications, Profile */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Quick Search */}
          <div className="hidden md:flex items-center bg-secondary/50 border border-border/30 rounded-full px-4 py-1.5 w-64 focus-within:w-80 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
            <Search size={16} className="text-sidebar-text-muted mr-2" />
            <input 
              type="text" 
              placeholder="Search route, driver, vehicle..." 
              className="bg-transparent border-none outline-none text-[13px] text-sidebar-text w-full placeholder:text-sidebar-text-muted"
            />
          </div>

          {/* Messages */}
          <button className="p-2 rounded-full bg-transparent hover:bg-secondary text-sidebar-text-muted hover:text-[#0891B2] transition-colors hidden sm:block">
            <MessageSquare size={18} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2 rounded-full transition-colors relative ${
                showNotifications ? "bg-secondary text-[#0891B2] shadow-sm" : "bg-transparent hover:bg-secondary text-sidebar-text-muted hover:text-[#0891B2]"
              }`}
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 text-[#06B6D4] rounded-full border border-sidebar"></span>
            </button>
            
            {/* Notifications Dropdown */}
            {showNotifications && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                <div className="absolute right-0 top-full mt-2 w-80 bg-sidebar border border-border/20 rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 border-b border-border/20 flex items-center justify-between bg-secondary/30">
                    <h3 className="font-semibold text-sm text-sidebar-text">Alerts & Events</h3>
                    <button className="text-xs text-[#0891B2] hover:underline font-medium">Mark all as read</button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {[
                      { title: "Bus 4 Delayed", time: "10 mins ago", desc: "Route R-05 is running 15 mins behind schedule." },
                      { title: "Driver Leave", time: "1 hour ago", desc: "Amit Kumar requested leave for tomorrow." },
                      { title: "Vehicle Fitness Expiring", time: "2 hours ago", desc: "VEH-002 fitness certificate expires in 3 days." }
                    ].map((notif, i) => (
                      <div key={i} className="p-4 border-b border-border/10 hover:bg-secondary/20 transition-colors cursor-pointer last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-[13px] font-semibold text-sidebar-text">{notif.title}</h4>
                          <span className="text-[10px] text-sidebar-text-muted whitespace-nowrap ml-2">{notif.time}</span>
                        </div>
                        <p className="text-xs text-sidebar-text-muted">{notif.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-border/20 bg-secondary/10">
                    <Link href="/transport-manager/notifications" onClick={() => setShowNotifications(false)} className="block w-full text-center text-xs font-semibold text-[#0891B2] py-1 hover:underline">
                      View All Alerts
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="hidden sm:block h-6 w-px bg-sidebar-text-muted/30 mx-1"></div>

          {/* User Profile */}
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className={`flex items-center gap-3 p-1.5 rounded-full sm:rounded-lg transition-colors group ${
                showProfileMenu ? "bg-secondary" : "hover:bg-secondary/50"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-[#0891B2]/20 border border-primary/30 flex items-center justify-center text-[#0891B2] font-bold overflow-hidden">
                RV
              </div>
              <div className="hidden sm:flex flex-col items-start text-left">
                <span className={`text-sm font-semibold transition-colors ${showProfileMenu ? "text-[#0891B2]" : "text-sidebar-text group-hover:text-[#0891B2]"}`}>Rajesh V.</span>
                <span className="text-xs text-sidebar-text-muted hidden md:block">Transport Manager</span>
              </div>
              <ChevronDown size={16} className={`ml-1 hidden sm:block transition-colors ${showProfileMenu ? "text-[#0891B2]" : "text-sidebar-text-muted group-hover:text-[#0891B2]"}`} />
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowProfileMenu(false)} />
                <div className="absolute right-0 top-full mt-2 w-56 bg-sidebar border border-border/20 rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 p-1">
                  <div className="p-3 border-b border-border/20 mb-1 sm:hidden">
                    <span className="block text-sm font-semibold text-sidebar-text">Rajesh V.</span>
                    <span className="block text-xs text-sidebar-text-muted">Transport Manager</span>
                  </div>
                  <Link href="/transport-manager/my-profile" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-sidebar-text-muted hover:text-[#0891B2] hover:bg-secondary rounded-lg transition-colors">
                    <User size={16} /> My Profile
                  </Link>
                  <Link href="/transport-manager/my-profile" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-sidebar-text-muted hover:text-[#0891B2] hover:bg-secondary rounded-lg transition-colors">
                    <Settings size={16} /> Preferences
                  </Link>
                  <div className="h-px bg-border/20 my-1"></div>
                  <Link href="/login" onClick={() => setShowProfileMenu(false)} className="flex items-center gap-3 px-3 py-2 text-sm text-danger hover:text-[#06B6D4]/10 rounded-lg transition-colors">
                    <LogOut size={16} /> Sign Out
                  </Link>
                </div>
              </>
            )}
          </div>

        </div>
      </header>
    </>
  );
}
