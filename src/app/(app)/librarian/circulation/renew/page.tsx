"use client";

import React, { useState, useEffect } from "react";
import {
  RefreshCw,
  Search,
  ScanLine,
  User,
  Book,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Receipt,
  Printer,
  History,
  BellRing,
  Lock
} from "lucide-react";

interface RenewalHistory {
  date: string;
  previousDueDate: string;
}

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
  
  // Validation properties
  renewalCount: number;
  maxRenewals: number;
  isReserved: boolean;
  memberFineBalance: number;
  
  history: RenewalHistory[];
}

// Mocking 'Today' for validation purposes to test the limits
const MOCK_TODAY = new Date("2023-11-01"); 

const ACTIVE_TRANSACTIONS: Transaction[] = [
  {
    // Valid for renewal
    id: "TRX-101",
    memberId: "LIB-STU-001",
    memberName: "Rahul Sharma",
    memberRole: "Student",
    copyId: "CPY-002",
    barcode: "890123456002",
    bookTitle: "Mathematics Class 10",
    issueDate: "2023-10-15",
    dueDate: "2023-10-29",
    renewalCount: 0,
    maxRenewals: 2,
    isReserved: false,
    memberFineBalance: 0,
    history: []
  },
  {
    // Invalid: Reserved by someone else
    id: "TRX-102",
    memberId: "LIB-TEA-001",
    memberName: "Priya Singh",
    memberRole: "Teacher",
    copyId: "CPY-005",
    barcode: "890123456005",
    bookTitle: "Advanced Chemistry",
    issueDate: "2023-10-10",
    dueDate: "2023-10-24",
    renewalCount: 1,
    maxRenewals: 2,
    isReserved: true,
    memberFineBalance: 0,
    history: [
      { date: "2023-10-20", previousDueDate: "2023-10-20" }
    ]
  },
  {
    // Invalid: Renewal Limit Reached
    id: "TRX-103",
    memberId: "LIB-STU-002",
    memberName: "Amit Kumar",
    memberRole: "Student",
    copyId: "CPY-012",
    barcode: "890123456012",
    bookTitle: "English Grammar",
    issueDate: "2023-09-01",
    dueDate: "2023-10-30",
    renewalCount: 2, // Maxed out
    maxRenewals: 2,
    isReserved: false,
    memberFineBalance: 0,
    history: [
      { date: "2023-09-15", previousDueDate: "2023-09-15" },
      { date: "2023-10-01", previousDueDate: "2023-10-01" }
    ]
  },
  {
    // Invalid: Overdue beyond configured limit (e.g. > 7 days) and Fine Restriction
    id: "TRX-104",
    memberId: "LIB-STF-001",
    memberName: "Vikram Gupta",
    memberRole: "Staff",
    copyId: "CPY-020",
    barcode: "890123456020",
    bookTitle: "Management Principles",
    issueDate: "2023-09-15",
    dueDate: "2023-10-01", // Very overdue compared to mock today
    renewalCount: 0,
    maxRenewals: 2,
    isReserved: false,
    memberFineBalance: 250, // Has fines
    history: []
  }
];

export default function RenewBookFlow() {
  const [searchQuery, setSearchQuery] = useState("");
  const [scanMode, setScanMode] = useState(false);
  const [selectedTrx, setSelectedTrx] = useState<Transaction | null>(null);

  const [newDueDate, setNewDueDate] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  // Validation States
  const [validations, setValidations] = useState({
    notReserved: false,
    limitNotReached: false,
    noFines: false,
    notSeverelyOverdue: false,
  });

  // Calculate new dates and run validations whenever transaction is selected
  useEffect(() => {
    if (selectedTrx) {
      // Setup New Due Date (+14 days from current due date or today, depending on policy. Let's do +14 from today for simplicity)
      const newDue = new Date(MOCK_TODAY);
      newDue.setDate(newDue.getDate() + 14);
      setNewDueDate(newDue.toISOString().split('T')[0]);

      // Calculate Overdue days
      const due = new Date(selectedTrx.dueDate);
      const diffTime = MOCK_TODAY.getTime() - due.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      setValidations({
        notReserved: !selectedTrx.isReserved,
        limitNotReached: selectedTrx.renewalCount < selectedTrx.maxRenewals,
        noFines: selectedTrx.memberFineBalance === 0,
        notSeverelyOverdue: diffDays <= 7, // Max 7 days late allowed for renewal
      });
    }
  }, [selectedTrx]);

  const isAllValid = 
    validations.notReserved && 
    validations.limitNotReached && 
    validations.noFines && 
    validations.notSeverelyOverdue;

  const handleRenew = () => {
    if (isAllValid) {
      setShowReceipt(true);
    }
  };

  const resetForm = () => {
    setSelectedTrx(null);
    setSearchQuery("");
    setShowReceipt(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <RefreshCw className="w-8 h-8 text-blue-600" />
          Renew Book
        </h1>
        <p className="text-gray-500 mt-1">Extend borrowing periods with strict policy validations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
        
        {/* Left Side - Search & Info */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`p-5 border-b flex justify-between items-center ${selectedTrx ? 'bg-blue-50/50 border-blue-100' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Search className={`w-5 h-5 ${selectedTrx ? 'text-blue-600' : 'text-gray-400'}`} />
                Search Issued Book
              </h2>
              {selectedTrx ? (
                <button onClick={resetForm} className="text-sm font-medium text-blue-600 hover:text-blue-700">Change</button>
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
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 opacity-50 animate-[scan_2s_ease-in-out_infinite]" style={{ boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.5)' }}></div>
                     </div>
                  ) : (
                    <div className="relative mb-4">
                      <input 
                        type="text" 
                        placeholder="Search by Barcode, Copy ID, Member Name..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/50"
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
                          className="p-4 cursor-pointer hover:bg-blue-50 border-b last:border-b-0 border-gray-50 flex justify-between items-center transition-colors"
                        >
                          <div>
                            <p className="font-bold text-gray-800">{t.bookTitle}</p>
                            <p className="text-xs text-gray-500 font-mono mt-0.5">Barcode: {t.barcode} • Member: {t.memberName}</p>
                          </div>
                          <div className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                            Due: {t.dueDate}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {/* Summary Block */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold shrink-0">
                        {selectedTrx.memberName.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-wider mb-0.5">Borrower</p>
                        <h3 className="font-bold text-gray-900 text-sm">{selectedTrx.memberName}</h3>
                        <p className="text-gray-500 text-xs font-mono">{selectedTrx.memberId}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider mb-0.5">Book</p>
                        <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{selectedTrx.bookTitle}</h3>
                        <p className="text-gray-500 text-xs font-mono">{selectedTrx.barcode}</p>
                      </div>
                    </div>
                  </div>

                  {/* Dates Preview */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between text-center gap-4 relative">
                     <div className="flex-1">
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Current Due Date</p>
                        <p className={`text-xl font-mono font-bold ${new Date(selectedTrx.dueDate) < MOCK_TODAY ? 'text-rose-600' : 'text-gray-700'}`}>
                          {selectedTrx.dueDate}
                        </p>
                        {new Date(selectedTrx.dueDate) < MOCK_TODAY && <p className="text-xs text-rose-500 font-medium mt-1">Currently Overdue</p>}
                     </div>
                     
                     <div className="hidden md:flex flex-col items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-gray-300" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase mt-1">Renew</span>
                     </div>
                     <div className="md:hidden flex items-center justify-center w-full">
                        <div className="h-4 w-px bg-gray-300"></div>
                     </div>

                     <div className="flex-1">
                        <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">New Due Date</p>
                        <p className={`text-xl font-mono font-bold ${isAllValid ? 'text-blue-700' : 'text-gray-400'}`}>
                          {isAllValid ? newDueDate : '---'}
                        </p>
                        {isAllValid && <p className="text-xs text-blue-500 font-medium mt-1">Added 14 days</p>}
                     </div>
                  </div>

                  {/* Renewal History */}
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                       <h3 className="font-bold text-gray-700 text-sm flex items-center gap-2">
                         <History className="w-4 h-4" /> Renewal History
                       </h3>
                       <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-bold">
                         {selectedTrx.renewalCount} / {selectedTrx.maxRenewals} Used
                       </span>
                    </div>
                    {selectedTrx.history.length > 0 ? (
                      <ul className="divide-y divide-gray-50 p-2">
                        {selectedTrx.history.map((hist, idx) => (
                          <li key={idx} className="flex justify-between items-center p-2 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                              <span className="text-gray-700 font-medium">Renewed on {hist.date}</span>
                            </div>
                            <span className="text-gray-500 text-xs">Previous Due: {hist.previousDueDate}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-6 text-center text-gray-500 text-sm italic">
                        No previous renewals for this transaction.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Validations & Action */}
        <div className="w-full xl:w-[420px] shrink-0">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-white sticky top-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-400" />
              Renewal Restrictions Policy
            </h2>
            
            <div className="space-y-4 mb-8">
              {!selectedTrx ? (
                <div className="text-center py-12 border border-gray-700 border-dashed rounded-xl">
                  <RefreshCw className="w-10 h-10 text-gray-700 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">Select a transaction to run validation checks.</p>
                </div>
              ) : (
                <>
                  <ValidationItem 
                    label="Book is NOT Reserved" 
                    status={validations.notReserved ? 'pass' : 'fail'} 
                    errorMsg="Another member has reserved this book."
                  />
                  <ValidationItem 
                    label={`Renewal Limit (${selectedTrx.maxRenewals} Max)`}
                    status={validations.limitNotReached ? 'pass' : 'fail'} 
                    errorMsg={`Maximum renewal limit (${selectedTrx.renewalCount}/${selectedTrx.maxRenewals}) reached.`}
                  />
                  <ValidationItem 
                    label="Fine / Policy Clear" 
                    status={validations.noFines ? 'pass' : 'fail'} 
                    errorMsg={`Member has outstanding fines (₹${selectedTrx.memberFineBalance}).`}
                  />
                  <ValidationItem 
                    label="Not Severely Overdue" 
                    status={validations.notSeverelyOverdue ? 'pass' : 'fail'} 
                    errorMsg="Book is overdue beyond the allowable grace period."
                  />
                </>
              )}
            </div>

            {selectedTrx && (
              <div className={`p-4 rounded-xl border mb-6 text-center transition-colors ${
                isAllValid ? 'bg-blue-500/20 border-blue-500/30' : 'bg-rose-500/10 border-rose-500/30'
              }`}>
                <p className={`font-bold text-lg flex justify-center items-center gap-2 ${isAllValid ? 'text-blue-400' : 'text-rose-400'}`}>
                  {isAllValid ? <><CheckCircle2 className="w-5 h-5"/> Renewal Allowed</> : <><XCircle className="w-5 h-5"/> Renewal Blocked</>}
                </p>
                {isAllValid 
                  ? <p className="text-xs text-blue-500 mt-1">All policy restrictions cleared.</p>
                  : <p className="text-xs text-rose-500 mt-1">System cannot authorize renewal. Ask member to return the book.</p>
                }
              </div>
            )}

            <button 
              disabled={!selectedTrx || !isAllValid}
              onClick={handleRenew}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                !selectedTrx
                  ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                  : isAllValid 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'bg-rose-900/50 text-rose-300/50 cursor-not-allowed border border-rose-900'
              }`}
            >
              Confirm Renewal <RefreshCw className={`w-5 h-5 ${isAllValid ? 'animate-spin-slow' : ''}`} />
            </button>
          </div>
        </div>

      </div>

      {/* Renewal Success Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Success Header */}
            <div className="bg-blue-600 p-8 text-center text-white relative">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                 <RefreshCw className="w-8 h-8 text-blue-600" />
               </div>
               <h2 className="text-2xl font-bold mb-1">Renewal Successful</h2>
               <p className="text-blue-200 text-sm">Notification sent to member</p>
               
               {/* Ticket cutting effect */}
               <div className="absolute -bottom-2 left-0 w-full h-4 bg-[radial-gradient(circle,white_4px,transparent_4px)] bg-[length:16px_16px] bg-repeat-x"></div>
            </div>

            {/* Receipt Details */}
            <div className="p-8 bg-white mt-2 relative text-sm">
               
               <div className="space-y-4">
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Member</span>
                   <span className="font-bold text-gray-900">{selectedTrx?.memberName}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Book</span>
                   <span className="font-bold text-gray-900 line-clamp-1 text-right max-w-[150px]">{selectedTrx?.bookTitle}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Old Due Date</span>
                   <span className="font-bold text-gray-500 line-through">{selectedTrx?.dueDate}</span>
                 </div>
                 <div className="flex justify-between bg-blue-50 border border-blue-100 p-3 rounded-xl items-center mt-4">
                   <span className="text-blue-800 font-bold uppercase tracking-wider text-xs">New Due Date</span>
                   <span className="font-black text-blue-700 text-lg">{newDueDate}</span>
                 </div>
               </div>

               <div className="mt-8 flex flex-col gap-3">
                 <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2">
                   <BellRing className="w-4 h-4" /> Send Email/SMS Reminder
                 </button>
                 <button onClick={resetForm} className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                   Done
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Sub-component for validation list item
function ValidationItem({ label, status, errorMsg }: { label: string, status: 'pass'|'fail'|'pending', errorMsg: string }) {
  return (
    <div className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
      <div className="mt-0.5 shrink-0">
        {status === 'pass' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
        {status === 'fail' && <XCircle className="w-5 h-5 text-rose-400" />}
        {status === 'pending' && <div className="w-5 h-5 rounded-full border-2 border-gray-600 border-dashed"></div>}
      </div>
      <div>
        <p className={`font-medium text-sm ${status === 'pass' ? 'text-gray-200' : status === 'fail' ? 'text-rose-400' : 'text-gray-500'}`}>{label}</p>
        {status === 'fail' && <p className="text-xs text-rose-400/80 mt-1 bg-rose-950/50 p-2 rounded-lg border border-rose-900/50">{errorMsg}</p>}
      </div>
    </div>
  );
}
