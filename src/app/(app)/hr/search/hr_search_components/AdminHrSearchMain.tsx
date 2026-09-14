"use client";

import { useAdminHrSearch } from "./useAdminHrSearch";
import AdminHrSearchFilters from "./AdminHrSearchFilters";
import AdminHrSearchResults from "./AdminHrSearchResults";
import AdminHrSearchProfileModal from "./AdminHrSearchProfileModal";

export default function AdminHrSearchMain() {
  const {
    filters, setFilters, clearFilters,
    results, totalCount, isSearching,
    isProfileModalOpen, selectedProfile, openProfile, closeProfile
  } = useAdminHrSearch();

  return (
    <div className="flex flex-col w-full">
      
      <AdminHrSearchFilters 
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
      />

      <AdminHrSearchResults 
        results={results}
        totalCount={totalCount}
        isSearching={isSearching}
        openProfile={openProfile}
      />

      <AdminHrSearchProfileModal 
        profile={selectedProfile}
        isOpen={isProfileModalOpen}
        close={closeProfile}
      />

    </div>
  );
}
