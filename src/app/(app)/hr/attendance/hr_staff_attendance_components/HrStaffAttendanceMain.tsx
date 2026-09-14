"use client";

import { useHrStaffAttendance } from "./useHrStaffAttendance";
import HrStaffAttendanceToolbar from "./HrStaffAttendanceToolbar";
import HrStaffAttendanceDaily from "./HrStaffAttendanceDaily";
import HrStaffAttendanceMonthly from "./HrStaffAttendanceMonthly";
import HrStaffAttendanceCorrectionModal from "./HrStaffAttendanceCorrectionModal";
import { Loader2 } from "lucide-react";

export default function HrStaffAttendanceMain() {
  const { 
    activeTab, setActiveTab,
    dailyRecords, monthlyRecords, isLoading,
    date, setDate,
    month, setMonth,
    year, setYear,
    department, setDepartment,
    updateDailyStatus, saveManualAttendance, syncBiometric,
    isCorrectionModalOpen, correctionContext, openCorrection, closeCorrection, updateMonthlyStatus
  } = useHrStaffAttendance();

  return (
    <div className="flex flex-col w-full">
      <HrStaffAttendanceToolbar 
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
        <HrStaffAttendanceDaily 
          records={dailyRecords} 
          updateStatus={updateDailyStatus} 
          saveManual={saveManualAttendance} 
        />
      ) : (
        <HrStaffAttendanceMonthly 
          records={monthlyRecords}
          openCorrection={openCorrection}
        />
      )}

      <HrStaffAttendanceCorrectionModal 
        isOpen={isCorrectionModalOpen}
        close={closeCorrection}
        context={correctionContext}
        onSave={(employeeId, day, status) => {
          updateMonthlyStatus(employeeId, day, status);
        }}
      />
    </div>
  );
}

