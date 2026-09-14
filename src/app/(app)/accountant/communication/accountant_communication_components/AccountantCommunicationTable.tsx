"use client";
import React from "react";
import { CheckCircle2, XCircle, Clock, Mail, MessageSquare, Smartphone } from "lucide-react";
import { MOCK_COMMUNICATIONS } from "../accountant_communication_utils/AccountantCommunicationConstants";
import { useAccountantCommunicationStore } from "../accountant_communication_store/useAccountantCommunicationStore";
import clsx from "clsx";

export default function AccountantCommunicationTable() {
  const { searchQuery, statusFilter } = useAccountantCommunicationStore();

  const filteredData = MOCK_COMMUNICATIONS.filter(msg => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = msg.recipient.toLowerCase().includes(searchLower) || 
                          msg.type.toLowerCase().includes(searchLower);
    const matchesFilter = statusFilter === 'All' || msg.channel === statusFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getChannelIcon = (channel: string) => {
    switch(channel) {
      case 'SMS': return <MessageSquare size={14} className="text-success" />;
      case 'Email': return <Mail size={14} className="text-warning" />;
      case 'WhatsApp': return <Smartphone size={14} className="text-info" />;
      default: return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Sent': return <CheckCircle2 size={14} className="text-success" />;
      case 'Failed': return <XCircle size={14} className="text-danger" />;
      case 'Pending': return <Clock size={14} className="text-warning" />;
      default: return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-40">Timestamp</th>
              <th className="p-4 w-48">Recipient(s)</th>
              <th className="p-4 w-40">Message Type</th>
              <th className="p-4">Content Preview</th>
              <th className="p-4 w-28 text-center">Channel</th>
              <th className="p-4 w-28 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((msg, index) => (
              <tr 
                key={msg.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-xs font-semibold text-text-secondary">
                  {msg.timestamp}
                  <div className="text-[10px] text-text-secondary/70 mt-0.5">By: {msg.sentBy}</div>
                </td>
                <td className="p-4 text-sm font-bold text-text-primary">
                  {msg.recipient}
                </td>
                <td className="p-4 text-xs font-bold text-text-primary">
                  {msg.type}
                </td>
                <td className="p-4 text-xs text-text-secondary italic max-w-xs truncate" title={msg.messagePreview}>
                  "{msg.messagePreview}"
                </td>
                <td className="p-4 text-center">
                  <span className="flex items-center justify-center gap-1.5 text-xs font-bold text-text-primary">
                    {getChannelIcon(msg.channel)} {msg.channel}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx(
                    "flex items-center justify-center gap-1.5 text-xs font-bold",
                    msg.status === 'Sent' ? "text-success" : msg.status === 'Failed' ? "text-danger" : "text-warning"
                  )}>
                    {getStatusIcon(msg.status)} {msg.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary text-sm">
                  No communication logs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-border flex justify-between items-center text-xs text-text-secondary bg-bg-page shrink-0">
        <span>Showing {filteredData.length} records</span>
      </div>
    </div>
  );
}
