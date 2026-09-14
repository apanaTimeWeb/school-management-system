import { HRAssetRecord } from '../hr_assets_types/HRAssetsTypes';

export const MOCK_HR_ASSETS: HRAssetRecord[] = [
  {
    id: "AST-001",
    assetName: "Dell Latitude 5420 Laptop",
    assetType: "Laptop",
    assignedTo: "Dr. Ananya Sharma",
    assignedDate: "2024-05-10",
    condition: "Good",
    status: "Assigned"
  },
  {
    id: "AST-002",
    assetName: "Samsung Galaxy Tab",
    assetType: "Mobile",
    assignedTo: "Mr. Rajeev Kumar",
    assignedDate: "2023-11-20",
    condition: "Fair",
    status: "In Repair"
  },
  {
    id: "AST-003",
    assetName: "Ergonomic Office Chair",
    assetType: "Furniture",
    assignedTo: "Neha K.",
    assignedDate: "2025-01-15",
    condition: "Good",
    status: "Assigned"
  }
];
