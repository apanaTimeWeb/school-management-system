"use client";

import React, { useState } from 'react';
import { Laptop, Smartphone, Clock, LogOut, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function SessionManagement() {
  const [showToast, setShowToast] = useState(false);

  const handleLogout = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const sessions = [
    { id: 1, device: 'Windows PC (Chrome)', ip: '192.168.1.45', location: 'New Delhi, India', time: 'Active Now', current: true, icon: Laptop },
    { id: 2, device: 'iPhone 13 (Safari)', ip: '103.5.21.90', location: 'Mumbai, India', time: 'Last seen 2 hrs ago', current: false, icon: Smartphone },
    { id: 3, device: 'MacBook Pro (Firefox)', ip: '192.168.1.12', location: 'New Delhi, India', time: 'Yesterday', current: false, icon: Laptop },
  ];

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Session Terminated Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
           <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
             <Clock size={20} className="text-info"/> Active Sessions & Login History
           </h2>
           <button onClick={handleLogout} className="bg-danger text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 transition flex items-center justify-center gap-2">
             <LogOut size={16}/> Logout from All Other Devices
           </button>
        </div>
        
        <p className="text-sm font-semibold text-text-secondary mb-6">You are currently logged in to the following devices. If you see an unrecognized device, terminate the session immediately.</p>

        <div className="flex flex-col gap-4 max-w-4xl">
           {sessions.map((session) => (
             <div key={session.id} className={clsx("border p-5 rounded-lg flex justify-between items-center transition shadow-sm", session.current ? "bg-info-bg/30 border-info/50" : "bg-bg-page border-border hover:border-danger")}>
                <div className="flex items-center gap-4">
                   <div className={clsx("w-12 h-12 rounded-full flex items-center justify-center", session.current ? "bg-info/20 text-info" : "bg-card border border-border text-text-secondary")}>
                     <session.icon size={24}/>
                   </div>
                   <div>
                     <h4 className="font-bold text-sm flex items-center gap-2">
                       {session.device} 
                       {session.current && <span className="bg-info text-white px-2 py-0.5 rounded text-[10px] uppercase">This Device</span>}
                     </h4>
                     <p className="text-xs font-semibold text-text-secondary mt-1">{session.location} • IP: {session.ip}</p>
                     <p className={clsx("text-xs font-bold mt-1", session.current ? "text-info" : "text-text-secondary")}>{session.time}</p>
                   </div>
                </div>
                {!session.current && (
                  <button onClick={handleLogout} className="text-danger hover:bg-danger/10 p-2 rounded transition flex flex-col items-center gap-1">
                    <LogOut size={20}/>
                    <span className="text-[10px] font-bold">Terminate</span>
                  </button>
                )}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
