"use client";
import React, { useState } from 'react';
import { CheckSquare, ChevronLeft } from 'lucide-react';
import { usePrincipalApprovalsStore } from '../approvals_store/usePrincipalApprovalsStore';

import PrincipalApprovalsDashboard from './PrincipalApprovalsDashboard';
import PrincipalApprovalsList from './PrincipalApprovalsList';
import PrincipalApprovalActionModal from './PrincipalApprovalActionModal';

export default function PrincipalApprovalsMain() {
  const { selectedCategory, setSelectedCategory } = usePrincipalApprovalsStore();

  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {selectedCategory !== 'All' ? (
            <button 
              onClick={() => setSelectedCategory('All')}
              className="flex items-center gap-1 text-[14px] font-bold text-text-secondary hover:text-primary transition-colors mb-2"
            >
              <ChevronLeft size={16}/> Back to Summary
            </button>
          ) : null}
          <h1 className="text-[24px] font-bold text-text-primary flex items-center gap-2">
            <CheckSquare className="text-warning" size={24} />
            {selectedCategory !== 'All' ? `${selectedCategory} Approvals` : 'Approval Center'}
          </h1>
          <p className="text-[14px] text-text-secondary mt-1">
            {selectedCategory !== 'All' 
              ? `Review and take action on pending ${selectedCategory.toLowerCase()} requests.` 
              : 'Central hub for all pending approvals requiring Principal authorization.'}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-x-hidden">
        {selectedCategory === 'All' ? (
          <PrincipalApprovalsDashboard />
        ) : (
          <PrincipalApprovalsList />
        )}
      </div>

      <PrincipalApprovalActionModal />
    </div>
  );
}
