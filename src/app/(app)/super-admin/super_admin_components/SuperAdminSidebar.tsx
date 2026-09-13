"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { 
  ChevronDown, ChevronRight, X, LayoutDashboard, Building2, BookOpen, 
  Users, Settings, MessageSquare, IndianRupee, Briefcase, Library, 
  Bus, Building, FileText, Link as LinkIcon, Database, CheckCircle, 
  Zap, BarChart3, ShieldAlert, Activity, LifeBuoy, Bell, Wrench, 
  Blocks, Trash2, User, AlertOctagon
} from 'lucide-react';
import clsx from 'clsx';

const MENU_STRUCTURE = [
  { title: "01. Dashboard", icon: LayoutDashboard, href: "/super-admin/01-dashboard", items: [] },
  { title: "02. Organization Management", icon: Building2, href: "/super-admin/02-organization-management", items: ["School", "Branches", "Campuses"] },
  { title: "03. Academic Setup", icon: BookOpen, href: "/super-admin/03-academic-setup", items: ["Sessions", "Classes", "Subjects"] },
  { title: "04. Users & Access", icon: Users, href: "/super-admin/04-users-access", items: ["Users", "Roles", "Permissions"] },
  { title: "05. System Settings", icon: Settings, href: "/super-admin/05-system-settings", items: ["General", "Localization"] },
  { title: "06. Communication", icon: MessageSquare, href: "/super-admin/06-communication", items: ["SMS", "Email", "Templates"] },
  { title: "07. Finance Config", icon: IndianRupee, href: "/super-admin/07-finance-configuration", items: ["Payment Gateway", "Fee Masters"] },
  { title: "08. HR Config", icon: Briefcase, href: "/super-admin/08-hr-configuration", items: ["Employee Types", "Leave Policies"] },
  { title: "09. Library Config", icon: Library, href: "/super-admin/09-library-configuration", items: ["Categories", "Rules"] },
  { title: "10. Transport Config", icon: Bus, href: "/super-admin/10-transport-configuration", items: ["Vehicles", "Routes"] },
  { title: "11. Hostel Config", icon: Building, href: "/super-admin/11-hostel-configuration", items: ["Hostels", "Rooms"] },
  { title: "12. Docs & Certificates", icon: FileText, href: "/super-admin/12-documents-certificates", items: ["Types", "Templates"] },
  { title: "13. Integrations", icon: LinkIcon, href: "/super-admin/13-integrations", items: ["APIs", "Webhooks"] },
  { title: "14. Data Management", icon: Database, href: "/super-admin/14-data-management", items: ["Import", "Export", "Backup"] },
  { title: "15. Approval Workflow", icon: CheckCircle, href: "/super-admin/15-approval-workflow", items: ["Builder", "Rules"] },
  { title: "16. Automation", icon: Zap, href: "/super-admin/16-automation", items: ["Rules", "Jobs"] },
  { title: "17. Reports & Analytics", icon: BarChart3, href: "/super-admin/17-reports-analytics", items: ["System", "Activity"] },
  { title: "18. Audit & Security", icon: ShieldAlert, href: "/super-admin/18-audit-security", items: ["Audit Logs", "Security Alerts"] },
  { title: "19. System Health", icon: Activity, href: "/super-admin/19-system-health", items: ["Server", "Database"] },
  { title: "20. Support Helpdesk", icon: LifeBuoy, href: "/super-admin/20-support-helpdesk", items: ["Tickets", "Issues"] },
  { title: "21. System Announcements", icon: Bell, href: "/super-admin/21-system-announcements", items: ["Maintenance", "Notices"] },
  { title: "22. Maintenance Mode", icon: Wrench, href: "/super-admin/22-maintenance-mode", items: ["Schedule", "History"] },
  { title: "23. Module Management", icon: Blocks, href: "/super-admin/23-module-management", items: ["Enable", "Disable"] },
  { title: "24. Deleted Data", icon: Trash2, href: "/super-admin/24-deleted-data-recovery", items: ["Restore", "Permanent Delete"] },
  { title: "25. My Profile", icon: User, href: "/super-admin/25-my-profile", items: ["Profile", "Security"] },
  { title: "26. Emergency Controls", icon: AlertOctagon, href: "/super-admin/26-emergency-controls", items: ["Lockdown", "Reset"] },
];

interface SuperAdminSidebarProps {
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
}

export default function SuperAdminSidebar({ isOpen, setIsOpen }: SuperAdminSidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <aside 
      className={clsx(
        "fixed top-0 left-0 z-30 h-screen w-[280px] bg-sidebar border-r border-border/20 flex flex-col transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-border/20 bg-sidebar">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-extrabold text-xl">
            S
          </div>
          <h1 className="text-xl font-bold text-sidebar-text tracking-tight">Super<span className="text-secondary">Admin</span></h1>
        </div>
        
        {/* Mobile Close Button */}
        {setIsOpen && (
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden text-sidebar-text-muted hover:text-secondary p-1"
          >
            <X size={24} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 hide-scrollbar">
        <nav className="flex flex-col gap-1 pb-10">
          {MENU_STRUCTURE.map((category) => {
            const hasItems = category.items && category.items.length > 0;
            const isOpenSection = openSections[category.title];
            const isActive = pathname.startsWith(category.href);
            const Icon = category.icon;
            
            return (
              <div key={category.title} className="flex flex-col mb-1">
                <div className={clsx(
                    "flex items-center justify-between rounded-md transition-colors duration-200 group",
                    isActive ? "bg-secondary" : "hover:bg-secondary/10"
                )}>
                  <Link
                    href={hasItems ? "#" : category.href}
                    onClick={(e) => {
                      if (hasItems) {
                        e.preventDefault();
                        toggleSection(category.title, e);
                      } else {
                        if (setIsOpen) setIsOpen(false);
                      }
                    }}
                    className={clsx(
                      "flex-1 px-3 py-2.5 text-[13px] font-semibold flex items-center justify-between gap-3 w-full",
                      isActive ? "text-primary" : "text-sidebar-text-muted hover:text-sidebar-text"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && <Icon size={16} className={clsx(isActive ? "text-primary" : "text-sidebar-text-muted group-hover:text-sidebar-text")} />}
                      <span className="whitespace-nowrap">{category.title}</span>
                    </div>
                    {hasItems && (
                      <div className={clsx("p-1 rounded-md transition-colors", isActive ? "text-primary" : "text-sidebar-text-muted")}>
                        {isOpenSection ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      </div>
                    )}
                  </Link>
                </div>

                {hasItems && isOpenSection && (
                  <div className="ml-9 border-l border-border/30 flex flex-col gap-1 mt-1 mb-2">
                    {category.items.map((item) => (
                      <div
                        key={item}
                        className="pl-4 py-1.5 text-xs text-sidebar-text-muted/70 cursor-default"
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
