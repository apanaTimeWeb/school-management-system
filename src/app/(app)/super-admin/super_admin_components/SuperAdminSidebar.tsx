"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, ChevronRight, LayoutDashboard } from 'lucide-react';

const MENU_STRUCTURE = [
  {
    title: "01. Dashboard",
    href: "/super-admin",
    items: []
  },
  {
    title: "02. Organization Management",
    items: ["School", "Branches", "Campuses", "Buildings", "Floors", "Rooms", "Organization Structure"]
  },
  {
    title: "03. Academic Setup",
    items: ["Academic Sessions", "Financial Years", "Classes", "Sections", "Departments", "Houses", "Wings", "Streams", "Subjects", "Subject Categories", "Curriculum", "Academic Calendar", "Working Days", "Holidays", "Academic Masters"]
  },
  {
    title: "04. Users & Access",
    items: ["Users", "Roles", "Permissions", "Data Access Scope", "User Sessions", "Devices", "Login History", "Account Security", "Emergency Access Control"]
  },
  {
    title: "05. System Settings",
    items: ["General Settings", "Localization", "Language", "Date & Time", "Currency", "Numbering / Sequences", "Branding", "Documents", "Certificates", "File Storage", "Module Settings", "Data Retention"]
  },
  {
    title: "06. Communication",
    items: ["SMS", "Email", "WhatsApp", "Push Notifications", "Notification Templates", "Notification Rules", "Notification History", "Communication Logs"]
  },
  {
    title: "07. Finance Configuration",
    items: ["Payment Gateway", "Payment Methods", "Fee Masters", "Fine Rules", "Discount Rules", "Scholarship Types", "Refund Rules", "Receipt Numbering", "Invoice Numbering", "Finance Masters"]
  },
  {
    title: "08. HR Configuration",
    items: ["Employee Types", "Departments", "Designations", "Employment Types", "Leave Types", "Leave Policies", "Attendance Rules", "Holiday Rules", "Salary Components"]
  },
  {
    title: "09. Library Configuration",
    items: ["Book Categories", "Member Types", "Issue Rules", "Renewal Rules", "Fine Rules", "Barcode / QR Settings"]
  },
  {
    title: "10. Transport Configuration",
    items: ["Vehicle Types", "Route Types", "Stop Types", "Transport Fee Categories", "Driver Categories", "GPS Configuration"]
  },
  {
    title: "11. Hostel Configuration",
    items: ["Hostel Types", "Room Types", "Bed Types", "Hostel Fee Types", "Allocation Rules", "Leave Rules", "Visitor Rules"]
  },
  {
    title: "12. Documents & Certificates",
    items: ["Document Types", "Required Documents", "Document Verification", "Certificate Types", "Certificate Templates", "Serial Numbering", "QR Verification", "Digital Signature", "File Rules"]
  },
  {
    title: "13. Integrations",
    items: ["APIs", "API Keys", "Webhooks", "Biometric", "GPS", "Cloud Storage", "Payment Services", "SMS Services", "Email Services", "WhatsApp Services", "External Services"]
  },
  {
    title: "14. Data Management",
    items: ["Import", "Export", "Import Templates", "Import Validation", "Import History", "Export History", "Backup", "Restore", "Archive", "Data Retention", "Recycle Bin"]
  },
  {
    title: "15. Approval Workflow",
    items: ["Workflow Builder", "Leave Approval", "Admission Approval", "Fee Concession", "Refund", "Purchase", "Expense", "TC", "Certificate", "Student Transfer"]
  },
  {
    title: "16. Automation",
    items: ["Automation Rules", "Scheduled Jobs", "Fee Reminders", "Attendance Alerts", "Exam Reminders", "Result Notifications", "Birthday Notifications", "Document Expiry Alerts", "Automatic Reports", "Automation Logs"]
  },
  {
    title: "17. Reports & Analytics",
    items: ["System Reports", "User Reports", "Login Reports", "Activity Reports", "Student Summary", "Staff Summary", "Attendance Summary", "Fee Summary", "Admission Summary", "Notification Reports", "Payment Reports", "Export Center"]
  },
  {
    title: "18. Audit & Security",
    items: ["Audit Logs", "Login Logs", "Failed Login Logs", "Activity Logs", "Security Logs", "Permission Change Logs", "Configuration History", "Data Change History", "IP / Device Logs", "Security Alerts"]
  },
  {
    title: "19. System Health",
    items: ["Server Status", "Database Status", "Storage", "Backup Status", "Queue Status", "API Status", "Notification Services", "Payment Services", "Error Logs", "Application Version"]
  },
  {
    title: "20. Support & Helpdesk",
    items: ["Support Tickets", "Bug Reports", "Technical Issues", "Ticket Assignment", "Priority", "Status", "Attachments", "Resolution History"]
  },
  {
    title: "21. System Announcements",
    items: ["Maintenance Notice", "Emergency Announcement", "System Update", "User Targeting"]
  },
  {
    title: "22. Maintenance Mode",
    items: ["Enable / Disable", "Schedule", "Custom Message", "Maintenance History"]
  },
  {
    title: "23. Module Management",
    items: ["Enable Module", "Disable Module", "Module Configuration", "Module Dependencies"]
  },
  {
    title: "24. Deleted Data / Recovery",
    items: ["Deleted Records", "Restore", "Permanent Delete", "Deletion History"]
  },
  {
    title: "25. My Profile",
    items: ["Profile", "Password", "2FA", "Active Sessions", "Login History", "Security Settings"]
  },
  {
    title: "26. Logout",
    href: "#",
    items: []
  }
];

export default function SuperAdminSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    MENU_STRUCTURE.reduce((acc, curr) => {
      acc[curr.title] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <aside className="w-72 flex-shrink-0 bg-sidebar border-r border-border h-[calc(100vh-64px)] overflow-y-auto hidden md:block">
      <nav className="p-4 flex flex-col gap-2 pb-12">
        
        <div className="text-sm font-bold text-text-primary px-3 mb-2 tracking-wider">
          SUPER ADMIN
        </div>

        {MENU_STRUCTURE.map((category) => {
          const hasItems = category.items && category.items.length > 0;
          const isOpen = openSections[category.title];
          
          return (
            <div key={category.title} className="flex flex-col">
              {hasItems ? (
                <button
                  onClick={() => toggleSection(category.title)}
                  className="flex items-center justify-between w-full p-2.5 rounded-lg text-sm text-text-secondary hover:bg-sidebar-hover hover:text-primary transition-colors text-left"
                >
                  <span className="font-medium truncate">{category.title}</span>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              ) : (
                <Link
                  href={category.href || "#"}
                  className="flex items-center w-full p-2.5 rounded-lg text-sm text-text-secondary hover:bg-sidebar-hover hover:text-primary transition-colors text-left"
                >
                  <span className="font-medium truncate">{category.title}</span>
                </Link>
              )}

              {hasItems && isOpen && (
                <div className="ml-4 pl-3 border-l-2 border-border/50 flex flex-col gap-1 mt-1 mb-2">
                  {category.items.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="p-2 text-xs text-text-secondary hover:text-primary hover:bg-sidebar-hover rounded-md transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
