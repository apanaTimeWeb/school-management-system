"use client";

import React, { useState } from "react";
import {
  BookCopy,
  Plus,
  Search,
  Filter,
  History,
  QrCode,
  Barcode,
  Edit,
  Trash2,
  X,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Wrench,
  Clock,
  Printer,
  ChevronDown
} from "lucide-react";

type CopyStatus = 'Available' | 'Issued' | 'Damaged' | 'Lost' | 'Archived';
type ConditionStatus = 'Excellent' | 'Good' | 'Fair' | 'Poor';

interface IssueRecord {
  id: string;
  date: string;
  type: 'Issue' | 'Return';
  holder: string;
  remarks: string;
}

interface PhysicalCopy {
  copyId: string;
  accessionNumber: string;
  barcode: string;
  qrCodeUrl: string;
  purchaseDate: string;
  purchasePrice: number;
  condition: ConditionStatus;
  shelfLocation: string;
  status: CopyStatus;
  currentHolder: string | null;
  issueHistory: IssueRecord[];
}

const MOCK_COPIES: PhysicalCopy[] = [
  {
    copyId: "CPY-001",
    accessionNumber: "ACC-2023-001",
    barcode: "890123456001",
    qrCodeUrl: "qr-placeholder",
    purchaseDate: "2023-04-15",
    purchasePrice: 450.00,
    condition: "Good",
    shelfLocation: "A1-R3",
    status: "Available",
    currentHolder: null,
    issueHistory: [
      { id: "H1", date: "2023-08-10", type: "Issue", holder: "Rahul Sharma", remarks: "Standard Issue" },
      { id: "H2", date: "2023-08-25", type: "Return", holder: "Rahul Sharma", remarks: "Returned in good condition" }
    ]
  },
  {
    copyId: "CPY-002",
    accessionNumber: "ACC-2023-002",
    barcode: "890123456002",
    qrCodeUrl: "qr-placeholder",
    purchaseDate: "2023-04-15",
    purchasePrice: 450.00,
    condition: "Fair",
    shelfLocation: "A1-R3",
    status: "Issued",
    currentHolder: "Priya Singh (Class 10A)",
    issueHistory: [
      { id: "H3", date: "2023-10-12", type: "Issue", holder: "Priya Singh (Class 10A)", remarks: "Required for assignment" }
    ]
  },
  {
    copyId: "CPY-003",
    accessionNumber: "ACC-2023-003",
    barcode: "890123456003",
    qrCodeUrl: "qr-placeholder",
    purchaseDate: "2023-04-15",
    purchasePrice: 450.00,
    condition: "Poor",
    shelfLocation: "Maintenance",
    status: "Damaged",
    currentHolder: null,
    issueHistory: [
      { id: "H4", date: "2023-05-01", type: "Issue", holder: "Amit Kumar", remarks: "" },
      { id: "H5", date: "2023-06-15", type: "Return", holder: "Amit Kumar", remarks: "Returned with torn pages" }
    ]
  },
  {
    copyId: "CPY-004",
    accessionNumber: "ACC-2023-004",
    barcode: "890123456004",
    qrCodeUrl: "qr-placeholder",
    purchaseDate: "2023-09-01",
    purchasePrice: 475.00,
    condition: "Excellent",
    shelfLocation: "A1-R4",
    status: "Available",
    currentHolder: null,
    issueHistory: []
  }
];

const emptyCopy: PhysicalCopy = {
  copyId: "", accessionNumber: "", barcode: "", qrCodeUrl: "", purchaseDate: "",
  purchasePrice: 0, condition: "Excellent", shelfLocation: "", status: "Available",
  currentHolder: null, issueHistory: []
};

export default function BookCopies() {
  const [copies, setCopies] = useState<PhysicalCopy[]>(MOCK_COPIES);
  
  // Modals state
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  
  const [currentCopy, setCurrentCopy] = useState<PhysicalCopy>(emptyCopy);
  const [isEditing, setIsEditing] = useState(false);

  // Get status badge
  const getStatusBadge = (status: CopyStatus) => {
    switch (status) {
      case 'Available': return <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 w-max"><CheckCircle2 className="w-3.5 h-3.5"/> Available</span>;
      case 'Issued': return <span className="bg-blue-100 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 w-max"><Clock className="w-3.5 h-3.5"/> Issued</span>;
      case 'Lost': return <span className="bg-red-100 text-red-700 border border-red-200 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 w-max"><XCircle className="w-3.5 h-3.5"/> Lost</span>;
      case 'Damaged': return <span className="bg-orange-100 text-orange-700 border border-orange-200 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 w-max"><Wrench className="w-3.5 h-3.5"/> Damaged</span>;
      case 'Archived': return <span className="bg-gray-100 text-gray-700 border border-gray-300 px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 w-max"><AlertCircle className="w-3.5 h-3.5"/> Archived</span>;
      default: return null;
    }
  };

  const getConditionBadge = (condition: ConditionStatus) => {
    switch (condition) {
      case 'Excellent': return <span className="text-emerald-600 font-medium">{condition}</span>;
      case 'Good': return <span className="text-blue-600 font-medium">{condition}</span>;
      case 'Fair': return <span className="text-amber-600 font-medium">{condition}</span>;
      case 'Poor': return <span className="text-rose-600 font-medium">{condition}</span>;
    }
  };

  // Handlers
  const handleAdd = () => {
    setCurrentCopy({ ...emptyCopy, copyId: `CPY-00${copies.length + 1}`, accessionNumber: `ACC-2023-00${copies.length + 1}` });
    setIsEditing(false);
    setIsAddEditModalOpen(true);
  };

  const handleEdit = (copy: PhysicalCopy) => {
    setCurrentCopy(copy);
    setIsEditing(true);
    setIsAddEditModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setCopies(copies.map(c => c.copyId === currentCopy.copyId ? currentCopy : c));
    } else {
      setCopies([...copies, currentCopy]);
    }
    setIsAddEditModalOpen(false);
  };

  const openHistory = (copy: PhysicalCopy) => {
    setCurrentCopy(copy);
    setIsHistoryModalOpen(true);
  };

  const openPrint = (copy: PhysicalCopy) => {
    setCurrentCopy(copy);
    setIsPrintModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentCopy(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Book Context Selector */}
      <div className="bg-gradient-to-r from-indigo-900 to-violet-800 rounded-2xl shadow-lg p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-200 mb-1">
              <BookCopy className="w-5 h-5" />
              <span className="font-medium tracking-wider text-sm uppercase">Managing Copies For Book</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold">Mathematics Class 10</h1>
              <span className="bg-indigo-500/30 border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                ID: B-1001
              </span>
            </div>
            <p className="text-indigo-100 mt-2 text-sm opacity-80">Author: R.D. Sharma • Publisher: Dhanpat Rai • ISBN: 978-81-9364-780-6</p>
          </div>
          
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 backdrop-blur-sm">
            Change Book <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-800">Physical Copies ({copies.length})</h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
           <div className="relative flex-1 sm:w-64">
              <input type="text" placeholder="Search Accession / Barcode..." className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm" />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
           </div>
           <button onClick={handleAdd} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2 text-sm shrink-0">
             <Plus className="w-4 h-4" /> Add Copy
           </button>
        </div>
      </div>

      {/* Copies Grid/List */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {copies.map((copy) => (
          <div key={copy.copyId} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col sm:flex-row gap-5">
             
             {/* Left - Core ID */}
             <div className="flex flex-col gap-2 min-w-[140px] shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100 pb-4 sm:pb-0 sm:pr-4">
               <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Copy ID</p>
                  <p className="font-bold text-gray-900 text-lg">{copy.copyId}</p>
               </div>
               <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mt-1">Accession No.</p>
                  <p className="font-medium text-indigo-700">{copy.accessionNumber}</p>
               </div>
               <div className="mt-2">
                 {getStatusBadge(copy.status)}
               </div>
             </div>

             {/* Middle - Details */}
             <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                   <p className="text-gray-500 mb-0.5">Barcode</p>
                   <p className="font-medium text-gray-800">{copy.barcode}</p>
                </div>
                <div>
                   <p className="text-gray-500 mb-0.5">Location</p>
                   <p className="font-medium text-gray-800">{copy.shelfLocation || '-'}</p>
                </div>
                <div>
                   <p className="text-gray-500 mb-0.5">Condition</p>
                   {getConditionBadge(copy.condition)}
                </div>
                <div>
                   <p className="text-gray-500 mb-0.5">Purchase</p>
                   <p className="font-medium text-gray-800">₹{copy.purchasePrice} ({copy.purchaseDate})</p>
                </div>
                {copy.currentHolder && (
                  <div className="col-span-2 bg-blue-50 border border-blue-100 p-2 rounded-lg mt-1">
                    <p className="text-blue-600 text-xs font-semibold mb-0.5">CURRENTLY HELD BY</p>
                    <p className="font-medium text-blue-900 text-sm">{copy.currentHolder}</p>
                  </div>
                )}
             </div>

             {/* Right - Actions */}
             <div className="flex flex-row sm:flex-col justify-end gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-4">
                <button onClick={() => openHistory(copy)} className="p-2 w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl transition-colors flex items-center justify-center gap-2 group" title="Issue History">
                  <History className="w-4 h-4 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                  <span className="sm:hidden text-sm font-medium">History</span>
                </button>
                <button onClick={() => openPrint(copy)} className="p-2 w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl transition-colors flex items-center justify-center gap-2 group" title="Print Labels">
                  <Printer className="w-4 h-4 text-gray-500 group-hover:text-emerald-600 transition-colors" />
                  <span className="sm:hidden text-sm font-medium">Print</span>
                </button>
                <button onClick={() => handleEdit(copy)} className="p-2 w-full sm:w-auto bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-xl transition-colors flex items-center justify-center gap-2 group" title="Edit Details">
                  <Edit className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  <span className="sm:hidden text-sm font-medium">Edit</span>
                </button>
             </div>
          </div>
        ))}
      </div>


      {/* Add / Edit Copy Modal */}
      {isAddEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                {isEditing ? <Edit className="w-5 h-5 text-emerald-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                {isEditing ? `Edit Copy: ${currentCopy.copyId}` : "Add New Physical Copy"}
              </h2>
              <button onClick={() => setIsAddEditModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Accession Number *</label>
                  <input required type="text" name="accessionNumber" value={currentCopy.accessionNumber} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Barcode</label>
                  <input type="text" name="barcode" value={currentCopy.barcode} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Date</label>
                  <input type="date" name="purchaseDate" value={currentCopy.purchaseDate} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price (₹)</label>
                  <input type="number" name="purchasePrice" value={currentCopy.purchasePrice} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <select name="condition" value={currentCopy.condition} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Shelf Location</label>
                  <input type="text" name="shelfLocation" value={currentCopy.shelfLocation} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Status</label>
                  <select name="status" value={currentCopy.status} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                    <option value="Available">Available</option>
                    <option value="Issued">Issued</option>
                    <option value="Damaged">Damaged</option>
                    <option value="Lost">Lost</option>
                    <option value="Archived">Archived</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Note: Modifying status manually should be done cautiously. Normally status changes via Issue/Return operations.</p>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsAddEditModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm">
                  {isEditing ? "Save Changes" : "Add Copy"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* History Modal */}
      {isHistoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 shrink-0">
              <div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <History className="w-5 h-5 text-indigo-500" />
                  Issue/Return History
                </h2>
                <p className="text-sm text-gray-500 mt-1">Copy: <span className="font-semibold text-gray-700">{currentCopy.copyId}</span> | Accession: <span className="font-semibold text-gray-700">{currentCopy.accessionNumber}</span></p>
              </div>
              <button onClick={() => setIsHistoryModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {currentCopy.issueHistory.length > 0 ? (
                <div className="relative border-l-2 border-gray-100 ml-3 space-y-8">
                  {currentCopy.issueHistory.map((history, idx) => (
                    <div key={history.id} className="relative pl-6">
                      {/* Timeline dot */}
                      <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${history.type === 'Issue' ? 'bg-blue-500' : 'bg-emerald-500'}`}></div>
                      
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                           <div>
                             <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${history.type === 'Issue' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
                               {history.type}
                             </span>
                             <h4 className="font-bold text-gray-800 mt-2">{history.holder}</h4>
                           </div>
                           <div className="text-right">
                             <p className="text-xs font-bold text-gray-500">{history.date}</p>
                           </div>
                        </div>
                        {history.remarks && (
                          <p className="text-sm text-gray-600 bg-white p-2 rounded border border-gray-100 mt-2 italic">
                            "{history.remarks}"
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <History className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-700">No History Found</h3>
                  <p className="text-sm text-gray-500">This copy has never been issued yet.</p>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-gray-100 shrink-0 bg-gray-50/50 rounded-b-2xl">
              <button onClick={() => setIsHistoryModalOpen(false)} className="w-full py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Print Labels Modal */}
      {isPrintModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Printer className="w-5 h-5 text-emerald-500" />
                Print Labels
              </h2>
              <button onClick={() => setIsPrintModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 bg-gray-50/50 flex flex-col items-center gap-6">
              
              {/* Barcode Mock */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm w-full text-center">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Barcode</p>
                 <div className="flex justify-center mb-2">
                   <Barcode className="w-48 h-16 text-gray-900" strokeWidth={1} />
                 </div>
                 <p className="font-mono text-sm tracking-widest text-gray-700">{currentCopy.barcode}</p>
              </div>

              {/* QR Code Mock */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm w-full flex flex-col items-center">
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">QR Code</p>
                 <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
                   <QrCode className="w-32 h-32 text-gray-900" />
                 </div>
                 <p className="font-mono text-xs text-gray-500 mt-2">{currentCopy.copyId}</p>
              </div>

            </div>
            
            <div className="p-6 border-t border-gray-100 flex gap-3">
              <button onClick={() => setIsPrintModalOpen(false)} className="flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                Cancel
              </button>
              <button className="flex-1 py-2.5 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-sm flex justify-center items-center gap-2">
                <Printer className="w-4 h-4" /> Print Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
