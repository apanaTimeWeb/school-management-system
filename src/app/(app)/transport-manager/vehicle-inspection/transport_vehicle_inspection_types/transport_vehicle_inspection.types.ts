export type InspectionResultStatus = 'PASSED' | 'FAILED' | 'NEEDS_ATTENTION';

export type ChecklistItemStatus = 'PASS' | 'FAIL' | 'N_A';

export interface InspectionChecklist {
  brakes: ChecklistItemStatus;
  tyres: ChecklistItemStatus;
  lights: ChecklistItemStatus;
  horn: ChecklistItemStatus;
  mirrors: ChecklistItemStatus;
  firstAidKit: ChecklistItemStatus;
  fireExtinguisher: ChecklistItemStatus;
  emergencyExit: ChecklistItemStatus;
  seatCondition: ChecklistItemStatus;
  gps: ChecklistItemStatus;
  cleanliness: ChecklistItemStatus;
  generalSafety: ChecklistItemStatus;
}

export interface TransportVehicleInspection {
  id: string;
  vehicleId: string;
  vehicleNumber: string; // e.g. "MH-12-AB-1234"
  
  inspectionDate: string;
  inspectorName: string;
  
  overallResult: InspectionResultStatus;
  
  checklist: InspectionChecklist;
  
  remarks: string | null;
}

export interface TransportVehicleInspectionFormData {
  vehicleId: string;
  vehicleNumber: string;
  inspectionDate: string;
  inspectorName: string;
  
  overallResult: InspectionResultStatus;
  
  checklist: InspectionChecklist;
  
  remarks: string;
}
