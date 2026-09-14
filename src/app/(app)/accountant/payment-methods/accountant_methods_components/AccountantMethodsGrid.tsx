"use client";
import React from "react";
import { CreditCard, Banknote, Landmark, Smartphone, FileSpreadsheet, Globe, Link, Settings } from "lucide-react";
import { MOCK_PAYMENT_METHODS, formatCurrency } from "../accountant_methods_utils/AccountantMethodsConstants";
import { useAccountantMethodsStore } from "../accountant_methods_store/useAccountantMethodsStore";
import clsx from "clsx";

export default function AccountantMethodsGrid() {
  const { searchQuery, setSelectedMethod, setConfigModalOpen } = useAccountantMethodsStore();

  const filteredData = MOCK_PAYMENT_METHODS.filter(pm => 
    pm.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    pm.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getMethodIcon = (name: string) => {
    switch (name) {
      case 'Cash': return <Banknote size={28} className="text-success" />;
      case 'UPI': return <Smartphone size={28} className="text-info" />;
      case 'Card (POS)': return <CreditCard size={28} className="text-primary" />;
      case 'Bank Transfer': return <Landmark size={28} className="text-warning" />;
      case 'Cheque': return <FileSpreadsheet size={28} className="text-text-secondary" />;
      case 'Online Gateway': return <Globe size={28} className="text-purple-500" />;
      default: return <Link size={28} className="text-text-primary" />;
    }
  };

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-success/10 text-success border-success/20';
      case 'Under Maintenance': return 'bg-warning/10 text-warning border-warning/20';
      case 'Inactive': return 'bg-danger/10 text-danger border-danger/20';
      default: return 'bg-bg-input text-text-secondary border-border';
    }
  };

  const handleConfig = (method: any) => {
    setSelectedMethod(method);
    setConfigModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto pb-4">
      {filteredData.map(method => (
        <div key={method.id} className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col group relative overflow-hidden">
          
          <div className="p-5 flex items-start gap-4 flex-1">
            <div className="w-14 h-14 rounded-xl bg-bg-input border border-border flex items-center justify-center shrink-0">
              {getMethodIcon(method.name)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-text-primary truncate pr-2">{method.name}</h3>
                <span className={clsx("px-2 py-0.5 rounded text-[10px] font-bold border shrink-0", getStatusClasses(method.status))}>
                  {method.status}
                </span>
              </div>
              <p className="text-xs text-text-secondary font-semibold mb-2">{method.type} Method</p>
              <p className="text-sm text-text-primary leading-relaxed line-clamp-2">{method.description}</p>
            </div>
          </div>

          <div className="px-5 pb-5">
            <div className="bg-bg-page border border-border rounded-lg p-3 flex justify-between items-center mb-4">
              <div>
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-0.5">YTD Collection</p>
                <p className="text-sm font-black text-primary">{formatCurrency(method.totalCollectedYTD)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-0.5">Last Used</p>
                <p className="text-sm font-semibold text-text-primary">{method.lastUsedDate}</p>
              </div>
            </div>
            
            <button 
              onClick={() => handleConfig(method)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold bg-bg-input text-text-primary border border-border rounded-lg group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors"
            >
              <Settings size={16} /> Configure Settings
            </button>
          </div>

        </div>
      ))}

      {filteredData.length === 0 && (
        <div className="col-span-full p-8 text-center text-text-secondary">
          No payment methods found.
        </div>
      )}
    </div>
  );
}
