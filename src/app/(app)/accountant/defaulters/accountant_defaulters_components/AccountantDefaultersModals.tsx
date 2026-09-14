"use client";
import React, { useState } from "react";
import { X, Send, Save } from "lucide-react";
import { useAccountantDefaultersStore } from "../accountant_defaulters_store/useAccountantDefaultersStore";
import { formatCurrency } from "../accountant_defaulters_utils/AccountantDefaultersConstants";

export default function AccountantDefaultersModals() {
  const { 
    selectedDefaulter, 
    isReminderModalOpen, setReminderModalOpen,
    isFollowUpModalOpen, setFollowUpModalOpen
  } = useAccountantDefaultersStore();

  const [reminderMode, setReminderMode] = useState("SMS + Email");
  const [followUpStatus, setFollowUpStatus] = useState("Promised to Pay");
  const [followUpNote, setFollowUpNote] = useState("");

  const handleSendReminder = () => {
    alert(`Reminder sent to ${selectedDefaulter?.studentName} via ${reminderMode}.`);
    setReminderModalOpen(false);
  };

  const handleSaveFollowUp = () => {
    alert(`Follow-up saved for ${selectedDefaulter?.studentName}. Status: ${followUpStatus}`);
    setFollowUpModalOpen(false);
    setFollowUpNote("");
  };

  if (!selectedDefaulter) return null;

  return (
    <>
      {/* Reminder Modal */}
      {isReminderModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/5">
              <h3 className="text-lg font-bold text-text-primary">Send Payment Reminder</h3>
              <button onClick={() => setReminderModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-bg-page border border-border rounded-lg p-3 text-sm">
                <p><span className="text-text-secondary">Student:</span> <span className="font-bold text-text-primary">{selectedDefaulter.studentName} ({selectedDefaulter.classSection})</span></p>
                <p className="mt-1"><span className="text-text-secondary">Overdue:</span> <span className="font-bold text-danger">{formatCurrency(selectedDefaulter.outstandingAmount)}</span></p>
                <p className="mt-1"><span className="text-text-secondary">Days Overdue:</span> <span className="font-bold text-danger">{selectedDefaulter.overdueDays} Days</span></p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2">Reminder Channel</label>
                <select 
                  value={reminderMode}
                  onChange={(e) => setReminderMode(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-primary outline-none"
                >
                  <option>SMS + Email</option>
                  <option>WhatsApp Message</option>
                  <option>App Notification</option>
                  <option>Only SMS</option>
                </select>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setReminderModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button onClick={handleSendReminder} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md">
                <Send size={16} /> Send Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Follow Up Modal */}
      {isFollowUpModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-info/5">
              <h3 className="text-lg font-bold text-text-primary">Log Follow-up</h3>
              <button onClick={() => setFollowUpModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-bg-page border border-border rounded-lg p-3 text-sm">
                <p><span className="text-text-secondary">Student:</span> <span className="font-bold text-text-primary">{selectedDefaulter.studentName}</span></p>
                <p className="mt-1"><span className="text-text-secondary">Previous Status:</span> <span className="font-bold text-text-primary">{selectedDefaulter.followUpStatus}</span></p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2">New Status</label>
                <select 
                  value={followUpStatus}
                  onChange={(e) => setFollowUpStatus(e.target.value)}
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-info outline-none"
                >
                  <option>Promised to Pay</option>
                  <option>Disputed</option>
                  <option>Unreachable</option>
                  <option>Left School</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2">Conversation Note</label>
                <textarea 
                  value={followUpNote}
                  onChange={(e) => setFollowUpNote(e.target.value)}
                  placeholder="e.g. Spoke to father, promised to pay on 10th..." 
                  className="w-full bg-bg-input border border-border rounded-lg px-3 py-2.5 text-sm text-text-primary focus:border-info outline-none min-h-[100px] resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3">
              <button onClick={() => setFollowUpModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary">Cancel</button>
              <button onClick={handleSaveFollowUp} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-info text-white rounded-lg hover:bg-info/80 shadow-md">
                <Save size={16} /> Save Log
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
