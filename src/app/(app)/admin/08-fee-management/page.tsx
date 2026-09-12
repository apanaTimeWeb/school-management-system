import React from "react";
import AdminFeeStructureConfig from "./fee_management_components/AdminFeeStructureConfig";
import AdminClasswiseFeesConfig from "./fee_management_components/AdminClasswiseFeesConfig";
import AdminStudentwiseFeesConfig from "./fee_management_components/AdminStudentwiseFeesConfig";
import AdminFeeCollectionConfig from "./fee_management_components/AdminFeeCollectionConfig";
import AdminOnlinePaymentConfig from "./fee_management_components/AdminOnlinePaymentConfig";
import AdminOfflinePaymentConfig from "./fee_management_components/AdminOfflinePaymentConfig";
import AdminPartialPaymentConfig from "./fee_management_components/AdminPartialPaymentConfig";
import AdminInstallmentConfig from "./fee_management_components/AdminInstallmentConfig";
import AdminDiscountsConfig from "./fee_management_components/AdminDiscountsConfig";
import AdminScholarshipsConfig from "./fee_management_components/AdminScholarshipsConfig";
import AdminConcessionConfig from "./fee_management_components/AdminConcessionConfig";
import AdminFineConfig from "./fee_management_components/AdminFineConfig";
import AdminLateFeeConfig from "./fee_management_components/AdminLateFeeConfig";
import AdminRefundConfig from "./fee_management_components/AdminRefundConfig";
import AdminFeeReceiptConfig from "./fee_management_components/AdminFeeReceiptConfig";
import AdminInvoiceConfig from "./fee_management_components/AdminInvoiceConfig";
import AdminOutstandingFeesConfig from "./fee_management_components/AdminOutstandingFeesConfig";
import AdminDueDateConfig from "./fee_management_components/AdminDueDateConfig";
import AdminPaymentHistoryConfig from "./fee_management_components/AdminPaymentHistoryConfig";
import AdminFeeDefaultersConfig from "./fee_management_components/AdminFeeDefaultersConfig";
import AdminCollectionReportsConfig from "./fee_management_components/AdminCollectionReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Fee Management Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Fee Management</p>
        </div>
      </div>

      <AdminFeeStructureConfig />
      <AdminClasswiseFeesConfig />
      <AdminStudentwiseFeesConfig />
      <AdminFeeCollectionConfig />
      <AdminOnlinePaymentConfig />
      <AdminOfflinePaymentConfig />
      <AdminPartialPaymentConfig />
      <AdminInstallmentConfig />
      <AdminDiscountsConfig />
      <AdminScholarshipsConfig />
      <AdminConcessionConfig />
      <AdminFineConfig />
      <AdminLateFeeConfig />
      <AdminRefundConfig />
      <AdminFeeReceiptConfig />
      <AdminInvoiceConfig />
      <AdminOutstandingFeesConfig />
      <AdminDueDateConfig />
      <AdminPaymentHistoryConfig />
      <AdminFeeDefaultersConfig />
      <AdminCollectionReportsConfig />
    </div>
  );
}
