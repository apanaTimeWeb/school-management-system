"use client";

import { useHrAssets } from "./useHrAssets";
import HrAssetsTabs from "./HrAssetsTabs";
import HrAssetsList from "./HrAssetsList";
import HrAssetModal from "./HrAssetModal";
import { Loader2 } from "lucide-react";

export default function HrAssetsMain() {
  const {
    activeTab, setActiveTab,
    assets, isLoading,
    searchFilter, setSearchFilter,
    isAssetModalOpen, selectedAsset, openAssetModal, closeAssetModal, saveAsset
  } = useHrAssets();

  return (
    <div className="flex flex-col w-full">
      <HrAssetsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Asset Inventory...</span>
        </div>
      ) : (
        <div className="w-full">
          <HrAssetsList 
            assets={assets}
            isActiveTab={activeTab === 'Active'}
            searchFilter={searchFilter} setSearchFilter={setSearchFilter}
            openModal={openAssetModal}
          />
        </div>
      )}

      <HrAssetModal 
        asset={selectedAsset}
        isOpen={isAssetModalOpen}
        close={closeAssetModal}
        save={saveAsset}
      />
    </div>
  );
}

