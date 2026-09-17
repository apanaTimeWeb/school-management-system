export type TransportAllocationStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
export type TransportShiftPreference = 'BOTH' | 'MORNING_ONLY' | 'EVENING_ONLY';

export interface TransportAllocation {
  id: string;
  studentId: string;
  studentName: string;
  classSection: string;
  guardianName: string;
  guardianContact: string;
  
  // Transport Details
  routeId: string;
  routeName: string;
  stopId: string;
  stopName: string;
  vehicleId: string;
  vehicleNumber: string;
  
  pickupPoint: string; // sometimes distinct from stop name
  dropPoint: string;   // sometimes distinct from stop name
  
  shiftPreference: TransportShiftPreference;
  startDate: string;
  endDate: string;
  
  status: TransportAllocationStatus;
}

export interface TransportAllocationFormData {
  studentId: string;
  studentName: string; // In real app, derived from studentId
  routeId: string;
  stopId: string;
  vehicleId: string;
  pickupPoint: string;
  dropPoint: string;
  shiftPreference: TransportShiftPreference;
  startDate: string;
  endDate: string;
  status: TransportAllocationStatus;
}
