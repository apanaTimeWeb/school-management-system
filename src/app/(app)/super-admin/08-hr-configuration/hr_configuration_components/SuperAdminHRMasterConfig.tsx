"use client";

import { useState } from "react";
import { Users, Briefcase, CalendarOff, IndianRupee, Plus, Edit, Trash2 } from "lucide-react";

export default function SuperAdminHRMasterConfig() {
  const [activeSubTab, setActiveSubTab] = useState("organization");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page rounded-t-lg">
        <button 
          onClick={() => setActiveSubTab('organization')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'organization' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Briefcase size={16} /> Organization Structure
        </button>
        <button 
          onClick={() => setActiveSubTab('leave')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'leave' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <CalendarOff size={16} /> Leave Management
        </button>
        <button 
          onClick={() => setActiveSubTab('payroll')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'payroll' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <IndianRupee size={16} /> Payroll & Attendance
        </button>
      </div>

      <div className="p-6">
        {activeSubTab === 'organization' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Departments */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Departments</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <div className="flex flex-col gap-2">
                {['Academic', 'Administration', 'Finance', 'Transport'].map(dept => (
                  <div key={dept} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <span className="text-sm font-semibold text-text-primary">{dept}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Designations */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Designations</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <div className="flex flex-col gap-2">
                {['Principal', 'Senior Teacher', 'Accountant', 'Librarian'].map(desig => (
                  <div key={desig} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <span className="text-sm font-semibold text-text-primary">{desig}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Employee types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Teaching Staff', 'Non-Teaching Staff', 'Support Staff'].map(type => (
                  <span key={type} className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold">{type}</span>
                ))}
              </div>
            </div>

            {/* Employment types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Employment types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Full-Time', 'Part-Time', 'Contract', 'Guest Faculty'].map(type => (
                  <span key={type} className="px-3 py-1.5 bg-success-bg text-success border border-success/20 rounded-md text-xs font-bold">{type}</span>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'leave' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Leave types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Leave types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <div className="flex flex-col gap-2">
                {['Casual Leave (CL)', 'Sick Leave (SL)', 'Earned Leave (EL)', 'Maternity Leave'].map(lv => (
                  <div key={lv} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <span className="text-sm font-semibold text-text-primary">{lv}</span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Leave policies */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Leave policies</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Configure</button>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg bg-bg-page text-sm text-text-secondary">
                  <strong>Standard Policy 2024:</strong> 12 CL, 6 SL, 0 EL per year. Accumulation allowed up to 30 days for SL.
                </div>
              </div>

              {/* Holiday rules */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Holiday rules</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Configure</button>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg bg-bg-page text-sm text-text-secondary">
                  <strong>Default Holiday Calendar:</strong> National Holidays + Regional Festivals. Weekends: 2nd & 4th Saturday Off.
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'payroll' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Salary components */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Salary components</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                  <tr>
                    <th className="px-3 py-2 border-b border-border">Component Name</th>
                    <th className="px-3 py-2 border-b border-border">Type</th>
                    <th className="px-3 py-2 border-b border-border text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-3 py-2 font-medium text-text-primary">Basic Pay</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Earnings</span></td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-text-primary">House Rent Allowance (HRA)</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Earnings</span></td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-text-primary">Provident Fund (PF)</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Deductions</span></td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Attendance rules */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Attendance rules</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
              </div>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-text-secondary">Late Mark Grace Time</span>
                  <span className="text-sm font-bold text-text-primary">15 Mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-text-secondary">Half Day Threshold</span>
                  <span className="text-sm font-bold text-text-primary">4 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-text-secondary">Absent Threshold</span>
                  <span className="text-sm font-bold text-text-primary">&lt; 2 Hours</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
