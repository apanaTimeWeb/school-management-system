"use client";

import { useState, useEffect } from "react";
import { fetchTeacherById } from "../../hr_teachers_api/AdminHrTeachersApi";
import type { Teacher } from "../../hr_teachers_types/AdminHrTeachersTypes";

export function useAdminHrTeachersProfile(id: string) {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("academic");
  
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadProfile = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTeacherById(id);
        if (isMounted) {
          if (response.success && response.data) {
            setTeacher(response.data);
          } else {
            setError("Teacher not found.");
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load teacher profile.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadProfile();
    return () => { isMounted = false; };
  }, [id]);

  const openAssignmentModal = () => setIsAssignmentModalOpen(true);
  const closeAssignmentModal = () => setIsAssignmentModalOpen(false);

  return {
    teacher,
    isLoading,
    error,
    activeTab,
    setActiveTab,
    isAssignmentModalOpen,
    openAssignmentModal,
    closeAssignmentModal
  };
}
