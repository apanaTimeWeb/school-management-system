export type DailyTripType = 'MORNING_PICKUP' | 'AFTERNOON_DROP' | 'SPECIAL_PICKUP' | 'SPECIAL_DROP';

export type DailyTripStatus = 'SCHEDULED' | 'STARTED' | 'IN_TRANSIT' | 'COMPLETED' | 'CANCELLED' | 'DELAYED';

export interface DailyTrip {
  id: string;
  tripDate: string;
  tripType: DailyTripType;
  
  routeId: string;
  routeName: string;
  
  vehicleId: string;
  vehicleNumber: string;
  
  driverName: string;
  conductorName: string | null;
  
  plannedStartTime: string;
  plannedEndTime: string;
  actualStartTime: string | null;
  actualEndTime: string | null;
  
  status: DailyTripStatus;
  
  // metrics
  studentsBoarded: number;
  totalCapacity: number;
  currentLocation: string | null;
}

export interface DailyTripFormData {
  tripDate: string;
  tripType: DailyTripType;
  routeId: string;
  vehicleId: string;
  driverName: string;
  conductorName: string;
  plannedStartTime: string;
  plannedEndTime: string;
  status: DailyTripStatus;
}
