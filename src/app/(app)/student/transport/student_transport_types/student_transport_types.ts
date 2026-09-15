export interface TransportRoute {
  routeName: string;
  busNumber: string;
  driverName: string;
  driverPhone: string;
  attendantName: string;
  attendantPhone: string;
  vehicleType: string;
}

export interface TransportStop {
  stopName: string;
  pickupTime: string;
  dropTime: string;
  distanceFromSchool: string;
}

export interface TransportFeeInfo {
  monthlyFee: number;
  status: 'Paid' | 'Unpaid' | 'Overdue';
  nextDueDate: string;
}

export interface TransportNotification {
  id: string;
  date: string;
  message: string;
  type: 'Info' | 'Warning' | 'Alert';
}

export interface StudentTransportData {
  isTransportOpted: boolean;
  gpsEnabled: boolean; // Controls whether map is shown
  route: TransportRoute;
  stop: TransportStop;
  feeInfo: TransportFeeInfo;
  notifications: TransportNotification[];
}
