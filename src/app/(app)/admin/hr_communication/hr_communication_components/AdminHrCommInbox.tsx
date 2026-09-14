"use client";

import { Search, Send, BellRing, Mail, MessageSquare } from "lucide-react";
import type { CommMessage } from "../hr_communication_types/AdminHrCommTypes";

interface AdminHrCommInboxProps {
  messages: CommMessage[];
  categoryFilter: string; setCategoryFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openBroadcast: () => void;
  markAsRead: (id: string) => void;
}

export default function AdminHrCommInbox({
  messages, categoryFilter, setCategoryFilter, searchFilter, setSearchFilter, openBroadcast, markAsRead
}: AdminHrCommInboxProps) {

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Staff Announcement': return 'bg-primary/10 text-primary border-primary/20';
      case 'Meeting Notification': return 'bg-info/10 text-info border-info/20';
      case 'Document Expiry Alert': return 'bg-danger/10 text-danger border-danger/20';
      default: return 'bg-input text-muted-foreground border-border';
    }
  };

  const getChannelIcon = (c: string) => {
    if (c.includes("Email")) return <Mail size={12} key={c} />;
    if (c.includes("SMS") || c.includes("WhatsApp")) return <MessageSquare size={12} key={c} />;
    return <BellRing size={12} key={c} />;
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Top Actions & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search subject or msg..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none max-w-[200px]">
            <option value="All">All Categories</option>
            <option value="Staff Announcement">Staff Announcement</option>
            <option value="Leave Notification">Leave Notification</option>
            <option value="HR Notification">HR Notification</option>
            <option value="Meeting Notification">Meeting Notification</option>
            <option value="Document Expiry Alert">Document Expiry Alert</option>
            <option value="Joining/Exit Notification">Joining/Exit Notification</option>
          </select>
        </div>

        <button onClick={openBroadcast} className="flex items-center gap-2 px-6 py-2 bg-primary text-card rounded-md font-bold text-sm shadow-lg shadow-primary/20 hover:bg-yellow-500 transition-all active:scale-95">
          <Send size={16} /> Broadcast Message
        </button>
      </div>

      {/* Inbox List */}
      {messages.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No communications found.</span>
         </div>
      ) : (
        <div className="flex flex-col gap-3">
          {messages.map(m => (
            <div 
              key={m.id} 
              onClick={() => !m.isRead && markAsRead(m.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${m.isRead ? 'bg-card border-border shadow-sm opacity-80 hover:opacity-100' : 'bg-primary/5 border-primary/20 shadow-md ring-1 ring-primary/20'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <div className="flex items-center gap-3">
                   {!m.isRead && <div className="w-2 h-2 rounded-full bg-primary motion-safe:animate-pulse"></div>}
                   <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(m.category)}`}>
                     {m.category}
                   </span>
                   <span className="text-xs font-bold text-muted-foreground">From: {m.sender}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                   <div className="flex gap-1 items-center bg-input px-2 py-1 rounded">
                     {m.channelsUsed.map(c => getChannelIcon(c))}
                   </div>
                   <span>{new Date(m.timestamp).toLocaleString()}</span>
                </div>
              </div>
              
              <h3 className={`text-sm mb-1 ${m.isRead ? 'font-semibold text-foreground' : 'font-black text-foreground'}`}>{m.subject}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
