import type { StudentRequestsData } from '../student_requests_types/student_requests_types';

export const MOCK_REQUESTS_DATA: StudentRequestsData = {
  requests: [
    {
      id: "req_1",
      category: "Leave Request",
      title: "Sick Leave Application",
      description: "Requesting leave for 2 days due to viral fever.",
      dateSubmitted: "Oct 12, 2024",
      status: "Approved",
      adminRemark: "Get well soon."
    },
    {
      id: "req_2",
      category: "Bonafide Request",
      title: "Bonafide for Bank Account",
      description: "Need a bonafide certificate to open a student bank account at SBI.",
      dateSubmitted: "Oct 15, 2024",
      status: "Under Review"
    },
    {
      id: "req_3",
      category: "Document Request",
      title: "Previous Year Marksheet",
      description: "Require a stamped copy of Class 9 final marksheet.",
      dateSubmitted: "Sep 20, 2024",
      status: "Completed",
      adminRemark: "Collected from the admin desk."
    },
    {
      id: "req_4",
      category: "Other",
      title: "Change of Transport Route",
      description: "Moving to a new address next month. Requesting bus route change to Route 5.",
      dateSubmitted: "Today",
      status: "Pending"
    }
  ]
};
