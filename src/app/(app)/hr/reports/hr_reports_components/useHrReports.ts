"use client";

import { useState } from "react";
import { generateReportData } from "../hr_reports_api/HrReportsApi";
import type { ReportDefinition, ReportFilterState, GeneratedReportRow } from "../hr_reports_types/HrReportsTypes";

export function useHrReports() {
  
  // Payroll RBAC Mock Toggle
  const [hasPaymentAuthority, setHasPaymentAuthority] = useState(false);

  // Modal State
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ReportDefinition | null>(null);
  
  // Report Generation State
  const [filters, setFilters] = useState<ReportFilterState>({
    fromDate: new Date(new Date().setDate(1)).toISOString().split('T')[0], // First of month
    toDate: new Date().toISOString().split('T')[0], // Today
    department: "All",
    status: "All"
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportData, setReportData] = useState<GeneratedReportRow[] | null>(null);
  const [reportColumns, setReportColumns] = useState<string[]>([]);

  const openReport = (report: ReportDefinition) => {
    if (report.isRestricted && !hasPaymentAuthority) {
      alert("Access Denied: You do not have the required Payment Authority permissions to view this report.");
      return;
    }
    setSelectedReport(report);
    setReportData(null); // Reset previous data
    setReportColumns([]);
    setIsViewerOpen(true);
  };

  const closeReport = () => {
    setIsViewerOpen(false);
    setSelectedReport(null);
  };

  const handleGenerate = async () => {
    if (!selectedReport) return;
    setIsGenerating(true);
    try {
      const res = await generateReportData({ reportId: selectedReport.id, filters });
      if (res.success) {
        setReportData(res.data);
        setReportColumns(res.columns || []);
      }
    } catch (e) {
      console.error(e);
      alert("Failed to generate report.");
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    hasPaymentAuthority, setHasPaymentAuthority,
    isViewerOpen, selectedReport, openReport, closeReport,
    filters, setFilters,
    isGenerating, reportData, reportColumns, handleGenerate
  };
}

