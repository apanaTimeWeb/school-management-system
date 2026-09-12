"use client";

import React, { useState } from 'react';
import { Scan, ShieldCheck, ShieldAlert, CheckCircle } from 'lucide-react';

export default function QRVerification() {
  const [verifyStatus, setVerifyStatus] = useState<'idle' | 'success' | 'fail'>('idle');
  const [serial, setSerial] = useState('');

  const handleVerify = () => {
    if(!serial) return;
    if(serial === 'CERT-2026-1001') {
      setVerifyStatus('success');
    } else {
      setVerifyStatus('fail');
    }
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in">
      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Scan size={20} className="text-primary"/> Online QR & Serial Verification
        </h2>
        
        <div className="flex flex-col items-center justify-center h-full pb-10">
           
           <div className="w-full max-w-md bg-bg-page border border-border p-8 rounded-xl flex flex-col gap-6 shadow-sm">
              <div className="text-center">
                <Scan size={48} className="mx-auto text-text-secondary mb-2" />
                <h3 className="font-bold text-lg">Verify Authenticity</h3>
                <p className="text-xs text-text-secondary font-semibold mt-1">Enter the Serial Number printed on the certificate or scan the QR code using a mobile device.</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={serial}
                    onChange={(e)=>setSerial(e.target.value)}
                    placeholder="Enter Serial (e.g. CERT-2026-1001)" 
                    className="flex-1 bg-bg-input border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary font-bold text-center" 
                  />
                </div>
                <button onClick={handleVerify} className="w-full bg-primary text-white py-3 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition text-sm">
                  Verify Certificate
                </button>
              </div>

              {verifyStatus === 'success' && (
                <div className="bg-success-bg border border-success p-4 rounded-lg flex flex-col items-center text-center fade-in">
                   <ShieldCheck size={32} className="text-success mb-2"/>
                   <h4 className="font-bold text-success text-sm uppercase">Valid & Authentic</h4>
                   <p className="text-xs font-semibold mt-1">Issued To: Aarav Sharma<br/>Type: Bonafide Certificate<br/>Issued On: 10-Oct-2026</p>
                </div>
              )}

              {verifyStatus === 'fail' && (
                <div className="bg-danger-bg border border-danger p-4 rounded-lg flex flex-col items-center text-center fade-in">
                   <ShieldAlert size={32} className="text-danger mb-2"/>
                   <h4 className="font-bold text-danger text-sm uppercase">Invalid Record Found</h4>
                   <p className="text-xs font-semibold mt-1">No matching certificate exists in our database for this serial number.</p>
                </div>
              )}

           </div>

        </div>
      </div>
    </div>
  );
}
