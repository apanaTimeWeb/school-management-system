"use client";

import React, { useState } from 'react';
import { Award, Download, CheckCircle, FileText } from 'lucide-react';

export default function CertificateGenerator() {
  const [showToast, setShowToast] = useState(false);
  const [certType, setCertType] = useState('Bonafide Certificate');

  const handleGenerate = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> PDF Certificate Generated!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Award size={20} className="text-primary"/> Official Certificate Generator
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-1/2 bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4">
             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Select Certificate Type</label>
               <select 
                 value={certType} 
                 onChange={(e)=>setCertType(e.target.value)} 
                 className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary font-bold"
               >
                 <option>Bonafide Certificate</option>
                 <option>Character Certificate</option>
                 <option>Transfer Certificate (TC)</option>
                 <option>Study Certificate</option>
                 <option>Leaving Certificate</option>
               </select>
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Search Student</label>
               <input type="text" placeholder="Enter Admission No or Name..." className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
             </div>

             <div className="flex flex-col gap-1.5">
               <label className="text-xs font-bold text-text-secondary uppercase">Reason / Remarks (Optional)</label>
               <textarea rows={2} className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary resize-none" placeholder="e.g. For Passport Application..."></textarea>
             </div>
             
             <div className="flex gap-2 mt-2">
               <button className="flex-1 bg-card border border-border text-text-primary py-2.5 rounded-lg font-bold shadow-sm hover:border-primary transition text-sm flex items-center justify-center gap-2">
                 <FileText size={16}/> Preview Print
               </button>
               <button onClick={handleGenerate} className="flex-1 bg-primary text-white py-2.5 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition text-sm flex items-center justify-center gap-2">
                 <Download size={16}/> Generate PDF
               </button>
             </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-bold text-sm text-text-primary">Live Certificate Preview</h3>
            
            <div className="bg-white border border-border rounded-lg aspect-[1/1.414] shadow-md flex flex-col items-center justify-center p-8 relative overflow-hidden">
               <div className="absolute inset-0 border-[10px] border-primary/10 rounded"></div>
               <img src="/placeholder-logo.png" alt="Logo" className="w-16 h-16 bg-bg-page rounded-full mb-4 opacity-50" />
               <h2 className="text-xl font-serif font-bold text-primary mb-1 uppercase tracking-widest text-center">School Name Here</h2>
               <h3 className="text-sm font-serif font-bold mb-6 underline uppercase">{certType}</h3>
               
               <p className="text-[10px] font-serif leading-relaxed text-justify opacity-80 mb-8">
                 This is to certify that Mr/Ms. <strong className="border-b border-black">_____________</strong>, 
                 Admission No. <strong className="border-b border-black">_______</strong> is/was a bonafide student of this institution 
                 studying in Class <strong className="border-b border-black">_______</strong> during the academic year 2025-2026.
               </p>
               
               <div className="w-full flex justify-between mt-auto px-4">
                  <div className="text-[10px] font-bold border-t border-black pt-1">Date</div>
                  <div className="text-[10px] font-bold border-t border-black pt-1">Principal Signature</div>
               </div>
               
               <div className="absolute bottom-4 right-4 w-12 h-12 bg-border flex items-center justify-center text-[6px] font-black rounded-sm opacity-50">
                 QR
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
