export type PrincipalAssetStatus = 'In Use' | 'Available' | 'Maintenance' | 'Lost/Damaged';

export interface PrincipalAsset {
  id: string;
  assetId: string;
  name: string;
  category: 'Electronics' | 'Furniture' | 'Sports' | 'Lab Equipment' | 'Other';
  quantity: number;
  totalQuantity: number;
  status: PrincipalAssetStatus;
  allocatedTo?: string; // Room No or Staff Name
  lastMaintained?: string;
}

export type PrincipalInventoryIssueStatus = 'Pending Review' | 'Resolved' | 'Action Taken';

export interface PrincipalInventoryIssue {
  id: string;
  assetName: string;
  assetId: string;
  reportedBy: string;
  dateReported: string;
  issueType: 'Damaged' | 'Lost' | 'Requires Repair';
  description: string;
  status: PrincipalInventoryIssueStatus;
  resolutionNote?: string;
}

export interface PrincipalInventoryStats {
  totalAssetsValue: string; // Formatting string e.g. "₹ 15,40,000"
  lowStockItems: number;
  itemsInMaintenance: number;
  damagedItemsThisMonth: number;
}
