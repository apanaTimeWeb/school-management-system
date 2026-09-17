export type EventCategory = 'Cultural' | 'Sports' | 'Academic' | 'Festival' | 'General';
export type EventStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'CANCELLED';

export interface HostelEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  description: string;
  totalParticipants: number;
  budgetAllocated: number;
  budgetSpent: number;
  status: EventStatus;
}
