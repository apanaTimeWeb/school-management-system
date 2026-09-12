"use client";

import { useState } from "react";
import { Bus, Map, MapPin, Users, Settings, Plus, Edit, Trash2 } from "lucide-react";

export default function SuperAdminTransportMasterConfig() {
  const [activeSubTab, setActiveSubTab] = useState("vehicles");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page rounded-t-lg">
        <button 
          onClick={() => setActiveSubTab('vehicles')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'vehicles' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Bus size={16} /> Vehicles & Drivers
        </button>
        <button 
          onClick={() => setActiveSubTab('routes')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'routes' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Map size={16} /> Routes & Stops
        </button>
        <button 
          onClick={() => setActiveSubTab('fees')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'fees' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <MapPin size={16} /> Fee Categories
        </button>
        <button 
          onClick={() => setActiveSubTab('settings')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'settings' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Settings size={16} /> Capacity & GPS
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'vehicles' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Vehicle types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Vehicle types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Type</button>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'School Bus (Large)', cap: '50 Seats' },
                  { name: 'Mini Bus', cap: '30 Seats' },
                  { name: 'Van', cap: '15 Seats' },
                ].map((veh, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-text-primary">{veh.name}</span>
                      <span className="text-xs text-text-secondary">Default Capacity: {veh.cap}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Driver categories */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Driver categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Category</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Primary Driver', 'Assistant Driver', 'Conductor / Helper', 'Contractor'].map(type => (
                  <span key={type} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold">{type}</span>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'routes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Route types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Route types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Type</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Regular Route', 'Express Route', 'Staff Route', 'Exam Special'].map(type => (
                  <span key={type} className="px-3 py-1.5 bg-success-bg text-success border border-success/20 rounded-md text-xs font-bold">{type}</span>
                ))}
              </div>
            </div>

            {/* Stop types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Stop types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Type</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Main Stop', 'Sub-stop', 'Checkpost', 'Terminal'].map(type => (
                  <span key={type} className="px-3 py-1.5 bg-warning-bg text-warning border border-warning/20 rounded-md text-xs font-bold">{type}</span>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'fees' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Transport fee categories */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Transport fee categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Category</button>
              </div>
              <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                  <tr>
                    <th className="px-3 py-2 border-b border-border">Distance Range</th>
                    <th className="px-3 py-2 border-b border-border">Monthly Fee</th>
                    <th className="px-3 py-2 border-b border-border text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">0 - 5 km (Zone A)</td>
                    <td className="px-3 py-2 font-bold text-success">₹ 1,500</td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">5 - 10 km (Zone B)</td>
                    <td className="px-3 py-2 font-bold text-success">₹ 2,200</td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">10 - 20 km (Zone C)</td>
                    <td className="px-3 py-2 font-bold text-success">₹ 3,500</td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

        {activeSubTab === 'settings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Capacity rules */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Capacity rules</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Strict Capacity Enforcement</span>
                    <span className="text-xs text-text-secondary">Do not allow assigning students beyond vehicle max capacity.</span>
                  </div>
                </label>
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-bold text-text-secondary">Buffer Capacity (%)</label>
                  <input type="number" defaultValue="5" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                </div>
                <button className="px-4 py-2 mt-2 bg-primary text-white rounded-md text-sm font-bold hover:bg-primary-hover transition-colors w-fit">Save Rules</button>
              </div>
            </div>

            {/* GPS provider configuration */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">GPS provider configuration</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary">Select GPS Provider API</label>
                  <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                    <option value="provider1">TrackMate GPS API</option>
                    <option value="provider2">GeoLocate Schools API</option>
                    <option value="custom">Custom Webhook Integration</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary">API Key / Token</label>
                  <input type="password" defaultValue="abcdef123456" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                </div>
                <button className="px-4 py-2 mt-2 bg-success text-white rounded-md text-sm font-bold hover:bg-success-hover transition-colors w-fit">Test API Connection</button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
