"use client";

import React, { useState } from 'react';
import { CheckCircle2, User, Home, BookOpen, HeartPulse, Save, FileText, Users, Upload } from 'lucide-react';
import clsx from 'clsx';

const steps = [
  { id: 1, title: 'Personal', icon: User },
  { id: 2, title: 'Academic', icon: BookOpen },
  { id: 3, title: 'Parent & Contact', icon: Home },
  { id: 4, title: 'Medical & Docs', icon: HeartPulse },
];

export default function StudentRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col h-full fade-in">
      {/* Stepper Header */}
      <div className="p-4 md:p-6 border-b border-border bg-bg-page/30 rounded-t-xl overflow-x-auto hide-scrollbar">
        <h2 className="text-xl font-bold text-text-primary mb-6">New Student Registration</h2>
        <div className="flex items-center justify-between relative min-w-[500px] max-w-3xl mx-auto px-4 md:px-0">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border -z-10 rounded-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-300" style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}></div>
          
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="flex flex-col items-center gap-2">
                <div className={clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                  isActive ? "bg-primary border-primary text-black" :
                  isCompleted ? "bg-success border-success text-white" :
                  "bg-bg-page border-border text-text-disabled"
                )}>
                  {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                </div>
                <span className={clsx(
                  "text-xs font-bold absolute -bottom-6 whitespace-nowrap",
                  isActive || isCompleted ? "text-text-primary" : "text-text-disabled"
                )}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="p-4 md:p-6 flex-1 mt-4 overflow-y-auto">
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
            <div className="md:col-span-2 lg:col-span-3 border-b border-border pb-2 mb-2">
              <h3 className="font-bold text-text-primary flex items-center gap-2"><User size={18} className="text-primary"/> Personal & Identity Details</h3>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Student ID (Auto-generated)</label>
              <input type="text" disabled value="STU-2026-089" className="bg-bg-page border border-border rounded-md px-4 py-2 text-sm text-text-disabled" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Admission Number *</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="e.g. 10452" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Student Status</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                <option value="active">Active</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">First Name *</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="First name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Middle Name</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="Middle name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Last Name *</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="Last name" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Date of Birth *</label>
              <input type="date" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Gender *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Category / Reservation *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                <option value="gen">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
            <div className="md:col-span-2 lg:col-span-3 border-b border-border pb-2 mb-2">
              <h3 className="font-bold text-text-primary flex items-center gap-2"><BookOpen size={18} className="text-primary"/> Academic & Previous School Details</h3>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Class / Grade *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                <option value="">Select Class</option>
                <option value="9">Class IX</option>
                <option value="10">Class X</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Section *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                <option value="">Select Section</option>
                <option value="a">A</option>
                <option value="b">B</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">House (Optional)</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                <option value="">Select House</option>
                <option value="red">Red House</option>
                <option value="blue">Blue House</option>
                <option value="green">Green House</option>
                <option value="yellow">Yellow House</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 lg:col-span-3">
              <label className="text-sm font-semibold text-text-secondary">Previous School Name</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="Name of previous school (if any)" />
            </div>
            
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-text-secondary">Previous Academic Remarks</label>
              <textarea className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none min-h-[80px]" placeholder="Grades, behavior, achievements..."></textarea>
            </div>
          </div>
        )}
        
        {currentStep === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
            <div className="md:col-span-2 border-b border-border pb-2 mb-2">
              <h3 className="font-bold text-text-primary flex items-center gap-2"><Users size={18} className="text-primary"/> Parent/Guardian & Sibling Details</h3>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Father's Name *</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="Father's full name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Mother's Name *</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="Mother's full name" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Contact Number (Primary) *</label>
              <input type="tel" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="+91 9876543210" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Email Address</label>
              <input type="email" className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="parent@example.com" />
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-text-secondary">Residential Address *</label>
              <textarea className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none min-h-[80px]" placeholder="Full address details..."></textarea>
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2 border-t border-border pt-4 mt-2">
              <label className="text-sm font-semibold text-text-secondary">Sibling Information (If studying in same school)</label>
              <div className="flex gap-4 items-center">
                <input type="text" className="flex-1 bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none" placeholder="Sibling Admission No. or Name" />
                <button className="px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-md text-sm font-semibold">Search Sibling</button>
              </div>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
            <div className="md:col-span-2 border-b border-border pb-2 mb-2">
              <h3 className="font-bold text-text-primary flex items-center gap-2"><HeartPulse size={18} className="text-primary"/> Medical Info & Documents</h3>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Blood Group *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none">
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Medical Conditions / Allergies</label>
              <textarea className="bg-bg-input border border-border rounded-md px-4 py-2 text-sm focus:border-primary outline-none min-h-[80px]" placeholder="List any allergies, medications, or special needs..."></textarea>
            </div>

            <div className="flex flex-col gap-4 md:col-span-2 border-t border-border pt-4 mt-2">
              <h4 className="text-sm font-bold text-text-primary flex items-center gap-2"><FileText size={16}/> Document Uploads</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border border-dashed rounded-lg p-4 flex items-center justify-between bg-bg-page/50 hover:bg-bg-page transition cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Birth Certificate *</span>
                    <span className="text-xs text-text-secondary">PDF, JPG up to 2MB</span>
                  </div>
                  <Upload size={20} className="text-text-disabled" />
                </div>
                
                <div className="border border-border border-dashed rounded-lg p-4 flex items-center justify-between bg-bg-page/50 hover:bg-bg-page transition cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Transfer Certificate (TC)</span>
                    <span className="text-xs text-text-secondary">Optional for Class 1</span>
                  </div>
                  <Upload size={20} className="text-text-disabled" />
                </div>
                
                <div className="border border-border border-dashed rounded-lg p-4 flex items-center justify-between bg-bg-page/50 hover:bg-bg-page transition cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Aadhar Card / Identity</span>
                    <span className="text-xs text-text-secondary">PDF, JPG up to 2MB</span>
                  </div>
                  <Upload size={20} className="text-text-disabled" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-4 md:p-6 border-t border-border flex justify-between bg-bg-page/20 rounded-b-xl mt-auto">
        <button 
          onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
          disabled={currentStep === 1}
          className="px-6 py-2 border border-border rounded-md text-sm font-semibold text-text-secondary hover:bg-bg-page disabled:opacity-50 transition"
        >
          Previous
        </button>
        {currentStep < steps.length ? (
          <button 
            onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
            className="px-6 py-2 bg-primary text-black rounded-md text-sm font-semibold hover:bg-primary-hover transition"
          >
            Next Step
          </button>
        ) : (
          <button className="px-6 py-2 bg-success text-white rounded-md text-sm font-bold hover:opacity-90 transition flex items-center gap-2">
            <Save size={16} /> Complete Registration
          </button>
        )}
      </div>
    </div>
  );
}
