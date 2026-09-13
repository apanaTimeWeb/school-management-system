"use client";
import React from 'react';
import { X, AlertCircle, Phone, CheckCircle, Clock } from 'lucide-react';
import { usePrincipalHealthStore } from '../health_store/usePrincipalHealthStore';
import clsx from 'clsx';

export default function PrincipalHealthIncidentModal() {
  const { selectedIncident, setSelectedIncident } = usePrincipalHealthStore();

  if (!selectedIncident) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <AlertCircle className="text-danger" size={18} /> 
            Incident Details
          </h2>
          <button 
            onClick={() => setSelectedIncident(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          
          <div className="flex flex-col items-start gap-4 border-b border-border pb-4">
            <div className="w-full flex justify-between items-start">
              <div>
                <span className={clsx("text-[11px] font-bold px-2 py-0.5 rounded mb-2 inline-block border", 
                  selectedIncident.severity === 'Emergency' ? 'bg-danger/10 text-danger border-danger/30' :
                  selectedIncident.severity === 'Major' ? 'bg-warning/10 text-warning border-warning/30' :
                  'bg-info/10 text-info border-info/30'
                )}>
                  {selectedIncident.severity}
                </span>
                <h3 className="text-[20px] font-bold text-text-primary mb-1">{selectedIncident.incidentType}</h3>
                <p className="text-[13px] text-text-secondary flex items-center gap-1.5"><Clock size={12}/> {selectedIncident.date} at {selectedIncident.time}</p>
              </div>
              <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0", 
                selectedIncident.status === 'Open' ? 'bg-warning/10 text-warning border-warning/30' : 'bg-success/10 text-success border-success/30'
              )}>
                {selectedIncident.status}
              </span>
            </div>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg">
            <p className="text-[11px] text-text-secondary mb-1">Student Details</p>
            <p className="text-[15px] font-bold text-text-primary">{selectedIncident.studentName}</p>
            <p className="text-[13px] text-text-secondary mt-0.5">Class: {selectedIncident.classAndSection} | ID: {selectedIncident.studentId}</p>
          </div>

          <div className="bg-danger/5 border border-danger/20 p-4 rounded-lg">
            <h4 className="text-[12px] font-bold text-danger mb-2">Description</h4>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedIncident.description}</p>
          </div>

          <div className="bg-success/5 border border-success/20 p-4 rounded-lg">
            <h4 className="text-[12px] font-bold text-success mb-2 flex items-center gap-1.5"><CheckCircle size={14}/> Action Taken by Clinic</h4>
            <p className="text-[14px] text-text-primary leading-relaxed">{selectedIncident.actionTaken}</p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <Phone size={16} className={selectedIncident.parentNotified ? 'text-success' : 'text-text-secondary'}/>
            <span className="text-[14px] font-bold text-text-primary">
              Parent/Guardian Notified: 
              <span className={clsx("ml-2", selectedIncident.parentNotified ? 'text-success' : 'text-danger')}>
                {selectedIncident.parentNotified ? 'Yes' : 'No'}
              </span>
            </span>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedIncident(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
