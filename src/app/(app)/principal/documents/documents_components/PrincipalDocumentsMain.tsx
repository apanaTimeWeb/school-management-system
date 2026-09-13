"use client";
import React from 'react';
import { FileBadge, ShieldCheck, History, ScrollText } from 'lucide-react';
import { usePrincipalDocumentsStore } from '../documents_store/usePrincipalDocumentsStore';

import PrincipalCertificateRequestsTab from './PrincipalCertificateRequestsTab';
import PrincipalDocumentVerificationTab from './PrincipalDocumentVerificationTab';
import PrincipalCertificateHistoryTab from './PrincipalCertificateHistoryTab';
import PrincipalCertificateApprovalModal from './PrincipalCertificateApprovalModal';
import PrincipalDocumentViewModal from './PrincipalDocumentViewModal';

export default function PrincipalDocumentsMain() {
  const { activeTab, setActiveTab } = usePrincipalDocumentsStore();

  const tabs = [
    { id: 'requests', label: 'Certificate Requests', icon: <FileBadge size={16} /> },
    { id: 'verification', label: 'Document Verification', icon: <ShieldCheck size={16} /> },
    { id: 'history', label: 'Certificate History', icon: <History size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <ScrollText className="text-primary" size={24} />
            Documents & Certificates
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Approve TC/Bonafide requests and verify student uploaded documents.
          </p>
        </div>
      </div>

      <div className="flex border-b border-border bg-card rounded-t-lg overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-all border-b-2 ${
              activeTab === tab.id
                ? 'text-primary border-primary bg-primary/10'
                : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
            }`}
          >
            <span className={activeTab === tab.id ? 'text-primary' : 'text-text-secondary'}>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-bg-main pt-6 overflow-x-hidden">
        {activeTab === 'requests' && <PrincipalCertificateRequestsTab />}
        {activeTab === 'verification' && <PrincipalDocumentVerificationTab />}
        {activeTab === 'history' && <PrincipalCertificateHistoryTab />}
      </div>

      <PrincipalCertificateApprovalModal />
      <PrincipalDocumentViewModal />
    </div>
  );
}
