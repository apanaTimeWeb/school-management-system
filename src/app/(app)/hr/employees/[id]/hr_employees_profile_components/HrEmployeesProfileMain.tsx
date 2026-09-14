"use client";

import { useHrEmployeesProfile } from "./useHrEmployeesProfile";
import HrEmployeesProfileHeader from "./HrEmployeesProfileHeader";
import HrEmployeesProfileTabs from "./HrEmployeesProfileTabs";
import HrEmployeesHistoryModal from "./HrEmployeesHistoryModal";
import { Loader2 } from "lucide-react";

interface HrEmployeesProfileMainProps {
  id: string;
}

export default function HrEmployeesProfileMain({ id }: HrEmployeesProfileMainProps) {
  const { 
    employee, isLoading, error, 
    activeTab, setActiveTab,
    isHistoryModalOpen, historyAction, openHistoryModal, closeHistoryModal
  } = useHrEmployeesProfile(id);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-20 bg-card border border-border rounded-xl">
        <Loader2 className="animate-spin text-primary mb-4" size={32} />
        <span className="text-sm text-muted-foreground font-medium">Loading profile...</span>
      </div>
    );
  }

  if (error || !employee) {
    return (
      <div className="w-full p-6 text-center text-danger bg-danger/10 rounded-md border border-danger">
        {error || "Employee not found."}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <HrEmployeesProfileHeader employee={employee} openHistoryModal={openHistoryModal} />
      
      <HrEmployeesProfileTabs 
        employee={employee}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <HrEmployeesHistoryModal 
        isOpen={isHistoryModalOpen}
        action={historyAction}
        close={closeHistoryModal}
      />
    </div>
  );
}
