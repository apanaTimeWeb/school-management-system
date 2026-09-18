"use client";

import React, { useState, useEffect } from "react";
import {
  Banknote,
  Search,
  Wallet,
  CreditCard,
  Coins,
  History,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileMinus,
  Edit3,
  X,
  User,
  Book,
  FileText
} from "lucide-react";

type FineType = 'Late Fine' | 'Lost Book' | 'Damage Fine' | 'Replacement Cost';
type FineStatus = 'Unpaid' | 'Paid' | 'Waived';

interface FineRecord {
  id: string;
  memberId: string;
  memberName: string;
  memberRole: string;
  bookTitle: string;
  fineType: FineType;
  amount: number;
  originalAmount: number;
  status: FineStatus;
  dateGenerated: string;
  dateResolved?: string;
  remarks?: string;
  transactionId?: string;
}

const MOCK_FINES: FineRecord[] = [
  {
    id: "F-1001",
    memberId: "LIB-STU-015",
    memberName: "Rohan Patel",
    memberRole: "Student",
    bookTitle: "Physics HC Verma",
    fineType: "Late Fine",
    amount: 120, // 12 days * 10
    originalAmount: 120,
    status: "Unpaid",
    dateGenerated: "2023-10-25"
  },
  {
    id: "F-1002",
    memberId: "LIB-TEA-003",
    memberName: "Sneha Sharma",
    memberRole: "Teacher",
    bookTitle: "Advanced Chemistry",
    fineType: "Damage Fine",
    amount: 350,
    originalAmount: 350,
    status: "Unpaid",
    dateGenerated: "2023-10-26"
  },
  {
    id: "F-1003",
    memberId: "LIB-STU-088",
    memberName: "Vikram Singh",
    memberRole: "Student",
    bookTitle: "Mathematics Class 12",
    fineType: "Lost Book",
    amount: 850,
    originalAmount: 850,
    status: "Unpaid",
    dateGenerated: "2023-10-28"
  },
  {
    id: "F-0990",
    memberId: "LIB-STU-042",
    memberName: "Amit Kumar",
    memberRole: "Student",
    bookTitle: "English Grammar",
    fineType: "Late Fine",
    amount: 50,
    originalAmount: 50,
    status: "Paid",
    dateGenerated: "2023-10-10",
    dateResolved: "2023-10-12",
    transactionId: "TXN-88492"
  },
  {
    id: "F-0985",
    memberId: "LIB-STF-011",
    memberName: "Neha Gupta",
    memberRole: "Staff",
    bookTitle: "Management Principles",
    fineType: "Late Fine",
    amount: 0,
    originalAmount: 150,
    status: "Waived",
    dateGenerated: "2023-09-15",
    dateResolved: "2023-09-20",
    remarks: "Waived by Principal - Medical Leave."
  }
];

export default function FinesPenalties() {
  const [fines, setFines] = useState<FineRecord[]>(MOCK_FINES);
  const [activeTab, setActiveTab] = useState<'Unpaid' | 'History'>('Unpaid');
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [isWaiveModalOpen, setIsWaiveModalOpen] = useState(false);
  const [selectedFine, setSelectedFine] = useState<FineRecord | null>(null);

  // Forms state
  const [paymentMethod, setPaymentMethod] = useState<'Cash' | 'Online' | 'Wallet'>('Cash');
  const [waiveAmount, setWaiveAmount] = useState<number>(0);
  const [waiveReason, setWaiveReason] = useState("");
  const [adminPin, setAdminPin] = useState(""); // For permission simulation
  
  // Loading states to mock server-side validation
  const [isProcessing, setIsProcessing] = useState(false);

  // Filters
  const unpaidFines = fines.filter(f => f.status === 'Unpaid' && (f.memberName.toLowerCase().includes(searchQuery.toLowerCase()) || f.memberId.toLowerCase().includes(searchQuery.toLowerCase())));
  const historyFines = fines.filter(f => (f.status === 'Paid' || f.status === 'Waived') && (f.memberName.toLowerCase().includes(searchQuery.toLowerCase()) || f.memberId.toLowerCase().includes(searchQuery.toLowerCase())));

  const displayData = activeTab === 'Unpaid' ? unpaidFines : historyFines;

  // Aggregates
  const totalOutstanding = fines.filter(f => f.status === 'Unpaid').reduce((sum, f) => sum + f.amount, 0);
  const totalCollected = fines.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0);
  const totalWaived = fines.filter(f => f.status === 'Waived' || (f.status === 'Paid' && f.originalAmount > f.amount)).reduce((sum, f) => sum + (f.originalAmount - f.amount), 0);

  // Handlers
  const openPayModal = (fine: FineRecord) => {
    setSelectedFine(fine);
    setIsPayModalOpen(true);
  };

  const openWaiveModal = (fine: FineRecord) => {
    setSelectedFine(fine);
    setWaiveAmount(fine.amount);
    setWaiveReason("");
    setAdminPin("");
    setIsWaiveModalOpen(true);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFine) return;
    
    setIsProcessing(true);
    // Simulate server side validation and processing
    setTimeout(() => {
      const updatedFines = fines.map(f => 
        f.id === selectedFine.id 
          ? { 
              ...f, 
              status: 'Paid' as FineStatus, 
              dateResolved: new Date().toISOString().split('T')[0],
              transactionId: `TXN-${Math.floor(Math.random() * 1000000)}`,
              remarks: `Paid via ${paymentMethod}`
            } 
          : f
      );
      setFines(updatedFines);
      setIsProcessing(false);
      setIsPayModalOpen(false);
      alert("Payment processed successfully and recorded in server.");
    }, 1500);
  };

  const handleWaiver = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFine) return;

    if (adminPin !== "1234") {
      alert("Invalid Admin PIN. Permission denied.");
      return;
    }
    
    setIsProcessing(true);
    // Simulate server side validation
    setTimeout(() => {
      let finalAmount = selectedFine.amount - waiveAmount;
      if (finalAmount < 0) finalAmount = 0;

      const newStatus = finalAmount === 0 ? 'Waived' : 'Unpaid';

      const updatedFines = fines.map(f => 
        f.id === selectedFine.id 
          ? { 
              ...f, 
              amount: finalAmount,
              status: newStatus as FineStatus, 
              dateResolved: newStatus === 'Waived' ? new Date().toISOString().split('T')[0] : undefined,
              remarks: `Waived ₹${waiveAmount}. Reason: ${waiveReason}`
            } 
          : f
      );
      
      setFines(updatedFines);
      setIsProcessing(false);
      setIsWaiveModalOpen(false);
      alert(newStatus === 'Waived' ? "Fine completely waived." : "Fine partially adjusted.");
    }, 1500);
  };

  const getTypeBadge = (type: FineType) => {
    switch (type) {
      case 'Late Fine': return <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded text-xs font-semibold border border-orange-100">{type}</span>;
      case 'Lost Book': return <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded text-xs font-semibold border border-rose-100">{type}</span>;
      case 'Damage Fine': return <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded text-xs font-semibold border border-amber-100">{type}</span>;
      case 'Replacement Cost': return <span className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded text-xs font-semibold border border-purple-100">{type}</span>;
    }
  };

  const getStatusBadge = (status: FineStatus) => {
    switch (status) {
      case 'Unpaid': return <span className="text-rose-600 font-bold flex items-center gap-1"><AlertCircle className="w-4 h-4"/> Unpaid</span>;
      case 'Paid': return <span className="text-emerald-600 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Paid</span>;
      case 'Waived': return <span className="text-gray-500 font-bold flex items-center gap-1"><FileMinus className="w-4 h-4"/> Waived</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Banknote className="w-8 h-8 text-rose-600" />
          Fines & Penalties
        </h1>
        <p className="text-gray-500 mt-1">Manage overdue fines, lost book replacements, and waivers.</p>
      </div>

      {/* Aggregate Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-rose-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Outstanding</p>
          <h3 className="text-3xl font-black text-rose-600">₹{totalOutstanding}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <AlertCircle className="w-24 h-24 text-rose-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-emerald-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Collected</p>
          <h3 className="text-3xl font-black text-emerald-600">₹{totalCollected}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-24 h-24 text-emerald-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-gray-400"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Waived</p>
          <h3 className="text-3xl font-black text-gray-600">₹{totalWaived}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-24 h-24 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('Unpaid')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'Unpaid' ? 'bg-rose-50 text-rose-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <AlertCircle className="w-4 h-4" /> Outstanding Dues
          </button>
          <button 
            onClick={() => setActiveTab('History')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'History' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <History className="w-4 h-4" /> Fine History
          </button>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <input 
            type="text" 
            placeholder="Search Member Name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Fines List / Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-sm border-b border-gray-100">
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Member</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Fine Details</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-right">Amount</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-center">Status</th>
                {activeTab === 'Unpaid' && <th className="py-4 px-6 font-bold uppercase tracking-wider text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayData.length > 0 ? (
                displayData.map((fine) => (
                  <tr key={fine.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold shrink-0">
                          {fine.memberName.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 leading-tight">{fine.memberName}</h4>
                          <p className="text-xs font-mono text-gray-500 mt-0.5">{fine.memberId} • {fine.memberRole}</p>
                        </div>
                      </div>
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="mb-1">{getTypeBadge(fine.fineType)}</div>
                      <p className="text-sm font-medium text-gray-800 line-clamp-1">{fine.bookTitle}</p>
                      <p className="text-xs text-gray-500 mt-0.5">Generated: {fine.dateGenerated}</p>
                      {fine.remarks && <p className="text-xs text-gray-400 italic mt-1 max-w-[200px] line-clamp-1" title={fine.remarks}>"{fine.remarks}"</p>}
                    </td>
                    
                    <td className="py-4 px-6 text-right">
                      {fine.status === 'Waived' ? (
                        <div>
                          <span className="font-bold text-gray-400 line-through">₹{fine.originalAmount}</span>
                          <p className="text-xs text-gray-500 mt-0.5">₹0 Due</p>
                        </div>
                      ) : (
                        <div>
                          <span className={`text-xl font-black ${fine.status === 'Unpaid' ? 'text-rose-600' : 'text-emerald-600'}`}>
                            ₹{fine.amount}
                          </span>
                          {fine.amount < fine.originalAmount && (
                            <p className="text-xs text-gray-400 line-through mt-0.5">₹{fine.originalAmount}</p>
                          )}
                        </div>
                      )}
                    </td>
                    
                    <td className="py-4 px-6">
                      <div className="flex justify-center">
                        {getStatusBadge(fine.status)}
                      </div>
                      {fine.dateResolved && (
                        <p className="text-[10px] text-gray-400 text-center mt-1 uppercase font-bold">{fine.dateResolved}</p>
                      )}
                    </td>
                    
                    {activeTab === 'Unpaid' && (
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => openWaiveModal(fine)}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors flex items-center gap-1"
                          >
                            <Edit3 className="w-3.5 h-3.5" /> Adjust
                          </button>
                          <button 
                            onClick={() => openPayModal(fine)}
                            className="px-3 py-1.5 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg text-sm font-bold transition-colors shadow-sm flex items-center gap-1"
                          >
                            <Banknote className="w-3.5 h-3.5" /> Pay
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-16 text-center">
                    <Banknote className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-gray-800 mb-1">No Fines Found</h3>
                    <p className="text-gray-500 text-sm">There are no {activeTab.toLowerCase()} fines matching your criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pay Fine Modal (Server-side validation simulation) */}
      {isPayModalOpen && selectedFine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-emerald-50/50 rounded-t-2xl">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-emerald-600" />
                Collect Payment
              </h2>
              <button onClick={() => setIsPayModalOpen(false)} disabled={isProcessing} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handlePayment} className="p-6">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Amount Due</p>
                <h3 className="text-4xl font-black text-emerald-600">₹{selectedFine.amount}</h3>
                <p className="text-xs text-gray-500 mt-2">Member: <span className="font-bold text-gray-800">{selectedFine.memberName}</span></p>
              </div>

              <div className="space-y-4 mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <label className={`cursor-pointer border p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors ${paymentMethod === 'Cash' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                    <input type="radio" name="payMethod" value="Cash" checked={paymentMethod === 'Cash'} onChange={() => setPaymentMethod('Cash')} className="hidden" />
                    <Coins className="w-5 h-5" />
                    <span className="text-xs font-bold">Cash</span>
                  </label>
                  <label className={`cursor-pointer border p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors ${paymentMethod === 'Online' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                    <input type="radio" name="payMethod" value="Online" checked={paymentMethod === 'Online'} onChange={() => setPaymentMethod('Online')} className="hidden" />
                    <CreditCard className="w-5 h-5" />
                    <span className="text-xs font-bold">Online</span>
                  </label>
                  <label className={`cursor-pointer border p-3 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors ${paymentMethod === 'Wallet' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                    <input type="radio" name="payMethod" value="Wallet" checked={paymentMethod === 'Wallet'} onChange={() => setPaymentMethod('Wallet')} className="hidden" />
                    <Wallet className="w-5 h-5" />
                    <span className="text-xs font-bold">Wallet</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className={`w-full py-3 rounded-xl text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 ${isProcessing ? 'bg-emerald-400 cursor-wait' : 'bg-emerald-600 hover:bg-emerald-700'}`}
              >
                {isProcessing ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Validating Payment...</>
                ) : (
                  <><CheckCircle2 className="w-5 h-5"/> Confirm Payment</>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Adjust / Waive Fine Modal (Permission Based) */}
      {isWaiveModalOpen && selectedFine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-amber-50/50 rounded-t-2xl">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                Adjust / Waive Fine
              </h2>
              <button onClick={() => setIsWaiveModalOpen(false)} disabled={isProcessing} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleWaiver} className="p-6 space-y-4">
              
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex justify-between items-center text-sm">
                 <span className="font-bold text-gray-600">Current Due:</span>
                 <span className="font-black text-rose-600">₹{selectedFine.amount}</span>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Amount to Waive/Reduce (₹) *</label>
                <input 
                  required type="number" 
                  min="1" max={selectedFine.amount}
                  value={waiveAmount || ""}
                  onChange={(e) => setWaiveAmount(parseInt(e.target.value) || 0)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold" 
                />
                <p className="text-xs text-amber-600 font-medium mt-1">Remaining Fine will be: ₹{Math.max(0, selectedFine.amount - waiveAmount)}</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Reason for Waiver *</label>
                <input 
                  required type="text" 
                  value={waiveReason}
                  onChange={(e) => setWaiveReason(e.target.value)}
                  placeholder="e.g. Medical emergency approved by admin"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm" 
                />
              </div>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-gray-400"/> Admin/Librarian PIN *
                </label>
                <input 
                  required type="password" 
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                  placeholder="Enter PIN (mock: 1234)"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 tracking-widest font-mono" 
                />
                <p className="text-[10px] text-gray-400 mt-1 uppercase">Permission based server-side validation required.</p>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className={`w-full py-3 rounded-xl text-white font-bold transition-all shadow-md mt-4 flex items-center justify-center gap-2 ${isProcessing ? 'bg-amber-400 cursor-wait' : 'bg-amber-600 hover:bg-amber-700'}`}
              >
                {isProcessing ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Authorizing...</>
                ) : (
                  <><FileMinus className="w-5 h-5"/> Authorize Adjustment</>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
