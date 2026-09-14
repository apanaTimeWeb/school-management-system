import { create } from 'zustand';

interface AccountantExportState {
  startDate: string;
  setStartDate: (date: string) => void;
  
  endDate: string;
  setEndDate: (date: string) => void;

  selectedClasses: string[];
  toggleClass: (cls: string) => void;
  selectAllClasses: (classes: string[]) => void;
  clearClasses: () => void;

  selectedFeeTypes: string[];
  toggleFeeType: (fee: string) => void;

  selectedMethods: string[];
  toggleMethod: (method: string) => void;
}

export const useAccountantExportStore = create<AccountantExportState>((set) => ({
  startDate: "",
  setStartDate: (date) => set({ startDate: date }),
  
  endDate: "",
  setEndDate: (date) => set({ endDate: date }),

  selectedClasses: [],
  toggleClass: (cls) => set((state) => ({
    selectedClasses: state.selectedClasses.includes(cls)
      ? state.selectedClasses.filter(c => c !== cls)
      : [...state.selectedClasses, cls]
  })),
  selectAllClasses: (classes) => set({ selectedClasses: classes }),
  clearClasses: () => set({ selectedClasses: [] }),

  selectedFeeTypes: [],
  toggleFeeType: (fee) => set((state) => ({
    selectedFeeTypes: state.selectedFeeTypes.includes(fee)
      ? state.selectedFeeTypes.filter(f => f !== fee)
      : [...state.selectedFeeTypes, fee]
  })),

  selectedMethods: [],
  toggleMethod: (method) => set((state) => ({
    selectedMethods: state.selectedMethods.includes(method)
      ? state.selectedMethods.filter(m => m !== method)
      : [...state.selectedMethods, method]
  })),
}));
