import type { ParentChildTransportProfile } from '../transport_parent_view_types/transport_parent_view.types';

export const MOCK_PARENT_CHILDREN: ParentChildTransportProfile[] = [
  {
    studentId: 'STU-1001',
    studentName: 'Aarav Sharma',
    classSection: 'Class 5 - A',
    assignedVehicle: 'MH-12-AB-1234 (Bus 01)',
    assignedRoute: 'Route R-01 (City Center)',
    assignedStop: 'Main Road Checkpost',
    pickupTime: '06:45 AM',
    dropTime: '03:15 PM',
    driverName: 'Rajesh Kumar',
    driverContact: '+91-9876543210',
    conductorName: 'Sanjay Verma',
    conductorContact: '+91-9876543211',
    hasTripToday: true,
    tripStatus: 'EN_ROUTE_PICKUP',
    tripEta: '5 mins away',
    isLiveTrackingEnabled: true,
    currentLocationStr: 'Sector 4, Near Plaza',
    speedKmh: 35,
    alerts: [
      {
        id: 'ALT-1',
        title: 'Trip Started',
        message: 'Morning pickup trip has started from the depot.',
        timestamp: '06:15 AM',
        type: 'INFO'
      }
    ]
  },
  {
    studentId: 'STU-1002',
    studentName: 'Priya Sharma',
    classSection: 'Class 8 - B',
    assignedVehicle: 'MH-12-CD-5678 (Bus 02)',
    assignedRoute: 'Route R-02 (North Campus)',
    assignedStop: 'Railway Colony',
    pickupTime: '07:10 AM',
    dropTime: '04:00 PM',
    driverName: 'Suresh Patil',
    driverContact: '+91-9876543222',
    conductorName: null,
    conductorContact: null,
    hasTripToday: true,
    tripStatus: 'AT_SCHOOL',
    tripEta: null,
    isLiveTrackingEnabled: false, // GPS disabled for this bus
    currentLocationStr: null,
    speedKmh: null,
    alerts: [
      {
        id: 'ALT-2',
        title: 'Safely Reached',
        message: 'Student has reached the school campus safely.',
        timestamp: '07:45 AM',
        type: 'INFO'
      },
      {
        id: 'ALT-3',
        title: 'Traffic Delay Notification',
        message: 'Morning route was delayed by 10 mins due to city traffic.',
        timestamp: '07:15 AM',
        type: 'WARNING'
      }
    ]
  }
];

export const TRIP_STATUS_LABELS: Record<string, string> = {
  NOT_STARTED: 'Not Started',
  EN_ROUTE_PICKUP: 'En Route to Pickup',
  AT_SCHOOL: 'At School Campus',
  EN_ROUTE_DROP: 'En Route to Drop',
  COMPLETED: 'Completed'
};
