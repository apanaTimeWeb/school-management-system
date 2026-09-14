"use client";

import React, { useState } from 'react';
import { Package, Plus, AlertTriangle, Search, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function InventoryCatalog() {
  const [activeTab, setActiveTab] = useState('items');
  const [showToast, setShowToast] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: 'A4 Printing Paper', category: 'Stationery', stock: 15, unit: 'Reams', minStock: 20 },
    { id: 2, name: 'Whiteboard Markers (Box)', category: 'Stationery', stock: 45, unit: 'Boxes', minStock: 10 },
    { id: 3, name: 'Basketballs', category: 'Sports', stock: 5, unit: 'Pieces', minStock: 10 },
  ]);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Item Saved Successfully!
        </div>
      )}

      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('items')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'items' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Package size={18} /> Inventory Items
        </button>
        <button onClick={() => setActiveTab('lowstock')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'lowstock' ? 'bg-danger/10 text-danger' : 'text-text-secondary hover:bg-bg-page')}>
          <AlertTriangle size={18} /> Low Stock Alerts
        </button>
        <button onClick={() => setActiveTab('categories')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'categories' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Search size={18} /> Categories
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'items' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Inventory Items Master</h2>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex flex-wrap gap-4 items-end">
               <div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
                 <label className="text-xs font-semibold text-text-secondary">Item Name</label>
                 <input type="text" placeholder="e.g. Chalk Box" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
               </div>
               <div className="flex flex-col gap-1.5 w-32">
                 <label className="text-xs font-semibold text-text-secondary">Category</label>
                 <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                   <option>Stationery</option>
                   <option>Sports</option>
                 </select>
               </div>
               <div className="flex flex-col gap-1.5 w-24">
                 <label className="text-xs font-semibold text-text-secondary">Min Stock</label>
                 <input type="number" placeholder="10" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
               </div>
               <button onClick={handleSave} className="bg-primary text-black px-4 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover transition flex items-center gap-2">
                 <Plus size={16}/> Add Item
               </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
               {items.map(item => (
                 <div key={item.id} className="bg-card border border-border p-4 rounded-lg shadow-sm flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-sm text-text-primary">{item.name}</h3>
                      <p className="text-xs text-text-secondary font-semibold">{item.category}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={clsx("text-lg font-black", item.stock < item.minStock ? "text-danger" : "text-success")}>
                        {item.stock} <span className="text-xs font-bold text-text-secondary">{item.unit}</span>
                      </span>
                      {item.stock < item.minStock && <span className="text-[9px] font-bold text-danger uppercase bg-danger-bg px-1 rounded mt-0.5">Low Stock</span>}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        )}

        {activeTab === 'lowstock' && (
          <div className="flex flex-col gap-6 fade-in">
             <h2 className="text-xl font-bold text-danger border-b border-border pb-2 flex items-center gap-2">
               <AlertTriangle size={20}/> Items Below Minimum Stock
             </h2>
             <div className="flex flex-col gap-4">
               {items.filter(i => i.stock < i.minStock).map(item => (
                 <div key={item.id} className="bg-danger-bg/20 border border-danger/30 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-sm text-danger">{item.name}</h3>
                      <p className="text-xs text-text-secondary font-semibold">Current: {item.stock} | Required Min: {item.minStock}</p>
                    </div>
                    <button className="bg-danger text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm hover:bg-danger/90 transition">
                      Create Purchase Request
                    </button>
                 </div>
               ))}
             </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center opacity-60">
            <Search size={48} className="text-text-secondary mb-2" />
            <p className="text-sm font-bold text-text-secondary">Master list for Inventory Categories will be managed here.</p>
          </div>
        )}

      </div>
    </div>
  );
}
