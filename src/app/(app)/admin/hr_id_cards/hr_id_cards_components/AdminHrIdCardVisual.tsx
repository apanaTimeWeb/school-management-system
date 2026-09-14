"use client";

import { QrCode, User } from "lucide-react";
import type { IdCardEmployeeRecord } from "../hr_id_cards_types/AdminHrIdCardsTypes";

interface AdminHrIdCardVisualProps {
  record: IdCardEmployeeRecord;
}

export default function AdminHrIdCardVisual({ record }: AdminHrIdCardVisualProps) {
  
  // Role based colors
  const getBannerColor = (role: string) => {
    switch (role) {
      case 'Teacher': return 'bg-primary'; // gold
      case 'Admin': return 'bg-danger'; // red
      case 'Staff': return 'bg-info'; // blue
      default: return 'bg-primary';
    }
  };

  return (
    <div className="w-[300px] h-[450px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col relative mx-auto border border-gray-200">
      
      {/* Top Banner & School Name */}
      <div className={`h-24 ${getBannerColor(record.role)} w-full relative flex items-center justify-center`}>
         <div className="absolute top-2 right-2 text-[10px] font-bold text-white/70 uppercase tracking-widest">{record.role}</div>
         <h2 className="text-xl font-black text-white tracking-widest uppercase">Smart Gym 360</h2>
      </div>

      {/* Photo Placeholder (Overlapping banner) */}
      <div className="w-28 h-28 rounded-full bg-gray-100 border-4 border-white shadow-md mx-auto -mt-14 flex items-center justify-center overflow-hidden z-10">
         <User size={48} className="text-gray-300" />
      </div>

      {/* Core Details */}
      <div className="flex flex-col items-center mt-3 px-4 text-center">
        <h3 className="text-xl font-black text-gray-900 leading-tight">{record.employeeName}</h3>
        <p className="text-sm font-bold text-gray-600 mt-1">{record.designation}</p>
        <p className="text-xs font-semibold text-gray-400 mb-4">{record.department}</p>
        
        {/* Meta Info Grid */}
        <div className="w-full grid grid-cols-2 gap-y-2 gap-x-4 text-left border-t border-b border-gray-100 py-3 mb-4">
          <div>
            <p className="text-[9px] font-bold text-gray-400 uppercase">EMP ID</p>
            <p className="text-xs font-black text-gray-800">{record.employeeId}</p>
          </div>
          <div>
            <p className="text-[9px] font-bold text-gray-400 uppercase">Blood Group</p>
            <p className="text-xs font-black text-red-600">{record.bloodGroup}</p>
          </div>
          <div className="col-span-2">
            <p className="text-[9px] font-bold text-gray-400 uppercase">Emergency Contact</p>
            <p className="text-xs font-black text-gray-800">{record.emergencyContact}</p>
          </div>
        </div>
      </div>

      {/* Footer & QR */}
      <div className="mt-auto bg-gray-50 p-3 flex justify-between items-center">
        <div className="flex flex-col items-start">
           <p className="text-[9px] font-bold text-gray-400 uppercase">Valid From</p>
           <p className="text-[10px] font-bold text-gray-600">{record.dateOfJoining}</p>
        </div>
        <div className="bg-white p-1 rounded-md shadow-sm border border-gray-200">
           <QrCode size={32} className="text-gray-900" />
        </div>
      </div>
    </div>
  );
}
