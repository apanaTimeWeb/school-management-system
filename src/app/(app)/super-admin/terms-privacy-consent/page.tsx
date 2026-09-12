import { FileCheck2 } from "lucide-react";
import SuperAdminTermsPrivacyConsentConfig from "./super_admin_terms_privacy_consent_components/SuperAdminTermsPrivacyConsentConfig";

export default function SuperAdminTermsPrivacyConsentPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            47. 📜 Terms / Privacy / Consent
          </h1>
        </div>
      </div>

      <SuperAdminTermsPrivacyConsentConfig />
    </div>
  );
}
