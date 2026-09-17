import type { Room } from '../rooms_types/rooms.types';

export const MOCK_ROOMS: Room[] = [
  {
    id: 'RM-101',
    roomNumber: '101',
    floor: 'Ground Floor',
    building: 'Block A - Aryabhatta',
    roomType: 'Non-AC',
    capacity: 4,
    occupiedBeds: 4,
    availableBeds: 0,
    roomStatus: 'Full',
    facilities: ['Attached Balcony', 'Study Table', 'Cupboards'],
    maintenanceStatus: 'CLEAR'
  },
  {
    id: 'RM-102',
    roomNumber: '102',
    floor: 'Ground Floor',
    building: 'Block A - Aryabhatta',
    roomType: 'AC',
    capacity: 4,
    occupiedBeds: 2,
    availableBeds: 2,
    roomStatus: 'Partially Occupied',
    facilities: ['AC', 'Study Table', 'Cupboards'],
    maintenanceStatus: 'CLEAR'
  },
  {
    id: 'RM-103',
    roomNumber: '103',
    floor: 'Ground Floor',
    building: 'Block A - Aryabhatta',
    roomType: 'Non-AC',
    capacity: 2,
    occupiedBeds: 0,
    availableBeds: 2,
    roomStatus: 'Available',
    facilities: ['Study Table', 'Cupboards'],
    maintenanceStatus: 'CLEAR'
  },
  {
    id: 'RM-201',
    roomNumber: '201',
    floor: 'First Floor',
    building: 'Block B - Sarojini',
    roomType: 'Premium',
    capacity: 2,
    occupiedBeds: 0,
    availableBeds: 0,
    roomStatus: 'Maintenance',
    facilities: ['AC', 'Attached Washroom', 'Mini Fridge'],
    maintenanceStatus: 'URGENT'
  },
  {
    id: 'RM-202',
    roomNumber: '202',
    floor: 'First Floor',
    building: 'Block B - Sarojini',
    roomType: 'Premium',
    capacity: 2,
    occupiedBeds: 1,
    availableBeds: 1,
    roomStatus: 'Partially Occupied',
    facilities: ['AC', 'Attached Washroom', 'Mini Fridge'],
    maintenanceStatus: 'PENDING'
  },
  {
    id: 'RM-205',
    roomNumber: '205',
    floor: 'First Floor',
    building: 'Block B - Sarojini',
    roomType: 'Non-AC',
    capacity: 4,
    occupiedBeds: 0,
    availableBeds: 0,
    roomStatus: 'Blocked',
    facilities: ['Study Table', 'Cupboards'],
    maintenanceStatus: 'CLEAR'
  }
];
