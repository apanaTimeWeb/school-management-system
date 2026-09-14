"use client";
import React from "react";
import { Filter, Calendar, Users, FileText, CreditCard, CheckSquare, Square } from "lucide-react";
import { CLASSES_LIST, FEE_TYPES_LIST, PAYMENT_METHODS_LIST } from "../accountant_export_utils/AccountantExportConstants";
import { useAccountantExportStore } from "../accountant_export_store/useAccountantExportStore";
import clsx from "clsx";

export default function AccountantExportBuilder() {
  const {
    startDate, setStartDate, endDate, setEndDate,
    selectedClasses, toggleClass, selectAllClasses, clearClasses,
    selectedFeeTypes, toggleFeeType,
    selectedMethods, toggleMethod
  } = useAccountantExportStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-6 space-y-8 flex-1">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Filter size={20} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-text-primary">Data Export Builder</h2>
          <p className="text-xs text-text-secondary">Select parameters to build your custom data dump.</p>
        </div>
      </div>

      {/* Date Range */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
          <Calendar size={16} className="text-primary" /> Date Range
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1">Start Date</label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-secondary mb-1">End Date</label>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
            />
          </div>
        </div>
      </div>

      {/* Class Filters */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
            <Users size={16} className="text-info" /> Class Filters
          </h3>
          <div className="flex gap-2">
            <button onClick={() => selectAllClasses(CLASSES_LIST)} className="text-xs font-bold text-primary hover:underline">Select All</button>
            <span className="text-border">|</span>
            <button onClick={clearClasses} className="text-xs font-bold text-text-secondary hover:text-danger hover:underline">Clear</button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar p-2 bg-bg-input rounded-lg border border-border">
          {CLASSES_LIST.map(cls => (
            <div 
              key={cls}
              onClick={() => toggleClass(cls)}
              className={clsx(
                "flex items-center gap-2 p-2 rounded cursor-pointer transition-colors border",
                selectedClasses.includes(cls) ? "bg-primary/10 border-primary text-primary" : "bg-card border-border hover:border-primary/50 text-text-secondary hover:text-text-primary"
              )}
            >
              {selectedClasses.includes(cls) ? <CheckSquare size={14} /> : <Square size={14} />}
              <span className="text-xs font-semibold">{cls}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fee Type & Payment Method */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
            <FileText size={16} className="text-success" /> Fee Types
          </h3>
          <div className="flex flex-wrap gap-2">
            {FEE_TYPES_LIST.map(fee => (
              <button
                key={fee}
                onClick={() => toggleFeeType(fee)}
                className={clsx(
                  "px-3 py-1.5 text-xs font-bold rounded-full border transition-all",
                  selectedFeeTypes.includes(fee) ? "bg-success text-white border-success" : "bg-bg-input text-text-secondary border-border hover:border-success/50 hover:text-text-primary"
                )}
              >
                {fee}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
            <CreditCard size={16} className="text-warning" /> Payment Methods
          </h3>
          <div className="flex flex-wrap gap-2">
            {PAYMENT_METHODS_LIST.map(method => (
              <button
                key={method}
                onClick={() => toggleMethod(method)}
                className={clsx(
                  "px-3 py-1.5 text-xs font-bold rounded-full border transition-all",
                  selectedMethods.includes(method) ? "bg-warning text-black border-warning" : "bg-bg-input text-text-secondary border-border hover:border-warning/50 hover:text-text-primary"
                )}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
