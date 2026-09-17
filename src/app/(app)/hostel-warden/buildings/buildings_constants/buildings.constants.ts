import type { Building, Floor } from '../buildings_types/buildings.types';

export const MOCK_BUILDINGS: Building[] = [
  {
    id: 'BLD-A',
    name: 'Block A - Aryabhatta',
    hostelName: 'Main Boys Hostel',
    totalFloors: 3,
    totalRooms: 50,
    totalCapacity: 200,
    status: 'ACTIVE'
  },
  {
    id: 'BLD-B',
    name: 'Block B - Sarojini',
    hostelName: 'Girls Hostel',
    totalFloors: 2,
    totalRooms: 40,
    totalCapacity: 150,
    status: 'ACTIVE'
  }
];

export const MOCK_FLOORS: Floor[] = [
  {
    id: 'FL-A1',
    buildingId: 'BLD-A',
    floorName: 'Ground Floor',
    roomCount: 16,
    floorCapacity: 64,
    facilities: ['Common Washroom', 'Drinking Water', 'Fire Extinguisher'],
    status: 'ACTIVE',
    maintenanceStatus: 'CLEAR'
  },
  {
    id: 'FL-A2',
    buildingId: 'BLD-A',
    floorName: 'First Floor',
    roomCount: 17,
    floorCapacity: 68,
    facilities: ['Common Washroom', 'Drinking Water', 'Common TV'],
    status: 'ACTIVE',
    maintenanceStatus: 'PENDING'
  },
  {
    id: 'FL-A3',
    buildingId: 'BLD-A',
    floorName: 'Second Floor',
    roomCount: 17,
    floorCapacity: 68,
    facilities: ['Common Washroom', 'Drinking Water'],
    status: 'MAINTENANCE',
    maintenanceStatus: 'URGENT'
  },
  {
    id: 'FL-B1',
    buildingId: 'BLD-B',
    floorName: 'Ground Floor',
    roomCount: 20,
    floorCapacity: 75,
    facilities: ['Attached Washrooms', 'Drinking Water', 'Visitor Lounge'],
    status: 'ACTIVE',
    maintenanceStatus: 'CLEAR'
  },
  {
    id: 'FL-B2',
    buildingId: 'BLD-B',
    floorName: 'First Floor',
    roomCount: 20,
    floorCapacity: 75,
    facilities: ['Attached Washrooms', 'Drinking Water', 'Reading Room'],
    status: 'ACTIVE',
    maintenanceStatus: 'CLEAR'
  }
];
