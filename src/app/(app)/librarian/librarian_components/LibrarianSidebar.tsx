"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Library,
  Copy,
  Tags,
  Users,
  BookUp,
  BookDown,
  RefreshCw,
  Bookmark,
  Banknote,
  AlertTriangle,
  ArrowRightLeft,
  QrCode,
  Archive,
  ShoppingCart,
  Building2,
  HeartHandshake,
  BellRing,
  Megaphone,
  FolderOpen,
  PieChart,
  ShieldAlert,
  Settings2,
  UserCircle2,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface SidebarItem {
  title: string;
  href: string;
  icon: any;
  subItems?: { title: string; href: string }[];
}

const MENU_ITEMS: SidebarItem[] = [
  { title: 'Dashboard', href: '/librarian', icon: LayoutDashboard },
  
  // Catalog Management
  { title: 'Book Catalog', href: '/librarian/books', icon: Library },
  { title: 'Book Copies', href: '/librarian/books', icon: Copy },
  { title: 'Categories', href: '/librarian/categories', icon: Tags },
  { title: 'Library Members', href: '/librarian/members', icon: Users },
  
  // Circulation
  { title: 'Issue Books', href: '/librarian/circulation/issue', icon: BookUp },
  { title: 'Return Books', href: '/librarian/circulation/return', icon: BookDown },
  { title: 'Renewals', href: '/librarian/circulation/renew', icon: RefreshCw },
  { title: 'Reservations', href: '/librarian/reservations', icon: Bookmark },
  
  // Penalties
  { title: 'Fines & Penalties', href: '/librarian/fines', icon: Banknote },
  { title: 'Lost & Damaged', href: '/librarian/lost-damaged', icon: AlertTriangle },
  
  // Tracking
  { title: 'Transactions', href: '/librarian/transactions', icon: ArrowRightLeft },
  { title: 'Barcode / QR', href: '/librarian/barcode', icon: QrCode },
  { title: 'Library Inventory', href: '/librarian/inventory', icon: Archive },
  
  // Sourcing
  { title: 'Acquisitions', href: '/librarian/acquisition', icon: ShoppingCart },
  { title: 'Suppliers', href: '/librarian/suppliers', icon: Building2 },
  { title: 'Donations', href: '/librarian/donations', icon: HeartHandshake },
  
  // Communications & Docs
  { title: 'Notifications', href: '/librarian/notifications', icon: BellRing },
  { title: 'Communication', href: '/librarian/communication', icon: Megaphone },
  { title: 'Documents', href: '/librarian/documents', icon: FolderOpen },
  
  // Analytics & Admin
  { title: 'Reports', href: '/librarian/reports', icon: PieChart },
  { title: 'Audit & History', href: '/librarian/audit', icon: ShieldAlert },
  { title: 'Library Settings', href: '/librarian/settings', icon: Settings2 },
  { title: 'My Profile', href: '/librarian/profile', icon: UserCircle2 },
];

export default function LibrarianSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed top-0 left-0 h-screen bg-indigo-950 text-indigo-100 w-72 z-50 transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-6 bg-indigo-950/50 border-b border-indigo-900/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Library className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-white text-lg leading-tight tracking-wide">LIBRARIAN</h1>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Portal System</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-indigo-300 hover:text-white p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto custom-scrollbar py-6 px-4 space-y-1">
          {MENU_ITEMS.map((item, index) => {
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={index}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-indigo-300 hover:bg-indigo-900/50 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-indigo-400 group-hover:text-indigo-200'}`} />
                <span className="font-medium text-sm">{item.title}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white ml-auto"></div>}
              </Link>
            )
          })}
        </div>

        {/* Footer / Logout */}
        <div className="p-4 border-t border-indigo-900/50 shrink-0 bg-indigo-950/80">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-300 hover:bg-rose-500/10 hover:text-rose-200 transition-colors group font-bold text-sm">
            <LogOut className="w-5 h-5 text-rose-400 group-hover:text-rose-300" />
            Secure Logout
          </button>
        </div>
      </aside>
    </>
  );
}
