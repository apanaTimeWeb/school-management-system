"use client";
import React from "react";
import { X, Send } from "lucide-react";
import { useHRCommunicationStore } from "../hr_communication_store/useHRCommunicationStore";

export default function HRCommunicationModals() {
  const { 
    isComposeModalOpen, setComposeModalOpen
  } = useHRCommunicationStore();

  // Assuming this modal is just for composing new messages
  // (We could add another modal for viewing, but keeping it simple for now)

  // if (!isComposeModalOpen) return null; // Wait, actually we need a trigger to open it, we used setComposeModalOpen in Main

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity ${isComposeModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-card w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform ${isComposeModalOpen ? 'scale-100' : 'scale-95'}`}>
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Compose Message</h3>
          <button 
            onClick={() => setComposeModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Message Type</label>
              <select className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500">
                <option value="Notice">Notice</option>
                <option value="Email">Email</option>
                <option value="SMS">SMS</option>
                <option value="Announcement">Announcement</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Audience</label>
              <select className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500">
                <option value="All Staff">All Staff</option>
                <option value="Teaching Staff">Teaching Staff</option>
                <option value="Non-Teaching Staff">Non-Teaching Staff</option>
                <option value="Specific Departments">Specific Departments...</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Subject / Title</label>
            <input 
              type="text" 
              className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-indigo-500" 
              placeholder="e.g. Important Update regarding..."
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Message Content</label>
            <textarea 
              className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-semibold outline-none focus:border-indigo-500 min-h-[150px]" 
              placeholder="Type your message here..."
            />
          </div>
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input">
          <button 
            onClick={() => setComposeModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
          >
            Cancel
          </button>
          
          <button 
            onClick={() => setComposeModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2"
          >
            <Send size={16} /> Send Now
          </button>
        </div>
      </div>
    </div>
  );
}
