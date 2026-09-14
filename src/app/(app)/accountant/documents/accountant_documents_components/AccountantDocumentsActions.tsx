"use client";
import React from "react";
import { Search, UploadCloud } from "lucide-react";
import { useAccountantDocumentsStore } from "../accountant_documents_store/useAccountantDocumentsStore";
import { DOCUMENT_CATEGORIES } from "../accountant_documents_utils/AccountantDocumentsConstants";
import { DocumentCategory } from "../accountant_documents_types/AccountantDocumentsTypes";

export default function AccountantDocumentsActions() {
  const { 
    searchQuery, setSearchQuery, 
    categoryFilter, setCategoryFilter,
    setUploadModalOpen
  } = useAccountantDocumentsStore();

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search files or reference ID..." 
            className="w-full bg-bg-input border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-primary focus:border-primary outline-none transition-colors"
          />
        </div>

        <select 
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value as DocumentCategory | 'All')}
          className="bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none cursor-pointer w-full sm:w-auto"
        >
          <option value="All">All Categories</option>
          {DOCUMENT_CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button 
        onClick={() => setUploadModalOpen(true)}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors"
      >
        <UploadCloud size={18} /> Upload Document
      </button>

    </div>
  );
}
