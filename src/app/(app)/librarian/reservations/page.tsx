"use client";

import React, { useState } from "react";
import {
  Bookmark,
  Search,
  Plus,
  Clock,
  CheckCircle2,
  XCircle,
  BellRing,
  AlertTriangle,
  History,
  BookOpen,
  User,
  MoreVertical,
  X,
  BookUp,
  AlertCircle
} from "lucide-react";

type ReservationStatus = 'Waiting' | 'Ready for Pickup' | 'Fulfilled' | 'Expired' | 'Cancelled';

interface Reservation {
  id: string;
  bookId: string;
  bookTitle: string;
  memberId: string;
  memberName: string;
  memberRole: string;
  reservationDate: string;
  priority: number;
  status: ReservationStatus;
  holdExpiryDate?: string; // Only applicable if status is 'Ready for Pickup'
  resolvedDate?: string;
}

const MOCK_RESERVATIONS: Reservation[] = [
  {
    id: "RES-1001",
    bookId: "B-1005",
    bookTitle: "Introduction to Algorithms",
    memberId: "LIB-STU-045",
    memberName: "Sanjay Kumar",
    memberRole: "Student",
    reservationDate: "2023-10-15",
    priority: 1,
    status: "Ready for Pickup",
    holdExpiryDate: "2023-10-18" // e.g. 3 days hold period
  },
  {
    id: "RES-1002",
    bookId: "B-2050",
    bookTitle: "Organic Chemistry Vol 2",
    memberId: "LIB-TEA-012",
    memberName: "Dr. Anjali Desai",
    memberRole: "Teacher",
    reservationDate: "2023-10-16",
    priority: 1,
    status: "Waiting",
  },
  {
    id: "RES-1003",
    bookId: "B-2050",
    bookTitle: "Organic Chemistry Vol 2",
    memberId: "LIB-STU-112",
    memberName: "Vikram Singh",
    memberRole: "Student",
    reservationDate: "2023-10-17",
    priority: 2,
    status: "Waiting",
  },
  {
    id: "RES-0998",
    bookId: "B-1010",
    bookTitle: "Physics HC Verma",
    memberId: "LIB-STU-088",
    memberName: "Pooja Sharma",
    memberRole: "Student",
    reservationDate: "2023-10-01",
    priority: 1,
    status: "Fulfilled",
    resolvedDate: "2023-10-05"
  },
  {
    id: "RES-0995",
    bookId: "B-3022",
    bookTitle: "Harry Potter",
    memberId: "LIB-STU-022",
    memberName: "Rahul Verma",
    memberRole: "Student",
    reservationDate: "2023-09-25",
    priority: 1,
    status: "Expired",
    resolvedDate: "2023-09-30"
  }
];

export default function ReservationsHolds() {
  const [reservations, setReservations] = useState<Reservation[]>(MOCK_RESERVATIONS);
  const [activeTab, setActiveTab] = useState<'Active' | 'History'>('Active');
  const [searchQuery, setSearchQuery] = useState("");

  // Modals
  const [isNewResModalOpen, setIsNewResModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedRes, setSelectedRes] = useState<Reservation | null>(null);

  // New Reservation Form State
  const [newRes, setNewRes] = useState({ bookId: "", memberId: "", priority: 1 });

  // Filter Data
  const activeReservations = reservations.filter(r => (r.status === 'Waiting' || r.status === 'Ready for Pickup') && (r.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) || r.memberName.toLowerCase().includes(searchQuery.toLowerCase())));
  const historyReservations = reservations.filter(r => (r.status === 'Fulfilled' || r.status === 'Expired' || r.status === 'Cancelled') && (r.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) || r.memberName.toLowerCase().includes(searchQuery.toLowerCase())));

  const displayData = activeTab === 'Active' ? activeReservations : historyReservations;

  // Handlers
  const handleCreateReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Reservation = {
      id: `RES-${Date.now().toString().slice(-4)}`,
      bookId: newRes.bookId || "B-9999",
      bookTitle: "Newly Reserved Book", // Mocked title
      memberId: newRes.memberId || "LIB-STU-999",
      memberName: "New Member", // Mocked name
      memberRole: "Student",
      reservationDate: new Date().toISOString().split('T')[0],
      priority: Number(newRes.priority),
      status: "Waiting"
    };
    setReservations([created, ...reservations]);
    setIsNewResModalOpen(false);
    setNewRes({ bookId: "", memberId: "", priority: 1 });
  };

  const handleSendAlert = () => {
    // In real app, sends email/SMS
    alert(`Notification sent to ${selectedRes?.memberName} for book ${selectedRes?.bookTitle}.`);
    setIsAlertModalOpen(false);
  };

  const handleIssueBook = (res: Reservation) => {
    // Simulate issuing the book and fulfilling the reservation
    const updated = reservations.map(r => 
      r.id === res.id 
        ? { ...r, status: 'Fulfilled' as ReservationStatus, resolvedDate: new Date().toISOString().split('T')[0] } 
        : r
    );
    setReservations(updated);
    alert(`Book Issued successfully. Reservation fulfilled.`);
  };

  const handleCancelReservation = () => {
    if (selectedRes) {
      const updated = reservations.map(r => 
        r.id === selectedRes.id 
          ? { ...r, status: 'Cancelled' as ReservationStatus, resolvedDate: new Date().toISOString().split('T')[0] } 
          : r
      );
      setReservations(updated);
      setIsCancelModalOpen(false);
    }
  };

  const openAlertModal = (res: Reservation) => {
    setSelectedRes(res);
    setIsAlertModalOpen(true);
  };

  const openCancelModal = (res: Reservation) => {
    setSelectedRes(res);
    setIsCancelModalOpen(true);
  };

  const getStatusBadge = (status: ReservationStatus) => {
    switch (status) {
      case 'Waiting': return <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><Clock className="w-3.5 h-3.5"/> Waiting</span>;
      case 'Ready for Pickup': return <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><CheckCircle2 className="w-3.5 h-3.5"/> Ready for Pickup</span>;
      case 'Fulfilled': return <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><BookUp className="w-3.5 h-3.5"/> Fulfilled</span>;
      case 'Expired': return <span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><XCircle className="w-3.5 h-3.5"/> Expired</span>;
      case 'Cancelled': return <span className="bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><XCircle className="w-3.5 h-3.5"/> Cancelled</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Bookmark className="w-8 h-8 text-fuchsia-600" />
            Reservations & Holds
          </h1>
          <p className="text-gray-500 mt-1">Manage book waitlists, priorities, and pickup holds.</p>
        </div>
        <button 
          onClick={() => setIsNewResModalOpen(true)}
          className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> Reserve Book
        </button>
      </div>

      {/* Tabs & Search */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('Active')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'Active' ? 'bg-fuchsia-50 text-fuchsia-700' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Clock className="w-4 h-4" /> Active Queue
          </button>
          <button 
            onClick={() => setActiveTab('History')}
            className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex-1 md:flex-none flex items-center justify-center gap-2 ${activeTab === 'History' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <History className="w-4 h-4" /> History
          </button>
        </div>
        
        <div className="relative w-full md:w-80 shrink-0">
          <input 
            type="text" 
            placeholder="Search Book or Member..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Reservations List */}
      <div className="space-y-4">
        {displayData.length > 0 ? (
          displayData.map((res) => (
            <div key={res.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden group">
              
              {/* Highlight bar for Ready to pickup */}
              {res.status === 'Ready for Pickup' && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
              )}

              {/* Priority / Queue Pos */}
              {activeTab === 'Active' && res.status === 'Waiting' && (
                <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-3 min-w-[70px] border border-gray-100 shrink-0">
                  <span className="text-[10px] uppercase font-bold text-gray-400">Queue Pos</span>
                  <span className="text-2xl font-black text-gray-700">#{res.priority}</span>
                </div>
              )}

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Book Info */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fuchsia-100 text-fuchsia-600 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">{res.bookTitle}</h3>
                    <p className="text-gray-500 text-xs font-mono mt-0.5">Book ID: {res.bookId}</p>
                    <p className="text-gray-400 text-xs mt-1">Reserved on: {res.reservationDate}</p>
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                    {res.memberName.substring(0,2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 leading-tight">{res.memberName}</h3>
                    <p className="text-gray-500 text-xs font-mono mt-0.5">{res.memberId} • {res.memberRole}</p>
                  </div>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="flex flex-col md:items-end gap-3 shrink-0 w-full md:w-auto border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                <div className="flex justify-between items-center w-full md:w-auto gap-4">
                  {getStatusBadge(res.status)}
                  {res.status === 'Ready for Pickup' && (
                    <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded">Expires: {res.holdExpiryDate}</span>
                  )}
                  {activeTab === 'History' && res.resolvedDate && (
                    <span className="text-xs text-gray-500">Resolved: {res.resolvedDate}</span>
                  )}
                </div>

                {activeTab === 'Active' && (
                  <div className="flex gap-2 w-full mt-1">
                    {res.status === 'Ready for Pickup' ? (
                      <>
                        <button onClick={() => openAlertModal(res)} className="flex-1 md:flex-none py-1.5 px-3 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1 border border-blue-200">
                          <BellRing className="w-4 h-4" /> Send Alert
                        </button>
                        <button onClick={() => handleIssueBook(res)} className="flex-1 md:flex-none py-1.5 px-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1 shadow-sm">
                          <BookUp className="w-4 h-4" /> Issue Book
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => openCancelModal(res)} className="flex-1 md:flex-none py-1.5 px-3 bg-gray-50 text-gray-600 hover:bg-rose-50 hover:text-rose-600 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1 border border-gray-200">
                          <X className="w-4 h-4" /> Cancel Hold
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
              
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 border-dashed">
            <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">No Reservations Found</h3>
            <p className="text-gray-500 text-sm">There are no {activeTab.toLowerCase()} reservations matching your criteria.</p>
          </div>
        )}
      </div>


      {/* New Reservation Modal */}
      {isNewResModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Plus className="w-5 h-5 text-fuchsia-600" />
                Reserve Book (Manual)
              </h2>
              <button onClick={() => setIsNewResModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleCreateReservation} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Member ID *</label>
                <input 
                  required type="text" 
                  value={newRes.memberId}
                  onChange={(e) => setNewRes({...newRes, memberId: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                  placeholder="e.g. LIB-STU-001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Book ID / Barcode *</label>
                <input 
                  required type="text" 
                  value={newRes.bookId}
                  onChange={(e) => setNewRes({...newRes, bookId: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                  placeholder="e.g. B-1005"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority / Queue Override</label>
                <input 
                  type="number" min="1"
                  value={newRes.priority}
                  onChange={(e) => setNewRes({...newRes, priority: parseInt(e.target.value)})}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" 
                />
                <p className="text-xs text-gray-500 mt-1">Default adds to end of queue.</p>
              </div>

              <div className="mt-8 flex gap-3 pt-2">
                <button type="button" onClick={() => setIsNewResModalOpen(false)} className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 py-2.5 rounded-xl bg-fuchsia-600 text-white font-medium hover:bg-fuchsia-700 transition-colors shadow-sm">
                  Place Hold
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Alert Notification Modal */}
      {isAlertModalOpen && selectedRes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BellRing className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send Availability Alert</h3>
            <p className="text-gray-500 text-sm mb-6">
              Send an email/SMS to <span className="font-bold text-gray-800">{selectedRes.memberName}</span> notifying them that <span className="font-bold text-gray-800">"{selectedRes.bookTitle}"</span> is ready for pickup.
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={handleSendAlert} className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                Send Notification
              </button>
              <button onClick={() => setIsAlertModalOpen(false)} className="w-full py-2.5 text-gray-500 hover:text-gray-700 font-medium transition-colors mt-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Hold Confirmation Modal */}
      {isCancelModalOpen && selectedRes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Cancel Reservation?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Are you sure you want to cancel the reservation for <span className="font-bold text-gray-800">"{selectedRes.bookTitle}"</span> by <span className="font-bold text-gray-800">{selectedRes.memberName}</span>?
              The next person in queue will be promoted.
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={handleCancelReservation} className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-medium transition-colors">
                Yes, Cancel Hold
              </button>
              <button onClick={() => setIsCancelModalOpen(false)} className="w-full py-2.5 text-gray-500 hover:text-gray-700 font-medium transition-colors mt-2">
                Keep Hold
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
