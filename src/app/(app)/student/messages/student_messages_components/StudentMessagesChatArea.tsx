"use client";

import React, { useState, useRef, useEffect } from 'react';
import type { ConversationThread } from '../student_messages_types/student_messages_types';
import { Send, User, ShieldCheck, Lock, Paperclip, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  thread: ConversationThread;
  onSendMessage: (content: string) => Promise<void>;
}

export default function StudentMessagesChatArea({ thread, onSendMessage }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom when thread changes or new message is added
  useEffect(() => {
    scrollToBottom();
  }, [thread.messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !thread.allowedReplies) return;
    
    setIsSending(true);
    await onSendMessage(inputValue);
    setInputValue('');
    setIsSending(false);
  };

  const isTeacher = thread.startedByRole === 'Teacher';

  return (
    <div className="flex flex-col h-full bg-card">
      
      {/* Header */}
      <div className="h-16 px-5 border-b border-border bg-page flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className={clsx(
            "w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm",
            isTeacher ? "bg-info" : "bg-danger"
          )}>
            {isTeacher ? <User size={18} /> : <ShieldCheck size={18} />}
          </div>
          <div>
            <h2 className="text-sm font-bold text-text-primary leading-tight">{thread.startedBy}</h2>
            <p className="text-xs font-semibold text-text-secondary truncate max-w-xs md:max-w-md">
              Topic: {thread.topic}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col gap-4 bg-[url('/chat-pattern.png')] bg-repeat bg-opacity-5">
        {/* Simple inline pattern mock using CSS if image missing */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
        
        {thread.messages.map((msg) => {
          const isSelf = msg.senderRole === 'Student';
          
          return (
            <div key={msg.id} className={clsx("flex flex-col w-full max-w-[80%]", isSelf ? "self-end items-end" : "self-start items-start")}>
              
              <span className="text-[10px] font-bold text-text-secondary mb-1 px-1">
                {isSelf ? "You" : msg.senderName}
              </span>
              
              <div className={clsx(
                "p-3 rounded-2xl relative shadow-sm text-sm font-medium leading-relaxed",
                isSelf 
                  ? "bg-primary text-white rounded-br-none" 
                  : "bg-page border border-border text-text-primary rounded-bl-none"
              )}>
                {msg.content}
                {msg.hasAttachment && (
                  <div className={clsx(
                    "mt-2 p-2 rounded-lg flex items-center gap-2 cursor-pointer transition-colors text-xs font-bold",
                    isSelf ? "bg-black/10 hover:bg-black/20" : "bg-card border border-border hover:border-primary/50"
                  )}>
                    <Paperclip size={14} /> Attached File
                  </div>
                )}
              </div>
              
              <span className="text-[9px] font-semibold text-text-secondary mt-1 px-1">
                {msg.timestamp}
              </span>
              
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border bg-page">
        {thread.allowedReplies ? (
          <form onSubmit={handleSend} className="flex items-center gap-3">
            <button type="button" className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary hover:bg-card hover:text-primary transition-colors shrink-0">
              <Paperclip size={18} />
            </button>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your reply here..." 
              className="flex-1 bg-card border border-border text-text-primary text-sm rounded-full focus:ring-2 focus:ring-primary/20 focus:border-primary px-5 py-2.5 outline-none font-medium"
              disabled={isSending}
            />
            <button 
              type="submit" 
              disabled={!inputValue.trim() || isSending}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0 shadow-sm"
            >
              {isSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="ml-1" />}
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 py-2 text-text-secondary text-sm font-semibold">
            <Lock size={16} /> Replies are disabled for this conversation by the school administration.
          </div>
        )}
      </div>

    </div>
  );
}
