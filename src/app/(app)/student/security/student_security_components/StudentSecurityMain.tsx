"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentSecurityData } from '../student_security_api/student_security_api';
import type { StudentSecurityData } from '../student_security_types/student_security_types';
import StudentSecurityPassword from './StudentSecurityPassword';
import StudentSecurity2FA from './StudentSecurity2FA';
import StudentSecuritySessions from './StudentSecuritySessions';
import StudentSecurityHistory from './StudentSecurityHistory';
import { Loader2, ShieldCheck, History } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Orchestrates the Security module.
 */
export default function StudentSecurityMain() {
  const [data, setData] = useState<StudentSecurityData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'settings' | 'history'>('settings');

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentSecurityData();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load security data.");
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
    <div className="flex flex-col gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit shadow-sm">
        <button
          onClick={() => setActiveTab('settings')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'settings' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <ShieldCheck size={16} /> Security Settings
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'history' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <History size={16} /> Login History
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-5xl">
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-6">
              <StudentSecurityPassword />
              <StudentSecurity2FA 
                initialState={data.is2FAEnabled} 
                onToggle={(val) => setData({ ...data, is2FAEnabled: val })} 
              />
            </div>
            <div>
              <StudentSecuritySessions 
                sessions={data.activeSessions} 
                onUpdate={(newSessions) => setData({ ...data, activeSessions: newSessions })}
              />
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <StudentSecurityHistory history={data.loginHistory} />
        )}
      </div>

    </div>
  );
}
