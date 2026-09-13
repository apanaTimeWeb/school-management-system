"use client";
import React from 'react';
import { Menu, Search, Bell, Moon } from 'lucide-react';
import { useLayoutStore } from './useLayoutStore';

export default function PrincipalHeader() {
  const { toggleMobileSidebar } = useLayoutStore();

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8">
      {/* Left side: Hamburger (Mobile) & Search */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleMobileSidebar}
          className="lg:hidden p-2 rounded-md bg-page border border-border text-text-secondary hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <div className="hidden md:flex items-center gap-2 bg-page border border-border rounded-full px-4 py-1.5 focus-within:border-primary/50 transition-colors">
          <Search size={16} className="text-text-secondary" />
          <input 
            type="text" 
            placeholder="Search students, staff..." 
            className="bg-transparent border-none outline-none text-[13px] text-text-primary w-64 placeholder:text-text-secondary/50"
          />
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle placeholder */}
        <button className="p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-primary transition-colors">
          <Moon size={20} />
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-white/5 text-text-secondary hover:text-info transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border border-card"></span>
        </button>

        {/* Profile */}
        <div className="h-8 w-px bg-border mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-bold text-text-primary group-hover:text-primary transition-colors">Dr. A. Sharma</p>
            <p className="text-[11px] text-text-secondary font-medium">Principal</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold shadow-sm">
            AS
          </div>
        </div>
      </div>
    </header>
  );
}
