"use client";

import { useState, useEffect, useCallback } from "react";
import { executeSearch } from "../hr_search_api/AdminHrSearchApi";
import type { EmployeeSearchResult, SearchFiltersState } from "../hr_search_types/AdminHrSearchTypes";

const initialFilters: SearchFiltersState = {
  keyword: "", department: "All", designation: "All", employmentType: "All",
  joiningDateFrom: "", joiningDateTo: "", status: "All", qualification: "All",
  location: "All", documentStatus: "All"
};

export function useAdminHrSearch() {
  const [filters, setFilters] = useState<SearchFiltersState>(initialFilters);
  const [results, setResults] = useState<EmployeeSearchResult[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  // Modal State
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<EmployeeSearchResult | null>(null);

  const fetchResults = useCallback(async () => {
    setIsSearching(true);
    try {
      const res = await executeSearch(filters);
      if (res.success) {
        setResults(res.data);
        setTotalCount(res.totalCount);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSearching(false);
    }
  }, [filters]);

  // Debounced search on filter change
  useEffect(() => {
    const timer = setTimeout(() => fetchResults(), 400);
    return () => clearTimeout(timer);
  }, [filters, fetchResults]);

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const openProfile = (profile: EmployeeSearchResult) => {
    setSelectedProfile(profile);
    setIsProfileModalOpen(true);
  };
  const closeProfile = () => {
    setIsProfileModalOpen(false);
    setSelectedProfile(null);
  };

  return {
    filters, setFilters, clearFilters,
    results, totalCount, isSearching,
    isProfileModalOpen, selectedProfile, openProfile, closeProfile
  };
}
