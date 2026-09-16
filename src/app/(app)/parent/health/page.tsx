"use client";

import React, { useState } from 'react';
import { 
  HeartPulse, ChevronDown, CheckCircle2, AlertTriangle, 
  Droplet, Activity, Stethoscope, Phone, FileText, Download, ShieldAlert,
  Ruler, Weight, Eye
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const healthData = {
  'c1': {
    profile: {
      bloodGroup: 'O+',
      height: '135 cm',
      weight: '32 kg',
      vision: '6/6 (Normal)',
      bmi: '17.6 (Healthy)'
    },
    alerts: [
      { id: 1, type: 'Allergy', text: 'Peanut Allergy - Severe', severity: 'high' },
      { id: 2, type: 'Alert', text: 'Mild Asthma - Inhaler kept in school infirmary', severity: 'medium' }
    ],
    emergency: {
      contactName: 'Sanjay Kumar (Father)',
      contactPhone: '+91 98765 12345',
      doctorName: 'Dr. R.K. Sharma',
      doctorPhone: '+91 98111 22233',
      hospital: 'City Hospital, Sector 4'
    },
    checkups: [
      { id: 1, date: '15 Sep, 2023', type: 'General Physical & Dental', doctor: 'Dr. Verma', notes: 'Healthy. Mild tartar in lower teeth, recommended brushing twice.' },
      { id: 2, date: '10 Feb, 2023', type: 'Eye Checkup', doctor: 'Dr. Singh', notes: 'Vision is perfect (6/6).' }
    ],
    records: [
      { id: 1, name: 'Dental_Report_Sep23.pdf', size: '1.2 MB', date: '15 Sep, 2023' },
      { id: 2, name: 'Vaccination_Card_Updated.pdf', size: '2.4 MB', date: '01 Apr, 2023' }
    ]
  },
  'c2': {
    profile: {
      bloodGroup: 'A+',
      height: '152 cm',
      weight: '45 kg',
      vision: '6/9 (Wears Glasses)',
      bmi: '19.5 (Healthy)'
    },
    alerts: [
      { id: 1, type: 'Condition', text: 'Wears prescribed spectacles for myopia', severity: 'low' }
    ],
    emergency: {
      contactName: 'Neha Kumar (Mother)',
      contactPhone: '+91 98765 54321',
      doctorName: 'Dr. R.K. Sharma',
      doctorPhone: '+91 98111 22233',
      hospital: 'City Hospital, Sector 4'
    },
    checkups: [
      { id: 1, date: '15 Sep, 2023', type: 'General Physical & Dental', doctor: 'Dr. Verma', notes: 'Healthy. Growth is normal.' },
    ],
    records: [
      { id: 1, name: 'General_Health_Report.pdf', size: '1.5 MB', date: '15 Sep, 2023' },
      { id: 2, name: 'Eye_Prescription_2023.pdf', size: '0.8 MB', date: '20 Aug, 2023' }
    ]
  }
};

export default function HealthPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const data = healthData[selectedChildId as keyof typeof healthData];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Health & Medical</h1>
          <p className="text-text-secondary text-sm mt-1">Access permitted health information, checkups, and medical alerts.</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Left Column (Alerts & Emergency) */}
        <div className="lg:col-span-1 space-y-6">
           
           {/* Alerts & Allergies */}
           <div className="bg-white rounded-2xl border border-border shadow-sm p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500"></div>
             <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
               <ShieldAlert size={18} className="text-rose-500" /> Medical Alerts & Allergies
             </h3>
             <div className="space-y-3">
               {data.alerts.map(alert => (
                 <div key={alert.id} className={clsx(
                   "p-4 rounded-xl border flex items-start gap-3",
                   alert.severity === 'high' ? "bg-rose-50 border-rose-200" : 
                   alert.severity === 'medium' ? "bg-orange-50 border-orange-200" : "bg-blue-50 border-blue-200"
                 )}>
                   <AlertTriangle size={18} className={clsx(
                     "mt-0.5",
                     alert.severity === 'high' ? "text-rose-600" : 
                     alert.severity === 'medium' ? "text-orange-600" : "text-blue-600"
                   )} />
                   <div>
                     <p className={clsx(
                       "text-xs font-bold uppercase tracking-wider mb-1",
                       alert.severity === 'high' ? "text-rose-700" : 
                       alert.severity === 'medium' ? "text-orange-700" : "text-blue-700"
                     )}>{alert.type}</p>
                     <p className="text-sm font-semibold text-text-primary">{alert.text}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Emergency Information */}
           <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
             <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-2">
               <Phone size={18} className="text-indigo-500" /> Emergency Information
             </h3>
             <div className="space-y-4">
               <div>
                 <p className="text-xs text-text-tertiary font-bold uppercase mb-1">Emergency Contact</p>
                 <p className="text-sm font-extrabold text-text-primary">{data.emergency.contactName}</p>
                 <p className="text-xs text-indigo-600 font-bold">{data.emergency.contactPhone}</p>
               </div>
               <div>
                 <p className="text-xs text-text-tertiary font-bold uppercase mb-1">Family Doctor</p>
                 <p className="text-sm font-extrabold text-text-primary">{data.emergency.doctorName}</p>
                 <p className="text-xs text-indigo-600 font-bold">{data.emergency.doctorPhone}</p>
               </div>
               <div>
                 <p className="text-xs text-text-tertiary font-bold uppercase mb-1">Preferred Hospital</p>
                 <p className="text-sm font-bold text-text-primary">{data.emergency.hospital}</p>
               </div>
             </div>
           </div>

        </div>

        {/* Right Column (Profile, Checkups, Records) */}
        <div className="lg:col-span-2 space-y-6">
           
           {/* Health Profile Grid */}
           <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="bg-emerald-500 p-5 text-white flex items-center gap-3">
                <HeartPulse size={24} />
                <h2 className="text-xl font-extrabold">Health Profile</h2>
              </div>
              <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-emerald-50/30">
                 <div className="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                   <Droplet size={24} className="text-rose-500 mb-2" />
                   <p className="text-xs text-text-secondary font-bold uppercase">Blood Group</p>
                   <p className="text-lg font-extrabold text-rose-600">{data.profile.bloodGroup}</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                   <Ruler size={24} className="text-emerald-500 mb-2" />
                   <p className="text-xs text-text-secondary font-bold uppercase">Height</p>
                   <p className="text-lg font-extrabold text-emerald-700">{data.profile.height}</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                   <Weight size={24} className="text-emerald-500 mb-2" />
                   <p className="text-xs text-text-secondary font-bold uppercase">Weight</p>
                   <p className="text-lg font-extrabold text-emerald-700">{data.profile.weight}</p>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                   <Eye size={24} className="text-emerald-500 mb-2" />
                   <p className="text-xs text-text-secondary font-bold uppercase">Vision</p>
                   <p className="text-sm font-extrabold text-emerald-700">{data.profile.vision}</p>
                 </div>
              </div>
           </div>

           {/* Health Checkups */}
           <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
             <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
               <Stethoscope size={18} className="text-blue-500" /> School Health Checkups
             </h3>
             <div className="space-y-4">
               {data.checkups.map(checkup => (
                 <div key={checkup.id} className="p-4 border border-border rounded-xl hover:shadow-sm transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3 border-b border-border pb-2">
                       <h4 className="font-extrabold text-text-primary text-sm">{checkup.type}</h4>
                       <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{checkup.date}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-1">
                        <p className="text-[10px] text-text-tertiary font-bold uppercase">Consulted By</p>
                        <p className="text-xs font-bold text-text-primary">{checkup.doctor}</p>
                      </div>
                      <div className="md:col-span-3">
                        <p className="text-[10px] text-text-tertiary font-bold uppercase">Remarks & Notes</p>
                        <p className="text-sm text-text-secondary font-medium">{checkup.notes}</p>
                      </div>
                    </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Medical Records */}
           <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
             <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
               <FileText size={18} className="text-orange-500" /> Medical Records & Files
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {data.records.map(record => (
                 <div key={record.id} className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-indigo-300 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                         <FileText size={20} />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-text-primary line-clamp-1">{record.name}</p>
                         <p className="text-[10px] text-text-tertiary font-bold mt-0.5">{record.date} • {record.size}</p>
                       </div>
                    </div>
                    <button className="text-text-tertiary hover:text-indigo-600 transition-colors">
                      <Download size={18} />
                    </button>
                 </div>
               ))}
             </div>
           </div>

        </div>

      </div>
    </div>
  );
}
