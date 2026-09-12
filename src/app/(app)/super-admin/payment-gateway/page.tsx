import { CreditCard } from "lucide-react";
import SuperAdminPaymentGatewayConfig from "./super_admin_payment_gateway_components/SuperAdminPaymentGatewayConfig";

export default function SuperAdminPaymentGatewayPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <CreditCard size={24} className="text-primary" /> Payment Gateway
          </h1>
        </div>
      </div>

      <SuperAdminPaymentGatewayConfig />
    </div>
  );
}
