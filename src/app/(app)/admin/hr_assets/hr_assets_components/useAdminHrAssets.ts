"use client";

import { useState, useEffect } from "react";
import { fetchAssets } from "../hr_assets_api/AdminHrAssetsApi";
import type { EmployeeAsset } from "../hr_assets_types/AdminHrAssetsTypes";

export function useAdminHrAssets() {
  const [activeTab, setActiveTab] = useState<'Active' | 'History'>('Active');
  
  const [assets, setAssets] = useState<EmployeeAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [searchFilter, setSearchFilter] = useState("");

  // Modal State
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<EmployeeAsset | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchAssets({ status: activeTab, search: searchFilter });
      if (res.success) setAssets(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setSearchFilter("");
  }, [activeTab]);

  useEffect(() => {
    const timer = setTimeout(() => loadData(), 300);
    return () => clearTimeout(timer);
  }, [activeTab, searchFilter]);

  const openAssetModal = (asset?: EmployeeAsset) => {
    if (asset) {
      setSelectedAsset(asset);
    } else {
      setSelectedAsset({
        id: "", employeeId: "", employeeName: "", department: "",
        assetName: "", category: "Laptop", assetIdNumber: "",
        issueDate: new Date().toISOString().split('T')[0], expectedReturnDate: "",
        status: "Assigned", notes: ""
      });
    }
    setIsAssetModalOpen(true);
  };

  const closeAssetModal = () => {
    setIsAssetModalOpen(false);
    setSelectedAsset(null);
  };

  const saveAsset = (asset: EmployeeAsset) => {
    if (asset.id && !asset.id.startsWith("ast-new-")) {
      setAssets(prev => prev.map(a => a.id === asset.id ? asset : a));
    } else {
      setAssets(prev => [{ ...asset, id: `ast-new-${Date.now()}` }, ...prev]);
    }
    closeAssetModal();
    alert("Asset allocation successfully updated.");
  };

  return {
    activeTab, setActiveTab,
    assets, isLoading,
    searchFilter, setSearchFilter,
    isAssetModalOpen, selectedAsset, openAssetModal, closeAssetModal, saveAsset
  };
}
