import type { AuditLog, AuditFiltersState, AuditResponse } from '../hr_audit_types/HrAuditTypes';
import { MOCK_AUDIT_LOGS } from '../hr_audit_constants/HrAuditConstants';

export async function fetchAuditLogs(filters: AuditFiltersState): Promise<AuditResponse<AuditLog[]>> {
  await new Promise(resolve => setTimeout(resolve, 400)); // Simulate API delay
  
  let results = [...MOCK_AUDIT_LOGS];

  if (filters.actionType && filters.actionType !== "All") {
    results = results.filter(r => r.action === filters.actionType);
  }
  
  if (filters.searchStr) {
    const q = filters.searchStr.toLowerCase();
    results = results.filter(r => 
      r.targetEmployeeName.toLowerCase().includes(q) || 
      r.targetEmployeeId.toLowerCase().includes(q) ||
      r.performedBy.toLowerCase().includes(q)
    );
  }

  if (filters.dateFrom) {
    results = results.filter(r => new Date(r.timestamp) >= new Date(filters.dateFrom));
  }
  if (filters.dateTo) {
    // Add 1 day to dateTo to include the whole day
    const toDate = new Date(filters.dateTo);
    toDate.setDate(toDate.getDate() + 1);
    results = results.filter(r => new Date(r.timestamp) < toDate);
  }

  return { success: true, data: results };
}

