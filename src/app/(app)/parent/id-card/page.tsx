"use client";

import React, { useState } from 'react';
import { 
  IdCard, ChevronDown, CheckCircle2, Download, 
  Printer, QrCode, Phone, MapPin, Droplet, User
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { 
    id: 'c1', 
    name: 'Aarav Kumar', 
    class: 'Class 5', 
    section: 'A', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4',
    studentId: 'STU-2023-0105',
    admissionNo: 'ADM-4589',
    dob: '12 May, 2013',
    bloodGroup: 'O+',
    fatherName: 'Sanjay Kumar',
    phone: '+91 98765 12345',
    address: '123, Green Park, Sector 4, New Delhi'
  },
  { 
    id: 'c2', 
    name: 'Riya Kumar', 
    class: 'Class 8', 
    section: 'B', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3',
    studentId: 'STU-2020-0412',
    admissionNo: 'ADM-3102',
    dob: '05 Aug, 2010',
    bloodGroup: 'A+',
    fatherName: 'Sanjay Kumar',
    phone: '+91 98765 12345',
    address: '123, Green Park, Sector 4, New Delhi'
  },
];

export default function IDCardPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert("Downloading High-Res PDF version of the ID Card...");
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher (Hidden when printing) */}
      <div className="print:hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Student ID Card</h1>
          <p className="text-text-secondary text-sm mt-1">View, download, and print official digital ID card.</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-[fadeIn_0.3s_ease-out]">
         
         {/* Action Buttons (Hidden when printing) */}
         <div className="print:hidden lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
               <h3 className="font-bold text-text-primary mb-4 border-b border-border pb-2">Quick Actions</h3>
               <div className="space-y-3">
                 <button 
                   onClick={handleDownload}
                   className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-sm hover:bg-indigo-700 transition-colors"
                 >
                   <Download size={18} /> Download PDF
                 </button>
                 <button 
                   onClick={handlePrint}
                   className="w-full flex items-center justify-center gap-2 py-3 bg-page text-indigo-700 border border-border font-bold rounded-xl hover:bg-indigo-50 transition-colors"
                 >
                   <Printer size={18} /> Print ID Card
                 </button>
               </div>
               <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs font-semibold text-blue-800">
                 <p className="flex items-start gap-2">
                   <IdCard size={16} className="flex-shrink-0 mt-0.5 text-blue-500"/> 
                   <span>This is a digital copy. For a physical replacement card, please contact the school administration office. Replacement fee may apply.</span>
                 </p>
               </div>
            </div>
         </div>

         {/* ID Card Display */}
         <div className="lg:col-span-8 flex justify-center order-1 lg:order-2">
            
            {/* The ID Card Component */}
            <div className="w-full max-w-[340px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-border relative print:shadow-none print:border-black print:max-w-none print:w-[8.5cm] print:h-[5.4cm]">
               
               {/* Background Pattern */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

               {/* Header / Top Section */}
               <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 px-6 py-4 text-center relative">
                  <h2 className="text-white font-extrabold text-lg tracking-wide uppercase">Delhi Public School</h2>
                  <p className="text-indigo-200 text-[10px] font-medium tracking-widest mt-0.5">EXCELLENCE IN EDUCATION</p>
                  
                  {/* Decorative Arch */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-12 bg-indigo-900 rounded-b-full shadow-inner"></div>
               </div>

               {/* Profile Photo */}
               <div className="relative pt-6 pb-2 text-center z-10">
                  <div className="w-24 h-24 mx-auto bg-white p-1 rounded-full shadow-md border-2 border-indigo-100">
                    <img src={childInfo.avatar} alt="Profile" className="w-full h-full rounded-full bg-indigo-50 object-cover" />
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold text-indigo-950 uppercase tracking-tight">{childInfo.name}</h3>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="bg-pink-100 text-pink-700 font-bold px-3 py-0.5 rounded-full text-xs border border-pink-200">
                      {childInfo.class} - {childInfo.section}
                    </span>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="px-6 py-4 space-y-3">
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 border-b border-border border-dashed pb-3">
                     <div>
                       <p className="text-[9px] text-text-tertiary font-bold uppercase">Student ID</p>
                       <p className="text-xs font-bold text-text-primary">{childInfo.studentId}</p>
                     </div>
                     <div>
                       <p className="text-[9px] text-text-tertiary font-bold uppercase">Admission No</p>
                       <p className="text-xs font-bold text-text-primary">{childInfo.admissionNo}</p>
                     </div>
                     <div>
                       <p className="text-[9px] text-text-tertiary font-bold uppercase flex items-center gap-1"><User size={10}/> D.O.B</p>
                       <p className="text-xs font-bold text-text-primary">{childInfo.dob}</p>
                     </div>
                     <div>
                       <p className="text-[9px] text-text-tertiary font-bold uppercase flex items-center gap-1"><Droplet size={10} className="text-rose-500"/> Blood Group</p>
                       <p className="text-xs font-extrabold text-rose-600">{childInfo.bloodGroup}</p>
                     </div>
                  </div>

                  <div className="space-y-2 pt-1">
                     <p className="text-xs font-medium text-text-secondary flex items-start gap-2">
                       <User size={14} className="flex-shrink-0 mt-0.5 text-indigo-400" /> 
                       <span><strong className="text-text-primary">F:</strong> {childInfo.fatherName}</span>
                     </p>
                     <p className="text-xs font-medium text-text-secondary flex items-start gap-2">
                       <Phone size={14} className="flex-shrink-0 mt-0.5 text-emerald-500" /> 
                       <span>{childInfo.phone}</span>
                     </p>
                     <p className="text-xs font-medium text-text-secondary flex items-start gap-2 leading-tight">
                       <MapPin size={14} className="flex-shrink-0 mt-0.5 text-orange-500" /> 
                       <span className="line-clamp-2">{childInfo.address}</span>
                     </p>
                  </div>
               </div>

               {/* Footer / QR Section */}
               <div className="bg-indigo-50 px-6 py-4 flex items-center justify-between border-t border-indigo-100">
                  <div className="text-center">
                    <div className="w-16 border-b-2 border-indigo-900 mx-auto mb-1 opacity-50"></div>
                    <p className="text-[9px] font-bold text-indigo-900 uppercase">Principal Sign</p>
                  </div>
                  
                  {/* Mock QR Code */}
                  <div className="w-14 h-14 bg-white p-1 rounded border border-border flex justify-center items-center">
                    <QrCode size={36} className="text-indigo-950" />
                  </div>
               </div>

            </div>

         </div>

      </div>
    </div>
  );
}
