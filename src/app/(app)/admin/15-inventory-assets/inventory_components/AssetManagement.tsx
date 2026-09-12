"use client";

import React, { useState } from 'react';
import { Monitor, UserCheck, Plus, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function AssetManagement() {
  const [activeTab, setActiveTab] = useState('register');
  const [showToast, setShowToast] = useState(false);
  
  const handleAssign = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Asset Assigned!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('register')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'register' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Monitor size={18} /> Asset Register
        </button>
        <button onClick={() => setActiveTab('assignment')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'assignment' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <UserCheck size={18} /> Asset Assignment
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'register' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Fixed Asset Register</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { id: 'AST-001', name: 'Dell Optiplex PC', loc: 'Computer Lab 1', val: '₹35,000' },
                 { id: 'AST-002', name: 'Epson Projector', loc: 'Room 10A', val: '₹42,000' },
                 { id: 'AST-003', name: 'Staff Laptop (HP)', loc: 'Unassigned', val: '₹55,000' },
               ].map(ast => (
                 <div key={ast.id} className="bg-card border border-border p-4 rounded-lg flex flex-col shadow-sm hover:border-primary transition">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-black text-text-secondary">{ast.id}</span>
                      <span className="text-[10px] bg-bg-page px-2 py-0.5 rounded font-bold">{ast.val}</span>
                    </div>
                    <h3 className="font-bold text-text-primary">{ast.name}</h3>
                    <p className={clsx("text-xs font-semibold mt-1", ast.loc === 'Unassigned' ? 'text-warning' : 'text-success')}>
                      Location: {ast.loc}
                    </p>
                 </div>
               ))}
               
               <div className="bg-bg-page border border-border border-dashed p-4 rounded-lg flex flex-col items-center justify-center text-text-secondary hover:text-primary cursor-pointer transition">
                  <Plus size={24}/>
                  <span className="font-bold text-sm mt-2">Register New Asset</span>
               </div>
             </div>
          </div>
        )}

        {activeTab === 'assignment' && (
          <div className="flex flex-col gap-6 fade-in max-w-xl mx-auto">
             <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 text-center">Assign Asset to Staff/Room</h2>
             
             <div className="bg-bg-page border border-border p-6 rounded-lg flex flex-col gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Select Asset (Unassigned)</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold">
                   <option>Staff Laptop (HP) - AST-003</option>
                 </select>
               </div>
               
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Assignee (Staff Name)</label>
                 <input type="text" placeholder="e.g. Rahul Verma" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
               </div>
               
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-bold text-text-secondary uppercase">Condition on Handover</label>
                 <input type="text" placeholder="e.g. New / Good Condition" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-info font-bold" />
               </div>
               
               <button onClick={handleAssign} className="w-full bg-info text-white py-3 rounded-lg font-bold shadow-sm hover:bg-info/90 transition mt-2">
                 Confirm Assignment
               </button>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
