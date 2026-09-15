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

    </div>
  );
}
