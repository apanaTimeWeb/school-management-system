"use client";

import React, { useState } from "react";
import {
  Megaphone,
  Send,
  History,
  Users,
  User,
  GraduationCap,
  MessageCircle,
  MessageSquare,
  Mail,
  Smartphone,
  CheckCircle2,
  Clock,
  BookOpen,
  AlertCircle,
  Bell,
  X,
  Briefcase
} from "lucide-react";

type MessageType = 'Due Reminder' | 'Overdue Reminder' | 'Reservation Alert' | 'Library Announcement' | 'General Notice';
type AudienceType = 'Everyone' | 'All Students' | 'All Teachers' | 'Specific Class' | 'Individual Member';

interface BroadcastLog {
  id: string;
  date: string;
  type: MessageType;
  audience: string;
  message: string;
  channels: string[];
}

const MOCK_HISTORY: BroadcastLog[] = [
  { id: "MSG-101", date: "2023-11-10 09:00 AM", type: "Library Announcement", audience: "Everyone", message: "Library will be closed this Friday for maintenance.", channels: ["In-App", "Email"] },
  { id: "MSG-102", date: "2023-11-09 14:30 PM", type: "Overdue Reminder", audience: "Specific Class (10-A)", message: "Please return your overdue physics books by tomorrow to avoid extra fines.", channels: ["SMS", "In-App"] },
  { id: "MSG-103", date: "2023-11-08 10:15 AM", type: "General Notice", audience: "All Teachers", message: "New reference materials have arrived in the Staff Section.", channels: ["Email", "WhatsApp"] }
];

export default function CommunicationHub() {
  const [activeTab, setActiveTab] = useState<'Compose' | 'History'>('Compose');
  
  // Form State
  const [msgType, setMsgType] = useState<MessageType>('Library Announcement');
  const [audience, setAudience] = useState<AudienceType>('Everyone');
  const [specificTarget, setSpecificTarget] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [channels, setChannels] = useState({
    inApp: true,
    email: false,
    sms: false,
    whatsapp: false
  });

  const [history, setHistory] = useState<BroadcastLog[]>(MOCK_HISTORY);
  
  // Interactive States
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageBody) return;
    
    // Validation for specific targets
    if ((audience === 'Specific Class' || audience === 'Individual Member') && !specificTarget) {
      alert(`Please specify the ${audience === 'Specific Class' ? 'Class Name' : 'Member ID/Name'}.`);
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      const activeChannels = [];
      if (channels.inApp) activeChannels.push("In-App");
      if (channels.email) activeChannels.push("Email");
      if (channels.sms) activeChannels.push("SMS");
      if (channels.whatsapp) activeChannels.push("WhatsApp");

      const finalAudience = audience === 'Specific Class' || audience === 'Individual Member' 
        ? `${audience} (${specificTarget})` 
        : audience;

      const newLog: BroadcastLog = {
        id: `MSG-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toLocaleString(),
        type: msgType,
        audience: finalAudience,
        message: messageBody,
        channels: activeChannels
      };

      setHistory([newLog, ...history]);
      setIsSending(false);
      setShowSuccess(true);
      
      // Reset Form
      setMessageBody("");
      setSpecificTarget("");
    }, 1500);
  };

  const getTypeIcon = (type: MessageType) => {
    switch(type) {
      case 'Library Announcement': return <Megaphone className="w-5 h-5 text-fuchsia-500" />;
      case 'General Notice': return <Bell className="w-5 h-5 text-indigo-500" />;
      case 'Due Reminder': return <Clock className="w-5 h-5 text-emerald-500" />;
      case 'Overdue Reminder': return <AlertCircle className="w-5 h-5 text-rose-500" />;
      case 'Reservation Alert': return <BookOpen className="w-5 h-5 text-amber-500" />;
    }
  };

  const getAudienceIcon = (aud: AudienceType) => {
    switch(aud) {
      case 'Everyone': return <Users className="w-5 h-5 text-blue-500" />;
      case 'All Students': return <GraduationCap className="w-5 h-5 text-cyan-500" />;
      case 'All Teachers': return <Briefcase className="w-5 h-5 text-slate-500" />;
      case 'Specific Class': return <Users className="w-5 h-5 text-teal-500" />;
      case 'Individual Member': return <User className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Megaphone className="w-8 h-8 text-rose-500" />
            Library Communication Hub
          </h1>
          <p className="text-gray-500 mt-1">Broadcast announcements, notices, and reminders directly to members.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('Compose')}
          className={`flex-1 md:flex-none px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'Compose' ? 'bg-rose-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
        >
          <Send className="w-5 h-5" /> Compose Message
        </button>
        <button 
          onClick={() => setActiveTab('History')}
          className={`flex-1 md:flex-none px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'History' ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
        >
          <History className="w-5 h-5" /> Broadcast History
        </button>
      </div>

      {activeTab === 'Compose' && (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl animate-in fade-in duration-300">
          
          <div className="bg-rose-50/50 p-6 border-b border-rose-100 flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-rose-500">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900">New Broadcast</h2>
              <p className="text-sm text-gray-500">Draft your message and select target audience.</p>
            </div>
          </div>

          <form onSubmit={handleSend} className="p-6 md:p-8 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Type Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Message Type *</label>
                <div className="space-y-2">
                  {(['Library Announcement', 'General Notice', 'Due Reminder', 'Overdue Reminder', 'Reservation Alert'] as MessageType[]).map(type => (
                    <label key={type} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${msgType === type ? 'border-rose-500 bg-rose-50' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}>
                      <input type="radio" className="hidden" checked={msgType === type} onChange={() => setMsgType(type)} />
                      {getTypeIcon(type)}
                      <span className={`font-bold text-sm ${msgType === type ? 'text-rose-700' : 'text-gray-700'}`}>{type}</span>
                      {msgType === type && <CheckCircle2 className="w-5 h-5 text-rose-500 ml-auto" />}
                    </label>
                  ))}
                </div>
              </div>

              {/* Audience Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Target Audience *</label>
                <div className="space-y-2">
                  {(['Everyone', 'All Students', 'All Teachers', 'Specific Class', 'Individual Member'] as AudienceType[]).map(aud => (
                    <label key={aud} className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${audience === aud ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}>
                      <input type="radio" className="hidden" checked={audience === aud} onChange={() => { setAudience(aud); setSpecificTarget(""); }} />
                      {getAudienceIcon(aud)}
                      <span className={`font-bold text-sm ${audience === aud ? 'text-blue-700' : 'text-gray-700'}`}>{aud}</span>
                      {audience === aud && <CheckCircle2 className="w-5 h-5 text-blue-500 ml-auto" />}
                    </label>
                  ))}
                </div>
                
                {/* Specific Target Input */}
                {(audience === 'Specific Class' || audience === 'Individual Member') && (
                  <div className="mt-3 animate-in slide-in-from-top-2">
                    <input 
                      type="text" 
                      required
                      placeholder={audience === 'Specific Class' ? 'Enter Class Name (e.g. 10-A)' : 'Enter Member ID or Name'}
                      value={specificTarget}
                      onChange={(e) => setSpecificTarget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50/50 text-sm font-medium"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Message Body */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center justify-between">
                <span>Message Content *</span>
                <span className="text-xs text-gray-400 font-normal">{messageBody.length} characters</span>
              </label>
              <textarea 
                required
                rows={5}
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                placeholder="Draft your library notification here..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none text-sm text-gray-800"
              ></textarea>
            </div>

            {/* Delivery Channels */}
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-3">Delivery Channels *</label>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 
                 <label className={`cursor-pointer flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${channels.inApp ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                   <input type="checkbox" className="hidden" checked={channels.inApp} onChange={() => setChannels({...channels, inApp: !channels.inApp})} />
                   <Smartphone className="w-8 h-8" />
                   <span className="font-bold text-xs uppercase tracking-wider">In-App Notification</span>
                 </label>

                 <label className={`cursor-pointer flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${channels.sms ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                   <input type="checkbox" className="hidden" checked={channels.sms} onChange={() => setChannels({...channels, sms: !channels.sms})} />
                   <MessageSquare className="w-8 h-8" />
                   <span className="font-bold text-xs uppercase tracking-wider">SMS Blast</span>
                 </label>

                 <label className={`cursor-pointer flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${channels.email ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                   <input type="checkbox" className="hidden" checked={channels.email} onChange={() => setChannels({...channels, email: !channels.email})} />
                   <Mail className="w-8 h-8" />
                   <span className="font-bold text-xs uppercase tracking-wider">Email Send</span>
                 </label>

                 <label className={`cursor-pointer flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${channels.whatsapp ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-400 hover:bg-gray-50'}`}>
                   <input type="checkbox" className="hidden" checked={channels.whatsapp} onChange={() => setChannels({...channels, whatsapp: !channels.whatsapp})} />
                   <MessageCircle className="w-8 h-8" />
                   <span className="font-bold text-xs uppercase tracking-wider">WhatsApp Msg</span>
                 </label>

               </div>
               {!(channels.inApp || channels.sms || channels.email || channels.whatsapp) && (
                 <p className="text-xs text-rose-500 mt-2 font-medium flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> Please select at least one delivery channel.</p>
               )}
            </div>

            {/* Action */}
            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <button 
                type="submit" 
                disabled={isSending || !(channels.inApp || channels.sms || channels.email || channels.whatsapp)}
                className="w-full md:w-auto px-10 py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2 text-lg"
              >
                {isSending ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <Send className="w-6 h-6" /> 
                )}
                {isSending ? "Broadcasting..." : "Broadcast Message Now"}
              </button>
            </div>

          </form>
        </div>
      )}

      {/* Broadcast History Tab */}
      {activeTab === 'History' && (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in duration-300">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <h2 className="font-bold text-gray-800 text-lg flex items-center gap-2"><History className="w-5 h-5 text-gray-500" /> Broadcast Logs</h2>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">{history.length} Records</span>
          </div>
          
          <div className="divide-y divide-gray-100">
            {history.map(log => (
              <div key={log.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-6">
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border bg-white shadow-sm flex items-center gap-1.5">
                      {getTypeIcon(log.type as MessageType)} {log.type}
                    </span>
                    <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">{log.date}</span>
                  </div>
                  <p className="text-gray-800 font-medium mb-3">"{log.message}"</p>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-blue-500"/> Audience: {log.audience}</span>
                  </div>
                </div>

                <div className="w-full md:w-48 shrink-0 bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">Channels Delivered</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {log.channels.map(ch => (
                      <span key={ch} className={`px-2 py-1 rounded text-[10px] font-bold border ${
                        ch === 'WhatsApp' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        ch === 'SMS' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        ch === 'Email' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                        'bg-indigo-50 text-indigo-700 border-indigo-200'
                      }`}>
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-gray-900 p-8 text-center text-white relative">
               <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                 <X className="w-6 h-6" />
               </button>
               <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                 <CheckCircle2 className="w-12 h-12 text-white animate-in zoom-in duration-500" />
               </div>
               <h2 className="text-2xl font-black mb-1">Message Broadcasted</h2>
               <p className="text-gray-400 text-sm">Your alert is being sent to the selected audience.</p>
            </div>
            <div className="p-6 bg-white flex gap-3">
               <button onClick={() => {setShowSuccess(false); setActiveTab('History');}} className="flex-1 py-3.5 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-colors border border-gray-200">
                 View Logs
               </button>
               <button onClick={() => setShowSuccess(false)} className="flex-1 py-3.5 bg-rose-50 text-rose-600 font-bold rounded-xl hover:bg-rose-100 transition-colors border border-rose-200">
                 Send Another
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
