export type TransportRouteStatus = 'ACTIVE' | 'INACTIVE' | 'TEMPORARY_SUSPENDED' | 'UNDER_MAINTENANCE';

export interface TransportRoute {
  id: string;
  routeCode: string;
  routeName: string;
  startingPoint: string;
  endingPoint: string;
  routeDistanceKm: number;
  estimatedDurationMins: number;
  status: TransportRouteStatus;
  
  // Assignments
  assignedVehicleId: string | null;
  assignedVehicleNumber: string | null;
  assignedDriverId: string | null;
  assignedDriverName: string | null;
  assignedConductorId: string | null;
  assignedConductorName: string | null;
  
  // Extra metrics for dashboard feel
  totalStops: number;
  studentsAssigned: number;
}

export interface TransportRouteFormData {
  routeCode: string;
  routeName: string;
  startingPoint: string;
  endingPoint: string;
  routeDistanceKm: number;
  estimatedDurationMins: number;
  status: TransportRouteStatus;
  assignedVehicleId: string;
  assignedDriverId: string;
  assignedConductorId: string;
}
