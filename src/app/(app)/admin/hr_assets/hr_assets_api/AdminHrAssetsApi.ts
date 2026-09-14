import type { EmployeeAsset, FetchAssetParams, AssetResponse } from '../hr_assets_types/AdminHrAssetsTypes';
import { MOCK_ASSETS } from '../hr_assets_constants/AdminHrAssetsConstants';

export async function fetchAssets(params?: FetchAssetParams): Promise<AssetResponse<EmployeeAsset[]>> {
  await new Promise(resolve => setTimeout(resolve, 300));
  let filtered = [...MOCK_ASSETS];
  
  if (params?.status && params.status !== "All") {
    if (params.status === 'Active') {
      filtered = filtered.filter(r => r.status === 'Assigned');
    } else if (params.status === 'History') {
      filtered = filtered.filter(r => r.status !== 'Assigned');
    }
  }

  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r => 
      r.employeeName.toLowerCase().includes(q) || 
      r.assetName.toLowerCase().includes(q) ||
      r.assetIdNumber.toLowerCase().includes(q)
    );
  }
  
  return { success: true, data: filtered };
}
