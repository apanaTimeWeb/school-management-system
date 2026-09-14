"use client";

import { X, UserCheck, Shield, Phone, Mail, Building, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ViewDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string | null;
}

export default function SuperAdminViewUserDrawer({ isOpen, onClose, userId }: ViewDrawerProps) {
  // In a real app, you'd fetch the user data using userId.
  // We'll mock a full profile view here.

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-overlay/50 z-40" onClick={onClose} />}
      <div className={cn(
        "fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-card shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b border-border bg-header">
          <h2 className="text-lg font-bold text-text-primary">View User Profile</h2>
          <button onClick={onClose} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded-md">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          
          {/* Header Profile */}
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <div className="w-24 h-24 rounded-full bg-primary-subtle flex items-center justify-center text-primary font-bold text-3xl border border-primary/20 shadow-sm">
              A
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text-primary">Amit Sharma</h3>
              <p className="text-sm text-text-secondary mt-0.5">@amit.sharma</p>
              <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full bg-success-bg text-success text-[10px] font-bold tracking-wider uppercase border border-success/20">
                Active Account
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider border-b border-border pb-1">Contact Information</h4>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded bg-bg-page flex items-center justify-center text-text-secondary"><Mail size={14} /></div>
                <div>
                  <p className="text-[11px] text-text-secondary">Email Address</p>
                  <p className="font-medium text-text-primary">amit@school.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded bg-bg-page flex items-center justify-center text-text-secondary"><Phone size={14} /></div>
                <div>
                  <p className="text-[11px] text-text-secondary">Mobile Number</p>
                  <p className="font-medium text-text-primary">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider border-b border-border pb-1">Role & Placement</h4>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded bg-primary-subtle flex items-center justify-center text-primary"><Shield size={14} /></div>
                <div>
                  <p className="text-[11px] text-text-secondary">System Role</p>
                  <p className="font-medium text-text-primary">Principal</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded bg-bg-page flex items-center justify-center text-text-secondary"><Building size={14} /></div>
                <div>
                  <p className="text-[11px] text-text-secondary">Branch Assigned</p>
                  <p className="font-medium text-text-primary">Main Campus</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded bg-bg-page flex items-center justify-center text-text-secondary"><Briefcase size={14} /></div>
                <div>
                  <p className="text-[11px] text-text-secondary">Department</p>
                  <p className="font-medium text-text-primary">Administration</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="p-6 border-t border-border bg-header flex items-center justify-between">
          <p className="text-xs text-text-secondary flex items-center gap-1.5"><UserCheck size={14} /> ID: {userId}</p>
          <button onClick={onClose} className="px-6 py-2 bg-primary text-black rounded-md hover:bg-primary-hover text-sm font-medium">Done</button>
        </div>
      </div>
    </>
  );
}
