"use client";

import { useState } from "react";
import { Calendar, CalendarCheck, MapPin, Settings, Plus, Edit, Trash2 } from "lucide-react";

export default function SuperAdminHolidayWorkingDayMasterConfig() {
  const [activeSubTab, setActiveSubTab] = useState("holidays");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page rounded-t-lg">
        <button 
          onClick={() => setActiveSubTab('holidays')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'holidays' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Calendar size={16} /> Holiday Calendar
        </button>
        <button 
          onClick={() => setActiveSubTab('workingDays')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'workingDays' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <CalendarCheck size={16} /> Working Days & Shifts
        </button>
        <button 
          onClick={() => setActiveSubTab('branches')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'branches' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <MapPin size={16} /> Branch-wise Configuration
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'holidays' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* National & School Holidays */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">National & School Holidays</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Holiday</button>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Republic Day', date: '26 Jan 2024', type: 'National' },
                  { name: 'Independence Day', date: '15 Aug 2024', type: 'National' },
                  { name: 'Diwali Break', date: '31 Oct - 04 Nov 2024', type: 'School' },
                  { name: 'Winter Vacation', date: '25 Dec - 02 Jan 2025', type: 'School' }
                ].map((hol, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-text-primary">{hol.name}</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${hol.type === 'National' ? 'bg-info-bg text-info' : 'bg-primary/10 text-primary'}`}>{hol.type}</span>
                      </div>
                      <span className="text-xs text-text-secondary">{hol.date}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Holidays */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Local & Regional Holidays</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Holiday</button>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Chhat Puja', date: '07 Nov 2024', region: 'Bihar/UP' },
                  { name: 'Maha Ashtami', date: '11 Oct 2024', region: 'West Bengal' }
                ].map((hol, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-text-primary">{hol.name}</span>
                      <span className="text-xs text-text-secondary">{hol.date} | {hol.region}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'workingDays' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Standard Working Days */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Standard Working Days</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                  <div key={day} className="p-2 border border-border rounded-md bg-success-bg/20 text-success text-center text-sm font-bold flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div> {day}
                  </div>
                ))}
                <div className="p-2 border border-border rounded-md bg-warning-bg/20 text-warning text-center text-sm font-bold flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-warning"></div> Saturday (Half-Day)
                </div>
                <div className="p-2 border border-border rounded-md bg-danger-bg/20 text-danger text-center text-sm font-bold flex items-center justify-center gap-2 col-span-2">
                  <div className="w-2 h-2 rounded-full bg-danger"></div> Sunday (Off)
                </div>
              </div>
            </div>

            {/* Special Working Days & Half Days */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Special Working Days</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Mark Day</button>
                </div>
                <div className="p-3 border border-border rounded-lg bg-bg-page flex justify-between items-center group">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Sunday, 15 Dec 2024</span>
                    <span className="text-xs text-text-secondary">Annual Sports Day (Full Working Day)</span>
                  </div>
                  <button className="text-danger hover:text-danger/80 opacity-0 group-hover:opacity-100"><Trash2 size={14} /></button>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Half-Day Rules</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg bg-bg-page">
                  <p className="text-sm text-text-secondary"><strong>Policy:</strong> 2nd and 4th Saturdays are full holidays. 1st, 3rd, and 5th Saturdays are Half-Days (Dismissal at 12:30 PM).</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'branches' && (
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Holiday by Branch Configuration</h3>
            <p className="text-sm text-text-secondary">Configure branch-specific holidays that do not apply to the central calendar.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Branch 1 */}
              <div className="border border-border rounded-lg p-4 bg-bg-page">
                <h4 className="text-sm font-bold text-text-primary border-b border-border pb-2 mb-3">City Campus (Branch A)</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Local Election Day</span>
                    <span className="text-xs font-bold text-warning bg-warning-bg px-2 py-0.5 rounded">22 Nov</span>
                  </div>
                  <button className="text-xs font-bold text-primary mt-2 flex items-center gap-1 w-fit"><Plus size={12} /> Add Exception</button>
                </div>
              </div>
              
              {/* Branch 2 */}
              <div className="border border-border rounded-lg p-4 bg-bg-page">
                <h4 className="text-sm font-bold text-text-primary border-b border-border pb-2 mb-3">South Campus (Branch B)</h4>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Foundation Day</span>
                    <span className="text-xs font-bold text-success bg-success-bg px-2 py-0.5 rounded">10 Dec</span>
                  </div>
                  <button className="text-xs font-bold text-primary mt-2 flex items-center gap-1 w-fit"><Plus size={12} /> Add Exception</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
