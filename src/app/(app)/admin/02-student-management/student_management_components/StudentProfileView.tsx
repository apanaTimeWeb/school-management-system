"use client";

import React from 'react';
import { User, Phone, MapPin, BookOpen, HeartPulse, FileText, Users, Hash, Shield } from 'lucide-react';

export default function StudentProfileView() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col fade-in overflow-hidden h-full">
      {/* Profile Header */}
      <div className="bg-primary p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-24 h-24 bg-bg-page rounded-full border-4 border-white/20 flex items-center justify-center overflow-hidden flex-shrink-0">
          <User size={48} className="text-primary/50" />
        </div>
        <div className="text-center md:text-left text-white flex-1">
          <h2 className="text-2xl font-bold mb-1">Aarav Patel</h2>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-white/80 font-medium">
            <span className="flex items-center gap-1"><Hash size={14}/> ID: STU-2026-001</span>
            <span className="flex items-center gap-1"><BookOpen size={14}/> Admission No: 10452</span>
            <span className="flex items-center gap-1"><Shield size={14}/> Status: <span className="bg-success text-white px-2 py-0.5 rounded-full text-xs ml-1">Active</span></span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="px-4 py-2 bg-white text-primary rounded-md text-sm font-bold shadow-sm hover:bg-white/90 transition">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-primary-hover text-white border border-white/20 rounded-md text-sm font-bold hover:bg-primary/50 transition">
            Print ID Card
          </button>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-y-auto">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-bg-page border border-border rounded-lg p-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-primary"/> Academic Details
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex justify-between"><span className="text-text-secondary">Class - Section:</span> <span className="font-semibold text-text-primary">X - A</span></li>
              <li className="flex justify-between"><span className="text-text-secondary">Roll Number:</span> <span className="font-semibold text-text-primary">12</span></li>
              <li className="flex justify-between"><span className="text-text-secondary">House:</span> <span className="font-semibold text-text-primary">Red House</span></li>
              <li className="flex justify-between"><span className="text-text-secondary">Second Language:</span> <span className="font-semibold text-text-primary">Hindi</span></li>
              <li className="flex justify-between"><span className="text-text-secondary">Previous School:</span> <span className="font-semibold text-text-primary">Delhi Public School</span></li>
            </ul>
          </div>

          <div className="bg-bg-page border border-border rounded-lg p-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-3 flex items-center gap-2">
              <Shield size={18} className="text-info"/> Category & Reservation
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex justify-between"><span className="text-text-secondary">Category:</span> <span className="font-semibold text-text-primary">General</span></li>
              <li className="flex justify-between"><span className="text-text-secondary">Religion:</span> <span className="font-semibold text-text-primary">Hindu</span></li>
              <li className="flex justify-between"><span className="text-text-secondary">Caste:</span> <span className="font-semibold text-text-primary">N/A</span></li>
            </ul>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-bg-page border border-border rounded-lg p-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-3 flex items-center gap-2">
              <Users size={18} className="text-secondary"/> Parent / Guardian
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex flex-col"><span className="text-text-secondary text-xs">Father's Name</span> <span className="font-semibold text-text-primary">Rajesh Patel</span></li>
              <li className="flex flex-col"><span className="text-text-secondary text-xs">Mother's Name</span> <span className="font-semibold text-text-primary">Meena Patel</span></li>
              <li className="flex flex-col"><span className="text-text-secondary text-xs">Guardian Relation</span> <span className="font-semibold text-text-primary">Father</span></li>
            </ul>
          </div>

          <div className="bg-bg-page border border-border rounded-lg p-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-3 flex items-center gap-2">
              <Phone size={18} className="text-success"/> Contact & Address
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex flex-col"><span className="text-text-secondary text-xs">Primary Phone</span> <span className="font-semibold text-text-primary">+91 9876543210</span></li>
              <li className="flex flex-col"><span className="text-text-secondary text-xs">Email</span> <span className="font-semibold text-text-primary">rajesh.p@example.com</span></li>
              <li className="flex flex-col">
                <span className="text-text-secondary text-xs flex items-center gap-1"><MapPin size={12}/> Address</span> 
                <span className="font-semibold text-text-primary mt-0.5">123, Rose Garden Society,<br/>MG Road, Mumbai, 400001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-bg-page border border-border rounded-lg p-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-3 flex items-center gap-2">
              <HeartPulse size={18} className="text-danger"/> Medical Information
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex justify-between"><span className="text-text-secondary">Blood Group:</span> <span className="font-semibold text-danger">O+</span></li>
              <li className="flex flex-col mt-1"><span className="text-text-secondary text-xs">Allergies / Conditions</span> <span className="font-semibold text-text-primary">Peanut Allergy, Mild Asthma</span></li>
            </ul>
          </div>

          <div className="bg-bg-page border border-border rounded-lg p-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-3 flex items-center gap-2">
              <Users size={18} className="text-warning"/> Sibling Information
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex flex-col">
                <span className="font-semibold text-text-primary">Neha Patel</span>
                <span className="text-text-secondary text-xs">Class VIII - B (STU-2024-055)</span>
              </li>
            </ul>
          </div>

          <div className="bg-bg-page border border-border rounded-lg p-4">
            <h3 className="font-bold text-text-primary border-b border-border pb-2 mb-3 flex items-center gap-2">
              <FileText size={18} className="text-purple"/> Documents
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between items-center bg-card border border-border p-2 rounded">
                <span className="font-semibold text-text-primary text-xs">Birth Certificate</span>
                <span className="text-success text-xs font-bold bg-success-bg px-2 rounded">Verified</span>
              </div>
              <div className="flex justify-between items-center bg-card border border-border p-2 rounded">
                <span className="font-semibold text-text-primary text-xs">Transfer Certificate</span>
                <span className="text-success text-xs font-bold bg-success-bg px-2 rounded">Verified</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
