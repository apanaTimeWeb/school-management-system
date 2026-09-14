"use client";

import React, { useState } from "react";
import DocumentVault from "./documents_components/DocumentVault";
import CertificateGenerator from "./documents_components/CertificateGenerator";
import TemplateBuilder from "./documents_components/TemplateBuilder";
import QRVerification from "./documents_components/QRVerification";
import { FolderOpen, Award, Palette, Scan } from "lucide-react";
import clsx from "clsx";

const tabs = [
  { id: "documents", label: "Document Vault", icon: FolderOpen },
  { id: "generator", label: "Certificate Generator", icon: Award },
  { id: "templates", label: "Custom Templates", icon: Palette },
  { id: "qr", label: "QR Verification", icon: Scan },
];

export default function DocumentsCertificatesPage() {
  const [activeTab, setActiveTab] = useState("documents");

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10 fade-in h-[calc(100vh-100px)]">
      {/* Header & Tabs */}
      <div className="flex flex-col gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Documents & Certificates</h1>
          <p className="text-sm text-text-secondary mt-1">Manage KYC documents, generate certificates, and verify authenticity.</p>
        </div>
        
        <div className="flex bg-card border border-border rounded-lg p-1 w-fit shadow-sm overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap",
                activeTab === tab.id 
                  ? "bg-primary text-black shadow-sm" 
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-6">
        {activeTab === "documents" && <DocumentVault />}
        {activeTab === "generator" && <CertificateGenerator />}
        {activeTab === "templates" && <TemplateBuilder />}
        {activeTab === "qr" && <QRVerification />}
      </div>
    </div>
  );
}
