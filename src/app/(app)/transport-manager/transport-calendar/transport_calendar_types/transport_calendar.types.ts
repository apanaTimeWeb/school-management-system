export type CalendarEventType = 
  | 'HOLIDAY'
  | 'NO_TRANSPORT_DAY'
  | 'SPECIAL_TRIP'
  | 'EXAM_TRANSPORT'
  | 'EVENT_TRANSPORT'
  | 'ROUTE_CHANGE'
  | 'VEHICLE_SCHEDULE';

export interface TransportCalendarEvent {
  id: string;
  type: CalendarEventType;
  title: string;
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  startTime?: string; // HH:mm (optional, for specific trips)
  endTime?: string;   // HH:mm (optional, for specific trips)
  
  description: string;
  
  affectedRoutes: string[]; // e.g., ["R-01", "R-02"] or ["ALL"]
  affectedVehicles: string[];
  
  createdBy: string;
}

export interface TransportCalendarEventFormData {
  type: CalendarEventType;
  title: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  description: string;
  affectedRoutes: string; // Comma separated string for form simplicity
  affectedVehicles: string;
}
