import { Calculator } from "lucide-react";
import SuperAdminFeeFinanceConfig from "./super_admin_fee_finance_components/SuperAdminFeeFinanceConfig";

export default function SuperAdminFeeFinancePage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Calculator size={24} className="text-primary" /> Fee & Finance Master Settings
          </h1>
        </div>
      </div>

      <SuperAdminFeeFinanceConfig />
    </div>
  );
}
