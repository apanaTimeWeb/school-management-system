"use client";

import type { Employee } from "../../hr_employees_types/AdminHrEmployeesTypes";
import { Download, History, Lock } from "lucide-react";

interface AdminHrEmployeesProfileTabsProps {
  employee: Employee;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AdminHrEmployeesProfileTabs({ employee, activeTab, setActiveTab }: AdminHrEmployeesProfileTabsProps) {
  
  const tabs = [
    { id: "personal", label: "Personal Info" },
    { id: "joining", label: "Job & Bank" },
    { id: "documents", label: "Documents" },
    { id: "history", label: "History" },
  ];

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden min-h-[400px]">
      <div className="flex border-b border-border bg-input/30 overflow-x-auto scrollbar-hide">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>}
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 motion-safe:animate-in motion-safe:fade-in duration-300">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">Basic Details</h3>
              <div className="space-y-4">
                <div><p className="text-xs text-muted-foreground uppercase">Full Name</p><p className="text-sm font-medium text-foreground">{employee.personal.firstName} {employee.personal.lastName}</p></div>
                <div><p className="text-xs text-muted-foreground uppercase">Date of Birth</p><p className="text-sm font-medium text-foreground">{employee.personal.dob}</p></div>
                <div><p className="text-xs text-muted-foreground uppercase">Gender & Blood</p><p className="text-sm font-medium text-foreground">{employee.personal.gender} | {employee.personal.bloodGroup}</p></div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">Contact Details</h3>
              <div className="space-y-4">
                <div><p className="text-xs text-muted-foreground uppercase">Address</p><p className="text-sm font-medium text-foreground">{employee.contact.address}</p></div>
                <div><p className="text-xs text-muted-foreground uppercase">Emergency Contact</p><p className="text-sm font-medium text-foreground">{employee.contact.emergencyContactName} ({employee.contact.emergencyContactPhone})</p></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'joining' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 motion-safe:animate-in motion-safe:fade-in duration-300">
            <div>
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">Professional</h3>
              <div className="space-y-4">
                <div><p className="text-xs text-muted-foreground uppercase">Date of Joining</p><p className="text-sm font-medium text-foreground">{employee.joining.joinDate}</p></div>
                <div><p className="text-xs text-muted-foreground uppercase">Employment Type</p><p className="text-sm font-medium text-foreground">{employee.joining.employmentType}</p></div>
                <div><p className="text-xs text-muted-foreground uppercase">Qualification</p><p className="text-sm font-medium text-foreground">{employee.joining.qualification}</p></div>
                <div><p className="text-xs text-muted-foreground uppercase">Experience</p><p className="text-sm font-medium text-foreground">{employee.joining.experienceYears} Years</p></div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-danger mb-4 uppercase tracking-wide border-b border-border pb-2 flex items-center gap-2">
                <Lock size={16} /> Restricted Bank Details
              </h3>
              {employee.bankDetails ? (
                <div className="space-y-4 bg-danger/5 p-4 rounded-lg border border-danger/20 relative overflow-hidden">
                  <div className="absolute right-[-20px] top-[-20px] text-danger/10"><Lock size={80} /></div>
                  <div className="relative z-10"><p className="text-xs text-muted-foreground uppercase">Account Name</p><p className="text-sm font-bold text-foreground">{employee.bankDetails.accountName}</p></div>
                  <div className="relative z-10"><p className="text-xs text-muted-foreground uppercase">Account Number</p><p className="text-sm font-bold text-foreground font-mono">{employee.bankDetails.accountNumber}</p></div>
                  <div className="relative z-10"><p className="text-xs text-muted-foreground uppercase">Bank & IFSC</p><p className="text-sm font-bold text-foreground">{employee.bankDetails.bankName} | {employee.bankDetails.ifscCode}</p></div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground italic">No bank details recorded.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
             {employee.documents.length === 0 ? (
               <p className="text-sm text-muted-foreground italic py-8 text-center border-2 border-dashed border-border rounded-lg">No documents uploaded.</p>
             ) : (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                 {employee.documents.map(doc => (
                   <div key={doc.id} className="flex items-center justify-between p-4 bg-input border border-border rounded-lg group hover:border-primary hover:shadow-md motion-safe:transition-all cursor-pointer">
                     <div>
                       <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{doc.name}</p>
                       <p className="text-xs font-medium text-muted-foreground mt-1">{doc.type}</p>
                     </div>
                     <button className="p-2 bg-primary/10 rounded-md text-primary hover:bg-primary hover:text-white transition-colors" title="Download Document">
                       <Download size={16} />
                     </button>
                   </div>
                 ))}
               </div>
             )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
             {employee.history.length === 0 ? (
               <div className="py-12 text-center flex flex-col items-center justify-center opacity-50">
                 <History size={32} className="mb-2 text-muted-foreground" />
                 <p className="text-sm font-medium text-muted-foreground">No history records found.</p>
               </div>
             ) : (
               <div className="relative border-l-2 border-border ml-4 space-y-6">
                 {employee.history.map(hist => (
                   <div key={hist.id} className="relative pl-6 hover:bg-input/50 p-2 rounded-r-md transition-colors">
                     <div className="absolute left-[-11px] top-2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-primary"></div>
                     </div>
                     <p className="text-xs font-bold text-primary mb-1">{hist.date}</p>
                     <h4 className="text-sm font-bold text-foreground">{hist.type}</h4>
                     <p className="text-sm font-medium text-muted-foreground mt-1">{hist.description}</p>
                   </div>
                 ))}
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
}
