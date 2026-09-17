import type { HostelAsset } from '../inventory_types/inventory.types';

export const MOCK_ASSETS: HostelAsset[] = [
  {
    id: 'AST-BED-001',
    assetName: 'Metal Bed Frame (Single)',
    category: 'Furniture',
    locationType: 'Room',
    locationDetail: 'Room 101',
    status: 'Working',
    assignedToStudentId: 'STU-1024',
    assignedToStudentName: 'Amit Kumar',
    lastInspectionDate: '2023-11-01',
    notes: 'In good condition.'
  },
  {
    id: 'AST-MAT-001',
    assetName: 'Coir Mattress (Single)',
    category: 'Furniture',
    locationType: 'Room',
    locationDetail: 'Room 101',
    status: 'Working',
    assignedToStudentId: 'STU-1024',
    assignedToStudentName: 'Amit Kumar',
    lastInspectionDate: '2023-11-01',
    notes: 'Slightly worn out but usable.'
  },
  {
    id: 'AST-FAN-015',
    assetName: 'Ceiling Fan (Orient)',
    category: 'Electrical',
    locationType: 'Room',
    locationDetail: 'Room 101',
    status: 'Damaged',
    lastInspectionDate: '2023-11-20',
    notes: 'Making loud noise. Needs bearing replacement.'
  },
  {
    id: 'AST-TV-001',
    assetName: '55" LED TV (Samsung)',
    category: 'Appliance',
    locationType: 'Common Area',
    locationDetail: 'Ground Floor Lounge',
    status: 'Working',
    lastInspectionDate: '2023-11-15',
    notes: 'Remote control missing.'
  },
  {
    id: 'AST-WMC-002',
    assetName: 'Washing Machine (LG 8kg)',
    category: 'Appliance',
    locationType: 'Common Area',
    locationDetail: 'First Floor Laundry Room',
    status: 'Sent for Repair',
    lastInspectionDate: '2023-11-18',
    notes: 'Drum not spinning. Tech called.'
  },
  {
    id: 'AST-GEY-005',
    assetName: 'Geyser 25L (Bajaj)',
    category: 'Plumbing',
    locationType: 'Washroom',
    locationDetail: 'Room 102 Attached Washroom',
    status: 'Working',
    lastInspectionDate: '2023-10-10',
    notes: 'Heating well.'
  }
];
