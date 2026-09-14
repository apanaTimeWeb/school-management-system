export type HRAssetRecord = {
  id: string;
  assetName: string;
  assetType: 'Laptop' | 'Mobile' | 'Furniture' | 'Other';
  assignedTo: string;
  assignedDate: string;
  condition: 'Good' | 'Fair' | 'Poor';
  status: 'Assigned' | 'Returned' | 'In Repair';
};
