"use client";
import React from "react";
import { X, ExternalLink } from "lucide-react";
import { useAccountantSearchStore } from "../accountant_search_store/useAccountantSearchStore";
import clsx from "clsx";

export default function AccountantSearchModals() {
  const { isViewModalOpen, setViewModalOpen, selectedResult } = useAccountantSearchStore();

  if (!isViewModalOpen || !selectedResult) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
      <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
          <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
            Record Details
          </h3>
          <button onClick={() => setViewModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
        </div>
        
        <div className="p-6 space-y-4">
          
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold uppercase text-primary bg-primary/10 px-2 py-1 rounded">{selectedResult.type}</span>
              <h2 className="text-xl font-black text-text-primary mt-2">{selectedResult.title}</h2>
              <p className="text-sm text-text-secondary mt-1">{selectedResult.id}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-text-primary">₹{selectedResult.amount?.toLocaleString()}</p>
              <p className="text-xs font-bold text-text-secondary mt-1 uppercase">{selectedResult.status}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-bg-input border border-border rounded-xl p-4">
            <div>
              <p className="text-[11px] font-bold text-text-secondary uppercase">Date</p>
              <p className="text-sm font-semibold text-text-primary mt-1">{selectedResult.date}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-text-secondary uppercase">Reference</p>
              <p className="text-sm font-semibold text-text-primary mt-1">{selectedResult.reference}</p>
            </div>
            <div className="col-span-2 border-t border-border pt-3 mt-1">
              <p className="text-[11px] font-bold text-text-secondary uppercase">Description / Details</p>
              <p className="text-sm text-text-primary mt-1">{selectedResult.details}</p>
            </div>
          </div>

        </div>
        
        <div className="p-4 border-t border-border bg-bg-page flex justify-between gap-3 shrink-0">
          <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
            <ExternalLink size={14} /> Open in Module
          </button>
          <button onClick={() => setViewModalOpen(false)} className="px-5 py-2 text-sm font-bold bg-bg-input border border-border text-text-primary rounded-lg hover:bg-card shadow-sm transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
