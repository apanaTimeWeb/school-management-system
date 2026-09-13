"use client";
import React from 'react';
import { X, BookOpenCheck, AlertTriangle, UserSquare, CalendarClock } from 'lucide-react';
import { usePrincipalLibraryStore } from '../library_store/usePrincipalLibraryStore';
import clsx from 'clsx';

export default function PrincipalLibraryBookModal() {
  const { selectedBook, setSelectedBook } = usePrincipalLibraryStore();

  if (!selectedBook) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-lg bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <BookOpenCheck className="text-primary" size={18} /> 
            Borrowing Details
          </h2>
          <button 
            onClick={() => setSelectedBook(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5">
          
          <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <h3 className="text-[18px] font-bold text-text-primary mb-1">{selectedBook.bookTitle}</h3>
              <p className="text-[13px] text-text-secondary">Author: {selectedBook.author}</p>
              <p className="text-[12px] text-text-secondary mt-1 font-mono">Book ID: {selectedBook.bookId} | Category: {selectedBook.category}</p>
            </div>
            <span className={clsx("inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border", 
              selectedBook.status === 'Issued' ? 'bg-primary/10 text-primary border-primary/30' :
              selectedBook.status === 'Overdue' ? 'bg-danger/10 text-danger border-danger/30' :
              'bg-success/10 text-success border-success/30'
            )}>
              {selectedBook.status}
            </span>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg flex flex-col gap-3">
            <h4 className="text-[13px] font-bold text-text-secondary flex items-center gap-2"><UserSquare size={14}/> Borrower Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] text-text-secondary mb-0.5">Name</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedBook.borrowerName}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary mb-0.5">{selectedBook.borrowerType === 'Student' ? 'Class & Section' : 'Role'}</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedBook.classAndSection || 'Staff'}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary mb-0.5">ID</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedBook.borrowerId}</p>
              </div>
              <div>
                <p className="text-[11px] text-text-secondary mb-0.5">Type</p>
                <p className="text-[14px] font-bold text-info bg-info/10 px-2 py-0.5 rounded inline-block">{selectedBook.borrowerType}</p>
              </div>
            </div>
          </div>

          <div className={clsx("bg-card border p-4 rounded-lg flex flex-col gap-3", selectedBook.status === 'Overdue' ? 'border-danger/30 bg-danger/5' : 'border-border')}>
            <h4 className="text-[13px] font-bold text-text-secondary flex items-center gap-2"><CalendarClock size={14}/> Timeline</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] text-text-secondary mb-0.5">Issue Date</p>
                <p className="text-[14px] font-bold text-text-primary">{selectedBook.issueDate}</p>
              </div>
              <div>
                <p className={clsx("text-[11px] mb-0.5", selectedBook.status === 'Overdue' ? 'text-danger' : 'text-text-secondary')}>Due Date</p>
                <p className={clsx("text-[14px] font-bold", selectedBook.status === 'Overdue' ? 'text-danger flex items-center gap-2' : 'text-text-primary')}>
                  {selectedBook.dueDate}
                  {selectedBook.status === 'Overdue' && <AlertTriangle size={14}/>}
                </p>
              </div>
              {selectedBook.returnDate && (
                <div>
                  <p className="text-[11px] text-text-secondary mb-0.5">Return Date</p>
                  <p className="text-[14px] font-bold text-text-primary">{selectedBook.returnDate}</p>
                </div>
              )}
              {selectedBook.fineAmount !== undefined && selectedBook.fineAmount > 0 && (
                <div>
                  <p className="text-[11px] text-danger mb-0.5">Fine Amount</p>
                  <p className="text-[14px] font-bold text-danger">₹{selectedBook.fineAmount}</p>
                </div>
              )}
            </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedBook(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
