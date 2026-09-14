"use client";

import { X, Save, AlertTriangle } from "lucide-react";

interface AdminHrEmployeesHistoryModalProps {
  isOpen: boolean;
  action: 'Transfer' | 'Promotion' | 'Resignation' | 'Exit' | null;
  close: () => void;
}

export default function AdminHrEmployeesHistoryModal({ isOpen, action, close }: AdminHrEmployeesHistoryModalProps) {
  if (!isOpen || !action) return null;

  const isDestructive = action === 'Resignation' || action === 'Exit';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-overlay border border-border rounded-xl w-full max-w-md shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
        
        <div className={`flex items-center justify-between p-5 border-b border-border bg-card`}>
          <h3 className={`text-lg font-bold flex items-center gap-2 ${isDestructive ? 'text-danger' : 'text-primary'}`}>
            {isDestructive && <AlertTriangle size={18} />} Record {action}
          </h3>
          <button onClick={close} className="p-1 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Effective Date</label>
            <input type="date" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground focus:border-primary outline-none" />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Details / Reason</label>
            <textarea className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground focus:border-primary outline-none min-h-[100px]" placeholder={`Enter details regarding the ${action.toLowerCase()}...`}></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button onClick={close} className="px-4 py-2 text-sm font-bold border border-border text-foreground rounded-md hover:bg-input transition-colors">Cancel</button>
            <button onClick={close} className={`flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-md shadow-lg transition-all active:scale-95 ${isDestructive ? 'bg-danger hover:bg-red-600 shadow-danger/20' : 'bg-primary hover:bg-yellow-500 shadow-primary/20'}`}>
              <Save size={16} /> Save Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
