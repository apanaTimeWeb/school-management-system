"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { 
  ChevronDown, ChevronRight, X, Shield
} from 'lucide-react';
import clsx from 'clsx';

const MENU_STRUCTURE = [
  { title: "01. Dashboard", icon: Shield, href: "/super-admin/01-dashboard", items: [] },
  { title: "02. Organization Management", icon: Shield, href: "/super-admin/02-organization-management", items: ["School Structure Master", "Department Master", "House Master"] },
  { title: "03. Academic Setup", icon: Shield, href: "/super-admin/03-academic-setup", items: ["Academic Session Master", "Class / Section Master", "Subject Master"] },
  { title: "04. Users & Access", icon: Shield, href: "/super-admin/04-users-access", items: ["User Management", "Role Management", "Permission Management", "Device/Session Management"] },
  { title: "05. System Settings", icon: Shield, href: "/super-admin/05-system-settings", items: ["System Settings", "Branding", "Website Global Settings", "Category / Master Data", "Numbering / Sequence"] },
  { title: "06. Communication", icon: Shield, href: "/super-admin/06-communication", items: ["Notification Configuration", "Email/SMS/WhatsApp Config"] },
  { title: "07. Finance Config", icon: Shield, href: "/super-admin/07-finance-configuration", items: ["Financial Year Master", "Payment Gateway Configuration"] },
  { title: "08. HR Config", icon: Shield, href: "/super-admin/08-hr-configuration", items: ["HR Master Settings"] },
  { title: "09. Library Config", icon: Shield, href: "/super-admin/09-library-configuration", items: ["Library Master Settings"] },
  { title: "10. Transport Config", icon: Shield, href: "/super-admin/10-transport-configuration", items: ["Transport Master Settings"] },
  { title: "11. Hostel Config", icon: Shield, href: "/super-admin/11-hostel-configuration", items: ["Hostel Master Settings"] },
  { title: "12. Docs & Certificates", icon: Shield, href: "/super-admin/12-documents-certificates", items: ["Document/Certificate Settings"] },
  { title: "13. Integrations", icon: Shield, href: "/super-admin/13-integrations", items: ["Integration/API", "API Management"] },
  { title: "14. Data Management", icon: Shield, href: "/super-admin/14-data-management", items: ["Backup & Restore", "Data Import/Export"] },
  { title: "15. Approval Workflow", icon: Shield, href: "/super-admin/15-approval-workflow", items: ["Approval Workflow"] },
  { title: "16. Automation", icon: Shield, href: "/super-admin/16-automation", items: ["Automation Rules"] },
  { title: "17. Reports & Analytics", icon: Shield, href: "/super-admin/17-reports-analytics", items: ["System", "Activity"] },
  { title: "18. Audit & Security", icon: Shield, href: "/super-admin/18-audit-security", items: ["Security Settings", "Login/Identity Settings", "Audit Logs", "Data Retention", "Configuration History", "Configuration Change History"] },
  { title: "19. System Health", icon: Shield, href: "/super-admin/19-system-health", items: ["System Health"] },
  { title: "20. Support Helpdesk", icon: Shield, href: "/super-admin/20-support-helpdesk", items: ["Tickets", "Issues"] },
  { title: "21. System Announcements", icon: Shield, href: "/super-admin/21-system-announcements", items: ["Maintenance", "Notices"] },
  { title: "22. Maintenance Mode", icon: Shield, href: "/super-admin/22-maintenance-mode", items: ["Maintenance Mode"] },
  { title: "23. Module Management", icon: Shield, href: "/super-admin/23-module-management", items: ["Module Enable/Disable"] },
  { title: "24. Deleted Data", icon: Shield, href: "/super-admin/24-deleted-data-recovery", items: ["Recycle Bin"] },
  { title: "25. My Profile", icon: Shield, href: "/super-admin/25-my-profile", items: ["Profile", "Security"] },
  { title: "26. Emergency Controls", icon: Shield, href: "/super-admin/26-emergency-controls", items: ["Lockdown", "Reset"] },
];

interface SuperAdminSidebarProps {
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
}

export default function SuperAdminSidebar({ isOpen, setIsOpen }: SuperAdminSidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string, e: React.MouseEvent) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <aside 
      className={clsx(
        "fixed top-0 left-0 z-30 h-screen w-[280px] bg-[#172554] border-r border-white/10 flex flex-col transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-[#172554]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center text-white font-extrabold text-xl">
            S
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">Super<span className="text-[#3B82F6]">Admin</span></h1>
        </div>
        
        {/* Mobile Close Button */}
        {setIsOpen && (
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white/60 hover:text-[#3B82F6] p-1"
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
                    isActive ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]/50"
                )}>
                  <Link
                    href={category.href}
                    onClick={(e) => {
                      if (hasItems) {
                        toggleSection(category.title, e);
                      }
                      if (setIsOpen) setIsOpen(false);
                    }}
                    className={clsx(
                      "flex-1 px-3 py-2.5 text-[13px] font-semibold flex items-center justify-between gap-3 w-full",
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && <Icon size={16} className={clsx(isActive ? "text-white" : "text-white/70 group-hover:text-white")} />}
                      <span className="whitespace-nowrap">{category.title}</span>
                    </div>
                    {hasItems && (
                      <div className={clsx("p-1 rounded-md transition-colors", isActive ? "text-white" : "text-white/70")}>
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
                        className="pl-4 py-1.5 text-xs text-white/70 hover:text-white cursor-pointer transition-colors"
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
