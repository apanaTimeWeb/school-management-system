"use client";
import React, { useState } from "react";
import { X, UploadCloud, FileText, Download } from "lucide-react";
import { useAccountantDocumentsStore } from "../accountant_documents_store/useAccountantDocumentsStore";
import { DOCUMENT_CATEGORIES } from "../accountant_documents_utils/AccountantDocumentsConstants";

export default function AccountantDocumentsModals() {
  const { 
    isUploadModalOpen, setUploadModalOpen,
    isViewModalOpen, setViewModalOpen, selectedDocument 
  } = useAccountantDocumentsStore();

  const [category, setCategory] = useState("");

  const handleUpload = () => {
    alert(`File uploaded and tagged under ${category}!`);
    setUploadModalOpen(false);
  };

  return (
    <>
      {/* UPLOAD MODAL */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><UploadCloud size={18} className="text-primary"/> Upload Document</h3>
              <button onClick={() => setUploadModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 space-y-6">
              
              <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col items-center justify-center bg-primary/5 text-center cursor-pointer hover:bg-primary/10 hover:border-primary transition-all">
                <UploadCloud size={40} className="text-primary mb-3" />
                <p className="text-sm font-bold text-text-primary">Drag & drop your file here</p>
                <p className="text-xs text-text-secondary mt-1">Supports PDF, JPG, PNG, Excel (Max 10MB)</p>
                <button className="mt-4 px-4 py-1.5 text-xs font-bold border border-primary text-primary rounded-lg">Browse File</button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Document Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  >
                    <option value="" disabled>Select Category...</option>
                    {DOCUMENT_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Reference ID (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. EXP-102" 
                      className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1">Tags (Comma separated)</label>
                    <input 
                      type="text" 
                      placeholder="Utility, March..." 
                      className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                    />
                  </div>
                </div>
              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setUploadModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button 
                onClick={handleUpload} 
                disabled={!category}
                className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Upload File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {isViewModalOpen && selectedDocument && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md fade-in">
          <div className="w-full max-w-4xl h-[80vh] flex flex-col bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <div>
                <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                  <FileText size={18} className="text-primary"/> {selectedDocument.name}
                </h3>
                <p className="text-xs text-text-secondary mt-1">Uploaded on {selectedDocument.uploadDate} | {selectedDocument.size}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-black transition-colors">
                  <Download size={14} /> Download
                </button>
                <button onClick={() => setViewModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors bg-bg-input p-2 rounded-lg border border-border"><X size={20} /></button>
              </div>
            </div>
            
            <div className="flex-1 bg-bg-page p-6 flex flex-col items-center justify-center text-center">
              {/* Mocking the file preview */}
              <div className="w-full max-w-md p-10 border border-border bg-card rounded-xl shadow-sm text-text-secondary">
                <FileText size={64} className="mx-auto mb-4 opacity-50" />
                <p className="font-bold mb-2">Preview Not Available in Demo</p>
                <p className="text-xs">File: {selectedDocument.name}</p>
                <p className="text-xs mt-1">Format: {selectedDocument.format}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
