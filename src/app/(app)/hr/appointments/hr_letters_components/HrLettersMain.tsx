"use client";

import { useHrLetters } from "./useHrLetters";
import HrLettersTabs from "./HrLettersTabs";
import HrLettersTemplates from "./HrLettersTemplates";
import HrLettersHistory from "./HrLettersHistory";
import HrLettersGeneratorModal from "./HrLettersGeneratorModal";
import { Loader2 } from "lucide-react";

export default function HrLettersMain() {
  const {
    activeTab, setActiveTab,
    templates, history, isLoading,
    histType, setHistType,
    histSearch, setHistSearch,
    selectedTemplate, openGenerator, closeGenerator,
    saveGeneratedLetter
  } = useHrLetters();

  return (
    <div className="flex flex-col w-full">
      <HrLettersTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Letter Data...</span>
        </div>
      ) : (
        <div className="w-full">
          {activeTab === 'Templates' ? (
            <HrLettersTemplates templates={templates} openGenerator={openGenerator} />
          ) : (
            <HrLettersHistory 
              history={history}
              histType={histType} setHistType={setHistType}
              histSearch={histSearch} setHistSearch={setHistSearch}
            />
          )}
        </div>
      )}

      <HrLettersGeneratorModal 
        template={selectedTemplate}
        close={closeGenerator}
        saveLetter={saveGeneratedLetter}
      />
    </div>
  );
}

