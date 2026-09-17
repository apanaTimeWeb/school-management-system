export type SpecialTripType = 
  | 'PICNIC'
  | 'SPORTS_EVENT'
  | 'COMPETITION'
  | 'EXAM_CENTER'
  | 'EDUCATIONAL_TOUR'
  | 'FIELD_TRIP'
  | 'SPECIAL_PICKUP_DROP';

export type SpecialTripStatus = 'SCHEDULED' | 'IN_TRANSIT' | 'COMPLETED' | 'CANCELLED';

export interface SpecialTransportRecord {
  id: string;
  tripName: string;
  tripType: SpecialTripType;
  status: SpecialTripStatus;
  
  destination: string;
  routeDetails: string;
  
  scheduleDate: string; // YYYY-MM-DD
  departureTime: string; // HH:mm
  returnTime: string;    // HH:mm
  
  assignedVehicle: string;
  assignedDriver: string;
  assignedConductor: string;
  
  studentCount: number;
  accompanyingStaff: string; // E.g., "Mr. Sharma, Mrs. Gupta"
  
  permissionStatus: 'PENDING' | 'APPROVED' | 'PARTIAL';
  emergencyContact: string; // Phone number
}

export interface SpecialTransportFormData {
  tripName: string;
  tripType: SpecialTripType;
  status: SpecialTripStatus;
  destination: string;
  routeDetails: string;
  scheduleDate: string;
  departureTime: string;
  returnTime: string;
  assignedVehicle: string;
  assignedDriver: string;
  assignedConductor: string;
  studentCount: number;
  accompanyingStaff: string;
  permissionStatus: 'PENDING' | 'APPROVED' | 'PARTIAL';
  emergencyContact: string;
}
