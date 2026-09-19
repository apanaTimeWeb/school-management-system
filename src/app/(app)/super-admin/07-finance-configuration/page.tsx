"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import { CreditCard, Landmark } from 'lucide-react';

import SuperAdminFeeFinanceConfig from './finance_configuration_components/SuperAdminFeeFinanceConfig';
import SuperAdminPaymentGatewayConfig from './finance_configuration_components/SuperAdminPaymentGatewayConfig';
import MissingFeaturesUI from './MissingFeaturesUI';

const TABS = [
  { id: 'gateway', label: 'Payment Gateway', icon: CreditCard },
  { id: 'fee', label: 'Fee & Finance Config', icon: Landmark },
];

export default function FinanceConfigurationPage() {
  const [activeTab, setActiveTab] = useState('gateway');

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Finance & Payment Gateways</h1>
          <p className="text-sm text-text-secondary mt-1">Configure global fee structures, payment gateways, and reconciliation processes.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-text-secondary hover:text-primary hover:bg-page"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-4">
        {activeTab === 'gateway' && (
          <div className="flex flex-col gap-6">
            <SuperAdminPaymentGatewayConfig />
          </div>
        )}

        {activeTab === 'fee' && (
          <div className="flex flex-col gap-6">
            <SuperAdminFeeFinanceConfig />
          </div>
        )}
      </div>
          <MissingFeaturesUI />
    </div>
  );
}
