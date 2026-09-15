"use client";

import React from 'react';
import type { StudyMaterialItem } from '../student_study_material_types/student_study_material_types';
import { Search, FileText, FileDown, Video, Link as LinkIcon, Download, Book, Calendar, User } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  materials: StudyMaterialItem[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onViewMaterial: (mat: StudyMaterialItem) => void;
}

/**
 * RESPONSIBILITY: Renders the search bar and the grid of material cards.
 */
export default function StudentStudyMaterialList({ materials, searchQuery, onSearchChange, onViewMaterial }: Props) {
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileDown size={18} className="text-danger" />;
      case 'Document': return <FileText size={18} className="text-blue-500" />;
      case 'Video': return <Video size={18} className="text-purple-500" />;
      case 'Link': return <LinkIcon size={18} className="text-info" />;
      case 'Notes': return <Book size={18} className="text-emerald-500" />;
      default: return <FileText size={18} className="text-text-secondary" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-danger/10 text-danger border-danger/20';
      case 'Document': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Video': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'Link': return 'bg-info/10 text-info border-info/20';
      case 'Notes': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      default: return 'bg-border text-text-secondary';
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* Search Bar */}
      <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
        <Search size={18} className="text-text-secondary" />
        <input 
          type="text" 
          placeholder="Search materials by title or description..." 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-sm font-semibold text-text-primary placeholder:text-text-secondary/50"
        />
      </div>

      {/* Grid */}
      {materials.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
          <Book size={48} className="text-text-secondary/30 mb-4" />
          <h3 className="text-lg font-bold text-text-primary">No Materials Found</h3>
          <p className="text-sm text-text-secondary mt-1">Try selecting a different chapter or adjusting your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {materials.map((mat) => (
            <div 
              key={mat.id} 
              onClick={() => onViewMaterial(mat)}
              className="bg-card border border-border rounded-xl p-5 flex flex-col hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 motion-safe:transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className={clsx("w-10 h-10 rounded-lg flex items-center justify-center", getTypeColor(mat.type).split(' ')[0])}>
                  {getTypeIcon(mat.type)}
                </div>
                <span className={clsx("text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider", getTypeColor(mat.type))}>
                  {mat.type}
                </span>
              </div>

              <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {mat.title}
              </h3>
              
              <p className="text-xs text-text-secondary line-clamp-2 mb-4 flex-1">
                {mat.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mt-auto border-t border-border pt-3">
                <span className="text-[10px] font-semibold text-text-secondary flex items-center gap-1.5 line-clamp-1">
                  <User size={12} className="text-primary shrink-0" /> {mat.uploadedBy}
                </span>
                <span className="text-[10px] font-semibold text-text-secondary flex items-center gap-1.5 justify-end">
                  <Calendar size={12} className="text-amber-500 shrink-0" /> {mat.uploadDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
