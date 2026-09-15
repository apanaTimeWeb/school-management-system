"use client";

import React, { useState } from 'react';
import { renewBook } from '../student_library_api/student_library_api';
import type { IssuedBook } from '../student_library_types/student_library_types';
import { Calendar, AlertCircle, RefreshCw, BookCheck, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  issuedBooks: IssuedBook[];
}

export default function StudentLibraryIssued({ issuedBooks }: Props) {
  const [localBooks, setLocalBooks] = useState(issuedBooks);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const handleRenew = async (issueId: string) => {
    setProcessingId(issueId);
    const res = await renewBook(issueId);
    setProcessingId(null);
    if (res.success && res.newDueDate) {
      alert(res.message);
      // Optimistic update
      setLocalBooks(prev => prev.map(b => b.id === issueId ? { ...b, dueDate: res.newDueDate!, renewCount: b.renewCount + 1 } : b));
    }
  };

  if (localBooks.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <BookCheck size={48} className="text-text-secondary/30 mb-4" />
        <h3 className="text-lg font-bold text-text-primary">No Books Issued</h3>
        <p className="text-sm text-text-secondary mt-1">You currently do not have any books issued from the library.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {localBooks.map(book => (
        <div key={book.id} className={clsx(
          "bg-card border rounded-xl p-5 shadow-sm transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-4",
          book.isOverdue ? "border-danger/30 hover:border-danger/60" : "border-border hover:border-primary/40"
        )}>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-text-primary mb-1">{book.title}</h3>
            <p className="text-sm text-text-secondary font-medium mb-3">By {book.author}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-text-secondary">
                <Calendar size={14} /> Issued: {book.issuedDate}
              </span>
              <span className={clsx("flex items-center gap-1.5 border-l border-border pl-4", book.isOverdue ? "text-danger" : "text-text-secondary")}>
                <Calendar size={14} /> Due: {book.dueDate} {book.isOverdue && "(Overdue)"}
              </span>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center justify-between gap-4 shrink-0 bg-page p-3 rounded-lg border border-border">
            {book.fineAmount > 0 ? (
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-danger uppercase tracking-wider flex items-center gap-1"><AlertCircle size={10} /> Late Fine</span>
                <span className="text-lg font-bold text-danger">₹{book.fineAmount}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-success uppercase tracking-wider">Fine Status</span>
                <span className="text-sm font-bold text-success">Clear</span>
              </div>
            )}
            
            <button 
              onClick={() => handleRenew(book.id)}
              disabled={processingId === book.id || book.renewCount >= 2}
              className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-white text-xs font-bold shadow-sm hover:bg-primary-hover transition-colors disabled:opacity-50"
            >
              {processingId === book.id ? <><Loader2 size={14} className="animate-spin" /> ...</> : <><RefreshCw size={14} /> Renew Book</>}
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
