"use client";

import React from 'react';
import { LogOut } from 'lucide-react';
import ProfileOverview from './ProfileOverview';
import SecuritySettings from './SecuritySettings';
import { MOCK_USER_PROFILE, MOCK_ACTIVE_SESSIONS, MOCK_LOGIN_HISTORY } from '../my_profile_constants/my_profile.constants';

// RESPONSIBILITY: Main orchestrator for My Profile module

export default function MyProfileMain() {
  
  const handleLogout = () => {
    // In a real app, clear session and redirect to login
    alert("Logging out...");
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header & Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">👤</span> My Profile & Settings
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Manage your personal information, security preferences, and active sessions.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[rgba(239,68,68,0.1)] border border-red-500/20 text-red-500 text-sm font-bold hover:bg-red-500 hover:text-white transition-colors"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* Left Column: Personal Info (Takes up 4 cols on large screens) */}
        <div className="lg:col-span-4 flex flex-col h-full overflow-y-auto pr-1 pb-1">
           <ProfileOverview profile={MOCK_USER_PROFILE} />
        </div>

        {/* Right Column: Security & Logs (Takes up 8 cols on large screens) */}
        <div className="lg:col-span-8 flex flex-col h-full overflow-y-auto pr-1 pb-1">
           <SecuritySettings 
             sessions={MOCK_ACTIVE_SESSIONS} 
             history={MOCK_LOGIN_HISTORY} 
           />
        </div>

      </div>
      
    </div>
  );
}
