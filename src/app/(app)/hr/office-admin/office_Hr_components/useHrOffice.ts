"use client";

import { useState, useEffect } from "react";
import { fetchNotices, fetchTasks, fetchDocuments } from "../office_admin_api/HrOfficeApi";
import type { OfficeNotice, OfficeTask, OfficeDocument } from "../office_admin_types/HrOfficeTypes";

export function useHrOffice() {
  const [activeTab, setActiveTab] = useState<'Notices' | 'Tasks' | 'Documents'>('Notices');
  
  const [notices, setNotices] = useState<OfficeNotice[]>([]);
  const [tasks, setTasks] = useState<OfficeTask[]>([]);
  const [documents, setDocuments] = useState<OfficeDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [typeFilter, setTypeFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  // Modal State
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<OfficeNotice | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Notices') {
        const res = await fetchNotices({ type: typeFilter, search: searchFilter });
        if (res.success) setNotices(res.data);
      } else if (activeTab === 'Tasks') {
        const res = await fetchTasks({ type: typeFilter });
        if (res.success) setTasks(res.data);
      } else if (activeTab === 'Documents') {
        const res = await fetchDocuments({ type: typeFilter });
        if (res.success) setDocuments(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Reset filters on tab change
    setTypeFilter("All");
    setSearchFilter("");
  }, [activeTab]);

  useEffect(() => {
    const timer = setTimeout(() => loadData(), 300);
    return () => clearTimeout(timer);
  }, [activeTab, typeFilter, searchFilter]);

  const openNoticeModal = (notice?: OfficeNotice) => {
    setSelectedNotice(notice || null);
    setIsNoticeModalOpen(true);
  };

  const closeNoticeModal = () => {
    setIsNoticeModalOpen(false);
    setSelectedNotice(null);
  };

  const saveNotice = (notice: OfficeNotice) => {
    if (selectedNotice) {
      setNotices(prev => prev.map(n => n.id === notice.id ? notice : n));
    } else {
      setNotices(prev => [{ ...notice, id: `not-${Date.now()}` }, ...prev]);
    }
    closeNoticeModal();
    alert("Notice successfully published.");
  };

  return {
    activeTab, setActiveTab,
    notices, tasks, documents, isLoading,
    typeFilter, setTypeFilter, searchFilter, setSearchFilter,
    isNoticeModalOpen, selectedNotice, openNoticeModal, closeNoticeModal, saveNotice
  };
}

