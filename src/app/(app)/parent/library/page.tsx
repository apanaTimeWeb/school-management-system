"use client";

import React, { useState } from 'react';
import {
  Library,
  BookOpen,
  CalendarDays,
  Clock,
  RefreshCw,
  AlertTriangle,
  Bookmark,
  Banknote,
  CheckCircle2,
  History,
  X,
  CreditCard
} from 'lucide-react';

interface IssuedBook {
  id: string;
  title: string;
  author: string;
  issuedOn: string;
  dueDate: string;
  isOverdue: boolean;
  fine: number;
}

interface ReservedBook {
  id: string;
  title: string;
  status: 'Waiting' | 'Available to Collect';
  date: string;
}

interface HistoryBook {
  id: string;
  title: string;
  issuedOn: string;
  returnedOn: string;
  status: 'Returned' | 'Lost' | 'Damaged';
}

const MOCK_ISSUED: IssuedBook[] = [
  { id: "B-1045", title: "Advanced Physics Vol 2", author: "H.C. Verma", issuedOn: "2023-11-01", dueDate: "2023-11-15", isOverdue: false, fine: 0 },
  { id: "B-2099", title: "Organic Chemistry", author: "O.P. Tandon", issuedOn: "2023-10-25", dueDate: "2023-11-08", isOverdue: true, fine: 50 },
];

const MOCK_RESERVED: ReservedBook[] = [
  { id: "R-101", title: "Harry Potter and the Goblet of Fire", status: "Waiting", date: "2023-11-10" }
];

const MOCK_HISTORY: HistoryBook[] = [
  { id: "B-3001", title: "Mathematics R.D. Sharma", issuedOn: "2023-09-10", returnedOn: "2023-09-24", status: "Returned" },
  { id: "B-1502", title: "Computer Science with Python", issuedOn: "2023-08-05", returnedOn: "2023-08-20", status: "Returned" },
];

export default function ParentLibraryDashboard() {
  const [issuedBooks, setIssuedBooks] = useState<IssuedBook[]>(MOCK_ISSUED);
  const [reservedBooks, setReservedBooks] = useState<ReservedBook[]>(MOCK_RESERVED);
  const [history] = useState<HistoryBook[]>(MOCK_HISTORY);

  const [renewingId, setRenewingId] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const totalFine = issuedBooks.reduce((sum, book) => sum + book.fine, 0);

  const handleRenew = (id: string, title: string) => {
    setRenewingId(id);
    setTimeout(() => {
      // Mock renew logic (adds 14 days)
      setIssuedBooks(books => books.map(b => {
        if (b.id === id) {
          const newDate = new Date(b.dueDate);
          newDate.setDate(newDate.getDate() + 14);
          return { ...b, dueDate: newDate.toISOString().split('T')[0], isOverdue: false, fine: 0 };
        }
        return b;
      }));
      setRenewingId(null);
      setSuccessMsg(`Successfully renewed "${title}" for 14 days.`);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Library className="w-8 h-8 text-indigo-600" />
            Library & Reading
          </h1>
          <p className="text-gray-500 mt-1">Track your ward's issued books, due dates, fines, and reading history.</p>
        </div>
      </div>

      {/* Top Stats / Fines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Current Issued</p>
            <h2 className="text-3xl font-black text-gray-900">{issuedBooks.length}</h2>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <Bookmark className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Reserved Books</p>
            <h2 className="text-3xl font-black text-gray-900">{reservedBooks.length}</h2>
          </div>
        </div>

        <div className={`bg-white rounded-3xl p-6 border shadow-sm flex items-center justify-between gap-4 ${totalFine > 0 ? 'border-rose-200 bg-rose-50/30' : 'border-gray-100'}`}>
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${totalFine > 0 ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
              <Banknote className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Library Fines</p>
              <h2 className={`text-3xl font-black ${totalFine > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                ₹{totalFine}
              </h2>
            </div>
          </div>
          {totalFine > 0 && (
            <button className="px-4 py-2 bg-rose-600 text-white font-bold rounded-xl text-sm shadow-md hover:bg-rose-700 transition-colors flex items-center gap-2">
              <CreditCard className="w-4 h-4"/> Pay
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Current & Reserved (2/3 width) */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* Issued Books */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-indigo-50/30 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Currently Issued Books</h2>
            </div>
            <div className="p-6 space-y-4">
              {issuedBooks.map(book => (
                <div key={book.id} className={`p-5 rounded-2xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${book.isOverdue ? 'border-rose-200 bg-rose-50/50' : 'border-gray-100 hover:border-indigo-200'}`}>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold font-mono text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded">{book.id}</span>
                      {book.isOverdue && <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-rose-500 px-2 py-0.5 rounded flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> Overdue</span>}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{book.title}</h3>
                    <p className="text-sm text-gray-500">By {book.author}</p>
                    
                    <div className="flex items-center gap-6 mt-4">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1"><CalendarDays className="w-3 h-3"/> Issued On</p>
                        <p className="font-medium text-sm text-gray-800">{book.issuedOn}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1"><Clock className="w-3 h-3"/> Return Due</p>
                        <p className={`font-bold text-sm ${book.isOverdue ? 'text-rose-600' : 'text-gray-800'}`}>{book.dueDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col justify-end gap-2">
                     <button 
                       onClick={() => handleRenew(book.id, book.title)}
                       disabled={renewingId === book.id || book.isOverdue}
                       className="px-5 py-2.5 bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 font-bold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
                     >
                       {renewingId === book.id ? <span className="w-4 h-4 border-2 border-indigo-700/30 border-t-indigo-700 rounded-full animate-spin"></span> : <RefreshCw className="w-4 h-4" />}
                       {renewingId === book.id ? 'Renewing...' : 'Renew Book'}
                     </button>
                     {book.isOverdue && <p className="text-xs text-rose-500 font-bold text-center">Cannot renew overdue book</p>}
                  </div>

                </div>
              ))}
              {issuedBooks.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500 font-medium">No books are currently issued.</p>
                </div>
              )}
            </div>
          </div>

          {/* Reserved Books */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-amber-50/30 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                <Bookmark className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Reserved / On-Hold</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {reservedBooks.map(book => (
                  <div key={book.id} className="p-4 rounded-2xl border border-gray-100 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{book.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">Reserved on: {book.date}</p>
                    </div>
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 border border-amber-200 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5"/> {book.status}
                    </span>
                  </div>
                ))}
                {reservedBooks.length === 0 && (
                  <div className="text-center py-6">
                    <p className="text-gray-500 text-sm">No active reservations.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Library History */}
        <div className="xl:col-span-1">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-full">
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center">
                <History className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Reading History</h2>
            </div>
            <div className="p-6 space-y-4">
              {history.map(book => (
                <div key={book.id} className="p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{book.title}</h3>
                  <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    <span>Issued: {book.issuedOn}</span>
                    <span>Ret: {book.returnedOn}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1 w-max">
                      <CheckCircle2 className="w-3 h-3" /> {book.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300 z-50">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <p className="font-bold text-sm">{successMsg}</p>
          <button onClick={() => setShowSuccess(false)} className="text-gray-400 hover:text-white ml-2">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

    </div>
  );
}
