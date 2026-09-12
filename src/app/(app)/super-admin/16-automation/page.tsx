import React from 'react';

import SuperAdminAutomationRulesConfig from './automation_components/SuperAdminAutomationRulesConfig';

export default function automationPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">16-AUTOMATION</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">AutomationRules</h2>
        <SuperAdminAutomationRulesConfig />
      </section>
    </div>
  );
}
