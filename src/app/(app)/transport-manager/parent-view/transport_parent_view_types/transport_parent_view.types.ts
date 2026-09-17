export interface ParentChildTransportProfile {
  studentId: string;
  studentName: string;
  classSection: string;
  
  // Static Assignment Data
  assignedVehicle: string;
  assignedRoute: string;
  assignedStop: string;
  pickupTime: string;
  dropTime: string;
  
  // Crew
  driverName: string;
  driverContact: string;
  conductorName: string | null;
  conductorContact: string | null;
  
  // Today's Trip Live Data
  hasTripToday: boolean;
  tripStatus: 'NOT_STARTED' | 'EN_ROUTE_PICKUP' | 'AT_SCHOOL' | 'EN_ROUTE_DROP' | 'COMPLETED';
  tripEta: string | null;
  
  // Tracking (Conditional)
  isLiveTrackingEnabled: boolean;
  currentLocationStr: string | null;
  speedKmh: number | null;
  
  // Alerts
  alerts: TransportAlert[];
}

export interface TransportAlert {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'INFO' | 'WARNING' | 'ERROR';
}
