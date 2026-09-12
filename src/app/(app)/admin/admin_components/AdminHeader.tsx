"use client";

import { Bell, ChevronDown, UserCircle, Menu } from "lucide-react";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-[280px] z-10 h-16 bg-header/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 md:px-6 transition-all duration-300">
      
      {/* Left side: Page Title / Breadcrumbs can go here */}
      <div className="flex items-center gap-3">
        <button 
          className="md:hidden p-2 -ml-2 rounded-md text-text-secondary hover:bg-primary-subtle hover:text-primary transition-colors"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-semibold text-text-primary hidden sm:block">School Admin Portal</h2>
      </div>

      {/* Right side: Actions & Profile */}
      <div className="flex items-center gap-4">
        
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-primary-subtle text-text-secondary hover:text-primary transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border border-header"></span>
        </button>

        <div className="h-6 w-px bg-border"></div>

        {/* User Profile Dropdown Placeholder */}
        <button className="flex items-center gap-2 p-1.5 rounded-md hover:bg-primary-subtle transition-colors group">
          <UserCircle size={28} className="text-text-secondary group-hover:text-primary transition-colors" />
          <div className="hidden md:flex flex-col items-start leading-tight">
            <span className="text-sm font-semibold text-text-primary">Principal / Admin</span>
            <span className="text-xs text-text-secondary">admin@erp360.com</span>
          </div>
          <ChevronDown size={16} className="text-text-secondary ml-1 hidden md:block" />
        </button>

      </div>
    </header>
  );
}
