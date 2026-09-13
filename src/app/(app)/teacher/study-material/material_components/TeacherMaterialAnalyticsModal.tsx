"use client";
import React, { useState } from 'react';
import { X, Eye, Download, Users, Clock, Search } from 'lucide-react';
import { useTeacherMaterialStore } from '../material_store/useTeacherMaterialStore';

export default function TeacherMaterialAnalyticsModal() {
  const { isAnalyticsModalOpen, closeAnalyticsModal, selectedMaterial } = useTeacherMaterialStore();
  const [activeTab, setActiveTab] = useState<'views' | 'downloads'>('views');
  const [search, setSearch] = useState('');

  if (!isAnalyticsModalOpen || !selectedMaterial) return null;

  // Mock data for analytics
  const totalStudents = 45;
  const viewedStudents = 32;
  const downloadedStudents = 18;

  const mockLogs = [
    { id: '1', name: 'Aarav Sharma', rollNo: '101', date: 'Oct 15, 2023 - 10:30 AM', status: 'Viewed', downloaded: true },
    { id: '2', name: 'Neha Gupta', rollNo: '102', date: 'Oct 15, 2023 - 11:15 AM', status: 'Viewed', downloaded: false },
    { id: '3', name: 'Rahul Singh', rollNo: '103', date: 'Oct 16, 2023 - 09:00 AM', status: 'Viewed', downloaded: true },
    { id: '4', name: 'Simran Kaur', rollNo: '104', date: 'Not Viewed', status: 'Pending', downloaded: false },
    { id: '5', name: 'Vikram Joshi', rollNo: '105', date: 'Oct 16, 2023 - 02:45 PM', status: 'Viewed', downloaded: true },
  ];

  const filteredLogs = mockLogs.filter(log => {
    const matchSearch = log.name.toLowerCase().includes(search.toLowerCase()) || log.rollNo.includes(search);
    const matchTab = activeTab === 'views' ? log.status === 'Viewed' : log.downloaded === true;
    return matchSearch && matchTab;
  });

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity">
      <div className="w-full max-w-3xl bg-bg-main h-[85vh] shadow-2xl flex flex-col border border-border rounded-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 bg-card border-b border-border flex items-start justify-between">
          <div>
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary mb-2 inline-block">Analytics & Tracking</span>
            <h2 className="text-[20px] font-bold text-text-primary line-clamp-1">{selectedMaterial.title}</h2>
            <p className="text-[13px] text-text-secondary mt-1">{selectedMaterial.class} • {selectedMaterial.subject}</p>
          </div>
          <button onClick={closeAnalyticsModal} className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Overview Cards */}
        <div className="p-6 bg-black/20 border-b border-border flex flex-col sm:flex-row gap-4">
           <div className="flex-1 bg-page border border-border rounded-xl p-4 text-center">
             <p className="text-[11px] text-text-secondary uppercase mb-1 font-bold flex items-center justify-center gap-1"><Users size={12}/> Total Audience</p>
             <p className="text-[24px] font-bold text-text-primary">{totalStudents}</p>
           </div>
           <div 
             className={`flex-1 border rounded-xl p-4 text-center cursor-pointer transition-colors ${activeTab === 'views' ? 'bg-info/10 border-info/50 shadow-sm' : 'bg-card border-border hover:border-info/30'}`} 
             onClick={() => setActiveTab('views')}
           >
             <p className="text-[11px] text-info uppercase mb-1 font-bold flex items-center justify-center gap-1"><Eye size={12}/> Viewed</p>
             <p className="text-[24px] font-bold text-info">{viewedStudents}</p>
           </div>
           <div 
             className={`flex-1 border rounded-xl p-4 text-center cursor-pointer transition-colors ${activeTab === 'downloads' ? 'bg-success/10 border-success/50 shadow-sm' : 'bg-card border-border hover:border-success/30'}`} 
             onClick={() => setActiveTab('downloads')}
           >
             <p className="text-[11px] text-success uppercase mb-1 font-bold flex items-center justify-center gap-1"><Download size={12}/> Downloaded</p>
             <p className="text-[24px] font-bold text-success">{downloadedStudents}</p>
           </div>
        </div>

        {/* List Section */}
        <div className="flex-1 flex flex-col overflow-hidden">
           <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h3 className="text-[16px] font-bold text-text-primary">
                {activeTab === 'views' ? 'View Logs' : 'Download Logs'}
              </h3>
              <div className="relative w-64">
                <Search className="absolute left-3 top-2 text-text-secondary" size={16} />
                <input 
                  type="text" 
                  placeholder="Search student..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-input border border-border rounded-lg pl-9 pr-4 py-1.5 text-[13px] text-text-primary focus:outline-none focus:border-primary"
                />
              </div>
           </div>

           <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
             <div className="space-y-3">
               {filteredLogs.length === 0 ? (
                 <div className="text-center py-10 text-text-secondary bg-card border border-border rounded-lg">
                   No tracking records found.
                 </div>
               ) : (
                 filteredLogs.map(log => (
                   <div key={log.id} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-page border border-border flex items-center justify-center text-text-secondary">
                         <Users size={18}/>
                       </div>
                       <div>
                         <p className="text-[14px] font-bold text-text-primary">{log.name} <span className="text-text-secondary font-normal text-[12px]">(Roll: {log.rollNo})</span></p>
                         <p className="text-[12px] text-text-secondary mt-0.5 flex items-center gap-1">
                           <Clock size={12}/> {log.date}
                         </p>
                       </div>
                     </div>
                     <div className="text-right">
                       {activeTab === 'views' && (
                         <span className="px-3 py-1 bg-info/20 text-info text-[11px] font-bold rounded">Viewed</span>
                       )}
                       {activeTab === 'downloads' && (
                         <span className="px-3 py-1 bg-success/20 text-success text-[11px] font-bold rounded flex items-center gap-1"><Download size={12}/> Downloaded</span>
                       )}
                     </div>
                   </div>
                 ))
               )}
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
