"use client";

import React from 'react';
import type { GeneratedCertificate } from '../student_certificates_types/student_certificates_types';
import { FileBadge, Download, QrCode, Calendar, Hash } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  generated: GeneratedCertificate[];
}

export default function StudentCertificatesList({ generated }: Props) {
  
  if (generated.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center text-text-secondary bg-card border border-border rounded-xl shadow-sm">
        <FileBadge size={48} className="text-border mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Certificates Yet</h3>
        <p className="text-sm">You haven't been issued any certificates yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 motion-safe:animate-[fadeIn_0.3s_ease-out]">
      {generated.map(cert => (
        <div key={cert.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
          
          {/* Header/Graphic */}
          <div className="h-24 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            <FileBadge size={40} className="text-white drop-shadow-md z-10" />
            {cert.hasQR && (
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-md flex items-center justify-center border border-white/30 z-10 text-white" title="QR Verifiable">
                <QrCode size={18} />
              </div>
            )}
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-text-primary mb-3 leading-tight">{cert.type}</h3>
            
            <div className="space-y-2 mb-6 flex-1">
              <div className="flex items-center justify-between text-xs font-semibold text-text-secondary bg-page border border-border p-2 rounded-md">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> Issued On</span>
                <span className="text-text-primary">{cert.issueDate}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-text-secondary bg-page border border-border p-2 rounded-md">
                <span className="flex items-center gap-1.5"><Hash size={14} /> Ref No.</span>
                <span className="text-text-primary">{cert.referenceNo}</span>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
              <Download size={16} /> Download PDF
            </button>
          </div>
          
        </div>
      ))}
    </div>
  );
}
