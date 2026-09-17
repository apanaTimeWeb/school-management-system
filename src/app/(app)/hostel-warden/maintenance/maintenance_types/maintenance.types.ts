export type MaintenanceCategory = 'Electrical' | 'Plumbing' | 'Carpentry' | 'Cleaning' | 'IT/Wi-Fi';
export type MaintenancePriority = 'Low' | 'Medium' | 'High' | 'Urgent';
export type MaintenanceStatus = 'Pending' | 'In Progress' | 'Resolved';
export type MaintenanceLocationType = 'Room' | 'Common Area' | 'Floor';

export interface MaintenanceComplaint {
  id: string;
  category: MaintenanceCategory;
  locationType: MaintenanceLocationType;
  locationDetail: string; // e.g. "Room 101" or "First Floor Corridor"
  description: string;
  priority: MaintenancePriority;
  status: MaintenanceStatus;
  loggedBy: string; // "Student: Amit Kumar" or "Warden"
  loggedDate: string;
  assignedTo?: string; // e.g. "Ramesh (Electrician)"
  resolutionDate?: string;
  remarks?: string;
}
