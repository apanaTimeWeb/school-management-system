import React from 'react';

import SuperAdminApprovalWorkflowConfig from './approval_workflow_components/SuperAdminApprovalWorkflowConfig';
import MissingFeaturesUI from './MissingFeaturesUI';

export default function approvalworkflowPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">15-APPROVAL-WORKFLOW</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">ApprovalWorkflow</h2>
        <SuperAdminApprovalWorkflowConfig />
      </section>
          <MissingFeaturesUI />
    </div>
  );
}
