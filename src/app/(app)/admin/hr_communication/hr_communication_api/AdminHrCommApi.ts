import type { CommMessage, CommChannelConfig, FetchCommParams, CommResponse } from '../hr_communication_types/AdminHrCommTypes';
import { MOCK_MESSAGES, MOCK_CHANNELS } from '../hr_communication_constants/AdminHrCommConstants';

export async function fetchInbox(params?: FetchCommParams): Promise<CommResponse<CommMessage[]>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  let filtered = [...MOCK_MESSAGES];
  if (params?.category && params.category !== "All") filtered = filtered.filter(r => r.category === params.category);
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => r.subject.toLowerCase().includes(q) || r.message.toLowerCase().includes(q));
  }
  return { success: true, data: filtered };
}

export async function fetchChannels(): Promise<CommResponse<CommChannelConfig[]>> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return { success: true, data: MOCK_CHANNELS };
}
