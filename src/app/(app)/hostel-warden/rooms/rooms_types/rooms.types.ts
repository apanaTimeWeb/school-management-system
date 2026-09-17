export type RoomStatus = 'Available' | 'Partially Occupied' | 'Full' | 'Maintenance' | 'Blocked';
export type RoomType = 'AC' | 'Non-AC' | 'Premium' | 'Standard';

export interface Room {
  id: string;
  roomNumber: string;
  floor: string;
  building: string;
  roomType: RoomType;
  capacity: number;
  occupiedBeds: number;
  availableBeds: number;
  roomStatus: RoomStatus;
  facilities: string[];
  maintenanceStatus: 'CLEAR' | 'PENDING' | 'URGENT';
}
