"use client";

import { X, CheckCircle, XCircle, FileText, CalendarClock, UploadCloud, AlertCircle } from "lucide-react";
import type { EmployeeVault, VerificationStatus, DocumentCategory } from "../hr_documents_types/HrDocumentsTypes";

interface HrDocumentsEmployeeModalProps {
  employee: EmployeeVault | null;
  close: () => void;
  updateStatus: (empId: string, docId: string, status: VerificationStatus) => void;
}

export default function HrDocumentsEmployeeModal({ employee, close, updateStatus }: HrDocumentsEmployeeModalProps) {
  if (!employee) return null;

  const getStatusBadge = (status: VerificationStatus) => {
    switch(status) {
      case 'Verified': return <span className="bg-success/10 text-success border border-success/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle size={10}/> Verified</span>;
      case 'Rejected': return <span className="bg-danger/10 text-danger border border-danger/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><XCircle size={10}/> Rejected</span>;
      default: return <span className="bg-warning/10 text-warning border border-warning/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10}/> Pending</span>;
    }
  };

  const categories: DocumentCategory[] = ['ID Proof', 'Address Proof', 'Qualification', 'Experience', 'Certificates', 'Joining Documents', 'Contract', 'Appointment Letter', 'Other Documents'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Document Vault: {employee.firstName} {employee.lastName}</h2>
            <div className="flex gap-3 mt-1">
              <span className="text-sm font-bold text-primary">{employee.designation} ({employee.department})</span>
              <span className="text-sm font-medium text-muted-foreground border-l border-border pl-3">EMP ID: {employee.employeeId}</span>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {categories.map(cat => {
              const docsInCategory = employee.documents.filter(d => d.category === cat);
              if (docsInCategory.length === 0) return null;

              return (
                <div key={cat} className="border border-border rounded-xl p-5 bg-input/20 flex flex-col">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border/50 pb-2 flex justify-between items-center">
                    {cat}
                    <span className="bg-input text-muted-foreground text-[10px] px-2 py-0.5 rounded-full">{docsInCategory.length} Docs</span>
                  </h3>
                  
                  <div className="space-y-4 flex-1">
                    {docsInCategory.map(doc => (
                      <div key={doc.id} className="bg-card border border-border rounded-lg p-3 shadow-sm hover:border-primary/30 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-bold text-foreground line-clamp-1 flex-1 pr-2" title={doc.name}>{doc.name}</span>
                          {getStatusBadge(doc.status)}
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground font-bold border-t border-border/50 pt-2">
                          <div className="flex items-center gap-1">
                            {doc.isUploaded ? (
                              <span className="flex items-center gap-1"><FileText size={12}/> Uploaded: {doc.uploadedAt}</span>
                            ) : (
                              <span className="text-warning">Not Uploaded</span>
                            )}
                          </div>
                          {doc.expiryDate && (
                            <div className="flex items-center gap-1 text-danger">
                              <CalendarClock size={12}/> Exp: {doc.expiryDate}
                            </div>
                          )}
                        </div>

                        {doc.isUploaded && (
                          <div className="flex gap-2 mt-3">
                            <button className="flex-1 py-1.5 text-xs font-bold text-info border border-info/30 hover:bg-info/10 transition-colors flex items-center justify-center gap-1 rounded-md"><UploadCloud size={14}/> View</button>
                            
                            {doc.status !== 'Verified' && (
                              <button onClick={() => updateStatus(employee.employeeId, doc.id, 'Verified')} className="flex-1 py-1.5 text-xs font-bold text-success border border-success/30 hover:bg-success/10 transition-colors flex items-center justify-center gap-1 rounded-md"><CheckCircle size={14}/> Verify</button>
                            )}
                            
                            {doc.status !== 'Rejected' && (
                              <button onClick={() => updateStatus(employee.employeeId, doc.id, 'Rejected')} className="flex-1 py-1.5 text-xs font-bold text-danger border border-danger/30 hover:bg-danger/10 transition-colors flex items-center justify-center gap-1 rounded-md"><XCircle size={14}/> Reject</button>
                            )}
                          </div>
                        )}
                        
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <button className="w-full py-2 bg-input border border-border border-dashed text-muted-foreground text-xs font-bold rounded-md hover:border-primary hover:text-primary transition-colors">
                      + Add new {cat} Document
                    </button>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}

