"use client";

import React from 'react';
import { 
  Bus, Map, GraduationCap, Users, IndianRupee, ShieldAlert, 
  List, Activity, Wrench, Fuel, AlertTriangle, MapPin, 
  PieChart, GitMerge, UserCheck, Clock, CalendarDays, History, 
  SteeringWheel, UserCircle, CalendarCheck, Link, FileText, 
  AlertCircle, TrendingUp, Receipt, Car, ClipboardCheck, ChevronRight
} from 'lucide-react';
import type { ReportCategoryDefinition, ReportDefinition } from '../transport_reports_types/transport_reports.types';

// RESPONSIBILITY: Renders a group of reports for a specific category

interface ReportCategoryCardProps {
  category: ReportCategoryDefinition;
  onSelectReport: (report: ReportDefinition) => void;
}

export default function ReportCategoryCard({ category, onSelectReport }: ReportCategoryCardProps) {
  
  // Helper to dynamically render lucide icons based on string name
  const getIcon = (name: string, color: string, size: number = 20) => {
    const iconMap: Record<string, any> = {
      Bus, Map, GraduationCap, Users, IndianRupee, ShieldAlert,
      List, Activity, Wrench, Fuel, AlertTriangle, MapPin,
      PieChart, GitMerge, UserCheck, Clock, CalendarDays, History,
      History, UserCircle, CalendarCheck, Link, FileText,
      AlertCircle, TrendingUp, Receipt, CarCrash: Car, ClipboardCheck
    };
    const IconComponent = iconMap[name] || FileText;
    return <IconComponent size={size} color={color} />;
  };

  // Convert hex color to rgba for background
  const getBgColor = (hex: string, alpha: number) => {
    // Simple conversion assuming standard hex format like #3B82F6
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--primary)] transition-colors shadow-sm group h-full flex flex-col">
       
       {/* Card Header */}
       <div 
         className="p-4 border-b border-[var(--border)] flex items-center gap-3 relative overflow-hidden shrink-0"
         style={{ backgroundColor: getBgColor(category.color, 0.05) }}
       >
         {/* Subtle background icon */}
         <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none transform rotate-12">
           {getIcon(category.icon, category.color, 80)}
         </div>

         <div 
           className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border"
           style={{ backgroundColor: getBgColor(category.color, 0.1), borderColor: getBgColor(category.color, 0.2) }}
         >
           {getIcon(category.icon, category.color, 20)}
         </div>
         <div>
           <h2 className="text-base font-bold text-[var(--text-primary)]">{category.title}</h2>
           <p className="text-[11px] text-[var(--text-secondary)] font-medium">
             {category.reports.length} standard reports
           </p>
         </div>
       </div>

       {/* Reports List */}
       <div className="flex-1 p-2 flex flex-col gap-1 overflow-y-auto">
         {category.reports.map((report) => (
           <button
             key={report.id}
             onClick={() => onSelectReport(report)}
             className="w-full text-left p-3 rounded-lg hover:bg-[var(--bg-input)] transition-colors flex items-start gap-3 group/btn"
           >
             <div className="mt-0.5 text-[var(--text-secondary)] group-hover/btn:text-[var(--primary)] transition-colors">
               {getIcon(report.icon, 'currentColor', 16)}
             </div>
             <div className="flex-1 min-w-0 pr-2">
               <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover/btn:text-[var(--primary)] transition-colors truncate">
                 {report.name}
               </h3>
               <p className="text-[10px] text-[var(--text-secondary)] mt-0.5 line-clamp-2 leading-relaxed">
                 {report.description}
               </p>
             </div>
             <ChevronRight size={14} className="text-[var(--text-secondary)] opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all self-center" />
           </button>
         ))}
       </div>

    </div>
  );
}
