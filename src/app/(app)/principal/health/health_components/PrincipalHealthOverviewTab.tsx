"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalHealthStats } from '../health_types/PrincipalHealth.types';
import { fetchPrincipalHealthStats } from '../health_api/PrincipalHealthApi';
import { HeartPulse, Stethoscope, AlertTriangle, Activity } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalHealthOverviewTab() {
  const [stats, setStats] = useState<PrincipalHealthStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalHealthStats().then(data => {
      if (isMounted) {
        setStats(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => <div key={i} className="h-40 bg-skeleton-base animate-pulse rounded-xl" />)}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-primary"><Activity size={48}/></div>
          <p className="text-[13px] text-text-secondary font-bold mb-1">Total Students</p>
          <h3 className="text-[24px] font-bold text-text-primary">{stats.totalStudents.toLocaleString()}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Active student health profiles</p>
        </div>

        <div className="bg-card border border-success/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-success"><Stethoscope size={48}/></div>
          <p className="text-[13px] text-success font-bold mb-1">Checkups Completed</p>
          <h3 className="text-[24px] font-bold text-success">{stats.studentsWithCheckups.toLocaleString()}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Annual health screening done</p>
        </div>

        <div className="bg-card border border-warning/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-warning"><AlertTriangle size={48}/></div>
          <p className="text-[13px] text-warning font-bold mb-1">Active Medical Alerts</p>
          <h3 className="text-[24px] font-bold text-warning">{stats.activeMedicalAlerts}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Requires special attention</p>
        </div>

        <div className="bg-card border border-danger/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-danger"><HeartPulse size={48}/></div>
          <p className="text-[13px] text-danger font-bold mb-1">Emergencies (This Month)</p>
          <h3 className="text-[24px] font-bold text-danger">{stats.emergenciesThisMonth}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Major medical incidents</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><Stethoscope className="text-info"/> Recent Health Checkups</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <div>
                <p className="text-[14px] font-bold text-text-primary">Annual Dental Checkup (Class 1-5)</p>
                <p className="text-[12px] text-text-secondary">Completed on 10th Oct 2023</p>
              </div>
              <span className="text-[11px] font-bold bg-success/10 text-success px-2 py-0.5 rounded border border-success/20">Completed</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <div>
                <p className="text-[14px] font-bold text-text-primary">Eye & Vision Test (Class 6-10)</p>
                <p className="text-[12px] text-text-secondary">Scheduled for 15th Nov 2023</p>
              </div>
              <span className="text-[11px] font-bold bg-warning/10 text-warning px-2 py-0.5 rounded border border-warning/20">Upcoming</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><AlertTriangle className="text-warning"/> Critical Medical Alerts</h3>
          <div className="space-y-3">
             <div className="p-3 bg-danger/5 border border-danger/20 rounded-lg">
                <p className="text-[13px] font-bold text-danger mb-1">Severe Peanut Allergy</p>
                <p className="text-[12px] text-text-secondary">Aarav Sharma (10-A) requires immediate EpiPen access.</p>
             </div>
             <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                <p className="text-[13px] font-bold text-warning mb-1">Asthma Patients List Updated</p>
                <p className="text-[12px] text-text-secondary">Teachers advised to monitor 12 students during PT classes.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
