import type { StudentTransportData } from '../student_transport_types/student_transport_types';

export const MOCK_TRANSPORT_DATA: StudentTransportData = {
  isTransportOpted: true,
  gpsEnabled: true, // Set to true to show the mock GPS feature
  route: {
    routeName: "Route 04 - City Center",
    busNumber: "DL-1PC-4567",
    driverName: "Ramesh Kumar",
    driverPhone: "+91 98765 43210",
    attendantName: "Sunita Devi",
    attendantPhone: "+91 98765 12345",
    vehicleType: "40-Seater AC Bus"
  },
  stop: {
    stopName: "Metro Station Gate 2",
    pickupTime: "07:15 AM",
    dropTime: "03:45 PM",
    distanceFromSchool: "8.5 km"
  },
  feeInfo: {
    monthlyFee: 1500,
    status: "Paid",
    nextDueDate: "Nov 05, 2024"
  },
  notifications: [
    {
      id: "notif_1",
      date: "Today, 07:00 AM",
      message: "Bus is running on time. Expected at your stop at 07:15 AM.",
      type: "Info"
    },
    {
      id: "notif_2",
      date: "Yesterday, 03:00 PM",
      message: "Route diverted due to heavy traffic on Main Road. Drop might be delayed by 10 mins.",
      type: "Warning"
    }
  ]
};
