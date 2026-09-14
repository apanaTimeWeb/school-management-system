import type { IdCardEmployeeRecord, FetchIdCardParams, IdCardResponse } from '../hr_id_cards_types/AdminHrIdCardsTypes';
import { MOCK_IDCARD_RECORDS } from '../hr_id_cards_constants/AdminHrIdCardsConstants';

export async function fetchEmployeesForIdCards(params?: FetchIdCardParams): Promise<IdCardResponse<IdCardEmployeeRecord[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_IDCARD_RECORDS];

  if (params?.role && params.role !== "All") {
    filtered = filtered.filter(r => r.role === params.role);
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
