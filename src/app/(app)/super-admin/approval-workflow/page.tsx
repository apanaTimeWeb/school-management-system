import { Workflow } from "lucide-react";
import SuperAdminApprovalWorkflowConfig from "./super_admin_approval_workflow_components/SuperAdminApprovalWorkflowConfig";

export default function SuperAdminApprovalWorkflowPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            42. 🧑⚖️ Approval Workflow Configuration
          </h1>
        </div>
      </div>

      <SuperAdminApprovalWorkflowConfig />
    </div>
  );
}
