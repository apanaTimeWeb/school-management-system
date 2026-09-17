export interface FloorStructure {
  id: string;
  name: string;
  roomCount: number;
}

export interface Hostel {
  id: string;
  hostelName: string;
  hostelType: 'BOYS' | 'GIRLS' | 'CO-ED';
  building: string;
  capacity: number;
  wardenName: string;
  contact: string;
  floorCount: number;
  roomCount: number;
  status: 'ACTIVE' | 'MAINTENANCE' | 'CLOSED';
  rules: string[];
  facilities: string[];
  floors: FloorStructure[];
}
