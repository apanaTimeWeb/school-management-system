"use client";

import React, { useState } from "react";
import {
  Settings2,
  BookUp,
  Banknote,
  Bookmark,
  CalendarDays,
  Save,
  CheckCircle2,
  AlertCircle,
  X,
  Info,
  Clock,
  User,
  GraduationCap
} from "lucide-react";

type SettingsCategory = 'Circulation' | 'Fines' | 'Reservations' | 'Operational';

interface LibSettings {
  // Circulation
  studentIssueLimit: number;
  staffIssueLimit: number;
  studentLoanDays: number;
  staffLoanDays: number;
  maxRenewals: number;
  gracePeriodDays: number;
  
  // Fines
  finePerDay: number;
  maxFineLimit: number;
  lostBookPenaltyMultiplier: number;
  
  // Reservations
  maxActiveReservations: number;
  holdPeriodDays: number;

  // Operational
  workingHoursStart: string;
  workingHoursEnd: string;
  isOpenWeekends: boolean;
}

export default function LibrarySettings() {
  const [activeCategory, setActiveCategory] = useState<SettingsCategory>('Circulation');
  
  const [settings, setSettings] = useState<LibSettings>({
    studentIssueLimit: 3,
    staffIssueLimit: 5,
    studentLoanDays: 14,
    staffLoanDays: 30,
    maxRenewals: 2,
    gracePeriodDays: 1,
    
    finePerDay: 5,
    maxFineLimit: 500,
    lostBookPenaltyMultiplier: 1.5,
    
    maxActiveReservations: 2,
    holdPeriodDays: 2,

    workingHoursStart: "08:00",
    workingHoursEnd: "16:00",
    isOpenWeekends: false
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccessModal(true);
    }, 800);
  };

  const handleChange = (key: keyof LibSettings, value: number | string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Settings2 className="w-8 h-8 text-blue-600" />
            Library Rules & Policies
          </h1>
          <p className="text-gray-500 mt-1">Configure operational limits, fine logic, and circulation rules.</p>
        </div>
      </div>

      {/* Admin Notice */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-8 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-blue-900">Librarian Access Mode</p>
          <p className="text-xs text-blue-700 mt-0.5">You are authorized to manage day-to-day operational library policies. Global system configurations, user access control, and core database management remain under the Super Admin's jurisdiction.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-row lg:flex-col gap-2 overflow-x-auto">
            
            <button 
              onClick={() => setActiveCategory('Circulation')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal ${activeCategory === 'Circulation' ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <BookUp className={`w-5 h-5 ${activeCategory === 'Circulation' ? 'text-indigo-600' : 'text-gray-400'}`} /> Circulation Rules
            </button>
            
            <button 
              onClick={() => setActiveCategory('Fines')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal ${activeCategory === 'Fines' ? 'bg-rose-50 text-rose-700 border border-rose-100' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Banknote className={`w-5 h-5 ${activeCategory === 'Fines' ? 'text-rose-600' : 'text-gray-400'}`} /> Fine Policies
            </button>
            
            <button 
              onClick={() => setActiveCategory('Reservations')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal ${activeCategory === 'Reservations' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Bookmark className={`w-5 h-5 ${activeCategory === 'Reservations' ? 'text-amber-600' : 'text-gray-400'}`} /> Reservation Limits
            </button>
            
            <button 
              onClick={() => setActiveCategory('Operational')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal ${activeCategory === 'Operational' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <CalendarDays className={`w-5 h-5 ${activeCategory === 'Operational' ? 'text-emerald-600' : 'text-gray-400'}`} /> Timings & Days
            </button>
            
          </div>
        </div>

        {/* Configuration Form Area */}
        <div className="flex-1">
          <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full min-h-[500px]">
            
            {/* Header */}
            <div className={`p-6 border-b border-gray-100 ${
              activeCategory === 'Circulation' ? 'bg-indigo-50/50' : 
              activeCategory === 'Fines' ? 'bg-rose-50/50' : 
              activeCategory === 'Reservations' ? 'bg-amber-50/50' : 'bg-emerald-50/50'
            }`}>
              <h2 className="text-xl font-bold text-gray-800">{activeCategory} Configuration</h2>
              <p className="text-sm text-gray-500 mt-1">Adjust the parameters below. Changes take effect immediately upon saving.</p>
            </div>
            
            {/* Form Fields */}
            <div className="p-6 md:p-8 flex-1">
              
              {/* Circulation Form */}
              {activeCategory === 'Circulation' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  
                  {/* Issue Limits */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
                      <BookUp className="w-4 h-4 text-indigo-500" /> Maximum Issue Limits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center gap-1"><GraduationCap className="w-4 h-4 text-gray-400"/> Students Limit</label>
                        <div className="flex items-center gap-3">
                          <input type="number" min="1" max="10" value={settings.studentIssueLimit} onChange={e => handleChange('studentIssueLimit', parseInt(e.target.value))} className="w-20 px-3 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 text-center font-bold text-lg" />
                          <span className="text-sm text-gray-500 font-medium">Books per student</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <label className="block text-xs font-bold text-gray-500 mb-1 flex items-center gap-1"><User className="w-4 h-4 text-gray-400"/> Staff/Teachers Limit</label>
                        <div className="flex items-center gap-3">
                          <input type="number" min="1" max="20" value={settings.staffIssueLimit} onChange={e => handleChange('staffIssueLimit', parseInt(e.target.value))} className="w-20 px-3 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 text-center font-bold text-lg" />
                          <span className="text-sm text-gray-500 font-medium">Books per staff member</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Loan Duration */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-indigo-500" /> Loan Duration (Days)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Student Default Duration</label>
                        <input type="number" min="1" max="365" value={settings.studentLoanDays} onChange={e => handleChange('studentLoanDays', parseInt(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Staff Default Duration</label>
                        <input type="number" min="1" max="365" value={settings.staffLoanDays} onChange={e => handleChange('staffLoanDays', parseInt(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold" />
                      </div>
                    </div>
                  </div>

                  {/* Renewals */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-indigo-500" /> Renewals & Grace Period
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Max Consecutive Renewals</label>
                        <input type="number" min="0" max="10" value={settings.maxRenewals} onChange={e => handleChange('maxRenewals', parseInt(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold" />
                        <p className="text-[10px] text-gray-500 mt-1">Number of times a book can be renewed without returning.</p>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Grace Period (Days)</label>
                        <input type="number" min="0" max="14" value={settings.gracePeriodDays} onChange={e => handleChange('gracePeriodDays', parseInt(e.target.value))} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-bold" />
                        <p className="text-[10px] text-gray-500 mt-1">Days after due date before fines start accumulating.</p>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Fines Form */}
              {activeCategory === 'Fines' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  
                  <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-rose-900">Fine Auto-Calculation</p>
                      <p className="text-xs text-rose-700 mt-0.5">The system will automatically apply these rates when a book is returned late. Manual waivers are still possible by the librarian.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Late Fine per Day (₹)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                        <input type="number" min="0" value={settings.finePerDay} onChange={e => handleChange('finePerDay', parseInt(e.target.value))} className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 font-black text-rose-700 bg-rose-50/50" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Maximum Cap on Fine (₹)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                        <input type="number" min="0" value={settings.maxFineLimit} onChange={e => handleChange('maxFineLimit', parseInt(e.target.value))} className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 font-black text-rose-700 bg-rose-50/50" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Lost Book Penalty Multiplier</label>
                    <input type="number" step="0.5" min="1" value={settings.lostBookPenaltyMultiplier} onChange={e => handleChange('lostBookPenaltyMultiplier', parseFloat(e.target.value))} className="w-full md:w-1/2 px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 font-bold" />
                    <p className="text-xs text-gray-500 mt-2">Example: 1.5x means a lost ₹200 book incurs a ₹300 fine.</p>
                  </div>

                </div>
              )}

              {/* Reservations Form */}
              {activeCategory === 'Reservations' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                        <Bookmark className="w-6 h-6 text-amber-500" />
                      </div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Max Active Reservations</label>
                      <input type="number" min="0" max="5" value={settings.maxActiveReservations} onChange={e => handleChange('maxActiveReservations', parseInt(e.target.value))} className="w-24 mx-auto px-4 py-2.5 rounded-xl border-2 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-black text-center text-amber-700 text-xl" />
                      <p className="text-[10px] text-gray-500 mt-3 font-medium">How many books a user can hold simultaneously.</p>
                    </div>
                    
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                        <Clock className="w-6 h-6 text-amber-500" />
                      </div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Hold Period (Days)</label>
                      <input type="number" min="1" max="7" value={settings.holdPeriodDays} onChange={e => handleChange('holdPeriodDays', parseInt(e.target.value))} className="w-24 mx-auto px-4 py-2.5 rounded-xl border-2 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-black text-center text-amber-700 text-xl" />
                      <p className="text-[10px] text-gray-500 mt-3 font-medium">Days the book is kept aside at the counter before auto-cancellation.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Operational Form */}
              {activeCategory === 'Operational' && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Library Opening Time</label>
                      <input type="time" value={settings.workingHoursStart} onChange={e => handleChange('workingHoursStart', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Library Closing Time</label>
                      <input type="time" value={settings.workingHoursEnd} onChange={e => handleChange('workingHoursEnd', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold" />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 flex items-center justify-between mt-4">
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Weekend Operations</h4>
                      <p className="text-xs text-gray-500 mt-1">Allow issues and fine calculations on Saturdays & Sundays.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={settings.isOpenWeekends} onChange={() => handleChange('isOpenWeekends', !settings.isOpenWeekends)} />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>

                </div>
              )}

            </div>

            {/* Footer Action */}
            <div className="p-5 border-t border-gray-100 bg-gray-50 flex justify-end">
              <button 
                type="submit" 
                disabled={isSaving}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSaving ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <Save className="w-5 h-5" /> 
                )}
                {isSaving ? "Saving..." : "Save Configuration"}
              </button>
            </div>
            
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-blue-600 p-8 text-center text-white relative">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                 <CheckCircle2 className="w-12 h-12 text-blue-600 animate-in zoom-in duration-500" />
               </div>
               <h2 className="text-2xl font-bold mb-1">Settings Saved</h2>
               <p className="text-blue-100 text-sm">Library policies have been updated.</p>
            </div>
            <div className="p-6 bg-white">
               <button onClick={() => setShowSuccessModal(false)} className="w-full py-3.5 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                 Close
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
