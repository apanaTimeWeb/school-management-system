export type AssetCategory = 'Furniture' | 'Electrical' | 'Plumbing' | 'Appliance' | 'Other';
export type AssetStatus = 'Working' | 'Damaged' | 'Sent for Repair' | 'Replaced';
export type AssetLocationType = 'Room' | 'Common Area' | 'Washroom' | 'Corridor';

export interface HostelAsset {
  id: string;
  assetName: string;
  category: AssetCategory;
  locationType: AssetLocationType;
  locationDetail: string; // e.g. "Room 101" or "Ground Floor Lounge"
  status: AssetStatus;
  purchaseDate?: string;
  assignedToStudentId?: string;
  assignedToStudentName?: string;
  lastInspectionDate: string;
  notes: string;
}
