"use client";

import React, { useState } from "react";
import CMSDashboard from "./website_components/CMSDashboard";
import AnnouncementsManager from "./website_components/AnnouncementsManager";
import MediaGallery from "./website_components/MediaGallery";
import PublicEvents from "./website_components/PublicEvents";
import { Globe, Megaphone, Image as ImageIcon, Trophy } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "cms", label: "Website Content (CMS)", icon: Globe },
  { id: "announcements", label: "Announcements & News", icon: Megaphone },
  { id: "gallery", label: "Media Gallery", icon: ImageIcon },
  { id: "events", label: "Public Events & Achievements", icon: Trophy },
];

export default function WebsiteContentPage() {
  const [activeTab, setActiveTab] = useState("cms");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Website / Public Content</h1>
          <p className="text-sm text-text-secondary mt-1">Manage public-facing information, gallery, news, and announcements.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-lg p-1 w-fit shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-primary text-black shadow-sm" 
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
        {activeTab === "cms" && <CMSDashboard />}
        {activeTab === "announcements" && <AnnouncementsManager />}
        {activeTab === "gallery" && <MediaGallery />}
        {activeTab === "events" && <PublicEvents />}
      </div>
    </div>
  );
}
