import React from 'react';
import { PrincipalStudent, PrincipalStudentGuardian } from '../../students_types/PrincipalStudents.types';

interface ProfileOverviewTabProps {
  profile: PrincipalStudent;
  guardian: PrincipalStudentGuardian;
}

export default function ProfileOverviewTab({ profile, guardian }: ProfileOverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-[15px] font-bold text-text-primary mb-4 border-b border-border pb-2">Personal Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Gender</p>
            <p className="text-[14px] text-text-primary font-medium">{profile.gender}</p>
          </div>
          <div>
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Date of Birth</p>
            <p className="text-[14px] text-text-primary font-medium">{profile.dob}</p>
          </div>
          <div>
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Blood Group</p>
            <p className="text-[14px] text-text-primary font-medium">{profile.bloodGroup}</p>
          </div>
          <div>
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Contact No.</p>
            <p className="text-[14px] text-text-primary font-medium">{profile.contactNo}</p>
          </div>
          <div>
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Email</p>
            <p className="text-[14px] text-text-primary font-medium">{profile.email}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Joining Date</p>
            <p className="text-[14px] text-text-primary font-medium">{profile.joiningDate}</p>
          </div>
          <div className="col-span-2 md:col-span-3">
            <p className="text-[11px] text-text-secondary uppercase tracking-wider mb-1">Residential Address</p>
            <p className="text-[14px] text-text-primary font-medium">{profile.address}</p>
          </div>
        </div>
      </div>

      {/* Parent/Guardian Details */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="text-[15px] font-bold text-text-primary mb-4 border-b border-border pb-2">Parent / Guardian Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-page border border-border/50 p-4 rounded-md">
            <h4 className="text-[13px] font-bold text-primary mb-3 uppercase tracking-wider">Father's Details</h4>
            <div className="space-y-3">
              <div>
                <p className="text-[11px] text-text-secondary">Name</p>
                <p className="text-[14px] text-text-primary font-medium">{guardian.fatherName}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">Contact</p>
                <p className="text-[14px] text-text-primary font-medium">{guardian.fatherContact}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">Occupation</p>
                <p className="text-[14px] text-text-primary font-medium">{guardian.fatherOccupation}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-page border border-border/50 p-4 rounded-md">
            <h4 className="text-[13px] font-bold text-primary mb-3 uppercase tracking-wider">Mother's Details</h4>
            <div className="space-y-3">
              <div>
                <p className="text-[11px] text-text-secondary">Name</p>
                <p className="text-[14px] text-text-primary font-medium">{guardian.motherName}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">Contact</p>
                <p className="text-[14px] text-text-primary font-medium">{guardian.motherContact}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary">Occupation</p>
                <p className="text-[14px] text-text-primary font-medium">{guardian.motherOccupation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
