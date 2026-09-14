"use client";
import React from "react";
import { Users, FileText, FileSpreadsheet, Activity, ChevronRight, Search } from "lucide-react";
import { MOCK_SEARCH_RESULTS } from "../accountant_search_utils/AccountantSearchConstants";
import { useAccountantSearchStore } from "../accountant_search_store/useAccountantSearchStore";
import clsx from "clsx";

export default function AccountantSearchResults() {
  const { searchQuery, entityFilter, setSelectedResult, setViewModalOpen } = useAccountantSearchStore();

  const filteredData = MOCK_SEARCH_RESULTS.filter(res => {
    if (!searchQuery) return true; // Show all by default if no query, or maybe empty? Let's show all for demo.
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = res.id.toLowerCase().includes(searchLower) || 
                          res.title.toLowerCase().includes(searchLower) ||
                          res.reference.toLowerCase().includes(searchLower) ||
                          res.date.includes(searchLower) ||
                          (res.amount && res.amount.toString().includes(searchLower));
                          
    const matchesFilter = entityFilter === 'All' || res.type === entityFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getEntityIcon = (type: string) => {
    switch(type) {
      case 'Student': return <Users size={18} className="text-info" />;
      case 'Receipt': return <FileText size={18} className="text-success" />;
      case 'Invoice': return <FileSpreadsheet size={18} className="text-warning" />;
      case 'Transaction': return <Activity size={18} className="text-primary" />;
      default: return <FileText size={18} className="text-text-secondary" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'paid':
      case 'success':
        return 'text-success bg-success/10 border-success/20';
      case 'due':
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'cancelled':
        return 'text-danger bg-danger/10 border-danger/20';
      default:
        return 'text-text-secondary bg-bg-page border-border';
    }
  };

  const handleView = (res: any) => {
    setSelectedResult(res);
    setViewModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col flex-1 h-full p-4">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-text-primary">Search Results ({filteredData.length})</h3>
      </div>

      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
        {filteredData.map((res) => (
          <div 
            key={res.id} 
            onClick={() => handleView(res)}
            className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-bg-input border border-border rounded-xl hover:border-primary/50 hover:bg-card cursor-pointer transition-all gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-bg-page border border-border flex items-center justify-center shrink-0">
                {getEntityIcon(res.type)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-text-secondary uppercase">{res.type}</span>
                  <span className="text-[10px] text-text-secondary px-1.5 bg-bg-page rounded border border-border">{res.id}</span>
                </div>
                <h4 className="text-sm font-bold text-text-primary mt-1 group-hover:text-primary transition-colors">{res.title}</h4>
                <p className="text-xs text-text-secondary mt-1">{res.details}</p>
              </div>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
              <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                <span className="text-sm font-black text-text-primary">
                  {res.amount ? `₹${res.amount.toLocaleString()}` : '-'}
                </span>
                <span className={clsx("px-2 py-0.5 rounded text-[10px] font-bold uppercase border", getStatusColor(res.status))}>
                  {res.status}
                </span>
              </div>
              <ChevronRight size={18} className="text-text-secondary group-hover:text-primary transition-colors sm:hidden" />
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <div className="text-center py-12 text-text-secondary">
            <Search size={40} className="mx-auto mb-3 opacity-20" />
            <p className="text-sm font-bold">No results found.</p>
            <p className="text-xs mt-1">Try adjusting your search query or filters.</p>
          </div>
        )}
      </div>

    </div>
  );
}
