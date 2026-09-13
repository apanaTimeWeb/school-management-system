"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalAcademicSubject } from '../academics_types/PrincipalAcademics.types';
import { fetchPrincipalSubjects } from '../academics_api/PrincipalAcademicsApi';
import { usePrincipalAcademicsStore } from '../academics_store/usePrincipalAcademicsStore';
import { Book, Award, Users, Edit3 } from 'lucide-react';

export default function PrincipalAcademicsSubjectsTab() {
  const [subjects, setSubjects] = useState<PrincipalAcademicSubject[]>([]);
  const [loading, setLoading] = useState(true);
  const { setHODModalOpen } = usePrincipalAcademicsStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalSubjects().then(data => {
      if (isMounted) {
        setSubjects(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-card border border-border rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subjects.map((sub) => (
        <div key={sub.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-info/20 flex items-center justify-center text-info">
                <Book size={24} />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-text-primary leading-tight">{sub.subjectName}</h3>
                <span className="text-[12px] font-semibold text-text-secondary uppercase tracking-wider">{sub.department}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-[13px] text-text-secondary">
              <Award size={16} className="text-warning" />
              <strong className="text-text-primary font-medium">HOD:</strong> {sub.hodAssigned || <span className="text-danger italic">Not Assigned</span>}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-text-secondary">
              <Users size={16} className="text-success" />
              <strong className="text-text-primary font-medium">Teachers:</strong> {sub.totalTeachers} Active
            </div>
          </div>

          <div className="flex items-center gap-3 mt-auto border-t border-border/50 pt-4">
            <button 
              onClick={() => setHODModalOpen(true, sub.id)}
              className="flex-1 px-4 py-2 bg-page hover:bg-white/10 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors flex items-center justify-center gap-2"
            >
              <Edit3 size={14} className="text-primary" />
              Assign HOD
            </button>
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="flex-1 px-4 py-2 bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary rounded-md text-[13px] font-bold text-primary hover:text-black transition-colors">
              View Teachers
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
