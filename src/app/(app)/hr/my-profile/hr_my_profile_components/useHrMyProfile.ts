"use client";

import { useState, useEffect } from "react";
import { fetchMyProfile, updateMyProfile } from "../hr_my_profile_api/HrMyProfileApi";
import type { UserProfileData } from "../hr_my_profile_types/HrMyProfileTypes";

export function useHrMyProfile() {
  const [activeTab, setActiveTab] = useState<'Profile' | 'Security' | 'Sessions'>('Profile');
  
  const [profile, setProfile] = useState<UserProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // 2FA Modal State
  const [is2FAModalOpen, setIs2FAModalOpen] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    setIsLoading(true);
    try {
      const res = await fetchMyProfile();
      if (res.success) {
        setProfile(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileSave = async (updated: UserProfileData) => {
    try {
      const res = await updateMyProfile(updated);
      if (res.success) {
        setProfile(res.data);
        alert("Profile updated successfully!");
      }
    } catch (e) {
      console.error(e);
      alert("Failed to update profile.");
    }
  };

  const handle2FAToggle = () => {
    if (profile?.is2FAEnabled) {
      // Prompt to disable
      if (window.confirm("Are you sure you want to disable 2FA? This will reduce your account security.")) {
        handleProfileSave({ ...profile, is2FAEnabled: false });
      }
    } else {
      // Open Setup Modal
      setIs2FAModalOpen(true);
    }
  };

  const complete2FASetup = () => {
    if (profile) {
      handleProfileSave({ ...profile, is2FAEnabled: true });
    }
    setIs2FAModalOpen(false);
  };

  return {
    activeTab, setActiveTab,
    profile, setProfile, isLoading,
    handleProfileSave,
    is2FAModalOpen, setIs2FAModalOpen, handle2FAToggle, complete2FASetup
  };
}

