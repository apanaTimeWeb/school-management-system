import type { StudentLeaveData } from '../student_leave_types/student_leave_types';

export const MOCK_LEAVE_DATA: StudentLeaveData = {
  leaveHistory: [
    {
      id: "lv_1",
      leaveType: "Sick Leave",
      startDate: "2024-08-12",
      endDate: "2024-08-14",
      reason: "Suffering from high fever and doctor advised rest for 3 days.",
      hasAttachment: true,
      status: "Approved",
      appliedOn: "2024-08-11",
      approverRemarks: "Take care and get well soon. Submit medical certificate upon return.",
      workflowStep: "Completed"
    },
    {
      id: "lv_2",
      leaveType: "Casual Leave",
      startDate: "2024-09-01",
      endDate: "2024-09-02",
      reason: "Attending a family wedding out of town.",
      hasAttachment: false,
      status: "Rejected",
      appliedOn: "2024-08-25",
      approverRemarks: "Leaves cannot be granted during the pre-board examination week.",
      workflowStep: "Completed"
    },
    {
      id: "lv_3",
      leaveType: "Emergency",
      startDate: "2024-10-05",
      endDate: "2024-10-05",
      reason: "Urgent dental appointment.",
      hasAttachment: false,
      status: "Pending",
      appliedOn: "Today",
      workflowStep: "Class Teacher"
    }
  ]
};
