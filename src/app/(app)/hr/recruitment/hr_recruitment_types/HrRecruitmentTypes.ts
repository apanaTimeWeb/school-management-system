export type PipelineStatus = 'Applied' | 'Shortlisted' | 'Interview Scheduled' | 'Interviewed' | 'Selected' | 'Rejected' | 'Joined';

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  vacancies: number;
  filled: number;
  status: 'Open' | 'Closed' | 'On Hold';
  postedDate: string;
}

export interface RecruitmentHistory {
  date: string;
  action: string;
  note: string;
}

export interface CandidateApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experienceYears: number;
  highestQualification: string;
  appliedDate: string;
  status: PipelineStatus;
  resumeUrl: string;
  
  // Interview specifics
  interviewDate?: string;
  interviewTime?: string;
  interviewFeedback?: string;
  
  history: RecruitmentHistory[];
}

export interface FetchJobsParams {
  status?: string;
  department?: string;
}

export interface FetchApplicationsParams {
  status?: string;
  jobId?: string;
  search?: string;
}

export interface RecruitmentResponse<T> {
  success: boolean;
  data: T;
}
