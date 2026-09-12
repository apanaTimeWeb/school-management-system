"use client";

import { useState } from "react";
import { Database, UserCheck, HeartPulse, Building, AlertCircle, Plus, Edit, Trash2 } from "lucide-react";

export default function SuperAdminCategoryMasterDataConfig() {
  const [activeSubTab, setActiveSubTab] = useState("users");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <Database size={16} /> Central master management:
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('users')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'users' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <UserCheck size={16} /> User Categories
        </button>
        <button 
          onClick={() => setActiveSubTab('demographics')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'demographics' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <HeartPulse size={16} /> Demographics
        </button>
        <button 
          onClick={() => setActiveSubTab('operations')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'operations' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Building size={16} /> Operations & Events
        </button>
        <button 
          onClick={() => setActiveSubTab('finance')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'finance' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <AlertCircle size={16} /> Finance & Complaints
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'users' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Student categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['General', 'OBC', 'SC/ST', 'EWS'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-bg-page border border-border rounded-md group hover:border-primary">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Parent types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Father', 'Mother', 'Guardian', 'Sponsor'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-bg-page border border-border rounded-md group hover:border-primary">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Staff categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Teaching', 'Non-Teaching', 'Management', 'Support Staff'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-bg-page border border-border rounded-md group hover:border-primary">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'demographics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-6">
              {/* Blood groups */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Blood groups</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(type => (
                    <span key={type} className="px-3 py-1.5 bg-danger-bg text-danger border border-danger/20 rounded-md text-xs font-bold">{type}</span>
                  ))}
                </div>
              </div>

              {/* Disability categories where appropriate */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Disability categories (where appropriate)</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['None', 'Visually Impaired', 'Hearing Impaired', 'Physically Challenged', 'Learning Disability'].map(type => (
                    <span key={type} className="px-3 py-1.5 bg-warning-bg text-warning border border-warning/20 rounded-md text-xs font-bold">{type}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Religions if required */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Religions (if required)</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Buddhist', 'Other'].map(type => (
                    <span key={type} className="px-3 py-1.5 bg-bg-page border border-border rounded-md text-xs font-bold text-text-primary">{type}</span>
                  ))}
                </div>
              </div>

              {/* Nationality & Languages */}
              <div className="flex gap-4">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">Nationality</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {['Indian', 'NRI', 'Foreign National'].map(type => (
                      <span key={type} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold">{type}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <h3 className="text-sm font-bold text-text-primary uppercase">Languages</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    {['English', 'Hindi', 'Regional'].map(type => (
                      <span key={type} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold">{type}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'operations' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Document types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Aadhar Card', 'PAN Card', 'Birth Certificate', 'Previous TC', 'Medical Report'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-bg-page border border-border rounded-md group hover:border-primary">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Leave categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Sick Leave', 'Casual Leave', 'Earned Leave', 'Maternity Leave', 'Duty Leave'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-bg-page border border-border rounded-md group hover:border-primary">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Event categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Academic', 'Sports', 'Cultural', 'Examination', 'Holiday/Festival'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-bg-page border border-border rounded-md group hover:border-primary">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'finance' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Income categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Tuition Fee', 'Transport Fee', 'Hostel Fee', 'Donation', 'Event Sponsorship'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-success-bg/20 border border-success/20 rounded-md group hover:border-success">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Expense categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Staff Salary', 'Electricity & Utility', 'Maintenance', 'Transport Fuel', 'Marketing'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-danger-bg/20 border border-danger/20 rounded-md group hover:border-danger">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Complaint categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /></button>
              </div>
              <div className="flex flex-col gap-2">
                {['Academic Issue', 'Infrastructure', 'Transport Issue', 'Hostel Issue', 'Staff Behavior'].map(cat => (
                  <div key={cat} className="flex justify-between items-center p-2.5 bg-warning-bg/20 border border-warning/20 rounded-md group hover:border-warning">
                    <span className="text-sm font-semibold text-text-primary">{cat}</span>
                    <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
