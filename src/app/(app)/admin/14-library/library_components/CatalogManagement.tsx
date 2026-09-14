"use client";

import React, { useState } from 'react';
import { Book, Plus, QrCode, Search, Save, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function CatalogManagement() {
  const [activeSubTab, setActiveSubTab] = useState('add');
  const [showToast, setShowToast] = useState(false);
  const [books, setBooks] = useState([
    { id: 101, title: 'Advanced Physics', author: 'H.C. Verma', category: 'Science', publisher: 'Bharti Bhawan', copies: 15, barcode: 'B-00101' },
    { id: 102, title: 'English Grammar', author: 'Wren & Martin', category: 'Language', publisher: 'S. Chand', copies: 8, barcode: 'B-00102' }
  ]);
  
  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Catalog Updated Successfully!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <h2 className="text-xl font-bold text-text-primary border-b border-border pb-4 mb-6 flex items-center gap-2">
          <Book size={20} className="text-primary"/> Catalog Management
        </h2>
        
        <div className="flex gap-4 mb-6 border-b border-border pb-2">
           <button onClick={()=>setActiveSubTab('add')} className={clsx("text-sm font-bold pb-2 border-b-2 transition", activeSubTab==='add' ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary")}>Add New Book</button>
           <button onClick={()=>setActiveSubTab('list')} className={clsx("text-sm font-bold pb-2 border-b-2 transition", activeSubTab==='list' ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary")}>Book List & Barcodes</button>
           <button onClick={()=>setActiveSubTab('meta')} className={clsx("text-sm font-bold pb-2 border-b-2 transition", activeSubTab==='meta' ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary")}>Categories/Authors</button>
        </div>

        {activeSubTab === 'add' && (
          <div className="bg-bg-page border border-border rounded-lg p-5 flex flex-col gap-4 max-w-3xl fade-in">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Book Title *</label>
                 <input type="text" placeholder="Enter title" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Author</label>
                 <input type="text" placeholder="Enter author" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Category</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary">
                   <option>Science</option>
                   <option>Language</option>
                   <option>Mathematics</option>
                 </select>
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Publisher</label>
                 <input type="text" placeholder="Enter publisher" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Number of Copies</label>
                 <input type="number" placeholder="1" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5">
                 <label className="text-xs font-semibold text-text-secondary">Shelf / Rack Location</label>
                 <input type="text" placeholder="e.g. Rack A-3" className="bg-bg-input border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-primary" />
               </div>
             </div>
             
             <div className="flex items-center gap-4 mt-2 border-t border-border pt-4">
               <button onClick={handleSave} className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center justify-center gap-2">
                 <Save size={16}/> Save Book Entry
               </button>
               <span className="text-xs font-bold text-text-secondary flex items-center gap-1">
                 <QrCode size={14}/> Barcodes will be auto-generated for each copy
               </span>
             </div>
          </div>
        )}

        {activeSubTab === 'list' && (
          <div className="flex flex-col gap-4 fade-in">
             <div className="flex gap-4 items-center mb-2">
               <div className="flex items-center gap-2 bg-bg-input border border-border px-3 py-2 rounded-lg flex-1">
                 <Search size={16} className="text-text-secondary"/>
                 <input type="text" placeholder="Search by Title, Author, or Barcode..." className="bg-transparent border-none outline-none text-sm w-full font-semibold"/>
               </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {books.map(b => (
                 <div key={b.id} className="bg-card border border-border rounded-lg p-4 shadow-sm flex flex-col">
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-[10px] font-bold uppercase bg-primary/10 text-primary px-2 py-0.5 rounded">{b.category}</span>
                     <span className="text-xs font-bold text-success flex items-center gap-1"><Book size={12}/> {b.copies} Copies</span>
                   </div>
                   <h3 className="font-bold text-text-primary text-sm leading-tight">{b.title}</h3>
                   <p className="text-xs text-text-secondary font-semibold mt-1">By {b.author}</p>
                   <p className="text-[10px] text-text-secondary mt-1">Publisher: {b.publisher}</p>
                   
                   <div className="mt-4 pt-3 border-t border-border flex justify-between items-center">
                     <div className="flex flex-col items-center">
                       <QrCode size={20} className="text-text-primary"/>
                       <span className="text-[9px] font-black">{b.barcode}</span>
                     </div>
                     <button className="text-xs font-bold bg-bg-page border border-border px-3 py-1.5 rounded hover:border-primary transition">Print Tags</button>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}

        {activeSubTab === 'meta' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-60">
            <Book size={48} className="text-text-secondary mb-2" />
            <p className="text-sm font-bold text-text-secondary">Master lists for Categories, Authors, and Publishers will be managed here.</p>
          </div>
        )}

      </div>
    </div>
  );
}
