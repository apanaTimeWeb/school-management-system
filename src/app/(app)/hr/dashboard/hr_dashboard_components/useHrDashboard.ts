"use client";

// RESPONSIBILITY: Custom hook to isolate data fetching and state management for the HR dashboard.

import { useState, useEffect } from "react";
import { fetchHrDashboardStats } from "../hr_dashboard_api/HrDashboardApi";
import type { HrDashboardStats } from "../hr_dashboard_types/HrDashboardTypes";

export function useHrDashboard() {
  const [stats, setStats] = useState<HrDashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetchHrDashboardStats();
        if (isMounted) {
          if (response.success && response.data) {
            setStats(response.data);
          } else {
            setError(response.message || "Failed to load dashboard data");
          }
        }
      } catch (err) {
        if (isMounted) {
          setError("An unexpected error occurred while fetching data.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return { stats, isLoading, error };
}

