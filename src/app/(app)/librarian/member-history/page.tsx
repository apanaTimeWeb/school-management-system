"use client";

import React, { useState } from "react";
import {
  UserSearch,
  Search,
  User,
  GraduationCap,
  Phone,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  History,
  Banknote,
  Bookmark,
  Calendar,
  Clock,
  ArrowDownLeft,
  XCircle,
  RefreshCw
} from "lucide-react";

type ProfileTab = 'Current' | 'History' | 'Fines' | 'Reservations';

const MOCK_MEMBER_PROFILE = {
  id: "LIB-STU-012",
  name: "Rahul Sharma",
  role: "Student",
  class: "10-A",
  phone: "+91 9876543210",
  status: "Active",
  totalFineDues: 150,
  currentBooks: [
    { id: "B-2050", title: "Organic Chemistry Vol 2", issueDate: "2023-11-01", dueDate: "2023-11-15", renewals: 0, status: "Normal" },
    { id: "B-3001", title: "English Grammar", issueDate: "2023-11-02", dueDate: "2023-11-06", renewals: 1, status: "Overdue" }
  ],
  previousBooks: [
    { id: "B-1088", title: "Advanced Physics", issueDate: "2023-10-05", dueDate: "2023-10-19", returnDate: "2023-10-21", renewals: 1, status: "Returned Late" },
    { id: "B-4001", title: "Mathematics Class 10", issueDate: "2023-09-01", dueDate: "2023-09-15", returnDate: "2023-09-10", renewals: 0, status: "Returned on Time" },
    { id: "B-1011", title: "History of India", issueDate: "2023-08-10", dueDate: "2023-08-24", returnDate: "N/A", renewals: 0, status: "Lost/Damaged" }
  ],
  fines: [
    { id: "F-991", type: "Late Return (B-1088)", amount: 50, date: "2023-10-21", status: "Paid" },
    { id: "F-992", type: "Lost Book Penalty (B-1011)", amount: 150, date: "2023-11-02", status: "Unpaid" }
  ],
  reservations: [
    { id: "R-501", title: "Computer Science with Python", requestDate: "2023-11-05", status: "Queue Pos: 2" },
    { id: "R-442", title: "Concepts of Physics", requestDate: "2023-10-15", status: "Fulfilled" }
  ]
};

export default function MemberHistory() {
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [profile, setProfile] = useState<typeof MOCK_MEMBER_PROFILE | null>(null);
  const [activeTab, setActiveTab] = useState<ProfileTab>('Current');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput) return;
    setIsSearching(true);
    
    // Simulate API search
    setTimeout(() => {
      setProfile(MOCK_MEMBER_PROFILE);
      setIsSearching(false);
      setActiveTab('Current');
    }, 800);
  };

  const getStatusColor = (status: string) => {
    if (status.includes('Normal') || status.includes('Time') || status.includes('Paid') || status.includes('Fulfilled')) return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (status.includes('Overdue') || status.includes('Unpaid') || status.includes('Lost')) return 'bg-rose-100 text-rose-700 border-rose-200';
    if (status.includes('Late') || status.includes('Queue')) return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <UserSearch className="w-8 h-8 text-indigo-600" />
          Member Library History
        </h1>
        <p className="text-gray-500 mt-1">Look up complete library lifecycles, dues, and reading habits of members.</p>
      </div>

      {/* Big Search Bar */}
      <form onSubmit={handleSearch} className="mb-8 max-w-2xl bg-white p-3 rounded-2xl shadow-sm border border-gray-200 flex gap-2">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Search by Member ID, Name, or Phone..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border-none focus:outline-none focus:ring-0 text-base bg-gray-50/50"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
        <button 
          type="submit" 
          disabled={isSearching}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-sm disabled:opacity-70 flex items-center gap-2"
        >
          {isSearching ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : 'Search'}
        </button>
      </form>

      {/* Initial Empty State */}
      {!profile && !isSearching && (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <UserSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Search to Load Profile</h3>
          <p className="text-gray-500">Enter a student or staff ID above to view their complete history.</p>
        </div>
      )}

      {/* Member Profile View */}
      {profile && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Top Info Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
             
             {/* Decorative Background */}
             <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-50"></div>

             <div className="flex items-center gap-5 z-10">
               <div className="w-20 h-20 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center border-4 border-white shadow-sm shrink-0">
                 <User className="w-10 h-10" />
               </div>
               <div>
                 <div className="flex items-center gap-3 mb-1">
                   <h2 className="text-3xl font-black text-gray-900">{profile.name}</h2>
                   <span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border border-emerald-200">
                     {profile.status}
                   </span>
                 </div>
                 <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
                   <span className="flex items-center gap-1.5"><Search className="w-4 h-4 text-gray-400"/> ID: {profile.id}</span>
                   <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-gray-400"/> {profile.role} ({profile.class})</span>
                   <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-gray-400"/> {profile.phone}</span>
                 </div>
               </div>
             </div>

             <div className={`p-4 rounded-2xl border flex flex-col items-end shrink-0 z-10 ${profile.totalFineDues > 0 ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50 border-emerald-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${profile.totalFineDues > 0 ? 'text-rose-400' : 'text-emerald-500'}`}>Total Outstanding Dues</p>
                <p className={`text-3xl font-black ${profile.totalFineDues > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                  ₹{profile.totalFineDues}
                </p>
             </div>
          </div>

          {/* Profile Tabs */}
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 mb-6 flex overflow-x-auto">
            <button onClick={() => setActiveTab('Current')} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === 'Current' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-500 hover:bg-gray-50'}`}>
              <BookOpen className="w-4 h-4" /> Current Books ({profile.currentBooks.length})
            </button>
            <button onClick={() => setActiveTab('History')} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === 'History' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-50'}`}>
              <History className="w-4 h-4" /> Past History ({profile.previousBooks.length})
            </button>
            <button onClick={() => setActiveTab('Fines')} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === 'Fines' ? 'bg-rose-50 text-rose-700' : 'text-gray-500 hover:bg-gray-50'}`}>
              <Banknote className="w-4 h-4" /> Fines/Losses ({profile.fines.length})
            </button>
            <button onClick={() => setActiveTab('Reservations')} className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === 'Reservations' ? 'bg-amber-50 text-amber-700' : 'text-gray-500 hover:bg-gray-50'}`}>
              <Bookmark className="w-4 h-4" /> Reservations
            </button>
          </div>

          {/* Tab Content Areas */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* 1. CURRENT BOOKS */}
            {activeTab === 'Current' && (
              <div>
                <div className="p-6 border-b border-gray-100 bg-indigo-50/30">
                  <h3 className="font-bold text-gray-800 text-lg">Currently Issued Books</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {profile.currentBooks.map(book => (
                    <div key={book.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg mb-0.5">{book.title}</p>
                          <p className="text-xs text-gray-500 font-mono">ID: {book.id}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 md:gap-8 items-center bg-gray-50 p-3 rounded-xl border border-gray-100 w-full md:w-auto">
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Issue Date</p>
                          <p className="font-bold text-gray-800 text-sm">{book.issueDate}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Due Date</p>
                          <p className="font-bold text-gray-800 text-sm">{book.dueDate}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Renewals</p>
                          <p className="font-bold text-gray-800 text-sm text-center">{book.renewals}</p>
                        </div>
                        <div className="ml-auto">
                          <span className={`px-3 py-1 rounded-md text-xs font-bold border ${getStatusColor(book.status)}`}>
                            {book.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. HISTORY */}
            {activeTab === 'History' && (
              <div>
                <div className="p-6 border-b border-gray-100 bg-gray-50/80">
                  <h3 className="font-bold text-gray-800 text-lg">Past Reading History</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {profile.previousBooks.map(book => (
                    <div key={book.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center shrink-0">
                          <History className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-lg mb-0.5 line-clamp-1">{book.title}</p>
                          <p className="text-xs text-gray-500 font-mono">ID: {book.id}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 md:gap-8 items-center bg-gray-50 p-3 rounded-xl border border-gray-100 w-full md:w-auto">
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Issue</p>
                          <p className="font-bold text-gray-700 text-xs">{book.issueDate}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Due</p>
                          <p className="font-bold text-gray-700 text-xs">{book.dueDate}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Returned</p>
                          <p className="font-bold text-gray-900 text-xs">{book.returnDate}</p>
                        </div>
                        <div className="ml-auto">
                          <span className={`px-2 py-1 rounded text-[10px] font-bold border ${getStatusColor(book.status)}`}>
                            {book.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. FINES */}
            {activeTab === 'Fines' && (
              <div>
                <div className="p-6 border-b border-gray-100 bg-rose-50/30">
                  <h3 className="font-bold text-gray-800 text-lg">Fines & Penalties Ledger</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {profile.fines.map(fine => (
                    <div key={fine.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${fine.status === 'Paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                          <Banknote className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{fine.type}</p>
                          <p className="text-xs text-gray-500 mt-0.5">Record: {fine.id} • Date: {fine.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-black text-xl mb-1 ${fine.status === 'Paid' ? 'text-gray-400' : 'text-rose-600'}`}>₹{fine.amount}</p>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(fine.status)}`}>
                          {fine.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. RESERVATIONS */}
            {activeTab === 'Reservations' && (
              <div>
                <div className="p-6 border-b border-gray-100 bg-amber-50/30">
                  <h3 className="font-bold text-gray-800 text-lg">Reservation Requests</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {profile.reservations.map(res => (
                    <div key={res.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                          <Bookmark className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{res.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">Req ID: {res.id} • Requested on: {res.requestDate}</p>
                        </div>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(res.status)}`}>
                          {res.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
