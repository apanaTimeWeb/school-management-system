"use client";

import { useState } from "react";
import { Bell, ChevronDown, UserCircle, Menu, Search, X, Users, BookOpen, GraduationCap, CreditCard, Activity, Bus, FileText, LogOut } from "lucide-react";

interface SuperAdminHeaderProps {
  onMenuClick?: () => void;
}

export default function SuperAdminHeader({ onMenuClick }: SuperAdminHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const searchResults = [
    { type: 'Student', icon: GraduationCap, title: 'Rahul Kumar (Class 10-A)', subtitle: 'Admission No: 2024001', permission: 'Allowed' },
    { type: 'Teacher', icon: Users, title: 'Mr. Arvind Sharma', subtitle: 'Department: Mathematics', permission: 'Allowed' },
    { type: 'Payment', icon: CreditCard, title: 'Receipt #RCP-88902', subtitle: 'Amount: ₹12,500 (Paid)', permission: 'Allowed' },
    { type: 'Vehicle', icon: Bus, title: 'School Bus - DL-1PC-9988', subtitle: 'Route: City Center', permission: 'Allowed' },
    { type: 'Certificate', icon: FileText, title: 'TC-2425-001 (Priya Singh)', subtitle: 'Status: Issued', permission: 'Allowed' },
    { type: 'Log', icon: Activity, title: 'Failed Login Attempt', subtitle: 'IP: 192.168.1.45 (Admin)', permission: 'Restricted (Super Admin Only)' },
  ];

  const filteredResults = searchQuery.length > 0 
    ? searchResults.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.type.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <header className="fixed top-0 right-0 left-0 md:left-[280px] z-10 h-16 bg-sidebar border-b border-border/20 flex items-center justify-between px-4 md:px-6 transition-all duration-300">
        
        {/* Left side: Hamburger (Mobile) & Title */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md text-sidebar-text-muted hover:text-secondary hover:bg-secondary/10 transition-colors"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-lg font-bold text-sidebar-text hidden sm:block w-36">
            <span className="text-secondary">Super Admin</span>
          </h2>
          
          {/* Global Search Bar (Trigger) */}
          <div 
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-2 bg-black/20 border border-white/10 rounded-md px-3 py-1.5 w-[300px] lg:w-[400px] cursor-pointer hover:bg-black/30 hover:border-secondary/50 transition-colors text-sidebar-text-muted hover:text-sidebar-text"
          >
            <Search size={16} />
            <span className="text-sm font-semibold flex-1">Search ERP (Students, Staff, Payments...)</span>
            <span className="text-[10px] font-bold border border-white/20 px-1.5 py-0.5 rounded text-white/50">Ctrl K</span>
          </div>
        </div>

        {/* Right side: Actions & Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Mobile Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 rounded-full cursor-pointer hover:bg-secondary/10 text-sidebar-text-muted hover:text-secondary transition-colors"
          >
            <Search size={20} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className={`relative p-2 rounded-full transition-all duration-200 ease-in-out hover:scale-105 ${
                isNotificationsOpen ? "bg-secondary text-[#1E3A8A] shadow-sm" : "bg-transparent hover:bg-secondary text-sidebar-text-muted hover:text-[#1E3A8A]"
              }`}
            >
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 text-[#3B82F6] rounded-full border border-sidebar"></span>
            </button>

            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsNotificationsOpen(false)}></div>
                <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-lg shadow-lg py-1 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-border flex justify-between items-center bg-bg-page">
                    <span className="text-sm font-bold text-text-[#1E3A8A]">Notifications</span>
                    <button className="text-xs font-bold text-[#1E3A8A] hover:underline">Mark all as read</button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    <div className="p-4 border-b border-border hover:bg-bg-page cursor-pointer transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold text-text-[#1E3A8A]">System Backup Complete</span>
                        <span className="text-[10px] text-text-secondary">2 mins ago</span>
                      </div>
                      <span className="text-xs text-text-secondary">Weekly automated backup was successful.</span>
                    </div>
                    <div className="p-4 border-b border-border hover:bg-bg-page cursor-pointer transition-colors bg-[#1E3A8A]/5">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold text-danger">Failed Login Attempt</span>
                        <span className="text-[10px] text-text-secondary">15 mins ago</span>
                      </div>
                      <span className="text-xs text-text-secondary">Multiple failed attempts from IP 192.168.1.45.</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t border-border text-center bg-bg-page">
                    <button className="text-xs font-bold text-[#1E3A8A] hover:underline">View All Alerts</button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="h-6 w-px bg-border/20 hidden md:block"></div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={`flex items-center gap-2 p-1.5 md:p-2 rounded-lg transition-all duration-200 ease-in-out group ${
                isProfileOpen ? "bg-secondary shadow-sm" : "bg-transparent hover:bg-secondary"
              }`}
            >
              <UserCircle size={28} className={`transition-colors ${isProfileOpen ? "text-[#1E3A8A]" : "text-sidebar-text-muted group-hover:text-[#1E3A8A]"}`} />
              <div className="hidden md:flex flex-col items-start leading-tight">
                <span className={`text-sm font-semibold transition-colors ${isProfileOpen ? "text-[#1E3A8A]" : "text-sidebar-text group-hover:text-[#1E3A8A]"}`}>System Admin</span>
                <span className="text-xs text-sidebar-text-muted">super@erp360.com</span>
              </div>
              <ChevronDown size={16} className={`ml-1 hidden md:block transition-colors ${isProfileOpen ? "text-[#1E3A8A]" : "text-sidebar-text-muted group-hover:text-[#1E3A8A]"}`} />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)}></div>
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <a href="/super-admin/25-my-profile" className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-[#1E3A8A] hover:bg-bg-page hover:text-[#1E3A8A] transition-colors">
                    <UserCircle size={16} /> My Profile
                  </a>
                  <div className="h-px bg-border my-1"></div>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-danger hover:text-[#3B82F6]-bg hover:text-danger-strong transition-colors text-left"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </header>

      {/* Global Search Modal / Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-start pt-[10vh] px-4 animate-in fade-in duration-200">
          <div className="bg-card w-full max-w-2xl rounded-xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in slide-in-from-top-4 duration-300">
            
            {/* Search Input Area */}
            <div className="flex items-center gap-3 p-4 border-b border-border bg-bg-page">
              <Search size={24} className="text-[#1E3A8A]" />
              <input 
                type="text" 
                autoFocus
                placeholder="Search across all modules (Students, Users, Vehicles, Logs)..." 
                className="flex-1 bg-transparent border-none outline-none text-text-[#1E3A8A] text-lg font-semibold placeholder:text-text-secondary placeholder:font-normal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                className="p-1 rounded-md text-text-secondary hover:text-danger hover:text-[#3B82F6]-bg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {searchQuery.length === 0 ? (
                <div className="p-8 text-center flex flex-col items-center justify-center gap-2 text-text-secondary">
                  <Search size={48} className="opacity-20 mb-2" />
                  <p className="text-sm font-bold">Type to start searching</p>
                  <p className="text-xs">Search results are filtered based on your Super Admin permissions.</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['Users', 'Students', 'Payments', 'Logs', 'Certificates'].map(tag => (
                      <span key={tag} onClick={() => setSearchQuery(tag)} className="text-[10px] font-bold px-2 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded border border-primary/20 cursor-pointer hover:bg-[#1E3A8A] hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-page cursor-pointer group transition-colors">
                        <div className="p-2 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-md group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                          <result.icon size={20} />
                        </div>
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-text-[#1E3A8A]">{result.title}</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#1E3A8A]-subtle text-text-secondary rounded uppercase">{result.type}</span>
                          </div>
                          <span className="text-xs text-text-secondary">{result.subtitle}</span>
                        </div>
                        {result.permission === 'Allowed' ? (
                          <span className="text-[10px] font-bold text-success bg-success-bg px-2 py-1 rounded">View Access</span>
                        ) : (
                          <span className="text-[10px] font-bold text-danger text-[#3B82F6]-bg px-2 py-1 rounded">{result.permission}</span>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center flex flex-col items-center justify-center gap-2 text-text-secondary">
                      <p className="text-sm font-bold">No results found for "{searchQuery}"</p>
                      <p className="text-xs">Try searching with different keywords or module names.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-bg-page border-t border-border p-3 flex justify-between items-center text-[10px] text-text-secondary font-bold uppercase">
              <span>System-Wide Global Search Engine</span>
              <span className="flex items-center gap-1"><kbd className="bg-border px-1.5 py-0.5 rounded text-text-[#1E3A8A]">ESC</kbd> to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
