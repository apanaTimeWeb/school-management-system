"use client";

import { useState, useEffect, useCallback } from "react";
import { fetchAuditLogs } from "../hr_audit_api/AdminHrAuditApi";
import type { AuditLog, AuditFiltersState } from "../hr_audit_types/AdminHrAuditTypes";

const initialFilters: AuditFiltersState = {
  actionType: "All",
  dateFrom: "",
  dateTo: "",
  searchStr: ""
};

export function useAdminHrAudit() {
  const [filters, setFilters] = useState<AuditFiltersState>(initialFilters);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modal State
  const [isDiffModalOpen, setIsDiffModalOpen] = useState(false);
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetchAuditLogs(filters);
      if (res.success) {
        setLogs(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  // Debounced fetch
  useEffect(() => {
    const timer = setTimeout(() => loadData(), 400);
    return () => clearTimeout(timer);
  }, [filters, loadData]);

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const openDiffModal = (log: AuditLog) => {
    setSelectedLog(log);
    setIsDiffModalOpen(true);
  };

  const closeDiffModal = () => {
    setIsDiffModalOpen(false);
    setSelectedLog(null);
  };

  return {
    filters, setFilters, clearFilters,
    logs, isLoading,
    isDiffModalOpen, selectedLog, openDiffModal, closeDiffModal
  };
}
