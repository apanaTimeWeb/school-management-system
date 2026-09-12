import React from "react";
import AdminInventoryConfig from "./inventory_assets_components/AdminInventoryConfig";
import AdminCategoriesConfig from "./inventory_assets_components/AdminCategoriesConfig";
import AdminItemsConfig from "./inventory_assets_components/AdminItemsConfig";
import AdminStockInConfig from "./inventory_assets_components/AdminStockInConfig";
import AdminStockOutConfig from "./inventory_assets_components/AdminStockOutConfig";
import AdminStockTransferConfig from "./inventory_assets_components/AdminStockTransferConfig";
import AdminLowStockConfig from "./inventory_assets_components/AdminLowStockConfig";
import AdminDamagedItemsConfig from "./inventory_assets_components/AdminDamagedItemsConfig";
import AdminLostItemsConfig from "./inventory_assets_components/AdminLostItemsConfig";
import AdminAssetRegisterConfig from "./inventory_assets_components/AdminAssetRegisterConfig";
import AdminAssetAssignmentConfig from "./inventory_assets_components/AdminAssetAssignmentConfig";
import AdminVendorConfig from "./inventory_assets_components/AdminVendorConfig";
import AdminPurchaseRecordsConfig from "./inventory_assets_components/AdminPurchaseRecordsConfig";
import AdminStockReportsConfig from "./inventory_assets_components/AdminStockReportsConfig";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Inventory & Assets Dashboard</h1>
          <p className="text-sm text-text-secondary mt-1">Manage all features related to Inventory and Assets</p>
        </div>
      </div>

      <AdminInventoryConfig />
      <AdminCategoriesConfig />
      <AdminItemsConfig />
      <AdminStockInConfig />
      <AdminStockOutConfig />
      <AdminStockTransferConfig />
      <AdminLowStockConfig />
      <AdminDamagedItemsConfig />
      <AdminLostItemsConfig />
      <AdminAssetRegisterConfig />
      <AdminAssetAssignmentConfig />
      <AdminVendorConfig />
      <AdminPurchaseRecordsConfig />
      <AdminStockReportsConfig />
    </div>
  );
}
