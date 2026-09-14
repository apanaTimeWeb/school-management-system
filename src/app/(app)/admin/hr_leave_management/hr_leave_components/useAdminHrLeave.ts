"use client";

import { useState, useEffect } from "react";
import { fetchLeaveApplications, fetchLeaveBalances, fetchLeaveTypes, fetchHolidays } from "../hr_leave_api/AdminHrLeaveApi";
import type { LeaveApplication, LeaveBalance, LeaveType, Holiday } from "../hr_leave_types/AdminHrLeaveTypes";

export function useAdminHrLeave() {
  const [activeTab, setActiveTab] = useState<'Applications' | 'Balances' | 'Types' | 'Holidays'>('Applications');
  
  const [applications, setApplications] = useState<LeaveApplication[]>([]);
  const [balances, setBalances] = useState<LeaveBalance[]>([]);
  const [types, setTypes] = useState<LeaveType[]>([]);
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Application Filters
  const [appStatus, setAppStatus] = useState("Pending");
  const [appType, setAppType] = useState("All");
  const [appSearch, setAppSearch] = useState("");

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Applications') {
        const res = await fetchLeaveApplications({ status: appStatus, employeeType: appType, search: appSearch });
        if (res.success) setApplications(res.data);
      } else if (activeTab === 'Balances') {
        const res = await fetchLeaveBalances();
        if (res.success) setBalances(res.data);
      } else if (activeTab === 'Types') {
        const res = await fetchLeaveTypes();
        if (res.success) setTypes(res.data);
      } else if (activeTab === 'Holidays') {
        const res = await fetchHolidays();
        if (res.success) setHolidays(res.data);
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
  }, [activeTab, appStatus, appType, appSearch]);

  const approveApplication = (id: string) => {
    setApplications(prev => prev.map(app => app.id === id ? { ...app, status: 'Approved' } : app));
    alert(`Leave Application ${id} Approved Successfully!`);
  };

  const rejectApplication = (id: string) => {
    setApplications(prev => prev.map(app => app.id === id ? { ...app, status: 'Rejected' } : app));
    alert(`Leave Application ${id} Rejected.`);
  };

  return {
    activeTab, setActiveTab,
    applications, balances, types, holidays, isLoading,
    appStatus, setAppStatus,
    appType, setAppType,
    appSearch, setAppSearch,
    approveApplication, rejectApplication
  };
}
