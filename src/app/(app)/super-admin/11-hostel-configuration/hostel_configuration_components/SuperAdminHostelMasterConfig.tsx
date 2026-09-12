"use client";

import { useState } from "react";
import { Building2, BedDouble, FileText, Settings, Plus, Edit, Trash2 } from "lucide-react";

export default function SuperAdminHostelMasterConfig() {
  const [activeSubTab, setActiveSubTab] = useState("rooms");
  const [hostelEnabled, setHostelEnabled] = useState(true);

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex justify-between items-center">
        <span>Hostel enabled होने पर:</span>
        <label className="flex items-center gap-2 cursor-pointer">
          <span className="text-xs font-bold text-text-primary uppercase">Enable Hostel Module</span>
          <input 
            type="checkbox" 
            checked={hostelEnabled}
            onChange={(e) => setHostelEnabled(e.target.checked)}
            className="w-4 h-4 accent-primary" 
          />
        </label>
      </div>

      {!hostelEnabled ? (
        <div className="p-10 flex flex-col items-center justify-center text-text-secondary gap-3">
          <Building2 size={48} className="opacity-20" />
          <p className="font-semibold text-sm">Hostel module is currently disabled.</p>
          <p className="text-xs">Enable it from the top bar to configure hostel settings.</p>
        </div>
      ) : (
        <>
          {/* Sub Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
            <button 
              onClick={() => setActiveSubTab('rooms')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'rooms' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
            >
              <Building2 size={16} /> Hostels & Rooms
            </button>
            <button 
              onClick={() => setActiveSubTab('fees')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'fees' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
            >
              <FileText size={16} /> Fee Types & Allocation
            </button>
            <button 
              onClick={() => setActiveSubTab('rules')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'rules' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
            >
              <Settings size={16} /> Rules (Leave & Visitor)
            </button>
          </div>

          <div className="p-6">
            
            {activeSubTab === 'rooms' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Hostel types */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">Hostel types</h3>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Type</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Boys Hostel', 'Girls Hostel', 'Staff Quarters', 'Guest House'].map(type => (
                      <span key={type} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold">{type}</span>
                    ))}
                  </div>
                </div>

                {/* Room & Bed types */}
                <div className="flex flex-col gap-6">
                  
                  {/* Room types */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <h3 className="text-sm font-bold text-text-primary uppercase">Room types</h3>
                      <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Room Type</button>
                    </div>
                    <div className="flex flex-col gap-2">
                      {['AC Room', 'Non-AC Room', 'Dormitory'].map(room => (
                        <div key={room} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                          <span className="text-sm font-semibold text-text-primary">{room}</span>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                            <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bed types */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-border pb-2">
                      <h3 className="text-sm font-bold text-text-primary uppercase">Bed types</h3>
                      <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Bed Type</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Single Bed', 'Bunk Bed (Upper)', 'Bunk Bed (Lower)'].map(bed => (
                        <span key={bed} className="px-3 py-1.5 bg-success-bg text-success border border-success/20 rounded-md text-xs font-bold">{bed}</span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {activeSubTab === 'fees' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Hostel fee types */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">Hostel fee types</h3>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Fee Type</button>
                  </div>
                  <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden">
                    <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                      <tr>
                        <th className="px-3 py-2 border-b border-border">Fee Name</th>
                        <th className="px-3 py-2 border-b border-border">Frequency</th>
                        <th className="px-3 py-2 border-b border-border text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-bg-page">
                        <td className="px-3 py-2 font-medium text-text-primary">Accommodation Fee</td>
                        <td className="px-3 py-2 text-text-secondary">Yearly</td>
                        <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                      </tr>
                      <tr className="hover:bg-bg-page">
                        <td className="px-3 py-2 font-medium text-text-primary">Mess Charges</td>
                        <td className="px-3 py-2 text-text-secondary">Monthly</td>
                        <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                      </tr>
                      <tr className="hover:bg-bg-page">
                        <td className="px-3 py-2 font-medium text-text-primary">Laundry Charges</td>
                        <td className="px-3 py-2 text-text-secondary">Monthly</td>
                        <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Allocation rules */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">Allocation rules</h3>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                  </div>
                  <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-text-primary">Auto-Allocation Priority</span>
                        <span className="text-xs text-text-secondary">Allocate beds based on distance from home automatically.</span>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-text-primary">Gender Strict Enforcement</span>
                        <span className="text-xs text-text-secondary">Block boys from girls hostels and vice versa.</span>
                      </div>
                    </label>
                  </div>
                </div>

              </div>
            )}

            {activeSubTab === 'rules' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Leave rules */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">Leave rules</h3>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                  </div>
                  <div className="flex flex-col gap-4 p-4 border border-dashed border-border rounded-lg bg-bg-page">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-sm font-bold text-text-primary">Warden Approval Threshold</span>
                      <span className="text-xs text-text-secondary">Leaves more than 3 days require Chief Warden approval.</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-sm font-bold text-text-primary">Parent Notification</span>
                      <span className="text-xs text-text-secondary">Auto-SMS to parents when student checks out of hostel for leave.</span>
                    </div>
                  </div>
                </div>

                {/* Visitor rules */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">Visitor rules</h3>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                  </div>
                  <div className="flex flex-col gap-4 p-4 border border-dashed border-border rounded-lg bg-bg-page">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-text-secondary">Visiting Hours</span>
                      <span className="text-xs font-bold text-text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">04:00 PM - 07:00 PM</span>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-text-primary">Only Authorized Relatives</span>
                        <span className="text-xs text-text-secondary">Allow only parents/guardians registered at admission.</span>
                      </div>
                    </label>
                  </div>
                </div>

              </div>
            )}

          </div>
        </>
      )}
    </div>
  );
}
