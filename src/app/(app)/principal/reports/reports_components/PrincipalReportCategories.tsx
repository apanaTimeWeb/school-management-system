"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalReportConfig } from '../reports_types/PrincipalReports.types';
import { fetchReportCategories } from '../reports_api/PrincipalReportsApi';
import { usePrincipalReportsStore } from '../reports_store/usePrincipalReportsStore';
import * as Icons from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalReportCategories() {
  const [categories, setCategories] = useState<PrincipalReportConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { setSelectedReport } = usePrincipalReportsStore();

  useEffect(() => {
    let isMounted = true;
    fetchReportCategories().then(data => {
      if (isMounted) {
        setCategories(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  const filteredCategories = categories.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => <div key={i} className="h-32 bg-skeleton-base animate-pulse rounded-xl" />)}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex items-center gap-3">
        <Icons.Search size={18} className="text-text-secondary" />
        <input 
          type="text" 
          placeholder="Search for a specific report (e.g., 'Attendance', 'Fees')..." 
          className="bg-transparent border-none outline-none text-[14px] text-text-primary w-full placeholder:text-text-secondary/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCategories.map((report) => {
          const IconComponent = (Icons as any)[report.iconName] || Icons.FileText;
          return (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className="bg-card border border-border p-5 rounded-xl shadow-sm hover:border-primary/50 hover:bg-white/5 transition-all text-left flex flex-col group relative overflow-hidden h-full"
            >
              <div className="absolute -right-6 -top-6 p-6 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
              
              <div className={clsx("w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-page border border-border", report.colorClass)}>
                <IconComponent size={20} />
              </div>
              <h3 className="text-[15px] font-bold text-text-primary mb-1.5">{report.title}</h3>
              <p className="text-[12px] text-text-secondary flex-1 leading-relaxed">{report.description}</p>
            </button>
          )
        })}
      </div>
      
      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
           <Icons.Search size={48} className="text-text-secondary/30 mx-auto mb-4" />
           <p className="text-[14px] text-text-secondary font-bold">No reports found matching your search.</p>
        </div>
      )}
    </div>
  );
}
