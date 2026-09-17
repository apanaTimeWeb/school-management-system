"use client";

import React, { useState } from 'react';
import { 
  ClipboardList, ChevronDown, CheckCircle2, 
  Filter, CalendarClock, ScrollText, AlertCircle, FileText, Check, XCircle
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const allRequests = {
  'c1': [
    { id: 'REQ-001', type: 'Leave Request', date: '16 Oct, 2023', description: 'Sick leave for 2 days due to fever.', status: 'Pending' },
    { id: 'REQ-002', type: 'Certificate Request', date: '10 Oct, 2023', description: 'Bonafide certificate for passport application.', status: 'Completed' },
    { id: 'REQ-003', type: 'Complaint', date: '05 Oct, 2023', description: 'Bus was delayed by 30 mins.', status: 'Under Review' },
  ],
  'c2': [
    { id: 'REQ-004', type: 'PTM Request', date: '12 Oct, 2023', description: 'Requesting a meeting with Math teacher.', status: 'Approved' },
    { id: 'REQ-005', type: 'Other Request', date: '01 Oct, 2023', description: 'Change of uniform size request.', status: 'Rejected', comment: 'Size not available currently.' }
  ]
};

const STATUS_PIPELINE = ['Pending', 'Under Review', 'Decision', 'Completed'];

export default function MyRequestsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const requests = allRequests[selectedChildId as keyof typeof allRequests] as any[];

  // Filtering
  const filteredRequests = requests.filter(req => {
    const typeMatch = filterType === 'All' || req.type === filterType;
    let statusMatch = true;
    if (filterStatus === 'Active') {
      statusMatch = !['Completed', 'Rejected'].includes(req.status);
    } else if (filterStatus !== 'All') {
      statusMatch = req.status === filterStatus || 
                   (filterStatus === 'Completed' && req.status === 'Completed') ||
                   (filterStatus === 'Approved/Rejected' && ['Approved', 'Rejected'].includes(req.status));
    }
    return typeMatch && statusMatch;
  });

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Leave Request': return <CalendarClock size={20} className="text-orange-500" />;
      case 'Certificate Request':
      case 'Document Request': return <ScrollText size={20} className="text-indigo-500" />;
      case 'Complaint': return <AlertCircle size={20} className="text-red-500" />;
      case 'PTM Request': return <FileText size={20} className="text-emerald-500" />;
      default: return <ClipboardList size={20} className="text-blue-500" />;
    }
  };

  const renderStatusPipeline = (currentStatus: string) => {
    let activeStageIndex = 0;
    if (currentStatus === 'Pending') activeStageIndex = 0;
    else if (currentStatus === 'Under Review') activeStageIndex = 1;
    else if (['Approved', 'Rejected'].includes(currentStatus)) activeStageIndex = 2;
    else if (currentStatus === 'Completed') activeStageIndex = 3;

    return (
      <div className="w-full mt-4 flex items-center justify-between relative px-2">
         {/* Background Line */}
         <div className="absolute top-3 left-4 right-4 h-0.5 bg-border z-0"></div>
         
         {/* Active Line */}
         <div 
           className={clsx(
             "absolute top-3 left-4 h-0.5 z-0 transition-all duration-500",
             currentStatus === 'Rejected' ? "bg-red-500" : "bg-emerald-500"
           )}
           style={{ width: `calc(${(activeStageIndex / 3) * 100}% - 2rem)` }}
         ></div>

         {STATUS_PIPELINE.map((stage, index) => {
            const isCompleted = index <= activeStageIndex;
            const isCurrent = index === activeStageIndex;
            const isRejected = currentStatus === 'Rejected' && index === 2;

            let stageLabel = stage;
            if (index === 2 && ['Approved', 'Rejected'].includes(currentStatus)) {
              stageLabel = currentStatus;
            }

            return (
              <div key={stage} className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                <div className={clsx(
                  "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-colors",
                  isRejected ? "bg-red-500 border-red-500 text-white" :
                  isCompleted ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-border text-border"
                )}>
                  {isRejected ? <XCircle size={14} /> : (isCompleted ? <Check size={14} /> : index + 1)}
                </div>
                <span className={clsx(
                  "text-[10px] font-bold absolute top-8 whitespace-nowrap",
                  isRejected ? "text-red-600" :
                  isCurrent ? "text-emerald-700" :
                  isCompleted ? "text-emerald-600" : "text-text-tertiary"
                )}>
                  {stageLabel}
                </span>
              </div>
            );
         })}
      </div>
    );
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">My Requests</h1>
          <p className="text-text-secondary text-sm mt-1">Central tracking system for all your submitted requests.</p>
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
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
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

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
        
        {/* Filters */}
        <div className="p-4 bg-page/50 border-b border-border flex flex-col sm:flex-row gap-4 items-center justify-between">
           <div className="flex items-center gap-2 text-text-secondary font-bold text-sm w-full sm:w-auto">
             <Filter size={18} />
             <span>Filter By:</span>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
             <select 
               className="p-2 bg-white border border-border rounded-lg text-sm font-semibold focus:outline-none focus:border-indigo-500 w-full sm:w-auto"
               value={filterType}
               onChange={(e) => setFilterType(e.target.value)}
             >
               <option value="All">All Request Types</option>
               <option value="Leave Request">Leave Request</option>
               <option value="Certificate Request">Certificate Request</option>
               <option value="Complaint">Complaint</option>
               <option value="PTM Request">PTM Request</option>
             </select>
             
             <select 
               className="p-2 bg-white border border-border rounded-lg text-sm font-semibold focus:outline-none focus:border-indigo-500 w-full sm:w-auto"
               value={filterStatus}
               onChange={(e) => setFilterStatus(e.target.value)}
             >
               <option value="All">All Statuses</option>
               <option value="Active">Active / Pending</option>
               <option value="Under Review">Under Review</option>
               <option value="Approved/Rejected">Approved / Rejected</option>
               <option value="Completed">Completed</option>
             </select>
           </div>
        </div>

        {/* Requests List */}
        <div className="p-6">
           {filteredRequests.length === 0 ? (
             <div className="text-center py-16">
                <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-border text-text-tertiary">
                  <ClipboardList size={32} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">No Requests Found</h3>
                <p className="text-sm text-text-secondary">Try adjusting your filters or submit a new request.</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {filteredRequests.map((req: any) => (
                 <div key={req.id} className="border border-border rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col h-full relative overflow-hidden">
                    
                    <div className="flex justify-between items-start mb-3 border-b border-border pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-page rounded-xl flex items-center justify-center border border-border">
                          {getIconForType(req.type)}
                        </div>
                        <div>
                          <h4 className="font-bold text-text-primary text-sm">{req.type}</h4>
                          <p className="text-[10px] text-text-tertiary font-bold mt-0.5">ID: {req.id} &bull; {req.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8 flex-1">
                      <p className="text-sm font-medium text-text-secondary line-clamp-2">
                        {req.description}
                      </p>
                      {req.comment && (
                        <p className="mt-2 text-xs font-bold text-red-600 bg-red-50 p-2 rounded-lg border border-red-100">
                          Note: {req.comment}
                        </p>
                      )}
                    </div>

                    {/* Status Tracking */}
                    <div className="mt-auto pt-4 border-t border-border border-dashed pb-6">
                      {renderStatusPipeline(req.status)}
                    </div>
                 </div>
               ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
