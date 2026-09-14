"use client";

import { FileText, Download, Upload } from "lucide-react";
import type { OfficeDocument } from "../office_admin_types/AdminOfficeTypes";

interface AdminOfficeDocumentsProps {
  documents: OfficeDocument[];
  typeFilter: string; setTypeFilter: (s: string) => void;
}

export default function AdminOfficeDocuments({ documents, typeFilter, setTypeFilter }: AdminOfficeDocumentsProps) {

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Top Actions & Filters */}
      <div className="flex justify-between items-center mb-6">
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
          <option value="All">All Categories</option>
          <option value="Office Document">Office Document</option>
          <option value="Official Correspondence">Official Correspondence</option>
          <option value="Administrative Record">Administrative Record</option>
        </select>

        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-card rounded-md font-bold text-sm shadow-lg shadow-primary/20 hover:bg-yellow-500 transition-all active:scale-95">
          <Upload size={16} /> Upload Record
        </button>
      </div>

      {/* Table */}
      {documents.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No documents found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Document Name</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Upload Date</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Size</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(d => (
                <tr key={d.id} className="border-b border-border hover:bg-primary/5 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        <FileText size={18} />
                      </div>
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{d.fileName}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs font-bold bg-input px-2.5 py-1 rounded-full text-muted-foreground">{d.category}</span>
                  </td>
                  <td className="p-4 text-sm text-foreground">{d.uploadDate}</td>
                  <td className="p-4 text-sm text-muted-foreground">{d.size}</td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1.5 bg-input text-foreground font-bold text-xs rounded-md border border-border hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-1 shadow-sm">
                      <Download size={14} /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
