"use client";

import React, { useState } from "react";
import {
  Package,
  BookOpen,
  Copy,
  Ghost,
  PenTool,
  BookX,
  Search,
  CheckCircle2,
  AlertTriangle,
  History,
  X,
  FileMinus,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Layers
} from "lucide-react";

interface AuditCategory {
  id: string;
  name: string;
  systemCount: number;
  physicalCount: number | "";
  status: 'Pending' | 'Verified' | 'Discrepancy';
}

interface InventoryHistory {
  id: string;
  date: string;
  categoryName: string;
  previousSystemCount: number;
  newPhysicalCount: number;
  difference: number;
  remark: string;
  adjustedBy: string;
}

const MOCK_AUDIT_DATA: AuditCategory[] = [
  { id: "SEC-001", name: "Science Section (Shelf A)", systemCount: 450, physicalCount: "", status: "Pending" },
  { id: "SEC-002", name: "Mathematics (Shelf B)", systemCount: 320, physicalCount: "", status: "Pending" },
  { id: "SEC-003", name: "English Literature", systemCount: 210, physicalCount: "", status: "Pending" },
  { id: "SEC-004", name: "History & Geography", systemCount: 150, physicalCount: "", status: "Pending" },
  { id: "SEC-005", name: "Reference Materials", systemCount: 85, physicalCount: "", status: "Pending" },
];

const MOCK_HISTORY: InventoryHistory[] = [
  {
    id: "AUD-889",
    date: "2023-10-15",
    categoryName: "Computer Science",
    previousSystemCount: 120,
    newPhysicalCount: 118,
    difference: -2,
    remark: "2 copies missing from rack. Marked as lost.",
    adjustedBy: "Rahul Sharma (Librarian)"
  },
  {
    id: "AUD-890",
    date: "2023-10-10",
    categoryName: "Magazines & Journals",
    previousSystemCount: 45,
    newPhysicalCount: 48,
    difference: 3,
    remark: "Found 3 old editions not logged in system. Added to inventory.",
    adjustedBy: "Rahul Sharma (Librarian)"
  }
];

export default function LibraryInventory() {
  const [activeTab, setActiveTab] = useState<'Audit' | 'History'>('Audit');
  const [searchQuery, setSearchQuery] = useState("");
  
  // Data States
  const [auditData, setAuditData] = useState<AuditCategory[]>(MOCK_AUDIT_DATA);
  const [historyData, setHistoryData] = useState<InventoryHistory[]>(MOCK_HISTORY);

  // Modal States
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);
  const [selectedAudit, setSelectedAudit] = useState<AuditCategory | null>(null);
  const [adjustmentRemark, setAdjustmentRemark] = useState("");

  // Filters
  const filteredAudit = auditData.filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredHistory = historyData.filter(h => h.categoryName.toLowerCase().includes(searchQuery.toLowerCase()));

  // Top Metrics (Mocked Aggregates)
  const metrics = {
    totalTitles: 1250,
    totalPhysical: 4800,
    missing: 12,
    damaged: 24,
    lost: 5
  };

  // Handlers
  const handlePhysicalCountChange = (id: string, value: string) => {
    const val = value === "" ? "" : parseInt(value);
    
    setAuditData(prev => prev.map(item => {
      if (item.id === id) {
        let newStatus: 'Pending' | 'Verified' | 'Discrepancy' = 'Pending';
        if (val !== "") {
          newStatus = val === item.systemCount ? 'Verified' : 'Discrepancy';
        }
        return { ...item, physicalCount: val, status: newStatus };
      }
      return item;
    }));
  };

  const openAdjustmentModal = (item: AuditCategory) => {
    setSelectedAudit(item);
    setAdjustmentRemark("");
    setIsAdjustModalOpen(true);
  };

  const handleAdjustStock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAudit || selectedAudit.physicalCount === "") return;

    const diff = selectedAudit.physicalCount - selectedAudit.systemCount;

    // Create history record
    const newHistory: InventoryHistory = {
      id: `AUD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      categoryName: selectedAudit.name,
      previousSystemCount: selectedAudit.systemCount,
      newPhysicalCount: selectedAudit.physicalCount,
      difference: diff,
      remark: adjustmentRemark,
      adjustedBy: "Current Librarian" // Mock user
    };

    // Update the audit item to match the new physical reality
    setAuditData(prev => prev.map(item => 
      item.id === selectedAudit.id 
        ? { ...item, systemCount: selectedAudit.physicalCount as number, status: 'Verified' }
        : item
    ));

    setHistoryData([newHistory, ...historyData]);
    setIsAdjustModalOpen(false);
  };


  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Package className="w-8 h-8 text-indigo-600" />
          Library Inventory & Audit
        </h1>
        <p className="text-gray-500 mt-1">Verify physical stock against system counts and manage discrepancies.</p>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm flex flex-col items-center text-center justify-center relative overflow-hidden group">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-2 z-10 group-hover:scale-110 transition-transform"><BookOpen className="w-5 h-5"/></div>
          <h3 className="text-2xl font-black text-gray-800 z-10">{metrics.totalTitles}</h3>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider z-10 mt-1">Total Titles</p>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm flex flex-col items-center text-center justify-center relative overflow-hidden group">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2 z-10 group-hover:scale-110 transition-transform"><Copy className="w-5 h-5"/></div>
          <h3 className="text-2xl font-black text-gray-800 z-10">{metrics.totalPhysical}</h3>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider z-10 mt-1">Physical Copies</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm flex flex-col items-center text-center justify-center relative overflow-hidden group">
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-2 z-10 group-hover:scale-110 transition-transform"><Ghost className="w-5 h-5"/></div>
          <h3 className="text-2xl font-black text-gray-800 z-10">{metrics.missing}</h3>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider z-10 mt-1">Missing</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm flex flex-col items-center text-center justify-center relative overflow-hidden group">
          <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-2 z-10 group-hover:scale-110 transition-transform"><PenTool className="w-5 h-5"/></div>
          <h3 className="text-2xl font-black text-gray-800 z-10">{metrics.damaged}</h3>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider z-10 mt-1">Damaged</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm flex flex-col items-center text-center justify-center relative overflow-hidden group col-span-2 lg:col-span-1">
          <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-2 z-10 group-hover:scale-110 transition-transform"><BookX className="w-5 h-5"/></div>
          <h3 className="text-2xl font-black text-gray-800 z-10">{metrics.lost}</h3>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider z-10 mt-1">Lost</p>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('Audit')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'Audit' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Layers className="w-4 h-4" /> Stock Verification
          </button>
          <button 
            onClick={() => setActiveTab('History')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'History' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <History className="w-4 h-4" /> Adjustment History
          </button>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <input 
            type="text" 
            placeholder="Search Section or Category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm bg-gray-50/50"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'Audit' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 bg-indigo-50/30 border-b border-indigo-100 flex items-center justify-between">
            <h2 className="font-bold text-indigo-900">Physical Stock Audit</h2>
            <p className="text-xs font-semibold text-indigo-500 bg-indigo-100 px-3 py-1 rounded-full">Enter physical counts to verify.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="py-4 px-6 font-bold">Category / Section</th>
                  <th className="py-4 px-6 font-bold text-center">System Count</th>
                  <th className="py-4 px-6 font-bold text-center w-48">Physical Count</th>
                  <th className="py-4 px-6 font-bold text-center">Difference</th>
                  <th className="py-4 px-6 font-bold text-center">Status</th>
                  <th className="py-4 px-6 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredAudit.length > 0 ? (
                  filteredAudit.map((item) => {
                    const diff = item.physicalCount === "" ? 0 : item.physicalCount - item.systemCount;
                    return (
                    <tr key={item.id} className={`hover:bg-gray-50/50 transition-colors ${item.status === 'Discrepancy' ? 'bg-amber-50/30' : ''}`}>
                      <td className="py-4 px-6">
                        <p className="font-bold text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500 font-mono mt-0.5">ID: {item.id}</p>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-lg font-black text-gray-700 bg-gray-100 px-3 py-1 rounded-lg">{item.systemCount}</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <input 
                          type="number" min="0"
                          placeholder="Enter count"
                          value={item.physicalCount}
                          onChange={(e) => handlePhysicalCountChange(item.id, e.target.value)}
                          className={`w-full text-center px-4 py-2 rounded-xl border-2 focus:outline-none transition-colors font-black text-lg ${
                            item.status === 'Verified' ? 'border-emerald-300 bg-emerald-50 text-emerald-700 focus:border-emerald-500' :
                            item.status === 'Discrepancy' ? 'border-amber-300 bg-amber-50 text-amber-700 focus:border-amber-500' :
                            'border-gray-200 bg-white text-gray-700 focus:border-indigo-500'
                          }`}
                        />
                      </td>
                      <td className="py-4 px-6 text-center">
                        {item.physicalCount !== "" ? (
                          <div className={`flex items-center justify-center gap-1 font-black text-lg ${diff > 0 ? 'text-emerald-500' : diff < 0 ? 'text-rose-500' : 'text-gray-300'}`}>
                            {diff > 0 && <TrendingUp className="w-5 h-5"/>}
                            {diff < 0 && <TrendingDown className="w-5 h-5"/>}
                            {diff > 0 ? `+${diff}` : diff}
                          </div>
                        ) : (
                          <span className="text-gray-300 font-bold">-</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          {item.status === 'Verified' && <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><CheckCircle2 className="w-4 h-4"/> Matched</span>}
                          {item.status === 'Discrepancy' && <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><AlertTriangle className="w-4 h-4"/> Discrepancy</span>}
                          {item.status === 'Pending' && <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max">Awaiting Input</span>}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        {item.status === 'Discrepancy' ? (
                          <button 
                            onClick={() => openAdjustmentModal(item)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-1 ml-auto"
                          >
                            <FileMinus className="w-4 h-4"/> Adjust
                          </button>
                        ) : (
                          <button disabled className="bg-gray-100 text-gray-400 px-4 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-1 ml-auto cursor-not-allowed">
                            <FileMinus className="w-4 h-4"/> Adjust
                          </button>
                        )}
                      </td>
                    </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="py-16 text-center">
                      <Layers className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <h3 className="text-lg font-medium text-gray-800 mb-1">No Categories Found</h3>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'History' && (
        <div className="grid grid-cols-1 gap-4">
          {filteredHistory.length > 0 ? (
            filteredHistory.map((hist) => (
              <div key={hist.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-indigo-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <History className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{hist.date}</span>
                      <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-mono text-gray-500">{hist.id}</span>
                    </div>
                    <h3 className="font-bold text-gray-900">{hist.categoryName}</h3>
                    <p className="text-sm text-gray-600 mt-1 italic">"{hist.remark}"</p>
                    <p className="text-xs text-gray-400 mt-1">Adjusted by: {hist.adjustedBy}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100 w-full md:w-auto shrink-0">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Old System</p>
                    <p className="font-mono font-bold text-gray-600">{hist.previousSystemCount}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-indigo-500 uppercase">New System</p>
                    <p className="font-mono font-bold text-indigo-600">{hist.newPhysicalCount}</p>
                  </div>
                  <div className={`text-center pl-3 ml-3 border-l ${hist.difference > 0 ? 'border-emerald-100' : 'border-rose-100'}`}>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Diff</p>
                    <p className={`font-black flex items-center gap-0.5 ${hist.difference > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {hist.difference > 0 ? '+' : ''}{hist.difference}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 border-dashed">
              <History className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-800 mb-1">No Adjustment History</h3>
              <p className="text-gray-500 text-sm">There are no records of stock adjustments.</p>
            </div>
          )}
        </div>
      )}

      {/* Adjust Stock Modal */}
      {isAdjustModalOpen && selectedAudit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            
            <div className="bg-indigo-600 p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileMinus className="w-5 h-5" /> Adjust System Stock
              </h2>
              <button onClick={() => setIsAdjustModalOpen(false)} className="text-indigo-200 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleAdjustStock} className="p-6 space-y-5 bg-white">
              <div className="text-center">
                <p className="text-sm font-bold text-gray-500 uppercase">{selectedAudit.name}</p>
              </div>

              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="text-center flex-1">
                  <p className="text-xs font-bold text-gray-400 uppercase">System Count</p>
                  <p className="text-2xl font-black text-gray-700">{selectedAudit.systemCount}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-indigo-400" />
                <div className="text-center flex-1">
                  <p className="text-xs font-bold text-indigo-500 uppercase">Physical Count</p>
                  <p className="text-2xl font-black text-indigo-600">{selectedAudit.physicalCount}</p>
                </div>
              </div>

              <div className={`p-3 rounded-lg border text-center font-bold text-sm ${((selectedAudit.physicalCount as number) - selectedAudit.systemCount) > 0 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>
                Discrepancy: {((selectedAudit.physicalCount as number) - selectedAudit.systemCount) > 0 ? '+' : ''}{((selectedAudit.physicalCount as number) - selectedAudit.systemCount)} Books
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Reason / Remark for Adjustment *</label>
                <textarea 
                  required rows={3}
                  placeholder="e.g. Found 3 missing books on wrong shelf."
                  value={adjustmentRemark}
                  onChange={(e) => setAdjustmentRemark(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm" 
                ></textarea>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setIsAdjustModalOpen(false)} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md">
                  Confirm Adjustment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
