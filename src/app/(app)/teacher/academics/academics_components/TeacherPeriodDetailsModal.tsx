"use client";
import React from 'react';
import { X, Clock, MapPin, Users, BookOpen, AlertTriangle } from 'lucide-react';
import { useTeacherTimetableStore } from '../academics_store/useTeacherTimetableStore';

export default function TeacherPeriodDetailsModal() {
  const { isPeriodDetailsModalOpen, closePeriodDetails, selectedPeriod } = useTeacherTimetableStore();
  const [navigating, setNavigating] = React.useState(false);

  if (!isPeriodDetailsModalOpen || !selectedPeriod) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity p-4">
      <div className="w-full max-w-md bg-bg-main shadow-2xl rounded-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className={`px-6 py-5 border-b border-border flex items-start justify-between ${selectedPeriod.type === 'substitute' ? 'bg-warning/10' : selectedPeriod.type === 'free' ? 'bg-page' : 'bg-info/10'}`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                selectedPeriod.type === 'substitute' ? 'bg-warning text-black' : 
                selectedPeriod.type === 'free' ? 'bg-black/30 text-text-secondary' : 
                'bg-info text-black'
              }`}>
                {selectedPeriod.type === 'substitute' ? 'Substitute Period' : selectedPeriod.type === 'free' ? 'Free Period' : 'Regular Class'}
              </span>
            </div>
            <h2 className="text-[22px] font-bold text-text-primary">
              {selectedPeriod.subject}
            </h2>
          </div>
          <button 
            onClick={closePeriodDetails}
            className="p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-text-secondary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 bg-card">
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-page rounded-lg text-text-secondary"><Clock size={18} /></div>
              <div>
                <p className="text-[11px] text-text-secondary uppercase">Time</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedPeriod.time}</p>
                <p className="text-[12px] text-text-secondary">{selectedPeriod.day} • Period {selectedPeriod.periodNumber}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-page rounded-lg text-text-secondary"><MapPin size={18} /></div>
              <div>
                <p className="text-[11px] text-text-secondary uppercase">Location</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedPeriod.room}</p>
              </div>
            </div>
          </div>

          {selectedPeriod.type !== 'free' && (
            <div className="bg-page border border-border rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-info/20 text-info rounded-lg"><Users size={18} /></div>
                <div>
                  <p className="text-[11px] text-text-secondary uppercase">Class / Section</p>
                  <p className="text-[15px] font-bold text-text-primary">{selectedPeriod.class}</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setNavigating(true);
                  setTimeout(() => setNavigating(false), 2000);
                }} 
                disabled={navigating}
                className="px-3 py-1.5 bg-info text-black text-[12px] font-bold rounded hover:bg-info/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
              >
                {navigating ? 'Opening...' : 'Take Attendance'}
              </button>
            </div>
          )}

          {selectedPeriod.type === 'substitute' && (
            <div className="bg-warning/5 border border-warning/20 rounded-xl p-4">
              <div className="flex items-center gap-2 text-warning mb-2">
                <AlertTriangle size={16} />
                <h4 className="text-[13px] font-bold">Substitute Information</h4>
              </div>
              <p className="text-[13px] text-text-primary mb-1"><span className="text-text-secondary">Original Teacher:</span> {selectedPeriod.originalTeacher}</p>
              <p className="text-[13px] text-text-primary"><span className="text-text-secondary">Notes:</span> {selectedPeriod.notes}</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
