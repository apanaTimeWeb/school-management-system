"use client";

import React, { useState } from 'react';
import { 
  Bus, ChevronDown, CheckCircle2, MapPin, Navigation, 
  Clock, User, Phone, Wallet, Bell, AlertTriangle, ShieldCheck
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const transportData = {
  'c1': {
    usesTransport: true,
    vehicle: {
      number: 'DL 1P C 1234',
      route: 'Route 15 - Green Park',
      driverName: 'Ramesh Singh',
      driverPhone: '+91 98765 43210',
      attendantName: 'Sunita Devi',
    },
    stop: {
      name: 'Green Park Metro Gate 2',
      pickupTime: '07:15 AM',
      dropTime: '02:45 PM',
    },
    status: {
      currentStatus: 'On Time', // 'On Time', 'Delayed', 'Arrived'
      eta: '02:45 PM',
      lastLocation: 'Near South Extension (1.5 km away)',
    },
    feeStatus: 'Paid',
    notifications: [
      { id: 1, text: 'Bus left the school premises at 02:00 PM.', time: '02:00 PM', type: 'info' },
      { id: 2, text: 'Bus reached the first stop.', time: '02:20 PM', type: 'info' }
    ]
  },
  'c2': {
    usesTransport: false,
  }
};

export default function TransportPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [trackingActive, setTrackingActive] = useState(false);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const transport = transportData[selectedChildId as keyof typeof transportData];

  // Simulated GPS tracker toggle
  const handleTrackLive = () => {
    setTrackingActive(true);
    setTimeout(() => {
      setTrackingActive(false);
    }, 5000); // Stop tracking simulation after 5 secs
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">School Transport</h1>
          <p className="text-text-secondary text-sm mt-1">Track bus routes, schedule, and driver details.</p>
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

      {/* Conditional View */}
      {!transport.usesTransport ? (
        
        <div className="bg-white rounded-2xl border border-border shadow-sm p-12 text-center flex flex-col items-center animate-[fadeIn_0.3s_ease-out]">
           <div className="w-20 h-20 bg-page rounded-full flex items-center justify-center mb-6">
             <Bus size={40} className="text-text-tertiary opacity-50" />
           </div>
           <h2 className="text-2xl font-extrabold text-text-primary mb-2">Not Availed</h2>
           <p className="text-text-secondary max-w-md">
             {childInfo.name} is not currently enrolled in the school transport facility. 
           </p>
           <button className="mt-6 px-6 py-3 bg-indigo-50 text-indigo-700 font-bold rounded-xl border border-indigo-200 hover:bg-indigo-100 transition-colors">
             Apply for Transport
           </button>
        </div>

      ) : (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-[fadeIn_0.3s_ease-out]">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Live Tracking / Status Card */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
               <div className="bg-indigo-600 p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <span className="bg-indigo-500 text-indigo-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {transport.vehicle.route}
                    </span>
                    <h2 className="text-2xl font-extrabold mt-3 flex items-center gap-2">
                      <Bus size={24} /> Bus No: {transport.vehicle.number}
                    </h2>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="text-indigo-200 text-sm font-semibold">Current Status</p>
                    <p className="text-xl font-extrabold flex items-center gap-2">
                      {transport.status.currentStatus === 'On Time' && <CheckCircle2 size={20} className="text-emerald-400" />}
                      {transport.status.currentStatus}
                    </p>
                  </div>
               </div>

               <div className="p-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Simulated Tracking Map Area */}
                    <div className="bg-slate-100 rounded-xl border border-slate-200 p-4 h-48 relative overflow-hidden flex flex-col items-center justify-center text-center">
                       {trackingActive ? (
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] bg-indigo-50 opacity-90 z-0 animate-pulse"></div>
                       ) : (
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] bg-slate-200 opacity-50 z-0"></div>
                       )}
                       
                       <div className="relative z-10 space-y-3">
                         <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                           <Navigation size={24} />
                         </div>
                         {trackingActive ? (
                           <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-border">
                             <p className="text-xs font-bold text-emerald-600 flex items-center gap-1"><ShieldCheck size={14}/> GPS Connected</p>
                             <p className="text-sm font-semibold text-text-primary">{transport.status.lastLocation}</p>
                           </div>
                         ) : (
                           <button onClick={handleTrackLive} className="bg-white px-4 py-2 rounded-xl border border-border text-sm font-bold text-indigo-600 shadow-sm hover:shadow-md transition-all">
                             Track Live Location
                           </button>
                         )}
                       </div>
                    </div>

                    {/* Schedule & Stops */}
                    <div className="space-y-4">
                       <h3 className="font-bold text-text-primary border-b border-border pb-2">Stop Details</h3>
                       
                       <div className="flex items-start gap-3">
                         <div className="mt-1"><MapPin className="text-indigo-500" size={18} /></div>
                         <div>
                           <p className="text-xs text-text-secondary uppercase font-bold tracking-wider">Assigned Stop</p>
                           <p className="text-sm font-bold text-text-primary">{transport.stop.name}</p>
                         </div>
                       </div>
                       
                       <div className="flex gap-4 pt-2">
                         <div className="flex-1 bg-page p-3 rounded-xl border border-border">
                            <div className="flex items-center gap-1 text-emerald-600 mb-1">
                              <Clock size={14} /> <span className="text-xs font-bold">Pickup</span>
                            </div>
                            <p className="text-base font-extrabold text-text-primary">{transport.stop.pickupTime}</p>
                         </div>
                         <div className="flex-1 bg-page p-3 rounded-xl border border-border">
                            <div className="flex items-center gap-1 text-orange-600 mb-1">
                              <Clock size={14} /> <span className="text-xs font-bold">Drop</span>
                            </div>
                            <p className="text-base font-extrabold text-text-primary">{transport.stop.dropTime}</p>
                         </div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Notifications / Logs */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
              <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                <Bell size={18} className="text-indigo-500"/> Transport Logs & Updates
              </h3>
              <div className="space-y-3">
                {transport.notifications.map((notif) => (
                  <div key={notif.id} className="flex gap-4 p-3 bg-page rounded-xl border border-border">
                    <div className="text-indigo-500 mt-0.5"><Clock size={16} /></div>
                    <div>
                      <p className="text-sm text-text-primary font-medium">{notif.text}</p>
                      <p className="text-xs text-text-tertiary mt-1 font-bold">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Staff & Fees */}
          <div className="space-y-6">
             
             {/* Staff Details */}
             <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
               <h3 className="font-bold text-text-primary mb-4 border-b border-border pb-2">Staff Contact</h3>
               
               <div className="space-y-4">
                 <div className="flex items-start gap-3">
                   <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                     <User size={20} />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-text-secondary uppercase">Driver</p>
                     <p className="text-sm font-extrabold text-text-primary">{transport.vehicle.driverName}</p>
                     <p className="text-sm text-indigo-600 flex items-center gap-1 mt-1 font-medium">
                       <Phone size={14} /> {transport.vehicle.driverPhone}
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-3 pt-3 border-t border-border">
                   <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                     <ShieldCheck size={20} />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-text-secondary uppercase">Bus Attendant</p>
                     <p className="text-sm font-extrabold text-text-primary">{transport.vehicle.attendantName}</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Transport Fee */}
             <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
               <h3 className="font-bold text-text-primary mb-4 border-b border-border pb-2">Transport Fee Status</h3>
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className={clsx(
                     "w-12 h-12 rounded-xl flex items-center justify-center",
                     transport.feeStatus === 'Paid' ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                   )}>
                     <Wallet size={24} />
                   </div>
                   <div>
                     <p className="text-sm font-bold text-text-primary">Current Quarter</p>
                     <p className="text-xs text-text-secondary">Oct - Dec 2023</p>
                   </div>
                 </div>
                 
                 <span className={clsx(
                   "px-3 py-1 rounded-full text-xs font-bold border",
                   transport.feeStatus === 'Paid' ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-red-50 text-red-700 border-red-200"
                 )}>
                   {transport.feeStatus}
                 </span>
               </div>
             </div>

          </div>

        </div>
      )}
    </div>
  );
}
