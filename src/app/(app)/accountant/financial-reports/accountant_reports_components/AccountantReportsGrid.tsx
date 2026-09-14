"use client";
import React from "react";
import { 
  CalendarDays, Calendar, PieChart, BarChart3, CreditCard, Banknote, 
  TrendingUp, AlertTriangle, UserMinus, ShieldAlert, Wallet, Undo2, 
  Gift, GraduationCap, Landmark, GitMerge, Search, LayoutGrid, List
} from "lucide-react";
import { REPORTS_LIST } from "../accountant_reports_utils/AccountantReportsConstants";
import { useAccountantReportsStore } from "../accountant_reports_store/useAccountantReportsStore";
import { ReportCategory } from "../accountant_reports_types/AccountantReportsTypes";
import clsx from "clsx";

const getIcon = (type: string) => {
  const props = { size: 24, className: "text-primary" };
  switch(type) {
    case 'daily': return <CalendarDays {...props} />;
    case 'monthly': return <Calendar {...props} />;
    case 'annual': return <PieChart {...props} />;
    case 'fee': return <BarChart3 {...props} />;
    case 'method': return <CreditCard {...props} />;
    case 'income': return <TrendingUp {...props} />;
    case 'outstanding': return <AlertTriangle {...props} className="text-warning" />;
    case 'defaulter': return <UserMinus {...props} className="text-danger" />;
    case 'fine': return <ShieldAlert {...props} className="text-danger" />;
    case 'expense': return <Wallet {...props} className="text-warning" />;
    case 'refund': return <Undo2 {...props} className="text-warning" />;
    case 'concession': return <Gift {...props} />;
    case 'scholarship': return <GraduationCap {...props} />;
    case 'cash': return <Banknote {...props} />;
    case 'bank': return <Landmark {...props} />;
    case 'reconciliation': return <GitMerge {...props} />;
    default: return <PieChart {...props} />;
  }
};

export default function AccountantReportsGrid() {
  const { 
    searchQuery, setSearchQuery, 
    activeCategory, setActiveCategory,
    setSelectedReport, setGeneratorModalOpen 
  } = useAccountantReportsStore();

  const CATEGORIES: { id: ReportCategory | 'All', label: string }[] = [
    { id: 'All', label: 'All Reports' },
    { id: 'Collection', label: 'Collection Reports' },
    { id: 'Dues & Defaulters', label: 'Dues & Defaulters' },
    { id: 'Deductions & Expenses', label: 'Deductions & Expenses' },
    { id: 'Banking & Reconciliation', label: 'Banking & Recon' },
  ];

  const filteredReports = REPORTS_LIST.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          report.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || report.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOpenReport = (report: any) => {
    setSelectedReport(report);
    setGeneratorModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      
      {/* Top Bar: Search and Filters */}
      <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 shrink-0">
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-1 lg:pb-0 hide-scrollbar w-full lg:w-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={clsx(
                "px-4 py-2 text-sm font-bold rounded-lg transition-colors whitespace-nowrap",
                activeCategory === cat.id 
                  ? "bg-primary text-white" 
                  : "bg-bg-input text-text-secondary hover:text-text-primary border border-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reports..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>

      {/* Reports Grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pb-4">
          {filteredReports.map((report) => (
            <div 
              key={report.id} 
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
              onClick={() => handleOpenReport(report)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-bg-input flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {getIcon(report.iconType)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">{report.title}</h3>
                  <p className="text-[11px] font-semibold text-text-secondary mt-1 px-2 py-0.5 bg-bg-page rounded inline-block border border-border">
                    {report.category}
                  </p>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-6 flex-1 line-clamp-2">
                {report.description}
              </p>
              
              <div className="pt-4 border-t border-border flex justify-between items-center mt-auto">
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:underline">
                  Configure & Generate →
                </span>
              </div>
            </div>
          ))}
          {filteredReports.length === 0 && (
            <div className="col-span-full py-12 text-center text-text-secondary">
              <div className="w-16 h-16 rounded-full bg-bg-input flex items-center justify-center mx-auto mb-3">
                <Search size={24} className="text-text-secondary/50" />
              </div>
              <p className="text-lg font-bold text-text-primary mb-1">No reports found</p>
              <p className="text-sm">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
