"use client";

import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

export default function TransportHeader() {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search transport modules..." 
            className="w-full bg-page border border-border rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-text-secondary hover:text-primary transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
          <UserCircle size={24} />
        </div>
      </div>
    </header>
  );
}
