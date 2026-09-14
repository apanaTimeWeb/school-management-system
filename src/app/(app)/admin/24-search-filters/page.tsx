"use client";

import React, { useState } from "react";
import PeopleSearch from "./search_components/PeopleSearch";
import FinanceSearch from "./search_components/FinanceSearch";
import AcademicSearch from "./search_components/AcademicSearch";
import DocumentSearch from "./search_components/DocumentSearch";
import { Users, IndianRupee, BookOpen, FileText } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "people", label: "Global People Search", icon: Users },
  { id: "finance", label: "Finance & Fees", icon: IndianRupee },
  { id: "academic", label: "Academic Records", icon: BookOpen },
  { id: "documents", label: "Documents & Certificates", icon: FileText },
];

export default function SearchFiltersPage() {
  const [activeTab, setActiveTab] = useState("people");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Search & Filters</h1>
          <p className="text-sm text-text-secondary mt-1">Global search engine to quickly find any record across the entire ERP.</p>
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
        {activeTab === "people" && <PeopleSearch />}
        {activeTab === "finance" && <FinanceSearch />}
        {activeTab === "academic" && <AcademicSearch />}
        {activeTab === "documents" && <DocumentSearch />}
      </div>
    </div>
  );
}
