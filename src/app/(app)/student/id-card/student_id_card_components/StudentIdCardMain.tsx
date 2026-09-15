"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentIdCardData } from '../student_id_card_api/student_id_card_api';
import type { StudentIdCardData } from '../student_id_card_types/student_id_card_types';
import StudentIdCardDisplay from './StudentIdCardDisplay';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the ID Card module.
 */
export default function StudentIdCardMain() {
  const [data, setData] = useState<StudentIdCardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentIdCardData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load ID card.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
      <StudentIdCardDisplay data={data} />
    </div>
  );
}
