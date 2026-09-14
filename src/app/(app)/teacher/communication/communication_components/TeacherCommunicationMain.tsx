"use client";
import React, { useState } from 'react';
import { MessageSquare, Users, Bell, FileText, CalendarCheck, Megaphone, Send, Search, Shield, BookOpen, CheckCircle2 } from 'lucide-react';
import { useTeacherCommunicationStore } from '../communication_store/useTeacherCommunicationStore';
import { TEACHER_PARENTS_LIST, TEACHER_CHAT_MESSAGES, TEACHER_ANNOUNCEMENTS, TEACHER_ADMIN_LIST, TEACHER_STUDENT_GROUPS } from '../communication_constants/TeacherCommunicationMockData';
import TeacherNewMessageModal from './TeacherNewMessageModal';
import TeacherQuickNotificationModal from './TeacherQuickNotificationModal';

export default function TeacherCommunicationMain() {
  const { 
    openNewMessageModal, 
    openQuickNotification, 
    selectedChat, 
    selectChat 
  } = useTeacherCommunicationStore();
  
  const [activeTab, setActiveTab] = useState<'Chats' | 'Announcements' | 'Notifications'>('Chats');
  const [chatFilter, setChatFilter] = useState<'admin' | 'parent' | 'group'>('parent');
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [localMessages, setLocalMessages] = useState(TEACHER_CHAT_MESSAGES);
  const [requestingAccess, setRequestingAccess] = useState(false);

  const getFilteredContacts = () => {
    let list: any[] = [];
    if (chatFilter === 'admin') {
      list = TEACHER_ADMIN_LIST.map(a => ({ id: a.id, name: a.name, subText: a.role, type: 'admin' }));
    } else if (chatFilter === 'parent') {
      list = TEACHER_PARENTS_LIST.map(p => ({ id: p.id, name: p.parentName, subText: `Parent of: ${p.studentName} (${p.class})`, type: 'parent', isApproved: p.isApproved }));
    } else {
      list = TEACHER_STUDENT_GROUPS.map(g => ({ id: g.id, name: g.name, subText: g.type, type: 'group' }));
    }
    
    return list.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || (item.subText && item.subText.toLowerCase().includes(searchQuery.toLowerCase())));
  };

  const filteredContacts = getFilteredContacts();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedChat) return;
    
    const newMsg = {
      id: `MSG-${Date.now()}`,
      sender: 'Teacher',
      text: messageInput,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) + ', Today'
    };
    
    setLocalMessages([...localMessages, newMsg]);
    setMessageInput('');
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-text-primary">Parent Communication</h1>
        <p className="text-[14px] text-text-secondary mt-1">Connect with parents, send alerts, and broadcast announcements.</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-border pb-2">
        {['Chats', 'Announcements', 'Notifications'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-5 py-2 rounded-t-lg text-[14px] font-bold transition-colors ${
              activeTab === tab 
              ? 'text-primary border-b-2 border-primary bg-primary/5' 
              : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
            }`}
          >
            {tab === 'Chats' && <span className="flex items-center gap-2"><MessageSquare size={16}/> Direct Messages</span>}
            {tab === 'Announcements' && <span className="flex items-center gap-2"><Megaphone size={16}/> Class Announcements</span>}
            {tab === 'Notifications' && <span className="flex items-center gap-2"><Bell size={16}/> Quick Notifications</span>}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden flex min-h-[500px]">
        
        {/* ================= CHATS TAB ================= */}
        {activeTab === 'Chats' && (
          <div className="flex w-full h-full">
            {/* Left Col: Contacts */}
            <div className="w-full md:w-1/3 border-r border-border flex flex-col h-[600px]">
               <div className="p-4 border-b border-border flex flex-col gap-3">
                 <div className="flex items-center justify-between">
                   <h3 className="font-bold text-[14px]">Conversations</h3>
                   <button onClick={openNewMessageModal} className="text-primary hover:text-primary/80 transition-colors"><MessageSquare size={18}/></button>
                 </div>
                 
                 <div className="flex bg-input rounded-lg overflow-hidden border border-border p-1 gap-1">
                   <button onClick={() => { setChatFilter('admin'); selectChat(null as any); }} className={`flex-1 py-1 text-[11px] font-bold rounded-md transition-colors ${chatFilter === 'admin' ? 'bg-primary text-black' : 'text-text-secondary hover:text-text-primary'}`}>Admin</button>
                   <button onClick={() => { setChatFilter('parent'); selectChat(null as any); }} className={`flex-1 py-1 text-[11px] font-bold rounded-md transition-colors ${chatFilter === 'parent' ? 'bg-primary text-black' : 'text-text-secondary hover:text-text-primary'}`}>Parents</button>
                   <button onClick={() => { setChatFilter('group'); selectChat(null as any); }} className={`flex-1 py-1 text-[11px] font-bold rounded-md transition-colors ${chatFilter === 'group' ? 'bg-primary text-black' : 'text-text-secondary hover:text-text-primary'}`}>Groups</button>
                 </div>
               </div>
               <div className="p-3 border-b border-border">
                 <div className="relative">
                   <Search size={14} className="absolute left-3 top-2.5 text-text-secondary" />
                   <input 
                     type="text" 
                     placeholder="Search contact..." 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-input border border-border rounded-lg pl-9 pr-3 py-1.5 text-[13px] text-text-primary focus:outline-none focus:border-primary"
                   />
                 </div>
               </div>
               <div className="flex-1 overflow-y-auto custom-scrollbar">
                 {filteredContacts.map((contact) => (
                   <div 
                     key={contact.id} 
                     onClick={() => selectChat(contact)}
                     className={`p-4 border-b border-border/50 cursor-pointer transition-colors hover:bg-primary/5 ${selectedChat?.id === contact.id ? 'bg-primary/10 border-l-2 border-l-primary' : ''}`}
                   >
                     <p className="text-[14px] font-bold text-text-primary flex items-center gap-2">
                        {contact.type === 'admin' && <Shield size={14} className="text-info"/>}
                        {contact.type === 'parent' && <Users size={14} className="text-primary"/>}
                        {contact.type === 'group' && <BookOpen size={14} className="text-success"/>}
                        {contact.name}
                     </p>
                     <p className="text-[12px] text-text-secondary mt-1">{contact.subText}</p>
                     {contact.type === 'parent' && !contact.isApproved && (
                       <span className="text-[10px] text-danger bg-danger/10 px-1.5 py-0.5 rounded mt-1 inline-block">Approval Pending</span>
                     )}
                   </div>
                 ))}
               </div>
            </div>

            {/* Right Col: Chat Area */}
            <div className="hidden md:flex flex-col w-2/3 h-[600px] bg-page relative">
               {selectedChat ? (
                 <>
                   <div className="p-4 border-b border-border bg-card">
                     <p className="text-[16px] font-bold text-text-primary">{selectedChat.name}</p>
                     {selectedChat.type === 'parent' && <p className="text-[12px] text-info">Contact restricted to ERP portal only.</p>}
                     {selectedChat.type === 'group' && <p className="text-[12px] text-warning">Students can only read broadcast messages here.</p>}
                   </div>
                   
                   {selectedChat.type === 'parent' && !selectedChat.isApproved ? (
                     <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                       <Shield size={48} className="text-danger mb-4 opacity-50"/>
                       <h3 className="text-[16px] font-bold text-text-primary mb-2">Communication Locked</h3>
                       <p className="text-[13px] text-text-secondary max-w-sm">You need approval from the Principal to initiate a direct chat with this parent. Please request access.</p>
                       <button 
                         onClick={() => {
                           setRequestingAccess(true);
                           setTimeout(() => setRequestingAccess(false), 2500);
                         }} 
                         disabled={requestingAccess}
                         className={`mt-4 px-4 py-2 border border-border font-bold text-[13px] rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${requestingAccess ? 'bg-success/20 text-success border-success/30' : 'bg-page text-primary hover:bg-white/5'}`}
                       >
                         {requestingAccess ? <><CheckCircle2 size={16} /> Request Sent</> : 'Request Access'}
                       </button>
                     </div>
                   ) : (
                     <>
                       <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                         {localMessages.map((msg) => (
                           <div key={msg.id} className={`flex flex-col ${msg.sender === 'Teacher' ? 'items-end' : 'items-start'}`}>
                             <span className="text-[10px] text-text-secondary mb-1">{msg.sender === 'Teacher' ? 'You' : selectedChat.name} • {msg.timestamp}</span>
                             <div className={`p-3 max-w-[70%] rounded-xl text-[13px] ${msg.sender === 'Teacher' ? 'bg-primary text-black rounded-tr-none' : 'bg-card border border-border text-text-primary rounded-tl-none'}`}>
                               {msg.text}
                             </div>
                           </div>
                         ))}
                       </div>
                       <div className="p-4 border-t border-border bg-card">
                         <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                           <input 
                             type="text" 
                             value={messageInput}
                             onChange={(e) => setMessageInput(e.target.value)}
                             placeholder="Type your message..." 
                             className="flex-1 bg-input border border-border rounded-lg px-4 py-2 text-[14px] focus:outline-none focus:border-primary"
                           />
                           <button type="submit" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors shrink-0">
                             <Send size={18} className="ml-[-2px]"/>
                           </button>
                         </form>
                       </div>
                     </>
                   )}
                 </>
               ) : (
                 <div className="flex-1 flex flex-col items-center justify-center text-text-secondary opacity-50">
                   <MessageSquare size={48} className="mb-4" />
                   <p className="text-[16px] font-bold">Select a conversation</p>
                 </div>
               )}
            </div>
          </div>
        )}

        {/* ================= ANNOUNCEMENTS TAB ================= */}
        {activeTab === 'Announcements' && (
          <div className="p-6 w-full h-[600px] overflow-y-auto custom-scrollbar flex flex-col">
             <div className="flex justify-end mb-6">
               <button onClick={() => openQuickNotification('Announcement')} className="px-5 py-2 bg-primary text-white font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors">
                 <Megaphone size={16} /> New Announcement
               </button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               {TEACHER_ANNOUNCEMENTS.map(ann => (
                 <div key={ann.id} className="bg-page border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group">
                   <div className="flex justify-between items-start mb-3">
                     <h3 className="text-[16px] font-bold text-text-primary group-hover:text-primary transition-colors">{ann.title}</h3>
                     <span className="text-[10px] text-text-secondary bg-card px-2 py-1 rounded">{ann.date}</span>
                   </div>
                   <p className="text-[13px] text-text-secondary mb-4">{ann.description}</p>
                   <span className="text-[11px] font-bold text-info bg-info/10 px-2 py-1 rounded border border-info/20">Sent to: {ann.targetClass}</span>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* ================= NOTIFICATIONS TAB ================= */}
        {activeTab === 'Notifications' && (
          <div className="p-6 w-full h-[600px] flex flex-col items-center justify-center bg-page">
            <h2 className="text-[18px] font-bold text-text-primary mb-2">Send Quick Alerts</h2>
            <p className="text-[13px] text-text-secondary mb-8 text-center max-w-md">
              Trigger automated templates for homework, attendance, or exam updates directly to parents' ERP app.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
               <div 
                 onClick={() => openQuickNotification('Homework')}
                 className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors group"
               >
                 <div className="w-14 h-14 rounded-full bg-info/20 text-info flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><FileText size={28}/></div>
                 <h3 className="font-bold text-[15px] mb-1">Homework Alert</h3>
                 <p className="text-[12px] text-text-secondary">Notify parents about pending assignments.</p>
               </div>
               
               <div 
                 onClick={() => openQuickNotification('Attendance')}
                 className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors group"
               >
                 <div className="w-14 h-14 rounded-full bg-warning/20 text-warning flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><CalendarCheck size={28}/></div>
                 <h3 className="font-bold text-[15px] mb-1">Attendance Alert</h3>
                 <p className="text-[12px] text-text-secondary">Send absent/low attendance warnings.</p>
               </div>
               
               <div 
                 onClick={() => openQuickNotification('Exam')}
                 className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors group"
               >
                 <div className="w-14 h-14 rounded-full bg-success/20 text-success flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><MessageSquare size={28}/></div>
                 <h3 className="font-bold text-[15px] mb-1">Exam / Results</h3>
                 <p className="text-[12px] text-text-secondary">Share performance feedback or exam dates.</p>
               </div>
            </div>
          </div>
        )}

      </div>

      <TeacherNewMessageModal />
      <TeacherQuickNotificationModal />
    </div>
  );
}
