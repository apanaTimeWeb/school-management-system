export type MaintenanceType = 'SCHEDULED_SERVICE' | 'INSPECTION' | 'REPAIR' | 'BREAKDOWN';
export type MaintenanceStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE';

export interface TransportMaintenance {
  id: string;
  vehicleId: string;
  vehicleNumber: string; // e.g. "MH-12-AB-1234"
  
  type: MaintenanceType;
  status: MaintenanceStatus;
  
  serviceDate: string; // Date of service/breakdown
  nextServiceDate: string | null; // Predicted next service
  
  workshopName: string;
  mechanicName: string | null;
  
  // Cost Breakdown
  partsCost: number;
  labourCost: number;
  totalCost: number;
  
  // Specifics
  partsReplaced: string | null; // e.g. "Oil Filter, Brake Pads"
  remarks: string | null; // e.g. "Engine oil changed, next due at 50,000 km"
}

export interface TransportMaintenanceFormData {
  vehicleId: string;
  vehicleNumber: string;
  type: MaintenanceType;
  status: MaintenanceStatus;
  serviceDate: string;
  nextServiceDate: string;
  workshopName: string;
  mechanicName: string;
  partsCost: number | '';
  labourCost: number | '';
  partsReplaced: string;
  remarks: string;
}
