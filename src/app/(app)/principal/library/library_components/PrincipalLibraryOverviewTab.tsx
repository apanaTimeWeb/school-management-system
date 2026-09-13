"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalLibraryStats, PrincipalBorrowedBook } from '../library_types/PrincipalLibrary.types';
import { fetchPrincipalLibraryStats, fetchPrincipalBorrowedBooks } from '../library_api/PrincipalLibraryApi';
import { BookMarked, BookX, BookUp, Users, AlertTriangle } from 'lucide-react';

export default function PrincipalLibraryOverviewTab() {
  const [stats, setStats] = useState<PrincipalLibraryStats | null>(null);
  const [overdueBooks, setOverdueBooks] = useState<PrincipalBorrowedBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      fetchPrincipalLibraryStats(),
      fetchPrincipalBorrowedBooks()
    ]).then(([statsData, booksData]) => {
      if (isMounted) {
        setStats(statsData);
        setOverdueBooks(booksData.filter(b => b.status === 'Overdue'));
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !stats) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-28 bg-skeleton-base animate-pulse rounded-xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-96 bg-skeleton-base animate-pulse rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-primary"><BookMarked size={48}/></div>
          <p className="text-[13px] text-text-secondary font-bold mb-1">Total Books</p>
          <h3 className="text-[24px] font-bold text-text-primary">{stats.totalBooks.toLocaleString()}</h3>
          <p className="text-[11px] text-text-secondary mt-2 flex items-center gap-1"><BookUp size={12}/> {stats.booksAvailable.toLocaleString()} Available in Library</p>
        </div>

        <div className="bg-card border border-success/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-success"><BookUp size={48}/></div>
          <p className="text-[13px] text-success font-bold mb-1">Books Issued</p>
          <h3 className="text-[24px] font-bold text-success">{stats.booksIssued.toLocaleString()}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Currently borrowed by members</p>
        </div>

        <div className="bg-card border border-info/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-info"><Users size={48}/></div>
          <p className="text-[13px] text-info font-bold mb-1">Active Readers</p>
          <h3 className="text-[24px] font-bold text-info">{stats.activeReaders.toLocaleString()}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Out of {stats.totalMembers.toLocaleString()} Total Members</p>
        </div>

        <div className="bg-card border border-danger/30 p-5 rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-danger"><BookX size={48}/></div>
          <p className="text-[13px] text-danger font-bold mb-1">Overdue Books</p>
          <h3 className="text-[24px] font-bold text-danger">{stats.overdueCount}</h3>
          <p className="text-[11px] text-text-secondary mt-2">Requires reminder notices</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm flex flex-col max-h-[400px]">
          <h3 className="text-[16px] font-bold text-danger mb-4 flex items-center gap-2"><AlertTriangle size={16}/> Overdue Highlights</h3>
          <div className="overflow-y-auto custom-scrollbar pr-2 flex-1 space-y-3">
            {overdueBooks.length > 0 ? overdueBooks.map((book) => (
              <div key={book.id} className="flex items-center justify-between p-3 rounded-lg border border-danger/20 bg-danger/5 hover:bg-danger/10 transition-colors">
                <div>
                  <p className="text-[14px] font-bold text-text-primary line-clamp-1" title={book.bookTitle}>{book.bookTitle}</p>
                  <p className="text-[12px] text-text-secondary">{book.borrowerName} ({book.classAndSection || 'Staff'})</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[12px] font-bold text-danger">Due: {book.dueDate}</p>
                  {book.fineAmount !== undefined && (
                     <span className="inline-block mt-1 px-2 py-0.5 bg-danger text-white rounded text-[10px] font-bold">
                       Fine: ₹{book.fineAmount}
                     </span>
                  )}
                </div>
              </div>
            )) : (
              <p className="text-[13px] text-text-secondary italic text-center py-4">No overdue books at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
