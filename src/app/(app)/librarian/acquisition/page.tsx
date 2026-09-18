"use client";

import React, { useState } from "react";
import {
  BookPlus,
  ShoppingCart,
  Gift,
  HeartHandshake,
  Receipt,
  Building2,
  Calendar,
  Hash,
  Coins,
  Layers,
  Save,
  CheckCircle2,
  X,
  Search,
  BookMarked
} from "lucide-react";

type AcquisitionSource = 'Purchase' | 'Donation' | 'Gift';

interface AcquisitionEntry {
  id: string;
  source: AcquisitionSource;
  bookTitle: string;
  author: string;
  isbn: string;
  quantity: number;
  date: string;
  
  // For Purchase
  supplier?: string;
  invoiceNumber?: string;
  totalPrice?: number;
  
  // For Donation/Gift
  providerName?: string;
  
  // Generated details
  accessionRange: string;
}

const MOCK_ACQUISITIONS: AcquisitionEntry[] = [
  {
    id: "ACQ-2001",
    source: "Purchase",
    bookTitle: "Introduction to Machine Learning",
    author: "Ethem Alpaydin",
    isbn: "978-0262012430",
    quantity: 10,
    date: "2023-11-01",
    supplier: "Oxford University Press India",
    invoiceNumber: "INV-OUP-0992",
    totalPrice: 8500,
    accessionRange: "ACC-5001 to ACC-5010"
  },
  {
    id: "ACQ-2002",
    source: "Donation",
    bookTitle: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "978-0061122415",
    quantity: 2,
    date: "2023-11-03",
    providerName: "Rahul Sharma (Alumni)",
    accessionRange: "ACC-5011 to ACC-5012"
  },
  {
    id: "ACQ-2003",
    source: "Purchase",
    bookTitle: "Concepts of Physics Vol 1",
    author: "H.C. Verma",
    isbn: "978-8177091878",
    quantity: 25,
    date: "2023-11-05",
    supplier: "Bharti Bhawan Publishers",
    invoiceNumber: "INV-BBP-441",
    totalPrice: 11250,
    accessionRange: "ACC-5013 to ACC-5037"
  }
];

export default function BookAcquisition() {
  const [acquisitions, setAcquisitions] = useState<AcquisitionEntry[]>(MOCK_ACQUISITIONS);
  const [activeTab, setActiveTab] = useState<'New Entry' | 'History'>('New Entry');
  
  // Form State
  const [source, setSource] = useState<AcquisitionSource>('Purchase');
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
  const [supplier, setSupplier] = useState("");
  const [invoice, setInvoice] = useState("");
  const [price, setPrice] = useState<number | "">("");
  
  const [providerName, setProviderName] = useState("");

  // Modal State
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastGeneratedInfo, setLastGeneratedInfo] = useState({ title: "", quantity: 0, range: "" });

  const [searchQuery, setSearchQuery] = useState("");
  const filteredHistory = acquisitions.filter(a => a.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) || a.id.toLowerCase().includes(searchQuery.toLowerCase()));

  // Metrics
  const totalBooksAdded = acquisitions.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalSpend = acquisitions.filter(a => a.source === 'Purchase').reduce((acc, curr) => acc + (curr.totalPrice || 0), 0);
  const totalDonations = acquisitions.filter(a => a.source !== 'Purchase').reduce((acc, curr) => acc + curr.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity === "" || quantity < 1) return;

    // Simulate Accession Number Generation
    const startAcc = Math.floor(6000 + Math.random() * 1000);
    const endAcc = startAcc + (quantity as number) - 1;
    const rangeStr = quantity === 1 ? `ACC-${startAcc}` : `ACC-${startAcc} to ACC-${endAcc}`;

    const newEntry: AcquisitionEntry = {
      id: `ACQ-${Math.floor(3000 + Math.random() * 1000)}`,
      source,
      bookTitle,
      author,
      isbn,
      quantity: quantity as number,
      date,
      accessionRange: rangeStr,
      ...(source === 'Purchase' && { supplier, invoiceNumber: invoice, totalPrice: price as number }),
      ...(source !== 'Purchase' && { providerName })
    };

    setAcquisitions([newEntry, ...acquisitions]);
    
    // Show success modal
    setLastGeneratedInfo({ title: bookTitle, quantity: quantity as number, range: rangeStr });
    setShowSuccessModal(true);

    // Reset Form
    setBookTitle(""); setAuthor(""); setIsbn(""); setQuantity("");
    setSupplier(""); setInvoice(""); setPrice(""); setProviderName("");
  };

  const getSourceIcon = (src: AcquisitionSource) => {
    switch (src) {
      case 'Purchase': return <ShoppingCart className="w-5 h-5 text-blue-500"/>;
      case 'Donation': return <HeartHandshake className="w-5 h-5 text-rose-500"/>;
      case 'Gift': return <Gift className="w-5 h-5 text-fuchsia-500"/>;
    }
  };

  const getSourceBadge = (src: AcquisitionSource) => {
    switch (src) {
      case 'Purchase': return <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-md text-xs font-bold border border-blue-200">{src}</span>;
      case 'Donation': return <span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded-md text-xs font-bold border border-rose-200">{src}</span>;
      case 'Gift': return <span className="bg-fuchsia-100 text-fuchsia-700 px-2.5 py-1 rounded-md text-xs font-bold border border-fuchsia-200">{src}</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <BookPlus className="w-8 h-8 text-teal-600" />
          Acquisitions & New Books
        </h1>
        <p className="text-gray-500 mt-1">Add new books to the library inventory via purchases or donations.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-teal-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-teal-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Copies Added</p>
          <h3 className="text-3xl font-black text-teal-600">{totalBooksAdded}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <Layers className="w-24 h-24 text-teal-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-blue-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Spend</p>
          <h3 className="text-3xl font-black text-blue-600">₹{totalSpend}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <Coins className="w-24 h-24 text-blue-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-rose-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Donated / Gifted</p>
          <h3 className="text-3xl font-black text-rose-600">{totalDonations}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <HeartHandshake className="w-24 h-24 text-rose-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex gap-2 w-max">
        <button 
          onClick={() => setActiveTab('New Entry')}
          className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2 ${activeTab === 'New Entry' ? 'bg-teal-50 text-teal-700' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <BookPlus className="w-4 h-4" /> New Entry Form
        </button>
        <button 
          onClick={() => setActiveTab('History')}
          className={`px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2 ${activeTab === 'History' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <BookMarked className="w-4 h-4" /> Acquisition History
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {activeTab === 'New Entry' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-teal-50/50 p-5 border-b border-teal-100 flex items-center gap-3">
              <div className="bg-teal-100 p-2 rounded-lg text-teal-600"><BookPlus className="w-5 h-5"/></div>
              <div>
                <h2 className="font-bold text-teal-900 text-lg">Add to Library Inventory</h2>
                <p className="text-xs text-teal-600 font-medium">System will automatically generate accession numbers for multiple copies.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              
              {/* Source Selection */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Source of Acquisition</label>
                <div className="flex flex-wrap gap-4">
                  <label className={`cursor-pointer px-6 py-3 border-2 rounded-xl flex items-center gap-3 font-bold transition-all ${source === 'Purchase' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                    <input type="radio" className="hidden" checked={source === 'Purchase'} onChange={() => setSource('Purchase')} />
                    <ShoppingCart className="w-5 h-5" /> Purchase
                  </label>
                  <label className={`cursor-pointer px-6 py-3 border-2 rounded-xl flex items-center gap-3 font-bold transition-all ${source === 'Donation' ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                    <input type="radio" className="hidden" checked={source === 'Donation'} onChange={() => setSource('Donation')} />
                    <HeartHandshake className="w-5 h-5" /> Donation
                  </label>
                  <label className={`cursor-pointer px-6 py-3 border-2 rounded-xl flex items-center gap-3 font-bold transition-all ${source === 'Gift' ? 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                    <input type="radio" className="hidden" checked={source === 'Gift'} onChange={() => setSource('Gift')} />
                    <Gift className="w-5 h-5" /> Gift
                  </label>
                </div>
              </div>

              {/* Dynamic Source Details */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                  {getSourceIcon(source)} 
                  {source === 'Purchase' ? 'Purchase Details' : 'Donor / Gifter Details'}
                </h3>
                
                {source === 'Purchase' ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><Building2 className="w-4 h-4 text-gray-400"/> Supplier / Vendor *</label>
                      <input required type="text" value={supplier} onChange={e => setSupplier(e.target.value)} placeholder="e.g. Oxford Press" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><Receipt className="w-4 h-4 text-gray-400"/> Invoice Number *</label>
                      <input required type="text" value={invoice} onChange={e => setInvoice(e.target.value)} placeholder="e.g. INV-1234" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><Coins className="w-4 h-4 text-gray-400"/> Total Price (₹) *</label>
                      <input required type="number" min="0" value={price} onChange={e => setPrice(parseInt(e.target.value) || "")} placeholder="Total amount" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-bold" />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><HeartHandshake className="w-4 h-4 text-gray-400"/> Provider Name *</label>
                      <input required type="text" value={providerName} onChange={e => setProviderName(e.target.value)} placeholder="e.g. Amit Kumar (Alumni)" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                    </div>
                  </div>
                )}
                
                <div className="mt-4 md:w-1/3">
                  <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><Calendar className="w-4 h-4 text-gray-400"/> Acquisition Date *</label>
                  <input required type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700 font-bold" />
                </div>
              </div>

              {/* Book Details */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">Book Catalog Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Book Title *</label>
                    <input required type="text" value={bookTitle} onChange={e => setBookTitle(e.target.value)} placeholder="Title of the book" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  </div>
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Author *</label>
                    <input required type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author name" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  </div>
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-1">ISBN</label>
                    <input type="text" value={isbn} onChange={e => setIsbn(e.target.value)} placeholder="Optional" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono" />
                  </div>
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><Layers className="w-4 h-4 text-teal-500"/> Copies *</label>
                    <input required type="number" min="1" value={quantity} onChange={e => setQuantity(parseInt(e.target.value) || "")} placeholder="Qty" className="w-full px-4 py-2.5 rounded-xl border-2 border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 font-black text-teal-700 bg-teal-50/50" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-gray-100">
                <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-lg">
                  <Save className="w-5 h-5" /> Save to Inventory
                </button>
              </div>

            </form>
          </div>
        )}

        {activeTab === 'History' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
               <div className="relative w-full md:w-80">
                <input 
                  type="text" 
                  placeholder="Search by Title or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-sm"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                    <th className="py-4 px-6 font-bold">Acquisition ID / Date</th>
                    <th className="py-4 px-6 font-bold">Source</th>
                    <th className="py-4 px-6 font-bold">Book Info</th>
                    <th className="py-4 px-6 font-bold text-center">Copies</th>
                    <th className="py-4 px-6 font-bold">Accession Generated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredHistory.length > 0 ? (
                    filteredHistory.map((acq) => (
                      <tr key={acq.id} className="hover:bg-teal-50/30 transition-colors">
                        <td className="py-4 px-6">
                          <p className="font-bold text-gray-900 text-sm">{acq.id}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{acq.date}</p>
                        </td>
                        <td className="py-4 px-6">
                          <div className="mb-1">{getSourceBadge(acq.source)}</div>
                          {acq.source === 'Purchase' && (
                            <>
                              <p className="text-xs font-bold text-gray-700 mt-1 line-clamp-1">{acq.supplier}</p>
                              <p className="text-[10px] text-gray-400 font-mono">Inv: {acq.invoiceNumber} | ₹{acq.totalPrice}</p>
                            </>
                          )}
                          {acq.source !== 'Purchase' && (
                            <p className="text-xs font-bold text-gray-700 mt-1 line-clamp-1">{acq.providerName}</p>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-bold text-gray-800 text-sm line-clamp-1">{acq.bookTitle}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{acq.author} {acq.isbn && `• ISBN: ${acq.isbn}`}</p>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-black">{acq.quantity}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-1 rounded">
                            {acq.accessionRange}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-16 text-center">
                        <BookMarked className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-gray-800 mb-1">No Acquisitions Found</h3>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-teal-500 p-8 text-center text-white relative">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                 <CheckCircle2 className="w-12 h-12 text-teal-500" />
               </div>
               <h2 className="text-2xl font-bold mb-1">Acquisition Saved</h2>
               <p className="text-teal-100 text-sm">Inventory successfully updated.</p>
               <div className="absolute -bottom-2 left-0 w-full h-4 bg-[radial-gradient(circle,white_4px,transparent_4px)] bg-[length:16px_16px] bg-repeat-x"></div>
            </div>

            <div className="p-8 bg-white mt-2">
               <div className="space-y-4 text-sm text-center">
                 <p className="text-gray-600">You added <span className="font-bold text-gray-900">{lastGeneratedInfo.quantity}</span> copies of</p>
                 <p className="font-bold text-lg text-gray-900 leading-tight">"{lastGeneratedInfo.title}"</p>
                 
                 <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl mt-4">
                   <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">System Generated Accession</p>
                   <p className="font-mono font-black text-teal-800">{lastGeneratedInfo.range}</p>
                 </div>
               </div>

               <div className="mt-8 flex gap-3">
                 <button onClick={() => setShowSuccessModal(false)} className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                   Done
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
