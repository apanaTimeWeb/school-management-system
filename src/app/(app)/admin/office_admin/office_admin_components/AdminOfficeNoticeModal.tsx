"use client";

import { X, Send } from "lucide-react";
import { useState, useEffect } from "react";
import type { OfficeNotice } from "../office_admin_types/AdminOfficeTypes";

interface AdminOfficeNoticeModalProps {
  notice: OfficeNotice | null;
  isOpen: boolean;
  close: () => void;
  save: (notice: OfficeNotice) => void;
}

export default function AdminOfficeNoticeModal({ notice, isOpen, close, save }: AdminOfficeNoticeModalProps) {
  
  const [localNotice, setLocalNotice] = useState<OfficeNotice>({
    id: "", title: "", type: "Notice", datePublished: new Date().toISOString().split('T')[0], targetAudience: "All Staff", content: "", priority: "Normal"
  });

  useEffect(() => {
    if (isOpen) {
      if (notice) {
        setLocalNotice(JSON.parse(JSON.stringify(notice)));
      } else {
        setLocalNotice({
          id: "", title: "", type: "Notice", datePublished: new Date().toISOString().split('T')[0], targetAudience: "All Staff", content: "", priority: "Normal"
        });
      }
    }
  }, [isOpen, notice]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!localNotice.title || !localNotice.content) {
      alert("Please fill in the title and content.");
      return;
    }
    save(localNotice);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{notice ? 'Edit' : 'Publish'} Official Communication</h2>
            <p className="text-sm font-medium text-muted-foreground mt-1">Fill in the details to circulate a notice or circular.</p>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">Type</label>
              <select value={localNotice.type} onChange={(e) => setLocalNotice(prev => ({ ...prev, type: e.target.value as any }))} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
                <option value="Notice">Notice</option>
                <option value="Circular">Circular</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted-foreground mb-1">Priority</label>
              <select value={localNotice.priority} onChange={(e) => setLocalNotice(prev => ({ ...prev, priority: e.target.value as any }))} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent (Red Alert)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-1">Target Audience</label>
            <select value={localNotice.targetAudience} onChange={(e) => setLocalNotice(prev => ({ ...prev, targetAudience: e.target.value }))} className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
              <option value="All Staff">All Staff</option>
              <option value="Teachers Only">Teachers Only</option>
              <option value="Admin Staff">Admin Staff</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-1">Subject / Title</label>
            <input 
              type="text" 
              value={localNotice.title} 
              onChange={(e) => setLocalNotice(prev => ({ ...prev, title: e.target.value }))}
              placeholder="e.g. Server Maintenance, Upcoming Holidays"
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-muted-foreground mb-1">Body / Content</label>
            <textarea 
              rows={6} 
              value={localNotice.content} 
              onChange={(e) => setLocalNotice(prev => ({ ...prev, content: e.target.value }))}
              placeholder="Enter the official details here..."
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none resize-none"
            ></textarea>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-overlay flex justify-end gap-3">
           <button onClick={close} className="px-6 py-2 bg-input text-foreground font-bold text-sm rounded-md hover:bg-border transition-colors">
             Cancel
           </button>
           <button onClick={handleSave} className="px-6 py-2 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2">
             <Send size={16}/> {notice ? 'Update Publication' : 'Publish & Broadcast'}
           </button>
        </div>

      </div>
    </div>
  );
}
