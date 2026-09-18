"use client";

import React, { useState } from 'react';
import LibrarianSidebar from './librarian_components/LibrarianSidebar';
import { Menu } from 'lucide-react';

export default function LibrarianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Sidebar Component */}
      <LibrarianSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen lg:ml-72 transition-all duration-300">
        
        {/* Mobile Header with Hamburger (Only visible on small screens) */}
        <div className="lg:hidden h-16 bg-indigo-950 text-white flex items-center px-4 shrink-0 shadow-md">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 mr-3 bg-indigo-900 rounded-lg text-indigo-100 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
          <div className="font-bold text-lg tracking-wide flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">LIB</span>
            Librarian Portal
          </div>
        </div>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
