"use client";

import { Languages, Type, Globe } from "lucide-react";

export default function SuperAdminTranslationTools() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      
      {/* Super Admin section header exactly as requested */}
      <div className="border-b border-border pb-3">
        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Super Admin</h2>
      </div>

      <div className="flex flex-col gap-4">
        
        {/* The 3 Language Actions requested directly under Super Admin */}
        <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-border border-dashed">
          <button className="flex items-center gap-2 px-4 py-2 bg-success-bg text-success text-xs font-bold border border-success/20 rounded-md hover:bg-success hover:text-white transition-colors">
            Enable language
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-danger-bg text-danger text-xs font-bold border border-danger/20 rounded-md hover:bg-danger hover:text-white transition-colors">
            Disable language
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-warning-bg text-warning text-xs font-bold border border-warning/20 rounded-md hover:bg-warning hover:text-white transition-colors">
            Default language
          </button>
        </div>

        {/* The 3 specific Translation Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        
        {/* Translation management */}
        <div className="flex flex-col gap-3 p-4 border border-border rounded-lg bg-bg-page hover:border-primary transition-colors cursor-pointer group">
          <div className="p-2 bg-primary/10 w-fit rounded-md text-primary group-hover:bg-primary group-hover:text-black transition-colors">
            <Globe size={20} />
          </div>
          <h3 className="text-sm font-bold text-text-primary uppercase">Translation management</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Manage global translation packages, import/export JSON language files, and configure auto-translation APIs.
          </p>
        </div>

        {/* Language labels */}
        <div className="flex flex-col gap-3 p-4 border border-border rounded-lg bg-bg-page hover:border-primary transition-colors cursor-pointer group">
          <div className="p-2 bg-primary/10 w-fit rounded-md text-primary group-hover:bg-primary group-hover:text-black transition-colors">
            <Languages size={20} />
          </div>
          <h3 className="text-sm font-bold text-text-primary uppercase">Language labels</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Edit specific UI labels, buttons, and short text phrases for individual language packs in real-time.
          </p>
        </div>

        {/* System text translation */}
        <div className="flex flex-col gap-3 p-4 border border-border rounded-lg bg-bg-page hover:border-primary transition-colors cursor-pointer group">
          <div className="p-2 bg-primary/10 w-fit rounded-md text-primary group-hover:bg-primary group-hover:text-black transition-colors">
            <Type size={20} />
          </div>
          <h3 className="text-sm font-bold text-text-primary uppercase">System text translation</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Translate long-form system messages, error notifications, email templates, and SMS contents.
          </p>
        </div>

      </div>
    </div>
    </div>
  );
}
