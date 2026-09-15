"use client";

import React from 'react';
import type { StudyMaterialSubject } from '../student_study_material_types/student_study_material_types';
import { BookOpen, ChevronRight, Hash } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  subjects: StudyMaterialSubject[];
  selectedSubjectId: string | null;
  selectedChapterId: string | null;
  onSelectSubject: (id: string) => void;
  onSelectChapter: (id: string | null) => void;
}

/**
 * RESPONSIBILITY: Renders the sidebar for selecting Subject and Chapter.
 */
export default function StudentStudyMaterialSidebar({ subjects, selectedSubjectId, selectedChapterId, onSelectSubject, onSelectChapter }: Props) {
  
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col h-full sticky top-6">
      <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border pb-3">
        <BookOpen size={16} className="text-primary" /> Browse Subjects
      </h3>

      <div className="space-y-4">
        {subjects.map((sub) => {
          const isSubjectSelected = sub.id === selectedSubjectId;
          return (
            <div key={sub.id} className="flex flex-col">
              
              {/* Subject Toggle */}
              <button
                onClick={() => onSelectSubject(sub.id)}
                className={clsx(
                  "flex justify-between items-center px-3 py-2 rounded-lg text-sm font-bold transition-colors w-full text-left",
                  isSubjectSelected ? "bg-primary text-white shadow-sm" : "text-text-secondary hover:bg-page hover:text-text-primary"
                )}
              >
                <span>{sub.name}</span>
                <ChevronRight size={16} className={clsx("transition-transform", isSubjectSelected ? "rotate-90" : "")} />
              </button>

              {/* Chapters List (Accordion) */}
              {isSubjectSelected && (
                <div className="flex flex-col mt-2 pl-4 border-l-2 border-border/50 space-y-1">
                  
                  {/* "All Chapters" Option */}
                  <button
                    onClick={() => onSelectChapter(null)}
                    className={clsx(
                      "text-xs font-semibold px-3 py-2 rounded-md text-left transition-colors",
                      selectedChapterId === null ? "text-primary bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-page"
                    )}
                  >
                    All Chapters
                  </button>

                  {/* Specific Chapters */}
                  {sub.chapters.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => onSelectChapter(ch.id)}
                      className={clsx(
                        "text-xs font-semibold px-3 py-2 rounded-md text-left transition-colors flex items-start gap-2",
                        selectedChapterId === ch.id ? "text-primary bg-primary/10" : "text-text-secondary hover:text-text-primary hover:bg-page"
                      )}
                    >
                      <Hash size={14} className="mt-0.5 shrink-0" />
                      <span className="line-clamp-2">Ch {ch.chapterNumber}: {ch.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
