"use client";

import React from "react";

export default function AdminContactDetailsConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      <div className="border-b border-border pb-3">
        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Contact Details</h2>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-text-primary">Contact Details</label>
        <input 
          type="text" 
          className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none transition-colors"
        />
      </div>
      <div className="flex justify-end pt-4 border-t border-border">
        <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-colors">
          Save Contact Details
        </button>
      </div>
    </div>
  );
}
