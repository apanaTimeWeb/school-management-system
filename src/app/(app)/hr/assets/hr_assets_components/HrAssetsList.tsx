"use client";

import { Search, Plus, User, Box, ShieldAlert, CheckCircle, AlertTriangle } from "lucide-react";
import type { EmployeeAsset } from "../hr_assets_types/HrAssetsTypes";

interface HrAssetsListProps {
  assets: EmployeeAsset[];
  isActiveTab: boolean;
  searchFilter: string; setSearchFilter: (s: string) => void;
  openModal: (a?: EmployeeAsset) => void;
}

export default function HrAssetsList({
  assets, isActiveTab, searchFilter, setSearchFilter, openModal
}: HrAssetsListProps) {

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Assigned': return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-info/10 text-info border border-info/20"><Box size={12}/> {status}</span>;
      case 'Returned': return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-success/10 text-success border border-success/20"><CheckCircle size={12}/> {status}</span>;
      case 'Damaged': return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-warning/10 text-warning border border-warning/20"><AlertTriangle size={12}/> {status}</span>;
      case 'Lost': return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-danger/10 text-danger border border-danger/20"><ShieldAlert size={12}/> {status}</span>;
      default: return <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-input text-muted-foreground border border-border">{status}</span>;
    }
  };

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Top Actions & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="text" placeholder="Search by name, asset or ID..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
        </div>

        {isActiveTab && (
          <button onClick={() => openModal()} className="flex items-center gap-2 px-6 py-2 bg-primary text-card rounded-md font-bold text-sm shadow-lg shadow-primary/20 hover:bg-yellow-500 transition-all active:scale-95">
            <Plus size={16} /> Assign New Asset
          </button>
        )}
      </div>

      {/* Assets Table */}
      {assets.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No assets found for the selected criteria.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Asset Details</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Dates</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map(a => (
                <tr key={a.id} className="border-b border-border hover:bg-input/30 transition-colors">
                  
                  <td className="p-4">
                    <p className="text-sm font-bold text-foreground line-clamp-1">{a.assetName}</p>
                    <div className="flex gap-2 items-center mt-1">
                      <span className="text-[10px] font-bold bg-input px-1.5 py-0.5 rounded text-muted-foreground">{a.category}</span>
                      <span className="text-[10px] font-bold text-muted-foreground">ID: {a.assetIdNumber}</span>
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center"><User size={12}/></div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{a.employeeName}</p>
                        <p className="text-[10px] font-bold text-muted-foreground">{a.employeeId} • {a.department}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="p-4">
                    <p className="text-xs font-semibold text-foreground">Issued: <span className="text-muted-foreground font-bold">{a.issueDate}</span></p>
                    {isActiveTab ? (
                      <p className="text-xs font-semibold text-foreground mt-0.5">Return Due: <span className="text-danger font-bold">{a.expectedReturnDate}</span></p>
                    ) : (
                      <p className="text-xs font-semibold text-foreground mt-0.5">Returned On: <span className="text-success font-bold">{a.actualReturnDate || 'N/A'}</span></p>
                    )}
                  </td>
                  
                  <td className="p-4">
                    {getStatusBadge(a.status)}
                  </td>
                  
                  <td className="p-4 text-right">
                    <button onClick={() => openModal(a)} className="px-3 py-1.5 bg-input text-foreground font-bold text-xs rounded-md border border-border hover:bg-primary hover:text-white transition-colors">
                      {isActiveTab ? 'Update / Return' : 'View Details'}
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

