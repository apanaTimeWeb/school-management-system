"use client";

import React, { useState } from 'react';
import { reserveBook } from '../student_library_api/student_library_api';
import type { LibraryBook } from '../student_library_types/student_library_types';
import { Search, Book, User, BookmarkPlus, AlertCircle, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  catalog: LibraryBook[];
}

export default function StudentLibraryDiscover({ catalog }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [processingId, setProcessingId] = useState<string | null>(null);

  const filteredCatalog = catalog.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReserve = async (bookId: string) => {
    setProcessingId(bookId);
    const res = await reserveBook(bookId);
    setProcessingId(null);
    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Search Bar */}
      <div className="relative max-w-xl">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search size={18} className="text-text-secondary" />
        </div>
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by book title, author, or category..." 
          className="bg-card border border-border text-text-primary text-sm rounded-full focus:ring-2 focus:ring-primary/20 focus:border-primary block w-full pl-12 pr-5 py-3.5 shadow-sm font-semibold outline-none transition-all" 
        />
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCatalog.length === 0 ? (
          <div className="col-span-full p-10 text-center text-text-secondary bg-card border border-border rounded-xl">
            No books found matching your search.
          </div>
        ) : (
          filteredCatalog.map(book => (
            <div key={book.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              
              {/* Cover Mock */}
              <div className={clsx("h-32 flex items-center justify-center p-4 relative", book.coverImageColor)}>
                <Book size={40} className="text-white/50" />
                <div className="absolute top-3 right-3">
                  <span className={clsx(
                    "text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border",
                    book.isAvailable ? "bg-success text-white border-success" : "bg-danger text-white border-danger"
                  )}>
                    {book.isAvailable ? 'Available' : 'Issued Out'}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">{book.category}</span>
                <h3 className="text-base font-bold text-text-primary mb-1 line-clamp-2 leading-tight">{book.title}</h3>
                <p className="text-xs text-text-secondary font-semibold flex items-center gap-1.5 mb-4">
                  <User size={12} /> {book.author}
                </p>
                
                <div className="flex items-center justify-between text-xs font-semibold text-text-secondary bg-page border border-border p-2 rounded-lg mb-5 mt-auto">
                  <span>Total: {book.totalCopies}</span>
                  <span className={book.isAvailable ? "text-success" : "text-danger"}>Avail: {book.availableCopies}</span>
                </div>

                {book.isAvailable ? (
                  <button 
                    onClick={() => handleReserve(book.id)}
                    disabled={processingId === book.id}
                    className="w-full py-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20 font-bold text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {processingId === book.id ? <><Loader2 size={16} className="animate-spin" /> Reserving...</> : <><BookmarkPlus size={16} /> Reserve Book</>}
                  </button>
                ) : (
                  <div className="w-full py-2.5 rounded-lg bg-page text-text-secondary border border-border font-bold text-sm flex items-center justify-center gap-2">
                    <AlertCircle size={16} /> Not Available
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
