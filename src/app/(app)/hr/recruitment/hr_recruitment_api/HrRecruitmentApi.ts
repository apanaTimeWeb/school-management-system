import type { JobPosition, CandidateApplication, FetchJobsParams, FetchApplicationsParams, RecruitmentResponse } from '../hr_recruitment_types/HrRecruitmentTypes';
import { MOCK_JOB_POSITIONS, MOCK_APPLICATIONS } from '../hr_recruitment_constants/HrRecruitmentConstants';

export async function fetchJobPositions(params?: FetchJobsParams): Promise<RecruitmentResponse<JobPosition[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_JOB_POSITIONS];

  if (params?.status && params.status !== "All") {
    filtered = filtered.filter(j => j.status === params.status);
  }
  if (params?.department && params.department !== "All") {
    filtered = filtered.filter(j => j.department === params.department);
  }
  
  return { success: true, data: filtered };
}

export async function fetchApplications(params?: FetchApplicationsParams): Promise<RecruitmentResponse<CandidateApplication[]>> {
  await new Promise(resolve => setTimeout(resolve, 600));
  let filtered = [...MOCK_APPLICATIONS];

  if (params?.status && params.status !== "All") {
    filtered = filtered.filter(a => a.status === params.status);
  }
  if (params?.jobId && params.jobId !== "All") {
    filtered = filtered.filter(a => a.jobId === params.jobId);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(a => 
      a.firstName.toLowerCase().includes(q) || 
      a.lastName.toLowerCase().includes(q) ||
      a.email.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}

