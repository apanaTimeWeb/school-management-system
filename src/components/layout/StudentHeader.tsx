"use client";

import React from 'react';
import { Menu, Bell, UserCircle, Search } from 'lucide-react';
import Link from 'next/link';

interface Props {
  toggleSidebar: () => void;
}

export default function StudentHeader({ toggleSidebar }: Props) {
  return (
    <header className="h-16 bg-card border-b border-border shadow-sm flex items-center justify-between px-4 md:px-8 shrink-0 sticky top-0 z-30">
      
      {/* Left section (Hamburger & Search) */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-lg text-text-secondary hover:bg-page hover:text-primary transition-colors lg:hidden"
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center bg-page border border-border rounded-full px-4 py-1.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all w-64">
          <Search size={16} className="text-text-secondary mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search classes, homework..." 
            className="bg-transparent border-none outline-none text-sm text-text-primary w-full font-semibold placeholder:font-normal"
          />
        </div>
      </div>

      {/* Right section (Notifications & Profile) */}
      <div className="flex items-center gap-3 sm:gap-6">
        
        <Link href="/student/notifications" className="relative p-2 rounded-full text-text-secondary hover:bg-page hover:text-primary transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-danger border border-white animate-pulse"></span>
        </Link>

        <div className="w-px h-6 bg-border hidden sm:block"></div>

        <Link href="/student/profile" className="flex items-center gap-3 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <h4 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors leading-none mb-1">Rahul Sharma</h4>
            <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider leading-none">Class X - A</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-border group-hover:border-primary overflow-hidden transition-colors shadow-sm bg-page">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </Link>

      </div>

    </header>
  );
}
