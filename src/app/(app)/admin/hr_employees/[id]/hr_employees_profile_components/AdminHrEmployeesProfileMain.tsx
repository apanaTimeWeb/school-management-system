"use client";

import { useAdminHrEmployeesProfile } from "./useAdminHrEmployeesProfile";
import AdminHrEmployeesProfileHeader from "./AdminHrEmployeesProfileHeader";
import AdminHrEmployeesProfileTabs from "./AdminHrEmployeesProfileTabs";
import AdminHrEmployeesHistoryModal from "./AdminHrEmployeesHistoryModal";
import { Loader2 } from "lucide-react";

interface AdminHrEmployeesProfileMainProps {
  id: string;
}

export default function AdminHrEmployeesProfileMain({ id }: AdminHrEmployeesProfileMainProps) {
  const { 
    employee, isLoading, error, 
    activeTab, setActiveTab,
    isHistoryModalOpen, historyAction, openHistoryModal, closeHistoryModal
  } = useAdminHrEmployeesProfile(id);

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
      <AdminHrEmployeesProfileHeader employee={employee} openHistoryModal={openHistoryModal} />
      
      <AdminHrEmployeesProfileTabs 
        employee={employee}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <AdminHrEmployeesHistoryModal 
        isOpen={isHistoryModalOpen}
        action={historyAction}
        close={closeHistoryModal}
      />
    </div>
  );
}
