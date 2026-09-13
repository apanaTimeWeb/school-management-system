"use client";
// RESPONSIBILITY: Main client orchestrator for the Principal Dashboard, fetching data and arranging layout.
import React, { useState, useEffect } from 'react';
import PrincipalDashboardKPIs from './PrincipalDashboardKPIs';
import PrincipalDashboardFinancials from './PrincipalDashboardFinancials';
import PrincipalDashboardAcademics from './PrincipalDashboardAcademics';
import PrincipalDashboardOperations from './PrincipalDashboardOperations';
import PrincipalDashboardAbsentees from './PrincipalDashboardAbsentees';
import PrincipalDashboardActivities from './PrincipalDashboardActivities';
import PrincipalDashboardQuickActions from './PrincipalDashboardQuickActions';

import {
  fetchPrincipalDashboardKPIs,
  fetchPrincipalDashboardAbsentees,
  fetchPrincipalDashboardFinancials,
  fetchPrincipalDashboardAcademics,
  fetchPrincipalDashboardExams,
  fetchPrincipalDashboardEvents,
  fetchPrincipalDashboardLeaves,
  fetchPrincipalDashboardAlerts,
  fetchPrincipalDashboardNotices,
  fetchPrincipalDashboardActivities
} from '../dashboard_api/PrincipalDashboardApi';

export default function PrincipalDashboardMain() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // In a real app with TanStack Query, these would be separate useQuery hooks.
    // Here we simulate parallel fetching for the skeleton state.
    const loadData = async () => {
      try {
        const [
          kpis, absentees, financials, academics, exams, events, leaves, alerts, notices, activities
        ] = await Promise.all([
          fetchPrincipalDashboardKPIs(),
          fetchPrincipalDashboardAbsentees(),
          fetchPrincipalDashboardFinancials(),
          fetchPrincipalDashboardAcademics(),
          fetchPrincipalDashboardExams(),
          fetchPrincipalDashboardEvents(),
          fetchPrincipalDashboardLeaves(),
          fetchPrincipalDashboardAlerts(),
          fetchPrincipalDashboardNotices(),
          fetchPrincipalDashboardActivities()
        ]);

        setData({
          kpis, absentees, financials, academics, exams, events, leaves, alerts, notices, activities
        });
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {/* Top Header / Action Bar area is assumed to be handled by app shell layout, 
          but we can add a local title if needed. We assume App Shell handles Page Title. */}
          
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary">Principal Dashboard</h1>
          <p className="text-[14px] text-text-secondary mt-1">Welcome back! Here's the overview of your school.</p>
        </div>
      </div>

      {/* Row 1: KPIs */}
      <PrincipalDashboardKPIs data={data.kpis} isLoading={loading} />

      {/* Row 2: Charts and Absentees */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PrincipalDashboardFinancials data={data.financials || []} isLoading={loading} />
        </div>
        <div className="lg:col-span-1">
          <PrincipalDashboardAbsentees data={data.absentees || []} isLoading={loading} />
        </div>
      </div>

      {/* Row 3: Academics & Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PrincipalDashboardAcademics performanceData={data.academics || []} examsData={data.exams || []} isLoading={loading} />
        <PrincipalDashboardOperations 
          notices={data.notices || []} 
          alerts={data.alerts || []} 
          leaves={data.leaves || []} 
          events={data.events || []} 
          isLoading={loading} 
        />
      </div>

      {/* Row 4: Timeline and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-10">
        <div className="lg:col-span-2">
          <PrincipalDashboardActivities data={data.activities || []} isLoading={loading} />
        </div>
        <div className="lg:col-span-1">
          <PrincipalDashboardQuickActions />
        </div>
      </div>

    </div>
  );
}
