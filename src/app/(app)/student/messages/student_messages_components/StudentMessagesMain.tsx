"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentMessages, sendStudentReply } from '../student_messages_api/student_messages_api';
import type { StudentMessagesData, ConversationThread, ChatMessage } from '../student_messages_types/student_messages_types';
import StudentMessagesSidebar from './StudentMessagesSidebar';
import StudentMessagesChatArea from './StudentMessagesChatArea';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Messages module (hybrid Inbox/Chat).
 */
export default function StudentMessagesMain() {
  const [data, setData] = useState<StudentMessagesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentMessages();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
            if (response.data.threads.length > 0) {
              setSelectedThreadId(response.data.threads[0].id);
            }
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load messages.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  const selectedThread = data.threads.find(t => t.id === selectedThreadId);

  const handleSendMessage = async (content: string) => {
    if (!selectedThreadId) return;
    
    // Optimistic UI update could go here, but since this is mock, 
    // we'll await the fake API and then update the specific thread.
    const res = await sendStudentReply(selectedThreadId, content);
    if (res.success && res.data) {
      setData(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          threads: prev.threads.map(t => {
            if (t.id === selectedThreadId) {
              return {
                ...t,
                messages: [...t.messages, res.data as ChatMessage],
                lastMessagePreview: "You: " + content,
                lastMessageTime: "Just Now"
              };
            }
            return t;
          })
        };
      });
    }
  };

  const markAsRead = (threadId: string) => {
    setData(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        threads: prev.threads.map(t => t.id === threadId ? { ...t, unreadCount: 0 } : t)
      };
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-6 items-start h-[calc(100vh-200px)] min-h-[500px]">
      
      {/* Sidebar - Thread List */}
      <div className="w-full md:w-80 h-full shrink-0 flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <StudentMessagesSidebar 
          threads={data.threads}
          selectedThreadId={selectedThreadId}
          onSelectThread={(id) => {
            setSelectedThreadId(id);
            markAsRead(id);
          }}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 w-full h-full bg-card border border-border rounded-xl overflow-hidden shadow-sm mt-4 md:mt-0">
        {selectedThread ? (
          <StudentMessagesChatArea 
            thread={selectedThread} 
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-text-secondary">
            Select a conversation to start reading.
          </div>
        )}
      </div>

    </div>
  );
}
