"use client";
import React, { useEffect, useState } from 'react';
import { UserCircle, Shield, Settings } from 'lucide-react';
import { usePrincipalProfileStore } from '../profile_store/usePrincipalProfileStore';
import { fetchPrincipalProfile } from '../profile_api/PrincipalProfileApi';
import { PrincipalProfileDetails } from '../profile_types/PrincipalProfile.types';

import PrincipalProfileDetailsTab from './PrincipalProfileDetailsTab';
import PrincipalProfileSecurityTab from './PrincipalProfileSecurityTab';
import PrincipalProfileModals from './PrincipalProfileModals';

export default function PrincipalProfileMain() {
  const { activeTab, setActiveTab } = usePrincipalProfileStore();
  const [profile, setProfile] = useState<PrincipalProfileDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalProfile().then(res => {
      if (isMounted) {
        setProfile(res);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <Settings className="text-primary" size={24} />
            My Profile & Settings
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Manage your personal information, security preferences, and active sessions.
          </p>
        </div>
      </div>

      <div className="flex border-b border-border bg-card rounded-t-lg overflow-x-auto custom-scrollbar">
        <button
          onClick={() => setActiveTab('details')}
          className={`flex items-center gap-2 px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-all border-b-2 ${
            activeTab === 'details'
              ? 'text-primary border-primary bg-primary/10'
              : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
          }`}
        >
          <UserCircle size={16} className={activeTab === 'details' ? 'text-primary' : 'text-text-secondary'}/>
          Profile Details
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-all border-b-2 ${
            activeTab === 'security'
              ? 'text-warning border-warning bg-warning/10'
              : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
          }`}
        >
          <Shield size={16} className={activeTab === 'security' ? 'text-warning' : 'text-text-secondary'}/>
          Security Settings
        </button>
      </div>

      <div className="flex-1 bg-bg-main pt-6 overflow-x-hidden">
        {loading || !profile ? (
          <div className="bg-card border border-border p-6 rounded-xl animate-pulse h-64" />
        ) : (
          <>
            {activeTab === 'details' && <PrincipalProfileDetailsTab profile={profile} />}
            {activeTab === 'security' && <PrincipalProfileSecurityTab />}
          </>
        )}
      </div>

      <PrincipalProfileModals />
    </div>
  );
}
