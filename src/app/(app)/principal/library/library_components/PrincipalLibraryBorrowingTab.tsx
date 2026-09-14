"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalBorrowedBook } from '../library_types/PrincipalLibrary.types';
import { fetchPrincipalBorrowedBooks } from '../library_api/PrincipalLibraryApi';
import { Search, Filter, AlertCircle, Calendar, UserSquare } from 'lucide-react';
import { usePrincipalLibraryStore } from '../library_store/usePrincipalLibraryStore';
import clsx from 'clsx';

export default function PrincipalLibraryBorrowingTab() {
  const [books, setBooks] = useState<PrincipalBorrowedBook[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedBook } = usePrincipalLibraryStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalBorrowedBooks().then(data => {
      if (isMounted) {
        setBooks(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-skeleton-base animate-pulse rounded" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-[18px] font-bold text-text-primary">Borrowing Records</h2>
          <p className="text-[13px] text-text-secondary">View issued, returned, and overdue books by students and staff.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2 bg-input border border-border rounded-md px-3 py-1.5 focus-within:border-primary transition-colors">
            <Search size={14} className="text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search books, borrowers..." 
              className="bg-transparent border-none outline-none text-[13px] text-text-primary w-full sm:w-64 placeholder:text-text-secondary/50"
            />
          </div>
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.dispatchEvent(new CustomEvent('open-coming-soon', { detail: 'Action completed successfully!' })); }} className="flex items-center justify-center gap-2 px-4 py-1.5 bg-page hover:bg-white/5 border border-border rounded-md text-[13px] font-bold text-text-primary transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] font-semibold text-text-secondary uppercase tracking-wider">
              <th className="p-4 w-64">Book Details</th>
              <th className="p-4 w-56">Borrower Info</th>
              <th className="p-4 w-40 text-center">Dates</th>
              <th className="p-4 w-32 text-center">Status</th>
              <th className="p-4 w-32 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="border-b border-border/50 hover:bg-white/5 transition-colors group">
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary mb-1 line-clamp-1" title={book.bookTitle}>{book.bookTitle}</p>
                  <p className="text-[12px] text-text-secondary">By: {book.author} | ID: {book.bookId}</p>
                </td>
                <td className="p-4">
                  <p className="text-[14px] font-bold text-text-primary flex items-center gap-2 mb-1">
                    <UserSquare size={14} className="text-info"/> {book.borrowerName}
                  </p>
                  <p className="text-[12px] text-text-secondary">
                    {book.borrowerType === 'Student' ? `Class: ${book.classAndSection}` : 'Staff'} | {book.borrowerId}
                  </p>
                </td>
                <td className="p-4 text-center">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[11px] text-text-secondary flex items-center gap-1"><Calendar size={10}/> Issue: {book.issueDate}</span>
                    <span className={clsx("text-[11px] font-bold flex items-center gap-1", book.status === 'Overdue' ? 'text-danger' : 'text-text-secondary')}>
                      <Calendar size={10}/> Due: {book.dueDate}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <span className={clsx("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border", 
                    book.status === 'Issued' ? 'bg-primary/10 text-primary border-primary/30' :
                    book.status === 'Overdue' ? 'bg-danger/10 text-danger border-danger/30' :
                    'bg-success/10 text-success border-success/30'
                  )}>
                    {book.status === 'Overdue' && <AlertCircle size={12}/>}
                    {book.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => setSelectedBook(book)}
                    className="px-4 py-1.5 rounded bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-[12px] font-bold text-primary hover:text-black transition-colors"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
