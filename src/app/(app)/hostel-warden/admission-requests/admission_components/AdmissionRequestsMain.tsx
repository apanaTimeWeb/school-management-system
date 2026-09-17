"use client";

import React, { useState } from 'react';
import { 
  FileSignature, Search, Filter, CheckCircle2, 
  XCircle, Clock, FileText, UserPlus, Eye, 
  ArrowRight, ShieldAlert, Paperclip
} from 'lucide-react';
import { MOCK_REQUESTS } from '../admission_constants/admission.constants';
import type { AdmissionRequest, RequestStatus } from '../admission_types/admission.types';

export default function AdmissionRequestsMain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<AdmissionRequest | null>(null);

  const filteredRequests = MOCK_REQUESTS.filter(r => 
    r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: RequestStatus) => {
    switch(status) {
      case 'SUBMITTED': return <span className="px-2.5 py-1 bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><FileText size={10}/> Submitted</span>;
      case 'UNDER_REVIEW': return <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Clock size={10}/> Reviewing</span>;
      case 'APPROVED': return <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 size={10}/> Approved</span>;
      case 'REJECTED': return <span className="px-2.5 py-1 bg-red-500/10 text-red-600 border border-red-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><XCircle size={10}/> Rejected</span>;
      case 'ALLOCATED': return <span className="px-2.5 py-1 bg-purple-500/10 text-purple-600 border border-purple-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><ArrowRight size={10}/> Allocated</span>;
      case 'ACTIVE': return <span className="px-2.5 py-1 bg-teal-500/10 text-teal-600 border border-teal-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><UserPlus size={10}/> Active</span>;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col w-full h-full space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0 shadow-sm">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <FileSignature className="text-sky-500" size={24} /> Admission Requests
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Review, approve, and process new hostel admission requests.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
           <div className="flex gap-2">
              <button className="flex items-center justify-center p-2 border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-input)] rounded-lg transition-colors bg-[var(--bg-card)]" title="Filter Requests">
                 <Filter size={18} />
              </button>
              <div className="relative w-full sm:w-64">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
                 <input 
                    type="text" 
                    placeholder="Search student or ID..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[var(--bg-input)] border border-[var(--border)] rounded-lg pl-9 pr-4 py-2 text-sm focus:border-[var(--primary)] outline-none transition-colors"
                 />
              </div>
           </div>
        </div>
      </div>

      {/* Requests Pipeline view (List) */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-sm overflow-hidden pb-2">
         {/* Workflow indicator */}
         <div className="p-4 bg-[rgba(14,165,233,0.05)] border-b border-[var(--border)] overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 min-w-max text-[10px] font-bold uppercase text-[var(--text-secondary)]">
               <span className="px-3 py-1 bg-[var(--bg-card)] border border-blue-500/30 text-blue-600 rounded-full">1. Submitted</span>
               <ArrowRight size={12} className="text-blue-500/50" />
               <span className="px-3 py-1 bg-[var(--bg-card)] border border-amber-500/30 text-amber-600 rounded-full">2. Under Review</span>
               <ArrowRight size={12} className="text-amber-500/50" />
               <span className="px-3 py-1 bg-[var(--bg-card)] border border-emerald-500/30 text-emerald-600 rounded-full">3. Approved</span>
               <ArrowRight size={12} className="text-emerald-500/50" />
               <span className="px-3 py-1 bg-[var(--bg-card)] border border-purple-500/30 text-purple-600 rounded-full">4. Allocated</span>
               <ArrowRight size={12} className="text-purple-500/50" />
               <span className="px-3 py-1 bg-[var(--bg-card)] border border-teal-500/30 text-teal-600 rounded-full">5. Active</span>
            </div>
         </div>

         <div className="grid grid-cols-1 divide-y divide-[var(--border)]">
           {filteredRequests.map(request => (
             <div key={request.id} className="p-4 hover:bg-[var(--bg-input)] transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center justify-between group">
               
               <div className="flex items-start md:items-center gap-4 w-full md:w-auto">
                 <div className="w-10 h-10 rounded-full bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold shrink-0">
                    {request.studentName.charAt(0)}
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                       <h3 className="font-bold text-[var(--text-primary)] text-[15px]">{request.studentName}</h3>
                       <span className="text-[10px] bg-[var(--bg-card)] border border-[var(--border)] px-1.5 py-0.5 rounded text-[var(--text-secondary)]">{request.class}</span>
                       {getStatusBadge(request.status)}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)]">
                       <span className="font-semibold">{request.id}</span>
                       <span className="w-1 h-1 rounded-full bg-[var(--border)]"></span>
                       <span>Pref: <span className="font-semibold">{request.preferredHostel}</span> ({request.roomPreference})</span>
                       <span className="w-1 h-1 rounded-full bg-[var(--border)]"></span>
                       <span className="flex items-center gap-1">
                          {request.documentsAttached ? <Paperclip size={12} className="text-emerald-500"/> : <ShieldAlert size={12} className="text-red-500"/>} 
                          {request.documentsAttached ? 'Docs attached' : 'Docs missing'}
                       </span>
                    </div>
                 </div>
               </div>

               <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0 pt-3 md:pt-0 border-t border-[var(--border)] md:border-0 justify-between md:justify-end">
                  <div className="text-xs text-[var(--text-secondary)] text-left md:text-right mr-4">
                     <p className="font-bold text-[10px] uppercase tracking-wider mb-0.5">Requested On</p>
                     <p>{new Date(request.requestDate).toLocaleDateString('en-GB')}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedRequest(request)}
                    className="px-4 py-2 bg-white dark:bg-black border border-[var(--border)] text-[var(--text-primary)] text-xs font-bold rounded-lg shadow-sm hover:border-sky-500 hover:text-sky-600 transition-colors flex items-center gap-2"
                  >
                     <Eye size={14} /> Review
                  </button>
               </div>

             </div>
           ))}

           {filteredRequests.length === 0 && (
             <div className="py-16 flex flex-col items-center justify-center text-[var(--text-secondary)]">
               <FileSignature size={48} className="opacity-20 mb-4" />
               <p className="font-medium text-lg">No requests found</p>
             </div>
           )}
         </div>
      </div>

      {/* Review Modal */}
      {selectedRequest && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[var(--bg-card)] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col">
               
               {/* Header */}
               <div className="p-5 border-b border-[var(--border)] flex justify-between items-start bg-sky-600 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-1">
                        <FileSignature size={24} />
                        <h2 className="text-xl font-bold">Review Admission Request</h2>
                     </div>
                     <p className="text-sky-100 text-sm">{selectedRequest.id}</p>
                  </div>
                  <button onClick={() => setSelectedRequest(null)} className="relative z-10 p-2 rounded-full hover:bg-white/20 transition-colors">
                     <X size={20} />
                  </button>
               </div>

               {/* Body */}
               <div className="p-6 overflow-y-auto custom-scrollbar">
                  
                  <div className="flex items-center justify-between mb-6">
                     {getStatusBadge(selectedRequest.status)}
                     <span className="text-xs text-[var(--text-secondary)] font-medium">Requested: {new Date(selectedRequest.requestDate).toLocaleString('en-GB')}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                     <div className="p-4 bg-[var(--bg-input)] rounded-xl border border-[var(--border)]">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Student Details</span>
                        <p className="font-bold text-[var(--text-primary)] text-lg">{selectedRequest.studentName}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{selectedRequest.studentId} &bull; {selectedRequest.class}</p>
                     </div>
                     <div className="p-4 bg-[var(--bg-input)] rounded-xl border border-[var(--border)]">
                        <span className="text-[10px] uppercase font-bold text-[var(--text-secondary)] block mb-1">Guardian Contact</span>
                        <p className="font-bold text-[var(--text-primary)] text-[15px]">{selectedRequest.guardianName}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{selectedRequest.guardianContact}</p>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="p-4 border border-[var(--border)] rounded-xl">
                        <span className="text-[10px] uppercase font-bold text-sky-500 block mb-2">Preferences</span>
                        <div className="flex gap-6">
                           <div>
                              <span className="text-xs text-[var(--text-secondary)] block mb-0.5">Hostel</span>
                              <span className="font-semibold text-sm">{selectedRequest.preferredHostel}</span>
                           </div>
                           <div>
                              <span className="text-xs text-[var(--text-secondary)] block mb-0.5">Room Type</span>
                              <span className="font-semibold text-sm">{selectedRequest.roomPreference}</span>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 border border-[var(--border)] rounded-xl bg-amber-50 dark:bg-amber-500/5 dark:border-amber-500/10">
                        <span className="text-[10px] uppercase font-bold text-amber-600 block mb-2">Reason for Admission</span>
                        <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed italic">"{selectedRequest.reason}"</p>
                     </div>

                     <div className="flex items-center gap-2 p-3 rounded-lg border border-[var(--border)]">
                        {selectedRequest.documentsAttached ? (
                           <><Paperclip size={16} className="text-emerald-500" /> <span className="text-sm font-semibold text-[var(--text-primary)]">All required documents verified & attached</span></>
                        ) : (
                           <><ShieldAlert size={16} className="text-red-500" /> <span className="text-sm font-bold text-red-500">Documents missing. Cannot approve.</span></>
                        )}
                     </div>
                  </div>

               </div>

               {/* Footer / Actions */}
               <div className="p-5 border-t border-[var(--border)] bg-[var(--bg-card)] flex flex-wrap gap-3 justify-end">
                  {(selectedRequest.status === 'SUBMITTED' || selectedRequest.status === 'UNDER_REVIEW') && (
                     <>
                        <button className="px-5 py-2.5 bg-red-500/10 text-red-600 font-bold text-sm rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                           Reject Request
                        </button>
                        <button 
                           disabled={!selectedRequest.documentsAttached}
                           className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-sm rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                           Approve Request
                        </button>
                     </>
                  )}
                  {selectedRequest.status === 'APPROVED' && (
                     <button className="px-5 py-2.5 bg-purple-600 text-white font-bold text-sm rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                        <ArrowRight size={16} /> Proceed to Allocate
                     </button>
                  )}
               </div>

            </div>
         </div>
      )}

    </div>
  );
}

// X icon workaround
function X(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
}
