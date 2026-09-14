"use client";

import { useState } from "react";
import { Image as ImageIcon, LayoutTemplate, MonitorSmartphone, Mail, MessageSquare, Printer, Save, UploadCloud } from "lucide-react";

export default function SuperAdminSchoolBrandingConfig() {
  const [activeSubTab, setActiveSubTab] = useState("logos");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col mt-6">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <LayoutTemplate size={16} /> School Branding & Identity
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('logos')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'logos' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <ImageIcon size={16} /> Logos & Assets
        </button>
        <button 
          onClick={() => setActiveSubTab('ui')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'ui' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <MonitorSmartphone size={16} /> Login & UI Branding
        </button>
        <button 
          onClick={() => setActiveSubTab('print')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'print' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Printer size={16} /> Print (Receipts & IDs)
        </button>
        <button 
          onClick={() => setActiveSubTab('comm')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'comm' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Mail size={16} /> Communication Branding
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'logos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <div className="flex flex-col gap-1 border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5">Primary Logo (Light & Dark)</h3>
                <span className="text-[10px] text-text-secondary">Recommended size: 400x100px (PNG with transparent background)</span>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors group">
                  <UploadCloud size={24} className="text-text-secondary group-hover:text-primary" />
                  <span className="text-xs font-semibold text-text-secondary group-hover:text-primary">Upload Light Logo</span>
                </div>
                <div className="flex-1 border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-black/80 hover:border-primary transition-colors group">
                  <UploadCloud size={24} className="text-white/50 group-hover:text-primary" />
                  <span className="text-xs font-semibold text-white/50 group-hover:text-primary">Upload Dark Logo</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <div className="flex flex-col gap-1 border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase flex items-center gap-1.5">Favicon & App Icon</h3>
                <span className="text-[10px] text-text-secondary">Square icon for browser tab and PWA app icon. (1:1 Ratio, min 512x512)</span>
              </div>
              <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors group w-32 mx-auto">
                <UploadCloud size={24} className="text-text-secondary group-hover:text-primary" />
                <span className="text-xs font-semibold text-text-secondary group-hover:text-primary text-center">Upload Favicon</span>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'ui' && (
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Login Screen Branding</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Login Page Title</label>
                <input type="text" defaultValue="Welcome to XYZ International School" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Login Banner Image / Video</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                  <UploadCloud size={24} className="text-text-secondary" />
                  <span className="text-xs font-semibold text-text-secondary">Upload High-Res Banner (1920x1080)</span>
                </div>
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                <span className="text-sm font-semibold">Use solid primary brand color instead of banner image</span>
              </label>

              <div className="flex items-center justify-between border-t border-border pt-4 mt-2">
                <span className="text-sm font-bold">Primary Brand Color</span>
                <div className="flex items-center gap-2">
                  <input type="color" defaultValue="#4f46e5" className="w-8 h-8 rounded cursor-pointer border-0 p-0" />
                  <span className="text-xs font-mono bg-border/50 px-2 py-1 rounded">#4f46e5</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'print' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><Printer size={16}/> Report & Receipt Branding</h3>
              
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Show School Logo on Header</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Print Watermark (Background Logo)</span>
                  </div>
                </label>
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-xs font-bold text-text-secondary uppercase">Authorized Signatory Text (Receipts)</label>
                <input type="text" defaultValue="Principal / Accountant" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Upload Authorized Signature (PNG)</label>
                <div className="border border-dashed border-border rounded-md p-4 flex justify-center hover:border-primary transition-colors cursor-pointer bg-card">
                  <span className="text-xs text-text-secondary font-semibold flex items-center gap-1"><UploadCloud size={14}/> Upload Sign</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><LayoutTemplate size={16}/> ID Card & Certificate Branding</h3>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">ID Card Background / Template</label>
                <div className="border border-dashed border-border rounded-md p-4 flex justify-center hover:border-primary transition-colors cursor-pointer bg-card">
                  <span className="text-xs text-text-secondary font-semibold flex items-center gap-1"><UploadCloud size={14}/> Upload ID Card Template (Vertical)</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-xs font-bold text-text-secondary uppercase">Certificate Border/Frame</label>
                <div className="border border-dashed border-border rounded-md p-4 flex justify-center hover:border-primary transition-colors cursor-pointer bg-card">
                  <span className="text-xs text-text-secondary font-semibold flex items-center gap-1"><UploadCloud size={14}/> Upload Certificate Frame (A4 Landscape)</span>
                </div>
              </div>

              <p className="text-[10px] text-text-secondary mt-2">Certificate formats and text variables can be configured in the Documents & Certificates Module.</p>
            </div>

          </div>
        )}

        {activeSubTab === 'comm' && (
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><MessageSquare size={16}/> SMS Sender Configuration</h3>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">6-Character SMS Sender ID (Approved by DLT)</label>
                <input type="text" defaultValue="XYZSCH" maxLength={6} className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none font-mono uppercase tracking-widest w-32" />
                <span className="text-[10px] text-text-secondary">This sender ID will appear when parents receive SMS alerts.</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-5 rounded-xl bg-bg-page">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2 flex items-center gap-1.5"><Mail size={16}/> Email Branding</h3>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Default Email Sender Name</label>
                <input type="text" defaultValue="XYZ School Admin" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary uppercase">Email Footer Address Info</label>
                <textarea rows={2} defaultValue="XYZ International School\n123 Education Lane, Smart City, 400001" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none resize-none"></textarea>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-black font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-sm">
            <Save size={16} /> Save Branding Settings
          </button>
        </div>

      </div>
    </div>
  );
}
