"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  School, 
  CalendarDays,
  CreditCard,
  Building2,
  BookOpen,
  Users,
  ShieldCheck,
  Lock,
  Settings,
  DatabaseBackup,
  History,
  LogOut,
  Menu
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const SIDEBAR_LINKS = [
  { label: 'Dashboard', href: '/super-admin/dashboard', icon: LayoutDashboard },
  { label: 'School Management', href: '/super-admin/schools', icon: School },
  { label: 'Academic Sessions', href: '/super-admin/sessions', icon: CalendarDays },
  { label: 'Financial Years', href: '/super-admin/financial-years', icon: CreditCard },
  { label: 'School Structure', href: '/super-admin/structure', icon: Building2 },
  { label: 'Academics Master', href: '/super-admin/academics', icon: BookOpen },
  { label: 'User Management', href: '/super-admin/users', icon: Users },
  { label: 'Roles & Permissions', href: '/super-admin/roles', icon: ShieldCheck },
  { label: 'Security Controls', href: '/super-admin/security', icon: Lock },
  { label: 'Audit Logs', href: '/super-admin/audit', icon: History },
  { label: 'Backups', href: '/super-admin/backups', icon: DatabaseBackup },
  { label: 'System Settings', href: '/super-admin/settings', icon: Settings },
];

export default function SuperAdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-20 h-screen bg-sidebar border-r border-border transition-all duration-300 flex flex-col",
        isCollapsed ? "w-[60px]" : "w-[240px]"
      )}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-border bg-header/80 backdrop-blur-md">
        {!isCollapsed && (
          <span className="font-bold text-primary truncate text-lg">School ERP 360</span>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-md hover:bg-primary-subtle text-text-secondary hover:text-primary transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <ul className="space-y-1 px-2">
          {SIDEBAR_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group",
                    isActive 
                      ? "bg-primary-subtle text-primary border-l-4 border-primary shadow-[0_0_15px_rgba(30,58,138,0.15)]" 
                      : "text-text-secondary hover:bg-primary-subtle hover:text-primary border-l-4 border-transparent"
                  )}
                  title={isCollapsed ? link.label : undefined}
                >
                  <Icon 
                    size={18} 
                    strokeWidth={2}
                    className={cn(
                      "shrink-0 transition-colors duration-200",
                      isActive ? "text-primary" : "text-text-secondary group-hover:text-primary"
                    )}
                  />
                  {!isCollapsed && (
                    <span className="text-sm font-medium truncate">
                      {link.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-md w-full text-danger hover:bg-danger-bg transition-colors group">
          <LogOut size={18} className="shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Log out</span>}
        </button>
      </div>
    </aside>
  );
}
