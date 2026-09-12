"use client";

import { Bell, ChevronDown, UserCircle, Menu } from "lucide-react";

interface SuperAdminHeaderProps {
  onMenuClick?: () => void;
}

export default function SuperAdminHeader({ onMenuClick }: SuperAdminHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-[280px] z-10 h-16 bg-sidebar border-b border-border/20 flex items-center justify-between px-4 md:px-6 transition-all duration-300">
      
      {/* Left side: Hamburger (Mobile) & Title */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-md text-sidebar-text-muted hover:text-secondary hover:bg-secondary/10 transition-colors"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-bold text-sidebar-text hidden sm:block">
          <span className="text-secondary">Super Admin</span> Portal
        </h2>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-3 md:gap-4">
        
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-secondary/10 text-sidebar-text-muted hover:text-secondary transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border border-sidebar"></span>
        </button>

        <div className="h-6 w-px bg-border/20 hidden md:block"></div>

        {/* User Profile Dropdown */}
        <button className="flex items-center gap-2 p-1.5 md:p-2 rounded-md hover:bg-secondary/10 transition-colors group">
          <UserCircle size={28} className="text-sidebar-text-muted group-hover:text-secondary transition-colors" />
          <div className="hidden md:flex flex-col items-start leading-tight">
            <span className="text-sm font-bold text-sidebar-text">System Admin</span>
            <span className="text-xs text-sidebar-text-muted">super@erp360.com</span>
          </div>
          <ChevronDown size={16} className="text-sidebar-text-muted ml-1 hidden md:block group-hover:text-secondary" />
        </button>

      </div>
    </header>
  );
}
