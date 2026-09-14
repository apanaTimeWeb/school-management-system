import type { EmployeeSearchResult, SearchFiltersState, SearchResponse } from '../hr_search_types/AdminHrSearchTypes';
import { MOCK_SEARCH_DATABASE } from '../hr_search_constants/AdminHrSearchConstants';

export async function executeSearch(filters: SearchFiltersState): Promise<SearchResponse<EmployeeSearchResult[]>> {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  
  let results = [...MOCK_SEARCH_DATABASE];

  if (filters.keyword) {
    const q = filters.keyword.toLowerCase();
    results = results.filter(r => r.name.toLowerCase().includes(q) || r.employeeId.toLowerCase().includes(q));
  }
  
  if (filters.department && filters.department !== "All") {
    results = results.filter(r => r.department === filters.department);
  }
  if (filters.designation && filters.designation !== "All") {
    results = results.filter(r => r.designation === filters.designation);
  }
  if (filters.employmentType && filters.employmentType !== "All") {
    results = results.filter(r => r.employmentType === filters.employmentType);
  }
  if (filters.status && filters.status !== "All") {
    results = results.filter(r => r.status === filters.status);
  }
  if (filters.qualification && filters.qualification !== "All") {
    results = results.filter(r => r.qualification.includes(filters.qualification));
  }
  if (filters.location && filters.location !== "All") {
    results = results.filter(r => r.location === filters.location);
  }
  if (filters.documentStatus && filters.documentStatus !== "All") {
    results = results.filter(r => r.documentStatus === filters.documentStatus);
  }
  if (filters.joiningDateFrom) {
    results = results.filter(r => new Date(r.joiningDate) >= new Date(filters.joiningDateFrom));
  }
  if (filters.joiningDateTo) {
    results = results.filter(r => new Date(r.joiningDate) <= new Date(filters.joiningDateTo));
  }

  return { success: true, data: results, totalCount: results.length };
}
