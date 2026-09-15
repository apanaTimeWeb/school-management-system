"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentProfile } from '../student_profile_api/student_profile_api';
import type { StudentFullProfile } from '../student_profile_types/student_profile_types';
import StudentProfileHeader from './StudentProfileHeader';
import StudentProfileAcademicDetails from './StudentProfileAcademicDetails';
import StudentProfilePersonalDetails from './StudentProfilePersonalDetails';
import StudentProfileIdCard from './StudentProfileIdCard';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the My Profile view for the student.
 */
export default function StudentProfileMain() {
  const [profile, setProfile] = useState<StudentFullProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentProfile();
        if (isMounted) {
          if (response.success) {
            setProfile(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load profile data.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-8 h-8" />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "Profile not found."}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      
      {/* Top Header Section */}
      <StudentProfileHeader profile={profile} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Left/Main Column */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <StudentProfileAcademicDetails profile={profile} />
          <StudentProfilePersonalDetails profile={profile} />
        </div>

        {/* Right Column for ID Card */}
        <div className="flex flex-col gap-6">
          <StudentProfileIdCard profile={profile} />
        </div>
      </div>

    </div>
  );
}
