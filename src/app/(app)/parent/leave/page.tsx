"use client";

import React, { useState } from 'react';
import { 
  CalendarDays, ChevronDown, CheckCircle2, History, Send, 
  Paperclip, Clock, CheckSquare, XSquare, Plus, AlertCircle
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const leaveHistoryData = {
  'c1': [
    { id: 1, type: 'Sick Leave', startDate: '05 Oct, 2023', endDate: '06 Oct, 2023', reason: 'Viral Fever', status: 'Approved', appliedOn: '04 Oct, 2023' },
    { id: 2, type: 'Family Function', startDate: '15 Sep, 2023', endDate: '16 Sep, 2023', reason: 'Attending cousin\'s wedding out of town', status: 'Approved', appliedOn: '10 Sep, 2023' },
  ],
  'c2': [
    { id: 3, type: 'Sick Leave', startDate: '10 Oct, 2023', endDate: '12 Oct, 2023', reason: 'Stomach infection', status: 'Pending', appliedOn: '09 Oct, 2023' },
    { id: 4, type: 'Casual Leave', startDate: '20 Aug, 2023', endDate: '20 Aug, 2023', reason: 'Personal work', status: 'Rejected', appliedOn: '19 Aug, 2023', remark: 'Exams approaching. Leave denied.' },
  ]
};

export default function LeavePage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const [activeTab, setActiveTab] = useState<'apply' | 'history'>('apply');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const history = leaveHistoryData[selectedChildId as keyof typeof leaveHistoryData] as any[];

  // Form State
  const [leaveType, setLeaveType] = useState('Sick Leave');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset Form
      setStartDate('');
      setEndDate('');
      setReason('');
      setFileName('');
      
      setTimeout(() => {
        setShowSuccess(false);
        setActiveTab('history'); // Switch to history to show pending leave
      }, 2000);
    }, 1500);
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Approved': return <span className="flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold"><CheckSquare size={14}/> Approved</span>;
      case 'Rejected': return <span className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold"><XSquare size={14}/> Rejected</span>;
      case 'Pending': return <span className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold"><Clock size={14}/> Pending</span>;
      default: return null;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Leave Application</h1>
          <p className="text-text-secondary text-sm mt-1">Apply for leave and track approval status.</p>
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

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm min-h-[500px]">
        
        {/* Tabs */}
        <div className="flex border-b border-border bg-page/30">
          <button 
            onClick={() => setActiveTab('apply')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'apply' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <Plus size={18} /> Apply Leave
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'history' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <History size={18} /> Leave History
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'apply' ? (
            
            /* Apply Leave Form */
            <div className="max-w-2xl mx-auto animate-[fadeIn_0.3s_ease-out]">
              {showSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center">
                   <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-500">
                     <CheckCircle2 size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-emerald-800 mb-2">Application Submitted!</h3>
                   <p className="text-sm text-emerald-600">Your leave request has been sent to the class teacher for approval.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Leave Type */}
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Leave Type <span className="text-red-500">*</span></label>
                    <select 
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                      className="w-full px-4 py-3 bg-page border border-border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none"
                      required
                    >
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Casual Leave">Casual Leave</option>
                      <option value="Family Function">Family Function</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-2">Start Date <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                        <input 
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-page border border-border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500 transition-all text-text-primary"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text-primary mb-2">End Date <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                        <input 
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-page border border-border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500 transition-all text-text-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Reason for Leave <span className="text-red-500">*</span></label>
                    <textarea 
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Please explain the reason in detail..."
                      rows={4}
                      className="w-full px-4 py-3 bg-page border border-border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Attachment */}
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Attachment (Optional)</label>
                    <div className="relative border-2 border-dashed border-border rounded-xl p-6 text-center hover:bg-page transition-colors">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <div className="pointer-events-none flex flex-col items-center">
                        <Paperclip size={24} className={clsx("mb-2", fileName ? "text-indigo-500" : "text-text-tertiary")} />
                        {fileName ? (
                          <span className="text-sm font-bold text-indigo-600">{fileName}</span>
                        ) : (
                          <>
                            <span className="text-sm font-bold text-text-primary">Click to upload medical certificate or proof</span>
                            <span className="text-xs text-text-secondary mt-1">PDF, JPG, PNG (Max 5MB)</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <><Send size={18} /> Submit Application</>
                    )}
                  </button>

                </form>
              )}
            </div>
            
          ) : (
            
            /* Leave History */
            <div className="animate-[fadeIn_0.3s_ease-out]">
              {history.length === 0 ? (
                <div className="text-center py-16">
                   <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 text-text-tertiary">
                     <History size={32} />
                   </div>
                   <h3 className="text-lg font-bold text-text-primary">No Leave History</h3>
                   <p className="text-sm text-text-secondary">You haven't applied for any leaves yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {history.map((leave: any) => (
                    <div key={leave.id} className="p-5 border border-border rounded-2xl bg-white hover:shadow-md transition-shadow">
                       
                       <div className="flex items-start justify-between mb-4">
                         <div>
                           <h4 className="font-extrabold text-text-primary">{leave.type}</h4>
                           <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider mt-1">Applied: {leave.appliedOn}</p>
                         </div>
                         {getStatusBadge(leave.status)}
                       </div>

                       <div className="bg-page/50 rounded-xl p-3 mb-4 border border-border">
                         <div className="flex items-center gap-3 text-sm font-bold text-text-secondary">
                           <CalendarDays size={16} className="text-indigo-500" />
                           <span>{leave.startDate}</span>
                           <span className="text-text-tertiary text-xs">to</span>
                           <span>{leave.endDate}</span>
                         </div>
                       </div>

                       <p className="text-sm text-text-secondary line-clamp-2">
                         <strong>Reason:</strong> {leave.reason}
                       </p>

                       {leave.remark && (
                         <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl text-xs text-red-800 flex items-start gap-2">
                           <AlertCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                           <p><strong>Remarks:</strong> {leave.remark}</p>
                         </div>
                       )}

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
