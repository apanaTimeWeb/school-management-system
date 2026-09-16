"use client";

import React, { useState } from 'react';
import { 
  AlertCircle, ChevronDown, CheckCircle2, 
  Send, Plus, Clock, Search, MessageSquareWarning, ArrowPathRoundedSquare, Check
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const complaintHistory = {
  'c1': [
    { 
      id: 'CMP-2023-112', 
      date: '15 Oct, 2023', 
      category: 'Transport', 
      priority: 'High', 
      description: 'Bus number DL-1P-1234 is consistently arriving 20 minutes late for the past week.',
      status: 'In Progress', 
      response: 'We have assigned the transport manager to look into the route delays.',
      resolution: ''
    }
  ],
  'c2': [
    { 
      id: 'CMP-2023-089', 
      date: '02 Sep, 2023', 
      category: 'Academics', 
      priority: 'Normal', 
      description: 'The science textbook prescribed in the syllabus is out of stock everywhere.',
      status: 'Closed', 
      response: 'We have arranged a bulk order. It is now available in the school stationery shop.',
      resolution: 'Textbooks made available.'
    }
  ]
};

const STAGES = ['Submitted', 'Under Review', 'Assigned', 'In Progress', 'Resolved', 'Closed'];

export default function ComplaintsPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [activeTab, setActiveTab] = useState<'history' | 'submit'>('history');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const history = complaintHistory[selectedChildId as keyof typeof complaintHistory];

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your complaint has been submitted successfully. You can track its status in the History tab.");
    setActiveTab('history');
  };

  const handleReopen = (id: string) => {
    alert(`Complaint ${id} has been reopened and sent for review again.`);
  };

  const renderStatusPipeline = (currentStatus: string) => {
    const currentIndex = STAGES.indexOf(currentStatus);
    
    return (
      <div className="w-full py-4 mt-4 overflow-x-auto custom-scrollbar">
        <div className="flex items-center min-w-[500px]">
          {STAGES.map((stage, index) => {
            const isCompleted = index <= currentIndex;
            const isCurrent = index === currentIndex;
            
            return (
              <React.Fragment key={stage}>
                {/* Node */}
                <div className="relative flex flex-col items-center">
                  <div className={clsx(
                    "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-10",
                    isCurrent ? "bg-indigo-600 text-white ring-4 ring-indigo-100" :
                    isCompleted ? "bg-emerald-500 text-white" : "bg-page border border-border text-text-tertiary"
                  )}>
                    {isCompleted && !isCurrent ? <Check size={12} /> : index + 1}
                  </div>
                  <span className={clsx(
                    "absolute top-8 text-[9px] font-bold whitespace-nowrap",
                    isCurrent ? "text-indigo-700" :
                    isCompleted ? "text-emerald-600" : "text-text-tertiary"
                  )}>
                    {stage}
                  </span>
                </div>
                
                {/* Connector Line */}
                {index < STAGES.length - 1 && (
                  <div className={clsx(
                    "flex-1 h-0.5",
                    isCompleted && index < currentIndex ? "bg-emerald-500" : "bg-border"
                  )}></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Complaints & Grievance</h1>
          <p className="text-text-secondary text-sm mt-1">Submit new complaints and track their resolution status.</p>
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
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); setActiveTab('history'); }}
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

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm min-h-[500px]">
        
        {/* Tabs */}
        <div className="flex border-b border-border bg-page/30">
          <button 
            onClick={() => setActiveTab('history')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'history' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <Clock size={18} /> Complaint History
          </button>
          <button 
            onClick={() => setActiveTab('submit')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'submit' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <Plus size={18} /> Submit Complaint
          </button>
        </div>

        <div className="p-6">
           {activeTab === 'history' ? (
             
             /* Complaint History Tab */
             <div className="animate-[fadeIn_0.3s_ease-out] max-w-5xl mx-auto">
               
               {history.length === 0 ? (
                 <div className="text-center py-16">
                    <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-border text-text-tertiary">
                      <AlertCircle size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">No Complaints</h3>
                    <p className="text-sm text-text-secondary">You haven't submitted any complaints for {childInfo.name}.</p>
                 </div>
               ) : (
                 <div className="space-y-6">
                   {history.map(cmp => (
                     <div key={cmp.id} className="border border-border rounded-2xl overflow-hidden shadow-sm">
                       
                       <div className="p-5 bg-page/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border">
                         <div>
                           <div className="flex items-center gap-2 mb-1">
                             <span className="text-xs font-bold bg-white px-2 py-1 rounded border border-border uppercase tracking-wider">{cmp.category}</span>
                             <span className={clsx(
                               "text-xs font-bold px-2 py-1 rounded border uppercase tracking-wider",
                               cmp.priority === 'High' ? "bg-red-50 text-red-600 border-red-200" :
                               cmp.priority === 'Normal' ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-emerald-50 text-emerald-600 border-emerald-200"
                             )}>
                               Priority: {cmp.priority}
                             </span>
                           </div>
                           <h3 className="font-extrabold text-lg text-text-primary mt-2">{cmp.id}</h3>
                           <p className="text-xs font-semibold text-text-secondary">Submitted on {cmp.date}</p>
                         </div>
                         <div className="w-full md:w-auto">
                           {cmp.status === 'Closed' || cmp.status === 'Resolved' ? (
                             <button onClick={() => handleReopen(cmp.id)} className="w-full md:w-auto px-4 py-2 bg-white text-orange-600 border border-orange-200 rounded-lg text-xs font-bold hover:bg-orange-50 transition-colors">
                               Reopen Complaint
                             </button>
                           ) : (
                             <span className="px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-bold inline-block w-full md:w-auto text-center">
                               Track Status Below
                             </span>
                           )}
                         </div>
                       </div>

                       <div className="p-5 bg-white">
                         <div className="mb-6 pb-6 border-b border-border border-dashed">
                           <p className="text-sm font-semibold text-text-primary leading-relaxed">
                             <strong className="text-text-secondary mr-2">Description:</strong>
                             {cmp.description}
                           </p>
                           {cmp.response && (
                             <div className="mt-4 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex gap-3">
                               <MessageSquareWarning size={18} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                               <div>
                                 <p className="text-[10px] font-bold text-indigo-500 uppercase">School Response</p>
                                 <p className="text-sm font-medium text-indigo-950 mt-1">{cmp.response}</p>
                               </div>
                             </div>
                           )}
                         </div>
                         
                         <div>
                           <p className="text-xs font-bold text-text-secondary uppercase mb-2">Live Status Tracking</p>
                           {renderStatusPipeline(cmp.status)}
                         </div>
                       </div>
                       
                     </div>
                   ))}
                 </div>
               )}

             </div>
             
           ) : (
             
             /* Submit Complaint Tab */
             <div className="animate-[fadeIn_0.3s_ease-out] max-w-2xl mx-auto">
               
               <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                 <h3 className="font-bold text-text-primary mb-6 flex items-center gap-2 border-b border-border pb-2">
                   <AlertCircle size={18} className="text-rose-500" /> New Complaint Form
                 </h3>
                 <form onSubmit={handleComplaintSubmit} className="space-y-5">
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div>
                       <label className="block text-sm font-bold text-text-secondary mb-2">Category</label>
                       <select className="w-full p-3 bg-page border border-border rounded-xl text-text-primary focus:outline-none focus:border-indigo-500 font-medium">
                         <option>Academics & Teaching</option>
                         <option>Transport</option>
                         <option>Hostel & Accommodation</option>
                         <option>Fee & Finance</option>
                         <option>Discipline & Conduct</option>
                         <option>Infrastructure & Facilities</option>
                         <option>Other</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-text-secondary mb-2">Priority</label>
                       <select className="w-full p-3 bg-page border border-border rounded-xl text-text-primary focus:outline-none focus:border-indigo-500 font-medium">
                         <option>Low</option>
                         <option>Normal</option>
                         <option>High</option>
                       </select>
                     </div>
                   </div>

                   <div>
                     <label className="block text-sm font-bold text-text-secondary mb-2">Description</label>
                     <textarea 
                       rows={5}
                       placeholder="Please describe the issue in detail..."
                       className="w-full p-3 bg-page border border-border rounded-xl text-text-primary focus:outline-none focus:border-indigo-500 resize-none font-medium placeholder:text-text-tertiary"
                       required
                     ></textarea>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-bold text-text-secondary mb-2">Attachment (Optional)</label>
                     <input 
                       type="file" 
                       className="w-full p-2 bg-page border border-border rounded-xl text-sm text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-all cursor-pointer"
                     />
                     <p className="text-[10px] text-text-tertiary mt-1">Upload images or documents (Max 5MB)</p>
                   </div>

                   <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 mt-4">
                     <Send size={18} /> Submit Complaint
                   </button>

                 </form>
               </div>

             </div>

           )}
        </div>
      </div>
    </div>
  );
}
