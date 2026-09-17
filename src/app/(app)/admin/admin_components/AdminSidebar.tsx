"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, School } from "lucide-react";
import clsx from "clsx";

const adminCategories = [
  { id: "students", title: "Students", icon: School, href: "/admin/02-student-management", items: ["Student admission/enrollment", "Student promotion", "Student demotion", "Section change", "Class change", "Student transfer", "Student withdrawal", "Re-admission", "Roll number", "House allocation", "Student history"] },
  { id: "admissions", title: "Admissions", icon: School, href: "/admin/03-admission-management", items: ["Enquiry", "Application", "Registration", "Document verification", "Admission approval", "Waiting/rejected applications", "Enrollment", "Admission reports"] },
  { id: "academics", title: "Academics", icon: School, href: "/admin/05-academic-management", items: ["Classes", "Sections", "Subjects", "Curriculum", "Syllabus", "Teacher-subject mapping", "Class-subject mapping", "Academic session operations"] },
  { id: "attendance", title: "Attendance", icon: School, href: "/admin/06-attendance-management", items: ["Student attendance", "Attendance correction/approval", "Attendance reports"] },
  { id: "timetable", title: "Timetable", icon: School, href: "/admin/12-timetable", items: ["Class timetable", "Teacher timetable", "Room allocation", "Substitute management"] },
  { id: "examination", title: "Examination", icon: School, href: "/admin/07-examination-management", items: ["Exam creation", "Exam schedule", "Subject mapping", "Marks workflow", "Result workflow", "Report cards", "Promotion result"] },
  { id: "finance", title: "Finance", icon: School, href: "/admin/08-fee-management", items: ["Fee structure/master", "Student fee assignment", "Concession", "Scholarship", "Fine", "Financial overview", "Expenses", "Income", "Payment configuration access as permitted"] },
  { id: "hr", title: "HR/Office", icon: School, href: "/admin/09-staff-management", items: ["Staff management", "Leave oversight", "Employee operations", "Office administration"] },
  { id: "documents", title: "Documents", icon: School, href: "/admin/18-documents-certificates", items: ["Certificates", "TC", "Bonafide", "Character Certificate", "Study Certificate", "ID Card", "Document numbering", "QR verification"] },
  { id: "inventory", title: "Inventory/Purchase", icon: School, href: "/admin/15-inventory-assets", items: ["Inventory", "Assets", "Purchase request", "Purchase", "Suppliers", "Stock", "Asset assignment"] },
  { id: "communication", title: "Communication", icon: School, href: "/admin/11-communication", items: ["Notice", "Circular", "Announcement", "Parent communication", "Staff communication", "Templates", "Scheduled communication"] },
  { id: "approval", title: "Approval Center", icon: School, href: "/admin/23-approval-center", items: ["Admission approval", "Leave approval", "Requests", "Certificates", "Other school workflows"] },
  { id: "website", title: "Website/Public Content", icon: School, href: "/admin/21-website-content", items: ["News", "Events", "Gallery", "Notices", "Public content"] },
  { id: "conditional", title: "Conditional", icon: School, href: "/admin/14-library", items: ["Library", "Transport", "Hostel"] }
];

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
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
        "fixed top-0 left-0 z-30 h-screen w-[280px] bg-sidebar border-r border-border/20 flex flex-col transition-transform duration-300",
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
          className="md:hidden text-sidebar-text-muted hover:text-secondary p-1"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 hide-scrollbar">
        <nav className="flex flex-col gap-1 pb-10">
          {adminCategories.map((category) => {
            const hasItems = category.items && category.items.length > 0;
            const isOpenSection = openSections[category.title];
            const isActive = pathname.startsWith(category.href);
            const Icon = category.icon;

            return (
              <div key={category.id} className="flex flex-col mb-1">
                <div className={clsx(
                    "flex items-center justify-between rounded-md transition-colors duration-200 group",
                    isActive ? "bg-secondary" : "hover:bg-secondary/10"
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
