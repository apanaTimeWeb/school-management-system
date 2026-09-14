"use client";

import { useHrTeachersProfile } from "./useHrTeachersProfile";
import HrTeachersProfileHeader from "./HrTeachersProfileHeader";
import HrTeachersProfileTabs from "./HrTeachersProfileTabs";
import HrTeachersAssignmentModal from "./HrTeachersAssignmentModal";
import { Loader2 } from "lucide-react";

interface HrTeachersProfileMainProps {
  id: string;
}

export default function HrTeachersProfileMain({ id }: HrTeachersProfileMainProps) {
  const { 
    teacher, isLoading, error, 
    activeTab, setActiveTab,
    isAssignmentModalOpen, openAssignmentModal, closeAssignmentModal
  } = useHrTeachersProfile(id);

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
      <HrTeachersProfileHeader 
        teacher={teacher} 
        openAssignmentModal={openAssignmentModal} 
      />
      
      <HrTeachersProfileTabs 
        teacher={teacher}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <HrTeachersAssignmentModal 
        isOpen={isAssignmentModalOpen}
        currentClass={teacher.classTeacherOf}
        close={closeAssignmentModal}
      />
    </div>
  );
}
