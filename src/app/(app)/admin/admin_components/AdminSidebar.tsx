"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, School } from "lucide-react";
import clsx from "clsx";

const adminCategories = [
  { id: "dashboard", title: "01. Dashboard", icon: School, href: "/admin/01-dashboard" },
  { id: "students", title: "02. Students", icon: School, href: "/admin/02-student-management" },
  { id: "admissions", title: "03. Admissions", icon: School, href: "/admin/03-admission-management" },
  { id: "parents", title: "04. Parents & Guardians", icon: School, href: "/admin/04-parent-management" },
  { id: "academics", title: "05. Academics", icon: School, href: "/admin/05-academic-management" },
  { id: "attendance", title: "06. Attendance", icon: School, href: "/admin/06-attendance-management" },
  { id: "examinations", title: "07. Examinations & Results", icon: School, href: "/admin/07-examination-management" },
  { id: "fees", title: "08. Fees & Finance", icon: School, href: "/admin/08-fee-management" },
  { id: "staff", title: "09. Staff & HR", icon: School, href: "/admin/09-staff-management" },
  { id: "leave", title: "10. Leave Management", icon: School, href: "/admin/10-leave-management" },
  { id: "communication", title: "11. Communication", icon: School, href: "/admin/11-communication" },
  { id: "timetable", title: "12. Timetable", icon: School, href: "/admin/12-timetable" },
  { id: "transport", title: "13. Transport Management", icon: School, href: "/admin/13-transport-management" },
  { id: "library", title: "14. Library", icon: School, href: "/admin/14-library" },
  { id: "inventory", title: "15. Inventory & Assets", icon: School, href: "/admin/15-inventory-assets" },
  { id: "purchase", title: "16. Purchase & Expenses", icon: School, href: "/admin/16-purchase-expense" },
  { id: "events", title: "17. Events & Activities", icon: School, href: "/admin/17-events-activities" },
  { id: "documents", title: "18. Documents & Certificates", icon: School, href: "/admin/18-documents-certificates" },
  { id: "discipline", title: "19. Discipline & Grievance", icon: School, href: "/admin/19-discipline-grievance" },
  { id: "health", title: "20. Health & Medical", icon: School, href: "/admin/20-health-medical" },
  { id: "website", title: "21. Website / Public Content", icon: School, href: "/admin/21-website-content" },
  { id: "reports", title: "22. Reports & Analytics", icon: School, href: "/admin/22-reports" },
  { id: "approval", title: "23. Approval Center", icon: School, href: "/admin/23-approval-center" },
  { id: "search", title: "24. Search & Filters", icon: School, href: "/admin/24-search-filters" },
  { id: "settings", title: "25. Settings", icon: School, href: "/admin/25-settings" },
  { id: "security", title: "26. Security", icon: School, href: "/admin/26-security" },
  { id: "audit", title: "27. Audit Ledger", icon: School, href: "/admin/27-audit" },
  { id: "hostel", title: "28. Hostel", icon: School, href: "/admin/28-hostel" },
  { id: "profile", title: "29. My Profile", icon: School, href: "/admin/my-profile" }
];

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside 
      className={clsx(
        "fixed top-0 left-0 z-30 h-screen w-[280px] bg-sidebar border-r border-border flex flex-col transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-border/20 bg-sidebar">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary font-extrabold text-xl">
            S
          </div>
          <h1 className="text-xl font-bold text-sidebar-text tracking-tight">School<span className="text-secondary">ERP</span></h1>
        </div>
        <button 
          className="md:hidden text-sidebar-text-muted hover:text-sidebar-text"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 hide-scrollbar">
        <nav className="flex flex-col gap-1">
          {adminCategories.map((category) => {
            const Icon = category.icon;
            const isActive = pathname.startsWith(category.href);

            return (
              <div key={category.id} className="flex flex-col mb-1">
                <Link
                  href={category.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-semibold transition-colors duration-200",
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-sidebar-text-muted hover:bg-secondary/10 hover:text-sidebar-text"
                  )}
                >
                  <Icon size={16} className={clsx(isActive ? "text-primary" : "text-sidebar-text-muted group-hover:text-sidebar-text")} />
                  <span className="whitespace-nowrap">{category.title}</span>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
