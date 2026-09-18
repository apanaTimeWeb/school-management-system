"use client";

import React, { useState } from "react";
import {
  FolderOpen,
  Search,
  Plus,
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
  UploadCloud,
  Download,
  Eye,
  Trash2,
  X,
  File,
  CheckCircle2,
  Building2,
  Banknote,
  HeartHandshake,
  ClipboardList,
  Archive,
  MoreHorizontal
} from "lucide-react";

type DocCategory = 'All' | 'Purchase Invoices' | 'Supplier Docs' | 'Donation Records' | 'Library Reports' | 'Stock Verification' | 'Other Docs';

interface LibDocument {
  id: string;
  title: string;
  category: DocCategory;
  date: string;
  size: string;
  type: 'pdf' | 'img' | 'doc' | 'xls';
}

const MOCK_DOCUMENTS: LibDocument[] = [
  { id: "DOC-101", title: "OUP_Invoice_Nov2023", category: "Purchase Invoices", date: "2023-11-05", size: "2.4 MB", type: "pdf" },
  { id: "DOC-102", title: "Bharti_Bhawan_Agreement", category: "Supplier Docs", date: "2023-10-15", size: "1.1 MB", type: "doc" },
  { id: "DOC-103", title: "NGO_Book_Donation_Receipt", category: "Donation Records", date: "2023-11-12", size: "850 KB", type: "pdf" },
  { id: "DOC-104", title: "Annual_Circulation_Report", category: "Library Reports", date: "2023-01-10", size: "4.5 MB", type: "xls" },
  { id: "DOC-105", title: "Stock_Audit_Oct2023", category: "Stock Verification", date: "2023-10-30", size: "3.2 MB", type: "pdf" },
  { id: "DOC-106", title: "Damaged_Books_Photos", category: "Stock Verification", date: "2023-10-31", size: "5.5 MB", type: "img" },
  { id: "DOC-107", title: "Library_Rules_Poster", category: "Other Docs", date: "2023-05-14", size: "12 MB", type: "img" }
];

export default function DocumentVault() {
  const [activeCategory, setActiveCategory] = useState<DocCategory>('All');
  const [searchQuery, setSearchQuery] = useState("");
  const [documents, setDocuments] = useState<LibDocument[]>(MOCK_DOCUMENTS);
  
  // Modals
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  // Form state
  const [newDocTitle, setNewDocTitle] = useState("");
  const [newDocCategory, setNewDocCategory] = useState<DocCategory>('Purchase Invoices');

  const filteredDocs = documents.filter(doc => 
    (activeCategory === 'All' || doc.category === activeCategory) &&
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDocTitle) return;

    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      const types: Array<'pdf' | 'img' | 'doc' | 'xls'> = ['pdf', 'doc', 'xls', 'img'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      const newDoc: LibDocument = {
        id: `DOC-${Math.floor(200 + Math.random() * 800)}`,
        title: newDocTitle,
        category: newDocCategory,
        date: new Date().toISOString().split('T')[0],
        size: `${(Math.random() * 5 + 0.1).toFixed(1)} MB`,
        type: randomType
      };

      setDocuments([newDoc, ...documents]);
      setIsUploading(false);
      setIsUploadOpen(false);
      setNewDocTitle("");
      
      // Force change to the category where it was uploaded
      setActiveCategory(newDocCategory);
    }, 1500);
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="w-8 h-8 text-rose-500" />;
      case 'xls': return <FileSpreadsheet className="w-8 h-8 text-emerald-500" />;
      case 'doc': return <File className="w-8 h-8 text-blue-500" />;
      case 'img': return <ImageIcon className="w-8 h-8 text-purple-500" />;
      default: return <File className="w-8 h-8 text-gray-500" />;
    }
  };

  const getFileBg = (type: string) => {
    switch(type) {
      case 'pdf': return 'bg-rose-100 border-rose-200';
      case 'xls': return 'bg-emerald-100 border-emerald-200';
      case 'doc': return 'bg-blue-100 border-blue-200';
      case 'img': return 'bg-purple-100 border-purple-200';
      default: return 'bg-gray-100 border-gray-200';
    }
  };

  const categories = [
    { name: 'All', icon: FolderOpen, color: 'text-gray-600', bg: 'bg-gray-100' },
    { name: 'Purchase Invoices', icon: Banknote, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { name: 'Supplier Docs', icon: Building2, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { name: 'Donation Records', icon: HeartHandshake, color: 'text-fuchsia-600', bg: 'bg-fuchsia-100' },
    { name: 'Library Reports', icon: ClipboardList, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Stock Verification', icon: Archive, color: 'text-amber-600', bg: 'bg-amber-100' },
    { name: 'Other Docs', icon: File, color: 'text-slate-600', bg: 'bg-slate-100' },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50 flex flex-col h-screen">
      
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FolderOpen className="w-8 h-8 text-cyan-600" />
            Document Vault
          </h1>
          <p className="text-gray-500 mt-1">Manage invoices, records, reports, and library files securely.</p>
        </div>
        <button 
          onClick={() => setIsUploadOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2"
        >
          <UploadCloud className="w-5 h-5" /> Upload Document
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        
        {/* Sidebar Nav */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 h-full flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Folders</h3>
            
            {categories.map(cat => (
              <button 
                key={cat.name}
                onClick={() => setActiveCategory(cat.name as DocCategory)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all text-left ${activeCategory === cat.name ? `bg-cyan-50 text-cyan-700 shadow-sm border border-cyan-100` : 'text-gray-600 hover:bg-gray-50 border border-transparent'}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeCategory === cat.name ? 'bg-cyan-100 text-cyan-600' : cat.bg + ' ' + cat.color}`}>
                  <cat.icon className="w-4 h-4" />
                </div>
                <span className="flex-1">{cat.name}</span>
                {activeCategory === cat.name && <div className="w-1.5 h-1.5 rounded-full bg-cyan-600"></div>}
              </button>
            ))}
            
            <div className="mt-auto pt-6 px-2 text-center">
               <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 border-dashed">
                 <p className="text-xs font-bold text-gray-500 uppercase mb-1">Storage Used</p>
                 <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                   <div className="bg-cyan-500 h-2 rounded-full" style={{width: '45%'}}></div>
                 </div>
                 <p className="text-[10px] text-gray-400 font-bold">4.5 GB of 10 GB</p>
               </div>
            </div>

          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-0">
          
          {/* Content Toolbar */}
          <div className="p-4 md:p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
            <h2 className="font-bold text-gray-800 text-lg">{activeCategory} ({filteredDocs.length})</h2>
            <div className="relative w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Grid View */}
          <div className="p-4 md:p-6 flex-1 overflow-y-auto">
            {filteredDocs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {filteredDocs.map(doc => (
                  <div key={doc.id} className="group bg-white rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all p-5 flex flex-col relative overflow-hidden">
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${getFileBg(doc.type)}`}>
                        {getFileIcon(doc.type)}
                      </div>
                      <button className="text-gray-400 hover:text-gray-800 transition-colors p-1 rounded-md hover:bg-gray-100">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    <h3 className="font-bold text-gray-900 leading-tight mb-1 line-clamp-2" title={doc.title}>{doc.title}</h3>
                    
                    <div className="mt-auto pt-4 flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded w-max">
                        {doc.category}
                      </span>
                      <div className="flex items-center justify-between text-xs text-gray-500 font-medium mt-1">
                        <span>{doc.date}</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform bg-gray-900/90 backdrop-blur-sm p-3 flex gap-2">
                      <button className="flex-1 py-1.5 bg-white text-gray-900 rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-cyan-50 transition-colors">
                        <Eye className="w-3.5 h-3.5" /> View
                      </button>
                      <button className="flex-1 py-1.5 bg-cyan-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-cyan-500 transition-colors">
                        <Download className="w-3.5 h-3.5" /> Save
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4 border-2 border-dashed border-gray-200">
                  <FolderOpen className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Folder is Empty</h3>
                <p className="text-gray-500 text-sm max-w-sm">No documents found in this category. Click 'Upload Document' to add files.</p>
              </div>
            )}
          </div>
          
        </div>
      </div>

      {/* Upload Modal */}
      {isUploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-cyan-600 p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <UploadCloud className="w-5 h-5" /> Upload Library Document
              </h2>
              <button onClick={() => setIsUploadOpen(false)} className="text-cyan-200 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleUpload} className="p-6 md:p-8 space-y-6 bg-white">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Document Title *</label>
                <input 
                  required 
                  type="text" 
                  value={newDocTitle} 
                  onChange={e => setNewDocTitle(e.target.value)} 
                  placeholder="e.g. Invoice_OUP_Dec2023" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Assign to Category/Folder *</label>
                <select 
                  value={newDocCategory} 
                  onChange={e => setNewDocCategory(e.target.value as DocCategory)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white font-medium"
                >
                  <option value="Purchase Invoices">Book Purchase Invoices</option>
                  <option value="Supplier Docs">Supplier Documents / Agreements</option>
                  <option value="Donation Records">Donation Records / Receipts</option>
                  <option value="Library Reports">Library Reports / Analytics</option>
                  <option value="Stock Verification">Stock Verification / Audits</option>
                  <option value="Other Docs">Other Library Documents</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select File *</label>
                <div className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-cyan-400 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-8 h-8 text-cyan-500" />
                  </div>
                  <p className="font-bold text-gray-800 mb-1">Click to browse or drag and drop</p>
                  <p className="text-xs text-gray-500">Supported formats: PDF, DOCX, XLSX, JPG (Max: 20MB)</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex gap-3">
                <button type="button" onClick={() => setIsUploadOpen(false)} className="flex-1 py-3.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isUploading}
                  className="flex-1 py-3.5 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-700 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isUploading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : <CheckCircle2 className="w-5 h-5"/>}
                  {isUploading ? "Uploading..." : "Save to Vault"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
