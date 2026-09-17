export type TransportStopStatus = 'ACTIVE' | 'INACTIVE' | 'TEMPORARY_CLOSURE';

export interface TransportStop {
  id: string;
  routeId: string;
  routeName: string;
  stopName: string;
  location: string;
  sequence: number;
  pickupTime: string;
  dropTime: string;
  status: TransportStopStatus;
  assignedStudents: number;
}

export interface TransportStopFormData {
  routeId: string;
  stopName: string;
  location: string;
  sequence: number;
  pickupTime: string;
  dropTime: string;
  status: TransportStopStatus;
}
