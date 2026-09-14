"use client";

import { Search, Printer, CheckSquare, Square, Eye } from "lucide-react";
import type { IdCardEmployeeRecord } from "../hr_id_cards_types/AdminHrIdCardsTypes";

interface AdminHrIdCardsListProps {
  employees: IdCardEmployeeRecord[];
  roleFilter: string; setRoleFilter: (s: string) => void;
  searchFilter: string; setSearchFilter: (s: string) => void;
  selectedIds: string[];
  toggleSelection: (id: string) => void;
  toggleSelectAll: () => void;
  previewSingle: (r: IdCardEmployeeRecord) => void;
  previewBulk: () => void;
}

export default function AdminHrIdCardsList({
  employees, roleFilter, setRoleFilter, searchFilter, setSearchFilter, 
  selectedIds, toggleSelection, toggleSelectAll, previewSingle, previewBulk
}: AdminHrIdCardsListProps) {

  const allSelected = employees.length > 0 && selectedIds.length === employees.length;

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      
      {/* Top Actions & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 p-4 bg-card border border-border rounded-lg shadow-sm">
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search employee..." value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} className="pl-9 pr-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none w-full" />
          </div>
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="px-4 py-2 bg-input border border-border rounded-md text-sm text-foreground font-bold focus:border-primary outline-none">
            <option value="All">All Roles</option>
            <option value="Teacher">Teacher</option>
            <option value="Staff">Staff</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button 
          onClick={previewBulk}
          className={`flex items-center gap-2 px-6 py-2 rounded-md font-bold text-sm shadow-lg transition-all active:scale-95 ${selectedIds.length > 0 ? 'bg-primary text-card hover:bg-yellow-500 shadow-primary/20' : 'bg-input text-muted-foreground cursor-not-allowed opacity-50'}`}
        >
          <Printer size={16} /> Bulk Generate ({selectedIds.length})
        </button>

      </div>

      {/* Table */}
      {employees.length === 0 ? (
         <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
           <span className="text-muted-foreground text-sm font-bold">No employees found.</span>
         </div>
      ) : (
        <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-border bg-input/50">
                <th className="p-4 w-12 text-center">
                   <button onClick={toggleSelectAll} className="text-muted-foreground hover:text-primary transition-colors">
                     {allSelected ? <CheckSquare size={18} className="text-primary"/> : <Square size={18}/>}
                   </button>
                </th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Role & Dept</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Print Status</th>
                <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(r => {
                const isSelected = selectedIds.includes(r.id);
                return (
                  <tr key={r.id} className={`border-b border-border transition-colors group ${isSelected ? 'bg-primary/5' : 'hover:bg-input/30'}`}>
                    <td className="p-4 text-center">
                       <button onClick={() => toggleSelection(r.id)} className="text-muted-foreground hover:text-primary transition-colors">
                         {isSelected ? <CheckSquare size={18} className="text-primary"/> : <Square size={18}/>}
                       </button>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{r.employeeName}</span>
                        <span className="text-xs font-medium text-muted-foreground">{r.employeeId}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-foreground">{r.designation}</span>
                        <span className="text-xs font-medium text-muted-foreground">{r.department}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {r.idCardPrinted ? (
                        <span className="bg-success/10 text-success border border-success/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Printed</span>
                      ) : (
                        <span className="bg-warning/10 text-warning border border-warning/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Not Printed</span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <button onClick={() => previewSingle(r)} className="px-3 py-1.5 bg-input text-foreground font-bold text-xs rounded-md border border-border hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-1 shadow-sm">
                        <Eye size={14} /> Preview Card
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
