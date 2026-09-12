"use client";

import { Globe2, AlertCircle, Info } from "lucide-react";
import SuperAdminLanguageTable from "./super_admin_language_management_components/SuperAdminLanguageTable";
import SuperAdminTranslationTools from "./super_admin_language_management_components/SuperAdminTranslationTools";

export default function SuperAdminLanguageManagementPage() {
  return (
    <div className="flex flex-col gap-6 max-w-[1200px] mx-auto pb-12">
      
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
            <Globe2 size={24} className="text-primary" /> Language Management
          </h1>
        </div>
      </div>

      {/* Top Alert matching exact checklist string */}
      <div className="flex items-start gap-3 p-4 bg-info-bg border border-info/30 rounded-md text-info shadow-sm">
        <Info size={18} className="shrink-0 mt-0.5" />
        <p className="text-sm font-bold">Public/user-facing ERP में:</p>
      </div>

      {/* Languages Table */}
      <SuperAdminLanguageTable />

      {/* Translation Tools */}
      <SuperAdminTranslationTools />

      {/* Bottom Alert matching exact checklist string */}
      <div className="flex items-start gap-3 p-4 bg-bg-page border-l-4 border-l-warning border border-y-border border-r-border rounded-r-md text-text-secondary shadow-sm mt-4">
        <AlertCircle size={18} className="shrink-0 mt-0.5 text-warning" />
        <p className="text-sm font-semibold text-text-primary">Admin panel को आवश्यकता अनुसार English-only रखा जा सकता है।</p>
      </div>

    </div>
  );
}
