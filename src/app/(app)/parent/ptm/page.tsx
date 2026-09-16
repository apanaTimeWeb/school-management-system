"use client";

import React, { useState } from 'react';
import { 
  Users, ChevronDown, CheckCircle2, CalendarDays, Clock, 
  MapPin, CheckSquare, XSquare, Plus, MessageSquareQuote, 
  Star, UserCircle, Send
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const ptmData = {
  'c1': {
    teachers: ['Mrs. Sharma (Class Teacher)', 'Mr. Verma (Sports)', 'Ms. Gupta (Science)'],
    upcoming: [
      { id: 1, teacher: 'Mrs. Sharma (Class Teacher)', date: '20 Oct, 2023', time: '10:00 AM - 10:15 AM', mode: 'In-Person', room: 'Class 5A', status: 'Confirmed' }
    ],
    history: [
      { id: 2, teacher: 'Ms. Gupta (Science)', date: '15 Aug, 2023', time: '11:00 AM', status: 'Attended', remarks: 'Aarav is grasping concepts well but needs to practice numericals.', feedback: 'Helpful session.' }
    ]
  },
  'c2': {
    teachers: ['Mr. Gupta (Class Teacher)', 'Mrs. Nair (Physics)', 'Mr. Singh (Math)'],
    upcoming: [],
    history: [
      { id: 3, teacher: 'Mr. Gupta (Class Teacher)', date: '15 Sep, 2023', time: '09:30 AM', status: 'Attended', remarks: 'Good progress. Needs to submit assignments on time.', feedback: '' },
      { id: 4, teacher: 'Mr. Singh (Math)', date: '15 Sep, 2023', time: '10:00 AM', status: 'Missed', remarks: 'Parent did not attend.', feedback: '' }
    ]
  }
};

const mockSlots = ['09:00 AM', '09:15 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'];

export default function PTMPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history'>('upcoming');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const currentData = ptmData[selectedChildId as keyof typeof ptmData];

  // Booking Form State
  const [selectedTeacher, setSelectedTeacher] = useState(currentData.teachers[0]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Feedback State
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackId, setFeedbackId] = useState<number | null>(null);

  React.useEffect(() => {
    setSelectedTeacher(currentData.teachers[0]);
    setShowBookingForm(false);
  }, [selectedChildId, currentData.teachers]);

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowBookingForm(false);
      alert('Appointment requested successfully!');
      setSelectedDate('');
      setSelectedSlot('');
    }, 1500);
  };

  const handleSubmitFeedback = (id: number) => {
    if (!feedbackText.trim()) return;
    alert(`Feedback submitted: ${feedbackText}`);
    setFeedbackId(null);
    setFeedbackText('');
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Parent-Teacher Meeting</h1>
          <p className="text-text-secondary text-sm mt-1">Book appointments and track your meetings with teachers.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm min-h-[500px]">
        
        {/* Tabs */}
        <div className="flex border-b border-border bg-page/30">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'upcoming' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <CalendarDays size={18} /> Upcoming & Booking
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'history' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <History size={18} /> Meeting History
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'upcoming' ? (
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-[fadeIn_0.3s_ease-out]">
               
               {/* Upcoming Meetings List */}
               <div className="space-y-4">
                 <h3 className="font-bold text-text-primary flex items-center gap-2 mb-4">
                   <Clock className="text-indigo-500" size={18} /> Scheduled Meetings
                 </h3>
                 
                 {currentData.upcoming.length === 0 ? (
                   <div className="p-8 border border-dashed border-border rounded-2xl text-center flex flex-col items-center">
                     <Users size={32} className="text-text-tertiary opacity-50 mb-3" />
                     <p className="text-sm font-bold text-text-primary">No upcoming meetings</p>
                     <p className="text-xs text-text-secondary mt-1">You can book an appointment using the form.</p>
                   </div>
                 ) : (
                   currentData.upcoming.map((meeting) => (
                     <div key={meeting.id} className="p-5 border border-indigo-100 bg-indigo-50/50 rounded-2xl hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-extrabold text-indigo-900">{meeting.teacher}</h4>
                            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-[10px] font-bold mt-1 inline-block">
                              {meeting.status}
                            </span>
                          </div>
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm">
                            <UserCircle size={24} />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-indigo-100/50">
                           <div className="flex items-center gap-2">
                             <CalendarDays size={14} className="text-indigo-400" />
                             <span className="text-xs font-bold text-indigo-800">{meeting.date}</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <Clock size={14} className="text-indigo-400" />
                             <span className="text-xs font-bold text-indigo-800">{meeting.time}</span>
                           </div>
                           <div className="flex items-center gap-2 col-span-2">
                             <MapPin size={14} className="text-indigo-400" />
                             <span className="text-xs font-bold text-indigo-800">{meeting.mode} - {meeting.room}</span>
                           </div>
                        </div>
                     </div>
                   ))
                 )}
               </div>

               {/* Booking Form */}
               <div>
                 <div className="bg-white border border-border rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-bl-full -z-0"></div>
                    
                    <div className="flex justify-between items-center mb-6 relative z-10">
                      <h3 className="font-bold text-text-primary flex items-center gap-2">
                        <Plus className="text-pink-500" size={18} /> Book Appointment
                      </h3>
                      {!showBookingForm && (
                        <button onClick={() => setShowBookingForm(true)} className="text-xs font-bold bg-pink-50 text-pink-600 px-3 py-1.5 rounded-lg hover:bg-pink-100 transition-colors">
                          Open Form
                        </button>
                      )}
                    </div>

                    {!showBookingForm ? (
                      <div className="text-center py-8">
                        <p className="text-sm text-text-secondary">Click the button above to request a new meeting slot with a teacher.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleBookAppointment} className="space-y-5 relative z-10 animate-[fadeIn_0.2s_ease-out]">
                        
                        <div>
                          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Select Teacher</label>
                          <select 
                            value={selectedTeacher}
                            onChange={(e) => setSelectedTeacher(e.target.value)}
                            className="w-full px-4 py-2.5 bg-page border border-border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 ring-pink-500/20 focus:border-pink-500 transition-all appearance-none"
                            required
                          >
                            {currentData.teachers.map((t, i) => (
                              <option key={i} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Select Date</label>
                          <input 
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full px-4 py-2.5 bg-page border border-border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 ring-pink-500/20 focus:border-pink-500 transition-all text-text-primary"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Available Time Slots</label>
                          <div className="grid grid-cols-3 gap-2">
                            {mockSlots.map((slot, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={clsx(
                                  "py-2 px-1 text-xs font-bold rounded-lg border transition-all",
                                  selectedSlot === slot 
                                    ? "bg-pink-500 border-pink-500 text-white shadow-md" 
                                    : "bg-white border-border text-text-secondary hover:border-pink-300 hover:text-pink-600"
                                )}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex gap-3">
                          <button 
                            type="button"
                            onClick={() => setShowBookingForm(false)}
                            className="flex-1 py-3 bg-page text-text-primary rounded-xl font-bold text-sm hover:bg-page/80 transition-colors"
                          >
                            Cancel
                          </button>
                          <button 
                            type="submit"
                            disabled={!selectedDate || !selectedSlot || isSubmitting}
                            className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center"
                          >
                            {isSubmitting ? (
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : "Request Slot"}
                          </button>
                        </div>

                      </form>
                    )}
                 </div>
               </div>

            </div>

          ) : (
            
            /* History Tab */
            <div className="animate-[fadeIn_0.3s_ease-out]">
              {currentData.history.length === 0 ? (
                <div className="text-center py-16">
                   <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 text-text-tertiary">
                     <History size={32} />
                   </div>
                   <h3 className="text-lg font-bold text-text-primary">No Meeting History</h3>
                   <p className="text-sm text-text-secondary">You haven't attended any PTMs yet.</p>
                </div>
              ) : (
                <div className="space-y-4 max-w-3xl mx-auto">
                  {currentData.history.map((meeting) => (
                    <div key={meeting.id} className="border border-border rounded-2xl overflow-hidden bg-white shadow-sm">
                      
                      <div className="p-4 bg-page/50 border-b border-border flex justify-between items-center">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-secondary shadow-sm">
                             <UserCircle size={20} />
                           </div>
                           <div>
                             <h4 className="font-bold text-text-primary">{meeting.teacher}</h4>
                             <p className="text-[10px] text-text-secondary font-bold">{meeting.date} at {meeting.time}</p>
                           </div>
                        </div>
                        <span className={clsx(
                          "px-3 py-1 rounded-full text-xs font-bold",
                          meeting.status === 'Attended' ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                        )}>
                          {meeting.status}
                        </span>
                      </div>

                      <div className="p-5 space-y-4">
                         
                         {/* Teacher Remarks */}
                         <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4">
                           <h5 className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                             <MessageSquareQuote size={14}/> Teacher's Remarks
                           </h5>
                           <p className="text-sm text-indigo-950 font-medium leading-relaxed">
                             "{meeting.remarks}"
                           </p>
                         </div>

                         {/* Parent Feedback */}
                         {meeting.status === 'Attended' && (
                           <div>
                             {meeting.feedback ? (
                               <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4">
                                 <h5 className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                                   <Star size={14}/> Your Feedback
                                 </h5>
                                 <p className="text-sm text-orange-950 font-medium leading-relaxed">
                                   "{meeting.feedback}"
                                 </p>
                               </div>
                             ) : (
                               feedbackId === meeting.id ? (
                                 <div className="flex gap-2 animate-[fadeIn_0.2s_ease-out]">
                                   <input 
                                     type="text" 
                                     value={feedbackText}
                                     onChange={(e) => setFeedbackText(e.target.value)}
                                     placeholder="Write your feedback..."
                                     className="flex-1 bg-page border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-orange-400"
                                   />
                                   <button 
                                     onClick={() => handleSubmitFeedback(meeting.id)}
                                     className="bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center justify-center hover:bg-orange-600 transition-colors"
                                   >
                                     <Send size={16}/>
                                   </button>
                                 </div>
                               ) : (
                                 <button 
                                   onClick={() => setFeedbackId(meeting.id)}
                                   className="text-xs font-bold text-orange-600 hover:text-orange-800 flex items-center gap-1 transition-colors"
                                 >
                                   <Plus size={14}/> Add Feedback
                                 </button>
                               )
                             )}
                           </div>
                         )}
                         
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}
