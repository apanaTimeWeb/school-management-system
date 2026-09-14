"use client";
import React from "react";
import AccountantProfileTabs from "./AccountantProfileTabs";
import AccountantProfileDetails from "./AccountantProfileDetails";
import AccountantProfileSecurity from "./AccountantProfileSecurity";
import AccountantProfileHistory from "./AccountantProfileHistory";
import { useAccountantProfileStore } from "../accountant_profile_store/useAccountantProfileStore";

export default function AccountantProfileMain() {
  const { activeTab } = useAccountantProfileStore();

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1000px] mx-auto space-y-6 h-full flex flex-col">
      
      <div className="shrink-0 mb-2">
        <h1 className="text-2xl font-bold text-text-primary">Profile & Settings</h1>
        <p className="text-sm text-text-secondary mt-1">Manage your account details and security preferences.</p>
      </div>

      <div className="shrink-0">
        <AccountantProfileTabs />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pb-10">
        {activeTab === 'Profile' && <AccountantProfileDetails />}
        {activeTab === 'Security' && <AccountantProfileSecurity />}
        {activeTab === 'History' && <AccountantProfileHistory />}
      </div>
      
    </div>
  );
}
