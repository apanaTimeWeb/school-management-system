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

    </div>
  );
}
