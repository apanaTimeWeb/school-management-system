"use client";

import React, { useState } from 'react';
import { 
  Mail, ChevronDown, CheckCircle2, Send, Paperclip, 
  Search, Info, ArrowLeft, Building2, UserCircle, FileText
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const conversationsData = {
  'c1': [
    { 
      id: 1, type: 'School', sender: 'School Administration', avatar: <Building2 size={24}/>, 
      lastMsg: 'Important: Revised bus routes for next week.', time: '10:30 AM', unread: 1, allowReply: false,
      messages: [
        { id: 101, text: 'Dear Parents, please find the revised bus routes attached.', time: '10:30 AM', isMe: false, attachment: 'Bus_Routes_v2.pdf' }
      ]
    },
    { 
      id: 2, type: 'Class Teacher', sender: 'Mrs. Sharma (Class Teacher)', avatar: <UserCircle size={24}/>, 
      lastMsg: 'Aarav is doing great in math.', time: 'Yesterday', unread: 0, allowReply: true,
      messages: [
        { id: 102, text: 'Hello, I wanted to discuss Aarav\'s recent performance.', time: '09:00 AM', isMe: false },
        { id: 103, text: 'Yes, please tell me. Is he paying attention?', time: '09:15 AM', isMe: true },
        { id: 104, text: 'Aarav is doing great in math, but needs focus in history.', time: 'Yesterday', isMe: false },
      ]
    },
    { 
      id: 3, type: 'Teacher', sender: 'Mr. Verma (Sports)', avatar: <UserCircle size={24}/>, 
      lastMsg: 'Selection trials are tomorrow.', time: 'Monday', unread: 0, allowReply: true,
      messages: [
        { id: 105, text: 'Selection trials for football are tomorrow. Please ensure Aarav brings his kit.', time: 'Monday', isMe: false }
      ]
    }
  ],
  'c2': [
    { 
      id: 4, type: 'School', sender: 'School Administration', avatar: <Building2 size={24}/>, 
      lastMsg: 'Fee structure update for Class 8.', time: '2 Days ago', unread: 0, allowReply: false,
      messages: [
        { id: 106, text: 'Dear Parents, the fee structure for Q4 has been updated in the portal.', time: '2 Days ago', isMe: false }
      ]
    },
    { 
      id: 5, type: 'Class Teacher', sender: 'Mr. Gupta (Class Teacher)', avatar: <UserCircle size={24}/>, 
      lastMsg: 'Thank you for attending the PTM.', time: '12:00 PM', unread: 2, allowReply: true,
      messages: [
        { id: 107, text: 'Dear Parent, thank you for attending the PTM. Attached is Riya\'s detailed progress report.', time: '12:00 PM', isMe: false, attachment: 'Riya_Report_Card.pdf' },
        { id: 108, text: 'Please sign it and send it back by Friday.', time: '12:01 PM', isMe: false }
      ]
    }
  ]
};

export default function MessagesPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const conversations = conversationsData[selectedChildId as keyof typeof conversationsData];
  
  const [activeConvId, setActiveConvId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  // Handle switching child
  React.useEffect(() => {
    setActiveConvId(null); // Reset active chat
  }, [selectedChildId]);

  const activeConv = conversations.find(c => c.id === activeConvId);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !activeConv) return;
    
    // In a real app, this would append to state/call API
    alert(`Sent to ${activeConv.sender}: ${replyText}`);
    setReplyText('');
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 h-[calc(100vh-80px)] flex flex-col">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm flex-shrink-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Messages</h1>
          <p className="text-text-secondary text-sm mt-1">Communicate with teachers and view school broadcasts.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 bg-white border border-border rounded-2xl shadow-sm overflow-hidden flex min-h-0">
        
        {/* Left Panel: Conversation List */}
        <div className={clsx(
          "w-full lg:w-[350px] border-r border-border flex flex-col transition-all",
          activeConvId !== null ? "hidden lg:flex" : "flex"
        )}>
           
           {/* Search Bar */}
           <div className="p-4 border-b border-border bg-page/30">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
                <input 
                  type="text" 
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 ring-indigo-500 transition-all"
                />
              </div>
           </div>

           {/* List */}
           <div className="flex-1 overflow-y-auto custom-scrollbar">
             {conversations.map((conv) => (
               <button 
                 key={conv.id}
                 onClick={() => {
                   setActiveConvId(conv.id);
                   // In real app, call API to mark as read here
                   conv.unread = 0; 
                 }}
                 className={clsx(
                   "w-full text-left p-4 border-b border-border flex items-start gap-4 transition-colors relative overflow-hidden",
                   activeConvId === conv.id ? "bg-indigo-50" : "hover:bg-page/50 bg-white"
                 )}
               >
                 {activeConvId === conv.id && <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>}
                 
                 <div className={clsx(
                   "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-sm",
                   conv.type === 'School' ? "bg-indigo-500" : "bg-emerald-500"
                 )}>
                   {conv.avatar}
                 </div>
                 
                 <div className="flex-1 min-w-0">
                   <div className="flex justify-between items-baseline mb-1">
                     <h4 className={clsx("text-sm truncate pr-2", conv.unread > 0 ? "font-extrabold text-text-primary" : "font-bold text-text-secondary")}>
                       {conv.sender}
                     </h4>
                     <span className={clsx("text-[10px] whitespace-nowrap", conv.unread > 0 ? "font-bold text-indigo-600" : "text-text-tertiary")}>
                       {conv.time}
                     </span>
                   </div>
                   
                   <p className={clsx("text-xs truncate", conv.unread > 0 ? "font-bold text-text-primary" : "text-text-secondary")}>
                     {conv.lastMsg}
                   </p>
                 </div>
                 
                 {conv.unread > 0 && (
                   <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 mt-1">
                     {conv.unread}
                   </div>
                 )}
               </button>
             ))}
           </div>
        </div>

        {/* Right Panel: Chat Area */}
        <div className={clsx(
          "flex-1 flex flex-col bg-page/30",
          activeConvId === null ? "hidden lg:flex" : "flex"
        )}>
          
          {activeConvId === null ? (
            
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
               <div className="w-20 h-20 bg-white border border-border rounded-full flex items-center justify-center mb-4 text-text-tertiary shadow-sm">
                 <Mail size={32} />
               </div>
               <h2 className="text-xl font-bold text-text-primary mb-2">Your Messages</h2>
               <p className="text-sm text-text-secondary max-w-sm">Select a conversation from the list to view message history or communicate with teachers.</p>
            </div>
            
          ) : (
            
            <>
              {/* Chat Header */}
              <div className="px-6 py-4 bg-white border-b border-border flex items-center gap-4 shadow-sm z-10">
                 <button 
                   onClick={() => setActiveConvId(null)}
                   className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-page text-text-secondary"
                 >
                   <ArrowLeft size={20} />
                 </button>
                 
                 <div className={clsx(
                   "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white",
                   activeConv!.type === 'School' ? "bg-indigo-500" : "bg-emerald-500"
                 )}>
                   {activeConv!.avatar}
                 </div>
                 
                 <div>
                   <h3 className="font-extrabold text-text-primary leading-tight">{activeConv!.sender}</h3>
                   <span className="text-[10px] font-bold uppercase tracking-wider text-text-tertiary bg-page px-2 py-0.5 rounded-full mt-1 inline-block border border-border">
                     {activeConv!.type} Channel
                   </span>
                 </div>
              </div>

              {/* Chat History */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar flex flex-col">
                 
                 <div className="text-center">
                   <span className="bg-white border border-border px-3 py-1 rounded-full text-xs font-bold text-text-tertiary shadow-sm">
                     Conversation Started
                   </span>
                 </div>

                 {activeConv!.messages.map((msg) => (
                   <div key={msg.id} className={clsx("flex flex-col max-w-[80%] animate-[fadeIn_0.2s_ease-out]", msg.isMe ? "self-end items-end" : "self-start items-start")}>
                     
                     <div className={clsx(
                       "px-4 py-3 rounded-2xl shadow-sm text-sm relative group",
                       msg.isMe 
                        ? "bg-indigo-600 text-white rounded-tr-sm" 
                        : "bg-white border border-border text-text-primary rounded-tl-sm"
                     )}>
                        <p>{msg.text}</p>
                        
                        {msg.attachment && (
                          <div className={clsx(
                            "mt-3 p-2 rounded-xl flex items-center gap-3 border transition-colors cursor-pointer",
                            msg.isMe ? "bg-indigo-700/50 border-indigo-500 hover:bg-indigo-700" : "bg-page border-border hover:border-indigo-300"
                          )}>
                             <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center", msg.isMe ? "bg-indigo-500 text-white" : "bg-indigo-100 text-indigo-600")}>
                               <FileText size={16}/>
                             </div>
                             <span className={clsx("text-xs font-bold truncate max-w-[150px]", msg.isMe ? "text-indigo-100" : "text-text-secondary")}>
                               {msg.attachment}
                             </span>
                          </div>
                        )}
                     </div>
                     
                     <span className="text-[10px] font-bold text-text-tertiary mt-1 px-1">
                       {msg.time} {msg.isMe && <CheckCircle2 size={10} className="inline ml-1 text-indigo-500"/>}
                     </span>
                     
                   </div>
                 ))}
                 
              </div>

              {/* Input Area / Constraints */}
              <div className="p-4 bg-white border-t border-border z-10">
                 {!activeConv!.allowReply ? (
                   <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 flex items-center justify-center gap-2 text-orange-700 text-xs font-bold">
                     <Info size={16} className="text-orange-500"/> This is a broadcast channel. Replies are not allowed.
                   </div>
                 ) : (
                   <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                     <button type="button" className="p-3 text-text-tertiary hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
                       <Paperclip size={20} />
                     </button>
                     <input 
                       type="text" 
                       value={replyText}
                       onChange={(e) => setReplyText(e.target.value)}
                       placeholder="Type your message..."
                       className="flex-1 bg-page border border-border px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 ring-indigo-500 transition-all"
                     />
                     <button 
                       type="submit"
                       disabled={!replyText.trim()}
                       className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:hover:bg-indigo-600 flex items-center justify-center shadow-md"
                     >
                       <Send size={18} className={clsx(replyText.trim() && "animate-pulse")} />
                     </button>
                   </form>
                 )}
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
