"use client";
import React from "react";
import AccountantCollectFeeStudentSearch from "./AccountantCollectFeeStudentSearch";
import AccountantCollectFeeForm from "./AccountantCollectFeeForm";
import AccountantCollectFeeSummaryModal from "./AccountantCollectFeeSummaryModal";

// RESPONSIBILITY: Root component orchestrating the Collect Fee view structure.

export default function AccountantCollectFeeMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Collect Fee</h1>
          <p className="text-sm text-text-secondary mt-1">Process new fee payments, select payment modes, and generate receipts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        
        {/* Left Column - Student Search & Summary */}
        <div className="lg:col-span-1 h-full">
          <AccountantCollectFeeStudentSearch />
        </div>

        {/* Right Column - The Interactive Form */}
        <div className="lg:col-span-2 h-full">
          <AccountantCollectFeeForm />
        </div>

      </div>

      {/* Popups */}
      <AccountantCollectFeeSummaryModal />
      
    </div>
  );
}
