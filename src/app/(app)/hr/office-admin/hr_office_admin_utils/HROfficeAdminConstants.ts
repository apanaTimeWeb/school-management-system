import { HROfficeAdminRecord } from '../hr_office_admin_types/HROfficeAdminTypes';

export const MOCK_HR_OFFICE_ADMIN: HROfficeAdminRecord[] = [
  {
    id: "REQ-001",
    category: "Stationery",
    item: "Whiteboard Markers (Box of 50)",
    requestedBy: "Dr. Ananya Sharma",
    department: "Teaching",
    requestDate: "2026-09-12",
    priority: "High",
    status: "Approved"
  },
  {
    id: "REQ-002",
    category: "Maintenance",
    item: "AC Repair in Room 204",
    requestedBy: "Mr. Rajeev Kumar",
    department: "Teaching",
    requestDate: "2026-09-14",
    priority: "High",
    status: "Pending"
  },
  {
    id: "REQ-003",
    category: "Pantry",
    item: "Coffee Beans & Tea Bags",
    requestedBy: "HR Department",
    department: "Administration",
    requestDate: "2026-09-10",
    priority: "Medium",
    status: "Procured"
  },
  {
    id: "REQ-004",
    category: "Housekeeping",
    item: "New Dustbins for Corridor A",
    requestedBy: "Ramesh Kumar",
    department: "Support Staff",
    requestDate: "2026-09-08",
    priority: "Low",
    status: "Rejected"
  }
];
