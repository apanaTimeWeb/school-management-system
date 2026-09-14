"use client";

import React from 'react';
import { Settings, Plus, CheckCircle } from 'lucide-react';

export default function AdminLogoutOtherDevicesConfig() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mb-6">
      <div className="bg-primary/5 border-b border-border p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
          <Settings className="text-primary" size={20} />
          Logout Other Devices
        </h2>
        <button className="bg-primary text-black px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition">
          <Plus size={16} /> Add New
        </button>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="border border-border rounded-lg p-4 bg-bg-page flex flex-col gap-2">
            <span className="text-sm font-bold text-text-primary">Total Records</span>
            <span className="text-2xl font-bold text-primary">124</span>
          </div>
          <div className="border border-border rounded-lg p-4 bg-bg-page flex flex-col gap-2">
            <span className="text-sm font-bold text-text-primary">Active</span>
            <span className="text-2xl font-bold text-success">112</span>
          </div>
          <div className="border border-border rounded-lg p-4 bg-bg-page flex flex-col gap-2">
            <span className="text-sm font-bold text-text-primary">Pending Review</span>
            <span className="text-2xl font-bold text-warning">12</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="text-md font-bold text-text-primary border-b border-border pb-2">Manage Logout Other Devices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Configuration Name</label>
              <input type="text" placeholder="Enter details..." className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Status</label>
              <select className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button className="bg-secondary text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-secondary/90 transition flex items-center gap-2">
              <CheckCircle size={16} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
