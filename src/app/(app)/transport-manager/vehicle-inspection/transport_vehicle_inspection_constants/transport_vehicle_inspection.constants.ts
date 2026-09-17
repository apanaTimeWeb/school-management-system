import type { TransportVehicleInspection } from '../transport_vehicle_inspection_types/transport_vehicle_inspection.types';

export const MOCK_INSPECTION_RECORDS: TransportVehicleInspection[] = [
  {
    id: 'INSP-1001',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    inspectionDate: new Date().toISOString().split('T')[0],
    inspectorName: 'Rahul Inspector',
    overallResult: 'PASSED',
    checklist: {
      brakes: 'PASS',
      tyres: 'PASS',
      lights: 'PASS',
      horn: 'PASS',
      mirrors: 'PASS',
      firstAidKit: 'PASS',
      fireExtinguisher: 'PASS',
      emergencyExit: 'PASS',
      seatCondition: 'PASS',
      gps: 'PASS',
      cleanliness: 'PASS',
      generalSafety: 'PASS'
    },
    remarks: 'Vehicle is in excellent condition.'
  },
  {
    id: 'INSP-1002',
    vehicleId: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    inspectionDate: '2023-10-15',
    inspectorName: 'Sunil Checker',
    overallResult: 'NEEDS_ATTENTION',
    checklist: {
      brakes: 'PASS',
      tyres: 'FAIL', // Needs attention
      lights: 'PASS',
      horn: 'PASS',
      mirrors: 'PASS',
      firstAidKit: 'PASS',
      fireExtinguisher: 'PASS',
      emergencyExit: 'PASS',
      seatCondition: 'PASS',
      gps: 'PASS',
      cleanliness: 'FAIL',
      generalSafety: 'PASS'
    },
    remarks: 'Rear tyres are wearing out. Needs replacement soon. Interior needs deep cleaning.'
  },
  {
    id: 'INSP-1003',
    vehicleId: 'VEH-003',
    vehicleNumber: 'MH-12-EF-9012',
    inspectionDate: '2023-10-10',
    inspectorName: 'Amit Safety',
    overallResult: 'FAILED',
    checklist: {
      brakes: 'FAIL', // Critical failure
      tyres: 'PASS',
      lights: 'FAIL', // Critical failure
      horn: 'PASS',
      mirrors: 'PASS',
      firstAidKit: 'N_A',
      fireExtinguisher: 'FAIL', // Critical
      emergencyExit: 'PASS',
      seatCondition: 'PASS',
      gps: 'PASS',
      cleanliness: 'PASS',
      generalSafety: 'FAIL'
    },
    remarks: 'Brake pads worn completely. Left indicator light broken. Fire extinguisher expired. Do not operate.'
  },
  {
    id: 'INSP-1004',
    vehicleId: 'VEH-004',
    vehicleNumber: 'MH-12-GH-3456',
    inspectionDate: '2023-10-05',
    inspectorName: 'Rahul Inspector',
    overallResult: 'PASSED',
    checklist: {
      brakes: 'PASS',
      tyres: 'PASS',
      lights: 'PASS',
      horn: 'PASS',
      mirrors: 'PASS',
      firstAidKit: 'PASS',
      fireExtinguisher: 'PASS',
      emergencyExit: 'PASS',
      seatCondition: 'PASS',
      gps: 'N_A',
      cleanliness: 'PASS',
      generalSafety: 'PASS'
    },
    remarks: 'GPS module not installed on this older model, but otherwise safe.'
  }
];

export const INSPECTION_RESULT_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  PASSED: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Passed' }, // Emerald
  FAILED: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Failed' }, // Red
  NEEDS_ATTENTION: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Needs Attention' }, // Amber
};

export const CHECKLIST_ITEMS = [
  { key: 'brakes', label: 'Brakes' },
  { key: 'tyres', label: 'Tyres' },
  { key: 'lights', label: 'Lights & Indicators' },
  { key: 'horn', label: 'Horn' },
  { key: 'mirrors', label: 'Mirrors' },
  { key: 'firstAidKit', label: 'First Aid Kit' },
  { key: 'fireExtinguisher', label: 'Fire Extinguisher' },
  { key: 'emergencyExit', label: 'Emergency Exit' },
  { key: 'seatCondition', label: 'Seat Condition' },
  { key: 'gps', label: 'GPS / Tracking' },
  { key: 'cleanliness', label: 'Cleanliness' },
  { key: 'generalSafety', label: 'General Safety' },
] as const;
