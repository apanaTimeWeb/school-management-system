import { PrincipalAsset, PrincipalInventoryIssue, PrincipalInventoryStats } from '../inventory_types/PrincipalInventory.types';

export const PRINCIPAL_MOCK_INVENTORY_STATS: PrincipalInventoryStats = {
  totalAssetsValue: '₹ 45,80,000',
  lowStockItems: 12,
  itemsInMaintenance: 5,
  damagedItemsThisMonth: 3
};

export const PRINCIPAL_MOCK_ASSETS: PrincipalAsset[] = [
  {
    id: 'AST-001',
    assetId: 'EL-PROJ-101',
    name: 'Epson Smart Projector',
    category: 'Electronics',
    quantity: 1,
    totalQuantity: 1,
    status: 'In Use',
    allocatedTo: 'Class 10-A (Room 304)',
    lastMaintained: '2023-08-15'
  },
  {
    id: 'AST-002',
    assetId: 'FUR-DSK-200',
    name: 'Student Desk & Chair Set',
    category: 'Furniture',
    quantity: 450,
    totalQuantity: 500,
    status: 'Available',
  },
  {
    id: 'AST-003',
    assetId: 'LAB-MIC-05',
    name: 'Compound Microscope',
    category: 'Lab Equipment',
    quantity: 0,
    totalQuantity: 10,
    status: 'Maintenance',
    allocatedTo: 'Biology Lab',
    lastMaintained: '2023-11-01'
  },
  {
    id: 'AST-004',
    assetId: 'SPT-BB-01',
    name: 'Spalding Basketball',
    category: 'Sports',
    quantity: 15,
    totalQuantity: 20,
    status: 'Available',
  }
];

export const PRINCIPAL_MOCK_INVENTORY_ISSUES: PrincipalInventoryIssue[] = [
  {
    id: 'ISS-001',
    assetName: 'Epson Smart Projector',
    assetId: 'EL-PROJ-102',
    reportedBy: 'Mr. Rakesh Singh (Math Teacher)',
    dateReported: '2023-11-20',
    issueType: 'Requires Repair',
    description: 'Projector display is flickering and changing colors automatically.',
    status: 'Pending Review'
  },
  {
    id: 'ISS-002',
    assetName: 'Compound Microscope',
    assetId: 'LAB-MIC-02',
    reportedBy: 'Mrs. Anita Desai (Lab Incharge)',
    dateReported: '2023-11-18',
    issueType: 'Damaged',
    description: 'Lenses cracked during experiment handling by students.',
    status: 'Resolved',
    resolutionNote: 'Sent for lens replacement. Cost to be borne by school maintenance fund.'
  }
];
