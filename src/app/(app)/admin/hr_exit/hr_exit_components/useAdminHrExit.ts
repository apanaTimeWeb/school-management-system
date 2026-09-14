"use client";

import { useState, useEffect } from "react";
import { fetchExitPipeline, fetchExitHistory } from "../hr_exit_api/AdminHrExitApi";
import type { EmployeeExitRecord } from "../hr_exit_types/AdminHrExitTypes";

export function useAdminHrExit() {
  const [activeTab, setActiveTab] = useState<'Pipeline' | 'History'>('Pipeline');
  
  const [pipeline, setPipeline] = useState<EmployeeExitRecord[]>([]);
  const [history, setHistory] = useState<EmployeeExitRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  const [selectedExit, setSelectedExit] = useState<EmployeeExitRecord | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Pipeline') {
        const res = await fetchExitPipeline({ status: statusFilter, search: searchFilter });
        if (res.success) setPipeline(res.data);
      } else {
        const res = await fetchExitHistory({ search: searchFilter });
        if (res.success) setHistory(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab, statusFilter, searchFilter]);

  const openExit = (record: EmployeeExitRecord) => setSelectedExit(record);
  const closeExit = () => setSelectedExit(null);

  const toggleClearance = (exitId: string, checklistId: string) => {
    const updateFn = (record: EmployeeExitRecord) => {
      if (record.id !== exitId) return record;
      const newChecklist = record.clearanceChecklist.map(chk => chk.id === checklistId ? { ...chk, isCleared: !chk.isCleared } : chk);
      
      // Auto update status if all cleared
      const allCleared = newChecklist.every(c => c.isCleared);
      const newStatus = allCleared ? 'Clearance Pending' : 'Notice Period'; // Just mock logic
      
      return { ...record, clearanceChecklist: newChecklist, status: newStatus as any };
    };

    setPipeline(prev => prev.map(updateFn));
    if (selectedExit) setSelectedExit(updateFn(selectedExit));
  };

  const markRelieved = (exitId: string) => {
    const updateFn = (record: EmployeeExitRecord) => {
      if (record.id !== exitId) return record;
      return { ...record, status: 'Relieved' as const };
    };

    setPipeline(prev => prev.map(updateFn));
    if (selectedExit) setSelectedExit(updateFn(selectedExit));
    alert(`Success: Employee ${exitId} has been marked as Relieved and moved to History.`);
  };

  return {
    activeTab, setActiveTab,
    pipeline, history, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedExit, openExit, closeExit,
    toggleClearance, markRelieved
  };
}
