import React from 'react';
import { PrincipalStudentLifecycle } from '../../students_types/PrincipalStudents.types';
import { Share, TrendingUp, UserMinus, ShieldAlert } from 'lucide-react';

interface LifecycleTabProps {
  data: PrincipalStudentLifecycle;
}

export default function LifecycleTab({ data }: LifecycleTabProps) {
  return (
    <div className="space-y-6">
      
      <div className="bg-info/5 border border-info/20 rounded-lg p-4 flex items-start gap-3">
        <ShieldAlert className="text-info shrink-0 mt-0.5" size={18} />
        <div>
          <h4 className="text-[14px] font-bold text-info">Permission Notice</h4>
          <p className="text-[12px] text-info/80 mt-1">Actions in this section require specific administrative privileges. As Principal, you can view the status and request changes, but direct execution depends on active school RBAC policies.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Promotion */}
        <div className="bg-card border border-border rounded-lg p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-text-primary">Promotion</h3>
              <p className="text-[12px] text-text-secondary">Academic progression</p>
            </div>
          </div>
          <div className="mb-6 flex-1">
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Current Status</p>
            <p className="text-[16px] font-bold text-text-primary">{data.promotionStatus}</p>
          </div>
          <button 
            disabled={data.promotionStatus !== 'Eligible'}
            className="w-full py-2.5 rounded bg-page border border-border text-[13px] font-medium text-text-primary hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Request Promotion
          </button>
        </div>

        {/* Transfer */}
        <div className="bg-card border border-border rounded-lg p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Share size={20} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-text-primary">Transfer (TC)</h3>
              <p className="text-[12px] text-text-secondary">Transfer certificate</p>
            </div>
          </div>
          <div className="mb-6 flex-1">
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Current Status</p>
            <p className="text-[16px] font-bold text-text-primary">{data.transferStatus}</p>
          </div>
          <button 
            disabled={data.transferStatus !== 'Not Requested'}
            className="w-full py-2.5 rounded bg-primary text-black text-[13px] font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Initiate Transfer
          </button>
        </div>

        {/* Withdrawal */}
        <div className="bg-card border border-border rounded-lg p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
            <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center text-danger">
              <UserMinus size={20} />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-text-primary">Withdrawal</h3>
              <p className="text-[12px] text-text-secondary">Student deactivation</p>
            </div>
          </div>
          <div className="mb-6 flex-1">
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Current Status</p>
            <p className="text-[16px] font-bold text-text-primary">{data.withdrawalStatus}</p>
          </div>
          <button 
            disabled={data.withdrawalStatus !== 'Active'}
            className="w-full py-2.5 rounded bg-danger/20 border border-danger/30 text-danger text-[13px] font-semibold hover:bg-danger/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Mark as Withdrawn
          </button>
        </div>

      </div>

      {/* Remarks Section */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-[13px] font-bold text-text-primary mb-2 uppercase tracking-wider">Lifecycle Remarks</h3>
        <p className="text-[14px] text-text-secondary bg-page p-4 rounded border border-border/50">{data.remarks || "No remarks added."}</p>
      </div>

    </div>
  );
}
