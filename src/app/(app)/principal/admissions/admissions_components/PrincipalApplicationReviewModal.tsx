"use client";
// RESPONSIBILITY: Renders the slide-in drawer for full admission application review.
import React, { useEffect, useState } from 'react';
import { X, User, FileText, CheckCircle, Award } from 'lucide-react';
import { usePrincipalAdmissionsStore } from '../admissions_store/usePrincipalAdmissionsStore';
import { fetchPrincipalApplicationProfile } from '../admissions_api/PrincipalAdmissionsApi';
import { PrincipalAdmissionFullProfile } from '../admissions_types/PrincipalAdmissions.types';

import AdmissionsOverviewTab from './PrincipalAdmissionsTabs/AdmissionsOverviewTab';
import AdmissionsDocumentsTab from './PrincipalAdmissionsTabs/AdmissionsDocumentsTab';
import AdmissionsAssessmentTab from './PrincipalAdmissionsTabs/AdmissionsAssessmentTab';
import AdmissionsDecisionTab from './PrincipalAdmissionsTabs/AdmissionsDecisionTab';

export default function PrincipalApplicationReviewModal() {
  const { selectedApplicationId, activeReviewTab, closeReviewModal, setActiveReviewTab } = usePrincipalAdmissionsStore();
  const [profileData, setProfileData] = useState<PrincipalAdmissionFullProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedApplicationId) return;
    
    let isMounted = true;
    setLoading(true);
    
    fetchPrincipalApplicationProfile(selectedApplicationId).then(data => {
      if (isMounted) {
        setProfileData(data);
        setLoading(false);
      }
    });

    return () => { isMounted = false; };
  }, [selectedApplicationId]);

  if (!selectedApplicationId) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User size={14} /> },
    { id: 'documents', label: 'Documents', icon: <FileText size={14} /> },
    { id: 'assessment', label: 'Test & Interview', icon: <Award size={14} /> },
    { id: 'decision', label: 'Final Decision', icon: <CheckCircle size={14} /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-4xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <User className="text-primary" size={20} />
            Application Review
          </h2>
          <button 
            onClick={closeReviewModal}
            className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="p-6 flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 rounded-full bg-skeleton-base animate-pulse" />
              <div className="space-y-2">
                <div className="h-6 w-48 bg-skeleton-base animate-pulse rounded" />
                <div className="h-4 w-32 bg-skeleton-base animate-pulse rounded" />
              </div>
            </div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => <div key={i} className="h-16 w-full bg-skeleton-base animate-pulse rounded" />)}
            </div>
          </div>
        ) : profileData ? (
          <>
            {/* Quick Info */}
            <div className="p-6 bg-page border-b border-border flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-[24px] font-bold text-primary">
                {profileData.application.applicantName.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h1 className="text-[24px] font-bold text-text-primary">
                  {profileData.application.applicantName}
                </h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-[13px] text-text-secondary">
                  <span><strong className="text-text-primary">App No:</strong> {profileData.application.applicationNo}</span>
                  <span><strong className="text-text-primary">Applying for:</strong> Class {profileData.application.appliedClass}</span>
                  <span><strong className="text-text-primary">Date:</strong> {profileData.application.dateApplied}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    profileData.application.stage === 'Approved' ? 'bg-success/20 text-success' : 
                    profileData.application.stage === 'Rejected' ? 'bg-danger/20 text-danger' : 
                    'bg-info/20 text-info'
                  }`}>
                    {profileData.application.stage}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-border bg-card px-6 overflow-x-auto custom-scrollbar shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveReviewTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-[13px] font-medium whitespace-nowrap transition-colors border-b-2 ${
                    activeReviewTab === tab.id
                      ? 'text-primary border-primary bg-primary/5'
                      : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-bg-main">
              {activeReviewTab === 'overview' && <AdmissionsOverviewTab application={profileData.application} />}
              {activeReviewTab === 'documents' && <AdmissionsDocumentsTab documents={profileData.documents} />}
              {activeReviewTab === 'assessment' && <AdmissionsAssessmentTab assessment={profileData.assessment} />}
              {activeReviewTab === 'decision' && <AdmissionsDecisionTab decision={profileData.decision} applicationId={selectedApplicationId} />}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-text-secondary">
            Failed to load application profile.
          </div>
        )}
      </div>
    </div>
  );
}
