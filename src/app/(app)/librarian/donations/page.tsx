"use client";

import React, { useState } from "react";
import {
  HeartHandshake,
  Search,
  Plus,
  CheckCircle2,
  XCircle,
  Clock,
  BookOpen,
  User,
  Coins,
  History,
  X,
  FileText,
  BadgeAlert
} from "lucide-react";

type DonationStatus = 'Pending Approval' | 'Accepted' | 'Rejected';

interface DonationRecord {
  id: string; // Reference/Receipt ID
  donorName: string;
  bookTitle: string;
  author: string;
  isbn: string;
  quantity: number;
  date: string;
  estimatedValue: number;
  status: DonationStatus;
  accessionRange?: string;
  remarks?: string;
}

const MOCK_DONATIONS: DonationRecord[] = [
  {
    id: "DON-001",
    donorName: "Dr. A.K. Verma",
    bookTitle: "Advanced Medical Sciences",
    author: "Various",
    isbn: "978-1234567890",
    quantity: 5,
    date: "2023-11-10",
    estimatedValue: 7500,
    status: "Pending Approval"
  },
  {
    id: "DON-002",
    donorName: "Priya Sharma (Alumni)",
    bookTitle: "Harry Potter Collection",
    author: "J.K. Rowling",
    isbn: "978-0987654321",
    quantity: 7,
    date: "2023-11-12",
    estimatedValue: 4200,
    status: "Pending Approval"
  },
  {
    id: "DON-003",
    donorName: "Local NGO - Vidya Trust",
    bookTitle: "Basic Computer Skills",
    author: "R.K. Taxali",
    isbn: "978-1122334455",
    quantity: 20,
    date: "2023-10-25",
    estimatedValue: 5000,
    status: "Accepted",
    accessionRange: "ACC-7001 to ACC-7020",
    remarks: "Added to general circulation."
  },
  {
    id: "DON-004",
    donorName: "Anonymous",
    bookTitle: "Outdated Travel Guide (2005)",
    author: "Lonely Planet",
    isbn: "N/A",
    quantity: 1,
    date: "2023-10-20",
    estimatedValue: 200,
    status: "Rejected",
    remarks: "Book is too old and damaged for library use."
  }
];

export default function DonationsManagement() {
  const [donations, setDonations] = useState<DonationRecord[]>(MOCK_DONATIONS);
  const [activeTab, setActiveTab] = useState<'Pending' | 'History'>('Pending');
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<DonationRecord | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // New Form State
  const [newDonation, setNewDonation] = useState<Partial<DonationRecord>>({});
  
  // Review Form State
  const [reviewRemark, setReviewRemark] = useState("");

  // Filtering
  const displayedDonations = donations.filter(d => 
    (activeTab === 'Pending' ? d.status === 'Pending Approval' : d.status !== 'Pending Approval') &&
    (d.donorName.toLowerCase().includes(searchQuery.toLowerCase()) || d.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Metrics
  const totalAcceptedBooks = donations.filter(d => d.status === 'Accepted').reduce((acc, curr) => acc + curr.quantity, 0);
  const totalValue = donations.filter(d => d.status === 'Accepted').reduce((acc, curr) => acc + curr.estimatedValue, 0);
  const pendingCount = donations.filter(d => d.status === 'Pending Approval').length;

  const handleAddDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const created: DonationRecord = {
      id: `DON-${Math.floor(100 + Math.random() * 900)}`,
      donorName: newDonation.donorName || "Unknown",
      bookTitle: newDonation.bookTitle || "",
      author: newDonation.author || "",
      isbn: newDonation.isbn || "N/A",
      quantity: Number(newDonation.quantity) || 1,
      estimatedValue: Number(newDonation.estimatedValue) || 0,
      date: new Date().toISOString().split('T')[0],
      status: "Pending Approval"
    };
    setDonations([created, ...donations]);
    setIsAddModalOpen(false);
    setNewDonation({});
  };

  const openReview = (donation: DonationRecord) => {
    setSelectedDonation(donation);
    setReviewRemark("");
    setIsReviewModalOpen(true);
  };

  const handleAction = (action: 'Accept' | 'Reject') => {
    if (!selectedDonation) return;

    let updatedDonation = { ...selectedDonation, remarks: reviewRemark };

    if (action === 'Accept') {
      const startAcc = Math.floor(7000 + Math.random() * 1000);
      const endAcc = startAcc + selectedDonation.quantity - 1;
      const rangeStr = selectedDonation.quantity === 1 ? `ACC-${startAcc}` : `ACC-${startAcc} to ACC-${endAcc}`;
      
      updatedDonation = { ...updatedDonation, status: 'Accepted', accessionRange: rangeStr };
    } else {
      updatedDonation = { ...updatedDonation, status: 'Rejected' };
    }

    setDonations(donations.map(d => d.id === selectedDonation.id ? updatedDonation : d));
    setIsReviewModalOpen(false);
  };

  const getStatusBadge = (status: DonationStatus) => {
    switch(status) {
      case 'Pending Approval': return <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><Clock className="w-3.5 h-3.5"/> Pending</span>;
      case 'Accepted': return <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><CheckCircle2 className="w-3.5 h-3.5"/> Accepted</span>;
      case 'Rejected': return <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><XCircle className="w-3.5 h-3.5"/> Rejected</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <HeartHandshake className="w-8 h-8 text-fuchsia-600" />
            Library Donations
          </h1>
          <p className="text-gray-500 mt-1">Record, review, and manage books donated by alumni and organizations.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> Record New Donation
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-fuchsia-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-fuchsia-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Books Accepted</p>
          <h3 className="text-3xl font-black text-fuchsia-600">{totalAcceptedBooks}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <BookOpen className="w-24 h-24 text-fuchsia-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-emerald-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Estimated Value</p>
          <h3 className="text-3xl font-black text-emerald-600">₹{totalValue.toLocaleString()}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <Coins className="w-24 h-24 text-emerald-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-amber-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Awaiting Review</p>
          <h3 className="text-3xl font-black text-amber-600">{pendingCount}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <BadgeAlert className="w-24 h-24 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('Pending')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 relative ${activeTab === 'Pending' ? 'bg-fuchsia-50 text-fuchsia-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Clock className="w-4 h-4" /> Pending Approval
            {pendingCount > 0 && <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">{pendingCount}</span>}
          </button>
          <button 
            onClick={() => setActiveTab('History')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'History' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <History className="w-4 h-4" /> Donation History
          </button>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <input 
            type="text" 
            placeholder="Search Donor or Book..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all text-sm bg-gray-50/50"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Main List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {displayedDonations.length > 0 ? (
          displayedDonations.map((donation) => (
            <div key={donation.id} className={`bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col relative transition-all hover:shadow-md ${activeTab === 'Pending' ? 'border-amber-200' : 'border-gray-100'}`}>
              
              {/* Header */}
              <div className="p-5 border-b border-gray-100 flex justify-between items-start bg-gray-50/50">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Receipt: {donation.id}</p>
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    <User className="w-4 h-4 text-fuchsia-500"/> {donation.donorName}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Received: {donation.date}</p>
                </div>
                {getStatusBadge(donation.status)}
              </div>

              {/* Body */}
              <div className="p-5 flex-1 space-y-4">
                
                <div className="bg-fuchsia-50/50 p-4 rounded-xl border border-fuchsia-100">
                   <p className="text-xs font-bold text-fuchsia-500 uppercase tracking-wider mb-1">Donated Item</p>
                   <p className="font-bold text-gray-800 text-lg leading-tight line-clamp-2">{donation.bookTitle}</p>
                   <p className="text-sm text-gray-600 mt-1">{donation.author} {donation.isbn !== 'N/A' && `• ISBN: ${donation.isbn}`}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Quantity</p>
                    <p className="font-black text-gray-800 text-xl">{donation.quantity}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Est. Value</p>
                    <p className="font-black text-emerald-600 text-xl">₹{donation.estimatedValue}</p>
                  </div>
                </div>

                {/* History Specific Views */}
                {activeTab === 'History' && donation.accessionRange && (
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">System Accessions Generated</p>
                    <p className="font-mono text-sm font-bold text-gray-800 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                      {donation.accessionRange}
                    </p>
                  </div>
                )}
                
                {activeTab === 'History' && donation.remarks && (
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Librarian Remark</p>
                    <p className="text-sm text-gray-700 italic">"{donation.remarks}"</p>
                  </div>
                )}

              </div>

              {/* Action */}
              {activeTab === 'Pending' && (
                <div className="p-5 pt-0 mt-auto">
                  <button 
                    onClick={() => openReview(donation)}
                    className="w-full py-3 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <BadgeAlert className="w-5 h-5" /> Review & Decide
                  </button>
                </div>
              )}

            </div>
          ))
        ) : (
          <div className="col-span-1 lg:col-span-2 xl:col-span-3 text-center py-16 bg-white rounded-2xl border border-gray-100 border-dashed">
            <HeartHandshake className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">No {activeTab} Donations Found</h3>
          </div>
        )}
      </div>

      {/* Add Donation Form Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            <div className="bg-fuchsia-600 p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Plus className="w-5 h-5" /> Record New Donation
              </h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-fuchsia-200 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleAddDonation} className="p-6 md:p-8 space-y-5 bg-white max-h-[75vh] overflow-y-auto">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Donor Name / Organization *</label>
                <input required type="text" value={newDonation.donorName || ""} onChange={e => setNewDonation({...newDonation, donorName: e.target.value})} placeholder="e.g. Dr. A.K. Verma" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-4">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-fuchsia-500" /> Book Details
                </h3>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Title *</label>
                  <input required type="text" value={newDonation.bookTitle || ""} onChange={e => setNewDonation({...newDonation, bookTitle: e.target.value})} placeholder="Full book title" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Author *</label>
                    <input required type="text" value={newDonation.author || ""} onChange={e => setNewDonation({...newDonation, author: e.target.value})} placeholder="Author name" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">ISBN (Optional)</label>
                    <input type="text" value={newDonation.isbn || ""} onChange={e => setNewDonation({...newDonation, isbn: e.target.value})} placeholder="ISBN Number" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 font-mono" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Quantity *</label>
                  <input required type="number" min="1" value={newDonation.quantity || ""} onChange={e => setNewDonation({...newDonation, quantity: parseInt(e.target.value)})} placeholder="Qty" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 font-black text-lg text-center" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Estimated Value (Total ₹)</label>
                  <input type="number" min="0" value={newDonation.estimatedValue || ""} onChange={e => setNewDonation({...newDonation, estimatedValue: parseInt(e.target.value)})} placeholder="₹ Amount" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-black text-lg text-emerald-700 bg-emerald-50 text-center" />
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-8 py-3 rounded-xl bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 transition-colors shadow-md">
                  Log Donation (Pending)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {isReviewModalOpen && selectedDonation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            
            <div className="bg-amber-500 p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-5 h-5" /> Review Donation
              </h2>
              <button onClick={() => setIsReviewModalOpen(false)} className="text-amber-200 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 bg-white space-y-5">
              
              <div className="text-center">
                 <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Donor</p>
                 <h3 className="text-xl font-black text-gray-900">{selectedDonation.donorName}</h3>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                   <BookOpen className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-800 line-clamp-1">{selectedDonation.bookTitle}</p>
                   <p className="text-xs font-bold text-gray-500 mt-1">Qty: <span className="text-gray-800 text-sm">{selectedDonation.quantity}</span> | Val: <span className="text-emerald-600 text-sm">₹{selectedDonation.estimatedValue}</span></p>
                 </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Review Remarks (Optional)</label>
                <textarea 
                  rows={2}
                  value={reviewRemark}
                  onChange={(e) => setReviewRemark(e.target.value)}
                  placeholder="e.g. Added to Reference Section"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none text-sm" 
                ></textarea>
              </div>

              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 mt-2">
                 <p className="text-xs font-medium text-emerald-800 flex items-center gap-1">
                   <CheckCircle2 className="w-3.5 h-3.5"/> Accepting will auto-generate {selectedDonation.quantity} accession numbers.
                 </p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => handleAction('Reject')} 
                  className="flex-1 py-3.5 bg-rose-50 text-rose-600 border border-rose-200 font-bold rounded-xl hover:bg-rose-100 transition-colors flex items-center justify-center gap-2"
                >
                  <XCircle className="w-5 h-5"/> Reject
                </button>
                <button 
                  onClick={() => handleAction('Accept')} 
                  className="flex-1 py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5"/> Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
