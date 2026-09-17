export interface Building {
  id: string;
  name: string;
  hostelName: string;
  totalFloors: number;
  totalRooms: number;
  totalCapacity: number;
  status: 'ACTIVE' | 'MAINTENANCE';
}

export interface Floor {
  id: string;
  buildingId: string;
  floorName: string;
  roomCount: number;
  floorCapacity: number;
  facilities: string[];
  status: 'ACTIVE' | 'MAINTENANCE' | 'CLOSED';
  maintenanceStatus: 'CLEAR' | 'PENDING' | 'URGENT';
}
