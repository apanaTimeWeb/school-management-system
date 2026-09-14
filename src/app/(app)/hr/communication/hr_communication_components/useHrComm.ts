"use client";

import { useState, useEffect } from "react";
import { fetchInbox, fetchChannels } from "../hr_communication_api/HrCommApi";
import type { CommMessage, CommChannelConfig } from "../hr_communication_types/HrCommTypes";

export function useHrComm() {
  const [activeTab, setActiveTab] = useState<'Inbox' | 'Channels'>('Inbox');
  
  const [messages, setMessages] = useState<CommMessage[]>([]);
  const [channels, setChannels] = useState<CommChannelConfig[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  // Modal State
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Inbox') {
        const res = await fetchInbox({ category: categoryFilter, search: searchFilter });
        if (res.success) setMessages(res.data);
      } else if (activeTab === 'Channels') {
        const res = await fetchChannels();
        if (res.success) setChannels(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setCategoryFilter("All");
    setSearchFilter("");
  }, [activeTab]);

  useEffect(() => {
    const timer = setTimeout(() => loadData(), 300);
    return () => clearTimeout(timer);
  }, [activeTab, categoryFilter, searchFilter]);

  const openBroadcastModal = () => setIsBroadcastModalOpen(true);
  const closeBroadcastModal = () => setIsBroadcastModalOpen(false);

  const sendBroadcast = (newMsg: CommMessage) => {
    setMessages(prev => [newMsg, ...prev]);
    closeBroadcastModal();
    alert(`Success: Broadcast sent via ${newMsg.channelsUsed.join(", ")}`);
  };

  const toggleChannelStatus = (id: string) => {
    setChannels(prev => prev.map(c => c.id === id ? { ...c, isActive: !c.isActive } : c));
  };

  const markAsRead = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, isRead: true } : m));
  };

  return {
    activeTab, setActiveTab,
    messages, channels, isLoading,
    categoryFilter, setCategoryFilter, searchFilter, setSearchFilter,
    isBroadcastModalOpen, openBroadcastModal, closeBroadcastModal, 
    sendBroadcast, toggleChannelStatus, markAsRead
  };
}

