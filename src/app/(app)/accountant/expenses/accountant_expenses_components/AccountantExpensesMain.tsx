import React from "react";
import AccountantExpensesMetrics from "./AccountantExpensesMetrics";
import AccountantExpensesFilters from "./AccountantExpensesFilters";
import AccountantExpensesTable from "./AccountantExpensesTable";
import AccountantExpensesModals from "./AccountantExpensesModals";

export default function AccountantExpensesMain() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6 fade-in h-full flex flex-col">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Expense Management</h1>
          <p className="text-sm text-text-secondary mt-1">Record utility bills, salaries, and maintenance costs with approval tracking.</p>
        </div>
      </div>

      <AccountantExpensesMetrics />
      
      <AccountantExpensesFilters />
      
      <div className="flex-1 min-h-0">
        <AccountantExpensesTable />
      </div>

      <AccountantExpensesModals />
      
    </div>
  );
}
