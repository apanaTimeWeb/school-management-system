"use client";
import React, { useState } from 'react';
import { X, ShieldAlert, CheckCircle, AlertTriangle, FileText } from 'lucide-react';
import { usePrincipalDisciplineStore } from '../discipline_store/usePrincipalDisciplineStore';
import { updatePrincipalIncidentAction } from '../discipline_api/PrincipalDisciplineApi';
import clsx from 'clsx';

export default function PrincipalDisciplineActionModal() {
  const { selectedIncident, setSelectedIncident } = usePrincipalDisciplineStore();
  const [loading, setLoading] = useState(false);
  const [actionDesc, setActionDesc] = useState('');

  if (!selectedIncident) return null;

  const handleUpdate = async () => {
    if (!actionDesc) return;
    setLoading(true);
    await updatePrincipalIncidentAction(selectedIncident.id, actionDesc);
    setLoading(false);
    setSelectedIncident(null);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <AlertTriangle className="text-warning" size={18} /> 
            Incident Details & Action
          </h2>
          <button 
            onClick={() => setSelectedIncident(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-danger/20 flex items-center justify-center text-danger border border-danger/30">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-text-primary">{selectedIncident.offenderName}</h3>
                <p className="text-[13px] text-text-secondary">{selectedIncident.offenderType} • {selectedIncident.departmentOrClass}</p>
                <p className="text-[12px] text-text-secondary mt-1">ID: {selectedIncident.offenderId}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1">Incident Type</p>
              <p className="text-[14px] font-bold text-info">{selectedIncident.incidentType}</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1">Severity</p>
              <span className={clsx("px-2 py-0.5 rounded text-[12px] font-bold border", 
                selectedIncident.severity === 'Critical' ? 'bg-danger/20 text-danger border-danger/30' :
                selectedIncident.severity === 'High' ? 'bg-warning/20 text-warning border-warning/30' :
                'bg-success/20 text-success border-success/30')}>
                {selectedIncident.severity}
              </span>
            </div>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <p className="text-[12px] text-text-secondary mb-2 flex items-center gap-2"><FileText size={14} className="text-primary"/> Incident Description</p>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedIncident.description}</p>
            <div className="mt-4 pt-3 border-t border-border flex justify-between items-center text-[12px] text-text-secondary">
               <span>Reported By: <strong className="text-text-primary">{selectedIncident.reportedBy}</strong></span>
               <span>Date: <strong className="text-text-primary">{selectedIncident.dateReported}</strong></span>
            </div>
          </div>

          {selectedIncident.actionTaken && (
            <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
              <p className="text-[12px] text-success font-bold uppercase tracking-wider mb-2 flex items-center gap-2"><CheckCircle size={14}/> Previous Action Taken</p>
              <p className="text-[14px] text-text-primary">{selectedIncident.actionTaken}</p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[13px] font-bold text-text-secondary block">Update Status or Disciplinary Action</label>
            <textarea 
              value={actionDesc}
              onChange={(e) => setActionDesc(e.target.value)}
              className="w-full bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary outline-none focus:border-primary transition-colors min-h-[80px]"
              placeholder="E.g., Final Warning Issued, Meeting scheduled with Parents, Suspended for 2 days..."
            />
          </div>
          
        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={() => setSelectedIncident(null)}
            disabled={loading}
            className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading || !actionDesc.trim()}
            className="px-6 py-2 rounded-md bg-primary border border-primary hover:bg-primary-hover text-white text-[13px] font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? "Saving..." : <><CheckCircle size={16}/> Save Action</>}
          </button>
        </div>
      </div>
    </div>
  );
}
