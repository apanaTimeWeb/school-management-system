"use client";

import React, { useState } from 'react';
import { 
  Home, ChevronDown, CheckCircle2, BedDouble, 
  MapPin, Users, Wallet, Bell, Clock, CalendarDays,
  FileText, ShieldCheck, DoorOpen
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const hostelData = {
  'c1': {
    isHosteler: false,
  },
  'c2': {
    isHosteler: true,
    details: {
      hostelName: 'Girls Block A',
      room: '204',
      bed: 'B2',
      wardenName: 'Mrs. Kavita Roy',
      wardenPhone: '+91 98765 12345'
    },
    attendance: {
      status: 'Present',
      lastInTime: '06:30 PM (Today)',
      lastOutTime: '08:00 AM (Today)'
    },
    visitors: [
      { id: 1, name: 'Sanjay Kumar (Father)', relation: 'Father', approved: true },
      { id: 2, name: 'Neha Kumar (Mother)', relation: 'Mother', approved: true },
      { id: 3, name: 'Rahul Sharma (Uncle)', relation: 'Local Guardian', approved: true }
    ],
    leaves: [
      { id: 1, type: 'Weekend Outing', startDate: '14 Oct', endDate: '15 Oct', status: 'Approved' },
      { id: 2, type: 'Medical Leave', startDate: '01 Sep', endDate: '03 Sep', status: 'Completed' }
    ],
    notices: [
      { id: 1, text: 'Hostel timing changed for winters. Entry strictly by 06:00 PM.', date: '10 Oct' },
      { id: 2, text: 'Room inspection scheduled for coming Sunday.', date: '08 Oct' }
    ],
    feeStatus: 'Paid'
  }
};

export default function HostelPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const hostel = hostelData[selectedChildId as keyof typeof hostelData] as any;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Hostel Details</h1>
          <p className="text-text-secondary text-sm mt-1">Manage hostel accommodation, attendance, and leaves.</p>
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
      {!hostel.isHosteler ? (
        
        <div className="bg-white rounded-2xl border border-border shadow-sm p-12 text-center flex flex-col items-center animate-[fadeIn_0.3s_ease-out]">
           <div className="w-20 h-20 bg-page rounded-full flex items-center justify-center mb-6">
             <Home size={40} className="text-text-tertiary opacity-50" />
           </div>
           <h2 className="text-2xl font-extrabold text-text-primary mb-2">Not Availed</h2>
           <p className="text-text-secondary max-w-md">
             {childInfo.name} is a day scholar and not currently enrolled in the school hostel.
           </p>
           <button className="mt-6 px-6 py-3 bg-indigo-50 text-indigo-700 font-bold rounded-xl border border-indigo-200 hover:bg-indigo-100 transition-colors">
             Apply for Hostel
           </button>
        </div>

      ) : (
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-[fadeIn_0.3s_ease-out]">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
             
             {/* Accommodation Details */}
             <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="bg-indigo-600 p-6 text-white flex justify-between items-center relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -z-0"></div>
                   <div className="relative z-10">
                     <span className="bg-indigo-500 text-indigo-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                       Accommodation
                     </span>
                     <h2 className="text-2xl font-extrabold mt-3 flex items-center gap-2">
                       <Home size={24} /> {hostel.details?.hostelName}
                     </h2>
                   </div>
                   <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                     <BedDouble size={32} className="text-white" />
                   </div>
                </div>
                
                <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-indigo-50/30">
                   <div>
                     <p className="text-xs text-text-tertiary font-bold uppercase mb-1">Room No</p>
                     <p className="text-lg font-extrabold text-indigo-900">{hostel.details?.room}</p>
                   </div>
                   <div>
                     <p className="text-xs text-text-tertiary font-bold uppercase mb-1">Bed No</p>
                     <p className="text-lg font-extrabold text-indigo-900">{hostel.details?.bed}</p>
                   </div>
                   <div className="col-span-2 border-l border-border pl-4">
                     <p className="text-xs text-text-tertiary font-bold uppercase mb-1">Hostel Warden</p>
                     <p className="text-sm font-bold text-text-primary">{hostel.details?.wardenName}</p>
                     <p className="text-xs text-indigo-600 font-semibold">{hostel.details?.wardenPhone}</p>
                   </div>
                </div>
             </div>

             {/* Live Attendance & Leave */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
               {/* Attendance */}
               <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-text-primary flex items-center gap-2">
                     <DoorOpen size={18} className="text-emerald-500" /> Current Status
                   </h3>
                   <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                     {hostel.attendance?.status}
                   </span>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="flex items-center gap-3 p-3 bg-page rounded-xl border border-border">
                     <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                       <CheckCircle2 size={16} />
                     </div>
                     <div>
                       <p className="text-xs text-text-secondary font-bold">Last Entry (IN)</p>
                       <p className="text-sm font-extrabold text-text-primary">{hostel.attendance?.lastInTime}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-page rounded-xl border border-border">
                     <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                       <Clock size={16} />
                     </div>
                     <div>
                       <p className="text-xs text-text-secondary font-bold">Last Exit (OUT)</p>
                       <p className="text-sm font-extrabold text-text-primary">{hostel.attendance?.lastOutTime}</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Leave Tracking */}
               <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col">
                 <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                   <CalendarDays size={18} className="text-pink-500" /> Recent Leaves
                 </h3>
                 <div className="flex-1 space-y-3">
                   {hostel.leaves?.map((leave: any) => (
                     <div key={leave.id} className="flex justify-between items-center p-3 border border-border rounded-xl">
                       <div>
                         <p className="text-sm font-bold text-text-primary">{leave.type}</p>
                         <p className="text-[10px] text-text-secondary font-semibold">{leave.startDate} to {leave.endDate}</p>
                       </div>
                       <span className={clsx(
                         "text-[10px] font-bold px-2 py-1 rounded-md",
                         leave.status === 'Approved' ? "bg-emerald-100 text-emerald-700" : "bg-page text-text-tertiary"
                       )}>
                         {leave.status}
                       </span>
                     </div>
                   ))}
                 </div>
                 <button className="w-full mt-4 py-2.5 bg-pink-50 text-pink-600 font-bold rounded-xl hover:bg-pink-100 transition-colors text-sm border border-pink-200">
                   Apply Hostel Leave
                 </button>
               </div>

             </div>

             {/* Hostel Notices */}
             <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Bell size={18} className="text-indigo-500"/> Hostel Notices
                </h3>
                <div className="space-y-3">
                  {hostel.notices?.map((notice: any) => (
                    <div key={notice.id} className="flex items-start gap-3 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                      <FileText size={18} className="text-indigo-500 mt-0.5 flex-shrink-0"/>
                      <div>
                        <p className="text-sm font-medium text-indigo-950">{notice.text}</p>
                        <p className="text-[10px] font-bold text-indigo-400 mt-1">{notice.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
             {/* Visitors List */}
             <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
               <h3 className="font-bold text-text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                 <Users size={18} className="text-orange-500" /> Authorized Visitors
               </h3>
               <div className="space-y-3">
                 {hostel.visitors?.map((visitor: any) => (
                   <div key={visitor.id} className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-page rounded-full border border-border flex items-center justify-center text-text-tertiary">
                       <ShieldCheck size={18} />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-text-primary">{visitor.name}</p>
                       <p className="text-xs text-text-secondary font-medium">{visitor.relation}</p>
                     </div>
                   </div>
                 ))}
               </div>
               <button className="w-full mt-5 py-2 text-xs font-bold text-indigo-600 bg-page hover:bg-indigo-50 border border-border rounded-xl transition-colors">
                 Manage Visitors
               </button>
             </div>

             {/* Hostel Fee */}
             <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
               <h3 className="font-bold text-text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                 <Wallet size={18} className="text-emerald-500" /> Fee Status
               </h3>
               <div className="flex items-center justify-between">
                 <div>
                   <p className="text-sm font-bold text-text-primary">Q3 Hostel Fee</p>
                   <p className="text-xs text-text-secondary mt-0.5">Oct - Dec 2023</p>
                 </div>
                 <span className={clsx(
                   "px-3 py-1 rounded-full text-xs font-bold border",
                   hostel.feeStatus === 'Paid' ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-red-50 text-red-700 border-red-200"
                 )}>
                   {hostel.feeStatus}
                 </span>
               </div>
               {hostel.feeStatus !== 'Paid' && (
                 <button className="w-full mt-4 py-2 bg-indigo-600 text-white font-bold rounded-xl shadow-md text-sm hover:bg-indigo-700 transition-colors">
                   Pay Now
                 </button>
               )}
             </div>

          </div>

        </div>
      )}
    </div>
  );
}
