"use client";

import React, { useState } from "react";
import {
  BellRing,
  Mail,
  MessageSquare,
  MessageCircle,
  Smartphone,
  Save,
  CheckCircle2,
  History,
  Send,
  AlertTriangle,
  Search,
  X
} from "lucide-react";

type Channel = 'In-App' | 'Email' | 'SMS' | 'WhatsApp';

interface NotificationRule {
  id: string;
  eventName: string;
  description: string;
  channels: {
    inApp: boolean;
    email: boolean;
    sms: boolean;
    whatsapp: boolean;
  };
}

interface NotificationLog {
  id: string;
  date: string;
  recipient: string;
  event: string;
  channel: Channel;
  status: 'Sent' | 'Failed';
}

const INITIAL_RULES: NotificationRule[] = [
  { id: "EV-1", eventName: "Book Issued", description: "When a book is successfully checked out.", channels: { inApp: true, email: true, sms: false, whatsapp: false } },
  { id: "EV-2", eventName: "Book Due Soon", description: "1 day before the due date.", channels: { inApp: true, email: true, sms: false, whatsapp: true } },
  { id: "EV-3", eventName: "Book Overdue", description: "When a book crosses the return deadline.", channels: { inApp: true, email: true, sms: true, whatsapp: true } },
  { id: "EV-4", eventName: "Book Returned", description: "Upon successful return of a book.", channels: { inApp: true, email: false, sms: false, whatsapp: false } },
  { id: "EV-5", eventName: "Reservation Available", description: "When a reserved book is ready for pickup.", channels: { inApp: true, email: true, sms: true, whatsapp: true } },
  { id: "EV-6", eventName: "Reservation Expiring", description: "Warning before hold period ends.", channels: { inApp: true, email: false, sms: false, whatsapp: true } },
  { id: "EV-7", eventName: "Fine Generated", description: "When late fine or damage fine is applied.", channels: { inApp: true, email: true, sms: true, whatsapp: false } },
  { id: "EV-8", eventName: "Fine Reminder", description: "Periodic reminder for unpaid dues.", channels: { inApp: true, email: true, sms: true, whatsapp: true } },
  { id: "EV-9", eventName: "Lost/Damaged Notice", description: "Official notice for replacement or cost.", channels: { inApp: true, email: true, sms: true, whatsapp: false } }
];

const MOCK_LOGS: NotificationLog[] = [
  { id: "LOG-991", date: "2023-11-05 10:30 AM", recipient: "Rahul Sharma", event: "Book Overdue", channel: "WhatsApp", status: "Sent" },
  { id: "LOG-992", date: "2023-11-05 10:30 AM", recipient: "Rahul Sharma", event: "Book Overdue", channel: "SMS", status: "Sent" },
  { id: "LOG-993", date: "2023-11-05 09:15 AM", recipient: "Neha Gupta", event: "Reservation Available", channel: "Email", status: "Sent" },
  { id: "LOG-994", date: "2023-11-04 14:20 PM", recipient: "Amit Patel", event: "Fine Reminder", channel: "SMS", status: "Failed" },
];

export default function NotificationsManager() {
  const [activeTab, setActiveTab] = useState<'Config' | 'Logs' | 'Manual'>('Config');
  const [rules, setRules] = useState<NotificationRule[]>(INITIAL_RULES);
  const [logs, setLogs] = useState<NotificationLog[]>(MOCK_LOGS);
  
  // States for interactive modals/toasts
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Manual Send State
  const [manualRecipient, setManualRecipient] = useState("");
  const [manualEvent, setManualEvent] = useState("Fine Reminder");
  const [manualChannel, setManualChannel] = useState<Channel>('WhatsApp');

  const toggleChannel = (ruleId: string, channelKey: keyof NotificationRule['channels']) => {
    setRules(rules.map(rule => 
      rule.id === ruleId 
        ? { ...rule, channels: { ...rule.channels, [channelKey]: !rule.channels[channelKey] } } 
        : rule
    ));
  };

  const handleSaveConfig = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
    }, 1000);
  };

  const handleManualSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualRecipient) return;

    const newLog: NotificationLog = {
      id: `LOG-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleString(),
      recipient: manualRecipient,
      event: manualEvent,
      channel: manualChannel,
      status: 'Sent'
    };
    
    setLogs([newLog, ...logs]);
    setManualRecipient("");
    alert(`Manual notification sent to ${manualRecipient} via ${manualChannel}!`);
    setActiveTab('Logs');
  };

  const ChannelIcon = ({ channel, active }: { channel: keyof NotificationRule['channels'], active: boolean }) => {
    const baseClass = `w-5 h-5 transition-colors ${active ? '' : 'text-gray-300'}`;
    switch(channel) {
      case 'inApp': return <Smartphone className={`${baseClass} ${active ? 'text-indigo-500' : ''}`} />;
      case 'email': return <Mail className={`${baseClass} ${active ? 'text-rose-500' : ''}`} />;
      case 'sms': return <MessageSquare className={`${baseClass} ${active ? 'text-blue-500' : ''}`} />;
      case 'whatsapp': return <MessageCircle className={`${baseClass} ${active ? 'text-emerald-500' : ''}`} />;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <BellRing className="w-8 h-8 text-amber-500" />
          Automated Notifications
        </h1>
        <p className="text-gray-500 mt-1">Configure communication channels and view system alerts.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('Config')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 whitespace-nowrap ${activeTab === 'Config' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
        >
          <BellRing className="w-5 h-5" /> Auto-Rules Config
        </button>
        <button 
          onClick={() => setActiveTab('Manual')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 whitespace-nowrap ${activeTab === 'Manual' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
        >
          <Send className="w-5 h-5" /> Send Manual Alert
        </button>
        <button 
          onClick={() => setActiveTab('Logs')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 whitespace-nowrap ${activeTab === 'Logs' ? 'bg-gray-800 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
        >
          <History className="w-5 h-5" /> Delivery Logs
        </button>
      </div>

      {/* SUCCESS TOAST */}
      {showSuccessToast && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-6 h-6" />
          <div className="font-bold">Notification configuration saved!</div>
        </div>
      )}

      <div className="w-full">
        
        {/* CONFIGURATION TAB */}
        {activeTab === 'Config' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-gray-100 bg-amber-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-bold text-amber-900 text-lg">System Trigger Rules</h2>
                <p className="text-xs text-amber-700 font-medium">Select which channels should fire for each library event.</p>
              </div>
              <button 
                onClick={handleSaveConfig}
                disabled={isSaving}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSaving ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : <Save className="w-5 h-5" />}
                {isSaving ? 'Saving...' : 'Save Configuration'}
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                    <th className="py-4 px-6 font-bold w-1/3">Event Trigger</th>
                    <th className="py-4 px-6 font-bold text-center border-l border-gray-100"><div className="flex flex-col items-center gap-1"><Smartphone className="w-4 h-4 text-indigo-500"/> In-App</div></th>
                    <th className="py-4 px-6 font-bold text-center border-l border-gray-100"><div className="flex flex-col items-center gap-1"><Mail className="w-4 h-4 text-rose-500"/> Email</div></th>
                    <th className="py-4 px-6 font-bold text-center border-l border-gray-100"><div className="flex flex-col items-center gap-1"><MessageSquare className="w-4 h-4 text-blue-500"/> SMS</div></th>
                    <th className="py-4 px-6 font-bold text-center border-l border-gray-100"><div className="flex flex-col items-center gap-1"><MessageCircle className="w-4 h-4 text-emerald-500"/> WhatsApp</div></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {rules.map((rule) => (
                    <tr key={rule.id} className="hover:bg-amber-50/20 transition-colors">
                      <td className="py-4 px-6">
                        <p className="font-bold text-gray-800">{rule.eventName}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{rule.description}</p>
                      </td>
                      
                      {/* Checkboxes mapping */}
                      {(['inApp', 'email', 'sms', 'whatsapp'] as Array<keyof NotificationRule['channels']>).map((channelKey) => (
                        <td key={channelKey} className="py-4 px-6 text-center border-l border-gray-50">
                          <label className="relative inline-flex items-center cursor-pointer group">
                            <input 
                              type="checkbox" 
                              className="sr-only peer" 
                              checked={rule.channels[channelKey]} 
                              onChange={() => toggleChannel(rule.id, channelKey)} 
                            />
                            <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                              rule.channels[channelKey] ? (
                                channelKey === 'inApp' ? 'bg-indigo-500' :
                                channelKey === 'email' ? 'bg-rose-500' :
                                channelKey === 'sms' ? 'bg-blue-500' : 'bg-emerald-500'
                              ) : ''
                            }`}></div>
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* MANUAL SEND TAB */}
        {activeTab === 'Manual' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-2xl">
            <div className="p-6 bg-amber-500 text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Send className="w-5 h-5" /> Push Manual Notification
              </h2>
              <p className="text-amber-100 text-sm mt-1">Force send a reminder to a specific member immediately.</p>
            </div>
            
            <form onSubmit={handleManualSend} className="p-6 md:p-8 space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Search Recipient *</label>
                <div className="relative">
                  <input required type="text" value={manualRecipient} onChange={(e) => setManualRecipient(e.target.value)} placeholder="Type name or member ID..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Notification Subject / Event</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Fine Reminder', 'Book Overdue', 'Reservation Available', 'Custom Notice'].map(evt => (
                    <label key={evt} className={`cursor-pointer p-3 border-2 rounded-xl text-center font-bold text-sm transition-all ${manualEvent === evt ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                      <input type="radio" className="hidden" checked={manualEvent === evt} onChange={() => setManualEvent(evt)} />
                      {evt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Delivery Channel</label>
                <div className="flex flex-wrap gap-3">
                  {(['WhatsApp', 'SMS', 'Email', 'In-App'] as Channel[]).map(ch => {
                     let colorClass = 'border-gray-200 text-gray-500';
                     if (manualChannel === ch) {
                        if (ch === 'WhatsApp') colorClass = 'border-emerald-500 bg-emerald-50 text-emerald-700';
                        if (ch === 'SMS') colorClass = 'border-blue-500 bg-blue-50 text-blue-700';
                        if (ch === 'Email') colorClass = 'border-rose-500 bg-rose-50 text-rose-700';
                        if (ch === 'In-App') colorClass = 'border-indigo-500 bg-indigo-50 text-indigo-700';
                     }
                     return (
                      <label key={ch} className={`cursor-pointer px-4 py-2 border-2 rounded-xl flex-1 text-center font-bold text-sm transition-all flex items-center justify-center gap-2 ${colorClass}`}>
                        <input type="radio" className="hidden" checked={manualChannel === ch} onChange={() => setManualChannel(ch)} />
                        {ch}
                      </label>
                     );
                  })}
                </div>
              </div>

              {manualEvent === 'Custom Notice' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Custom Message</label>
                  <textarea required rows={3} placeholder="Type your message here..." className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none text-sm"></textarea>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100">
                <button type="submit" className="w-full py-3.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors shadow-md flex items-center justify-center gap-2 text-lg">
                  <Send className="w-5 h-5" /> Dispatch Alert Now
                </button>
              </div>

            </form>
          </div>
        )}


        {/* LOGS TAB */}
        {activeTab === 'Logs' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 flex items-center gap-2"><History className="w-5 h-5 text-gray-500" /> Recent Delivery Logs</h2>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{logs.length} Records</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                    <th className="py-4 px-6 font-bold">Date & Time</th>
                    <th className="py-4 px-6 font-bold">Recipient</th>
                    <th className="py-4 px-6 font-bold">Event Trigger</th>
                    <th className="py-4 px-6 font-bold">Channel</th>
                    <th className="py-4 px-6 font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {logs.map(log => (
                    <tr key={log.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-mono text-xs text-gray-600">{log.date}</td>
                      <td className="py-4 px-6 font-bold text-gray-800">{log.recipient}</td>
                      <td className="py-4 px-6 text-sm text-gray-700">{log.event}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                          log.channel === 'WhatsApp' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                          log.channel === 'SMS' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          log.channel === 'Email' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                          'bg-indigo-50 text-indigo-700 border-indigo-200'
                        }`}>
                          {log.channel}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        {log.status === 'Sent' ? (
                          <span className="text-emerald-500 font-bold text-sm flex items-center justify-end gap-1"><CheckCircle2 className="w-4 h-4"/> Sent</span>
                        ) : (
                          <span className="text-rose-500 font-bold text-sm flex items-center justify-end gap-1"><AlertTriangle className="w-4 h-4"/> Failed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
