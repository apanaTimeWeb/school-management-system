"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Search,
  Filter,
  Eye,
  X,
  User,
  History,
  Lock,
  ArrowRight,
  DatabaseBackup,
  AlertTriangle,
  FileDiff
} from "lucide-react";

type ActionCategory = 'All' | 'Book Add' | 'Book Edit' | 'Issue' | 'Return' | 'Fine Update' | 'Inventory' | 'Archive';

interface AuditLog {
  id: string;
  action: ActionCategory;
  entity: string; 
  performedBy: string;
  role: string;
  timestamp: string;
  oldValue: string;
  newValue: string;
  remarks: string;
}

const MOCK_AUDIT_LOGS: AuditLog[] = [
  { 
    id: "ADT-9901", action: "Fine Update", entity: "Fine for Student Rahul (B-1088)", performedBy: "Amit Librarian", role: "Head Librarian", 
    timestamp: "2023-11-12 14:30:22", oldValue: "₹150", newValue: "₹0 (Waived)", remarks: "Waived due to medical emergency." 
  },
  { 
    id: "ADT-9902", action: "Book Edit", entity: "Book B-2050 (Organic Chemistry)", performedBy: "Neha Staff", role: "Assistant", 
    timestamp: "2023-11-12 11:15:00", oldValue: "Category: Science", newValue: "Category: Advanced Science", remarks: "Updated catalog tagging." 
  },
  { 
    id: "ADT-9903", action: "Issue", entity: "Book B-3001 to Member ID: 102", performedBy: "Amit Librarian", role: "Head Librarian", 
    timestamp: "2023-11-11 09:45:10", oldValue: "Status: Available", newValue: "Status: Issued", remarks: "Standard checkout process." 
  },
  { 
    id: "ADT-9904", action: "Archive", entity: "Book B-1011 (History)", performedBy: "Super Admin", role: "Admin", 
    timestamp: "2023-11-10 16:20:05", oldValue: "Status: Lost", newValue: "Status: Archived", remarks: "Permanently removed from active DB." 
  },
  { 
    id: "ADT-9905", action: "Inventory", entity: "Stock Count 2023", performedBy: "Neha Staff", role: "Assistant", 
    timestamp: "2023-11-09 10:00:00", oldValue: "System Count: 5040", newValue: "Physical Count: 5038", remarks: "2 books missing during audit." 
  },
  { 
    id: "ADT-9906", action: "Book Add", entity: "Book B-4050 (Maths Vol 1)", performedBy: "Amit Librarian", role: "Head Librarian", 
    timestamp: "2023-11-08 14:10:00", oldValue: "N/A", newValue: "Added to Inventory", remarks: "New purchase batch." 
  },
  { 
    id: "ADT-9907", action: "Return", entity: "Book B-1088 from Member ID: 102", performedBy: "Amit Librarian", role: "Head Librarian", 
    timestamp: "2023-11-05 15:30:00", oldValue: "Status: Issued", newValue: "Status: Available", remarks: "Returned normally." 
  }
];

export default function AuditHistory() {
  const [activeFilter, setActiveFilter] = useState<ActionCategory>('All');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLog, setSelectedLog] = useState<AuditLog | null>(null);

  const filteredLogs = MOCK_AUDIT_LOGS.filter(log => 
    (activeFilter === 'All' || log.action === activeFilter) &&
    (log.entity.toLowerCase().includes(searchQuery.toLowerCase()) || log.performedBy.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getActionColor = (action: ActionCategory) => {
    switch(action) {
      case 'Book Add': return 'bg-teal-100 text-teal-700 border-teal-200';
      case 'Book Edit': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Issue': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'Return': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Fine Update': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Inventory': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Archive': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <ShieldAlert className="w-8 h-8 text-rose-600" />
            Audit & System History
          </h1>
          <p className="text-gray-500 mt-1">Immutable ledger of all critical actions performed in the library system.</p>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl mb-8 flex items-start gap-3 shadow-lg">
        <Lock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-white tracking-wide">SECURE AUDIT TRAIL</p>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">This log records 'Who', 'When', and 'What' for every system change. By system design, these records are append-only and cannot be altered or deleted by any user role (including Super Admin) to maintain complete transparency.</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
           <Filter className="w-4 h-4 text-gray-400 mr-1" />
           {(['All', 'Book Add', 'Book Edit', 'Issue', 'Return', 'Fine Update', 'Inventory', 'Archive'] as ActionCategory[]).map(filter => (
             <button 
               key={filter}
               onClick={() => setActiveFilter(filter)}
               className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${activeFilter === filter ? 'bg-gray-800 text-white border-gray-800 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
             >
               {filter}
             </button>
           ))}
        </div>
        <div className="relative w-full xl:w-80 shrink-0">
          <input 
            type="text" 
            placeholder="Search by user or entity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-sm bg-gray-50/50"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Audit Data Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="py-4 px-6 font-bold w-48">Timestamp</th>
                <th className="py-4 px-6 font-bold">Action</th>
                <th className="py-4 px-6 font-bold">Entity / Target</th>
                <th className="py-4 px-6 font-bold">Performed By</th>
                <th className="py-4 px-6 font-bold text-center">Changes</th>
                <th className="py-4 px-6 font-bold text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 px-6">
                    <span className="font-mono text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">{log.timestamp}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getActionColor(log.action)}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-bold text-gray-800 text-sm">{log.entity}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">Ref: {log.id}</p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                        <User className="w-3 h-3 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">{log.performedBy}</p>
                        <p className="text-[10px] text-gray-500">{log.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col items-center gap-1 w-max mx-auto">
                      {log.oldValue !== 'N/A' && (
                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          <span className="bg-rose-50 text-rose-600 px-2 py-0.5 rounded border border-rose-100 line-through truncate max-w-[150px]">{log.oldValue}</span>
                        </div>
                      )}
                      {log.oldValue !== 'N/A' && <ArrowRight className="w-3 h-3 text-gray-400 my-0.5" />}
                      <div className="flex items-center gap-2 text-[10px] font-mono">
                         <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100 truncate max-w-[150px]">{log.newValue}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button 
                      onClick={() => setSelectedLog(log)}
                      className="px-3 py-1.5 bg-white text-gray-600 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-100 hover:text-gray-900 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" /> Inspect
                    </button>
                  </td>
                </tr>
              ))}
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-gray-500">
                    <DatabaseBackup className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="font-medium">No audit logs found for the selected criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>


      {/* Detail Inspector Modal */}
      {selectedLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-gray-900 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <FileDiff className="w-6 h-6 text-gray-400" />
                <div>
                  <h2 className="text-xl font-bold flex items-center gap-2">Log Inspector</h2>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">Reference: {selectedLog.id}</p>
                </div>
              </div>
              <button onClick={() => setSelectedLog(null)} className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-xl hover:bg-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6 bg-white">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Action Performed</p>
                  <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${getActionColor(selectedLog.action)}`}>
                    {selectedLog.action}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Timestamp</p>
                  <p className="font-mono font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200 inline-block">{selectedLog.timestamp}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" /> Actor
                  </p>
                  <p className="font-bold text-gray-900 text-lg">{selectedLog.performedBy}</p>
                  <p className="text-sm text-gray-600">{selectedLog.role}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <DatabaseBackup className="w-4 h-4 text-gray-400" /> Target Entity
                  </p>
                  <p className="font-bold text-gray-900 text-lg">{selectedLog.entity}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Value Mutation Diff</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-rose-50 border border-rose-200 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2 h-full bg-rose-500"></div>
                    <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">Old State</p>
                    <p className="font-mono text-sm text-rose-900 whitespace-pre-wrap">{selectedLog.oldValue}</p>
                  </div>
                  
                  <div className="flex items-center justify-center shrink-0">
                     <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                       <ArrowRight className="w-5 h-5 text-gray-500 hidden md:block" />
                       <ArrowRight className="w-5 h-5 text-gray-500 rotate-90 md:hidden" />
                     </div>
                  </div>

                  <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500"></div>
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">New State</p>
                    <p className="font-mono text-sm text-emerald-900 whitespace-pre-wrap">{selectedLog.newValue}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">System/User Remarks</p>
                <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-800 font-medium italic">"{selectedLog.remarks}"</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
