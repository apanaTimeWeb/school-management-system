export interface PrincipalAdmissionApplication {
  id: string;
  applicationNo: string;
  applicantName: string;
  appliedClass: string;
  dateApplied: string;
  stage: 'Enquiry' | 'Applied' | 'Review' | 'Document Verification' | 'Interview' | 'Test' | 'Selected' | 'Waitlisted' | 'Approved' | 'Rejected';
  contactNo: string;
  email: string;
  previousSchool?: string;
  fatherName: string;
  motherName: string;
}

export interface PrincipalAdmissionDocument {
  id: string;
  applicationId: string;
  documentName: string;
  status: 'Pending' | 'Verified' | 'Rejected';
  remarks?: string;
}

export interface PrincipalAdmissionAssessment {
  id: string;
  applicationId: string;
  testScore?: number;
  maxTestScore?: number;
  testDate?: string;
  interviewScore?: number;
  maxInterviewScore?: number;
  interviewDate?: string;
  interviewerName?: string;
  remarks: string;
}

export interface PrincipalAdmissionDecision {
  applicationId: string;
  decision: 'Approved' | 'Rejected' | 'Waitlisted' | 'Pending';
  decisionDate?: string;
  decisionBy?: string;
  reason?: string;
}

export interface PrincipalAdmissionFullProfile {
  application: PrincipalAdmissionApplication;
  documents: PrincipalAdmissionDocument[];
  assessment: PrincipalAdmissionAssessment;
  decision: PrincipalAdmissionDecision;
}

export interface PrincipalAdmissionsStats {
  totalEnquiries: number;
  activeApplications: number;
  pendingReviews: number;
  interviewsScheduled: number;
  selectedCandidates: number;
  waitlistedCandidates: number;
}
