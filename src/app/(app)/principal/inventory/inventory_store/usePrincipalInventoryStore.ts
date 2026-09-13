import { create } from 'zustand';
import { PrincipalAsset, PrincipalInventoryIssue } from '../inventory_types/PrincipalInventory.types';

interface PrincipalInventoryState {
  activeTab: 'overview' | 'allocation' | 'issues';
  setActiveTab: (tab: 'overview' | 'allocation' | 'issues') => void;

  selectedAsset: PrincipalAsset | null;
  setSelectedAsset: (asset: PrincipalAsset | null) => void;

  selectedIssue: PrincipalInventoryIssue | null;
  setSelectedIssue: (issue: PrincipalInventoryIssue | null) => void;
}

export const usePrincipalInventoryStore = create<PrincipalInventoryState>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedAsset: null,
  setSelectedAsset: (asset) => set({ selectedAsset: asset }),

  selectedIssue: null,
  setSelectedIssue: (issue) => set({ selectedIssue: issue }),
}));
