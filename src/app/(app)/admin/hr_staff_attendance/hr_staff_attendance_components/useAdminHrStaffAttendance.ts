"use client";

import { useState, useEffect } from "react";
import { fetchDailyAttendance, fetchMonthlyAttendance } from "../hr_staff_attendance_api/AdminHrStaffAttendanceApi";
import type { DailyAttendanceRecord, MonthlyAttendanceRecord, AttendanceStatus } from "../hr_staff_attendance_types/AdminHrStaffAttendanceTypes";

export function useAdminHrStaffAttendance() {
  const [activeTab, setActiveTab] = useState<'Daily' | 'Monthly'>('Daily');
  
  const [dailyRecords, setDailyRecords] = useState<DailyAttendanceRecord[]>([]);
  const [monthlyRecords, setMonthlyRecords] = useState<MonthlyAttendanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [department, setDepartment] = useState("All");

  const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
  const [correctionContext, setCorrectionContext] = useState<{employeeId: string, name: string, day: number} | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Daily') {
        const res = await fetchDailyAttendance({ date, department });
        if (res.success) setDailyRecords(res.data);
      } else {
        const res = await fetchMonthlyAttendance({ month, year, department });
        if (res.success) setMonthlyRecords(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [activeTab, date, month, year, department]);

  const updateDailyStatus = (employeeId: string, newStatus: AttendanceStatus) => {
    setDailyRecords(prev => prev.map(record => 
      record.employeeId === employeeId ? { ...record, status: newStatus } : record
    ));
  };

  const saveManualAttendance = () => {
    alert("Manual Attendance Saved Successfully!");
  };

  const syncBiometric = () => {
    alert("Biometric Sync Initiated. Syncing...");
  };

  const openCorrection = (employeeId: string, name: string, day: number) => {
    setCorrectionContext({ employeeId, name, day });
    setIsCorrectionModalOpen(true);
  };
  
  const closeCorrection = () => {
    setIsCorrectionModalOpen(false);
    setCorrectionContext(null);
  };

  return {
    activeTab, setActiveTab,
    dailyRecords, monthlyRecords, isLoading,
    date, setDate,
    month, setMonth,
    year, setYear,
    department, setDepartment,
    updateDailyStatus, saveManualAttendance, syncBiometric,
    isCorrectionModalOpen, correctionContext, openCorrection, closeCorrection
  };
}
