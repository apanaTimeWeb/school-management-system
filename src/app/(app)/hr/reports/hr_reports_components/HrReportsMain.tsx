"use client";

import { useHrReports } from "./useHrReports";
import HrReportCards from "./HrReportCards";
import HrReportViewerModal from "./HrReportViewerModal";
import { ShieldCheck, ShieldAlert } from "lucide-react";

export default function HrReportsMain() {
  const {
    hasPaymentAuthority, setHasPaymentAuthority,
    isViewerOpen, selectedReport, openReport, closeReport,
    filters, setFilters, isGenerating, reportData, reportColumns, handleGenerate
  } = useHrReports();

  return (
    <div className="flex flex-col w-full">
      
      {/* RBAC Mock Toggle */}
      <div className="mb-8 p-4 bg-card border border-border rounded-xl shadow-sm flex items-center justify-between">
         <div className="flex items-center gap-3">
           <div className={`p-2 rounded-lg ${hasPaymentAuthority ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
             {hasPaymentAuthority ? <ShieldCheck size={20}/> : <ShieldAlert size={20}/>}
           </div>
           <div>
             <h3 className="text-sm font-bold text-foreground">Payment & Payroll Authority</h3>
             <p className="text-xs text-muted-foreground font-medium">Controls access to sensitive financial reports.</p>
           </div>
         </div>
         <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={hasPaymentAuthority} onChange={(e) => setHasPaymentAuthority(e.target.checked)} />
            <div className="w-11 h-6 bg-input rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-success after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
         </label>
      </div>

      <HrReportCards 
        openReport={openReport}
        hasPaymentAuthority={hasPaymentAuthority}
      />

      <HrReportViewerModal 
        report={selectedReport}
        isOpen={isViewerOpen}
        close={closeReport}
        filters={filters}
        setFilters={setFilters}
        isGenerating={isGenerating}
        reportData={reportData}
        reportColumns={reportColumns}
        handleGenerate={handleGenerate}
      />
    </div>
  );
}

