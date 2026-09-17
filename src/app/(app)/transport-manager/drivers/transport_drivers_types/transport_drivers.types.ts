export type TransportDriverStatus = 'ACTIVE' | 'ON_LEAVE' | 'SUSPENDED' | 'INACTIVE';
export type TransportLicenseType = 'LMV' | 'HMV' | 'TRANS';

export interface TransportDriver {
  id: string;
  employeeId: string;
  name: string;
  contact: string;
  emergencyContact: string;
  licenseNumber: string;
  licenseType: TransportLicenseType;
  licenseExpiry: string;
  experienceYears: number;
  status: TransportDriverStatus;
  assignedVehicleId: string | null;
  assignedVehicleNumber: string | null;
  assignedRouteId: string | null;
  assignedRouteName: string | null;
  documentsComplete: boolean;
  avatarUrl: string | null;
}

export interface TransportDriverFormData {
  employeeId: string;
  name: string;
  contact: string;
  emergencyContact: string;
  licenseNumber: string;
  licenseType: TransportLicenseType;
  licenseExpiry: string;
  experienceYears: number;
  status: TransportDriverStatus;
  assignedVehicleId: string;
}
