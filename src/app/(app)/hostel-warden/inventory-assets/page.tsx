import React from 'react';
import InventoryAssetsMain from './inventory_components/InventoryAssetsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inventory & Assets | Hostel Warden',
  description: 'Track room assets, common area equipment, and their working status.',
};

export default function InventoryAssetsPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <InventoryAssetsMain />
    </div>
  );
}
