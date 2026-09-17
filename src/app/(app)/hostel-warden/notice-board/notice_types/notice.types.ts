export type NoticeCategory = 'General' | 'Maintenance' | 'Event' | 'Urgent Alert';
export type TargetAudience = 'All Hostels' | 'Specific Building' | 'Specific Floor' | 'Specific Room';

export interface HostelNotice {
  id: string;
  title: string;
  content: string;
  category: NoticeCategory;
  datePosted: string;
  postedBy: string;
  targetAudience: TargetAudience;
  targetDetail?: string; // e.g. "Block A", "Floor 2"
  isBroadcasted: boolean; // if true, means it was pushed as SMS/App notification
  validUntil?: string;
}
