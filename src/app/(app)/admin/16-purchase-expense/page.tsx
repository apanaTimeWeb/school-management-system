import React from "react";
import AdminPurchaseRequestConfig from "./purchase_expense_components/AdminPurchaseRequestConfig";
import AdminPurchaseOrderConfig from "./purchase_expense_components/AdminPurchaseOrderConfig";
import AdminVendorConfig from "./purchase_expense_components/AdminVendorConfig";
import AdminQuotationConfig from "./purchase_expense_components/AdminQuotationConfig";
import AdminApprovalConfig from "./purchase_expense_components/AdminApprovalConfig";
import AdminPurchaseEntryConfig from "./purchase_expense_components/AdminPurchaseEntryConfig";
import AdminExpenseEntryConfig from "./purchase_expense_components/AdminExpenseEntryConfig";
import AdminExpenseCategoriesConfig from "./purchase_expense_components/AdminExpenseCategoriesConfig";
import AdminBillsConfig from "./purchase_expense_components/AdminBillsConfig";
import AdminPaymentStatusConfig from "./purchase_expense_components/AdminPaymentStatusConfig";
import AdminPurchaseReportsConfig from "./purchase_expense_components/AdminPurchaseReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Purchase & Expense Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Purchase & Expense</p>
        </div>
      </div>

      <AdminPurchaseRequestConfig />
      <AdminPurchaseOrderConfig />
      <AdminVendorConfig />
      <AdminQuotationConfig />
      <AdminApprovalConfig />
      <AdminPurchaseEntryConfig />
      <AdminExpenseEntryConfig />
      <AdminExpenseCategoriesConfig />
      <AdminBillsConfig />
      <AdminPaymentStatusConfig />
      <AdminPurchaseReportsConfig />
    </div>
  );
}
