"use client";

import { X, Mail, Phone, MapPin, Briefcase, Award, FileText, CalendarDays } from "lucide-react";
import type { EmployeeSearchResult } from "../hr_search_types/AdminHrSearchTypes";

interface AdminHrSearchProfileModalProps {
  profile: EmployeeSearchResult | null;
  isOpen: boolean;
  close: () => void;
}

export default function AdminHrSearchProfileModal({ profile, isOpen, close }: AdminHrSearchProfileModalProps) {
  
  if (!isOpen || !profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col">
        
        {/* Header & Cover */}
        <div className="relative h-32 bg-gradient-to-r from-primary/80 to-primary flex-shrink-0">
           <button onClick={close} className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors">
             <X size={20} />
           </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 pb-8 pt-0 relative">
          
          {/* Avatar & Basic Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-12 mb-8">
            <div className="w-24 h-24 rounded-full bg-card border-4 border-card shadow-lg flex items-center justify-center text-primary text-3xl font-black uppercase overflow-hidden">
               {profile.avatar ? <img src={profile.avatar} alt="avatar" className="w-full h-full object-cover"/> : profile.name.charAt(0)}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
              <p className="text-sm font-semibold text-muted-foreground flex items-center justify-center sm:justify-start gap-2 mt-1">
                <span className="text-primary">{profile.employeeId}</span> • {profile.designation}
              </p>
            </div>
            <div className="flex gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${profile.status === 'Active' ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'}`}>
                {profile.status}
              </span>
            </div>
          </div>

          {/* Grid Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Employment Details</h4>
              
              <div className="flex items-start gap-3">
                <Briefcase size={16} className="text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Department & Type</p>
                  <p className="text-sm font-semibold text-foreground">{profile.department} ({profile.employmentType})</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CalendarDays size={16} className="text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Joining Date</p>
                  <p className="text-sm font-semibold text-foreground">{profile.joiningDate}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Location / Branch</p>
                  <p className="text-sm font-semibold text-foreground">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border pb-2">Contact & Docs</h4>
              
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Email Address</p>
                  <p className="text-sm font-semibold text-foreground">{profile.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Phone Number</p>
                  <p className="text-sm font-semibold text-foreground">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText size={16} className="text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground font-bold">Document Status</p>
                  <p className={`text-sm font-bold ${profile.documentStatus === 'Verified' ? 'text-success' : 'text-warning'}`}>{profile.documentStatus}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 mt-2 p-4 bg-input/30 border border-border rounded-lg">
               <div className="flex items-center gap-3">
                  <Award size={20} className="text-primary"/>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Highest Qualification</p>
                    <p className="text-base font-bold text-foreground">{profile.qualification}</p>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
