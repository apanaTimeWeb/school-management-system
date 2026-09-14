"use client";

import { useState, useEffect } from "react";
import { fetchEmployeeById } from "../../hr_employees_api/HrEmployeesApi";
import type { Employee } from "../../hr_employees_types/HrEmployeesTypes";

export function useHrEmployeesProfile(id: string) {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("personal");

  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [historyAction, setHistoryAction] = useState<'Transfer' | 'Promotion' | 'Resignation' | 'Exit' | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadProfile = async () => {
      try {
        setIsLoading(true);
        const response = await fetchEmployeeById(id);
        if (isMounted) {
          if (response.success && response.data) {
            setEmployee(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load profile.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadProfile();
    return () => { isMounted = false; };
  }, [id]);

  const openHistoryModal = (action: 'Transfer' | 'Promotion' | 'Resignation' | 'Exit') => {
    setHistoryAction(action);
    setIsHistoryModalOpen(true);
  };

  const closeHistoryModal = () => {
    setIsHistoryModalOpen(false);
    setHistoryAction(null);
  };

  return {
    employee,
    isLoading,
    error,
    activeTab,
    setActiveTab,
    isHistoryModalOpen,
    historyAction,
    openHistoryModal,
    closeHistoryModal
  };
}
