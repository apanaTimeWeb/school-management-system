export type TransportVehicleStatus = 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE' | 'RESTRICTED' | 'RETIRED';
export type TransportVehicleType = 'BUS' | 'VAN' | 'OTHER';
export type TransportFuelType = 'DIESEL' | 'PETROL' | 'CNG' | 'ELECTRIC';

export interface TransportVehicle {
  id: string;
  vehicleNumber: string;
  registrationNumber: string;
  vehicleType: TransportVehicleType;
  seatingCapacity: number;
  model: string;
  manufacturer: string;
  purchaseDate: string;
  fuelType: TransportFuelType;
  status: TransportVehicleStatus;
  assignedRouteId: string | null;
  assignedRouteName: string | null;
  assignedDriverId: string | null;
  assignedDriverName: string | null;
  assignedConductorId: string | null;
  assignedConductorName: string | null;
  gpsDeviceId: string | null;
  documentsComplete: boolean;
}

export interface TransportVehicleFormData {
  vehicleNumber: string;
  registrationNumber: string;
  vehicleType: TransportVehicleType;
  seatingCapacity: number;
  model: string;
  manufacturer: string;
  purchaseDate: string;
  fuelType: TransportFuelType;
  status: TransportVehicleStatus;
  gpsDeviceId: string;
}
