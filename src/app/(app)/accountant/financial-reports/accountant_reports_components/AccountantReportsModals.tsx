"use client";
import React, { useState } from "react";
import { X, FileText, Download, Printer, Filter, Calendar } from "lucide-react";
import { useAccountantReportsStore } from "../accountant_reports_store/useAccountantReportsStore";
import { MOCK_REPORT_PREVIEW_DATA } from "../accountant_reports_utils/AccountantReportsConstants";
import clsx from "clsx";

export default function AccountantReportsModal() {
  const { 
    selectedReport, 
    isGeneratorModalOpen, setGeneratorModalOpen,
    isPreviewModalOpen, setPreviewModalOpen
  } = useAccountantReportsStore();

  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [format, setFormat] = useState("PDF");

  const handleGenerate = () => {
    // Transition from config to preview
    setGeneratorModalOpen(false);
    setPreviewModalOpen(true);
  };

  const handleCloseConfig = () => setGeneratorModalOpen(false);
  const handleClosePreview = () => setPreviewModalOpen(false);

  return (
    <>
      {/* 1. Report Configuration Modal */}
      {isGeneratorModalOpen && selectedReport && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <Filter size={18} className="text-primary"/> Report Parameters
              </h3>
              <button onClick={handleCloseConfig} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-6">
              
              <div>
                <h4 className="text-base font-black text-text-primary">{selectedReport.title}</h4>
                <p className="text-sm text-text-secondary mt-1">{selectedReport.description}</p>
              </div>

              {selectedReport.requiresDateRange && (
                <div className="bg-bg-input p-4 rounded-lg border border-border space-y-4">
                  <h5 className="text-xs font-bold text-text-primary uppercase flex items-center gap-2 mb-2">
                    <Calendar size={14} /> Date Range
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1">From Date</label>
                      <input 
                        type="date" 
                        value={dateRange.start}
                        onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                        className="w-full bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1">To Date</label>
                      <input 
                        type="date" 
                        value={dateRange.end}
                        onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                        className="w-full bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2">Export Format</label>
                <div className="flex gap-4">
                  {['PDF', 'Excel', 'CSV'].map(fmt => (
                    <label key={fmt} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="format" 
                        value={fmt} 
                        checked={format === fmt}
                        onChange={(e) => setFormat(e.target.value)}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm font-bold text-text-primary">{fmt}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={handleCloseConfig} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleGenerate} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors">
                <FileText size={16} /> Generate Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Report Preview & Download Modal */}
      {isPreviewModalOpen && selectedReport && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <div>
                <h3 className="text-lg font-bold text-text-primary">{selectedReport.title} - Preview</h3>
                <p className="text-xs text-text-secondary mt-0.5">Generated on {new Date().toLocaleDateString()}</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => alert(`Downloading as ${format}...`)} className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover transition-colors">
                  <Download size={16} /> Export {format}
                </button>
                <button onClick={() => alert("Printing...")} className="p-2 text-text-secondary hover:text-primary transition-colors border border-border rounded-lg bg-bg-input">
                  <Printer size={18} />
                </button>
                <div className="h-6 w-px bg-border mx-1"></div>
                <button onClick={handleClosePreview} className="text-text-secondary hover:text-danger transition-colors p-1"><X size={24} /></button>
              </div>
            </div>
            
            {/* The Document Area */}
            <div className="flex-1 overflow-y-auto p-8 bg-bg-input">
              <div className="bg-card border border-border rounded-lg shadow-sm p-8 min-h-full">
                
                {/* Header */}
                <div className="text-center mb-8 border-b border-border pb-6">
                  <h1 className="text-2xl font-black text-text-primary uppercase tracking-widest mb-1">School ERP 360</h1>
                  <h2 className="text-xl font-bold text-primary">{selectedReport.title}</h2>
                  {selectedReport.requiresDateRange && (
                    <p className="text-sm font-semibold text-text-secondary mt-2">
                      Period: {dateRange.start || 'Start'} to {dateRange.end || 'End'}
                    </p>
                  )}
                </div>

                {/* Table Data Preview */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-bg-input text-xs uppercase text-text-secondary font-bold border-b-2 border-border">
                        <th className="p-3 w-16">S.No</th>
                        <th className="p-3 w-32">Date</th>
                        <th className="p-3 w-40">Reference</th>
                        <th className="p-3">Particulars</th>
                        <th className="p-3 w-32 text-right">Amount (₹)</th>
                        <th className="p-3 w-32 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_REPORT_PREVIEW_DATA.map((row) => (
                        <tr key={row.sn} className="border-b border-border/50 text-sm">
                          <td className="p-3 text-text-secondary">{row.sn}</td>
                          <td className="p-3 text-text-primary font-semibold">{row.date}</td>
                          <td className="p-3 font-mono text-xs text-text-secondary">{row.ref}</td>
                          <td className="p-3 font-bold text-text-primary">{row.particulars}</td>
                          <td className="p-3 font-black text-text-primary text-right">{row.amount.toLocaleString('en-IN')}</td>
                          <td className="p-3 text-center">
                            <span className="text-[10px] font-bold px-2 py-1 rounded bg-success/10 text-success uppercase">{row.status}</span>
                          </td>
                        </tr>
                      ))}
                      {/* Summary Row */}
                      <tr className="bg-primary/5 text-sm font-black border-t-2 border-border">
                        <td colSpan={4} className="p-3 text-right uppercase tracking-wider text-text-secondary">Grand Total:</td>
                        <td className="p-3 text-right text-primary text-lg">
                          {MOCK_REPORT_PREVIEW_DATA.reduce((sum, item) => sum + item.amount, 0).toLocaleString('en-IN')}
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-12 text-center text-xs text-text-secondary border-t border-border pt-4">
                  *** End of Report ***<br/>
                  Generated by Accountant Module - System Time: {new Date().toLocaleString()}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
