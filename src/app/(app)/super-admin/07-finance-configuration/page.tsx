import React from 'react';

import SuperAdminFeeFinanceConfig from './finance_configuration_components/SuperAdminFeeFinanceConfig';
import SuperAdminPaymentGatewayConfig from './finance_configuration_components/SuperAdminPaymentGatewayConfig';

export default function financeconfigurationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">07-FINANCE-CONFIGURATION</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">FeeFinance</h2>
        <SuperAdminFeeFinanceConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">PaymentGateway</h2>
        <SuperAdminPaymentGatewayConfig />
      </section>
    </div>
  );
}
