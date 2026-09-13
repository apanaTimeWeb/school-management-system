"use client";
import React from 'react';
import { X, Stethoscope, Droplets, AlertTriangle, FileText, User } from 'lucide-react';
import { usePrincipalHealthStore } from '../health_store/usePrincipalHealthStore';
import clsx from 'clsx';

export default function PrincipalHealthProfileModal() {
  const { selectedStudent, setSelectedStudent } = usePrincipalHealthStore();

  if (!selectedStudent) return null;

  const bmi = (selectedStudent.weightKg / Math.pow(selectedStudent.heightCm / 100, 2)).toFixed(1);
  const bmiValue = parseFloat(bmi);
  let bmiCategory = 'Normal';
  let bmiColor = 'text-success';
  if (bmiValue < 18.5) { bmiCategory = 'Underweight'; bmiColor = 'text-warning'; }
  else if (bmiValue > 25) { bmiCategory = 'Overweight'; bmiColor = 'text-danger'; }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Stethoscope className="text-primary" size={18} /> 
            Health Profile
          </h2>
          <button 
            onClick={() => setSelectedStudent(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                <User size={28}/>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-text-primary mb-1">{selectedStudent.studentName}</h3>
                <p className="text-[13px] text-text-secondary">Class: {selectedStudent.classAndSection} | ID: {selectedStudent.studentId}</p>
              </div>
            </div>
            {selectedStudent.alertLevel && (
              <span className={clsx("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border shrink-0", 
                  selectedStudent.alertLevel === 'High' ? 'bg-danger/10 text-danger border-danger/30' :
                  selectedStudent.alertLevel === 'Medium' ? 'bg-warning/10 text-warning border-warning/30' :
                  'bg-info/10 text-info border-info/30'
              )}>
                {selectedStudent.alertLevel === 'High' && <AlertTriangle size={14}/>}
                {selectedStudent.alertLevel} Health Alert
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-card border border-border p-3 rounded-lg text-center">
              <p className="text-[11px] text-text-secondary font-bold mb-1">Blood Group</p>
              <p className="text-[18px] font-bold text-danger flex items-center justify-center gap-1"><Droplets size={16}/> {selectedStudent.bloodGroup}</p>
            </div>
            <div className="bg-card border border-border p-3 rounded-lg text-center">
              <p className="text-[11px] text-text-secondary font-bold mb-1">Height</p>
              <p className="text-[18px] font-bold text-text-primary">{selectedStudent.heightCm} <span className="text-[12px] font-normal text-text-secondary">cm</span></p>
            </div>
            <div className="bg-card border border-border p-3 rounded-lg text-center">
              <p className="text-[11px] text-text-secondary font-bold mb-1">Weight</p>
              <p className="text-[18px] font-bold text-text-primary">{selectedStudent.weightKg} <span className="text-[12px] font-normal text-text-secondary">kg</span></p>
            </div>
            <div className="bg-card border border-border p-3 rounded-lg text-center">
              <p className="text-[11px] text-text-secondary font-bold mb-1">BMI</p>
              <p className={clsx("text-[18px] font-bold", bmiColor)}>{bmi}</p>
              <p className={clsx("text-[10px]", bmiColor)}>{bmiCategory}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="text-[13px] font-bold text-text-secondary mb-3 flex items-center gap-2">
                <AlertTriangle size={14} className="text-warning"/> Medical Conditions
              </h4>
              {selectedStudent.medicalConditions.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {selectedStudent.medicalConditions.map((cond, idx) => (
                    <li key={idx} className="text-[14px] font-bold text-text-primary">{cond}</li>
                  ))}
                </ul>
              ) : <p className="text-[13px] text-text-secondary italic">None reported.</p>}
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h4 className="text-[13px] font-bold text-text-secondary mb-3 flex items-center gap-2">
                <AlertTriangle size={14} className="text-danger"/> Known Allergies
              </h4>
              {selectedStudent.allergies.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedStudent.allergies.map((allergy, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-danger/10 border border-danger/20 text-danger text-[12px] font-bold rounded">
                      {allergy}
                    </span>
                  ))}
                </div>
              ) : <p className="text-[13px] text-text-secondary italic">None reported.</p>}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
             <h4 className="text-[13px] font-bold text-text-secondary mb-3 flex items-center gap-2">
                <FileText size={14}/> Checkup History
             </h4>
             <div className="flex justify-between items-center text-[14px]">
               <span className="text-text-primary">Last Comprehensive Checkup</span>
               <span className="font-bold text-text-primary">{selectedStudent.lastCheckupDate}</span>
             </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedStudent(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
