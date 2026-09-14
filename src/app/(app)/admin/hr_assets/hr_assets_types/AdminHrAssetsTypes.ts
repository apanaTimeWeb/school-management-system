export type AssetCategory = 'Laptop' | 'ID Card' | 'Uniform' | 'Keys' | 'Equipment' | 'Other';
export type AssetStatus = 'Assigned' | 'Returned' | 'Damaged' | 'Lost';

export interface EmployeeAsset {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  
  assetName: string;
  category: AssetCategory;
  assetIdNumber: string; // Serial Number or Barcode
  
  issueDate: string;
  expectedReturnDate: string;
  actualReturnDate?: string;
  
  status: AssetStatus;
  notes: string;
}

export interface FetchAssetParams {
  status?: string;
  search?: string;
}

export interface AssetResponse<T> {
  success: boolean;
  data: T;
}
