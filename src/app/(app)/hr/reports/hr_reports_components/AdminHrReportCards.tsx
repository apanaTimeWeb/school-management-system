"use client";

import { REPORT_DEFINITIONS } from "../hr_reports_constants/AdminHrReportsConstants";
import type { ReportDefinition } from "../hr_reports_types/AdminHrReportsTypes";
import { FileBarChart2, Users, PieChart, ShieldAlert, Lock, Unlock } from "lucide-react";

interface AdminHrReportCardsProps {
  openReport: (r: ReportDefinition) => void;
  hasPaymentAuthority: boolean;
}

export default function AdminHrReportCards({ openReport, hasPaymentAuthority }: AdminHrReportCardsProps) {

  // Group reports by category
  const categories = ["Demographics", "Lifecycle", "Compliance", "Performance & Pay"];
  
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Demographics": return <Users className="text-primary" size={20}/>;
      case "Lifecycle": return <PieChart className="text-info" size={20}/>;
      case "Compliance": return <ShieldAlert className="text-warning" size={20}/>;
      case "Performance & Pay": return <FileBarChart2 className="text-success" size={20}/>;
      default: return null;
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Demographics": return 'bg-primary/5 border-primary/20 hover:border-primary/50 hover:bg-primary/10';
      case "Lifecycle": return 'bg-info/5 border-info/20 hover:border-info/50 hover:bg-info/10';
      case "Compliance": return 'bg-warning/5 border-warning/20 hover:border-warning/50 hover:bg-warning/10';
      case "Performance & Pay": return 'bg-success/5 border-success/20 hover:border-success/50 hover:bg-success/10';
      default: return 'bg-input border-border';
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300 flex flex-col gap-8">
      
      {categories.map(cat => {
        const catReports = REPORT_DEFINITIONS.filter(r => r.category === cat);
        if (catReports.length === 0) return null;

        return (
          <div key={cat} className="space-y-4">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
              {getCategoryIcon(cat)} {cat} Reports
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {catReports.map(r => (
                <div 
                  key={r.id} 
                  onClick={() => openReport(r)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer group flex flex-col h-full ${getCategoryColor(cat)}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-card shadow-sm flex items-center justify-center">
                      <FileBarChart2 size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    {r.isRestricted && (
                      <div className={`p-1.5 rounded-full ${hasPaymentAuthority ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'}`}>
                        {hasPaymentAuthority ? <Unlock size={14}/> : <Lock size={14}/>}
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{r.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium line-clamp-2">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}

    </div>
  );
}
