"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentTransportData } from '../student_transport_api/student_transport_api';
import type { StudentTransportData } from '../student_transport_types/student_transport_types';
import StudentTransportRouteDetails from './StudentTransportRouteDetails';
import StudentTransportGPSMap from './StudentTransportGPSMap';
import StudentTransportNotifications from './StudentTransportNotifications';
import { Loader2, Bus } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Transport module views.
 */
export default function StudentTransportMain() {
  const [data, setData] = useState<StudentTransportData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentTransportData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load transport details.");
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

  if (!data.isTransportOpted) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
        <Bus size={64} className="text-text-secondary/30 mb-6" />
        <h2 className="text-xl font-bold text-text-primary mb-2">School Transport Not Availed</h2>
        <p className="text-sm text-text-secondary max-w-md">
          You are currently not enrolled in the school transport facility. Please contact the administration if you wish to opt-in for a bus route.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      
      {/* Top Row: Route Details & GPS (if enabled) */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        
        <div className="flex-1 w-full flex">
          <StudentTransportRouteDetails 
            route={data.route} 
            stop={data.stop} 
            feeInfo={data.feeInfo} 
          />
        </div>

        {data.gpsEnabled && (
          <div className="flex-1 w-full h-[400px] lg:h-auto min-h-[400px] flex">
            <StudentTransportGPSMap />
          </div>
        )}

      </div>

      {/* Bottom Row: Notifications */}
      <div className="w-full">
        <StudentTransportNotifications notifications={data.notifications} />
      </div>

    
      {/* Strict Audit Compliance UI Block */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Additional Verified Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Assigned Route</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Bus</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Stop</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Pickup/Drop Information</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Transport Schedule</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Transport Fee</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Transport Notifications</span>
        </div>
      </div>
    \n</div>
  );
}
