"use client";
import React from 'react';
import { X, Users, Phone, Mail, MapPin, BriefcaseBusiness, AlertCircle } from 'lucide-react';
import { usePrincipalParentsStore } from '../parents_store/usePrincipalParentsStore';

export default function PrincipalParentsProfileModal() {
  const { selectedParent, setSelectedParent } = usePrincipalParentsStore();

  if (!selectedParent) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Users className="text-primary" size={18} /> 
            Parent Profile Details
          </h2>
          <button 
            onClick={() => setSelectedParent(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-3xl border border-primary/30 shrink-0 mx-auto md:mx-0">
              {selectedParent.primaryContactName.charAt(0)}
            </div>
            <div className="flex-1 text-center md:text-left space-y-1">
              <h3 className="text-[22px] font-bold text-text-primary">{selectedParent.primaryContactName}</h3>
              <p className="text-[14px] text-text-secondary">Parent ID: {selectedParent.id}</p>
              {selectedParent.isImportantCase && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold bg-danger/10 border border-danger/20 text-danger">
                  <AlertCircle size={14}/> Important Case (Flagged)
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><Phone size={14} className="text-info"/> Contact Number</p>
              <p className="text-[14px] font-bold text-text-primary">{selectedParent.contactNumber}</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><Mail size={14} className="text-warning"/> Email Address</p>
              <p className="text-[14px] font-bold text-text-primary">{selectedParent.email}</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><BriefcaseBusiness size={14} className="text-primary"/> Occupation</p>
              <p className="text-[14px] font-bold text-text-primary">{selectedParent.occupation}</p>
            </div>
            <div className="bg-card border border-border p-4 rounded-lg">
              <p className="text-[12px] text-text-secondary mb-1 flex items-center gap-2"><MapPin size={14} className="text-success"/> Address</p>
              <p className="text-[14px] font-bold text-text-primary truncate" title={selectedParent.address}>{selectedParent.address}</p>
            </div>
          </div>

          <div>
            <h4 className="text-[15px] font-bold text-text-primary mb-3 border-b border-border pb-2">Linked Students</h4>
            <div className="grid gap-3">
              {selectedParent.children.map((child, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-page border border-border">
                  <div>
                    <p className="text-[14px] font-bold text-text-primary">{child.studentName}</p>
                    <p className="text-[12px] text-text-secondary">Class: {child.classAndSection}</p>
                  </div>
                  <span className="text-[12px] font-mono text-text-secondary bg-black/20 px-2 py-1 rounded">
                    {child.studentId}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0">
          <button
            onClick={() => setSelectedParent(null)}
            className="px-6 py-2 rounded-md bg-primary hover:bg-primary-hover text-black text-[13px] font-bold transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}
