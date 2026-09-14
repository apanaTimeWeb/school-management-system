"use client";

import { X, Send } from "lucide-react";
import { useState, useEffect } from "react";
import type { CommMessage, CommCategory } from "../hr_communication_types/HrCommTypes";

interface HrCommBroadcastModalProps {
  isOpen: boolean;
  close: () => void;
  sendBroadcast: (msg: CommMessage) => void;
}

export default function HrCommBroadcastModal({ isOpen, close, sendBroadcast }: HrCommBroadcastModalProps) {
  
  const [localMsg, setLocalMsg] = useState<Partial<CommMessage>>({
    category: "Staff Announcement", subject: "", message: "", channelsUsed: ["In-App"]
  });

  useEffect(() => {
    if (isOpen) {
      setLocalMsg({ category: "Staff Announcement", subject: "", message: "", channelsUsed: ["In-App"] });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleChannel = (c: string) => {
    setLocalMsg(prev => {
      const current = prev.channelsUsed || [];
      if (current.includes(c)) return { ...prev, channelsUsed: current.filter(x => x !== c) };
      return { ...prev, channelsUsed: [...current, c] };
    });
  };

  const handleSend = () => {
    if (!localMsg.subject || !localMsg.message) {
      alert("Please fill in subject and message.");
      return;
    }
    if ((localMsg.channelsUsed || []).length === 0) {
      alert("Please select at least one delivery channel.");
      return;
    }
    const finalMsg: CommMessage = {
      id: `msg-${Date.now()}`,
      category: localMsg.category as CommCategory,
      subject: localMsg.subject!,
      message: localMsg.message!,
      sender: "Admin (You)",
      timestamp: new Date().toISOString(),
      isRead: false,
      channelsUsed: localMsg.channelsUsed!
    };
    sendBroadcast(finalMsg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Compose Broadcast</h2>
            <p className="text-sm font-medium text-muted-foreground mt-1">Send a notification to staff across multiple channels.</p>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          
          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-1">Notification Category</label>
            <select value={localMsg.category} onChange={(e) => setLocalMsg(prev => ({ ...prev, category: e.target.value as CommCategory }))} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
              <option value="Staff Announcement">Staff Announcement</option>
              <option value="Leave Notification">Leave Notification</option>
              <option value="HR Notification">HR Notification</option>
              <option value="Meeting Notification">Meeting Notification</option>
              <option value="Document Expiry Alert">Document Expiry Alert</option>
              <option value="Joining/Exit Notification">Joining/Exit Notification</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-1">Subject</label>
            <input 
              type="text" 
              value={localMsg.subject} 
              onChange={(e) => setLocalMsg(prev => ({ ...prev, subject: e.target.value }))}
              placeholder="e.g. Mandatory Staff Meeting"
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-1">Message Body</label>
            <textarea 
              rows={5} 
              value={localMsg.message} 
              onChange={(e) => setLocalMsg(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Enter the broadcast details here..."
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-3">Delivery Channels</label>
            <div className="flex flex-wrap gap-4">
               {['In-App', 'Email', 'SMS', 'WhatsApp'].map(c => {
                 const isSelected = (localMsg.channelsUsed || []).includes(c);
                 return (
                   <label key={c} className={`flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer transition-colors ${isSelected ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-input text-muted-foreground hover:bg-border'}`}>
                     <input type="checkbox" checked={isSelected} onChange={() => toggleChannel(c)} className="hidden" />
                     <span className="text-sm font-bold">{c}</span>
                   </label>
                 );
               })}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-overlay flex justify-end gap-3">
           <button onClick={close} className="px-6 py-2 bg-input text-foreground font-bold text-sm rounded-md hover:bg-border transition-colors">
             Discard
           </button>
           <button onClick={handleSend} className="px-6 py-2 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
             <Send size={16}/> Broadcast Now
           </button>
        </div>

      </div>
    </div>
  );
}

