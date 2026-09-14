import type { OnboardingCandidate, FetchOnboardingParams, OnboardingResponse } from '../hr_onboarding_types/AdminHrOnboardingTypes';
import { MOCK_ONBOARDING_CANDIDATES } from '../hr_onboarding_constants/AdminHrOnboardingConstants';

export async function fetchOnboardingCandidates(params?: FetchOnboardingParams): Promise<OnboardingResponse<OnboardingCandidate[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_ONBOARDING_CANDIDATES];

  if (params?.status && params.status !== "All") {
    filtered = filtered.filter(c => c.status === params.status);
  }
  
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(c => 
      c.firstName.toLowerCase().includes(q) || 
      c.lastName.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}
