"use client";

import React, { useState, useEffect } from "react";
import {
  BookDown,
  Search,
  ScanLine,
  User,
  Book,
  Calendar,
  AlertTriangle,
  Banknote,
  CheckCircle2,
  XCircle,
  Wrench,
  ShieldAlert,
  ArrowRight,
  Receipt,
  Printer,
  History
} from "lucide-react";

interface Transaction {
  id: string;
  memberId: string;
  memberName: string;
  memberRole: string;
  copyId: string;
  barcode: string;
  bookTitle: string;
  issueDate: string;
  dueDate: string;
  bookPrice: number;
}

const ACTIVE_TRANSACTIONS: Transaction[] = [
  {
    id: "TRX-101",
    memberId: "LIB-STU-001",
    memberName: "Rahul Sharma",
    memberRole: "Student",
    copyId: "CPY-002",
    barcode: "890123456002",
    bookTitle: "Mathematics Class 10",
    issueDate: "2023-10-15",
    dueDate: "2023-10-29",
    bookPrice: 450
  },
  {
    id: "TRX-102",
    memberId: "LIB-TEA-001",
    memberName: "Priya Singh",
    memberRole: "Teacher",
    copyId: "CPY-005",
    barcode: "890123456005",
    bookTitle: "Advanced Chemistry",
    issueDate: "2023-09-10",
    dueDate: "2023-10-10", // Intentionally overdue for testing
    bookPrice: 650
  },
  {
    id: "TRX-103",
    memberId: "LIB-STU-002",
    memberName: "Amit Kumar",
    memberRole: "Student",
    copyId: "CPY-012",
    barcode: "890123456012",
    bookTitle: "English Grammar",
    issueDate: "2023-10-20",
    dueDate: "2023-11-03",
    bookPrice: 300
  }
];

export default function ReturnBookFlow() {
  const [searchQuery, setSearchQuery] = useState("");
  const [scanMode, setScanMode] = useState(false);
  const [selectedTrx, setSelectedTrx] = useState<Transaction | null>(null);

  // Return logic states
  const [returnDate, setReturnDate] = useState("");
  const [lateDays, setLateDays] = useState(0);
  const [lateFine, setLateFine] = useState(0);
  
  const [condition, setCondition] = useState<'Good' | 'Damaged' | 'Lost'>('Good');
  const [damageFine, setDamageFine] = useState(0);
  const [remarks, setRemarks] = useState("");

  const [showReceipt, setShowReceipt] = useState(false);
  
  // Set today as return date
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setReturnDate(today); // Mocking today to a fixed date to ensure overdue logic fires correctly for testing, or just use real today
    // Let's use real today, but since our mock due date is "2023-10-10", it will be very overdue.
  }, []);

  // Calculate Fines whenever transaction, condition or return date changes
  useEffect(() => {
    if (selectedTrx && returnDate) {
      const due = new Date(selectedTrx.dueDate);
      const ret = new Date(returnDate);
      const diffTime = ret.getTime() - due.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      let calculatedLateDays = 0;
      let calculatedLateFine = 0;
      
      if (diffDays > 0) {
        calculatedLateDays = diffDays;
        calculatedLateFine = diffDays * 10; // Rs 10 per day
      }
      
      setLateDays(calculatedLateDays);
      setLateFine(calculatedLateFine);

      if (condition === 'Good') {
        setDamageFine(0);
      } else if (condition === 'Damaged') {
        setDamageFine(selectedTrx.bookPrice * 0.2); // 20% of book price for damage
      } else if (condition === 'Lost') {
        setDamageFine(selectedTrx.bookPrice); // 100% of book price for lost
      }
    }
  }, [selectedTrx, returnDate, condition]);

  const totalFine = lateFine + damageFine;

  const handleReturn = () => {
    setShowReceipt(true);
  };

  const resetForm = () => {
    setSelectedTrx(null);
    setSearchQuery("");
    setCondition('Good');
    setRemarks("");
    setShowReceipt(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BookDown className="w-8 h-8 text-emerald-600" />
            Return Book
          </h1>
          <p className="text-gray-500 mt-1">Process returns, assess condition, and calculate fines.</p>
        </div>
        <button className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-xl font-medium hover:bg-indigo-100 transition-colors">
          <History className="w-4 h-4" /> View Return History
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 xl:gap-8">
        
        {/* Left Side - Search & Info */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`p-5 border-b flex justify-between items-center ${selectedTrx ? 'bg-emerald-50/50 border-emerald-100' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Search className={`w-5 h-5 ${selectedTrx ? 'text-emerald-600' : 'text-gray-400'}`} />
                Search Issued Book
              </h2>
              {selectedTrx ? (
                <button onClick={resetForm} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Change</button>
              ) : (
                <button onClick={() => setScanMode(!scanMode)} className={`text-sm font-medium flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${scanMode ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <ScanLine className="w-4 h-4" /> {scanMode ? 'Manual Search' : 'Scan Barcode'}
                </button>
              )}
            </div>

            <div className="p-5">
              {!selectedTrx ? (
                <div>
                  {scanMode ? (
                     <div className="bg-gray-900 rounded-xl aspect-[21/9] flex flex-col items-center justify-center text-white mb-4 relative overflow-hidden border-4 border-gray-800">
                        <ScanLine className="w-16 h-16 text-indigo-400 mb-4 animate-pulse" />
                        <p className="font-medium">Scanner Active</p>
                        <p className="text-xs text-gray-400 mt-1">Point at the book barcode/QR</p>
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 opacity-50 animate-[scan_2s_ease-in-out_infinite]" style={{ boxShadow: '0 0 10px 2px rgba(16, 185, 129, 0.5)' }}></div>
                     </div>
                  ) : (
                    <div className="relative mb-4">
                      <input 
                        type="text" 
                        placeholder="Search by Barcode, Copy ID, Member Name..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  )}

                  {searchQuery && !scanMode && (
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      {ACTIVE_TRANSACTIONS.filter(t => 
                        t.barcode.includes(searchQuery) || 
                        t.copyId.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        t.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        t.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
                      ).map(t => (
                        <div 
                          key={t.id} 
                          onClick={() => { setSelectedTrx(t); setSearchQuery(""); }}
                          className="p-4 cursor-pointer hover:bg-emerald-50 border-b last:border-b-0 border-gray-50 flex justify-between items-center transition-colors"
                        >
                          <div>
                            <p className="font-bold text-gray-800">{t.bookTitle}</p>
                            <p className="text-xs text-gray-500 font-mono mt-0.5">Barcode: {t.barcode} • Member: {t.memberName}</p>
                          </div>
                          <div className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                            Issued
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Member Info */}
                  <div className="flex-1 bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                      {selectedTrx.memberName.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-xs text-indigo-500 font-bold uppercase tracking-wider mb-0.5">Borrower</p>
                      <h3 className="font-bold text-gray-900">{selectedTrx.memberName}</h3>
                      <p className="text-gray-500 text-xs font-mono">{selectedTrx.memberId} • {selectedTrx.memberRole}</p>
                    </div>
                  </div>
                  
                  {/* Book Info */}
                  <div className="flex-1 bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-lg shrink-0">
                      <Book className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider mb-0.5">Book</p>
                      <h3 className="font-bold text-gray-900 line-clamp-1">{selectedTrx.bookTitle}</h3>
                      <p className="text-gray-500 text-xs font-mono">ID: {selectedTrx.copyId} • Barcode: {selectedTrx.barcode}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Condition Assessment (Only visible if transaction selected) */}
          {selectedTrx && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="p-5 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-500" />
                  Step 3: Assess Book Condition
                </h2>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {/* Good Condition */}
                  <label className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition-all ${condition === 'Good' ? 'border-emerald-500 bg-emerald-50/30 shadow-md' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}>
                    <input type="radio" name="condition" value="Good" className="hidden" checked={condition === 'Good'} onChange={() => setCondition('Good')} />
                    <CheckCircle2 className={`w-8 h-8 ${condition === 'Good' ? 'text-emerald-500' : 'text-gray-300'}`} />
                    <span className={`font-bold ${condition === 'Good' ? 'text-emerald-700' : 'text-gray-600'}`}>Good Condition</span>
                    <span className="text-xs text-gray-400 text-center">No physical damage detected.</span>
                  </label>
                  
                  {/* Damaged */}
                  <label className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition-all ${condition === 'Damaged' ? 'border-amber-500 bg-amber-50/30 shadow-md' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}>
                    <input type="radio" name="condition" value="Damaged" className="hidden" checked={condition === 'Damaged'} onChange={() => setCondition('Damaged')} />
                    <Wrench className={`w-8 h-8 ${condition === 'Damaged' ? 'text-amber-500' : 'text-gray-300'}`} />
                    <span className={`font-bold ${condition === 'Damaged' ? 'text-amber-700' : 'text-gray-600'}`}>Damaged</span>
                    <span className="text-xs text-gray-400 text-center">Torn pages, marks, or broken spine.</span>
                  </label>

                  {/* Lost */}
                  <label className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition-all ${condition === 'Lost' ? 'border-rose-500 bg-rose-50/30 shadow-md' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'}`}>
                    <input type="radio" name="condition" value="Lost" className="hidden" checked={condition === 'Lost'} onChange={() => setCondition('Lost')} />
                    <XCircle className={`w-8 h-8 ${condition === 'Lost' ? 'text-rose-500' : 'text-gray-300'}`} />
                    <span className={`font-bold ${condition === 'Lost' ? 'text-rose-700' : 'text-gray-600'}`}>Lost</span>
                    <span className="text-xs text-gray-400 text-center">Book is missing entirely.</span>
                  </label>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Remarks (Optional)</label>
                  <input 
                    type="text" 
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="E.g. Cover slightly torn at the corner" 
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Side - Dates & Fines */}
        <div className="w-full xl:w-[400px] shrink-0 flex flex-col gap-6">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-6">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-500" />
                Step 2: Dates & Fines
              </h2>
            </div>
            
            <div className="p-5">
               {/* Date Pickers */}
               <div className="space-y-4 mb-6">
                 <div>
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Due Date</label>
                   <div className="px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-100 font-mono text-gray-700 font-bold">
                     {selectedTrx ? selectedTrx.dueDate : 'YYYY-MM-DD'}
                   </div>
                 </div>
                 <div>
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Return Date</label>
                   <input 
                     type="date" 
                     value={returnDate}
                     onChange={(e) => setReturnDate(e.target.value)}
                     disabled={!selectedTrx}
                     className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono font-bold text-indigo-700 disabled:bg-gray-50 disabled:text-gray-400"
                   />
                 </div>
               </div>

               {/* Fine Calculation */}
               <div className={`p-5 rounded-2xl border transition-colors ${selectedTrx ? 'bg-rose-50/50 border-rose-100' : 'bg-gray-50 border-gray-100 opacity-50'}`}>
                 <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <Banknote className={`w-5 h-5 ${totalFine > 0 ? 'text-rose-500' : 'text-gray-400'}`} />
                   Fine Calculation
                 </h3>
                 
                 <div className="space-y-3 text-sm mb-4">
                   <div className="flex justify-between items-center">
                     <span className="text-gray-600">Late Days ({lateDays} days)</span>
                     <span className="font-bold text-gray-800">₹{lateFine}</span>
                   </div>
                   {lateDays > 0 && <div className="text-xs text-rose-500 italic mt-[-8px]">Overdue detected!</div>}
                   
                   <div className="flex justify-between items-center">
                     <span className="text-gray-600">Damage/Lost Penalty</span>
                     <span className="font-bold text-gray-800">₹{damageFine}</span>
                   </div>
                   {condition !== 'Good' && <div className="text-xs text-amber-600 italic mt-[-8px]">Book marked as {condition.toLowerCase()}.</div>}
                 </div>
                 
                 <div className="border-t border-rose-200 pt-3 flex justify-between items-center">
                   <span className="font-bold text-gray-800 text-base">Total Fine</span>
                   <span className={`text-2xl font-black ${totalFine > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                     ₹{totalFine}
                   </span>
                 </div>
               </div>
            </div>

            <div className="p-5 border-t border-gray-100 bg-gray-50/50">
              <button 
                disabled={!selectedTrx}
                onClick={handleReturn}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  selectedTrx 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Confirm Return <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Return Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Success Header */}
            <div className="bg-emerald-500 p-8 text-center text-white relative">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                 <CheckCircle2 className="w-12 h-12 text-emerald-500" />
               </div>
               <h2 className="text-3xl font-bold mb-1">Return Successful</h2>
               <p className="text-emerald-100">Inventory updated</p>
               
               {/* Ticket cutting effect */}
               <div className="absolute -bottom-2 left-0 w-full h-4 bg-[radial-gradient(circle,white_4px,transparent_4px)] bg-[length:16px_16px] bg-repeat-x"></div>
            </div>

            {/* Receipt Details */}
            <div className="p-8 bg-white mt-2 relative">
               <div className="absolute top-4 right-8 opacity-5">
                 <BookDown className="w-32 h-32 text-gray-900" />
               </div>
               
               <div className="relative z-10 space-y-4 text-sm">
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Member</span>
                   <span className="font-bold text-gray-900">{selectedTrx?.memberName}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Book</span>
                   <span className="font-bold text-gray-900 line-clamp-1 text-right max-w-[150px]">{selectedTrx?.bookTitle}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Returned On</span>
                   <span className="font-bold text-gray-900">{returnDate}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Book Condition</span>
                   <span className={`font-bold ${condition === 'Good' ? 'text-emerald-600' : 'text-rose-600'}`}>{condition}</span>
                 </div>
                 
                 <div className={`flex justify-between border-b border-dashed border-gray-200 pb-2 p-2 rounded ${totalFine > 0 ? 'bg-rose-50' : 'bg-emerald-50'}`}>
                   <span className={`font-semibold ${totalFine > 0 ? 'text-rose-700' : 'text-emerald-700'}`}>Total Fine Charged</span>
                   <span className={`font-bold ${totalFine > 0 ? 'text-rose-700' : 'text-emerald-700'}`}>₹{totalFine}</span>
                 </div>
               </div>

               <div className="mt-8 flex gap-3">
                 <button onClick={resetForm} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                   Done
                 </button>
                 <button className="flex-1 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2">
                   <Printer className="w-4 h-4" /> Print Receipt
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
