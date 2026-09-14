export type OnboardingStatus = 'Initiated' | 'Documents Pending' | 'In Review' | 'System Setup' | 'Completed';

export interface OnboardingDocument {
  id: string;
  name: string;
  isUploaded: boolean;
  isVerified: boolean;
  fileUrl?: string;
}

export interface JoiningChecklist {
  id: string;
  task: string;
  isCompleted: boolean;
}

export interface OnboardingCandidate {
  id: string;
  tempId: string;
  finalEmployeeId: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  departmentAssignment: string;
  designation: string;
  joiningDate: string;
  
  status: OnboardingStatus;
  
  documents: OnboardingDocument[];
  checklist: JoiningChecklist[];
  
  systemAccessGranted: boolean;
}

export interface FetchOnboardingParams {
  status?: string;
  search?: string;
}

export interface OnboardingResponse<T> {
  success: boolean;
  data: T;
}
