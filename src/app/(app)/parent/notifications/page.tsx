"use client";

import React, { useState } from 'react';
import { 
  Bell, ChevronDown, CheckCircle2, 
  Filter, AlertTriangle, CalendarClock, Wallet, GraduationCap, 
  FileText, Megaphone, Bus, Home, Trophy, Activity, Check, CheckCheck
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const mockNotifications = {
  'c1': [
    { id: 1, type: 'Emergency', title: 'Heavy Rain Alert', message: 'School will remain closed tomorrow due to heavy rainfall warnings in the city.', time: '1 hour ago', read: false },
    { id: 2, type: 'Attendance', title: 'Aarav marked Absent', message: 'Aarav was marked absent for the first period today.', time: '3 hours ago', read: false },
    { id: 3, type: 'Fee', title: 'Term 2 Fee Reminder', message: 'Gentle reminder to pay the Term 2 tuition fee before 25th Oct.', time: '1 day ago', read: true },
    { id: 4, type: 'Homework', title: 'New Math Homework', message: 'Mrs. Sharma has uploaded a new assignment on Fractions.', time: '2 days ago', read: true },
    { id: 5, type: 'Transport', title: 'Bus Delayed', message: 'Bus Route 4 is running 15 mins late due to traffic.', time: '3 days ago', read: true },
  ],
  'c2': [
    { id: 6, type: 'Result', title: 'Mid-Term Results Published', message: 'Riya\'s Mid-Term examination results are now available on the portal.', time: '2 hours ago', read: false },
    { id: 7, type: 'Event', title: 'Annual Sports Meet', message: 'Registrations are open for the Annual Sports Meet. Please register Riya if interested.', time: '1 day ago', read: false },
    { id: 8, type: 'Hostel', title: 'Hostel Night Out Allowed', message: 'Hostel students are permitted for a night out this weekend with parent approval.', time: '2 days ago', read: true },
  ]
};

export default function NotificationsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [filterType, setFilterType] = useState('All');
  
  // Local state for notifications to allow marking as read
  const [notifications, setNotifications] = useState(mockNotifications);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const currentNotifications = notifications[selectedChildId as keyof typeof mockNotifications];

  const filteredNotifications = currentNotifications.filter(n => filterType === 'All' || n.type === filterType);
  const unreadCount = currentNotifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(prev => ({
      ...prev,
      [selectedChildId]: prev[selectedChildId as keyof typeof mockNotifications].map(n => ({ ...n, read: true }))
    }));
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => ({
      ...prev,
      [selectedChildId]: prev[selectedChildId as keyof typeof mockNotifications].map(n => n.id === id ? { ...n, read: true } : n)
    }));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'Emergency': return <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center border border-red-200"><AlertTriangle size={20} /></div>;
      case 'Attendance': return <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center border border-orange-200"><CalendarClock size={20} /></div>;
      case 'Fee': 
      case 'Payment': return <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200"><Wallet size={20} /></div>;
      case 'Homework': 
      case 'Assignment': return <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border border-blue-200"><FileText size={20} /></div>;
      case 'Exam': 
      case 'Result': return <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center border border-indigo-200"><GraduationCap size={20} /></div>;
      case 'Transport': return <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center border border-yellow-200"><Bus size={20} /></div>;
      case 'Hostel': return <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center border border-teal-200"><Home size={20} /></div>;
      case 'Event': return <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center border border-pink-200"><Trophy size={20} /></div>;
      case 'Health': return <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center border border-rose-200"><Activity size={20} /></div>;
      default: return <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center border border-gray-200"><Megaphone size={20} /></div>;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight flex items-center gap-3">
            Notifications 
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">{unreadCount} Unread</span>
            )}
          </h1>
          <p className="text-text-secondary text-sm mt-1">Stay updated with alerts and announcements from school.</p>
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
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); setFilterType('All'); }}
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

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        
        {/* Actions & Filters */}
        <div className="p-4 bg-page/50 border-b border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
           <div className="flex items-center gap-3 w-full sm:w-auto">
             <Filter size={18} className="text-text-secondary" />
             <select 
               className="p-2 bg-white border border-border rounded-lg text-sm font-semibold focus:outline-none focus:border-indigo-500 w-full sm:w-auto"
               value={filterType}
               onChange={(e) => setFilterType(e.target.value)}
             >
               <option value="All">All Notifications</option>
               <option value="Emergency">Emergency</option>
               <option value="Attendance">Attendance</option>
               <option value="Fee">Fee & Payment</option>
               <option value="Homework">Academics (HW/Exam/Result)</option>
               <option value="Transport">Transport</option>
               <option value="Hostel">Hostel</option>
               <option value="Event">Events & Notices</option>
             </select>
           </div>
           
           {unreadCount > 0 && (
             <button 
               onClick={markAllAsRead}
               className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 font-bold text-sm rounded-lg hover:bg-indigo-100 transition-colors w-full sm:w-auto border border-indigo-200"
             >
               <CheckCheck size={16} /> Mark all as read
             </button>
           )}
        </div>

        {/* Notifications Feed */}
        <div className="p-0">
           {filteredNotifications.length === 0 ? (
             <div className="text-center py-20">
                <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-border text-text-tertiary">
                  <Bell size={32} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">All Caught Up!</h3>
                <p className="text-sm text-text-secondary">You don't have any notifications here.</p>
             </div>
           ) : (
             <div className="flex flex-col">
               {filteredNotifications.map(notification => (
                 <div 
                   key={notification.id} 
                   onClick={() => !notification.read && markAsRead(notification.id)}
                   className={clsx(
                     "flex gap-4 p-5 border-b border-border transition-colors cursor-pointer hover:bg-page/50 group relative overflow-hidden",
                     !notification.read ? "bg-indigo-50/30" : "bg-white"
                   )}
                 >
                    {/* Read status indicator edge */}
                    {!notification.read && <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>}
                    
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1 relative z-10">
                      {getNotificationIcon(notification.type)}
                      {!notification.read && (
                        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className={clsx("text-sm", !notification.read ? "font-extrabold text-text-primary" : "font-bold text-text-secondary")}>
                          {notification.title}
                        </h4>
                        <span className="text-[10px] font-bold text-text-tertiary whitespace-nowrap">
                          {notification.time}
                        </span>
                      </div>
                      <p className={clsx("text-sm mt-1 leading-relaxed", !notification.read ? "text-text-secondary font-medium" : "text-text-tertiary")}>
                        {notification.message}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                         <span className="text-[10px] font-bold bg-page border border-border px-2 py-0.5 rounded text-text-tertiary uppercase tracking-wider">
                           {notification.type}
                         </span>
                      </div>
                    </div>

                    {/* Mark as read tick (visible on hover if unread) */}
                    {!notification.read && (
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={(e) => { e.stopPropagation(); markAsRead(notification.id); }}
                          className="w-8 h-8 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-text-tertiary hover:text-indigo-600 hover:border-indigo-300"
                        >
                          <Check size={16} />
                        </button>
                      </div>
                    )}
                 </div>
               ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
