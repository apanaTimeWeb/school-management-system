"use client";
// RESPONSIBILITY: Renders the slide-in drawer for full student profile and manages tab navigation.
import React, { useEffect, useState } from 'react';
import { X, User, GraduationCap, Clock, AlertTriangle, FileText, Activity } from 'lucide-react';
import { usePrincipalStudentsStore } from '../students_store/usePrincipalStudentsStore';
import { fetchPrincipalStudentProfile } from '../students_api/PrincipalStudentsApi';
import { PrincipalStudentProfileData } from '../students_types/PrincipalStudents.types';

import ProfileOverviewTab from './PrincipalStudentTabs/ProfileOverviewTab';
import AcademicHistoryTab from './PrincipalStudentTabs/AcademicHistoryTab';
import AttendanceTab from './PrincipalStudentTabs/AttendanceTab';
import DisciplineRecordsTab from './PrincipalStudentTabs/DisciplineRecordsTab';
import DocumentsTab from './PrincipalStudentTabs/DocumentsTab';
import LifecycleTab from './PrincipalStudentTabs/LifecycleTab';

export default function PrincipalStudentProfileModal() {
  const { selectedStudentId, activeProfileTab, closeProfileModal, setActiveProfileTab } = usePrincipalStudentsStore();
  const [profileData, setProfileData] = useState<PrincipalStudentProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedStudentId) return;
    
    let isMounted = true;
    setLoading(true);
    
    fetchPrincipalStudentProfile(selectedStudentId).then(data => {
      if (isMounted) {
        setProfileData(data);
        setLoading(false);
      }
    });

    return () => { isMounted = false; };
  }, [selectedStudentId]);

  if (!selectedStudentId) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User size={14} /> },
    { id: 'academic', label: 'Academic', icon: <GraduationCap size={14} /> },
    { id: 'attendance', label: 'Attendance', icon: <Clock size={14} /> },
    { id: 'discipline', label: 'Discipline', icon: <AlertTriangle size={14} /> },
    { id: 'documents', label: 'Documents', icon: <FileText size={14} /> },
    { id: 'lifecycle', label: 'Lifecycle', icon: <Activity size={14} /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-4xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-4 bg-card border-b border-border flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <User className="text-primary" size={20} />
            Student Profile Details
          </h2>
          <button 
            onClick={closeProfileModal}
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
            {/* Student Quick Info */}
            <div className="p-6 bg-page border-b border-border flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-[24px] font-bold text-primary">
                {profileData.profile.firstName[0]}{profileData.profile.lastName[0]}
              </div>
              <div className="flex-1">
                <h1 className="text-[24px] font-bold text-text-primary">
                  {profileData.profile.firstName} {profileData.profile.lastName}
                </h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-[13px] text-text-secondary">
                  <span><strong className="text-text-primary">Class:</strong> {profileData.profile.class} - {profileData.profile.section}</span>
                  <span><strong className="text-text-primary">Roll No:</strong> {profileData.profile.rollNo}</span>
                  <span><strong className="text-text-primary">Adm No:</strong> {profileData.profile.admissionNo}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    profileData.profile.status === 'Active' ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'
                  }`}>
                    {profileData.profile.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-border bg-card px-6 overflow-x-auto custom-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProfileTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-[13px] font-medium whitespace-nowrap transition-colors border-b-2 ${
                    activeProfileTab === tab.id
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
              {activeProfileTab === 'overview' && <ProfileOverviewTab profile={profileData.profile} guardian={profileData.guardian} />}
              {activeProfileTab === 'academic' && <AcademicHistoryTab records={profileData.academics} />}
              {activeProfileTab === 'attendance' && <AttendanceTab records={profileData.attendance} />}
              {activeProfileTab === 'discipline' && <DisciplineRecordsTab records={profileData.discipline} />}
              {activeProfileTab === 'documents' && <DocumentsTab records={profileData.documents} />}
              {activeProfileTab === 'lifecycle' && <LifecycleTab data={profileData.lifecycle} />}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-text-secondary">
            Failed to load student profile.
          </div>
        )}
      </div>
    </div>
  );
}
