"use client";

import { useState, useEffect } from "react";
import { fetchPayrollRecords } from "../hr_payroll_api/HrPayrollApi";
import type { EmployeePayrollRecord, PayrollStatus } from "../hr_payroll_types/HrPayrollTypes";

export function useHrPayroll() {
  const [activeTab, setActiveTab] = useState<'Pipeline' | 'Reports'>('Pipeline');
  
  const [records, setRecords] = useState<EmployeePayrollRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [periodFilter, setPeriodFilter] = useState("August 2024");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  const [hasPaymentAuthority, setHasPaymentAuthority] = useState(false); // Mock RBAC Permission

  const [selectedRecord, setSelectedRecord] = useState<EmployeePayrollRecord | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Pipeline') {
        const res = await fetchPayrollRecords({ period: periodFilter, status: statusFilter, search: searchFilter });
        if (res.success) setRecords(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'Pipeline') {
      const timer = setTimeout(() => loadData(), 300);
      return () => clearTimeout(timer);
    }
  }, [activeTab, periodFilter, statusFilter, searchFilter]);

  const openRecord = (record: EmployeePayrollRecord) => setSelectedRecord(record);
  const closeRecord = () => setSelectedRecord(null);

  const updatePayrollStatus = (id: string, newStatus: PayrollStatus) => {
    const updateFn = (rec: EmployeePayrollRecord) => {
      if (rec.id !== id) return rec;
      // If marking as Processed, also flag payslip as generated for demo purposes
      return { ...rec, status: newStatus, payslipGenerated: newStatus === 'Processed' ? true : rec.payslipGenerated };
    };

    setRecords(prev => prev.map(updateFn));
    if (selectedRecord) setSelectedRecord(updateFn(selectedRecord));
    alert(`Success: Payroll for ${id} marked as ${newStatus}.`);
  };

  return {
    activeTab, setActiveTab,
    records, isLoading,
    periodFilter, setPeriodFilter,
    statusFilter, setStatusFilter,
    searchFilter, setSearchFilter,
    hasPaymentAuthority, setHasPaymentAuthority,
    selectedRecord, openRecord, closeRecord,
    updatePayrollStatus
  };
}

