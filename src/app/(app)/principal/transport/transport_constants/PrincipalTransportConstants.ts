import { PrincipalTransportRoute, PrincipalTransportStudent, PrincipalTransportComplaint } from '../transport_types/PrincipalTransport.types';

export const PRINCIPAL_MOCK_ROUTES: PrincipalTransportRoute[] = [
  {
    id: 'RT-01',
    routeName: 'Route 1 - City Center to School',
    vehicleNumber: 'MH-12-AB-1234',
    driverName: 'Ramesh Singh',
    driverContact: '+91 9876543210',
    assistantName: 'Suresh Kumar',
    totalStudentsAllocated: 45,
    capacity: 50,
    status: 'Active',
    stops: ['City Center', 'Gandhi Square', 'MG Road', 'School Campus']
  },
  {
    id: 'RT-02',
    routeName: 'Route 2 - North Phase',
    vehicleNumber: 'MH-12-CD-5678',
    driverName: 'Abdul Khan',
    driverContact: '+91 9876543211',
    totalStudentsAllocated: 30,
    capacity: 40,
    status: 'Maintenance',
    stops: ['North Gate', 'IT Park', 'School Campus']
  },
  {
    id: 'RT-03',
    routeName: 'Route 3 - South Colony',
    vehicleNumber: 'MH-12-EF-9012',
    driverName: 'Prakash Patil',
    driverContact: '+91 9876543212',
    assistantName: 'Raju',
    totalStudentsAllocated: 55,
    capacity: 55,
    status: 'Active',
    stops: ['South Colony', 'Market Area', 'Station Road', 'School Campus']
  }
];

export const PRINCIPAL_MOCK_TRANSPORT_STUDENTS: PrincipalTransportStudent[] = [
  {
    id: 'TS-001',
    studentId: 'STU-1122',
    studentName: 'Aarav Sharma',
    classAndSection: '10-A',
    routeId: 'RT-01',
    routeName: 'Route 1 - City Center to School',
    pickupStop: 'Gandhi Square',
    todayAttendance: 'Present'
  },
  {
    id: 'TS-002',
    studentId: 'STU-1300',
    studentName: 'Neha Gupta',
    classAndSection: '12-B',
    routeId: 'RT-01',
    routeName: 'Route 1 - City Center to School',
    pickupStop: 'MG Road',
    todayAttendance: 'Absent'
  },
  {
    id: 'TS-003',
    studentId: 'STU-0988',
    studentName: 'Rohan Verma',
    classAndSection: '8-C',
    routeId: 'RT-03',
    routeName: 'Route 3 - South Colony',
    pickupStop: 'Market Area',
    todayAttendance: 'Present'
  }
];

export const PRINCIPAL_MOCK_TRANSPORT_COMPLAINTS: PrincipalTransportComplaint[] = [
  {
    id: 'TC-001',
    routeId: 'RT-01',
    routeName: 'Route 1 - City Center to School',
    raisedBy: 'Mr. Sharma (Parent)',
    date: '2023-11-20',
    category: 'Delay',
    description: 'Bus was delayed by 30 minutes at Gandhi Square pickup point.',
    status: 'Pending'
  },
  {
    id: 'TC-002',
    routeId: 'RT-03',
    routeName: 'Route 3 - South Colony',
    raisedBy: 'Mrs. Verma (Parent)',
    date: '2023-11-18',
    category: 'Driver Behavior',
    description: 'Driver was driving very fast near the market area.',
    status: 'Resolved',
    resolution: 'Strict warning issued to the driver. Speed limit monitor activated.'
  }
];
