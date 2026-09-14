"use client";

import { useState } from "react";
import { Landmark, FileText, BadgePercent, GraduationCap, Plus, Edit, Trash2 } from "lucide-react";

export default function SuperAdminFeeFinanceConfig() {
  const [activeSubTab, setActiveSubTab] = useState("feeTypes");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold">
        Super Admin master configuration कर सके:
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('feeTypes')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'feeTypes' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Landmark size={16} /> Fee Types & Rules
        </button>
        <button 
          onClick={() => setActiveSubTab('discounts')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'discounts' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <BadgePercent size={16} /> Discounts & Scholarships
        </button>
        <button 
          onClick={() => setActiveSubTab('accounting')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'accounting' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <FileText size={16} /> Accounting Setup
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'feeTypes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Fee types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Fee types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                  <tr>
                    <th className="px-3 py-2 border-b border-border">Fee Name</th>
                    <th className="px-3 py-2 border-b border-border">Frequency</th>
                    <th className="px-3 py-2 border-b border-border text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-bg-page group">
                    <td className="px-3 py-2 font-medium text-text-primary">Tuition Fee</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">Monthly</span></td>
                    <td className="px-3 py-2 text-right"><div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity"><button className="text-info hover:text-info/80"><Edit size={14} /></button><button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button></div></td>
                  </tr>
                  <tr className="hover:bg-bg-page group">
                    <td className="px-3 py-2 font-medium text-text-primary">Transport Fee</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded font-bold">Monthly</span></td>
                    <td className="px-3 py-2 text-right"><div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity"><button className="text-info hover:text-info/80"><Edit size={14} /></button><button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button></div></td>
                  </tr>
                  <tr className="hover:bg-bg-page group">
                    <td className="px-3 py-2 font-medium text-text-primary">Admission Fee</td>
                    <td className="px-3 py-2"><span className="text-[10px] bg-warning-bg text-warning px-2 py-0.5 rounded font-bold">One-Time</span></td>
                    <td className="px-3 py-2 text-right"><div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity"><button className="text-info hover:text-info/80"><Edit size={14} /></button><button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button></div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-6">
              {/* Payment modes */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Payment modes</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Cash', 'Cheque', 'Bank Transfer', 'Online (Gateway)', 'UPI'].map(mode => (
                    <span key={mode} className="px-3 py-1.5 bg-success-bg text-success border border-success/20 rounded-md text-xs font-bold">{mode}</span>
                  ))}
                </div>
              </div>

              {/* Fine rules */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Fine rules</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Configure</button>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg bg-bg-page text-sm text-text-secondary">
                  <strong>Late Fee Policy:</strong> ₹50 per day after the 10th of every month. Max cap: ₹1000.
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'discounts' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Discount types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Discount types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Sibling Discount', value: '10% on Tuition' },
                  { name: 'Staff Child Discount', value: '50% on Tuition' },
                  { name: 'Full Year Payment', value: '5% Flat Discount' }
                ].map((disc, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-text-primary">{disc.name}</span>
                      <span className="text-xs text-text-secondary">{disc.value}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Scholarship types */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Scholarship types</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add New</button>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'Merit Scholarship', value: 'Top 3 rankers (100% Tuition)' },
                    { name: 'Sports Quota', value: 'State/National Level (25% Tuition)' }
                  ].map((schol, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-text-primary">{schol.name}</span>
                        <span className="text-xs text-text-secondary">{schol.value}</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                        <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Refund rules */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Refund rules</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg bg-bg-page text-sm text-text-secondary">
                  <strong>Policy:</strong> Admission fee is strictly non-refundable. Security deposit refundable within 30 days of TC generation.
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'accounting' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-6">
              {/* Receipt numbering */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary">Receipt numbering prefix/format</label>
                <div className="flex gap-2">
                  <input type="text" defaultValue="REC-2425-" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none flex-1" />
                  <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-bold hover:bg-primary hover:text-black transition-colors">Save</button>
                </div>
              </div>

              {/* Invoice numbering */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-secondary">Invoice numbering prefix/format</label>
                <div className="flex gap-2">
                  <input type="text" defaultValue="INV-2425-" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none flex-1" />
                  <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-bold hover:bg-primary hover:text-black transition-colors">Save</button>
                </div>
              </div>
              
              {/* Tax configuration where applicable */}
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-xs font-bold text-text-secondary">Tax configuration (where applicable)</label>
                <div className="flex gap-2">
                  <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none flex-1">
                    <option value="none">No Tax Applicable</option>
                    <option value="gst18">GST @ 18% (for non-educational fees)</option>
                  </select>
                  <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-bold hover:bg-primary hover:text-black transition-colors">Save</button>
                </div>
              </div>
            </div>

            {/* Financial categories */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Financial categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Category</button>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Income', sub: 'Tuition, Transport, Events' },
                  { name: 'Expense', sub: 'Salaries, Maintenance, Utilities' },
                  { name: 'Assets', sub: 'Infrastructure, Vehicles, IT Equipment' }
                ].map((cat, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-text-primary">{cat.name}</span>
                      <span className="text-xs text-text-secondary">{cat.sub}</span>
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

      </div>
    </div>
  );
}
