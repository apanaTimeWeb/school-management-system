"use client";

import React, { useState } from 'react';
import { Truck, FileText, Plus, Trash2, CheckCircle, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

export default function VehiclesDocuments() {
  const [vehicles, setVehicles] = useState([
    { id: 1, no: 'BUS-01', reg: 'UP-16-AB-1234', capacity: 40, status: 'Active', docStatus: 'Valid' },
    { id: 2, no: 'VAN-03', reg: 'DL-01-XY-9876', capacity: 15, status: 'Maintenance', docStatus: 'Expiring Soon' },
  ]);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState('fleet');

  const handleAdd = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const deleteVehicle = (id: number) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Data Saved Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('fleet')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'fleet' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Truck size={18} /> Fleet Management
        </button>
        <button onClick={() => setActiveTab('docs')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'docs' ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <FileText size={18} /> Vehicle Documents
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'fleet' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Vehicle Fleet</h2>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-wrap gap-4 items-end">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Vehicle No.</label>
                <input type="text" placeholder="e.g. BUS-05" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Reg. Number</label>
                <input type="text" placeholder="UP-14-XX-0000" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5 w-24">
                <label className="text-xs font-semibold text-text-secondary">Capacity</label>
                <input type="number" placeholder="40" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
              </div>
              <button onClick={handleAdd} className="bg-primary text-white px-4 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center gap-2">
                <Plus size={16}/> Add Vehicle
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vehicles.map(v => (
                <div key={v.id} className={clsx("border rounded-xl p-4 shadow-sm flex items-center justify-between", v.status === 'Active' ? 'bg-card border-border' : 'bg-bg-page border-warning/50')}>
                  <div className="flex items-center gap-4">
                    <div className={clsx("w-12 h-12 rounded-lg flex items-center justify-center", v.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-warning/10 text-warning')}>
                      <Truck size={24}/>
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary">{v.no} <span className="text-xs text-text-secondary font-semibold ml-2">({v.capacity} Seats)</span></h3>
                      <p className="text-xs text-text-secondary font-medium">{v.reg}</p>
                      <span className={clsx("text-[10px] font-bold uppercase mt-1 inline-block", v.status === 'Active' ? 'text-success' : 'text-warning')}>{v.status}</span>
                    </div>
                  </div>
                  <button onClick={() => deleteVehicle(v.id)} className="text-text-secondary hover:text-danger p-2 transition"><Trash2 size={16}/></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Document Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vehicles.map(v => (
                <div key={v.id} className="border border-border bg-card rounded-lg p-5 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-text-primary">{v.no}</h3>
                    {v.docStatus === 'Valid' ? (
                       <span className="flex items-center gap-1 text-xs font-bold text-success bg-success-bg px-2 py-1 rounded"><CheckCircle size={14}/> Valid</span>
                    ) : (
                       <span className="flex items-center gap-1 text-xs font-bold text-danger bg-danger-bg px-2 py-1 rounded"><AlertTriangle size={14}/> Action Needed</span>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm items-center">
                       <span className="text-text-secondary font-medium">Registration (RC)</span>
                       <span className="text-success font-bold text-xs">Valid till 2030</span>
                    </div>
                    <div className="flex justify-between text-sm items-center">
                       <span className="text-text-secondary font-medium">Insurance</span>
                       {v.docStatus === 'Valid' ? <span className="text-success font-bold text-xs">Valid till Dec 2026</span> : <span className="text-danger font-bold text-xs">Expires Next Week</span>}
                    </div>
                    <div className="flex justify-between text-sm items-center">
                       <span className="text-text-secondary font-medium">Fitness Certificate</span>
                       <span className="text-success font-bold text-xs">Valid till Oct 2026</span>
                    </div>
                  </div>
                  
                  <button onClick={handleAdd} className="w-full mt-4 bg-bg-page border border-border text-xs font-bold py-2 rounded text-text-primary hover:border-primary transition">
                    Upload/Update Document
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
