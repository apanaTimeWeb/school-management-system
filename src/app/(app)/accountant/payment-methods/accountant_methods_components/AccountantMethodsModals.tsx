"use client";
import React, { useState, useEffect } from "react";
import { X, Save, ShieldAlert } from "lucide-react";
import { useAccountantMethodsStore } from "../accountant_methods_store/useAccountantMethodsStore";

export default function AccountantMethodsModals() {
  const { 
    selectedMethod, 
    isConfigModalOpen, setConfigModalOpen 
  } = useAccountantMethodsStore();

  const [status, setStatus] = useState("Active");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (selectedMethod) {
      setStatus(selectedMethod.status);
      setDetails(selectedMethod.configDetails || "");
    }
  }, [selectedMethod]);

  const handleSaveConfig = () => {
    alert(`${selectedMethod?.name} configuration updated successfully.`);
    setConfigModalOpen(false);
  };

  if (!selectedMethod) return null;

  return (
    <>
      {/* Configure Method Modal */}
      {isConfigModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
              <h3 className="text-lg font-bold text-text-primary">Configure {selectedMethod.name}</h3>
              <button onClick={() => setConfigModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-5">
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-sm text-text-primary flex gap-3 items-start">
                <ShieldAlert size={18} className="text-primary shrink-0 mt-0.5" />
                <p>Changes made to payment methods will immediately reflect across the fee collection portals.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">Status</label>
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none"
                >
                  <option value="Active">Active (Enabled)</option>
                  <option value="Inactive">Inactive (Disabled)</option>
                  <option value="Under Maintenance">Under Maintenance (Hidden)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">
                  Configuration Details / Instructions
                </label>
                <textarea 
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. Bank Account Number, UPI ID, or integration remarks..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none min-h-[100px] resize-none"
                ></textarea>
                <p className="text-[10px] text-text-secondary mt-1">This detail is shown to parents on the receipt/portal if applicable.</p>
              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setConfigModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleSaveConfig} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors">
                <Save size={16} /> Save Configuration
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
