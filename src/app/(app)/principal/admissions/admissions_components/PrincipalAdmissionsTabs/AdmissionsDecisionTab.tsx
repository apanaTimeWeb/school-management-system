import React, { useState } from 'react';
import { PrincipalAdmissionDecision } from '../../admissions_types/PrincipalAdmissions.types';
import { CheckCircle, XCircle, Bookmark, ShieldAlert } from 'lucide-react';

interface AdmissionsDecisionTabProps {
  decision: PrincipalAdmissionDecision;
  applicationId: string;
}

export default function AdmissionsDecisionTab({ decision, applicationId }: AdmissionsDecisionTabProps) {
  const [currentDecision, setCurrentDecision] = useState(decision.decision);
  const [reason, setReason] = useState(decision.reason || '');
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
      <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 flex items-start gap-3">
        <ShieldAlert className="text-warning shrink-0 mt-0.5" size={18} />
        <div>
          <h4 className="text-[14px] font-bold text-warning">Principal Authorization Required</h4>
          <p className="text-[12px] text-warning/80 mt-1">
            This action is final and will automatically notify the parents regarding the admission status. Please ensure all documents and assessments are verified before proceeding.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Approve */}
        <button 
          onClick={() => setCurrentDecision('Approved')}
          className={`p-4 rounded-lg border-2 text-left transition-all ${
            currentDecision === 'Approved' 
            ? 'bg-success/10 border-success shadow-[0_0_15px_rgba(34,197,94,0.15)]' 
            : 'bg-card border-border hover:border-success/50'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className={currentDecision === 'Approved' ? 'text-success' : 'text-text-secondary'} size={24} />
            <span className={`font-bold ${currentDecision === 'Approved' ? 'text-success' : 'text-text-primary'}`}>Approve Admission</span>
          </div>
          <p className="text-[11px] text-text-secondary pl-9">Candidate meets all criteria. Send admission offer and fee link.</p>
        </button>

        {/* Waitlist */}
        <button 
          onClick={() => setCurrentDecision('Waitlisted')}
          className={`p-4 rounded-lg border-2 text-left transition-all ${
            currentDecision === 'Waitlisted' 
            ? 'bg-info/10 border-info shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
            : 'bg-card border-border hover:border-info/50'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <Bookmark className={currentDecision === 'Waitlisted' ? 'text-info' : 'text-text-secondary'} size={24} />
            <span className={`font-bold ${currentDecision === 'Waitlisted' ? 'text-info' : 'text-text-primary'}`}>Put on Waitlist</span>
          </div>
          <p className="text-[11px] text-text-secondary pl-9">Seat not currently available. Keep in reserve list.</p>
        </button>

        {/* Reject */}
        <button 
          onClick={() => setCurrentDecision('Rejected')}
          className={`p-4 rounded-lg border-2 text-left transition-all ${
            currentDecision === 'Rejected' 
            ? 'bg-danger/10 border-danger shadow-[0_0_15px_rgba(239,68,68,0.15)]' 
            : 'bg-card border-border hover:border-danger/50'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <XCircle className={currentDecision === 'Rejected' ? 'text-danger' : 'text-text-secondary'} size={24} />
            <span className={`font-bold ${currentDecision === 'Rejected' ? 'text-danger' : 'text-text-primary'}`}>Reject Application</span>
          </div>
          <p className="text-[11px] text-text-secondary pl-9">Does not meet criteria. Send polite rejection email.</p>
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg p-5">
        <label className="text-[13px] font-bold text-text-primary mb-2 block">Official Remarks (Optional)</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason for rejection/waitlist or special conditions for approval..."
          className="w-full bg-input border border-border rounded-md px-3 py-2 text-[13px] text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary min-h-[100px]"
        />
        <div className="mt-4 flex justify-end items-center gap-4">
          {saved && <span className="text-[13px] text-success font-medium">Decision recorded successfully!</span>}
          <button 
            onClick={handleSave}
            disabled={isSaving || currentDecision === 'Pending'}
            className="px-5 py-2.5 rounded bg-primary text-black text-[13px] font-bold hover:bg-primary-hover transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isSaving ? <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> : null}
            Submit Final Decision
          </button>
        </div>
      </div>

    </div>
  );
}
