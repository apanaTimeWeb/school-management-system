"use client";

import React, { useState } from 'react';
import { 
  ScrollText, ChevronDown, CheckCircle2, Download, QrCode, 
  Plus, FileBadge, Send, Clock, FileText, CheckCircle
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const generatedCertificates = {
  'c1': [
    { id: 1, name: 'Bonafide Certificate', date: '15 Oct, 2023', refNo: 'BNF/2023/105', verified: true, size: '1.2 MB' },
    { id: 2, name: 'Study Certificate', date: '01 Apr, 2023', refNo: 'STY/2023/452', verified: true, size: '1.5 MB' }
  ],
  'c2': [
    { id: 3, name: 'Character Certificate', date: '20 Sep, 2023', refNo: 'CHR/2023/089', verified: true, size: '1.1 MB' },
    { id: 4, name: 'Bonafide Certificate', date: '12 Aug, 2023', refNo: 'BNF/2023/074', verified: true, size: '1.2 MB' }
  ]
};

const certificateRequests = {
  'c1': [
    { id: 1, type: 'Transfer Certificate (TC)', date: '16 Oct, 2023', status: 'Pending', reason: 'Relocating to another city.' }
  ],
  'c2': [
    { id: 2, type: 'Bonafide Certificate', date: '10 Aug, 2023', status: 'Approved', reason: 'For passport application.' }
  ]
};

export default function CertificatesPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [activeTab, setActiveTab] = useState<'generated' | 'request'>('generated');
  
  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const generated = generatedCertificates[selectedChildId as keyof typeof generatedCertificates];
  const requests = certificateRequests[selectedChildId as keyof typeof certificateRequests];

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Certificate request submitted successfully!");
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Certificates & Documents</h1>
          <p className="text-text-secondary text-sm mt-1">Download official certificates or request new ones.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); setActiveTab('generated'); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden min-h-[500px]">
        
        {/* Tabs */}
        <div className="flex border-b border-border bg-page/30">
          <button 
            onClick={() => setActiveTab('generated')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'generated' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <ScrollText size={18} /> Generated Documents
          </button>
          <button 
            onClick={() => setActiveTab('request')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'request' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <Plus size={18} /> Request New
          </button>
        </div>

        <div className="p-6">
           {activeTab === 'generated' ? (
             
             /* Generated Certificates Tab */
             <div className="animate-[fadeIn_0.3s_ease-out] max-w-5xl mx-auto">
               
               {generated.length === 0 ? (
                 <div className="text-center py-16">
                    <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-border text-text-tertiary">
                      <FileBadge size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">No Certificates Generated</h3>
                    <p className="text-sm text-text-secondary">Official documents will appear here once generated.</p>
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {generated.map(cert => (
                     <div key={cert.id} className="border border-border rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                        <div className="p-5 flex-1 flex gap-4">
                          <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-indigo-100">
                            <ScrollText size={28} className="text-indigo-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-extrabold text-lg text-text-primary mb-1">{cert.name}</h3>
                            <p className="text-xs font-bold text-text-secondary">Ref No: <span className="text-indigo-600">{cert.refNo}</span></p>
                            <p className="text-xs font-bold text-text-secondary mt-1">Issued: {cert.date}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-page border-t border-border flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                             <QrCode size={14} /> E-Verified
                          </div>
                          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
                             <Download size={16} /> PDF ({cert.size})
                          </button>
                        </div>
                     </div>
                   ))}
                 </div>
               )}

             </div>
             
           ) : (
             
             /* Request New Tab */
             <div className="animate-[fadeIn_0.3s_ease-out] max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
               
               {/* Request Form */}
               <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                 <h3 className="font-bold text-text-primary mb-6 flex items-center gap-2 border-b border-border pb-2">
                   <FileText size={18} className="text-indigo-500" /> Submit New Request
                 </h3>
                 <form onSubmit={handleRequestSubmit} className="space-y-5">
                   <div>
                     <label className="block text-sm font-bold text-text-secondary mb-2">Certificate Type</label>
                     <select className="w-full p-3 bg-page border border-border rounded-xl text-text-primary focus:outline-none focus:border-indigo-500 font-medium">
                       <option>Bonafide Certificate</option>
                       <option>Study Certificate</option>
                       <option>Character Certificate</option>
                       <option>Transfer Certificate (TC)</option>
                       <option>Fee Estimate Document</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-text-secondary mb-2">Reason for Request</label>
                     <textarea 
                       rows={4}
                       placeholder="Please specify why you need this document..."
                       className="w-full p-3 bg-page border border-border rounded-xl text-text-primary focus:outline-none focus:border-indigo-500 resize-none font-medium placeholder:text-text-tertiary"
                       required
                     ></textarea>
                   </div>
                   <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                     <Send size={18} /> Submit Request
                   </button>
                 </form>
               </div>

               {/* Request History */}
               <div className="bg-page border border-border rounded-2xl p-6 shadow-sm">
                 <h3 className="font-bold text-text-primary mb-6 flex items-center gap-2 border-b border-border pb-2">
                   <Clock size={18} className="text-orange-500" /> Request Status History
                 </h3>
                 
                 {requests.length === 0 ? (
                    <p className="text-sm text-text-secondary text-center py-6">No previous requests found.</p>
                 ) : (
                    <div className="space-y-4">
                      {requests.map(req => (
                        <div key={req.id} className="bg-white border border-border rounded-xl p-4">
                           <div className="flex justify-between items-start mb-2">
                             <span className={clsx(
                               "text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider",
                               req.status === 'Approved' ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
                             )}>
                               {req.status}
                             </span>
                             <span className="text-xs font-bold text-text-tertiary">{req.date}</span>
                           </div>
                           <h4 className="font-bold text-text-primary text-sm mb-1">{req.type}</h4>
                           <p className="text-xs text-text-secondary font-medium">Reason: {req.reason}</p>
                           
                           {req.status === 'Approved' && (
                             <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                               <CheckCircle size={14} /> Available in Generated Documents
                             </div>
                           )}
                        </div>
                      ))}
                    </div>
                 )}
               </div>

             </div>

           )}
        </div>
      </div>
    </div>
  );
}
