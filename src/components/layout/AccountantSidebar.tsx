"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, X, Calculator, IndianRupee, FileText, Users, Activity, Globe, AlertTriangle, Gift, Undo2, ShieldAlert, Wallet, TrendingUp, CreditCard, Banknote, Landmark, CalendarCheck, GitMerge, FileSpreadsheet, PieChart, DownloadCloud, MessageSquare, Archive, History, Search, User } from 'lucide-react';
import { useAccountantLayoutStore } from './useAccountantLayoutStore';

const MENU_ITEMS = [
  // User's Checklist Items
  { href: '/accountant/fee-master', label: 'Fee Master access as permitted', icon: <IndianRupee size={20} className="text-emerald-500" /> },
  { href: '/accountant/student-fee', label: 'Student Fee', icon: <Users size={20} className="text-purple-500" /> },
  { href: '/accountant/collect-fee', label: 'Fee Collection', icon: <IndianRupee size={20} className="text-emerald-500" /> },
  { href: '/accountant/receipts', label: 'Receipts', icon: <FileText size={20} className="text-teal-500" /> },
  { href: '/accountant/online-payments', label: 'Online Payments', icon: <Globe size={20} className="text-sky-500" /> },
  { href: '/accountant/outstanding', label: 'Outstanding', icon: <AlertTriangle size={20} className="text-rose-500" /> },
  { href: '/accountant/defaulters', label: 'Defaulters', icon: <AlertTriangle size={20} className="text-rose-500" /> },
  { href: '/accountant/concession', label: 'Concession', icon: <Gift size={20} className="text-fuchsia-500" /> },
  { href: '/accountant/scholarship', label: 'Scholarship', icon: <Gift size={20} className="text-fuchsia-500" /> },
  { href: '/accountant/fine', label: 'Fine', icon: <ShieldAlert size={20} className="text-red-500" /> },
  { href: '/accountant/refund', label: 'Refund', icon: <Undo2 size={20} className="text-orange-500" /> },
  { href: '/accountant/expenses', label: 'Expenses', icon: <Wallet size={20} className="text-pink-500" /> },
  { href: '/accountant/other-income', label: 'Other Income', icon: <TrendingUp size={20} className="text-green-500" /> },
  { href: '/accountant/cash-management', label: 'Cash Management', icon: <Banknote size={20} className="text-emerald-600" /> },
  { href: '/accountant/bank-transactions', label: 'Bank Transactions', icon: <Landmark size={20} className="text-cyan-600" /> },
  { href: '/accountant/daily-closing', label: 'Daily Closing', icon: <CalendarCheck size={20} className="text-blue-600" /> },
  { href: '/accountant/reconciliation', label: 'Reconciliation', icon: <GitMerge size={20} className="text-white" /> },
  { href: '/accountant/invoices', label: 'Invoices', icon: <FileSpreadsheet size={20} className="text-amber-500" /> },
  { href: '/accountant/financial-reports', label: 'Financial Reports', icon: <PieChart size={20} className="text-purple-600" /> },
  { href: '/accountant/payment-history', label: 'Payment History', icon: <History size={20} className="text-sky-600" /> },
  { href: '/accountant/audit-history', label: 'Audit & History', icon: <History size={20} className="text-rose-600" /> },
  // Un-removed default items (Restored to ensure no loss of features)
  { href: '/accountant/dashboard', label: 'Dashboard', icon: <Activity size={20} className="text-blue-500" /> },
  { href: '/accountant/global-search', label: 'Omni-Search', icon: <Search size={20} className="text-indigo-500" /> },
  { href: '/accountant/payment-methods', label: 'Payment Methods', icon: <CreditCard size={20} className="text-violet-500" /> },
  { href: '/accountant/reports-export', label: 'Reports Export', icon: <DownloadCloud size={20} className="text-sky-600" /> },
  { href: '/accountant/communication', label: 'Communication', icon: <MessageSquare size={20} className="text-amber-600" /> },
  { href: '/accountant/documents', label: 'Documents', icon: <Archive size={20} className="text-stone-500" /> },
];

export default function AccountantSidebar() {
  const pathname = usePathname();
  const { isMobileSidebarOpen, setMobileSidebarOpen } = useAccountantLayoutStore();

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-[#475569] border-r border-border transition-transform duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border/20 bg-[#475569]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-white font-extrabold text-[18px]">
              A
            </div>
            <span className="font-bold text-[18px] text-white tracking-tight">School<span className="text-secondary">ERP</span></span>
          </div>
          <button 
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1.5 overflow-y-auto h-[calc(100vh-140px)] custom-scrollbar">
          <p className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-3 px-2">Finance Menu</p>
          {MENU_ITEMS.map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-semibold text-[14px]
                  ${isActive 
                    ? 'bg-secondary text-white shadow-sm' 
                    : 'text-white/60 hover:text-white hover:bg-[#475569]/50 border border-transparent'}
                `}
              >
                <span className={isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}>
                  {item.icon}
                </span>
                {String(index + 1).padStart(2, '0')} - {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-border/20 bg-[#475569]">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-danger hover:bg-danger/10 transition-colors font-semibold text-[14px]">
            <Settings size={20} className="text-white/60" />
            Settings
          </button>
        </div>
      </aside>
    </>
  );
}
