"use client";
import React, { useState } from 'react';
import { FileText, Download, Printer, PieChart, Users, BookOpen, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalLibraryReportsTab() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = (reportName: string) => {
    setDownloading(reportName);
    setTimeout(() => {
      setDownloading(null);
      alert(`${reportName} downloaded successfully!`);
    }, 1500);
  };

  const reports = [
    {
      id: 'r1',
      title: 'Overall Book Inventory',
      desc: 'Complete list of all books, total copies, and available stock.',
      icon: <BookOpen className="text-primary" size={24} />,
      color: 'bg-primary/10 border-primary/20',
      textColor: 'text-primary'
    },
    {
      id: 'r2',
      title: 'Student Borrowing Trends',
      desc: 'Monthly analysis of books issued by students across classes.',
      icon: <Users className="text-info" size={24} />,
      color: 'bg-info/10 border-info/20',
      textColor: 'text-info'
    },
    {
      id: 'r3',
      title: 'Overdue & Defaulter List',
      desc: 'List of all students/staff with overdue books and pending fines.',
      icon: <AlertTriangle className="text-danger" size={24} />,
      color: 'bg-danger/10 border-danger/20',
      textColor: 'text-danger'
    },
    {
      id: 'r4',
      title: 'Library Usage Statistics',
      desc: 'High-level usage metrics for executive review.',
      icon: <PieChart className="text-success" size={24} />,
      color: 'bg-success/10 border-success/20',
      textColor: 'text-success'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-[18px] font-bold text-text-primary">Library Reports & Analytics</h2>
        <p className="text-[13px] text-text-secondary">Generate and download official library reports for executive review.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report.id} className={clsx("p-5 rounded-xl border flex flex-col justify-between h-full transition-all hover:shadow-md", report.color)}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {report.icon}
                </div>
              </div>
              <h3 className="text-[16px] font-bold text-text-primary mb-2">{report.title}</h3>
              <p className="text-[13px] text-text-secondary mb-6">{report.desc}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleDownload(report.title + ' (PDF)')}
                disabled={downloading === report.title + ' (PDF)'}
                className={clsx(
                  "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-bold text-[13px] transition-colors border bg-white shadow-sm disabled:opacity-70",
                  report.textColor
                )}
              >
                {downloading === report.title + ' (PDF)' ? (
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <><FileText size={16} /> PDF Report</>
                )}
              </button>
              
              <button 
                onClick={() => handleDownload(report.title + ' (Excel)')}
                disabled={downloading === report.title + ' (Excel)'}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-bold text-[13px] transition-colors border border-border bg-white text-text-secondary hover:text-text-primary shadow-sm disabled:opacity-70"
              >
                 {downloading === report.title + ' (Excel)' ? (
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <><Download size={16} /> Excel</>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
