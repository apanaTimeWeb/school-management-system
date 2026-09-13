"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalEventCertificate } from '../events_types/PrincipalEvents.types';
import { fetchPrincipalCertificates } from '../events_api/PrincipalEventsApi';
import { Search, Filter, Award, Download, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalEventsCertificatesTab() {
  const [certificates, setCertificates] = useState<PrincipalEventCertificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalCertificates().then(data => {
      if (isMounted) {
        setCertificates(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => <div key={i} className="h-16 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary flex items-center gap-2">
            <Award className="text-primary" size={20} />
            Event Certificates Log
          </h2>
          <p className="text-[13px] text-text-secondary mt-1">Review issued certificates for event winners and participants.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search certificates..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-48 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-40">Certificate ID</th>
              <th className="p-4 w-48">Student Name</th>
              <th className="p-4">Event Details</th>
              <th className="p-4 w-40 text-center">Type</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert) => (
              <tr key={cert.id} className="border-b border-border/50 hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <span className="font-mono text-[13px] font-bold text-text-primary bg-black/20 px-2 py-1 rounded">{cert.id}</span>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary">{cert.studentName}</p>
                  <p className="text-[11px] text-text-secondary">P.ID: {cert.participantId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[13px] font-bold text-text-primary">{cert.eventTitle}</p>
                  <p className="text-[12px] text-text-secondary mt-0.5">Issued: {cert.issueDate}</p>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("px-2.5 py-1 rounded text-[11px] font-bold border", 
                    cert.certificateType === 'Winner' ? 'bg-primary/20 text-primary border-primary/30' :
                    cert.certificateType === 'Runner Up' ? 'bg-info/20 text-info border-info/30' :
                    'bg-page text-text-secondary border-border'
                  )}>
                    {cert.certificateType}
                  </span>
                </td>
                <td className="p-4 text-center">
                  {cert.status === 'Issued' ? (
                    <span className="inline-flex items-center gap-1 text-[12px] font-bold text-success"><CheckCircle size={14}/> Issued</span>
                  ) : (
                    <span className="text-[12px] text-warning">{cert.status}</span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'This action is part of the next development phase.' })); }} className="px-3 py-1.5 rounded bg-page hover:bg-white/10 border border-border text-[12px] font-bold text-text-primary transition-colors flex items-center justify-end gap-2 ml-auto">
                    <Download size={14}/> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
