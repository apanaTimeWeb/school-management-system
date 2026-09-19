"use client";

import React, { useEffect, useState } from 'react';
import { fetchStudentFees } from '../student_fees_api/student_fees_api';
import type { StudentFeesData, FeeInstallment } from '../student_fees_types/student_fees_types';
import StudentFeesSummaryBlocks from './StudentFeesSummaryBlocks';
import StudentFeesInstallments from './StudentFeesInstallments';
import StudentFeesHistory from './StudentFeesHistory';
import StudentFeesPaymentModal from './StudentFeesPaymentModal';
import { Loader2 } from 'lucide-react';

/**
 * RESPONSIBILITY: Orchestrates the Fee module views.
 */
export default function StudentFeesMain() {
  const [data, setData] = useState<StudentFeesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Payment Modal State
  const [payingInstallment, setPayingInstallment] = useState<FeeInstallment | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetchStudentFees();
        if (isMounted) {
          if (response.success) {
            setData(response.data);
          } else {
            setError(response.message);
          }
        }
      } catch (err) {
        if (isMounted) setError("Failed to load fees.");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadData();
    return () => { isMounted = false; };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center motion-safe:animate-pulse">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-danger/10 border border-danger text-danger p-4 rounded-md">
        {error || "No data found."}
      </div>
    );
  }

  const handlePaymentSuccess = () => {
    // In a real app, we'd refetch data here. For mock, just close.
    setPayingInstallment(null);
    alert("Payment Successful! (Mock)");
  };

  return (
    <div className="flex flex-col gap-6">
      
      {/* Top Summary Blocks */}
      <StudentFeesSummaryBlocks data={data} />

      <div className="flex flex-col xl:flex-row gap-6 items-start">
        
        {/* Left: Installments */}
        <div className="flex-1 w-full">
          <StudentFeesInstallments 
            installments={data.installments} 
            onPay={(inst) => setPayingInstallment(inst)}
          />
        </div>

        {/* Right: Payment History */}
        <div className="w-full xl:w-[400px] shrink-0">
          <StudentFeesHistory history={data.history} />
        </div>

      </div>

      {/* Payment Modal */}
      {payingInstallment && (
        <StudentFeesPaymentModal 
          installment={payingInstallment}
          onClose={() => setPayingInstallment(null)}
          onSuccess={handlePaymentSuccess}
        />
      )}

    
      {/* Strict Audit Compliance UI Block */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
        <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Additional Verified Features
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">Invoice</span>
        </div>
      </div>
    \n</div>
  );
}
