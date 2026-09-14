"use client";

import React from 'react';
import { Users, Phone, MapPin, GraduationCap, FileText, Download, Shield } from 'lucide-react';
import clsx from 'clsx';

export default function ParentProfileView() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col fade-in h-full overflow-hidden">
      <div className="bg-primary p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-24 h-24 bg-white/20 rounded-full border-4 border-white/40 flex items-center justify-center flex-shrink-0">
          <Users size={40} className="text-white" />
        </div>
        <div className="text-center md:text-left text-white flex-1">
          <h2 className="text-2xl font-bold mb-1">Rajesh & Meena Patel</h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-white/80 font-medium">
            <span>ID: PAR001</span>
            <span>Status: <span className="bg-success text-white px-2 py-0.5 rounded-full text-xs ml-1">Active</span></span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white text-primary rounded-md text-sm font-bold shadow-sm hover:bg-white/90 transition">
            Edit Details
          </button>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Wards Mapping */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-bg-page border border-border rounded-lg p-5">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-primary"/> Wards / Children Mapping
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border bg-card p-4 rounded-lg flex gap-4 items-center shadow-sm">
                <div className="w-12 h-12 bg-info-bg text-info rounded-full flex items-center justify-center font-bold text-lg">A</div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm">Aarav Patel</h4>
                  <p className="text-xs text-text-secondary mt-0.5">Class X - A | Roll: 12</p>
                  <p className="text-xs text-text-secondary">Admission No: 10452</p>
                </div>
              </div>
              <div className="border border-border bg-card p-4 rounded-lg flex gap-4 items-center shadow-sm">
                <div className="w-12 h-12 bg-warning-bg text-warning rounded-full flex items-center justify-center font-bold text-lg">N</div>
                <div>
                  <h4 className="font-bold text-text-primary text-sm">Neha Patel</h4>
                  <p className="text-xs text-text-secondary mt-0.5">Class VIII - B | Roll: 34</p>
                  <p className="text-xs text-text-secondary">Admission No: 11023</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 border border-border bg-bg-page/50 rounded-lg flex flex-col gap-2">
              <label className="text-xs font-bold text-text-secondary uppercase">Link Another Child</label>
              <div className="flex gap-2">
                <input type="text" placeholder="Enter Student Admission No..." className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                <button className="text-sm font-bold bg-primary text-black px-4 py-1.5 rounded-md shadow-sm">Link</button>
              </div>
            </div>
          </div>

          <div className="bg-bg-page border border-border rounded-lg p-5">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-4 flex items-center gap-2">
              <Shield size={18} className="text-secondary"/> Guardian Mapping & Authorities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border bg-card p-4 rounded-lg">
                <h4 className="font-bold text-text-primary text-sm mb-1">Primary Guardian</h4>
                <p className="text-sm text-text-secondary">Father: Rajesh Patel</p>
                <p className="text-xs text-success font-semibold mt-1">SMS & Email Notifications Enabled</p>
              </div>
              <div className="border border-border bg-card p-4 rounded-lg">
                <h4 className="font-bold text-text-primary text-sm mb-1">Local Guardian (Emergency)</h4>
                <p className="text-sm text-text-secondary">Uncle: Suresh Patel (9876543222)</p>
                <p className="text-xs text-warning font-semibold mt-1">Authorized for Pick-up</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Docs */}
        <div className="flex flex-col gap-6">
          <div className="bg-bg-page border border-border rounded-lg p-5">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-4 flex items-center gap-2">
              <Phone size={18} className="text-success"/> Contact Details
            </h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex flex-col">
                <span className="text-text-secondary text-xs">Father's Phone & Email</span> 
                <span className="font-semibold text-text-primary">+91 9876543210</span>
                <span className="font-semibold text-text-primary">rajesh.p@example.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-text-secondary text-xs">Mother's Phone</span> 
                <span className="font-semibold text-text-primary">+91 9876543211</span>
              </li>
              <li className="flex flex-col">
                <span className="text-text-secondary text-xs flex items-center gap-1"><MapPin size={12}/> Residential Address</span> 
                <span className="font-semibold text-text-primary mt-1">123, Rose Garden Society,<br/>MG Road, Mumbai, 400001</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-page border border-border rounded-lg p-5">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-4 flex items-center gap-2">
              <FileText size={18} className="text-purple"/> Parent Documents
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                <div className="flex flex-col">
                  <span className="font-bold text-text-primary text-sm">Father's Aadhar</span>
                  <span className="text-success text-xs font-semibold">Verified</span>
                </div>
                <button className="text-primary bg-primary/10 p-1.5 rounded hover:bg-primary/20"><Download size={16}/></button>
              </div>
              <div className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                <div className="flex flex-col">
                  <span className="font-bold text-text-primary text-sm">Address Proof</span>
                  <span className="text-warning text-xs font-semibold">Pending Update</span>
                </div>
                <button className="text-primary bg-primary/10 p-1.5 rounded hover:bg-primary/20"><Download size={16}/></button>
              </div>
              
              <div className="mt-2 pt-3 border-t border-border">
                <label className="text-xs font-bold text-text-secondary uppercase mb-2 block">Upload New Document</label>
                <div className="flex gap-2">
                  <select className="bg-bg-input border border-border rounded-md px-2 py-1.5 text-xs outline-none focus:border-primary w-24">
                    <option>Aadhar</option>
                    <option>PAN</option>
                  </select>
                  <input type="file" className="text-xs flex-1 file:bg-bg-page file:border file:border-border file:rounded file:px-2 file:py-1 file:text-text-primary" />
                  <button className="text-xs font-bold bg-primary text-black px-3 py-1.5 rounded">Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
