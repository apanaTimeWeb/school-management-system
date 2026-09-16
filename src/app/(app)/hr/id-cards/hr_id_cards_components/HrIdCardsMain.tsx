"use client";

import { useHrIdCards } from "./useHrIdCards";
import HrIdCardsList from "./HrIdCardsList";
import HrIdCardsPreviewModal from "./HrIdCardsPreviewModal";
import { Loader2, Badge } from "lucide-react"; // Note: Using some generic lucide icon if Badge isn't present, usually Contact or User is fine. Let's stick to standard ones if possible, but assuming standard build.

export default function HrIdCardsMain() {
  const {
    employees, isLoading,
    roleFilter, setRoleFilter,
    searchFilter, setSearchFilter,
    selectedIds, toggleSelection, toggleSelectAll,
    previewRecords, isPreviewModalOpen,
    previewSingle, previewBulk, closePreview, markAsPrinted
  } = useHrIdCards();

  return (
    <div className="flex flex-col w-full">

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Employees...</span>
        </div>
      ) : (
        <div className="w-full">
          <HrIdCardsList 
            employees={employees}
            roleFilter={roleFilter} setRoleFilter={setRoleFilter}
            searchFilter={searchFilter} setSearchFilter={setSearchFilter}
            selectedIds={selectedIds}
            toggleSelection={toggleSelection} toggleSelectAll={toggleSelectAll}
            previewSingle={previewSingle} previewBulk={previewBulk}
          />
        </div>
      )}

      <HrIdCardsPreviewModal 
        records={previewRecords}
        isOpen={isPreviewModalOpen}
        close={closePreview}
        markAsPrinted={markAsPrinted}
      />
    </div>
  );
}

