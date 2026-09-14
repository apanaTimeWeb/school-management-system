"use client";

import { useAdminHrLetters } from "./useAdminHrLetters";
import AdminHrLettersTabs from "./AdminHrLettersTabs";
import AdminHrLettersTemplates from "./AdminHrLettersTemplates";
import AdminHrLettersHistory from "./AdminHrLettersHistory";
import AdminHrLettersGeneratorModal from "./AdminHrLettersGeneratorModal";
import { Loader2 } from "lucide-react";

export default function AdminHrLettersMain() {
  const {
    activeTab, setActiveTab,
    templates, history, isLoading,
    histType, setHistType,
    histSearch, setHistSearch,
    selectedTemplate, openGenerator, closeGenerator,
    saveGeneratedLetter
  } = useAdminHrLetters();

  return (
    <div className="flex flex-col w-full">
      <AdminHrLettersTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Letter Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Templates' ? (
            <AdminHrLettersTemplates templates={templates} openGenerator={openGenerator} />
          ) : (
            <AdminHrLettersHistory 
              history={history}
              histType={histType} setHistType={setHistType}
              histSearch={histSearch} setHistSearch={setHistSearch}
            />
          )}
        </div>
      )}

      <AdminHrLettersGeneratorModal 
        template={selectedTemplate}
        close={closeGenerator}
        saveLetter={saveGeneratedLetter}
      />
    </div>
  );
}
