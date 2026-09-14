import React, { useState } from 'react';
import { PrincipalAdmissionAssessment } from '../../admissions_types/PrincipalAdmissions.types';
import { Award, Target } from 'lucide-react';

interface AdmissionsAssessmentTabProps {
  assessment: PrincipalAdmissionAssessment;
}

export default function AdmissionsAssessmentTab({ assessment }: AdmissionsAssessmentTabProps) {
  // Simulate form state for editing assessment scores
  const [testScore, setTestScore] = useState(assessment.testScore?.toString() || '');
  const [interviewScore, setInterviewScore] = useState(assessment.interviewScore?.toString() || '');
  const [remarks, setRemarks] = useState(assessment.remarks || '');
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 800);
  };

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Admission Test */}
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-4 border-b border-border pb-3">
            <Target className="text-primary" size={20} />
            <h3 className="text-[15px] font-bold text-text-primary">Admission Test</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Test Date</p>
              <p className="text-[14px] text-text-primary font-medium">{assessment.testDate || 'Not Scheduled'}</p>
            </div>
            <div>
              <label className="text-[11px] text-text-secondary uppercase tracking-wider mb-1 block">Score / {assessment.maxTestScore || 100}</label>
              <input 
                type="number" 
                value={testScore}
                onChange={(e) => setTestScore(e.target.value)}
                placeholder="Enter Score"
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[14px] text-text-primary font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Interview Status */}
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-4 border-b border-border pb-3">
            <Award className="text-info" size={20} />
            <h3 className="text-[15px] font-bold text-text-primary">Interview Details</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Date</p>
                <p className="text-[14px] text-text-primary font-medium">{assessment.interviewDate || 'Not Scheduled'}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Interviewer</p>
                <p className="text-[14px] text-text-primary font-medium">{assessment.interviewerName || 'N/A'}</p>
              </div>
            </div>
            <div>
              <label className="text-[11px] text-text-secondary uppercase tracking-wider mb-1 block">Score / {assessment.maxInterviewScore || 20}</label>
              <input 
                type="number" 
                value={interviewScore}
                onChange={(e) => setInterviewScore(e.target.value)}
                placeholder="Enter Score"
                className="w-full bg-input border border-border rounded-md px-3 py-2 text-[14px] text-text-primary font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-5">
        <label className="text-[13px] font-bold text-text-primary mb-2 block">Final Assessment Remarks</label>
        <textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Enter observation notes, academic strength, behavior..."
          className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-[100px]"
        />
        <div className="mt-4 flex justify-end items-center gap-4">
          {saved && <span className="text-[13px] text-success font-medium">Saved successfully!</span>}
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="px-5 py-2 rounded bg-primary text-white text-[13px] font-bold hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-70"
          >
            {isSaving ? <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" /> : null}
            Save Assessment
          </button>
        </div>
      </div>

    </div>
  );
}
