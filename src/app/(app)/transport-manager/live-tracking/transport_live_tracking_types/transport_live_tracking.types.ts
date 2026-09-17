export type LiveTrackingStatus = 'ON_ROUTE' | 'IDLE' | 'STOPPED' | 'OFFLINE' | 'DEVIATED';

export interface LiveVehicle {
  id: string;
  vehicleNumber: string;
  driverName: string;
  contactNumber: string;
  
  routeId: string;
  routeName: string;
  
  currentStopId: string | null;
  currentStopName: string | null;
  nextStopName: string | null;
  
  speedKmh: number;
  estimatedArrivalNextStop: string | null; // e.g., '5 mins'
  
  tripStatus: 'IN_TRANSIT' | 'SCHEDULED' | 'DELAYED' | 'COMPLETED';
  routeDeviationWarning: boolean;
  geoFenceViolation: boolean;
  
  lastUpdatedTime: string;
  trackingStatus: LiveTrackingStatus;
  
  // Coordinates for mock map
  lat: number;
  lng: number;
}
