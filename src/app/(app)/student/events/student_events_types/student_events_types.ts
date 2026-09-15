export type EventCategory = 'Sports' | 'Cultural' | 'Competition' | 'Workshop' | 'General';

export interface SchoolEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  description: string;
  isRegistrationOpen: boolean;
  registrationDeadline?: string;
  imageColor?: string; // For UI aesthetic mocking
}

export interface ParticipationRecord {
  id: string;
  eventId: string;
  eventTitle: string;
  category: EventCategory;
  date: string;
  status: 'Registered' | 'Pending Approval' | 'Rejected';
}

export interface EventResult {
  id: string;
  eventId: string;
  eventTitle: string;
  category: EventCategory;
  date: string;
  rankOrScore: string; // e.g., "1st Place", "Participant", "98/100"
  hasCertificate: boolean;
}

export interface StudentEventsData {
  upcomingEvents: SchoolEvent[];
  myParticipations: ParticipationRecord[];
  results: EventResult[];
}
