"use client";

import { useAdminHrAssets } from "./useAdminHrAssets";
import AdminHrAssetsTabs from "./AdminHrAssetsTabs";
import AdminHrAssetsList from "./AdminHrAssetsList";
import AdminHrAssetModal from "./AdminHrAssetModal";
import { Loader2 } from "lucide-react";

export default function AdminHrAssetsMain() {
  const {
    activeTab, setActiveTab,
    assets, isLoading,
    searchFilter, setSearchFilter,
    isAssetModalOpen, selectedAsset, openAssetModal, closeAssetModal, saveAsset
  } = useAdminHrAssets();

  return (
    <div className="flex flex-col w-full">
      <AdminHrAssetsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Asset Inventory...</span>
        </div>
      ) : (
        <div className="w-full">
          <AdminHrAssetsList 
            assets={assets}
            isActiveTab={activeTab === 'Active'}
            searchFilter={searchFilter} setSearchFilter={setSearchFilter}
            openModal={openAssetModal}
          />
        </div>
      )}

      <AdminHrAssetModal 
        asset={selectedAsset}
        isOpen={isAssetModalOpen}
        close={closeAssetModal}
        save={saveAsset}
      />
    </div>
  );
}
