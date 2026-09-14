"use client";

import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Smartphone, Bell, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function SendCommunication() {
  const [channel, setChannel] = useState('sms');
  const [audienceType, setAudienceType] = useState('class');
  const [isSending, setIsSending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Message Sent Successfully!
        </div>
      )}

      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 mb-6">Omnichannel Broadcast System</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Configuration */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Channel Selection */}
            <div>
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 block">1. Select Channel</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'sms', label: 'SMS', icon: MessageSquare, color: 'text-info', bg: 'bg-info/10', border: 'border-info' },
                  { id: 'email', label: 'Email', icon: Mail, color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger' },
                  { id: 'whatsapp', label: 'WhatsApp', icon: Smartphone, color: 'text-success', bg: 'bg-success/10', border: 'border-success' },
                  { id: 'push', label: 'Push App', icon: Bell, color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary' },
                ].map(c => (
                  <button 
                    key={c.id} 
                    onClick={() => setChannel(c.id)}
                    className={clsx(
                      "flex flex-col items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all",
                      channel === c.id ? `${c.bg} ${c.border} ${c.color}` : "border-border bg-bg-page text-text-secondary hover:border-primary/30"
                    )}
                  >
                    <c.icon size={24} className={channel === c.id ? c.color : "text-text-secondary"} />
                    <span className="text-xs font-bold">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Audience Selection */}
            <div>
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 block">2. Select Target Audience</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {['class', 'section', 'student', 'parent', 'staff'].map(type => (
                  <button 
                    key={type}
                    onClick={() => setAudienceType(type)}
                    className={clsx("px-4 py-1.5 rounded-full text-xs font-bold transition-all capitalize", audienceType === type ? "bg-primary text-white" : "bg-bg-page border border-border text-text-secondary hover:bg-card")}
                  >
                    {type}-wise
                  </button>
                ))}
              </div>
              
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-3">
                {audienceType === 'class' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-text-secondary">Select Classes</label>
                    <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" multiple size={3}>
                      <option>Class 9</option>
                      <option>Class 10</option>
                      <option>Class 11</option>
                    </select>
                  </div>
                )}
                {audienceType === 'section' && (
                  <div className="flex gap-4">
                    <select className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                      <option>Class 10</option>
                    </select>
                    <select className="flex-1 bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                      <option>Section A</option>
                    </select>
                  </div>
                )}
                {audienceType === 'student' && (
                  <input type="text" placeholder="Search Student Name or ID..." className="w-full bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
                )}
                {(audienceType === 'parent' || audienceType === 'staff') && (
                  <p className="text-sm font-semibold text-primary p-2 bg-primary/10 rounded">Broadcast will be sent to all active {audienceType}s.</p>
                )}
              </div>
            </div>

          </div>

          {/* Right Column - Message Composer */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <label className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 block">3. Compose Message</label>
              
              <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-col gap-4">
                {channel === 'email' && (
                  <input type="text" placeholder="Subject Line..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold" />
                )}
                
                <textarea 
                  rows={6} 
                  placeholder="Type your message here... Use {name} for dynamic variables." 
                  className="bg-bg-input border border-border rounded-md px-3 py-3 text-sm outline-none focus:border-primary resize-none"
                ></textarea>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-semibold text-text-secondary">Characters: 145 / 160 (1 SMS)</span>
                  <button 
                    onClick={handleSend} 
                    disabled={isSending}
                    className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <><span className="animate-spin border-2 border-white/30 border-t-white rounded-full w-4 h-4"></span> Sending...</>
                    ) : (
                      <><Send size={16}/> Send Broadcast</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
