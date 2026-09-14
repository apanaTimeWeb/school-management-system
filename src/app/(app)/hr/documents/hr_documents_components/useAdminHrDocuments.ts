"use client";

import { useState, useEffect } from "react";
import { fetchVaultList, fetchDocumentAlerts } from "../hr_documents_api/AdminHrDocumentsApi";
import type { EmployeeVault, DocumentAlert, VerificationStatus } from "../hr_documents_types/AdminHrDocumentsTypes";

export function useAdminHrDocuments() {
  const [activeTab, setActiveTab] = useState<'Vault' | 'Alerts'>('Vault');
  
  const [vaultList, setVaultList] = useState<EmployeeVault[]>([]);
  const [alerts, setAlerts] = useState<DocumentAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [deptFilter, setDeptFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeVault | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Vault') {
        const res = await fetchVaultList({ department: deptFilter, search: searchFilter });
        if (res.success) setVaultList(res.data);
      } else {
        const res = await fetchDocumentAlerts();
        if (res.success) setAlerts(res.data);
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
  }, [activeTab, deptFilter, searchFilter]);

  const openEmployee = (emp: EmployeeVault) => setSelectedEmployee(emp);
  const closeEmployee = () => setSelectedEmployee(null);

  const updateDocumentStatus = (empId: string, docId: string, newStatus: VerificationStatus) => {
    const updateFn = (emp: EmployeeVault) => {
      if (emp.employeeId !== empId) return emp;
      const newDocs = emp.documents.map(d => d.id === docId ? { ...d, status: newStatus } : d);
      return { ...emp, documents: newDocs };
    };

    setVaultList(prev => prev.map(updateFn));
    if (selectedEmployee) setSelectedEmployee(updateFn(selectedEmployee));
  };

  return {
    activeTab, setActiveTab,
    vaultList, alerts, isLoading,
    deptFilter, setDeptFilter,
    searchFilter, setSearchFilter,
    selectedEmployee, openEmployee, closeEmployee,
    updateDocumentStatus
  };
}
