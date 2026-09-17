"use client";

import React from 'react';
import { Save, Globe } from 'lucide-react';

export default function SuperAdminWebsiteGlobalSettingsConfig() {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-border bg-bg-page flex items-center gap-3">
        <Globe className="text-primary" size={20} />
        <div>
          <h2 className="text-sm font-bold text-text-primary">Website Global Settings</h2>
          <p className="text-xs text-text-secondary mt-0.5">Manage public-facing website configurations, SEO, and global announcements.</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Global SEO Title</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none focus:border-primary" placeholder="e.g. ApanaTime School ERP" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Global SEO Meta Description</label>
            <textarea className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none focus:border-primary resize-none h-10" placeholder="Enter meta description"></textarea>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Google Analytics ID</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none focus:border-primary" placeholder="e.g. G-XXXXXXX" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Global Announcement Banner (HTML)</label>
            <textarea className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary outline-none focus:border-primary resize-none h-10" placeholder="Enter HTML for top banner"></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-colors shadow-sm">
            <Save size={16} /> Save Website Settings
          </button>
        </div>
      </div>
    </div>
  );
}
