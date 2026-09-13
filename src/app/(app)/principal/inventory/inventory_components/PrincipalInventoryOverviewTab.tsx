"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalInventoryStats } from '../inventory_types/PrincipalInventory.types';
import { fetchPrincipalInventoryStats } from '../inventory_api/PrincipalInventoryApi';
import { PackageSearch, IndianRupee, AlertTriangle, PenTool } from 'lucide-react';
import clsx from 'clsx';

export default function PrincipalInventoryOverviewTab() {
  const [stats, setStats] = useState<PrincipalInventoryStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalInventoryStats().then(data => {
      if (isMounted) {
        setStats(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading || !stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => <div key={i} className="h-40 bg-skeleton-base animate-pulse rounded-xl" />)}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><IndianRupee size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Total Assets Value</p>
            <h3 className="text-[20px] font-bold text-text-primary">{stats.totalAssetsValue}</h3>
          </div>
        </div>
        <div className="bg-card border border-warning/30 p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning shrink-0"><AlertTriangle size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Low Stock Items</p>
            <h3 className="text-[20px] font-bold text-text-primary">{stats.lowStockItems}</h3>
          </div>
        </div>
        <div className="bg-card border border-info/30 p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0"><PenTool size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">In Maintenance</p>
            <h3 className="text-[20px] font-bold text-text-primary">{stats.itemsInMaintenance}</h3>
          </div>
        </div>
        <div className="bg-card border border-danger/30 p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-danger/10 flex items-center justify-center text-danger shrink-0"><PackageSearch size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Damaged (This Month)</p>
            <h3 className="text-[20px] font-bold text-text-primary">{stats.damagedItemsThisMonth}</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><AlertTriangle className="text-warning"/> Stock Alerts</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <div>
                <p className="text-[14px] font-bold text-text-primary">A4 Printer Paper Rims</p>
                <p className="text-[12px] text-text-secondary">Category: Stationery</p>
              </div>
              <div className="text-right">
                <span className="text-[14px] font-bold text-danger">Only 5 left</span>
                <p className="text-[11px] text-text-secondary">Optimal: 50</p>
              </div>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border/50">
              <div>
                <p className="text-[14px] font-bold text-text-primary">Whiteboard Markers (Black)</p>
                <p className="text-[12px] text-text-secondary">Category: Stationery</p>
              </div>
              <div className="text-right">
                <span className="text-[14px] font-bold text-danger">Out of stock</span>
                <p className="text-[11px] text-text-secondary">Optimal: 100</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <h3 className="text-[16px] font-bold text-text-primary mb-4 flex items-center gap-2"><PenTool className="text-info"/> Maintenance Schedule</h3>
          <div className="space-y-3">
             <div className="p-3 bg-info/5 border border-info/20 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-[13px] font-bold text-text-primary mb-1">AC Servicing (Main Block)</p>
                  <p className="text-[12px] text-text-secondary">Scheduled for: 15th Nov 2023</p>
                </div>
                <span className="text-[11px] font-bold bg-warning/10 text-warning px-2 py-0.5 rounded border border-warning/20">Upcoming</span>
             </div>
             <div className="p-3 bg-info/5 border border-info/20 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-[13px] font-bold text-text-primary mb-1">Computer Lab 2 Updates</p>
                  <p className="text-[12px] text-text-secondary">Scheduled for: 18th Nov 2023</p>
                </div>
                <span className="text-[11px] font-bold bg-warning/10 text-warning px-2 py-0.5 rounded border border-warning/20">Upcoming</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
