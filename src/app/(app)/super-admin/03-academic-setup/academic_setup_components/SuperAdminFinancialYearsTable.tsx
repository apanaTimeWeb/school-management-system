"use client";

import { Edit, Lock, Unlock, PowerOff, FileText, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FinancialYear } from "../academic_setup_types/super_admin_financial_years.types";
import Link from "next/link";

export default function SuperAdminFinancialYearsTable() {
  const financialYears: FinancialYear[] = [
    {
      id: "fy_1",
      fyName: "FY 2026-2027",
      startDate: "2026-04-01",
      endDate: "2027-03-31",
      status: "Active"
    },
    {
      id: "fy_2",
      fyName: "FY 2025-2026",
      startDate: "2025-04-01",
      endDate: "2026-03-31",
      status: "Closed"
    },
    {
      id: "fy_3",
      fyName: "FY 2024-2025",
      startDate: "2024-04-01",
      endDate: "2025-03-31",
      status: "Locked"
    }
  ];

  const getStatusColor = (status: FinancialYear['status']) => {
    switch(status) {
      case 'Active': return 'bg-success-bg text-success border-success';
      case 'Closed': return 'bg-warning-bg text-warning border-warning';
      case 'Locked': return 'bg-danger-bg text-danger border-danger';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-primary-subtle text-text-secondary uppercase text-xs font-semibold">
          <tr>
            <th className="px-4 py-3 border-b border-border">Financial Year</th>
            <th className="px-4 py-3 border-b border-border">Duration</th>
            <th className="px-4 py-3 border-b border-border text-center">Status</th>
            <th className="px-4 py-3 border-b border-border text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {financialYears.map((fy) => (
            <tr key={fy.id} className="hover:bg-primary-subtle/50 transition-colors group cursor-pointer">
              <td className="px-4 py-3 font-semibold text-text-primary">
                <div className="flex items-center gap-2">
                  {fy.fyName}
                  {fy.status === 'Active' && <CheckCircle size={14} className="text-success" title="Active Financial Year" />}
                </div>
              </td>
              <td className="px-4 py-3 text-text-secondary">
                {new Date(fy.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} 
                <span className="mx-2">-</span> 
                {new Date(fy.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </td>
              <td className="px-4 py-3 text-center">
                <span className={cn("px-2.5 py-1 rounded-full text-[11px] font-semibold border", getStatusColor(fy.status))}>
                  {fy.status === 'Locked' && <Lock size={10} className="inline mr-1 -mt-0.5" />}
                  {fy.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  
                  {/* Financial Reports Action */}
                  <Link 
                    href={`/super-admin/financial-years/reports/${fy.id}`}
                    className="p-1.5 text-text-secondary hover:text-primary transition-colors" 
                    title="View Financial Reports"
                  >
                    <FileText size={16} />
                  </Link>

                  {/* Edit Action - Only if not locked */}
                  {fy.status !== 'Locked' && (
                    <button className="p-1.5 text-text-secondary hover:text-info transition-colors" title="Edit FY Details">
                      <Edit size={16} />
                    </button>
                  )}

                  {/* Close Action */}
                  {fy.status === 'Active' && (
                    <button className="p-1.5 text-text-secondary hover:text-warning transition-colors" title="Close Financial Year">
                      <PowerOff size={16} />
                    </button>
                  )}

                  {/* Lock Action */}
                  {(fy.status === 'Active' || fy.status === 'Closed') && (
                    <button className="p-1.5 text-text-secondary hover:text-danger transition-colors" title="Lock Financial Year (Irreversible without permission)">
                      <Lock size={16} />
                    </button>
                  )}

                  {/* Reopen Action (with permission) */}
                  {fy.status === 'Locked' && (
                    <button className="p-1.5 text-text-secondary hover:text-warning transition-colors" title="Reopen with Permission">
                      <Unlock size={16} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
