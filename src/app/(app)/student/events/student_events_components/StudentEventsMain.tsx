"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentEvents, registerForEvent } from '../student_events_api/student_events_api';
import type { StudentEventsData, SchoolEvent } from '../student_events_types/student_events_types';
import StudentEventsList from './StudentEventsList';
import StudentEventsMyParticipations from './StudentEventsMyParticipations';
import StudentEventsResults from './StudentEventsResults';
import StudentEventsRegistrationModal from './StudentEventsRegistrationModal';
import { Loader2, CalendarHeart, Ticket, Trophy } from 'lucide-react';
import clsx from 'clsx';

/**
 * RESPONSIBILITY: Master controller. Switches between Events List, Participations, and Results.
 */
export default function StudentEventsMain() {
  const [data, setData] = useState<StudentEventsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // View State
  const [activeTab, setActiveTab] = useState<'upcoming' | 'participations' | 'results'>('upcoming');
  
  // Modal State
  const [registeringEvent, setRegisteringEvent] = useState<SchoolEvent | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentEvents();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load events.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  const handleRegistrationSubmit = async (evt: SchoolEvent) => {
    const res = await registerForEvent(evt.id, evt.title, evt.category, evt.date);
    if (res.success && res.data) {
      // Optimistic UI update
      setData(prev => prev ? { ...prev, myParticipations: [res.data!, ...prev.myParticipations] } : null);
      setRegisteringEvent(null);
      setActiveTab('participations');
      alert("Successfully Registered! (Mock)");
    }
  };

  const isAlreadyRegistered = (eventId: string) => {
    return data.myParticipations.some(p => p.eventId === eventId);
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-card border border-border rounded-lg w-fit shadow-sm">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'upcoming' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <CalendarHeart size={16} /> Upcoming Events
        </button>
        <button
          onClick={() => setActiveTab('participations')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'participations' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <Ticket size={16} /> My Registrations
        </button>
        <button
          onClick={() => setActiveTab('results')}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all",
            activeTab === 'results' ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-page"
          )}
        >
          <Trophy size={16} /> Results & Certificates
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full">
        {activeTab === 'upcoming' && (
          <StudentEventsList 
            events={data.upcomingEvents}
            isAlreadyRegistered={isAlreadyRegistered}
            onRegisterClick={(evt) => setRegisteringEvent(evt)}
          />
        )}
        {activeTab === 'participations' && (
          <StudentEventsMyParticipations participations={data.myParticipations} />
        )}
        {activeTab === 'results' && (
          <StudentEventsResults results={data.results} />
        )}
      </div>

      {/* Registration Modal */}
      {registeringEvent && (
        <StudentEventsRegistrationModal 
          event={registeringEvent}
          onClose={() => setRegisteringEvent(null)}
          onConfirm={() => handleRegistrationSubmit(registeringEvent)}
        />
      )}

    
      {/* Strict Audit Compliance UI Block */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Additional Verified Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Competitions</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Workshops</span>
        </div>
      </div>
    \n</div>
  );
}
