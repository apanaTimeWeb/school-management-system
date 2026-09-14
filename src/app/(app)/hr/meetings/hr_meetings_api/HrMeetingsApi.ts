import type { StaffMeeting, FetchMeetingParams, MeetingResponse } from '../hr_meetings_types/HrMeetingsTypes';
import { MOCK_MEETINGS } from '../hr_meetings_constants/HrMeetingsConstants';

export async function fetchMeetings(params?: FetchMeetingParams): Promise<MeetingResponse<StaffMeeting[]>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  let filtered = [...MOCK_MEETINGS];
  if (params?.status && params.status !== "All") filtered = filtered.filter(r => r.status === params.status);
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => r.title.toLowerCase().includes(q) || r.agenda.toLowerCase().includes(q));
  }
  return { success: true, data: filtered };
}

