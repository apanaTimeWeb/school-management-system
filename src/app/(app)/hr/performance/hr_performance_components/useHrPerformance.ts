"use client";

import { useState, useEffect } from "react";
import { fetchActiveAppraisals, fetchPerformanceHistory } from "../hr_performance_api/HrPerformanceApi";
import type { EmployeePerformanceRecord, AppraisalStatus } from "../hr_performance_types/HrPerformanceTypes";

export function useHrPerformance() {
  const [activeTab, setActiveTab] = useState<'Appraisal' | 'History'>('Appraisal');
  
  const [appraisals, setAppraisals] = useState<EmployeePerformanceRecord[]>([]);
  const [history, setHistory] = useState<EmployeePerformanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  const [selectedRecord, setSelectedRecord] = useState<EmployeePerformanceRecord | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Appraisal') {
        const res = await fetchActiveAppraisals({ status: statusFilter, search: searchFilter });
        if (res.success) setAppraisals(res.data);
      } else {
        const res = await fetchPerformanceHistory({ search: searchFilter });
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

  const openRecord = (record: EmployeePerformanceRecord) => setSelectedRecord(record);
  const closeRecord = () => setSelectedRecord(null);

  const updateGoalAchievement = (recordId: string, goalId: string, newAchieved: number) => {
    const updateFn = (rec: EmployeePerformanceRecord) => {
      if (rec.id !== recordId) return rec;
      const newGoals = rec.goals.map(g => g.id === goalId ? { ...g, achieved: newAchieved } : g);
      return { ...rec, goals: newGoals };
    };
    setAppraisals(prev => prev.map(updateFn));
    if (selectedRecord) setSelectedRecord(updateFn(selectedRecord));
  };

  const submitAppraisal = (updatedRecord: EmployeePerformanceRecord, markCompleted: boolean = false) => {
    const newStatus = markCompleted ? 'Completed' : 'In Review';
    const finalRecord = { ...updatedRecord, status: newStatus as AppraisalStatus, completedDate: markCompleted ? new Date().toISOString().split('T')[0] : undefined };
    
    setAppraisals(prev => prev.map(r => r.id === finalRecord.id ? finalRecord : r));
    if (selectedRecord) setSelectedRecord(finalRecord);

    if (markCompleted) {
       alert("Success: Appraisal Cycle Completed. Moved to History.");
       closeRecord();
       setActiveTab('Appraisal'); // trigger reload effectively via state or just local mutate
       setAppraisals(prev => prev.filter(r => r.id !== finalRecord.id));
    } else {
       alert("Success: Appraisal Draft Saved and submitted for Review.");
    }
  };

  return {
    activeTab, setActiveTab,
    appraisals, history, isLoading,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    selectedRecord, openRecord, closeRecord,
    updateGoalAchievement, submitAppraisal
  };
}

