"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Menu, Bell, UserCircle, Search, LogOut, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  toggleSidebar: () => void;
}

export default function ParentHeader({ toggleSidebar }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header className="h-16 bg-card border-b border-border shadow-sm flex items-center justify-between px-4 md:px-8 shrink-0 sticky top-0 z-30">
      
      {/* Left section (Hamburger & Search) */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-lg text-text-secondary hover:bg-page hover:text-pink-500 transition-colors lg:hidden"
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center bg-page border border-border rounded-full px-4 py-1.5 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500/20 transition-all w-64">
          <Search size={16} className="text-text-secondary mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search notifications, fees..." 
            className="bg-transparent border-none outline-none text-sm text-text-primary w-full font-semibold placeholder:font-normal"
          />
        </div>
      </div>

      {/* Right section (Notifications & Profile) */}
      <div className="flex items-center gap-3 sm:gap-6">
        
        <Link href="/parent/notifications" className="relative p-2 rounded-full text-text-secondary hover:bg-page hover:text-pink-500 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-pink-500 border border-white animate-pulse"></span>
        </Link>

        <div className="w-px h-6 bg-border hidden sm:block"></div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="text-right hidden sm:block">
              <h4 className="text-sm font-bold text-text-primary group-hover:text-pink-500 transition-colors leading-none mb-1">Ramesh Kumar</h4>
              <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider leading-none">Parent</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 rounded-full border-2 border-border group-hover:border-pink-500 overflow-hidden transition-colors shadow-sm bg-pink-100 flex items-center justify-center">
                 <UserCircle className="text-pink-500" size={24} />
              </div>
              <ChevronDown size={14} className="text-text-secondary group-hover:text-pink-500 transition-transform hidden sm:block" style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border rounded-xl shadow-lg overflow-hidden motion-safe:animate-[fadeIn_0.15s_ease-out] z-50">
              <div className="p-3 border-b border-border bg-page sm:hidden">
                <h4 className="text-sm font-bold text-text-primary">Ramesh Kumar</h4>
                <p className="text-[11px] font-semibold text-text-secondary uppercase">Parent</p>
              </div>
              <div className="p-1">
                <Link 
                  href="/parent/profile" 
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-text-secondary hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                >
                  <UserCircle size={16} /> My Profile
                </Link>
                <button 
                  onClick={() => { setShowDropdown(false); handleLogout(); }}
                  className="flex items-center gap-2 w-full text-left px-3 py-2.5 text-sm font-bold text-danger hover:bg-danger/10 rounded-lg transition-colors"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}

