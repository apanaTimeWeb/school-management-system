"use client";

import { 
  Users, UserCheck, GraduationCap, UserPlus, Clock, 
  CalendarCheck, UserX, AlertCircle, Banknote, Receipt,
  BookOpen, Calendar, FileText, MessageSquareWarning, 
  BellRing, AlertTriangle 
} from "lucide-react";

export default function AdminDashboardKPIs() {
  const kpiData = [
    { label: "Total Students", value: "3,250", icon: Users, color: "text-primary", bg: "bg-primary/10" },
    { label: "Total Staff", value: "120", icon: UserCheck, color: "text-secondary", bg: "bg-secondary/10" },
    { label: "Total Teachers", value: "85", icon: GraduationCap, color: "text-info", bg: "bg-info/10" },
    { label: "New Admissions", value: "45", icon: UserPlus, color: "text-success", bg: "bg-success/10" },
    { label: "Pending Admissions", value: "12", icon: Clock, color: "text-warning", bg: "bg-warning/10" },
    { label: "Today's Attendance", value: "94%", icon: CalendarCheck, color: "text-success", bg: "bg-success/10" },
    { label: "Absent Students", value: "185", icon: UserX, color: "text-danger", bg: "bg-danger/10" },
    { label: "Absent Staff", value: "5", icon: AlertCircle, color: "text-warning", bg: "bg-warning/10" },
    { label: "Fee Collection Today", value: "₹45,000", icon: Banknote, color: "text-success", bg: "bg-success/10" },
    { label: "Pending Fees", value: "₹2,10,000", icon: Receipt, color: "text-danger", bg: "bg-danger/10" },
    { label: "Upcoming Exams", value: "3", icon: BookOpen, color: "text-primary", bg: "bg-primary/10" },
    { label: "Upcoming Events", value: "2", icon: Calendar, color: "text-info", bg: "bg-info/10" },
    { label: "Leave Requests", value: "8", icon: FileText, color: "text-warning", bg: "bg-warning/10" },
    { label: "Complaints / Grievances", value: "4", icon: MessageSquareWarning, color: "text-danger", bg: "bg-danger/10" },
    { label: "Notifications", value: "15", icon: BellRing, color: "text-primary", bg: "bg-primary/10" },
    { label: "Important Alerts", value: "2", icon: AlertTriangle, color: "text-danger", bg: "bg-danger/10" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div key={index} className="bg-card border border-border rounded-lg p-5 flex items-center justify-between hover:border-primary transition-colors group">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-text-secondary tracking-wider mb-1">{kpi.label}</span>
              <span className="text-2xl font-bold text-text-primary">{kpi.value}</span>
            </div>
            <div className={`p-3 rounded-md ${kpi.bg}`}>
              <Icon size={24} className={`${kpi.color} group-hover:scale-110 transition-transform`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
