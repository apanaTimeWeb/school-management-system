import { PrincipalAdmissionApplication, PrincipalAdmissionFullProfile, PrincipalAdmissionsStats } from '../admissions_types/PrincipalAdmissions.types';

export const PRINCIPAL_ADMISSIONS_STATS: PrincipalAdmissionsStats = {
  totalEnquiries: 145,
  activeApplications: 89,
  pendingReviews: 24,
  interviewsScheduled: 12,
  selectedCandidates: 35,
  waitlistedCandidates: 8,
};

export const PRINCIPAL_APPLICATIONS_MOCK_LIST: PrincipalAdmissionApplication[] = [
  {
    id: 'APP-1001',
    applicationNo: '2024-001',
    applicantName: 'Kabir Das',
    appliedClass: '1',
    dateApplied: '2023-11-10',
    stage: 'Review',
    contactNo: '9876543111',
    email: 'kabirdas.parent@example.com',
    previousSchool: 'Little Champs Preschool',
    fatherName: 'Sunil Das',
    motherName: 'Meena Das'
  },
  {
    id: 'APP-1002',
    applicationNo: '2024-002',
    applicantName: 'Zara Ali',
    appliedClass: '6',
    dateApplied: '2023-11-12',
    stage: 'Interview',
    contactNo: '9876543222',
    email: 'ali.family@example.com',
    previousSchool: 'Global Public School',
    fatherName: 'Irfan Ali',
    motherName: 'Sana Ali'
  },
  {
    id: 'APP-1003',
    applicationNo: '2024-003',
    applicantName: 'Arjun Mehta',
    appliedClass: '9',
    dateApplied: '2023-11-15',
    stage: 'Document Verification',
    contactNo: '9876543333',
    email: 'arjun.mehta@example.com',
    previousSchool: 'St. Mary High',
    fatherName: 'Rajesh Mehta',
    motherName: 'Priya Mehta'
  },
  {
    id: 'APP-1004',
    applicationNo: '2024-004',
    applicantName: 'Diya Verma',
    appliedClass: '11',
    dateApplied: '2023-11-18',
    stage: 'Waitlisted',
    contactNo: '9876543444',
    email: 'verma.d@example.com',
    previousSchool: 'DAV Public School',
    fatherName: 'Amit Verma',
    motherName: 'Neha Verma'
  },
  {
    id: 'APP-1005',
    applicationNo: '2024-005',
    applicantName: 'Rohan Iyer',
    appliedClass: '1',
    dateApplied: '2023-11-20',
    stage: 'Enquiry',
    contactNo: '9876543555',
    email: 'rohan.parent@example.com',
    fatherName: 'Karthik Iyer',
    motherName: 'Lakshmi Iyer'
  }
];

export const PRINCIPAL_APPLICATION_MOCK_PROFILE: PrincipalAdmissionFullProfile = {
  application: PRINCIPAL_APPLICATIONS_MOCK_LIST[0],
  documents: [
    { id: 'DOC-01', applicationId: 'APP-1001', documentName: 'Birth Certificate', status: 'Verified' },
    { id: 'DOC-02', applicationId: 'APP-1001', documentName: 'Previous Year Marksheet', status: 'Pending', remarks: 'Blurry copy provided.' },
    { id: 'DOC-03', applicationId: 'APP-1001', documentName: 'Aadhar Card', status: 'Verified' }
  ],
  assessment: {
    id: 'ASS-01',
    applicationId: 'APP-1001',
    testScore: 85,
    maxTestScore: 100,
    testDate: '2023-11-25',
    interviewScore: 18,
    maxInterviewScore: 20,
    interviewDate: '2023-12-01',
    interviewerName: 'Ms. Anita (Coordinator)',
    remarks: 'Strong academic fundamentals. Very confident in interview.'
  },
  decision: {
    applicationId: 'APP-1001',
    decision: 'Pending',
    reason: 'Awaiting final document verification.'
  }
};
