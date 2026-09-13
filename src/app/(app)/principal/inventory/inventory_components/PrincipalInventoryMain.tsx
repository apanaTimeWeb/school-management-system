"use client";
import React from 'react';
import { PackageSearch, MonitorSmartphone, AlertTriangle } from 'lucide-react';
import { usePrincipalInventoryStore } from '../inventory_store/usePrincipalInventoryStore';

import PrincipalInventoryOverviewTab from './PrincipalInventoryOverviewTab';
import PrincipalInventoryAllocationTab from './PrincipalInventoryAllocationTab';
import PrincipalInventoryIssuesTab from './PrincipalInventoryIssuesTab';
import PrincipalAssetModal from './PrincipalAssetModal';
import PrincipalInventoryIssueModal from './PrincipalInventoryIssueModal';

export default function PrincipalInventoryMain() {
  const { activeTab, setActiveTab } = usePrincipalInventoryStore();

  const tabs = [
    { id: 'overview', label: 'Inventory Summary', icon: <PackageSearch size={16} /> },
    { id: 'allocation', label: 'Asset Allocation', icon: <MonitorSmartphone size={16} /> },
    { id: 'issues', label: 'Damaged/Lost Issues', icon: <AlertTriangle size={16} /> }
  ] as const;

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <PackageSearch className="text-primary" size={24} />
            Inventory & Assets
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            Monitor school assets, stock levels, asset allocation, and track damaged/lost items.
          </p>
        </div>
      </div>

      <div className="flex border-b border-border bg-card rounded-t-lg overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 text-[14px] font-bold whitespace-nowrap transition-all border-b-2 ${
              activeTab === tab.id
                ? 'text-primary border-primary bg-primary/10'
                : 'text-text-secondary border-transparent hover:text-text-primary hover:bg-white/5'
            }`}
          >
            <span className={activeTab === tab.id ? 'text-primary' : 'text-text-secondary'}>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-bg-main pt-6 overflow-x-hidden">
        {activeTab === 'overview' && <PrincipalInventoryOverviewTab />}
        {activeTab === 'allocation' && <PrincipalInventoryAllocationTab />}
        {activeTab === 'issues' && <PrincipalInventoryIssuesTab />}
      </div>

      <PrincipalAssetModal />
      <PrincipalInventoryIssueModal />
    </div>
  );
}
