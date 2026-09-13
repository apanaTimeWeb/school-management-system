import React from 'react';
import { PrincipalAdmissionApplication } from '../../admissions_types/PrincipalAdmissions.types';

interface AdmissionsOverviewTabProps {
  application: PrincipalAdmissionApplication;
}

export default function AdmissionsOverviewTab({ application }: AdmissionsOverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Basic Application Info */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-[15px] font-bold text-text-primary mb-4 border-b border-border pb-2">Application Details</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Previous School</p>
            <p className="text-[14px] text-text-primary font-medium">{application.previousSchool || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Current Application Stage</p>
            <p className="text-[14px] text-primary font-bold">{application.stage}</p>
          </div>
        </div>
      </div>

      {/* Parent/Guardian Details */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-[15px] font-bold text-text-primary mb-4 border-b border-border pb-2">Parent Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-page border border-border/50 p-4 rounded-md">
            <h4 className="text-[13px] font-bold text-primary mb-3 uppercase tracking-wider">Father's Details</h4>
            <div className="space-y-3">
              <div>
                <p className="text-[11px] text-text-secondary">Name</p>
                <p className="text-[14px] text-text-primary font-medium">{application.fatherName}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">Primary Contact</p>
                <p className="text-[14px] text-text-primary font-medium">{application.contactNo}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-page border border-border/50 p-4 rounded-md">
            <h4 className="text-[13px] font-bold text-primary mb-3 uppercase tracking-wider">Mother's Details</h4>
            <div className="space-y-3">
              <div>
                <p className="text-[11px] text-text-secondary">Name</p>
                <p className="text-[14px] text-text-primary font-medium">{application.motherName}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">Email</p>
                <p className="text-[14px] text-text-primary font-medium">{application.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
