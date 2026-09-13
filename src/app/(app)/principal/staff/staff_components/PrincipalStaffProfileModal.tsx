"use client";
import React, { useEffect, useState } from 'react';
import { X, Award, Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import { usePrincipalStaffStore } from '../staff_store/usePrincipalStaffStore';
import { PrincipalStaffProfile } from '../staff_types/PrincipalStaff.types';
import { fetchPrincipalStaffProfile } from '../staff_api/PrincipalStaffApi';

export default function PrincipalStaffProfileModal() {
  const { selectedProfileId, setSelectedProfileId } = usePrincipalStaffStore();
  const [profile, setProfile] = useState<PrincipalStaffProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedProfileId) {
      setLoading(true);
      fetchPrincipalStaffProfile(selectedProfileId).then(data => {
        setProfile(data);
        setLoading(false);
      });
    }
  }, [selectedProfileId]);

  if (!selectedProfileId) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-2xl bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <UserIconFallback /> 
            Teacher Profile
          </h2>
          <button 
            onClick={() => setSelectedProfileId(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          {loading ? (
            <div className="space-y-4">
              <div className="h-24 bg-skeleton-base animate-pulse rounded" />
              <div className="h-40 bg-skeleton-base animate-pulse rounded" />
            </div>
          ) : profile ? (
            <>
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary text-3xl font-black border-2 border-primary">
                  {profile.name.charAt(0)}
                </div>
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-[20px] font-bold text-text-primary">{profile.name}</h3>
                  <p className="text-[14px] text-text-secondary font-medium">{profile.designation} • {profile.department} Dept.</p>
                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="flex items-center gap-1.5 text-[12px] bg-white/5 border border-border px-2 py-1 rounded text-text-secondary">
                      <Mail size={12}/> {profile.email}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] bg-white/5 border border-border px-2 py-1 rounded text-text-secondary">
                      <Phone size={12}/> {profile.contact}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] bg-white/5 border border-border px-2 py-1 rounded text-text-secondary">
                      <MapPin size={12}/> {profile.address.split(',')[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Qualifications & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="text-[13px] font-bold text-text-secondary uppercase mb-3 flex items-center gap-2">
                    <Award size={14} className="text-primary"/> Qualifications
                  </h4>
                  <ul className="list-disc list-inside text-[13px] text-text-primary font-medium space-y-1">
                    {profile.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="text-[13px] font-bold text-text-secondary uppercase mb-3 flex items-center gap-2">
                    <Briefcase size={14} className="text-info"/> Experience
                  </h4>
                  <p className="text-[24px] font-bold text-text-primary">{profile.experienceYears} <span className="text-[14px] font-medium text-text-secondary">Years</span></p>
                </div>
              </div>

              {/* Assigned Subjects & Classes */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="text-[13px] font-bold text-text-secondary uppercase mb-3">Academic Assignments</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[12px] text-text-secondary mb-2">Subjects Handled</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.assignedSubjects.map((s, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-[11px] font-bold">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[12px] text-text-secondary mb-2">Classes Handled</p>
                    <div className="flex flex-wrap gap-2">
                      {profile.assignedClasses.map((c, i) => (
                        <span key={i} className="px-2 py-1 bg-info/10 text-info border border-info/20 rounded text-[11px] font-bold">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-text-secondary text-sm">Failed to load profile.</p>
          )}
        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0">
          <button
            onClick={() => setSelectedProfileId(null)}
            className="px-4 py-2 rounded-md bg-page border border-border text-text-primary text-[13px] font-medium hover:bg-white/5 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function UserIconFallback() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
