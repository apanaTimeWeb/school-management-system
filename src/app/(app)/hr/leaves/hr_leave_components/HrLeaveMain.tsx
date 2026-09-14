"use client";

import { useHrLeave } from "./useHrLeave";
import HrLeaveTabs from "./HrLeaveTabs";
import HrLeaveApplications from "./HrLeaveApplications";
import { HrLeaveBalances, HrLeaveTypes, HrLeaveHolidayCalendar } from "./HrLeaveOtherTabs";
import { Loader2 } from "lucide-react";

export default function HrLeaveMain() {
  const {
    activeTab, setActiveTab,
    applications, balances, types, holidays, isLoading,
    appStatus, setAppStatus,
    appType, setAppType,
    appSearch, setAppSearch,
    approveApplication, rejectApplication
  } = useHrLeave();

  return (
    <div className="flex flex-col w-full">
      <HrLeaveTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Leave Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Applications' && (
            <HrLeaveApplications 
              applications={applications}
              appStatus={appStatus} setAppStatus={setAppStatus}
              appType={appType} setAppType={setAppType}
              appSearch={appSearch} setAppSearch={setAppSearch}
              approve={approveApplication}
              reject={rejectApplication}
            />
          )}
          
          {activeTab === 'Balances' && <HrLeaveBalances balances={balances} />}
          
          {activeTab === 'Types' && <HrLeaveTypes types={types} />}
          
          {activeTab === 'Holidays' && <HrLeaveHolidayCalendar holidays={holidays} />}
        </div>
      )}
    </div>
  );
}

