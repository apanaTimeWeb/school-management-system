import { MOCK_EVENTS_DATA } from '../student_events_constants/student_events_constants';
import type { StudentEventsData, ParticipationRecord } from '../student_events_types/student_events_types';

/**
 * RESPONSIBILITY: Fetches events, participations, and results.
 */
export async function fetchStudentEvents(): Promise<{ data: StudentEventsData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Events fetched successfully",
    data: MOCK_EVENTS_DATA,
  };
}

export async function registerForEvent(eventId: string, title: string, category: any, date: string): Promise<{ success: boolean, message: string, data?: ParticipationRecord }> {
  await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate API delay
  
  const newPart: ParticipationRecord = {
    id: "part_new_" + Date.now(),
    eventId: eventId,
    eventTitle: title,
    category: category,
    date: date,
    status: "Registered"
  };

  return {
    success: true,
    message: "Successfully registered for the event.",
    data: newPart
  };
}
