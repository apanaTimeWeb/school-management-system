"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Menu, Bell, UserCircle, Search, LogOut, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  toggleSidebar: () => void;
}

export default function StudentHeader({ toggleSidebar }: Props) {
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
    <header className="h-16 bg-[#0C4A6E] border-b border-white/10 shadow-sm flex items-center justify-between px-4 md:px-8 shrink-0 sticky top-0 z-30">
      
      {/* Left section (Hamburger & Search) */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-lg text-white/80 hover:bg-[#38BDF8]/20 hover:text-white transition-colors lg:hidden"
        >
          <Menu size={24} />
        </button>
        
        <div className="hidden md:flex items-center bg-black/20 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-[#38BDF8]/50 transition-all w-64">
          <Search size={16} className="text-white/80 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="Search classes, homework..." 
            className="bg-transparent border-none outline-none text-sm text-white w-full font-semibold placeholder:font-normal placeholder:text-white/80"
          />
        </div>
      </div>

      {/* Right section (Notifications & Profile) */}
      <div className="flex items-center gap-3 sm:gap-6">
        
        <Link href="/student/notifications" className="relative p-2 rounded-full text-white/80 hover:bg-[#38BDF8]/20 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-[#0284C7] border border-[#0C4A6E] animate-pulse"></span>
        </Link>

        <div className="w-px h-6 bg-white/30 hidden sm:block"></div>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="text-right hidden sm:block">
              <h4 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-none mb-1">Rahul Sharma</h4>
              <p className="text-[11px] font-semibold text-white/80 uppercase tracking-wider leading-none">Class X - A</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 rounded-full border-2 border-white/10 group-hover:border-[#38BDF8] overflow-hidden transition-colors shadow-sm bg-black/20">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul&backgroundColor=b6e3f4" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <ChevronDown size={14} className="text-white/80 group-hover:text-[#38BDF8] transition-transform hidden sm:block" style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border rounded-xl shadow-lg overflow-hidden motion-safe:animate-[fadeIn_0.15s_ease-out] z-50">
              <div className="p-3 border-b border-border bg-page sm:hidden">
                <h4 className="text-sm font-bold text-[#0284C7]">Rahul Sharma</h4>
                <p className="text-[11px] font-semibold text-text-secondary uppercase">Class X - A</p>
              </div>
              <div className="p-1">
                <Link 
                  href="/student/profile" 
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-text-secondary hover:text-[#0284C7] hover:bg-[#0284C7]/5 rounded-lg transition-colors"
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

