"use client";

import { useState } from "react";
import { BookOpen, Users, AlertCircle, Settings, Plus, Edit, Trash2 } from "lucide-react";

export default function SuperAdminLibraryMasterConfig() {
  const [activeSubTab, setActiveSubTab] = useState("categories");

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page rounded-t-lg">
        <button 
          onClick={() => setActiveSubTab('categories')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'categories' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <BookOpen size={16} /> Book & Member Types
        </button>
        <button 
          onClick={() => setActiveSubTab('rules')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'rules' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <AlertCircle size={16} /> Issue & Fine Rules
        </button>
        <button 
          onClick={() => setActiveSubTab('settings')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'settings' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Settings size={16} /> Barcode & Numbering
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'categories' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Book categories */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Book categories</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Category</button>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Textbooks', code: 'TXT' },
                  { name: 'Reference Books', code: 'REF' },
                  { name: 'Fiction & Literature', code: 'FIC' },
                  { name: 'Journals & Magazines', code: 'JRN' }
                ].map((cat, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-bg-page border border-border rounded-md group hover:border-primary transition-colors">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-text-primary">{cat.name}</span>
                      <span className="text-xs text-text-secondary">Code: {cat.code}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-info hover:text-info/80"><Edit size={14} /></button>
                      <button className="text-danger hover:text-danger/80"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Member types */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <h3 className="text-sm font-bold text-text-primary uppercase">Member types</h3>
                <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Plus size={14} /> Add Member Type</button>
              </div>
              <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden">
                <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                  <tr>
                    <th className="px-3 py-2 border-b border-border">Type</th>
                    <th className="px-3 py-2 border-b border-border">Max Books</th>
                    <th className="px-3 py-2 border-b border-border text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">Student</td>
                    <td className="px-3 py-2 text-text-secondary">3</td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">Teacher</td>
                    <td className="px-3 py-2 text-text-secondary">5</td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                  <tr className="hover:bg-bg-page">
                    <td className="px-3 py-2 font-medium text-text-primary">Staff</td>
                    <td className="px-3 py-2 text-text-secondary">2</td>
                    <td className="px-3 py-2 text-right"><button className="text-info hover:text-info/80"><Edit size={14} /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

        {activeSubTab === 'rules' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="flex flex-col gap-6">
              {/* Issue period */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Issue period</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                </div>
                <div className="flex flex-col gap-2 p-4 border border-border rounded-lg bg-bg-page">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Students</span>
                    <span className="text-sm font-bold text-text-primary">7 Days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-text-secondary">Teachers</span>
                    <span className="text-sm font-bold text-text-primary">14 Days</span>
                  </div>
                </div>
              </div>

              {/* Renewal rules */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Renewal rules</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                </div>
                <div className="p-4 border border-dashed border-border rounded-lg bg-bg-page text-sm text-text-secondary">
                  <strong>Policy:</strong> Max 1 renewal allowed per book. Renewal extends period by standard issue duration.
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Fine rules */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Fine rules</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                </div>
                <div className="flex justify-between items-center p-4 border border-border rounded-lg bg-bg-page">
                  <span className="text-sm text-text-secondary">Late Return Fine</span>
                  <span className="text-sm font-bold text-danger">₹5 / Day</span>
                </div>
              </div>

              {/* Lost & Damaged book rules */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <h3 className="text-sm font-bold text-text-primary uppercase">Lost & Damaged book rules</h3>
                  <button className="flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover"><Edit size={14} /> Edit</button>
                </div>
                <div className="flex flex-col gap-2 p-4 border border-dashed border-border rounded-lg bg-bg-page">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-text-secondary">Lost book rule</span>
                    <span className="text-xs font-bold text-danger bg-danger-bg px-2 py-1 rounded">1.5x of Book MRP</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-semibold text-text-secondary">Damaged book rule</span>
                    <span className="text-xs font-bold text-warning bg-warning-bg px-2 py-1 rounded">1.0x of Book MRP</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {activeSubTab === 'settings' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Barcode settings */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Barcode settings</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary">Barcode Standard</label>
                  <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                    <option value="code128">Code 128</option>
                    <option value="code39">Code 39</option>
                    <option value="ean13">EAN-13</option>
                  </select>
                </div>
                <label className="flex items-start gap-3 cursor-pointer mt-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4 mt-0.5 accent-primary" />
                  <span className="text-sm font-bold text-text-primary">Auto-generate barcode on book entry</span>
                </label>
                <button className="px-4 py-2 mt-2 bg-primary text-black rounded-md text-sm font-bold hover:bg-primary-hover transition-colors w-fit">Save Settings</button>
              </div>
            </div>

            {/* Library numbering */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Library numbering</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary">Accession Number Prefix</label>
                  <input type="text" defaultValue="ACC-" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary">Next Accession Number</label>
                  <input type="text" defaultValue="10452" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
                </div>
                <button className="px-4 py-2 mt-2 bg-primary text-black rounded-md text-sm font-bold hover:bg-primary-hover transition-colors w-fit">Update Prefix</button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
