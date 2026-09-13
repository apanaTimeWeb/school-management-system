"use client";
import React from 'react';
import { X, PackageSearch, PenTool } from 'lucide-react';
import { usePrincipalInventoryStore } from '../inventory_store/usePrincipalInventoryStore';
import clsx from 'clsx';

export default function PrincipalAssetModal() {
  const { selectedAsset, setSelectedAsset } = usePrincipalInventoryStore();

  if (!selectedAsset) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-lg bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <PackageSearch className="text-primary" size={18} /> 
            Asset Details
          </h2>
          <button 
            onClick={() => setSelectedAsset(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          
          <div className="flex flex-col items-start gap-4 border-b border-border pb-4">
            <div className="w-full flex justify-between items-start">
              <div>
                <h3 className="text-[20px] font-bold text-text-primary mb-1">{selectedAsset.name}</h3>
                <p className="text-[13px] text-text-secondary font-mono">ID: {selectedAsset.assetId}</p>
              </div>
              <span className={clsx("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border shrink-0", 
                  selectedAsset.status === 'Available' ? 'bg-success/10 text-success border-success/30' :
                  selectedAsset.status === 'Lost/Damaged' ? 'bg-danger/10 text-danger border-danger/30' :
                  selectedAsset.status === 'Maintenance' ? 'bg-warning/10 text-warning border-warning/30' :
                  'bg-info/10 text-info border-info/30'
              )}>
                {selectedAsset.status === 'Maintenance' && <PenTool size={14}/>}
                {selectedAsset.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[11px] text-text-secondary font-bold mb-1">Category</p>
              <p className="text-[15px] font-bold text-primary">{selectedAsset.category}</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[11px] text-text-secondary font-bold mb-1">Quantity</p>
              <p className="text-[15px] font-bold text-text-primary">{selectedAsset.quantity} / {selectedAsset.totalQuantity}</p>
            </div>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <p className="text-[11px] text-text-secondary font-bold mb-1">Current Allocation</p>
            {selectedAsset.allocatedTo ? (
              <p className="text-[15px] font-bold text-text-primary">{selectedAsset.allocatedTo}</p>
            ) : (
              <p className="text-[14px] text-text-secondary italic">Not currently allocated</p>
            )}
          </div>

          {selectedAsset.lastMaintained && (
            <div className="bg-card border border-border p-4 rounded-lg flex justify-between items-center">
              <span className="text-[13px] font-bold text-text-secondary">Last Maintenance Date</span>
              <span className="text-[14px] font-bold text-text-primary">{selectedAsset.lastMaintained}</span>
            </div>
          )}

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedAsset(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
