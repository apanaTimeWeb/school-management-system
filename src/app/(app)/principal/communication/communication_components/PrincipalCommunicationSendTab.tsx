"use client";
import React, { useState } from 'react';
import { Send, Users, Smartphone, Mail, MessageCircle, BellRing, CheckCircle } from 'lucide-react';
import { sendPrincipalNotification } from '../communication_api/PrincipalCommunicationApi';
import { PrincipalSendNotificationPayload } from '../communication_types/PrincipalCommunication.types';
import clsx from 'clsx';

export default function PrincipalCommunicationSendTab() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [targetGroup, setTargetGroup] = useState<'Parents' | 'Teachers' | 'Students' | 'Class/Section'>('Parents');
  const [targetDetails, setTargetDetails] = useState('');
  const [channels, setChannels] = useState<('SMS' | 'Email' | 'WhatsApp' | 'Push')[]>(['Push']);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const toggleChannel = (ch: 'SMS' | 'Email' | 'WhatsApp' | 'Push') => {
    if (channels.includes(ch)) setChannels(channels.filter(c => c !== ch));
    else setChannels([...channels, ch]);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !message || channels.length === 0) return;
    setLoading(true);
    setSuccess(false);

    const payload: PrincipalSendNotificationPayload = {
      targetGroup, targetDetails, channels, subject, message
    };
    
    await sendPrincipalNotification(payload);
    
    setLoading(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setSubject('');
      setMessage('');
      setTargetDetails('');
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-border bg-page/50">
        <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
          <Send className="text-primary" size={20} />
          Broadcast New Message
        </h2>
        <p className="text-[13px] text-text-secondary mt-1">Send multi-channel notifications to students, parents, or staff.</p>
      </div>

      <form onSubmit={handleSend} className="p-6 space-y-6">
        {/* Target Audience */}
        <div className="space-y-3">
          <label className="text-[13px] font-bold text-text-secondary flex items-center gap-2"><Users size={16}/> Target Audience</label>
          <div className="flex flex-wrap gap-3">
            {['Parents', 'Teachers', 'Students', 'Class/Section'].map(tgt => (
              <label 
                key={tgt} 
                className={clsx(
                  "px-4 py-2 rounded-md border text-[13px] font-bold cursor-pointer transition-colors select-none",
                  targetGroup === tgt ? "bg-primary/20 border-primary text-primary" : "bg-page border-border text-text-secondary hover:text-text-primary hover:bg-white/5"
                )}
              >
                <input 
                  type="radio" 
                  name="targetGroup" 
                  value={tgt} 
                  checked={targetGroup === tgt}
                  onChange={(e) => setTargetGroup(e.target.value as any)}
                  className="hidden"
                />
                {tgt}
              </label>
            ))}
          </div>
          {targetGroup === 'Class/Section' && (
            <input 
              type="text" 
              placeholder="E.g., 10-A, 9th Grade..."
              value={targetDetails}
              onChange={(e) => setTargetDetails(e.target.value)}
              className="mt-2 w-full max-w-sm bg-input border border-border rounded-md px-4 py-2 text-[14px] text-text-primary outline-none focus:border-primary transition-colors"
              required
            />
          )}
        </div>

        {/* Communication Channels */}
        <div className="space-y-3">
          <label className="text-[13px] font-bold text-text-secondary">Select Channels</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'SMS', icon: Smartphone, color: 'text-info', bg: 'bg-info/20', border: 'border-info' },
              { id: 'Email', icon: Mail, color: 'text-warning', bg: 'bg-warning/20', border: 'border-warning' },
              { id: 'WhatsApp', icon: MessageCircle, color: 'text-success', bg: 'bg-success/20', border: 'border-success' },
              { id: 'Push', icon: BellRing, color: 'text-primary', bg: 'bg-primary/20', border: 'border-primary' }
            ].map(ch => {
              const Icon = ch.icon;
              const isSelected = channels.includes(ch.id as any);
              return (
                <label 
                  key={ch.id} 
                  className={clsx(
                    "flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all select-none",
                    isSelected ? `${ch.bg} ${ch.border}` : "bg-page border-border hover:bg-white/5"
                  )}
                >
                  <input type="checkbox" className="hidden" checked={isSelected} onChange={() => toggleChannel(ch.id as any)} />
                  <Icon size={24} className={isSelected ? ch.color : "text-text-secondary"} />
                  <span className={clsx("text-[13px] font-bold", isSelected ? ch.color : "text-text-secondary")}>{ch.id}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-border">
          <div>
            <label className="text-[13px] font-bold text-text-secondary block mb-1">Subject / Title</label>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary outline-none focus:border-primary transition-colors"
              placeholder="Enter message subject..."
              required
            />
          </div>
          <div>
            <label className="text-[13px] font-bold text-text-secondary block mb-1">Message Body</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-input border border-border rounded-lg p-3 text-[14px] text-text-primary outline-none focus:border-primary transition-colors min-h-[120px]"
              placeholder="Type your message here..."
              required
            />
            <p className="text-[11px] text-text-secondary mt-1 text-right">{message.length} characters</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          {success ? (
            <div className="flex items-center gap-2 text-success font-bold text-[14px] animate-in fade-in slide-in-from-bottom-2">
              <CheckCircle size={18}/> Messages Sent Successfully!
            </div>
          ) : (
            <div />
          )}
          <button
            type="submit"
            disabled={loading || channels.length === 0 || !subject || !message}
            className="px-8 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white text-[14px] font-bold transition-all disabled:opacity-50 flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            {loading ? "Sending..." : <><Send size={16}/> Send Now</>}
          </button>
        </div>
      </form>
    </div>
  );
}
