import { create } from 'zustand';
import { PaymentType, PaymentCategory, OfflineMethod, OnlineMethod, StudentSearchRecord } from '../accountant_collect_fee_types/AccountantCollectFeeTypes';

interface AccountantCollectFeeState {
  selectedStudent: StudentSearchRecord | null;
  setSelectedStudent: (student: StudentSearchRecord | null) => void;

  paymentType: PaymentType;
  setPaymentType: (type: PaymentType) => void;

  paymentCategory: PaymentCategory;
  setPaymentCategory: (category: PaymentCategory) => void;

  offlineMethod: OfflineMethod;
  setOfflineMethod: (method: OfflineMethod) => void;

  onlineMethod: OnlineMethod;
  setOnlineMethod: (method: OnlineMethod) => void;

  amountToCollect: string;
  setAmountToCollect: (amount: string) => void;

  isReviewModalOpen: boolean;
  setReviewModalOpen: (isOpen: boolean) => void;
  
  isSuccessModalOpen: boolean;
  setSuccessModalOpen: (isOpen: boolean) => void;
}

export const useAccountantCollectFeeStore = create<AccountantCollectFeeState>((set) => ({
  selectedStudent: null,
  setSelectedStudent: (student) => set({ selectedStudent: student, amountToCollect: student ? student.totalPending.toString() : "" }),

  paymentType: 'Full',
  setPaymentType: (type) => set({ paymentType: type }),

  paymentCategory: 'Online',
  setPaymentCategory: (category) => set({ paymentCategory: category }),

  offlineMethod: 'Cash',
  setOfflineMethod: (method) => set({ offlineMethod: method }),

  onlineMethod: 'UPI',
  setOnlineMethod: (method) => set({ onlineMethod: method }),

  amountToCollect: "",
  setAmountToCollect: (amount) => set({ amountToCollect: amount }),

  isReviewModalOpen: false,
  setReviewModalOpen: (isOpen) => set({ isReviewModalOpen: isOpen }),

  isSuccessModalOpen: false,
  setSuccessModalOpen: (isOpen) => set({ isSuccessModalOpen: isOpen }),
}));
