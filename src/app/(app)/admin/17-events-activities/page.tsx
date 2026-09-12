"use client";

import React, { useState } from "react";
import EventCalendar from "./events_components/EventCalendar";
import EventRegistration from "./events_components/EventRegistration";
import EventResults from "./events_components/EventResults";
import EventNotifications from "./events_components/EventNotifications";
import { CalendarDays, Users, Medal, Bell } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "calendar", label: "Events & Calendar", icon: CalendarDays },
  { id: "registration", label: "Registration & Participants", icon: Users },
  { id: "results", label: "Results & Certificates", icon: Medal },
  { id: "notifications", label: "Event Notifications", icon: Bell },
];

export default function EventsActivitiesPage() {
  const [activeTab, setActiveTab] = useState("calendar");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Events & Activities</h1>
          <p className="text-sm text-text-secondary mt-1">Manage school events, annual functions, cultural activities, and competitions.</p>
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
        {activeTab === "calendar" && <EventCalendar />}
        {activeTab === "registration" && <EventRegistration />}
        {activeTab === "results" && <EventResults />}
        {activeTab === "notifications" && <EventNotifications />}
      </div>
    </div>
  );
}
