"use client";

import React, { useState } from "react";
import {
  ListTree,
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  Bookmark,
  AlertTriangle,
  Banknote,
  Edit3,
  Calendar,
  X,
  Printer,
  ChevronRight,
  User,
  Book,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";

type TransactionCategory = 'Issue' | 'Return' | 'Renewal' | 'Reservation' | 'Lost/Damaged' | 'Fine Payment' | 'Adjustment';
type TrxStatus = 'Success' | 'Pending' | 'Cancelled';
type Role = 'Student' | 'Staff' | 'Teacher' | 'All';

interface LibraryTransaction {
  id: string;
  category: TransactionCategory;
  date: string;
  time: string;
  memberId: string;
  memberName: string;
  memberRole: Role;
  memberClass?: string;
  bookTitle?: string;
  bookBarcode?: string;
  amount?: number;
  status: TrxStatus;
  details: string;
}

const MOCK_TRANSACTIONS: LibraryTransaction[] = [
  {
    id: "TRX-5001",
    category: "Issue",
    date: "2023-11-01",
    time: "09:15 AM",
    memberId: "LIB-STU-012",
    memberName: "Rahul Sharma",
    memberRole: "Student",
    memberClass: "10-A",
    bookTitle: "Mathematics Class 10",
    bookBarcode: "890123456002",
    status: "Success",
    details: "Issued for 14 days. Due on 2023-11-15."
  },
  {
    id: "TRX-5002",
    category: "Fine Payment",
    date: "2023-11-01",
    time: "10:30 AM",
    memberId: "LIB-TEA-005",
    memberName: "Priya Singh",
    memberRole: "Teacher",
    amount: 150,
    status: "Success",
    details: "Late fine paid via Cash."
  },
  {
    id: "TRX-5003",
    category: "Return",
    date: "2023-11-02",
    time: "11:45 AM",
    memberId: "LIB-STU-088",
    memberName: "Vikram Gupta",
    memberRole: "Student",
    memberClass: "12-B",
    bookTitle: "Advanced Physics",
    bookBarcode: "890123456015",
    status: "Success",
    details: "Returned on time. Condition: Good."
  },
  {
    id: "TRX-5004",
    category: "Reservation",
    date: "2023-11-02",
    time: "01:20 PM",
    memberId: "LIB-STF-001",
    memberName: "Amit Kumar",
    memberRole: "Staff",
    bookTitle: "Management Principles",
    status: "Pending",
    details: "Added to Queue Pos #1."
  },
  {
    id: "TRX-5005",
    category: "Lost/Damaged",
    date: "2023-11-03",
    time: "02:10 PM",
    memberId: "LIB-STU-112",
    memberName: "Sneha Sharma",
    memberRole: "Student",
    memberClass: "9-C",
    bookTitle: "English Grammar",
    bookBarcode: "890123456022",
    amount: 350,
    status: "Success",
    details: "Reported Damaged (Water). Fine assessed."
  },
  {
    id: "TRX-5006",
    category: "Renewal",
    date: "2023-11-03",
    time: "03:30 PM",
    memberId: "LIB-STU-012",
    memberName: "Rahul Sharma",
    memberRole: "Student",
    memberClass: "10-A",
    bookTitle: "Mathematics Class 10",
    bookBarcode: "890123456002",
    status: "Cancelled",
    details: "Renewal blocked: Max limit reached."
  },
  {
    id: "TRX-5007",
    category: "Adjustment",
    date: "2023-11-04",
    time: "10:00 AM",
    memberId: "LIB-STU-045",
    memberName: "Neha Patel",
    memberRole: "Student",
    memberClass: "11-A",
    amount: 50,
    status: "Success",
    details: "Fine waived by Librarian (Medical Reason)."
  }
];

export default function CentralTransactions() {
  const [transactions, setTransactions] = useState<LibraryTransaction[]>(MOCK_TRANSACTIONS);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role>('All');
  const [categoryFilter, setCategoryFilter] = useState<TransactionCategory | 'All'>('All');
  const [statusFilter, setStatusFilter] = useState<TrxStatus | 'All'>('All');
  const [dateFilter, setDateFilter] = useState("");

  // Modal
  const [selectedTrx, setSelectedTrx] = useState<LibraryTransaction | null>(null);

  // Derived filtered data
  const filteredData = transactions.filter(t => {
    const matchesSearch = t.memberName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.memberId.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.bookTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'All' || t.memberRole === roleFilter;
    const matchesCat = categoryFilter === 'All' || t.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
    const matchesDate = dateFilter === "" || t.date === dateFilter;

    return matchesSearch && matchesRole && matchesCat && matchesStatus && matchesDate;
  });

  const getCategoryBadge = (cat: TransactionCategory) => {
    switch (cat) {
      case 'Issue': return <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max"><ArrowUpRight className="w-3.5 h-3.5"/> Issue</span>;
      case 'Return': return <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max"><ArrowDownLeft className="w-3.5 h-3.5"/> Return</span>;
      case 'Renewal': return <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max"><RefreshCw className="w-3.5 h-3.5"/> Renewal</span>;
      case 'Reservation': return <span className="bg-fuchsia-100 text-fuchsia-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max"><Bookmark className="w-3.5 h-3.5"/> Reserve</span>;
      case 'Lost/Damaged': return <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max"><AlertTriangle className="w-3.5 h-3.5"/> Damaged</span>;
      case 'Fine Payment': return <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max"><Banknote className="w-3.5 h-3.5"/> Payment</span>;
      case 'Adjustment': return <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 w-max"><Edit3 className="w-3.5 h-3.5"/> Adjust</span>;
    }
  };

  const getStatusBadge = (status: TrxStatus) => {
    switch (status) {
      case 'Success': return <span className="text-emerald-500 flex items-center gap-1 font-bold text-xs"><CheckCircle2 className="w-4 h-4"/> Success</span>;
      case 'Pending': return <span className="text-amber-500 flex items-center gap-1 font-bold text-xs"><Clock className="w-4 h-4"/> Pending</span>;
      case 'Cancelled': return <span className="text-rose-500 flex items-center gap-1 font-bold text-xs"><XCircle className="w-4 h-4"/> Cancelled</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <ListTree className="w-8 h-8 text-teal-600" />
          Central Transactions
        </h1>
        <p className="text-gray-500 mt-1">Master log of all library activities, filterable by various parameters.</p>
      </div>

      {/* Advanced Filters */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex items-center gap-2 mb-4 text-gray-700 font-bold text-sm">
          <Filter className="w-4 h-4" /> Filter Records
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
            <input 
              type="text" 
              placeholder="Search Name, Book, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-gray-50/50"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <select 
            value={roleFilter} 
            onChange={(e) => setRoleFilter(e.target.value as Role)}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-gray-50/50"
          >
            <option value="All">All Roles</option>
            <option value="Student">Students Only</option>
            <option value="Teacher">Teachers Only</option>
            <option value="Staff">Staff Only</option>
          </select>

          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value as TransactionCategory | 'All')}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-gray-50/50"
          >
            <option value="All">All Categories</option>
            <option value="Issue">Issue</option>
            <option value="Return">Return</option>
            <option value="Renewal">Renewal</option>
            <option value="Reservation">Reservation</option>
            <option value="Lost/Damaged">Lost/Damaged</option>
            <option value="Fine Payment">Fine Payment</option>
            <option value="Adjustment">Adjustment</option>
          </select>

          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value as TrxStatus | 'All')}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-gray-50/50"
          >
            <option value="All">All Statuses</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <input 
            type="date" 
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-gray-50/50 text-gray-600"
          />
        </div>
      </div>

      {/* Transactions Table/List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="py-3 px-6 font-bold">Transaction ID / Date</th>
                <th className="py-3 px-6 font-bold">Category</th>
                <th className="py-3 px-6 font-bold">Member Details</th>
                <th className="py-3 px-6 font-bold">Subject (Book/Amount)</th>
                <th className="py-3 px-6 font-bold">Status</th>
                <th className="py-3 px-6 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.length > 0 ? (
                filteredData.map((trx) => (
                  <tr 
                    key={trx.id} 
                    className="hover:bg-teal-50/30 transition-colors group cursor-pointer"
                    onClick={() => setSelectedTrx(trx)}
                  >
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-900 text-sm">{trx.id}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{trx.date} • {trx.time}</p>
                    </td>
                    <td className="py-4 px-6">
                      {getCategoryBadge(trx.category)}
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-800 text-sm">{trx.memberName}</p>
                      <p className="text-xs text-gray-500 font-mono mt-0.5">
                        {trx.memberRole} {trx.memberClass ? `(${trx.memberClass})` : ''}
                      </p>
                    </td>
                    <td className="py-4 px-6">
                      {trx.bookTitle ? (
                        <>
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{trx.bookTitle}</p>
                          {trx.bookBarcode && <p className="text-xs text-gray-400 font-mono mt-0.5">BC: {trx.bookBarcode}</p>}
                        </>
                      ) : (
                        <p className="text-sm font-black text-emerald-600">₹{trx.amount}</p>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(trx.status)}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-teal-500 ml-auto transition-colors" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-16 text-center">
                    <ListTree className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-gray-800 mb-1">No Transactions Found</h3>
                    <p className="text-gray-500 text-sm">Adjust your filters to see more results.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction Details Modal (Receipt) */}
      {selectedTrx && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            
            {/* Header */}
            <div className="bg-teal-600 p-6 flex justify-between items-start text-white relative">
              <div>
                <p className="text-teal-100 text-xs font-bold uppercase tracking-wider mb-1">Transaction Receipt</p>
                <h2 className="text-2xl font-black">{selectedTrx.id}</h2>
                <div className="mt-3 bg-white/20 px-3 py-1 rounded inline-block">
                  {getCategoryBadge(selectedTrx.category)}
                </div>
              </div>
              <button onClick={() => setSelectedTrx(null)} className="text-teal-100 hover:text-white p-1 rounded-lg hover:bg-teal-700 transition-colors">
                <X className="w-6 h-6" />
              </button>
              {/* Ticket zigzag */}
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-[radial-gradient(circle,white_4px,transparent_4px)] bg-[length:16px_16px] bg-repeat-x"></div>
            </div>
            
            {/* Body */}
            <div className="p-8 pt-6 space-y-6 bg-white relative">
              
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-bold text-gray-700">{selectedTrx.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-bold text-gray-700">{selectedTrx.time}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Member Info</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center font-bold">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{selectedTrx.memberName}</p>
                    <p className="text-xs text-gray-500 font-mono">{selectedTrx.memberId} • {selectedTrx.memberRole} {selectedTrx.memberClass ? `(${selectedTrx.memberClass})` : ''}</p>
                  </div>
                </div>
              </div>

              {selectedTrx.bookTitle && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Item</h4>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                      <Book className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 line-clamp-2">{selectedTrx.bookTitle}</p>
                      {selectedTrx.bookBarcode && <p className="text-xs text-gray-500 font-mono mt-0.5">Barcode: {selectedTrx.bookBarcode}</p>}
                    </div>
                  </div>
                </div>
              )}

              {selectedTrx.amount !== undefined && (
                <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl flex justify-between items-center">
                  <h4 className="text-sm font-bold text-rose-800 uppercase tracking-wider">Amount Processed</h4>
                  <p className="text-2xl font-black text-rose-600">₹{selectedTrx.amount}</p>
                </div>
              )}

              <div className="border-t border-dashed border-gray-200 pt-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Transaction Details</h4>
                <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {selectedTrx.details}
                </p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className="text-xs font-bold text-gray-500 uppercase">System Status</span>
                {getStatusBadge(selectedTrx.status)}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button onClick={() => setSelectedTrx(null)} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                  Close
                </button>
                <button className="flex-1 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-md flex items-center justify-center gap-2">
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
