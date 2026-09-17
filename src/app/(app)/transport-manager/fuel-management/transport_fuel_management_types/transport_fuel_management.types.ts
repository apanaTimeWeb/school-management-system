export type FuelType = 'DIESEL' | 'PETROL' | 'CNG' | 'EV';

export interface TransportFuelLog {
  id: string;
  vehicleId: string;
  vehicleNumber: string; // e.g. "MH-12-AB-1234"
  fuelType: FuelType;
  
  date: string;
  fuelStation: string;
  
  quantityLiters: number;
  ratePerLiter: number;
  totalCost: number;
  
  odometerReading: number;
  previousOdometer: number | null; // Used to calculate mileage
  mileageKmpl: number | null;
  
  isSuspicious: boolean; // Flag for abnormal mileage drops or sudden spikes
  remarks: string | null;
}

export interface TransportFuelLogFormData {
  vehicleId: string;
  vehicleNumber: string;
  fuelType: FuelType;
  date: string;
  fuelStation: string;
  quantityLiters: number | '';
  ratePerLiter: number | '';
  odometerReading: number | '';
  remarks: string;
}
