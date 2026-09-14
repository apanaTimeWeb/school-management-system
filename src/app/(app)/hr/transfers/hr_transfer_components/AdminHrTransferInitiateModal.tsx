"use client";

import { X, Save, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { TransferType } from "../hr_transfer_types/AdminHrTransferTypes";

interface AdminHrTransferInitiateModalProps {
  isOpen: boolean;
  close: () => void;
  submit: (data: any) => void;
}

export default function AdminHrTransferInitiateModal({ isOpen, close, submit }: AdminHrTransferInitiateModalProps) {
  const [empName, setEmpName] = useState("");
  const [type, setType] = useState<TransferType>("Department Transfer");
  const [currentValue, setCurrentValue] = useState("");
  const [proposedValue, setProposedValue] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({ empName, type, currentValue, proposedValue, effectiveDate, reason });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
        
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <h2 className="text-xl font-bold text-foreground">Initiate Transfer / Promotion</h2>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">Employee Name</label>
              <input required type="text" value={empName} onChange={e => setEmpName(e.target.value)} placeholder="e.g. Amit Kumar" className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">Request Type</label>
              <select value={type} onChange={e => setType(e.target.value as TransferType)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none">
                <option value="Promotion">Promotion</option>
                <option value="Demotion">Demotion</option>
                <option value="Department Transfer">Department Transfer</option>
                <option value="Branch/Campus Transfer">Branch/Campus Transfer</option>
                <option value="Designation Change">Designation Change</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-input/30 border border-border rounded-lg">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Change Details</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase">Current Value</label>
                <input required type="text" value={currentValue} onChange={e => setCurrentValue(e.target.value)} placeholder="e.g. Junior Teacher" className="w-full px-3 py-2 bg-card border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" />
              </div>
              <ArrowRight size={20} className="text-primary mt-4"/>
              <div className="flex-1">
                <label className="block text-[10px] font-bold text-muted-foreground mb-1 uppercase">Proposed Value</label>
                <input required type="text" value={proposedValue} onChange={e => setProposedValue(e.target.value)} placeholder="e.g. Senior Teacher" className="w-full px-3 py-2 bg-card border border-primary/50 rounded-md text-sm text-foreground focus:border-primary outline-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">Effective Date</label>
              <input required type="date" value={effectiveDate} onChange={e => setEffectiveDate(e.target.value)} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-1">Reason / Remarks</label>
            <textarea required value={reason} onChange={e => setReason(e.target.value)} rows={3} placeholder="Provide justification for this request..." className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none"></textarea>
          </div>

          <div className="pt-4 border-t border-border flex justify-end gap-3">
            <button type="button" onClick={close} className="px-4 py-2 text-sm font-bold text-foreground border border-border rounded-md hover:bg-input transition-colors">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
              <Save size={16} /> Submit Request
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
