"use client";

import React, { useRef } from 'react';
import type { StudentIdCardData } from '../student_id_card_types/student_id_card_types';
import { Download, Printer, ScanBarcode } from 'lucide-react';

interface Props {
  data: StudentIdCardData;
}

export default function StudentIdCardDisplay({ data }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert("In a real app, this would use html2canvas or a PDF generator to save the ID Card image.");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm motion-safe:animate-[slideIn_0.3s_ease-out]">
      
      {/* Action Buttons (Hidden during print) */}
      <div className="flex gap-4 w-full mb-6 print:hidden">
        <button 
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 bg-page border border-border text-text-primary font-bold py-2 rounded-lg hover:border-primary transition-colors shadow-sm"
        >
          <Download size={16} className="text-primary" /> Download
        </button>
        <button 
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-2 rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
        >
          <Printer size={16} /> Print Card
        </button>
      </div>

      {/* The ID Card */}
      <div 
        ref={cardRef}
        className="w-[320px] h-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl relative flex flex-col border border-border/50"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-multiply pointer-events-none z-0"></div>

        {/* Header - Navy Blue */}
        <div className="bg-[#0a192f] text-white p-4 flex flex-col items-center justify-center text-center relative z-10 h-28 border-b-4 border-amber-500">
          <img src={data.schoolLogo} alt="School Logo" className="w-10 h-10 mb-1 filter brightness-0 invert opacity-90" />
          <h2 className="text-[13px] font-black uppercase tracking-wider leading-tight">{data.schoolName}</h2>
          <span className="text-[9px] font-medium opacity-80 uppercase tracking-widest mt-1">Identity Card 2024-25</span>
        </div>

        {/* Photo Container */}
        <div className="relative z-10 flex justify-center -mt-10 mb-2">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-page shadow-lg">
            <img src={data.studentPhoto} alt={data.studentName} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Student Info */}
        <div className="flex flex-col items-center px-6 relative z-10 text-[#1a1a1a]">
          <h1 className="text-xl font-black uppercase tracking-wide text-[#0a192f] mb-1">{data.studentName}</h1>
          
          <div className="flex gap-2 mb-4">
            <span className="bg-amber-500/10 text-amber-600 border border-amber-500/20 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
              {data.classStr}
            </span>
            <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
              {data.section}
            </span>
          </div>

          <div className="w-full space-y-2 text-xs font-semibold mb-6">
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span className="text-gray-500">Admission No:</span>
              <span className="font-bold text-[#0a192f]">{data.admissionNo}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span className="text-gray-500">D.O.B:</span>
              <span className="font-bold text-[#0a192f]">{data.dob}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span className="text-gray-500">Blood Group:</span>
              <span className="font-bold text-red-500">{data.bloodGroup}</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span className="text-gray-500">Contact:</span>
              <span className="font-bold text-[#0a192f]">{data.contactNo}</span>
            </div>
          </div>
        </div>

        {/* Footer Barcode area */}
        <div className="mt-auto bg-gray-50 p-4 flex flex-col items-center justify-center relative z-10 border-t border-gray-200">
          <div className="flex flex-col items-center">
            {/* Mock Barcode visual */}
            <div className="flex items-center gap-[2px] h-10 mb-1 opacity-80">
              <div className="w-1 h-full bg-black"></div>
              <div className="w-2 h-full bg-black"></div>
              <div className="w-1 h-full bg-black"></div>
              <div className="w-1.5 h-full bg-black"></div>
              <div className="w-0.5 h-full bg-black"></div>
              <div className="w-2 h-full bg-black"></div>
              <div className="w-1 h-full bg-black"></div>
              <div className="w-3 h-full bg-black"></div>
              <div className="w-1 h-full bg-black"></div>
              <div className="w-2 h-full bg-black"></div>
              <div className="w-1 h-full bg-black"></div>
              <div className="w-1.5 h-full bg-black"></div>
              <div className="w-2 h-full bg-black"></div>
              <div className="w-1 h-full bg-black"></div>
              <div className="w-0.5 h-full bg-black"></div>
              <div className="w-2 h-full bg-black"></div>
            </div>
            <span className="text-[10px] font-bold tracking-widest text-gray-600 font-mono">{data.studentId}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
