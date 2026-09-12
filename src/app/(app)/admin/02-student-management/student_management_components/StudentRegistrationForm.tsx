"use client";

import React, { useState } from 'react';
import { CheckCircle2, User, Home, BookOpen, HeartPulse, Save } from 'lucide-react';
import clsx from 'clsx';

const steps = [
  { id: 1, title: 'Personal', icon: User },
  { id: 2, title: 'Academic', icon: BookOpen },
  { id: 3, title: 'Contact', icon: Home },
  { id: 4, title: 'Medical', icon: HeartPulse },
];

export default function StudentRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col h-full fade-in">
      {/* Stepper Header */}
      <div className="p-6 border-b border-border bg-bg-page/30 rounded-t-xl">
        <h2 className="text-xl font-bold text-text-primary mb-6">New Student Registration</h2>
        <div className="flex items-center justify-between relative max-w-3xl mx-auto">
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
                  isActive ? "bg-primary border-primary text-white" :
                  isCompleted ? "bg-success border-success text-white" :
                  "bg-bg-page border-border text-text-disabled"
                )}>
                  {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                </div>
                <span className={clsx(
                  "text-xs font-bold absolute -bottom-6",
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
      <div className="p-6 flex-1 mt-4">
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">First Name *</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none" placeholder="Enter first name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Last Name</label>
              <input type="text" className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none" placeholder="Enter last name" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Date of Birth *</label>
              <input type="date" className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Gender *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Class / Grade *</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none">
                <option value="">Select Class</option>
                <option value="9">Class IX</option>
                <option value="10">Class X</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-text-secondary">Section</label>
              <select className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none">
                <option value="">Select Section</option>
                <option value="a">A</option>
                <option value="b">B</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-semibold text-text-secondary">Previous School Details</label>
              <textarea className="bg-bg-input border border-border rounded-md px-4 py-2.5 text-sm focus:border-primary outline-none min-h-[100px]" placeholder="School name, board, last percentage..."></textarea>
            </div>
          </div>
        )}
        
        {/* Placeholder for steps 3 and 4 to save space */}
        {(currentStep === 3 || currentStep === 4) && (
          <div className="flex flex-col items-center justify-center py-10 opacity-70">
            <h3 className="text-lg font-bold text-text-secondary">Mock Step Data</h3>
            <p className="text-sm text-text-disabled">In a real app, form fields for {steps.find(s=>s.id === currentStep)?.title} would be here.</p>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-6 border-t border-border flex justify-between bg-bg-page/20 rounded-b-xl mt-auto">
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
            className="px-6 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary-hover transition"
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
