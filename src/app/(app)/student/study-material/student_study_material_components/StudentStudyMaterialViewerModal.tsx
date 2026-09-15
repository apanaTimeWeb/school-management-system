"use client";

import React, { useEffect } from 'react';
import type { StudyMaterialItem } from '../student_study_material_types/student_study_material_types';
import { X, Download, ExternalLink, PlayCircle, FileText } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  material: StudyMaterialItem;
  onClose: () => void;
}

/**
 * RESPONSIBILITY: Renders the modal to preview or download a material.
 */
export default function StudentStudyMaterialViewerModal({ material, onClose }: Props) {
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const isVideo = material.type === 'Video';
  const isLink = material.type === 'Link';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-overlay/90 backdrop-blur-sm motion-safe:animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-popover border border-border rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative motion-safe:animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-page rounded-t-xl">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-0.5">{material.type} Viewer</span>
            <h2 className="text-base font-bold text-text-primary line-clamp-1 pr-4">{material.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-text-secondary hover:bg-danger/10 hover:text-danger hover:border-danger/30 transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Viewer Area */}
        <div className="flex-1 bg-black/5 overflow-hidden flex flex-col items-center justify-center p-6 relative">
          
          {isVideo ? (
            <div className="w-full max-w-2xl bg-black rounded-lg aspect-video flex items-center justify-center shadow-lg border border-border/50">
               {/* Simulating Video Player */}
               <div className="flex flex-col items-center gap-4 text-white/50 hover:text-white/80 cursor-pointer transition-colors">
                 <PlayCircle size={64} className="text-primary" />
                 <span className="text-sm font-semibold">Play Video</span>
               </div>
            </div>
          ) : isLink ? (
            <div className="text-center max-w-md">
              <div className="w-20 h-20 bg-info/10 text-info rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink size={40} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">External Link</h3>
              <p className="text-sm text-text-secondary mb-6">This material redirects to an external website. Click below to open it in a new tab.</p>
              <a href={material.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-info text-white font-bold px-6 py-3 rounded-lg shadow-sm hover:bg-info/90 transition-colors">
                Open Link <ExternalLink size={16} />
              </a>
            </div>
          ) : (
            <div className="text-center max-w-md">
              <div className="w-24 h-24 bg-card border border-border rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <FileText size={48} className="text-text-secondary/50" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Document Preview</h3>
              <p className="text-sm text-text-secondary mb-2">Preview is currently unavailable for this file format.</p>
              <p className="text-xs font-semibold text-text-secondary bg-white/50 inline-block px-3 py-1 rounded-full border border-border/50 mb-6">Size: {material.fileSize}</p>
              <div className="flex justify-center">
                <a href={material.url} download className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-sm hover:bg-primary-hover transition-colors">
                  <Download size={16} /> Download File
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Footer Info */}
        <div className="p-4 border-t border-border bg-page rounded-b-xl flex justify-between items-center text-xs text-text-secondary">
          <span>Uploaded by: <strong className="text-text-primary">{material.uploadedBy}</strong></span>
          <span>Date: <strong className="text-text-primary">{material.uploadDate}</strong></span>
        </div>

      </div>
    </div>
  );
}
