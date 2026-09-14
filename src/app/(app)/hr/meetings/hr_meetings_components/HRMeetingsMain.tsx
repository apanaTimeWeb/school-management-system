"use client";
import React from "react";
import HRMeetingsFilters from "./HRMeetingsFilters";
import HRMeetingsTable from "./HRMeetingsTable";
import HRMeetingsModals from "./HRMeetingsModals";
import { Video } from "lucide-react";

export default function HRMeetingsMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6 fade-in pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            Staff Meetings
          </h1>
          <p className="text-sm font-semibold text-text-secondary mt-1">
            Schedule and manage staff meetings and training sessions.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2">
            <Video size={18} /> Schedule Meeting
          </button>
        </div>
      </div>

      <HRMeetingsFilters />
      <HRMeetingsTable />
      <HRMeetingsModals />
    </div>
  );
}
