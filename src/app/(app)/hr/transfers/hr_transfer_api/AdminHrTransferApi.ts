import type { TransferRequest, FetchTransferParams, TransferResponse } from '../hr_transfer_types/AdminHrTransferTypes';
import { MOCK_TRANSFER_REQUESTS } from '../hr_transfer_constants/AdminHrTransferConstants';

export async function fetchTransferRequests(params?: FetchTransferParams): Promise<TransferResponse<TransferRequest[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_TRANSFER_REQUESTS].filter(r => r.status === 'Pending Approval' || r.status === 'Approved');

  if (params?.type && params.type !== "All") {
    filtered = filtered.filter(r => r.type === params.type);
  }
  if (params?.status && params.status !== "All") {
    filtered = filtered.filter(r => r.status === params.status);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => 
      r.employeeName.toLowerCase().includes(q) || 
      r.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}

export async function fetchTransferHistory(params?: FetchTransferParams): Promise<TransferResponse<TransferRequest[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_TRANSFER_REQUESTS].filter(r => r.status === 'Completed' || r.status === 'Rejected');

  if (params?.type && params.type !== "All") {
    filtered = filtered.filter(r => r.type === params.type);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => 
      r.employeeName.toLowerCase().includes(q) || 
      r.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}
