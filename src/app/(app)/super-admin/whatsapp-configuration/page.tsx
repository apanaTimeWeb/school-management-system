import { MessageCircle } from "lucide-react";
import SuperAdminWhatsappConfig from "./super_admin_whatsapp_configuration_components/SuperAdminWhatsappConfig";

export default function SuperAdminWhatsappConfigurationPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <MessageCircle size={24} className="text-primary" /> WhatsApp Configuration
          </h1>
        </div>
      </div>

      <SuperAdminWhatsappConfig />
    </div>
  );
}
