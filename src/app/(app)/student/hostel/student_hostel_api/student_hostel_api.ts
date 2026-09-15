import { MOCK_HOSTEL_DATA } from '../student_hostel_constants/student_hostel_constants';
import type { StudentHostelData, HostelLeave, VisitorInfo } from '../student_hostel_types/student_hostel_types';

/**
 * RESPONSIBILITY: Fetches hostel details and handles form submissions.
 */
export async function fetchStudentHostelData(): Promise<{ data: StudentHostelData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Hostel data fetched successfully",
    data: MOCK_HOSTEL_DATA,
  };
}

export async function submitHostelLeave(payload: Partial<HostelLeave>): Promise<{ success: boolean, message: string, data?: HostelLeave }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const newLeave: HostelLeave = {
    id: "hl_new_" + Date.now(),
    leaveType: payload.leaveType as any,
    startDate: payload.startDate!,
    endDate: payload.endDate!,
    reason: payload.reason!,
    status: "Pending"
  };

  return { success: true, message: "Hostel leave application submitted.", data: newLeave };
}

export async function submitVisitorPass(payload: Partial<VisitorInfo>): Promise<{ success: boolean, message: string, data?: VisitorInfo }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const newVisitor: VisitorInfo = {
    id: "vis_new_" + Date.now(),
    visitorName: payload.visitorName!,
    relation: payload.relation!,
    visitDate: payload.visitDate!,
    timeSlot: payload.timeSlot!,
    status: "Pending"
  };

  return { success: true, message: "Visitor pass request submitted.", data: newVisitor };
}
