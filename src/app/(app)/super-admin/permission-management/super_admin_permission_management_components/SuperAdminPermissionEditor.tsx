"use client";

import { useState } from "react";
import { Save, CheckSquare, Square, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MODULES, ACTIONS, DATA_SCOPES, type PermissionEntryType } from "@/app/(app)/super-admin/permission-management/super_admin_permission_management_types/super_admin_permission_management.types";

interface EditorProps {
  role: string;
}

export default function SuperAdminPermissionEditor({ role }: EditorProps) {
  const [activeModule, setActiveModule] = useState<string>(MODULES[0]);
  
  // Flat state mapping: "ModuleName_ActionName" -> { isGranted: boolean, dataScope: string }
  const [permissions, setPermissions] = useState<Record<string, { isGranted: boolean, dataScope: string }>>({});
  const [isSaving, setIsSaving] = useState(false);

  // Helper to get key
  const getKey = (mod: string, act: string) => `${mod}_${act}`;

  // Handle Checkbox Toggle
  const togglePermission = (mod: string, act: string) => {
    const key = getKey(mod, act);
    setPermissions(prev => {
      const current = prev[key];
      if (current?.isGranted) {
        // Turn off
        return { ...prev, [key]: { isGranted: false, dataScope: current.dataScope } };
      } else {
        // Turn on with default scope
        return { ...prev, [key]: { isGranted: true, dataScope: current?.dataScope || 'Own Records' } };
      }
    });
  };

  // Handle Scope Change
  const changeScope = (mod: string, act: string, scope: string) => {
    const key = getKey(mod, act);
    setPermissions(prev => ({
      ...prev,
      [key]: { isGranted: prev[key]?.isGranted || false, dataScope: scope }
    }));
  };

  // Select all actions for current module
  const toggleAllModuleActions = () => {
    const allEnabled = ACTIONS.every(act => permissions[getKey(activeModule, act)]?.isGranted);
    const newState = { ...permissions };
    
    ACTIONS.forEach(act => {
      const key = getKey(activeModule, act);
      newState[key] = { 
        isGranted: !allEnabled, 
        dataScope: newState[key]?.dataScope || 'Own Records' 
      };
    });
    setPermissions(newState);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSaving(false);
    // Real implementation would send `permissions` to backend
  };

  return (
    <div className="flex h-full flex-col lg:flex-row">
      
      {/* Sidebar: Modules List */}
      <div className="w-full lg:w-64 border-r border-border bg-bg-page flex flex-col h-full shrink-0">
        <div className="p-4 border-b border-border bg-header">
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">System Modules</h3>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
          {MODULES.map(mod => (
            <button
              key={mod}
              onClick={() => setActiveModule(mod)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                activeModule === mod 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-text-secondary hover:bg-card hover:text-text-primary"
              )}
            >
              {mod}
              {activeModule === mod && <ChevronRight size={16} />}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Actions & Data Scope */}
      <div className="flex-1 flex flex-col h-full bg-card min-w-0">
        
        {/* Module Header */}
        <div className="p-6 border-b border-border flex items-center justify-between shrink-0 bg-header">
          <div>
            <h2 className="text-lg font-bold text-text-primary">{activeModule} Permissions</h2>
            <p className="text-xs text-text-secondary mt-0.5">Configure what the {role} role can do within {activeModule}.</p>
          </div>
          <button 
            onClick={toggleAllModuleActions}
            className="text-xs font-medium text-primary hover:text-primary-hover flex items-center gap-1.5 px-3 py-1.5 border border-primary/20 rounded hover:bg-primary-subtle transition-colors"
          >
            <CheckSquare size={14} /> Toggle All Actions
          </button>
        </div>

        {/* Action Grid */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {ACTIONS.map(act => {
              const key = getKey(activeModule, act);
              const isGranted = permissions[key]?.isGranted || false;
              const currentScope = permissions[key]?.dataScope || 'Own Records';

              return (
                <div 
                  key={act} 
                  className={cn(
                    "border rounded-lg p-4 flex flex-col gap-3 transition-colors",
                    isGranted ? "border-primary/50 bg-primary-subtle/10 shadow-sm" : "border-border hover:border-border-hover bg-bg-page/50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div 
                      className="flex items-center gap-2 cursor-pointer select-none"
                      onClick={() => togglePermission(activeModule, act)}
                    >
                      {isGranted ? (
                        <CheckSquare size={18} className="text-primary" />
                      ) : (
                        <Square size={18} className="text-text-secondary" />
                      )}
                      <span className={cn("text-sm font-semibold", isGranted ? "text-primary" : "text-text-primary")}>
                        {act}
                      </span>
                    </div>
                  </div>

                  {/* Data Scope Dropdown - Only fully visible/active if granted */}
                  <div className={cn("flex flex-col gap-1.5 transition-opacity", isGranted ? "opacity-100" : "opacity-40 pointer-events-none")}>
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">Data Scope</label>
                    <select 
                      value={currentScope}
                      onChange={(e) => changeScope(activeModule, act, e.target.value)}
                      disabled={!isGranted}
                      className="w-full bg-input border border-border rounded px-2 py-1.5 text-xs text-text-primary focus:border-primary outline-none"
                    >
                      {DATA_SCOPES.map(scope => (
                        <option key={scope} value={scope}>{scope}</option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border bg-bg-page flex justify-end shrink-0">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-md hover:bg-primary-hover text-sm font-medium disabled:opacity-70 shadow-sm transition-all"
          >
            <Save size={16} />
            {isSaving ? 'Saving Policy...' : `Save ${role} Permissions`}
          </button>
        </div>

      </div>
    </div>
  );
}
