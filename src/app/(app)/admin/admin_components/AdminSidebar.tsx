"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard } from "lucide-react";
import clsx from "clsx";

const adminCategories = [
  {
    id: "dashboard",
    title: "1. Dashboard",
    icon: LayoutDashboard,
    href: "/admin/01-dashboard",
  },
  {
    id: "student-management",
    title: "2. Student Management",
    icon: LayoutDashboard, // I'll just reuse LayoutDashboard or import Users
    href: "/admin/02-student-management",
  },
  {
    id: "admission-management",
    title: "3. Admission Management",
    icon: LayoutDashboard,
    href: "/admin/03-admission-management",
  },
  {
    id: "parent-management",
    title: "4. Parent / Guardian Management",
    icon: LayoutDashboard,
    href: "/admin/04-parent-management",
  },
  {
    id: "academic-management",
    title: "5. Academic Management",
    icon: LayoutDashboard,
    href: "/admin/05-academic-management",
  },
  {
    id: "attendance-management",
    title: "6. Attendance Management",
    icon: LayoutDashboard,
    href: "/admin/06-attendance-management",
  },
  {
    id: "examination-management",
    title: "7. Examination Management",
    icon: LayoutDashboard,
    href: "/admin/07-examination-management",
  },
  {
    id: "fee-management",
    title: "8. Fee Management",
    icon: LayoutDashboard,
    href: "/admin/08-fee-management",
  },
  {
    id: "staff-management",
    title: "9. Staff Management",
    icon: LayoutDashboard,
    href: "/admin/09-staff-management",
  },
  {
    id: "leave-management",
    title: "10. Leave Management",
    icon: LayoutDashboard,
    href: "/admin/10-leave-management",
  },
  {
    id: "communication",
    title: "11. Communication",
    icon: LayoutDashboard,
    href: "/admin/11-communication",
  },
  {
    id: "timetable",
    title: "12. Timetable",
    icon: LayoutDashboard,
    href: "/admin/12-timetable",
  },
  {
    id: "transport-management",
    title: "13. Transport Management",
    icon: LayoutDashboard,
    href: "/admin/13-transport-management",
  },
  {
    id: "library",
    title: "14. Library",
    icon: LayoutDashboard,
    href: "/admin/14-library",
  },
  {
    id: "inventory-assets",
    title: "15. Inventory / Assets",
    icon: LayoutDashboard,
    href: "/admin/15-inventory-assets",
  },
  {
    id: "purchase-expense",
    title: "16. Purchase & Expense",
    icon: LayoutDashboard,
    href: "/admin/16-purchase-expense",
  },
  {
    id: "events-activities",
    title: "17. Events & Activities",
    icon: LayoutDashboard,
    href: "/admin/17-events-activities",
  },
  {
    id: "documents-certificates",
    title: "18. Documents & Certificates",
    icon: LayoutDashboard,
    href: "/admin/18-documents-certificates",
  },
  {
    id: "discipline-grievance",
    title: "19. Discipline & Grievance",
    icon: LayoutDashboard,
    href: "/admin/19-discipline-grievance",
  },
  {
    id: "health-medical",
    title: "20. Health / Medical",
    icon: LayoutDashboard,
    href: "/admin/20-health-medical",
  },
  {
    id: "website-public-content",
    title: "21. Website / Public Content",
    icon: LayoutDashboard,
    href: "/admin/21-website-public-content",
  },
  {
    id: "reports",
    title: "22. Reports",
    icon: LayoutDashboard,
    href: "/admin/22-reports",
  },
  {
    id: "approval-center",
    title: "23. Approval Center",
    icon: LayoutDashboard,
    href: "/admin/23-approval-center",
  }
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-20 h-screen w-[240px] bg-sidebar border-r border-border flex flex-col transition-all duration-300">
      <div className="h-16 flex items-center px-6 border-b border-border bg-sidebar-header">
        <h1 className="text-xl font-bold text-text-primary tracking-tight">Admin<span className="text-primary">ERP</span></h1>
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
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:bg-sidebar-hover hover:text-text-primary"
                  )}
                >
                  <Icon size={18} className={clsx(isActive ? "text-white" : "text-text-secondary")} />
                  <span>{category.title}</span>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
