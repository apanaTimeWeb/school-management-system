"use client";

import { X, Save, ShieldAlert } from "lucide-react";
import { useState, useEffect } from "react";
import type { EmployeeAsset, AssetCategory, AssetStatus } from "../hr_assets_types/AdminHrAssetsTypes";

interface AdminHrAssetModalProps {
  asset: EmployeeAsset | null;
  isOpen: boolean;
  close: () => void;
  save: (a: EmployeeAsset) => void;
}

export default function AdminHrAssetModal({ asset, isOpen, close, save }: AdminHrAssetModalProps) {
  
  const [local, setLocal] = useState<EmployeeAsset | null>(null);

  useEffect(() => {
    if (isOpen && asset) {
      setLocal(JSON.parse(JSON.stringify(asset)));
    }
  }, [isOpen, asset]);

  if (!isOpen || !local) return null;

  const handleSave = () => {
    if (!local.employeeName || !local.assetName || !local.assetIdNumber) {
      alert("Please fill in Employee Name, Asset Name, and Asset ID.");
      return;
    }
    // If status is changed from Assigned to something else, auto-fill actualReturnDate if empty
    if (local.status !== 'Assigned' && !local.actualReturnDate) {
      local.actualReturnDate = new Date().toISOString().split('T')[0];
    }
    save(local);
  };

  const isHistoryMode = local.status !== 'Assigned' && local.id !== ""; // If it's already a historical record

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{local.id ? 'Asset Allocation Details' : 'Assign New Asset'}</h2>
            {isHistoryMode && <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-warning/10 text-warning border border-warning/20"><ShieldAlert size={10} className="inline mr-1"/> Read Only History</span>}
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          
          <div className="p-4 border border-border rounded-lg bg-input/20">
            <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Employee Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">Employee Name</label>
                <input type="text" value={local.employeeName} onChange={(e) => setLocal(prev => prev ? { ...prev, employeeName: e.target.value } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">EMP ID</label>
                <input type="text" value={local.employeeId} onChange={(e) => setLocal(prev => prev ? { ...prev, employeeId: e.target.value } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">Department</label>
                <input type="text" value={local.department} onChange={(e) => setLocal(prev => prev ? { ...prev, department: e.target.value } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50" />
              </div>
            </div>
          </div>

          <div className="p-4 border border-border rounded-lg bg-input/20">
            <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Asset Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">Asset Name / Model</label>
                <input type="text" value={local.assetName} onChange={(e) => setLocal(prev => prev ? { ...prev, assetName: e.target.value } : prev)} disabled={isHistoryMode} placeholder="e.g. Dell Latitude 5420" className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">Category</label>
                <select value={local.category} onChange={(e) => setLocal(prev => prev ? { ...prev, category: e.target.value as AssetCategory } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50">
                  <option value="Laptop">Laptop / Computer</option>
                  <option value="ID Card">ID Card</option>
                  <option value="Uniform">Uniform</option>
                  <option value="Keys">Keys</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">Asset ID / Serial No / Barcode</label>
                <input type="text" value={local.assetIdNumber} onChange={(e) => setLocal(prev => prev ? { ...prev, assetIdNumber: e.target.value } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50" />
              </div>
            </div>
          </div>

          <div className="p-4 border border-border rounded-lg bg-input/20">
            <h4 className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">Allocation Lifecycle</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">Issue Date</label>
                <input type="date" value={local.issueDate} onChange={(e) => setLocal(prev => prev ? { ...prev, issueDate: e.target.value } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-muted-foreground mb-1">Return Due</label>
                <input type="date" value={local.expectedReturnDate} onChange={(e) => setLocal(prev => prev ? { ...prev, expectedReturnDate: e.target.value } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-primary disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-primary mb-1 uppercase tracking-wider border-b border-primary pb-0.5 inline-block">Update Status</label>
                <select value={local.status} onChange={(e) => setLocal(prev => prev ? { ...prev, status: e.target.value as AssetStatus } : prev)} disabled={isHistoryMode} className="w-full px-3 py-2 bg-card border-2 border-primary rounded-md text-sm font-bold text-primary outline-none focus:border-primary disabled:opacity-50">
                  <option value="Assigned">Assigned (Active)</option>
                  <option value="Returned">Returned</option>
                  <option value="Damaged">Damaged</option>
                  <option value="Lost">Lost</option>
                </select>
              </div>
            </div>
            {local.status !== 'Assigned' && (
              <div className="mt-2 p-3 bg-danger/5 border border-danger/20 rounded-md">
                <label className="block text-[10px] font-bold text-danger mb-1 uppercase tracking-wider">Actual Date (Returned/Lost/Damaged)</label>
                <input type="date" value={local.actualReturnDate || ""} onChange={(e) => setLocal(prev => prev ? { ...prev, actualReturnDate: e.target.value } : prev)} disabled={isHistoryMode} className="w-full sm:w-1/3 px-3 py-2 bg-card border border-border rounded-md text-sm font-bold text-foreground outline-none focus:border-danger disabled:opacity-50" />
              </div>
            )}
          </div>

          <div>
            <label className="block text-[10px] font-bold text-muted-foreground mb-1">Notes / Condition remarks</label>
            <textarea rows={3} value={local.notes} onChange={(e) => setLocal(prev => prev ? { ...prev, notes: e.target.value } : prev)} disabled={isHistoryMode} placeholder="Note any scratches, missing parts, or reasons for return..." className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm font-medium text-foreground outline-none focus:border-primary resize-none disabled:opacity-50"></textarea>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-overlay flex justify-end gap-3">
           <button onClick={close} className="px-6 py-2 bg-input text-foreground font-bold text-sm rounded-md hover:bg-border transition-colors">
             Close
           </button>
           {!isHistoryMode && (
             <button onClick={handleSave} className="px-6 py-2 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
               <Save size={16}/> {local.id ? 'Save Asset Details' : 'Assign Asset'}
             </button>
           )}
        </div>

      </div>
    </div>
  );
}
