"use client";

import React from 'react';
import { Search, Plus, UserPlus, Globe, FileText, Upload } from 'lucide-react';

export default function AdminAdmissionForms() {
  return (
    <div className="flex flex-col gap-8">
      
      {/* 1. Admission Enquiry */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="bg-primary/5 border-b border-border p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <Search className="text-primary" size={20} />
            Admission Enquiry
          </h2>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-primary-hover transition">
            <Plus size={16} /> New Enquiry
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Student Name</label>
              <input type="text" placeholder="Enter name..." className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Parent Phone</label>
              <input type="text" placeholder="+91..." className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Class Applied</label>
              <select className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none">
                <option>Select Class</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
              </select>
            </div>
            <div className="flex flex-col justify-end">
              <button className="w-full bg-secondary text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-secondary-hover">Search Enquiries</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Application Form */}
      <section className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="bg-info/5 border-b border-border p-4">
          <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <FileText className="text-info" size={20} />
            Application Form
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-text-primary border-b border-border pb-2">Student Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">First Name</label>
                  <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">Last Name</label>
                  <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">Date of Birth</label>
                  <input type="date" className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-secondary">Gender</label>
                  <select className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-info outline-none">
                    <option>Male</option><option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-text-primary border-b border-border pb-2">Uploads</h3>
              <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center gap-2 hover:bg-bg-page transition cursor-pointer">
                <Upload className="text-text-secondary" size={32} />
                <span className="text-sm font-bold text-text-primary">Upload Passport Photo</span>
                <span className="text-xs text-text-secondary">JPG, PNG (Max 2MB)</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-info text-white px-6 py-2 rounded-md text-sm font-bold hover:bg-info/90">Submit Application</button>
          </div>
        </div>
      </section>

      {/* 3 & 4. Online & Offline Admission Modes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-success/10 rounded-lg text-success"><Globe size={24} /></div>
            <div>
              <h2 className="text-lg font-bold text-text-primary">Online Admission</h2>
              <p className="text-xs text-text-secondary">Manage web portal applications</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-bg-page border border-border rounded-lg">
            <span className="text-sm font-semibold text-text-primary">Portal Status</span>
            <span className="px-3 py-1 bg-success/20 text-success text-xs font-bold rounded-full">ACTIVE</span>
          </div>
          <button className="w-full mt-auto bg-success/10 text-success border border-success/30 px-4 py-2 rounded-md text-sm font-bold hover:bg-success hover:text-white transition">
            View Portal Settings
          </button>
        </section>

        <section className="bg-card border border-border rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-warning/10 rounded-lg text-warning"><UserPlus size={24} /></div>
            <div>
              <h2 className="text-lg font-bold text-text-primary">Offline Admission</h2>
              <p className="text-xs text-text-secondary">Walk-in registrations</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-bg-page border border-border rounded-lg">
            <span className="text-sm font-semibold text-text-primary">Today's Walk-ins</span>
            <span className="text-lg font-bold text-text-primary">14</span>
          </div>
          <button className="w-full mt-auto bg-warning/10 text-warning border border-warning/30 px-4 py-2 rounded-md text-sm font-bold hover:bg-warning hover:text-white transition">
            Start Offline Process
          </button>
        </section>
      </div>

    </div>
  );
}
