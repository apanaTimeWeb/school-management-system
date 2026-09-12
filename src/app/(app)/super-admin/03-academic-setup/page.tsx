import React from 'react';

import SuperAdminFinancialYearsTable from './academic_setup_components/SuperAdminFinancialYearsTable';
import SuperAdminHolidayWorkingDayMasterConfig from './academic_setup_components/SuperAdminHolidayWorkingDayMasterConfig';
import SuperAdminSessionsTable from './academic_setup_components/SuperAdminSessionsTable';

export default function academicsetupPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">03-ACADEMIC-SETUP</h1>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">FinancialYearsTable</h2>
        <SuperAdminFinancialYearsTable />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">HolidayWorkingDayMaster</h2>
        <SuperAdminHolidayWorkingDayMasterConfig />
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 border-b border-border pb-2">SessionsTable</h2>
        <SuperAdminSessionsTable />
      </section>
    </div>
  );
}
