"use client";

import { useState, useEffect } from "react";
import { fetchWorkloadList } from "../hr_workload_api/HrWorkloadApi";
import type { TeacherWorkloadRecord, AcademicAssignment } from "../hr_workload_types/HrWorkloadTypes";

export function useHrWorkload() {
  const [activeTab, setActiveTab] = useState<'List' | 'Summary'>('List');
  
  const [records, setRecords] = useState<TeacherWorkloadRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [deptFilter, setDeptFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  const [selectedRecord, setSelectedRecord] = useState<TeacherWorkloadRecord | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'List') {
        const res = await fetchWorkloadList({ department: deptFilter, search: searchFilter });
        if (res.success) setRecords(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'List') {
      const timer = setTimeout(() => loadData(), 300);
      return () => clearTimeout(timer);
    }
  }, [activeTab, deptFilter, searchFilter]);

  const openRecord = (record: TeacherWorkloadRecord) => setSelectedRecord(record);
  const closeRecord = () => setSelectedRecord(null);

  const saveAssignments = (updatedRecord: TeacherWorkloadRecord) => {
    setRecords(prev => prev.map(r => r.id === updatedRecord.id ? updatedRecord : r));
    if (selectedRecord) setSelectedRecord(updatedRecord);
    alert("Success: Teacher Workload updated successfully.");
    closeRecord();
  };

  return {
    activeTab, setActiveTab,
    records, isLoading,
    deptFilter, setDeptFilter,
    searchFilter, setSearchFilter,
    selectedRecord, openRecord, closeRecord,
    saveAssignments
  };
}

