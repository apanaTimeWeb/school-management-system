"use client";

import React, { useState } from "react";
import NoticeBoard from "./communication_components/NoticeBoard";
import SendCommunication from "./communication_components/SendCommunication";
import NotificationTemplates from "./communication_components/NotificationTemplates";
import CommunicationHistory from "./communication_components/CommunicationHistory";
import { Megaphone, Send, FileText, History } from "lucide-react";
import clsx from "clsx";
import MissingFeaturesUI from './MissingFeaturesUI';

const tabs = [
  { id: "notice", label: "Notice Board & Announcements", icon: Megaphone },
  { id: "send", label: "Send Communication", icon: Send },
  { id: "templates", label: "Notification Templates", icon: FileText },
  { id: "history", label: "Communication History", icon: History },
];

export default function CommunicationPage() {
  const [activeTab, setActiveTab] = useState("notice");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Communication Center</h1>
          <p className="text-sm text-text-secondary mt-1">Manage notice boards and broadcast SMS, Email, WhatsApp, and Push notifications.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-lg p-1 w-fit shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-6">
        {activeTab === "notice" && <NoticeBoard />}
        {activeTab === "send" && <SendCommunication />}
        {activeTab === "templates" && <NotificationTemplates />}
        {activeTab === "history" && <CommunicationHistory />}
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
