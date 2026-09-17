import type { ReportCategoryDefinition } from '../transport_reports_types/transport_reports.types';

export const REPORT_CATEGORIES: ReportCategoryDefinition[] = [
  {
    id: 'VEHICLE_REPORTS',
    title: 'Vehicle Reports',
    icon: 'Bus',
    color: '#3B82F6', // Blue
    reports: [
      { id: 'veh-list', categoryId: 'VEHICLE_REPORTS', name: 'Vehicle Master List', description: 'Complete inventory of all active and inactive fleet vehicles.', icon: 'List' },
      { id: 'veh-util', categoryId: 'VEHICLE_REPORTS', name: 'Vehicle Utilization', description: 'Metrics on distance covered, trips made, and idle time.', icon: 'Activity' },
      { id: 'veh-maint', categoryId: 'VEHICLE_REPORTS', name: 'Maintenance Log', description: 'Historical record of vehicle repairs, services, and costs.', icon: 'Wrench' },
      { id: 'veh-fuel', categoryId: 'VEHICLE_REPORTS', name: 'Fuel Consumption', description: 'Mileage tracking and suspicious fuel consumption flags.', icon: 'Fuel' },
      { id: 'veh-exp', categoryId: 'VEHICLE_REPORTS', name: 'Document Expiry', label: 'Compliance', description: 'Upcoming expirations for insurance, PUC, fitness certs.', icon: 'AlertTriangle' }
    ] as any
  },
  {
    id: 'ROUTE_REPORTS',
    title: 'Route Reports',
    icon: 'Map',
    color: '#10B981', // Emerald
    reports: [
      { id: 'rte-stu', categoryId: 'ROUTE_REPORTS', name: 'Route-wise Students', description: 'List of students mapped to each specific route.', icon: 'Users' },
      { id: 'rte-stop', categoryId: 'ROUTE_REPORTS', name: 'Stop-wise Students', description: 'Granular breakdown of boarding/alighting counts per stop.', icon: 'MapPin' },
      { id: 'rte-util', categoryId: 'ROUTE_REPORTS', name: 'Route Utilization', description: 'Capacity vs Actual boarding percentages per route.', icon: 'PieChart' },
      { id: 'rte-chg', categoryId: 'ROUTE_REPORTS', name: 'Route Change History', description: 'Log of temporary diversions and calendar changes.', icon: 'GitMerge' }
    ]
  },
  {
    id: 'STUDENT_REPORTS',
    title: 'Student Reports',
    icon: 'GraduationCap',
    color: '#8B5CF6', // Violet
    reports: [
      { id: 'stu-list', categoryId: 'STUDENT_REPORTS', name: 'Transport Students', description: 'Master list of all students subscribed to transport.', icon: 'UserCheck' },
      { id: 'stu-log', categoryId: 'STUDENT_REPORTS', name: 'Pickup / Drop Logs', description: 'Detailed timestamps of when students boarded/alighted.', icon: 'Clock' },
      { id: 'stu-att', categoryId: 'STUDENT_REPORTS', name: 'Student Attendance', description: 'Monthly transport attendance percentages per student.', icon: 'CalendarDays' },
      { id: 'stu-hist', categoryId: 'STUDENT_REPORTS', name: 'Transport History', description: 'Past route assignments and fee subscription history.', icon: 'History' }
    ]
  },
  {
    id: 'STAFF_REPORTS',
    title: 'Staff Reports',
    icon: 'Users',
    color: '#F59E0B', // Amber
    reports: [
      { id: 'stf-drv', categoryId: 'STAFF_REPORTS', name: 'Driver Master List', description: 'Directory of all drivers with license expiry status.', icon: 'SteeringWheel' },
      { id: 'stf-cnd', categoryId: 'STAFF_REPORTS', name: 'Conductor Master List', description: 'Directory of all helpers/conductors assigned to fleet.', icon: 'UserCircle' },
      { id: 'stf-att', categoryId: 'STAFF_REPORTS', name: 'Staff Attendance', description: 'Shift logging, absences, and leaves of transport staff.', icon: 'CalendarCheck' },
      { id: 'stf-asn', categoryId: 'STAFF_REPORTS', name: 'Vehicle Assignments', description: 'Historical mapping of which staff drove which vehicle.', icon: 'Link' }
    ]
  },
  {
    id: 'FINANCIAL_REPORTS',
    title: 'Financial Reports',
    icon: 'IndianRupee',
    color: '#06B6D4', // Cyan
    reports: [
      { id: 'fin-fee', categoryId: 'FINANCIAL_REPORTS', name: 'Fee Master List', description: 'Transport fee slabs applied across different routes/stops.', icon: 'FileText' },
      { id: 'fin-out', categoryId: 'FINANCIAL_REPORTS', name: 'Outstanding Dues', description: 'List of defaulters and overdue transport fees.', icon: 'AlertCircle' },
      { id: 'fin-col', categoryId: 'FINANCIAL_REPORTS', name: 'Fee Collection', description: 'Total revenue collected from transport over a period.', icon: 'TrendingUp' },
      { id: 'fin-exp', categoryId: 'FINANCIAL_REPORTS', name: 'Transport Expenses', description: 'Aggregated costs (Fuel, Maintenance, Salaries, Permits).', icon: 'Receipt' }
    ]
  },
  {
    id: 'SAFETY_REPORTS',
    title: 'Safety & Audit',
    icon: 'ShieldAlert',
    color: '#EF4444', // Red
    reports: [
      { id: 'sft-inc', categoryId: 'SAFETY_REPORTS', name: 'Incident Reports', description: 'Log of student behavioral or route-related incidents.', icon: 'AlertTriangle' },
      { id: 'sft-acc', categoryId: 'SAFETY_REPORTS', name: 'Accident Reports', description: 'Critical audit trail of vehicular collisions/accidents.', icon: 'CarCrash' },
      { id: 'sft-brk', categoryId: 'SAFETY_REPORTS', name: 'Breakdown Logs', description: 'Frequency and causes of mid-route vehicle breakdowns.', icon: 'Wrench' },
      { id: 'sft-ins', categoryId: 'SAFETY_REPORTS', name: 'Inspection Audits', description: 'Results of daily 12-point vehicle safety checklists.', icon: 'ClipboardCheck' }
    ]
  }
];
