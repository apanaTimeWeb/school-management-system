"use client";
import React, { useState } from "react";
import { X, Send, Megaphone, Smartphone, Mail, MessageSquare } from "lucide-react";
import { useAccountantCommunicationStore } from "../accountant_communication_store/useAccountantCommunicationStore";
import { COMMUNICATION_TEMPLATES } from "../accountant_communication_utils/AccountantCommunicationConstants";
import clsx from "clsx";
import { CommunicationType } from "../accountant_communication_types/AccountantCommunicationTypes";

export default function AccountantCommunicationModals() {
  const { isComposeModalOpen, setComposeModalOpen } = useAccountantCommunicationStore();

  const [msgType, setMsgType] = useState<CommunicationType | "">("");
  const [channel, setChannel] = useState("");
  const [audience, setAudience] = useState("Single Student");

  const handleSend = () => {
    alert(`Sending ${msgType} via ${channel} to ${audience}...`);
    setComposeModalOpen(false);
  };

  return (
    <>
      {isComposeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><Megaphone size={18} className="text-primary"/> Send Financial Notification</h3>
              <button onClick={() => setComposeModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6">
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2">Message Type</label>
                  <select 
                    value={msgType}
                    onChange={(e) => setMsgType(e.target.value as CommunicationType)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  >
                    <option value="" disabled>Select Type...</option>
                    {Object.keys(COMMUNICATION_TEMPLATES).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2">Target Audience</label>
                  <select 
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  >
                    <option value="Single Student">Single Student (Search ID)</option>
                    <option value="All Defaulters">All Defaulters (Global)</option>
                    <option value="Class 10 Defaulters">Class 10 Defaulters</option>
                  </select>
                </div>
              </div>

              {audience === "Single Student" && (
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-2">Student ID / Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter Student ID..." 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-2">Communication Channel</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'SMS', icon: <MessageSquare size={16} /> },
                    { id: 'Email', icon: <Mail size={16} /> },
                    { id: 'WhatsApp', icon: <Smartphone size={16} /> }
                  ].map(ch => (
                    <div 
                      key={ch.id}
                      onClick={() => setChannel(ch.id)}
                      className={clsx(
                        "flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer transition-all gap-2",
                        channel === ch.id 
                          ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(var(--color-primary),0.2)]" 
                          : "bg-bg-input border-border text-text-secondary hover:border-primary/50 hover:text-text-primary"
                      )}
                    >
                      {ch.icon}
                      <span className="text-xs font-bold">{ch.id}</span>
                    </div>
                  ))}
                </div>
              </div>

              {msgType && (
                <div className="p-4 bg-bg-input border border-border rounded-lg">
                  <label className="block text-xs font-semibold text-text-secondary mb-2">Template Preview (Variables auto-fill)</label>
                  <p className="text-sm text-text-primary italic">
                    {COMMUNICATION_TEMPLATES[msgType]}
                  </p>
                </div>
              )}

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-between items-center shrink-0">
              <span className="text-[10px] text-text-secondary">Note: API Gateway is managed by Admin.</span>
              <div className="flex gap-3">
                <button onClick={() => setComposeModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
                <button 
                  onClick={handleSend} 
                  disabled={!msgType || !channel}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-black rounded-lg hover:bg-primary-hover shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} /> Push Notification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
