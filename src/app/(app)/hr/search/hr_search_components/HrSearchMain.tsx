"use client";

import { useHrSearch } from "./useHrSearch";
import HrSearchFilters from "./HrSearchFilters";
import HrSearchResults from "./HrSearchResults";
import HrSearchProfileModal from "./HrSearchProfileModal";

export default function HrSearchMain() {
  const {
    filters, setFilters, clearFilters,
    results, totalCount, isSearching,
    isProfileModalOpen, selectedProfile, openProfile, closeProfile
  } = useHrSearch();

  return (
    <div className="flex flex-col w-full">
      
      <HrSearchFilters 
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />

      <HrSearchResults 
        results={results}
        totalCount={totalCount}
        isSearching={isSearching}
        openProfile={openProfile}
      />

      <HrSearchProfileModal 
        profile={selectedProfile}
        isOpen={isProfileModalOpen}
        close={closeProfile}
      />

    </div>
  );
}

