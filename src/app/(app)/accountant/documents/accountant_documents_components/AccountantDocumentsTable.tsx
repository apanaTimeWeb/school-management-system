"use client";
import React from "react";
import { FileText, Image as ImageIcon, FileSpreadsheet, Eye, Download, Tag } from "lucide-react";
import { MOCK_DOCUMENTS } from "../accountant_documents_utils/AccountantDocumentsConstants";
import { useAccountantDocumentsStore } from "../accountant_documents_store/useAccountantDocumentsStore";
import clsx from "clsx";

export default function AccountantDocumentsTable() {
  const { searchQuery, categoryFilter, setSelectedDocument, setViewModalOpen } = useAccountantDocumentsStore();

  const filteredData = MOCK_DOCUMENTS.filter(doc => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = doc.name.toLowerCase().includes(searchLower) || 
                          doc.referenceId?.toLowerCase().includes(searchLower) ||
                          doc.tags.some(t => t.toLowerCase().includes(searchLower));
    const matchesFilter = categoryFilter === 'All' || doc.category === categoryFilter;
    
    return matchesSearch && matchesFilter;
  });

  const getFormatIcon = (format: string) => {
    switch(format) {
      case 'PDF': return <FileText size={20} className="text-danger" />;
      case 'Image': return <ImageIcon size={20} className="text-info" />;
      case 'Excel': return <FileSpreadsheet size={20} className="text-success" />;
      default: return <FileText size={20} className="text-text-secondary" />;
    }
  };

  const handleView = (doc: any) => {
    setSelectedDocument(doc);
    setViewModalOpen(true);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col flex-1 h-full">
      <div className="overflow-x-auto w-full flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary/5 border-b border-border text-[12px] uppercase text-text-secondary font-semibold">
              <th className="p-4 w-12 text-center"></th>
              <th className="p-4">File Name & Details</th>
              <th className="p-4 w-40">Category</th>
              <th className="p-4 w-32">Reference</th>
              <th className="p-4 w-32">Tags</th>
              <th className="p-4 w-28 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((doc, index) => (
              <tr 
                key={doc.id} 
                className={clsx(
                  "border-b border-border/50 hover:bg-bg-input transition-colors group",
                  index % 2 === 0 ? "bg-transparent" : "bg-bg-page/30"
                )}
              >
                <td className="p-4 text-center">
                  <div className="w-10 h-10 rounded-lg bg-bg-page border border-border flex items-center justify-center">
                    {getFormatIcon(doc.format)}
                  </div>
                </td>
                <td className="p-4">
                  <div className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors cursor-pointer" onClick={() => handleView(doc)}>
                    {doc.name}
                  </div>
                  <div className="text-[11px] text-text-secondary mt-1 flex gap-2">
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.uploadDate}</span>
                    <span>•</span>
                    <span>By {doc.uploadedBy}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20">
                    {doc.category}
                  </span>
                </td>
                <td className="p-4 text-xs font-semibold text-text-secondary">
                  {doc.referenceId || "N/A"}
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {doc.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-[10px] bg-bg-page text-text-secondary px-1.5 py-0.5 rounded border border-border">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleView(doc)} className="p-1.5 text-text-secondary hover:text-primary bg-bg-page rounded-md hover:bg-primary/10 transition-colors" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="p-1.5 text-text-secondary hover:text-success bg-bg-page rounded-md hover:bg-success/10 transition-colors" title="Download">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-text-secondary text-sm">
                  No documents found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-border flex justify-between items-center text-xs text-text-secondary bg-bg-page shrink-0">
        <span>Showing {filteredData.length} documents</span>
      </div>
    </div>
  );
}
