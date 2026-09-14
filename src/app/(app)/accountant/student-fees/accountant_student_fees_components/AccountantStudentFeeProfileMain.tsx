"use client";
import React from "react";
import AccountantStudentFeeHeader from "./AccountantStudentFeeHeader";
import { useAccountantStudentFeesStore } from "../accountant_student_fees_store/useAccountantStudentFeesStore";
import clsx from "clsx";
import AccountantStudentFeeStructure from "./AccountantStudentFeeStructure";
import AccountantStudentFeePayments from "./AccountantStudentFeePayments";
import AccountantStudentFeeDiscounts from "./AccountantStudentFeeDiscounts";
import AccountantStudentFeeFines from "./AccountantStudentFeeFines";
import AccountantStudentFeeHistory from "./AccountantStudentFeeHistory";
import AccountantStudentFeeModals from "./AccountantStudentFeeModals";

// RESPONSIBILITY: Orchestrates the individual student fee profile view, managing tabs and rendering correct sub-components.

export default function AccountantStudentFeeProfileMain({ studentId }: { studentId: string }) {
  const { activeProfileTab, setActiveProfileTab } = useAccountantStudentFeesStore();

  const TABS = [
    { id: 'structure', label: 'Fee Structure & Assigned' },
    { id: 'payments', label: 'Payments & Pending' },
    { id: 'discounts', label: 'Discounts & Concessions' },
    { id: 'fines', label: 'Fines & Late Fees' },
    { id: 'history', label: 'Transaction History' },
  ] as const;

  const renderContent = () => {
    switch (activeProfileTab) {
      case 'structure': return <AccountantStudentFeeStructure />;
      case 'payments': return <AccountantStudentFeePayments />;
      case 'discounts': return <AccountantStudentFeeDiscounts />;
      case 'fines': return <AccountantStudentFeeFines />;
      case 'history': return <AccountantStudentFeeHistory />;
      default: return null;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto fade-in">
      
      <AccountantStudentFeeHeader studentId={studentId} />

      {/* Tabs Navigation */}
      <div className="flex overflow-x-auto border-b border-border mb-6 custom-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveProfileTab(tab.id)}
            className={clsx(
              "whitespace-nowrap px-6 py-3 text-sm font-semibold transition-colors relative",
              activeProfileTab === tab.id 
                ? "text-primary bg-primary/5" 
                : "text-text-secondary hover:text-text-primary hover:bg-bg-page"
            )}
          >
            {tab.label}
            {activeProfileTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="fade-in">
        {renderContent()}
      </div>

      {/* Hidden Modals (mounted at root of profile) */}
      <AccountantStudentFeeModals />
    </div>
  );
}
