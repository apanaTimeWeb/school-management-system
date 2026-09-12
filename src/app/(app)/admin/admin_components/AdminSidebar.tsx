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
