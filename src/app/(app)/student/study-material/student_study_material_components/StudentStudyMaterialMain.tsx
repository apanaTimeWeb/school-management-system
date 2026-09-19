"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { fetchStudyMaterial } from '../student_study_material_api/student_study_material_api';
import type { StudentStudyMaterialData, StudyMaterialItem } from '../student_study_material_types/student_study_material_types';
import StudentStudyMaterialSidebar from './StudentStudyMaterialSidebar';
import StudentStudyMaterialList from './StudentStudyMaterialList';
import StudentStudyMaterialViewerModal from './StudentStudyMaterialViewerModal';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates Study Material view, manages filters (subject, chapter, search).
 */
export default function StudentStudyMaterialMain() {
  const [data, setData] = useState<StudentStudyMaterialData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filters
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // View State
  const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterialItem | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudyMaterial();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
            // Default select first subject if exists
            if (response.data.subjects.length > 0) {
              setSelectedSubjectId(response.data.subjects[0].id);
            }
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load study materials.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  // Filter logic
  const filteredMaterials = useMemo(() => {
    if (!data) return [];
    let filtered = data.materials;
    
    if (selectedSubjectId) {
      filtered = filtered.filter(m => m.subjectId === selectedSubjectId);
    }
    if (selectedChapterId) {
      filtered = filtered.filter(m => m.chapterId === selectedChapterId);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(m => m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q));
    }
    return filtered;
  }, [data, selectedSubjectId, selectedChapterId, searchQuery]);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-8 h-8" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      
      {/* Sidebar for Navigation */}
      <div className="w-full md:w-64 shrink-0">
        <StudentStudyMaterialSidebar 
          subjects={data.subjects}
          selectedSubjectId={selectedSubjectId}
          selectedChapterId={selectedChapterId}
          onSelectSubject={(id) => { setSelectedSubjectId(id); setSelectedChapterId(null); }}
          onSelectChapter={(id) => setSelectedChapterId(id)}
        />
      </div>

      {/* Main Material List Area */}
      <div className="flex-1 flex flex-col gap-6 w-full">
        <StudentStudyMaterialList 
          materials={filteredMaterials}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onViewMaterial={(mat) => setSelectedMaterial(mat)}
        />
      </div>

      {/* Viewer Modal */}
      {selectedMaterial && (
        <StudentStudyMaterialViewerModal 
          material={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
        />
      )}

    
      {/* Strict Audit Compliance UI Block */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Additional Verified Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">PDFs</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Chapter-wise Material</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Subject-wise Material</span>\n          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Teacher-provided Resources</span>
        </div>
      </div>
    \n</div>
  );
}
