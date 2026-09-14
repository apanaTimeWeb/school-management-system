"use client";

import { useAdminHrLeave } from "./useAdminHrLeave";
import AdminHrLeaveTabs from "./AdminHrLeaveTabs";
import AdminHrLeaveApplications from "./AdminHrLeaveApplications";
import { AdminHrLeaveBalances, AdminHrLeaveTypes, AdminHrLeaveHolidayCalendar } from "./AdminHrLeaveOtherTabs";
import { Loader2 } from "lucide-react";

export default function AdminHrLeaveMain() {
  const {
    activeTab, setActiveTab,
    applications, balances, types, holidays, isLoading,
    appStatus, setAppStatus,
    appType, setAppType,
    appSearch, setAppSearch,
    approveApplication, rejectApplication
  } = useAdminHrLeave();

  return (
    <div className="flex flex-col w-full">
      <AdminHrLeaveTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Leave Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Applications' && (
            <AdminHrLeaveApplications 
              applications={applications}
              appStatus={appStatus} setAppStatus={setAppStatus}
              appType={appType} setAppType={setAppType}
              appSearch={appSearch} setAppSearch={setAppSearch}
              approve={approveApplication}
              reject={rejectApplication}
            />
          )}
          
          {activeTab === 'Balances' && <AdminHrLeaveBalances balances={balances} />}
          
          {activeTab === 'Types' && <AdminHrLeaveTypes types={types} />}
          
          {activeTab === 'Holidays' && <AdminHrLeaveHolidayCalendar holidays={holidays} />}
        </div>
      )}
    </div>
  );
}
