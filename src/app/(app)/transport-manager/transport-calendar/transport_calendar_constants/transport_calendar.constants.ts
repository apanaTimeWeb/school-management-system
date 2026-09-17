import type { TransportCalendarEvent } from '../transport_calendar_types/transport_calendar.types';

export const MOCK_CALENDAR_EVENTS: TransportCalendarEvent[] = [
  {
    id: 'CAL-2023-001',
    type: 'HOLIDAY',
    title: 'Diwali Break',
    startDate: '2023-11-10',
    endDate: '2023-11-15',
    description: 'School closed for Diwali break. All transport services suspended.',
    affectedRoutes: ['ALL'],
    affectedVehicles: ['ALL'],
    createdBy: 'School Admin'
  },
  {
    id: 'CAL-2023-002',
    type: 'NO_TRANSPORT_DAY',
    title: 'Staff Training Day',
    startDate: '2023-11-20',
    endDate: '2023-11-20',
    description: 'Drivers and Conductors undergo mandatory road safety training. Parents must arrange pickup/drop.',
    affectedRoutes: ['ALL'],
    affectedVehicles: ['ALL'],
    createdBy: 'Transport Manager'
  },
  {
    id: 'CAL-2023-003',
    type: 'SPECIAL_TRIP',
    title: 'Science Museum Excursion',
    startDate: '2023-10-25',
    endDate: '2023-10-25',
    startTime: '09:00',
    endTime: '15:00',
    description: 'Field trip for Class 8 students. Special transport allocated.',
    affectedRoutes: ['N/A'],
    affectedVehicles: ['VEH-004', 'VEH-005'],
    createdBy: 'Transport Manager'
  },
  {
    id: 'CAL-2023-004',
    type: 'EXAM_TRANSPORT',
    title: 'Half-Yearly Exams Schedule',
    startDate: '2023-12-01',
    endDate: '2023-12-15',
    startTime: '07:30',
    endTime: '13:00',
    description: 'Buses will ply early during the exam period. Afternoon trips shifted to 1:00 PM.',
    affectedRoutes: ['ALL'],
    affectedVehicles: ['ALL'],
    createdBy: 'Transport Manager'
  },
  {
    id: 'CAL-2023-005',
    type: 'ROUTE_CHANGE',
    title: 'Highway Repair Diversion',
    startDate: '2023-10-28',
    endDate: '2023-11-05',
    description: 'Route R-03 diverted via Service Lane due to highway patching work.',
    affectedRoutes: ['R-03'],
    affectedVehicles: ['VEH-002'],
    createdBy: 'Transport Manager'
  }
];

export const CALENDAR_TYPE_CONFIGS: Record<string, { bg: string, text: string, label: string }> = {
  HOLIDAY: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', label: 'Holiday' }, // Red
  NO_TRANSPORT_DAY: { bg: 'rgba(244,63,94,0.1)', text: '#E11D48', label: 'No Transport' }, // Rose
  SPECIAL_TRIP: { bg: 'rgba(16,185,129,0.1)', text: '#10B981', label: 'Special Trip' }, // Emerald
  EXAM_TRANSPORT: { bg: 'rgba(139,92,246,0.1)', text: '#8B5CF6', label: 'Exam Transport' }, // Violet
  EVENT_TRANSPORT: { bg: 'rgba(236,72,153,0.1)', text: '#EC4899', label: 'Event Transport' }, // Pink
  ROUTE_CHANGE: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', label: 'Route Change' }, // Amber
  VEHICLE_SCHEDULE: { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', label: 'Vehicle Schedule' } // Blue
};
