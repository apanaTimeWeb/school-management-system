import type { JobPosition, CandidateApplication } from "../hr_recruitment_types/HrRecruitmentTypes";

export const MOCK_JOB_POSITIONS: JobPosition[] = [
  { id: "job-1", title: "Senior Mathematics Teacher", department: "Mathematics", location: "Main Campus", type: "Full-time", vacancies: 2, filled: 0, status: "Open", postedDate: "2024-06-01" },
  { id: "job-2", title: "Lab Assistant", department: "Science", location: "Science Block", type: "Full-time", vacancies: 1, filled: 1, status: "Closed", postedDate: "2024-05-15" },
  { id: "job-3", title: "School Counselor", department: "Administration", location: "Main Campus", type: "Part-time", vacancies: 1, filled: 0, status: "Open", postedDate: "2024-06-10" },
  { id: "job-4", title: "Physical Education Teacher", department: "Sports", location: "Sports Complex", type: "Contract", vacancies: 3, filled: 1, status: "On Hold", postedDate: "2024-06-12" },
];

export const MOCK_APPLICATIONS: CandidateApplication[] = [
  {
    id: "app-101", jobId: "job-1", jobTitle: "Senior Mathematics Teacher",
    firstName: "Ravi", lastName: "Shankar", email: "ravi.math@email.com", phone: "9876543210",
    experienceYears: 8, highestQualification: "M.Sc Mathematics, B.Ed", appliedDate: "2024-06-05",
    status: "Shortlisted", resumeUrl: "#",
    history: [
      { date: "2024-06-05", action: "Applied", note: "Application submitted via careers page." },
      { date: "2024-06-07", action: "Shortlisted", note: "Profile matches requirements." }
    ]
  },
  {
    id: "app-102", jobId: "job-1", jobTitle: "Senior Mathematics Teacher",
    firstName: "Priya", lastName: "Menon", email: "priya.m@email.com", phone: "9123456789",
    experienceYears: 4, highestQualification: "B.Sc Mathematics", appliedDate: "2024-06-06",
    status: "Rejected", resumeUrl: "#",
    history: [
      { date: "2024-06-06", action: "Applied", note: "Application submitted." },
      { date: "2024-06-08", action: "Rejected", note: "Does not meet minimum experience criteria." }
    ]
  },
  {
    id: "app-103", jobId: "job-3", jobTitle: "School Counselor",
    firstName: "Arun", lastName: "Verma", email: "arun.counselor@email.com", phone: "9988776655",
    experienceYears: 5, highestQualification: "M.A Psychology", appliedDate: "2024-06-11",
    status: "Interview Scheduled", resumeUrl: "#",
    interviewDate: "2024-06-20", interviewTime: "10:30 AM",
    history: [
      { date: "2024-06-11", action: "Applied", note: "Application received." },
      { date: "2024-06-12", action: "Shortlisted", note: "Excellent background." },
      { date: "2024-06-13", action: "Interview Scheduled", note: "Interview set for June 20th." }
    ]
  },
  {
    id: "app-104", jobId: "job-4", jobTitle: "Physical Education Teacher",
    firstName: "Suresh", lastName: "Kumar", email: "suresh.pt@email.com", phone: "9001122334",
    experienceYears: 10, highestQualification: "B.P.Ed", appliedDate: "2024-06-13",
    status: "Selected", resumeUrl: "#",
    interviewDate: "2024-06-18", interviewTime: "11:00 AM", interviewFeedback: "Excellent fitness knowledge and student handling skills.",
    history: [
      { date: "2024-06-13", action: "Applied", note: "Application received." },
      { date: "2024-06-18", action: "Interviewed", note: "Interview completed." },
      { date: "2024-06-19", action: "Selected", note: "Selected for the position. Offer letter sent." }
    ]
  }
];

