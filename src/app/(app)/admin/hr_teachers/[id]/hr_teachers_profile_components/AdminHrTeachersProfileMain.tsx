"use client";

import { useAdminHrTeachersProfile } from "./useAdminHrTeachersProfile";
import AdminHrTeachersProfileHeader from "./AdminHrTeachersProfileHeader";
import AdminHrTeachersProfileTabs from "./AdminHrTeachersProfileTabs";
import AdminHrTeachersAssignmentModal from "./AdminHrTeachersAssignmentModal";
import { Loader2 } from "lucide-react";

interface AdminHrTeachersProfileMainProps {
  id: string;
}

export default function AdminHrTeachersProfileMain({ id }: AdminHrTeachersProfileMainProps) {
  const { 
    teacher, isLoading, error, 
    activeTab, setActiveTab,
    isAssignmentModalOpen, openAssignmentModal, closeAssignmentModal
  } = useAdminHrTeachersProfile(id);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-20 bg-card border border-border rounded-xl">
        <Loader2 className="animate-spin text-primary mb-4" size={32} />
        <span className="text-sm text-muted-foreground font-bold">Loading teacher profile...</span>
      </div>
    );
  }

  if (error || !teacher) {
    return (
      <div className="w-full p-6 text-center text-danger font-bold bg-danger/10 rounded-md border border-danger">
        {error || "Teacher not found."}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <AdminHrTeachersProfileHeader 
        teacher={teacher} 
        openAssignmentModal={openAssignmentModal} 
      />
      
      <AdminHrTeachersProfileTabs 
        teacher={teacher}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <AdminHrTeachersAssignmentModal 
        isOpen={isAssignmentModalOpen}
        currentClass={teacher.classTeacherOf}
        close={closeAssignmentModal}
      />
    </div>
  );
}
