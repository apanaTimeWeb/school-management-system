import type { OfficeNotice, OfficeTask, OfficeDocument, FetchOfficeParams, OfficeResponse } from '../office_Hr_types/HrOfficeTypes';
import { MOCK_NOTICES, MOCK_TASKS, MOCK_DOCUMENTS } from '../office_Hr_constants/HrOfficeConstants';

export async function fetchNotices(params?: FetchOfficeParams): Promise<OfficeResponse<OfficeNotice[]>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  let filtered = [...MOCK_NOTICES];
  if (params?.type && params.type !== "All") filtered = filtered.filter(r => r.type === params.type);
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => r.title.toLowerCase().includes(q));
  }
  return { success: true, data: filtered };
}

export async function fetchTasks(params?: FetchOfficeParams): Promise<OfficeResponse<OfficeTask[]>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  let filtered = [...MOCK_TASKS];
  if (params?.type && params.type !== "All") filtered = filtered.filter(r => r.status === params.type);
  return { success: true, data: filtered };
}

export async function fetchDocuments(params?: FetchOfficeParams): Promise<OfficeResponse<OfficeDocument[]>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  let filtered = [...MOCK_DOCUMENTS];
  if (params?.type && params.type !== "All") filtered = filtered.filter(r => r.category === params.type);
  return { success: true, data: filtered };
}

