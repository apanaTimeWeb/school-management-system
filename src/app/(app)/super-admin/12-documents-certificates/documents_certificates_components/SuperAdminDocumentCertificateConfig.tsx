"use client";

import { useState } from "react";
import { FileText, FileBadge, Settings, CheckSquare, Plus, Edit, Trash2, QrCode, PenTool } from "lucide-react";

export default function SuperAdminDocumentCertificateConfig() {
  const [activeSubTab, setActiveSubTab] = useState("documents");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page rounded-t-lg">
        <button 
          onClick={() => setActiveSubTab('documents')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'documents' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <FileText size={16} /> Document Settings
        </button>
        <button 
          onClick={() => setActiveSubTab('certificates')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'certificates' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <FileBadge size={16} /> Certificates & Templates
        </button>
        <button 
          onClick={() => setActiveSubTab('settings')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'settings' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Settings size={16} /> Security & Upload Rules
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'documents' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Document types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Document types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Type</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Identity Proof', 'Address Proof', 'Previous Marksheet', 'Transfer Certificate', 'Medical Certificate'].map(type => (
                  <span key={type} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold">{type}</span>
                ))}
              </div>
            </div>

            {/* Required documents */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Required documents rules</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Configure</button>
              </div>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-text-primary">For Student Admission</span>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Identity Proof</span>
                    <span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Address Proof</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-text-primary">For Staff Hiring</span>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Identity Proof</span>
                    <span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Degree Cert.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document expiry rules */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Document expiry rules</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Rule</button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md">
                  <span className="text-sm font-semibold text-text-primary">Police Verification (Staff)</span>
                  <span className="text-xs text-warning font-bold bg-warning-bg px-2 py-1 rounded">Expires in 1 Year</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md">
                  <span className="text-sm font-semibold text-text-primary">Medical Certificate (Sports)</span>
                  <span className="text-xs text-warning font-bold bg-warning-bg px-2 py-1 rounded">Expires in 6 Months</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'certificates' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Certificate types & templates */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Certificate Types & Templates</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Create New</button>
              </div>
              <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                  <tr>
                    <th className="px-3 py-2 border-b border-border">Certificate Type</th>
                    <th className="px-3 py-2 border-b border-border">Template Status</th>
                    <th className="px-3 py-2 border-b border-border text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">Transfer Certificate (TC)</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold flex items-center w-fit gap-1"><CheckSquare size={10} /> Mapped</span></td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">Character Certificate</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold flex items-center w-fit gap-1"><CheckSquare size={10} /> Mapped</span></td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">Bonafide Certificate</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-warning-bg text-warning px-2 py-0.5 rounded font-bold">Draft</span></td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Serial numbering */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Serial numbering configuration</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Global Edit</button>
              </div>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary">Transfer Certificate Prefix</label>
                  <div className="flex gap-2">
                    <input type="text" defaultValue="TC-2425-" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none flex-1" />
                    <input type="number" defaultValue="001" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none w-24" placeholder="Start" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-bold text-text-secondary">Bonafide Certificate Prefix</label>
                  <div className="flex gap-2">
                    <input type="text" defaultValue="BONA-2425-" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none flex-1" />
                    <input type="number" defaultValue="001" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none w-24" placeholder="Start" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'settings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Upload Rules */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Upload Restrictions</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary">Maximum file size (per document)</label>
                  <select defaultValue="5" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                    <option value="2">2 MB</option>
                    <option value="5">5 MB</option>
                    <option value="10">10 MB</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-bold text-text-secondary">Allowed file formats</label>
                  <div className="flex gap-3 mt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                      <span className="text-sm font-semibold text-text-primary">.PDF</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                      <span className="text-sm font-semibold text-text-primary">.JPG / .PNG</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-primary" />
                      <span className="text-sm font-semibold text-text-primary">.DOCX</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Verification */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Security & Verification</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                
                {/* QR Verification */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <QrCode size={18} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="flex items-center justify-between cursor-pointer w-full">
                      <span className="text-sm font-bold text-text-primary">QR Verification on Certificates</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                    </label>
                    <span className="text-xs text-text-secondary mt-1">Embeds a unique URL QR code to verify authenticity online.</span>
                  </div>
                </div>

                <hr className="border-border" />

                {/* Digital Signature */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-success-bg rounded-md text-success">
                    <PenTool size={18} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="flex items-center justify-between cursor-pointer w-full">
                      <span className="text-sm font-bold text-text-primary">Digital signature configuration</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary" />
                    </label>
                    <span className="text-xs text-text-secondary mt-1">Attach encrypted digital signature (e-Sign) to outgoing PDFs.</span>
                    <button className="text-xs font-bold text-primary hover:underline self-start mt-2">Configure Signature Keys</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
