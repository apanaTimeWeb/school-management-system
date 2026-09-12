import React from 'react';

import SuperAdminCategoryMasterDataConfig from './system_settings_components/SuperAdminCategoryMasterDataConfig';
import SuperAdminGeneralSettingsForm from './system_settings_components/SuperAdminGeneralSettingsForm';
import SuperAdminLanguageTable from './system_settings_components/SuperAdminLanguageTable';
import SuperAdminNumberingSequenceConfig from './system_settings_components/SuperAdminNumberingSequenceConfig';
import SuperAdminSchoolBrandingConfig from './system_settings_components/SuperAdminSchoolBrandingConfig';
import SuperAdminTranslationTools from './system_settings_components/SuperAdminTranslationTools';

export default function systemsettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">05-SYSTEM-SETTINGS</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">CategoryMasterData</h2>
        <SuperAdminCategoryMasterDataConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">GeneralSettingsForm</h2>
        <SuperAdminGeneralSettingsForm />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">LanguageTable</h2>
        <SuperAdminLanguageTable />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">NumberingSequence</h2>
        <SuperAdminNumberingSequenceConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SchoolBranding</h2>
        <SuperAdminSchoolBrandingConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">TranslationTools</h2>
        <SuperAdminTranslationTools />
      </section>
    </div>
  );
}
