"use client";

import React, { useState, useEffect } from "react";
import {
  BookUp,
  Search,
  ScanLine,
  UserCheck,
  UserX,
  BookCheck,
  BookX,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Calendar,
  Clock,
  ArrowRight,
  Printer,
  BellRing,
  Receipt
} from "lucide-react";

// Types
interface Member {
  id: string;
  name: string;
  memberId: string;
  role: string;
  status: 'Active' | 'Suspended' | 'Expired';
  borrowingLimit: number;
  currentBooksCount: number;
  fineBalance: number;
  hasOverdue: boolean;
}

interface Copy {
  copyId: string;
  barcode: string;
  bookTitle: string;
  author: string;
  status: 'Available' | 'Issued' | 'Damaged' | 'Lost';
  condition: string;
}

// Mock Data
const MEMBERS: Member[] = [
  { id: "M1", name: "Rahul Sharma", memberId: "LIB-STU-001", role: "Student", status: "Active", borrowingLimit: 3, currentBooksCount: 1, fineBalance: 0, hasOverdue: false },
  { id: "M2", name: "Priya Singh", memberId: "LIB-TEA-001", role: "Teacher", status: "Active", borrowingLimit: 10, currentBooksCount: 2, fineBalance: 150, hasOverdue: true },
  { id: "M3", name: "Amit Kumar", memberId: "LIB-STU-002", role: "Student", status: "Suspended", borrowingLimit: 3, currentBooksCount: 3, fineBalance: 50, hasOverdue: false },
  { id: "M4", name: "Vikram Gupta", memberId: "LIB-STF-001", role: "Staff", status: "Expired", borrowingLimit: 5, currentBooksCount: 0, fineBalance: 0, hasOverdue: false },
];

const COPIES: Copy[] = [
  { copyId: "CPY-001", barcode: "890123456001", bookTitle: "Mathematics Class 10", author: "R.D. Sharma", status: "Available", condition: "Good" },
  { copyId: "CPY-002", barcode: "890123456002", bookTitle: "Mathematics Class 10", author: "R.D. Sharma", status: "Issued", condition: "Fair" },
  { copyId: "CPY-003", barcode: "890123456003", bookTitle: "Physics Concepts", author: "H.C. Verma", status: "Damaged", condition: "Poor" },
  { copyId: "CPY-004", barcode: "890123456004", bookTitle: "English Grammar", author: "Wren & Martin", status: "Available", condition: "Excellent" },
];

export default function IssueBookFlow() {
  const [memberQuery, setMemberQuery] = useState("");
  const [copyQuery, setCopyQuery] = useState("");
  const [scanMode, setScanMode] = useState(false);

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedCopy, setSelectedCopy] = useState<Copy | null>(null);

  // Issue Details
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Receipt Modal
  const [showReceipt, setShowReceipt] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  // Initialize dates
  useEffect(() => {
    const today = new Date();
    setIssueDate(today.toISOString().split('T')[0]);
    
    // Default 14 days due date
    const due = new Date(today);
    due.setDate(due.getDate() + 14);
    setDueDate(due.toISOString().split('T')[0]);
  }, []);

  // Validation Logic
  const validations = {
    memberSelected: !!selectedMember,
    bookSelected: !!selectedCopy,
    bookAvailable: selectedCopy?.status === 'Available',
    memberActive: selectedMember?.status === 'Active',
    limitOkay: selectedMember ? selectedMember.currentBooksCount < selectedMember.borrowingLimit : false,
    noOverdue: selectedMember ? !selectedMember.hasOverdue : false,
    fineOkay: selectedMember ? selectedMember.fineBalance <= 100 : false, // example threshold 100
  };

  const isAllValid = 
    validations.memberSelected && 
    validations.bookSelected && 
    validations.bookAvailable && 
    validations.memberActive && 
    validations.limitOkay && 
    validations.noOverdue && 
    validations.fineOkay;

  const handleIssue = () => {
    if (isAllValid) {
      setTransactionId(`TRX-ISSUE-${Math.floor(Math.random() * 1000000)}`);
      setShowReceipt(true);
    }
  };

  const resetForm = () => {
    setSelectedMember(null);
    setSelectedCopy(null);
    setMemberQuery("");
    setCopyQuery("");
    setShowReceipt(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <BookUp className="w-8 h-8 text-indigo-600" />
          Issue Book
        </h1>
        <p className="text-gray-500 mt-1">Smart workflow with automatic real-time validations.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
        
        {/* LEFT COLUMN: Selection Forms */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Member Selection */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className={`p-5 border-b flex justify-between items-center ${selectedMember ? 'bg-indigo-50/50 border-indigo-100' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <UserCheck className={`w-5 h-5 ${selectedMember ? 'text-indigo-600' : 'text-gray-400'}`} />
                Step 1: Select Member
              </h2>
              {selectedMember && (
                <button onClick={() => setSelectedMember(null)} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Change</button>
              )}
            </div>
            
            <div className="p-5">
              {!selectedMember ? (
                <div>
                  <div className="relative mb-4">
                    <input 
                      type="text" 
                      placeholder="Search by Member Name or ID..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50/50"
                      value={memberQuery}
                      onChange={(e) => setMemberQuery(e.target.value)}
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  
                  {memberQuery && (
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      {MEMBERS.filter(m => m.name.toLowerCase().includes(memberQuery.toLowerCase()) || m.memberId.toLowerCase().includes(memberQuery.toLowerCase())).map(m => (
                        <div 
                          key={m.id} 
                          onClick={() => { setSelectedMember(m); setMemberQuery(""); }}
                          className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 border-gray-50 flex justify-between items-center"
                        >
                          <div>
                            <p className="font-bold text-gray-800">{m.name}</p>
                            <p className="text-xs text-gray-500 font-mono mt-0.5">{m.memberId}</p>
                          </div>
                          <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            m.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 
                            m.status === 'Suspended' ? 'bg-rose-100 text-rose-700' : 
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {m.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-lg">
                      {selectedMember.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{selectedMember.name}</h3>
                      <p className="text-gray-500 text-sm font-mono">{selectedMember.memberId} • {selectedMember.role}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                     <p className="text-gray-500">Fine Balance</p>
                     <p className={`font-bold ${selectedMember.fineBalance > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>₹{selectedMember.fineBalance}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Book / Copy Selection */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden opacity-100 transition-opacity">
            <div className={`p-5 border-b flex justify-between items-center ${selectedCopy ? 'bg-emerald-50/50 border-emerald-100' : 'bg-white border-gray-100'}`}>
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <BookCheck className={`w-5 h-5 ${selectedCopy ? 'text-emerald-600' : 'text-gray-400'}`} />
                Step 2: Select Book Copy
              </h2>
              {selectedCopy ? (
                <button onClick={() => setSelectedCopy(null)} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Change</button>
              ) : (
                <button onClick={() => setScanMode(!scanMode)} className={`text-sm font-medium flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${scanMode ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <ScanLine className="w-4 h-4" /> {scanMode ? 'Manual Search' : 'Scan Barcode'}
                </button>
              )}
            </div>
            
            <div className="p-5">
              {!selectedCopy ? (
                <div>
                  {scanMode ? (
                     <div className="bg-gray-900 rounded-xl aspect-video flex flex-col items-center justify-center text-white mb-4 relative overflow-hidden border-4 border-gray-800">
                        <ScanLine className="w-16 h-16 text-indigo-400 mb-4 animate-pulse" />
                        <p className="font-medium">Camera Active</p>
                        <p className="text-xs text-gray-400 mt-1">Point at the book barcode/QR</p>
                        
                        {/* Scanning animation line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 opacity-50 animate-[scan_2s_ease-in-out_infinite]" style={{ boxShadow: '0 0 10px 2px rgba(16, 185, 129, 0.5)' }}></div>
                     </div>
                  ) : (
                    <div className="relative mb-4">
                      <input 
                        type="text" 
                        placeholder="Search by Barcode, Copy ID, or Title..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                        value={copyQuery}
                        onChange={(e) => setCopyQuery(e.target.value)}
                      />
                      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  )}

                  {copyQuery && !scanMode && (
                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      {COPIES.filter(c => c.barcode.includes(copyQuery) || c.copyId.toLowerCase().includes(copyQuery.toLowerCase()) || c.bookTitle.toLowerCase().includes(copyQuery.toLowerCase())).map(c => (
                        <div 
                          key={c.copyId} 
                          onClick={() => { setSelectedCopy(c); setCopyQuery(""); }}
                          className={`p-4 cursor-pointer border-b last:border-b-0 border-gray-50 flex justify-between items-center ${c.status === 'Available' ? 'hover:bg-emerald-50' : 'opacity-70 bg-gray-50 cursor-not-allowed'}`}
                        >
                          <div>
                            <p className="font-bold text-gray-800">{c.bookTitle}</p>
                            <p className="text-xs text-gray-500 font-mono mt-0.5">{c.copyId} | Barcode: {c.barcode}</p>
                          </div>
                          <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            c.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 
                            c.status === 'Issued' ? 'bg-blue-100 text-blue-700' : 
                            'bg-rose-100 text-rose-700'
                          }`}>
                            {c.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-16 bg-emerald-100 text-emerald-600 rounded-md flex items-center justify-center shadow-sm">
                      <BookCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{selectedCopy.bookTitle}</h3>
                      <p className="text-gray-500 text-sm">{selectedCopy.author}</p>
                      <p className="text-emerald-600 text-xs font-mono font-bold mt-1">Copy: {selectedCopy.copyId} • Barcode: {selectedCopy.barcode}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Dates Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" /> Issue Date
              </label>
              <input 
                type="date" 
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" /> Due Date
              </label>
              <input 
                type="date" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Validations & Action */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 text-white sticky top-6">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              System Validation
            </h2>
            
            <div className="space-y-4 mb-8">
              {/* Validation Items */}
              <ValidationItem 
                label="Book is Available" 
                status={!validations.bookSelected ? 'pending' : validations.bookAvailable ? 'pass' : 'fail'} 
                errorMsg="Selected copy is not available (Issued/Damaged)."
              />
              <ValidationItem 
                label="Member Account Active" 
                status={!validations.memberSelected ? 'pending' : validations.memberActive ? 'pass' : 'fail'} 
                errorMsg={`Account is ${selectedMember?.status.toLowerCase()}.`}
              />
              <ValidationItem 
                label="Borrowing Limit Valid" 
                status={!validations.memberSelected ? 'pending' : validations.limitOkay ? 'pass' : 'fail'} 
                errorMsg={`Limit reached (${selectedMember?.currentBooksCount}/${selectedMember?.borrowingLimit} books).`}
              />
              <ValidationItem 
                label="No Overdue Books" 
                status={!validations.memberSelected ? 'pending' : validations.noOverdue ? 'pass' : 'fail'} 
                errorMsg="Member has existing overdue books."
              />
              <ValidationItem 
                label="Fine Restrictions Passed" 
                status={!validations.memberSelected ? 'pending' : validations.fineOkay ? 'pass' : 'fail'} 
                errorMsg={`Outstanding fine (₹${selectedMember?.fineBalance}) exceeds limit.`}
              />
            </div>

            <div className={`p-4 rounded-xl border mb-6 text-center transition-colors ${
              isAllValid ? 'bg-emerald-500/20 border-emerald-500/30' : 'bg-gray-800 border-gray-700'
            }`}>
              <p className={`font-bold text-lg ${isAllValid ? 'text-emerald-400' : 'text-gray-400'}`}>
                {isAllValid ? 'Ready to Issue' : 'Awaiting Validations'}
              </p>
              {isAllValid && <p className="text-xs text-emerald-500 mt-1">All system checks passed successfully.</p>}
            </div>

            <button 
              disabled={!isAllValid}
              onClick={handleIssue}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                isAllValid 
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              Confirm Issue <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Success Header */}
            <div className="bg-emerald-500 p-8 text-center text-white relative">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                 <CheckCircle2 className="w-12 h-12 text-emerald-500" />
               </div>
               <h2 className="text-3xl font-bold mb-1">Issue Successful</h2>
               <p className="text-emerald-100">Transaction completed</p>
               
               {/* Ticket cutting effect */}
               <div className="absolute -bottom-2 left-0 w-full h-4 bg-[radial-gradient(circle,white_4px,transparent_4px)] bg-[length:16px_16px] bg-repeat-x"></div>
            </div>

            {/* Receipt Details */}
            <div className="p-8 bg-white mt-2 relative">
               <div className="absolute top-4 right-8 opacity-10">
                 <Receipt className="w-32 h-32" />
               </div>
               
               <div className="relative z-10 space-y-4 text-sm">
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Transaction ID</span>
                   <span className="font-bold text-gray-900 font-mono">{transactionId}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Member</span>
                   <span className="font-bold text-gray-900">{selectedMember?.name}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Book</span>
                   <span className="font-bold text-gray-900 line-clamp-1 text-right max-w-[150px]">{selectedCopy?.bookTitle}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                   <span className="text-gray-500">Copy ID</span>
                   <span className="font-bold text-gray-900">{selectedCopy?.copyId}</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-gray-200 pb-2 bg-indigo-50/50 p-2 rounded">
                   <span className="text-indigo-700 font-semibold">Due Date</span>
                   <span className="font-bold text-indigo-700">{dueDate}</span>
                 </div>
               </div>

               <div className="mt-8 flex gap-3">
                 <button onClick={resetForm} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                   Done
                 </button>
                 <button className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md flex items-center justify-center gap-2">
                   <Printer className="w-4 h-4" /> Print
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
    <div className="flex items-start gap-3">
      <div className="mt-0.5">
        {status === 'pass' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
        {status === 'fail' && <XCircle className="w-5 h-5 text-rose-400" />}
        {status === 'pending' && <div className="w-5 h-5 rounded-full border-2 border-gray-600 border-dashed animate-spin-slow"></div>}
      </div>
      <div>
        <p className={`font-medium ${status === 'pass' ? 'text-gray-200' : status === 'fail' ? 'text-rose-400' : 'text-gray-500'}`}>{label}</p>
        {status === 'fail' && <p className="text-xs text-rose-400/80 mt-0.5">{errorMsg}</p>}
      </div>
    </div>
  );
}
