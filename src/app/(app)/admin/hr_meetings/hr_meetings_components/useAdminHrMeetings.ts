"use client";

import { useState, useEffect } from "react";
import { fetchMeetings } from "../hr_meetings_api/AdminHrMeetingsApi";
import type { StaffMeeting, ActionItem } from "../hr_meetings_types/AdminHrMeetingsTypes";

export function useAdminHrMeetings() {
  const [activeTab, setActiveTab] = useState<'Schedule' | 'ActionItems'>('Schedule');
  
  const [meetings, setMeetings] = useState<StaffMeeting[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  // Modal State
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<StaffMeeting | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchMeetings({ status: activeTab === 'ActionItems' ? 'All' : statusFilter, search: searchFilter });
      if (res.success) setMeetings(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => loadData(), 300);
    return () => clearTimeout(timer);
  }, [activeTab, statusFilter, searchFilter]);

  const openMeetingModal = (meeting?: StaffMeeting) => {
    if (meeting) {
      setSelectedMeeting(meeting);
    } else {
      setSelectedMeeting({
        id: "", title: "", date: "", time: "", location: "", status: "Upcoming",
        participants: [], attendanceRecorded: false, presentCount: 0, totalCount: 0,
        agenda: "", minutes: "", actionItems: []
      });
    }
    setIsMeetingModalOpen(true);
  };

  const closeMeetingModal = () => {
    setIsMeetingModalOpen(false);
    setSelectedMeeting(null);
  };

  const saveMeeting = (meeting: StaffMeeting) => {
    if (meeting.id) {
      setMeetings(prev => prev.map(m => m.id === meeting.id ? meeting : m));
    } else {
      setMeetings(prev => [{ ...meeting, id: `mtg-${Date.now()}` }, ...prev]);
    }
    closeMeetingModal();
    alert("Meeting saved successfully.");
  };

  // Helper to extract all action items for the second tab
  const allActionItems: (ActionItem & { meetingTitle: string })[] = meetings.flatMap(m => 
    m.actionItems.map(ai => ({ ...ai, meetingTitle: m.title }))
  );

  return {
    activeTab, setActiveTab,
    meetings, allActionItems, isLoading,
    statusFilter, setStatusFilter, searchFilter, setSearchFilter,
    isMeetingModalOpen, selectedMeeting, openMeetingModal, closeMeetingModal, saveMeeting
  };
}
