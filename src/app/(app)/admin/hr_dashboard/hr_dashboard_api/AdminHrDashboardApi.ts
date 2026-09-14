import { HrDashboardApiResponse } from '../hr_dashboard_types/AdminHrDashboardTypes';
import { MOCK_HR_DASHBOARD_STATS } from '../hr_dashboard_constants/AdminHrDashboardConstants';

// Simulated api fetcher (Rule 72 naming)
export async function fetchHrDashboardStats(): Promise<HrDashboardApiResponse> {
  // Simulate network delay for realistic loading state
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return {
    success: true,
    message: "Dashboard stats fetched successfully",
    data: MOCK_HR_DASHBOARD_STATS
  };
}
