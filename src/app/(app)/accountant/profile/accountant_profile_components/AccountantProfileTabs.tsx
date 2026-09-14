"use client";
import React from "react";
import { User, ShieldCheck, History } from "lucide-react";
import { useAccountantProfileStore } from "../accountant_profile_store/useAccountantProfileStore";
import { ProfileTab } from "../accountant_profile_types/AccountantProfileTypes";
import clsx from "clsx";

export default function AccountantProfileTabs() {
  const { activeTab, setActiveTab } = useAccountantProfileStore();

  const tabs: { id: ProfileTab; label: string; icon: React.ReactNode }[] = [
    { id: 'Profile', label: 'Personal Details', icon: <User size={18} /> },
    { id: 'Security', label: 'Security & 2FA', icon: <ShieldCheck size={18} /> },
    { id: 'History', label: 'Login History', icon: <History size={18} /> },
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-2 flex flex-row gap-2 overflow-x-auto custom-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={clsx(
            "flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold transition-all whitespace-nowrap flex-1 justify-center sm:justify-start",
            activeTab === tab.id 
              ? "bg-primary text-black shadow-md" 
              : "text-text-secondary hover:bg-bg-input hover:text-primary"
          )}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
