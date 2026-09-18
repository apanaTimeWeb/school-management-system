"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLibrarianLayoutStore } from './useLibrarianLayoutStore';
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
  { title: 'Book Copies', href: '/librarian/books/copies', icon: Copy },
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

export default function LibrarianSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, closeMobileSidebar } = useLibrarianLayoutStore();

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed top-0 left-0 h-screen bg-indigo-950 text-indigo-100 w-[280px] z-50 transition-transform duration-300 ease-in-out flex flex-col ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 bg-indigo-950/50 border-b border-indigo-900/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <Library className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-white text-base leading-tight tracking-wide">LIBRARIAN</h1>
            </div>
          </div>
          <button onClick={closeMobileSidebar} className="lg:hidden text-indigo-300 hover:text-white p-2 -mr-2">
            <X className="w-5 h-5" />
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
                  if (window.innerWidth < 1024) closeMobileSidebar();
                }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-indigo-300 hover:bg-indigo-900/50 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-indigo-400 group-hover:text-indigo-200'}`} />
                <span className="font-medium text-[13px] tracking-wide">{item.title}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white ml-auto"></div>}
              </Link>
            )
          })}
        </div>
      </aside>
    </>
  );
}
