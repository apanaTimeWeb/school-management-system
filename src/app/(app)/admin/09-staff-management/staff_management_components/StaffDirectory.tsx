"use client";

import React, { useState } from 'react';
import { Users, User, Search, UserCheck, Shield, Phone, Mail } from 'lucide-react';
import clsx from 'clsx';

const mockStaff = [
  { id: 'EMP001', name: 'John Doe', type: 'Teacher', dept: 'Science', role: 'HOD', status: 'Active', phone: '9876543210' },
  { id: 'EMP002', name: 'Sarah Smith', type: 'Teacher', dept: 'English', role: 'Teacher', status: 'Active', phone: '9876543211' },
  { id: 'EMP003', name: 'Mike Johnson', type: 'Admin', dept: 'Accounts', role: 'Accountant', status: 'Active', phone: '9876543212' },
  { id: 'EMP004', name: 'Emma Davis', type: 'Support', dept: 'Transport', role: 'Driver', status: 'Inactive', phone: '9876543213' },
];

export default function StaffDirectory() {
  const [activeTab, setActiveTab] = useState('directory');
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [staff, setStaff] = useState(mockStaff);
  const [selectedStaff, setSelectedStaff] = useState<any>(null);

  const toggleStatus = (id: string) => {
    setStaff(staff.map(s => {
      if (s.id === id) {
        return { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return s;
    }));
  };

  const filteredStaff = staff.filter(s => {
    const matchesType = filterType === 'All' || s.type === filterType;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => { setActiveTab('directory'); setSelectedStaff(null); }} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'directory' && !selectedStaff ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Users size={18} /> Staff Directory
        </button>
        <button onClick={() => { setActiveTab('directory'); setFilterType('Teacher'); setSelectedStaff(null); }} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'directory' && filterType === 'Teacher' && !selectedStaff ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <User size={18} /> Teacher Profiles
        </button>
        <button onClick={() => { setActiveTab('directory'); setFilterType('Admin'); setSelectedStaff(null); }} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'directory' && filterType === 'Admin' && !selectedStaff ? 'bg-warning/10 text-warning' : 'text-text-secondary hover:bg-bg-page')}>
          <Shield size={18} /> Employee Profiles
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'directory' && !selectedStaff && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Central Staff Directory</h2>
            
            <div className="flex gap-4 items-end bg-bg-page border border-border p-4 rounded-lg">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-xs font-semibold text-text-secondary">Search by Name or ID</label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input 
                    type="text" 
                    placeholder="Search staff..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-md pl-9 pr-3 py-1.5 text-sm outline-none focus:border-primary" 
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 min-w-[150px]">
                <label className="text-xs font-semibold text-text-secondary">Staff Type</label>
                <select 
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary"
                >
                  <option value="All">All Types</option>
                  <option value="Teacher">Teachers</option>
                  <option value="Admin">Admin Staff</option>
                  <option value="Support">Support Staff</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStaff.map(s => (
                <div key={s.id} className="bg-card border border-border rounded-lg shadow-sm p-4 hover:border-primary/50 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                      {s.name.charAt(0)}
                    </div>
                    <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded uppercase", s.status === 'Active' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger')}>
                      {s.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-text-primary text-sm mt-2">{s.name}</h3>
                  <p className="text-xs text-text-secondary">{s.id} • {s.type}</p>
                  
                  <div className="mt-3 pt-3 border-t border-border grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-text-secondary block text-[10px] uppercase font-bold">Department</span>
                      <span className="font-medium text-text-primary">{s.dept}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary block text-[10px] uppercase font-bold">Role</span>
                      <span className="font-medium text-text-primary">{s.role}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <button onClick={() => setSelectedStaff(s)} className="flex-1 text-xs bg-bg-page border border-border text-text-primary px-3 py-1.5 rounded font-bold hover:bg-primary hover:text-black hover:border-primary transition">View Profile</button>
                    <button onClick={() => toggleStatus(s.id)} className="text-xs bg-bg-page border border-border text-text-primary px-3 py-1.5 rounded font-bold hover:bg-card transition" title="Toggle Status"><UserCheck size={14}/></button>
                  </div>
                </div>
              ))}
              {filteredStaff.length === 0 && (
                <div className="col-span-full py-10 text-center text-text-secondary text-sm font-bold">No staff found matching criteria.</div>
              )}
            </div>
          </div>
        )}

        {selectedStaff && (
          <div className="flex flex-col gap-6 fade-in">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <button onClick={() => setSelectedStaff(null)} className="text-sm font-bold text-text-secondary hover:text-primary transition">← Back to Directory</button>
              <h2 className="text-xl font-bold text-text-primary">Staff Profile</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 flex flex-col items-center p-6 border border-border rounded-lg bg-bg-page h-fit">
                <div className="w-24 h-24 bg-primary text-black rounded-full flex items-center justify-center font-bold text-3xl mb-4 shadow-sm">
                  {selectedStaff.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg text-text-primary">{selectedStaff.name}</h3>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded mt-1 uppercase">{selectedStaff.type}</span>
                <span className={clsx("text-[10px] font-bold px-2 py-0.5 rounded uppercase mt-2", selectedStaff.status === 'Active' ? 'bg-success-bg text-success' : 'bg-danger-bg text-danger')}>
                  {selectedStaff.status}
                </span>

                <div className="w-full mt-6 pt-6 border-t border-border flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Phone size={16} /> {selectedStaff.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Mail size={16} /> {selectedStaff.name.split(' ')[0].toLowerCase()}@school.edu
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col gap-6">
                <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                  <h4 className="font-bold text-sm text-text-primary uppercase mb-4">Official Information</h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                    <div>
                      <span className="text-text-secondary block text-xs">Employee ID</span>
                      <span className="font-bold text-text-primary">{selectedStaff.id}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary block text-xs">Department</span>
                      <span className="font-bold text-text-primary">{selectedStaff.dept}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary block text-xs">Designation / Role</span>
                      <span className="font-bold text-text-primary">{selectedStaff.role}</span>
                    </div>
                    <div>
                      <span className="text-text-secondary block text-xs">Date of Joining</span>
                      <span className="font-bold text-text-primary">12 June 2020</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                  <h4 className="font-bold text-sm text-text-primary uppercase mb-4">Quick Actions</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="text-xs bg-primary text-black px-4 py-2 rounded font-bold shadow-sm hover:bg-primary-hover transition">Edit Profile</button>
                    <button className="text-xs bg-bg-page border border-border text-text-primary px-4 py-2 rounded font-bold hover:bg-card transition">Generate ID Card</button>
                    <button className="text-xs bg-bg-page border border-border text-text-primary px-4 py-2 rounded font-bold hover:bg-card transition">Assign Teacher Role</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
