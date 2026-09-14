"use client";

import { useAdminHrStaffAttendance } from "./useAdminHrStaffAttendance";
import AdminHrStaffAttendanceToolbar from "./AdminHrStaffAttendanceToolbar";
import AdminHrStaffAttendanceDaily from "./AdminHrStaffAttendanceDaily";
import AdminHrStaffAttendanceMonthly from "./AdminHrStaffAttendanceMonthly";
import AdminHrStaffAttendanceCorrectionModal from "./AdminHrStaffAttendanceCorrectionModal";
import { Loader2 } from "lucide-react";

export default function AdminHrStaffAttendanceMain() {
  const { 
    activeTab, setActiveTab,
    dailyRecords, monthlyRecords, isLoading,
    date, setDate,
    month, setMonth,
    year, setYear,
    department, setDepartment,
    updateDailyStatus, saveManualAttendance, syncBiometric,
    isCorrectionModalOpen, correctionContext, openCorrection, closeCorrection
  } = useAdminHrStaffAttendance();

  return (
    <div className="flex flex-col w-full">
      <AdminHrStaffAttendanceToolbar 
        activeTab={activeTab} setActiveTab={setActiveTab}
        date={date} setDate={setDate}
        month={month} setMonth={setMonth}
        year={year} setYear={setYear}
        department={department} setDepartment={setDepartment}
        syncBiometric={syncBiometric}
      />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Attendance Records...</span>
        </div>
      ) : activeTab === 'Daily' ? (
        <AdminHrStaffAttendanceDaily 
          records={dailyRecords} 
          updateStatus={updateDailyStatus} 
          saveManual={saveManualAttendance} 
        />
      ) : (
        <AdminHrStaffAttendanceMonthly 
          records={monthlyRecords}
          openCorrection={openCorrection}
        />
      )}

      <AdminHrStaffAttendanceCorrectionModal 
        isOpen={isCorrectionModalOpen}
        close={closeCorrection}
        context={correctionContext}
      />
    </div>
  );
}
