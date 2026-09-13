import { create } from 'zustand';
import { PrincipalAnalyticsTab, PrincipalAnalyticsTrendMetric, PrincipalRiskStudent } from '../analytics_types/PrincipalAnalytics.types';

interface PrincipalAnalyticsState {
  activeTab: PrincipalAnalyticsTab;
  setActiveTab: (tab: PrincipalAnalyticsTab) => void;

  selectedTrend: PrincipalAnalyticsTrendMetric | null;
  setSelectedTrend: (trend: PrincipalAnalyticsTrendMetric | null) => void;

  selectedRiskStudent: PrincipalRiskStudent | null;
  setSelectedRiskStudent: (student: PrincipalRiskStudent | null) => void;
}

export const usePrincipalAnalyticsStore = create<PrincipalAnalyticsState>((set) => ({
  activeTab: 'trends',
  setActiveTab: (tab) => set({ activeTab: tab }),

  selectedTrend: null,
  setSelectedTrend: (trend) => set({ selectedTrend: trend }),

  selectedRiskStudent: null,
  setSelectedRiskStudent: (student) => set({ selectedRiskStudent: student }),
}));
