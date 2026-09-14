import type { EmployeeVault, DocumentAlert, FetchVaultParams, DocumentsResponse } from '../hr_documents_types/AdminHrDocumentsTypes';
import { MOCK_VAULT_LIST, MOCK_DOCUMENT_ALERTS } from '../hr_documents_constants/AdminHrDocumentsConstants';

export async function fetchVaultList(params?: FetchVaultParams): Promise<DocumentsResponse<EmployeeVault[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_VAULT_LIST];

  if (params?.department && params.department !== "All") {
    filtered = filtered.filter(v => v.department === params.department);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(v => 
      v.firstName.toLowerCase().includes(q) || 
      v.lastName.toLowerCase().includes(q) ||
      v.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}

export async function fetchDocumentAlerts(): Promise<DocumentsResponse<DocumentAlert[]>> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return { success: true, data: MOCK_DOCUMENT_ALERTS };
}
