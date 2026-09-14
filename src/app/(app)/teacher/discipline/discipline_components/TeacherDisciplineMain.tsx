"use client";
import React, { useState } from 'react';
import { Plus, Search, AlertTriangle, User, Calendar, MessageSquare, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useTeacherDisciplineStore, IncidentSeverity } from '../discipline_store/useTeacherDisciplineStore';
import TeacherLogIncidentModal from './TeacherLogIncidentModal';

export default function TeacherDisciplineMain() {
  const { openLogIncidentModal, incidentsList } = useTeacherDisciplineStore();
  const [search, setSearch] = useState('');
  const [filterSeverity, setFilterSeverity] = useState<'All' | IncidentSeverity>('All');

  const filteredIncidents = incidentsList.filter(inc => {
    const matchSearch = inc.studentName.toLowerCase().includes(search.toLowerCase()) || inc.rollNo.includes(search);
    const matchSeverity = filterSeverity === 'All' || inc.severity === filterSeverity;
    return matchSearch && matchSeverity;
  });

  const getSeverityBadge = (severity: IncidentSeverity) => {
    switch(severity) {
      case 'High': return <span className="bg-danger/20 text-danger px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-danger/20">High Severity</span>;
      case 'Medium': return <span className="bg-warning/20 text-warning px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-warning/20">Medium Severity</span>;
      case 'Low': return <span className="bg-info/20 text-info px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-info/20">Low Severity</span>;
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <AlertTriangle className="text-danger" size={24} /> Discipline & Incidents
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">Log student misbehaviour, track warnings, and manage disciplinary actions.</p>
        </div>
        <button 
          onClick={() => openLogIncidentModal()}
          className="flex items-center gap-2 px-4 py-2 bg-danger text-white font-bold text-[14px] rounded-lg hover:bg-danger/90 transition-colors shadow-sm self-start md:self-auto"
        >
          <Plus size={18} /> Log New Incident
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by student name or roll no..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'High', 'Medium', 'Low'].map((severity) => (
            <button 
              key={severity}
              onClick={() => setFilterSeverity(severity as any)}
              className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                filterSeverity === severity 
                ? 'bg-primary text-black' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {severity} {severity !== 'All' && 'Severity'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredIncidents.map((incident) => (
          <div key={incident.id} className="bg-card border border-border rounded-xl flex flex-col hover:border-danger/50 transition-colors">
            
            <div className="p-5 border-b border-border bg-black/10 flex items-start justify-between">
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-input flex items-center justify-center text-text-secondary border border-border">
                   <User size={24}/>
                 </div>
                 <div>
                   <h3 className="text-[16px] font-bold text-text-primary">{incident.studentName}</h3>
                   <p className="text-[13px] text-text-secondary">Roll No: {incident.rollNo} • {incident.class}</p>
                 </div>
               </div>
               {getSeverityBadge(incident.severity)}
            </div>

            <div className="p-5 flex-1 space-y-4">
               <div>
                 <p className="text-[12px] font-bold text-text-secondary uppercase mb-1 flex items-center gap-1.5"><AlertTriangle size={14} className="text-warning"/> Incident Type</p>
                 <p className="text-[15px] font-bold text-text-primary">{incident.incidentType}</p>
               </div>

               <div>
                 <p className="text-[12px] font-bold text-text-secondary uppercase mb-1 flex items-center gap-1.5"><MessageSquare size={14}/> Description</p>
                 <p className="text-[13px] text-text-primary leading-relaxed bg-page p-3 rounded-lg border border-border">
                   "{incident.description}"
                 </p>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-input border border-border p-3 rounded-lg">
                   <p className="text-[11px] text-text-secondary uppercase font-bold mb-1">Date Logged</p>
                   <p className="text-[13px] font-bold text-text-primary flex items-center gap-1.5"><Calendar size={14}/> {incident.date}</p>
                 </div>
                 <div className="bg-input border border-border p-3 rounded-lg">
                   <p className="text-[11px] text-text-secondary uppercase font-bold mb-1">Action Taken</p>
                   <p className="text-[13px] font-bold text-text-primary">{incident.actionTaken}</p>
                 </div>
               </div>
            </div>

            <div className="px-5 py-3 border-t border-border bg-black/20 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
               {incident.parentNotified && (
                 <span className="flex items-center gap-1 text-info bg-info/10 border border-info/20 px-2 py-1 rounded">
                   <CheckCircle2 size={12}/> Parent Notified
                 </span>
               )}
               {incident.escalatedToPrincipal && (
                 <span className="flex items-center gap-1 text-danger bg-danger/10 border border-danger/20 px-2 py-1 rounded">
                   <ShieldAlert size={12}/> Escalated to Principal
                 </span>
               )}
               {!incident.parentNotified && !incident.escalatedToPrincipal && (
                 <span className="flex items-center gap-1 text-success bg-success/10 border border-success/20 px-2 py-1 rounded">
                   <CheckCircle2 size={12}/> Resolved at Class Level
                 </span>
               )}
            </div>

          </div>
        ))}

        {filteredIncidents.length === 0 && (
          <div className="col-span-full py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
            <ShieldAlert size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-[16px] font-bold text-text-primary">No Incident Records Found</p>
            <p className="text-[13px] mt-1">No discipline issues logged matching your filters.</p>
          </div>
        )}
      </div>

      <TeacherLogIncidentModal />
    </div>
  );
}
