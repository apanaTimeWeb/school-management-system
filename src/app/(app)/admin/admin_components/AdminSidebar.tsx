"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import clsx from "clsx";

const adminCategories = [
  { id: "dashboard", title: "01. Dashboard", icon: LayoutDashboard, href: "/admin/01-dashboard" },
  { id: "students", title: "02. Students", icon: LayoutDashboard, href: "/admin/02-student-management" },
  { id: "admissions", title: "03. Admissions", icon: LayoutDashboard, href: "/admin/03-admission-management" },
  { id: "parents", title: "04. Parents & Guardians", icon: LayoutDashboard, href: "/admin/04-parent-management" },
  { id: "academics", title: "05. Academics", icon: LayoutDashboard, href: "/admin/05-academic-management" },
  { id: "attendance", title: "06. Attendance", icon: LayoutDashboard, href: "/admin/06-attendance-management" },
  { id: "timetable", title: "07. Timetable", icon: LayoutDashboard, href: "/admin/12-timetable" },
  { id: "examinations", title: "08. Examinations", icon: LayoutDashboard, href: "/admin/07-examination-management" },
  { id: "results", title: "09. Results & Report Cards", icon: LayoutDashboard, href: "/admin/09-results" },
  { id: "fees", title: "10. Fees & Finance", icon: LayoutDashboard, href: "/admin/08-fee-management" },
  { id: "staff", title: "11. Staff & HR", icon: LayoutDashboard, href: "/admin/09-staff-management" },
  { id: "leave", title: "12. Leave Management", icon: LayoutDashboard, href: "/admin/10-leave-management" },
  { id: "communication", title: "13. Communication", icon: LayoutDashboard, href: "/admin/11-communication" },
  { id: "events", title: "14. Events & Activities", icon: LayoutDashboard, href: "/admin/17-events-activities" },
  { id: "documents", title: "15. Documents & Certificates", icon: LayoutDashboard, href: "/admin/18-documents-certificates" },
  { id: "library", title: "16. Library [Conditional]", icon: LayoutDashboard, href: "/admin/14-library" },
  { id: "transport", title: "17. Transport [Conditional]", icon: LayoutDashboard, href: "/admin/13-transport-management" },
  { id: "hostel", title: "18. Hostel [Conditional]", icon: LayoutDashboard, href: "/admin/18-hostel" },
  { id: "inventory", title: "19. Inventory & Assets", icon: LayoutDashboard, href: "/admin/15-inventory-assets" },
  { id: "purchase", title: "20. Purchase & Expenses", icon: LayoutDashboard, href: "/admin/16-purchase-expense" },
  { id: "health", title: "21. Health & Medical", icon: LayoutDashboard, href: "/admin/20-health-medical" },
  { id: "discipline", title: "22. Discipline & Grievance", icon: LayoutDashboard, href: "/admin/19-discipline-grievance" },
  { id: "approval", title: "23. Approval Center", icon: LayoutDashboard, href: "/admin/23-approval-center" },
  { id: "reports", title: "24. Reports & Analytics", icon: LayoutDashboard, href: "/admin/22-reports" },
  { id: "website", title: "25. Website / Public Content", icon: LayoutDashboard, href: "/admin/21-website-public-content" },
  { id: "settings", title: "26. Settings", icon: LayoutDashboard, href: "/admin/25-settings" },
  { id: "profile", title: "27. My Profile", icon: User, href: "/admin/my-profile" },
  { id: "logout", title: "28. Logout", icon: LogOut, href: "/logout" }
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-20 h-screen w-[280px] bg-sidebar border-r border-border flex flex-col transition-all duration-300">
      <div className="h-16 flex items-center px-6 border-b border-border/20 bg-sidebar">
        <h1 className="text-xl font-bold text-sidebar-text tracking-tight">Admin<span className="text-secondary">ERP</span></h1>
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
