import { MOCK_LEAVE_DATA } from '../student_leave_constants/student_leave_constants';
import type { StudentLeaveData, LeaveRequest } from '../student_leave_types/student_leave_types';

/**
 * RESPONSIBILITY: Fetches leave history and handles submitting new leave applications.
 */
export async function fetchStudentLeaveData(): Promise<{ data: StudentLeaveData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Data fetched successfully",
    data: MOCK_LEAVE_DATA,
  };
}

export async function submitLeaveApplication(payload: Partial<LeaveRequest>): Promise<{ success: boolean, message: string, data?: LeaveRequest }> {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API delay
  
  const newLeave: LeaveRequest = {
    id: "lv_new_" + Date.now(),
    leaveType: payload.leaveType as any,
    startDate: payload.startDate!,
    endDate: payload.endDate!,
    reason: payload.reason!,
    hasAttachment: payload.hasAttachment || false,
    status: 'Pending',
    appliedOn: "Just Now",
    workflowStep: "Class Teacher"
  };

  return {
    success: true,
    message: "Leave application submitted successfully.",
    data: newLeave
  };
}
