"use client";

import React, { useState } from "react";
import {
  BookX,
  Search,
  AlertTriangle,
  Plus,
  RefreshCw,
  CheckCircle2,
  Trash2,
  History,
  FileText,
  AlertCircle,
  X,
  PenTool,
  Archive
} from "lucide-react";

type IssueType = 'Lost' | 'Damaged';
type DamageType = 'Water Damage' | 'Torn Pages' | 'Broken Spine' | 'Missing Pages' | 'Other' | 'N/A';
type RecoveryStatus = 'Pending Payment' | 'Pending Replacement' | 'Resolved (Paid)' | 'Resolved (Replaced)' | 'Written-Off';

interface IssueReport {
  id: string;
  bookId: string;
  bookTitle: string;
  issueType: IssueType;
  damageType: DamageType;
  inspectionRemark: string;
  reportedBy: string; // Member Name
  memberId: string;
  fineAmount: number;
  replacementRequired: boolean;
  recoveryStatus: RecoveryStatus;
  dateReported: string;
  resolvedDate?: string;
  replacementBookBarcode?: string;
}

const MOCK_REPORTS: IssueReport[] = [
  {
    id: "REP-101",
    bookId: "B-2050",
    bookTitle: "Organic Chemistry Vol 2",
    issueType: "Damaged",
    damageType: "Water Damage",
    inspectionRemark: "Pages are completely soaked and unreadable.",
    reportedBy: "Rahul Verma",
    memberId: "LIB-STU-012",
    fineAmount: 450,
    replacementRequired: true,
    recoveryStatus: "Pending Replacement",
    dateReported: "2023-10-25"
  },
  {
    id: "REP-102",
    bookId: "B-1088",
    bookTitle: "Advanced Physics",
    issueType: "Lost",
    damageType: "N/A",
    inspectionRemark: "Student lost the book during travel.",
    reportedBy: "Priya Singh",
    memberId: "LIB-STU-045",
    fineAmount: 600,
    replacementRequired: false,
    recoveryStatus: "Pending Payment",
    dateReported: "2023-10-28"
  },
  {
    id: "REP-095",
    bookId: "B-3022",
    bookTitle: "English Grammar",
    issueType: "Damaged",
    damageType: "Torn Pages",
    inspectionRemark: "A few pages torn, fixed with tape.",
    reportedBy: "Amit Kumar",
    memberId: "LIB-STU-112",
    fineAmount: 0,
    replacementRequired: false,
    recoveryStatus: "Written-Off",
    dateReported: "2023-09-10",
    resolvedDate: "2023-09-12"
  },
  {
    id: "REP-090",
    bookId: "B-4001",
    bookTitle: "Mathematics Class 10",
    issueType: "Lost",
    damageType: "N/A",
    inspectionRemark: "Book never returned. Assumed lost.",
    reportedBy: "Neha Gupta",
    memberId: "LIB-STU-088",
    fineAmount: 350,
    replacementRequired: true,
    recoveryStatus: "Resolved (Replaced)",
    dateReported: "2023-08-15",
    resolvedDate: "2023-08-25",
    replacementBookBarcode: "NEW-BARCODE-999"
  }
];

export default function LostDamagedBooks() {
  const [reports, setReports] = useState<IssueReport[]>(MOCK_REPORTS);
  const [activeTab, setActiveTab] = useState<'Active' | 'History'>('Active');
  const [searchQuery, setSearchQuery] = useState("");

  // Modal States
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isResolveModalOpen, setIsResolveModalOpen] = useState(false);
  const [isWriteOffModalOpen, setIsWriteOffModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<IssueReport | null>(null);

  // Form States (New Report)
  const [newReport, setNewReport] = useState<Partial<IssueReport>>({
    issueType: 'Damaged',
    damageType: 'Torn Pages',
    replacementRequired: false,
    fineAmount: 0
  });

  // Form States (Resolve)
  const [resolveMethod, setResolveMethod] = useState<'Paid' | 'Replaced'>('Paid');
  const [newBarcode, setNewBarcode] = useState("");

  // Filters
  const activeReports = reports.filter(r => (r.recoveryStatus === 'Pending Payment' || r.recoveryStatus === 'Pending Replacement') && (r.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) || r.reportedBy.toLowerCase().includes(searchQuery.toLowerCase())));
  const historyReports = reports.filter(r => (r.recoveryStatus === 'Resolved (Paid)' || r.recoveryStatus === 'Resolved (Replaced)' || r.recoveryStatus === 'Written-Off') && (r.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) || r.reportedBy.toLowerCase().includes(searchQuery.toLowerCase())));

  const displayData = activeTab === 'Active' ? activeReports : historyReports;

  // Handlers
  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    const created: IssueReport = {
      id: `REP-${Math.floor(Math.random() * 1000)}`,
      bookId: newReport.bookId || "B-TEST",
      bookTitle: "System Registered Book", // Mocked
      issueType: newReport.issueType as IssueType,
      damageType: newReport.issueType === 'Lost' ? 'N/A' : (newReport.damageType as DamageType),
      inspectionRemark: newReport.inspectionRemark || "",
      reportedBy: newReport.reportedBy || "Student Name", // Mocked
      memberId: "LIB-MEMBER", // Mocked
      fineAmount: newReport.fineAmount || 0,
      replacementRequired: !!newReport.replacementRequired,
      recoveryStatus: newReport.replacementRequired ? 'Pending Replacement' : 'Pending Payment',
      dateReported: new Date().toISOString().split('T')[0]
    };
    setReports([created, ...reports]);
    setIsReportModalOpen(false);
    setNewReport({ issueType: 'Damaged', damageType: 'Torn Pages', replacementRequired: false, fineAmount: 0 });
  };

  const handleResolve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedReport) return;

    const newStatus = resolveMethod === 'Paid' ? 'Resolved (Paid)' : 'Resolved (Replaced)';
    const updated = reports.map(r => 
      r.id === selectedReport.id 
        ? { 
            ...r, 
            recoveryStatus: newStatus as RecoveryStatus, 
            resolvedDate: new Date().toISOString().split('T')[0],
            replacementBookBarcode: resolveMethod === 'Replaced' ? newBarcode : undefined
          } 
        : r
    );
    setReports(updated);
    setIsResolveModalOpen(false);
  };

  const handleWriteOff = () => {
    if (!selectedReport) return;
    const updated = reports.map(r => 
      r.id === selectedReport.id 
        ? { ...r, recoveryStatus: 'Written-Off' as RecoveryStatus, resolvedDate: new Date().toISOString().split('T')[0] } 
        : r
    );
    setReports(updated);
    setIsWriteOffModalOpen(false);
  };

  const openResolveModal = (report: IssueReport) => {
    setSelectedReport(report);
    setResolveMethod(report.recoveryStatus === 'Pending Replacement' ? 'Replaced' : 'Paid');
    setNewBarcode("");
    setIsResolveModalOpen(true);
  };

  const openWriteOffModal = (report: IssueReport) => {
    setSelectedReport(report);
    setIsWriteOffModalOpen(true);
  };

  const getStatusBadge = (status: RecoveryStatus) => {
    switch (status) {
      case 'Pending Payment': return <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 w-max"><AlertCircle className="w-3.5 h-3.5"/> Pending Payment</span>;
      case 'Pending Replacement': return <span className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 w-max"><RefreshCw className="w-3.5 h-3.5"/> Pending Replacement</span>;
      case 'Resolved (Paid)': return <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 w-max"><CheckCircle2 className="w-3.5 h-3.5"/> Paid</span>;
      case 'Resolved (Replaced)': return <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 w-max"><BookX className="w-3.5 h-3.5"/> Replaced</span>;
      case 'Written-Off': return <span className="bg-gray-200 text-gray-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 w-max"><Archive className="w-3.5 h-3.5"/> Written-Off</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BookX className="w-8 h-8 text-orange-600" />
            Lost & Damaged Books
          </h1>
          <p className="text-gray-500 mt-1">Track physical damage, process replacements, and write-offs.</p>
        </div>
        <button 
          onClick={() => setIsReportModalOpen(true)}
          className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2"
        >
          <AlertTriangle className="w-5 h-5" /> Report Issue
        </button>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('Active')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'Active' ? 'bg-orange-50 text-orange-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <AlertCircle className="w-4 h-4" /> Active Reports
          </button>
          <button 
            onClick={() => setActiveTab('History')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'History' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <History className="w-4 h-4" /> Resolved & History
          </button>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <input 
            type="text" 
            placeholder="Search Book or Member..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayData.length > 0 ? (
          displayData.map((report) => (
            <div key={report.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Top Section */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${report.issueType === 'Lost' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'}`}>
                    {report.issueType === 'Lost' ? <BookX className="w-6 h-6" /> : <PenTool className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${report.issueType === 'Lost' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
                        {report.issueType}
                      </span>
                      {report.issueType === 'Damaged' && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-200 px-2 py-0.5 rounded bg-gray-50">
                          {report.damageType}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 leading-tight">{report.bookTitle}</h3>
                    <p className="text-gray-500 text-xs font-mono mt-0.5">ID: {report.bookId} • Reported: {report.dateReported}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Assessed Fine</p>
                  <p className={`text-xl font-black ${report.fineAmount > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    ₹{report.fineAmount}
                  </p>
                </div>
              </div>

              {/* Middle Section (Inspection/Member) */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4 flex-1">
                <p className="text-sm text-gray-700 italic mb-3">"{report.inspectionRemark}"</p>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center font-bold text-[10px]">{report.reportedBy.substring(0,1)}</div>
                    <span className="font-medium">{report.reportedBy}</span>
                    <span className="text-gray-400 font-mono">({report.memberId})</span>
                  </div>
                  {report.replacementRequired && (
                    <span className="font-bold text-blue-600 flex items-center gap-1"><RefreshCw className="w-3 h-3"/> Replacement Req.</span>
                  )}
                </div>
              </div>

              {/* Bottom Section (Status & Actions) */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 border-t border-gray-100">
                <div className="flex flex-col gap-1">
                  {getStatusBadge(report.recoveryStatus)}
                  {activeTab === 'History' && report.resolvedDate && (
                    <span className="text-[10px] text-gray-400 font-bold">Resolved on {report.resolvedDate}</span>
                  )}
                  {report.replacementBookBarcode && (
                    <span className="text-[10px] text-blue-600 font-bold">New Barcode: {report.replacementBookBarcode}</span>
                  )}
                </div>

                {activeTab === 'Active' && (
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button 
                      onClick={() => openWriteOffModal(report)}
                      className="flex-1 sm:flex-none px-3 py-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <Archive className="w-3.5 h-3.5" /> Write-Off
                    </button>
                    <button 
                      onClick={() => openResolveModal(report)}
                      className="flex-1 sm:flex-none px-4 py-1.5 bg-orange-600 text-white hover:bg-orange-700 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" /> Resolve
                    </button>
                  </div>
                )}
              </div>
              
            </div>
          ))
        ) : (
          <div className="col-span-1 lg:col-span-2 text-center py-16 bg-white rounded-2xl border border-gray-100 border-dashed">
            <AlertTriangle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">No Reports Found</h3>
            <p className="text-gray-500 text-sm">There are no {activeTab.toLowerCase()} lost or damaged book reports.</p>
          </div>
        )}
      </div>


      {/* Report Issue Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-orange-50/50 rounded-t-2xl">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Report Lost/Damaged Book
              </h2>
              <button onClick={() => setIsReportModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleCreateReport} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              
              <div className="grid grid-cols-2 gap-3">
                <label className={`cursor-pointer p-3 border-2 rounded-xl text-center font-bold transition-all ${newReport.issueType === 'Damaged' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                  <input type="radio" className="hidden" checked={newReport.issueType === 'Damaged'} onChange={() => setNewReport({...newReport, issueType: 'Damaged'})} />
                  Damaged
                </label>
                <label className={`cursor-pointer p-3 border-2 rounded-xl text-center font-bold transition-all ${newReport.issueType === 'Lost' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                  <input type="radio" className="hidden" checked={newReport.issueType === 'Lost'} onChange={() => setNewReport({...newReport, issueType: 'Lost', damageType: 'N/A'})} />
                  Lost
                </label>
              </div>

              {newReport.issueType === 'Damaged' && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Damage Type *</label>
                  <select 
                    value={newReport.damageType}
                    onChange={(e) => setNewReport({...newReport, damageType: e.target.value as DamageType})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="Torn Pages">Torn Pages</option>
                    <option value="Water Damage">Water Damage</option>
                    <option value="Broken Spine">Broken Spine</option>
                    <option value="Missing Pages">Missing Pages</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Book Barcode *</label>
                  <input 
                    required type="text" placeholder="e.g. B-1234"
                    onChange={(e) => setNewReport({...newReport, bookId: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Member Name *</label>
                  <input 
                    required type="text" placeholder="e.g. Rahul Sharma"
                    onChange={(e) => setNewReport({...newReport, reportedBy: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Inspection Remark *</label>
                <textarea 
                  required rows={2}
                  placeholder="Describe the issue..."
                  onChange={(e) => setNewReport({...newReport, inspectionRemark: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" 
                ></textarea>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={newReport.replacementRequired}
                      onChange={(e) => setNewReport({...newReport, replacementRequired: e.target.checked})}
                      className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500" 
                    />
                    Replacement Required?
                  </label>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Fine/Penalty Amount (₹)</label>
                  <input 
                    type="number" min="0" value={newReport.fineAmount}
                    onChange={(e) => setNewReport({...newReport, fineAmount: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold" 
                  />
                </div>
              </div>

              <div className="mt-8 pt-2">
                <button type="submit" className="w-full py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors shadow-md">
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Resolve Issue Modal */}
      {isResolveModalOpen && selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-emerald-50/50 rounded-t-2xl">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Resolve Issue
              </h2>
              <button onClick={() => setIsResolveModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleResolve} className="p-6 space-y-4">
              
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 mb-4">
                 <p className="text-sm font-bold text-gray-800">{selectedReport.bookTitle}</p>
                 <p className="text-xs text-gray-500 mt-1">Pending: {selectedReport.recoveryStatus}</p>
                 <p className="text-xs font-bold text-rose-600 mt-1">Fine to Recover: ₹{selectedReport.fineAmount}</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Resolution Method</label>
                <div className="flex gap-2">
                  <label className={`flex-1 cursor-pointer p-2 border rounded-lg text-center font-bold text-sm transition-colors ${resolveMethod === 'Paid' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                    <input type="radio" className="hidden" checked={resolveMethod === 'Paid'} onChange={() => setResolveMethod('Paid')} />
                    Fine Paid
                  </label>
                  <label className={`flex-1 cursor-pointer p-2 border rounded-lg text-center font-bold text-sm transition-colors ${resolveMethod === 'Replaced' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                    <input type="radio" className="hidden" checked={resolveMethod === 'Replaced'} onChange={() => setResolveMethod('Replaced')} />
                    Book Replaced
                  </label>
                </div>
              </div>

              {resolveMethod === 'Replaced' && (
                <div className="animate-in fade-in duration-200">
                  <label className="block text-sm font-bold text-gray-700 mb-1">New Book Barcode *</label>
                  <input 
                    required type="text" 
                    value={newBarcode}
                    onChange={(e) => setNewBarcode(e.target.value)}
                    placeholder="Scan new barcode..."
                    className="w-full px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
              )}

              <button type="submit" className={`w-full py-3 rounded-xl text-white font-bold transition-all shadow-md mt-4 ${resolveMethod === 'Replaced' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}>
                Confirm Resolution
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Write-Off Confirmation Modal */}
      {isWriteOffModalOpen && selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
              <Archive className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Write-Off Book?</h3>
            <p className="text-gray-500 text-sm mb-6">
              This action will close the report and absorb the loss. The book <span className="font-bold text-gray-800">"{selectedReport.bookTitle}"</span> will be permanently removed from circulation.
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={handleWriteOff} className="w-full py-2.5 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-medium transition-colors">
                Yes, Write-Off Book
              </button>
              <button onClick={() => setIsWriteOffModalOpen(false)} className="w-full py-2.5 text-gray-500 hover:text-gray-700 font-medium transition-colors mt-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
