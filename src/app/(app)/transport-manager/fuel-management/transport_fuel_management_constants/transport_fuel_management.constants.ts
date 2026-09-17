import type { TransportFuelLog } from '../transport_fuel_management_types/transport_fuel_management.types';

export const MOCK_FUEL_LOGS: TransportFuelLog[] = [
  {
    id: 'FL-1001',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    fuelType: 'DIESEL',
    date: new Date().toISOString().split('T')[0],
    fuelStation: 'IndianOil Pump, Sector 4',
    quantityLiters: 45.5,
    ratePerLiter: 89.50,
    totalCost: 4072.25,
    odometerReading: 45600,
    previousOdometer: 45350,
    mileageKmpl: 5.49, // (45600 - 45350) / 45.5
    isSuspicious: false,
    remarks: 'Routine top-up'
  },
  {
    id: 'FL-1002',
    vehicleId: 'VEH-002',
    vehicleNumber: 'MH-12-CD-5678',
    fuelType: 'DIESEL',
    date: '2023-10-14',
    fuelStation: 'HP Station, Highway Route',
    quantityLiters: 60.0,
    ratePerLiter: 90.00,
    totalCost: 5400.00,
    odometerReading: 61200,
    previousOdometer: 61000,
    mileageKmpl: 3.33, // Abnormal drop (200km / 60L = 3.3) normally expecting 5+
    isSuspicious: true,
    remarks: 'Mileage significantly below average (3.3 kmpl). Potential fuel theft or engine issue.'
  },
  {
    id: 'FL-1003',
    vehicleId: 'VEH-003',
    vehicleNumber: 'MH-12-EF-9012',
    fuelType: 'CNG',
    date: '2023-10-15',
    fuelStation: 'MGL CNG Pump, Station Rd',
    quantityLiters: 12.0, // kg for CNG
    ratePerLiter: 75.00,
    totalCost: 900.00,
    odometerReading: 15400,
    previousOdometer: 15220,
    mileageKmpl: 15.0, 
    isSuspicious: false,
    remarks: null
  },
  {
    id: 'FL-1004',
    vehicleId: 'VEH-001',
    vehicleNumber: 'MH-12-AB-1234',
    fuelType: 'DIESEL',
    date: '2023-10-10',
    fuelStation: 'Bharat Petroleum, East Wing',
    quantityLiters: 50.0,
    ratePerLiter: 88.90,
    totalCost: 4445.00,
    odometerReading: 45350,
    previousOdometer: 45080,
    mileageKmpl: 5.4, 
    isSuspicious: false,
    remarks: 'Full tank.'
  }
];

export const FUEL_TYPE_COLORS: Record<string, { bg: string, text: string, label: string }> = {
  DIESEL: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Diesel' }, // Red
  PETROL: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Petrol' }, // Blue
  CNG: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'CNG' }, // Emerald
  EV: { bg: 'rgba(168,85,247,0.1)', text: '#A855F7', label: 'EV/Charge' }, // Purple
};
