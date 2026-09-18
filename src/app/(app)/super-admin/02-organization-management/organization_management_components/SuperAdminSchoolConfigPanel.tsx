"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Save,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  Layers,
  Settings2,
  ChevronDown,
  ChevronUp,
  History,
  Info,
  Shield,
  BookOpen,
  Bus,
  Building2,
  GraduationCap,
  UserCheck,
  DollarSign,
  Briefcase,
  UserCircle,
  Users2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { SchoolSize, SchoolRoleId, ModuleId, ConfigHistoryEntry } from "../organization_management_types/super_admin_school_config.types";
import {
  ROLE_MASTER,
  MODULE_MASTER,
  MODULE_CATEGORY_META,
  MOCK_SCHOOL,
  MOCK_HISTORY,
  applyPreset,
  isRoleAvailable,
  makeHistoryEntry,
  formatTimestamp,
  countEnabledRoles,
  countEnabledModules,
  countConditionalModules,
  PRESET_LABELS,
  PRESET_DESCRIPTIONS,
  buildRoles,
} from "../organization_management_types/super_admin_school_config_data";

// ─── LOCALSTORAGE KEY ──────────────────────────────────────────────────────
const LS_KEY = "school_erp_config_sch_1";

// ─── ROLE ICONS ───────────────────────────────────────────────────────────
const ROLE_ICONS: Record<SchoolRoleId, React.ElementType> = {
  "school-admin": Shield,
  "principal": GraduationCap,
  "teacher": BookOpen,
  "accountant": DollarSign,
  "hr": Briefcase,
  "student": UserCircle,
  "parent": Users2,
  "librarian": BookOpen,
  "transport-manager": Bus,
  "hostel-warden": Building2,
};

// ─── TOAST ────────────────────────────────────────────────────────────────
function Toast({ message, type, onClose }: { message: string; type: "success" | "warning"; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-lg shadow-xl border text-sm font-medium animate-in slide-in-from-bottom-4",
        type === "success"
          ? "bg-card border-success/30 text-text-primary"
          : "bg-card border-warning/30 text-text-primary"
      )}
    >
      {type === "success" ? (
        <CheckCircle size={18} className="text-success shrink-0" />
      ) : (
        <AlertTriangle size={18} className="text-warning shrink-0" />
      )}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-text-secondary hover:text-text-primary">
        <X size={15} />
      </button>
    </div>
  );
}

// ─── CONFIRM MODAL ────────────────────────────────────────────────────────
interface ConfirmModalProps {
  title: string;
  message: string;
  confirmLabel: string;
  confirmVariant?: "danger" | "warning";
  onConfirm: () => void;
  onCancel: () => void;
}
function ConfirmModal({ title, message, confirmLabel, confirmVariant = "danger", onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay">
      <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md mx-4 p-6">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle size={22} className="text-warning shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-bold text-text-primary">{title}</h3>
            <p className="text-sm text-text-secondary mt-1 leading-relaxed">{message}</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-text-secondary border border-border rounded-md hover:bg-bg-page transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={cn(
              "px-4 py-2 text-sm font-bold rounded-md transition-colors",
              confirmVariant === "danger"
                ? "bg-danger text-white hover:bg-danger/90"
                : "bg-warning text-white hover:bg-warning/90"
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── TOGGLE ───────────────────────────────────────────────────────────────
function Toggle({
  checked,
  onChange,
  disabled,
  id,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  id: string;
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
        checked ? "bg-primary" : "bg-border",
        disabled && "opacity-40 cursor-not-allowed"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────
export default function SuperAdminSchoolConfigPanel() {
  // ─── State ──────────────────────────────────────────────────────────
  const [schoolSize, setSchoolSize] = useState<SchoolSize>(MOCK_SCHOOL.schoolSize);
  const [roles, setRoles] = useState<Record<SchoolRoleId, boolean>>(MOCK_SCHOOL.roles);
  const [modules, setModules] = useState<Record<ModuleId, boolean>>(MOCK_SCHOOL.modules);
  const [savedConfig, setSavedConfig] = useState<{
    size: SchoolSize;
    roles: Record<SchoolRoleId, boolean>;
    modules: Record<ModuleId, boolean>;
    savedAt: string;
  } | null>(null);
  const [history, setHistory] = useState<ConfigHistoryEntry[]>(MOCK_HISTORY);
  const [toast, setToast] = useState<{ message: string; type: "success" | "warning" } | null>(null);
  const [confirmModal, setConfirmModal] = useState<null | {
    title: string;
    message: string;
    confirmLabel: string;
    confirmVariant?: "danger" | "warning";
    onConfirm: () => void;
  }>(null);
  const [moduleSectionOpen, setModuleSectionOpen] = useState(true);
  const [roleSectionOpen, setRoleSectionOpen] = useState(true);
  const [historySectionOpen, setHistorySectionOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Track unsaved changes
  const hasUnsavedChanges = savedConfig !== null && (
    schoolSize !== savedConfig.size ||
    JSON.stringify(roles) !== JSON.stringify(savedConfig.roles) ||
    JSON.stringify(modules) !== JSON.stringify(savedConfig.modules)
  );

  // ─── Load from localStorage on mount ────────────────────────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setSchoolSize(parsed.size);
        setRoles(parsed.roles);
        setModules(parsed.modules);
        setSavedConfig(parsed);
        if (parsed.history) setHistory(parsed.history);
      } else {
        // No localStorage yet — treat mock as "last saved"
        setSavedConfig({
          size: MOCK_SCHOOL.schoolSize,
          roles: MOCK_SCHOOL.roles,
          modules: MOCK_SCHOOL.modules,
          savedAt: MOCK_SCHOOL.lastSavedAt ?? new Date().toISOString(),
        });
      }
    } catch {
      /* ignore */
    }
  }, []);

  const showToast = useCallback((message: string, type: "success" | "warning" = "success") => {
    setToast({ message, type });
  }, []);

  // ─── SCHOOL SIZE CHANGE ──────────────────────────────────────────────
  const handleSizeChange = (newSize: SchoolSize) => {
    if (newSize === schoolSize) return;

    const oldLabel = PRESET_LABELS[schoolSize];
    const newLabel = PRESET_LABELS[newSize];

    if (newSize === 'custom') {
      // Custom: keep current state, just change label
      setSchoolSize('custom');
      addHistory(makeHistoryEntry('school_size_changed', 'School Size', oldLabel, newLabel));
      return;
    }

    // Non-custom presets: ask for confirmation if there's already a configuration
    const doApply = () => {
      const { roles: newRoles, modules: newModules } = applyPreset(newSize, modules);
      setSchoolSize(newSize);
      setRoles(newRoles);
      setModules(newModules);
      addHistory(makeHistoryEntry('preset_applied', 'Preset Applied', oldLabel, newLabel));
    };

    // If custom or initial load with no diff, just apply
    if (schoolSize === 'custom' || !savedConfig) {
      doApply();
    } else {
      setConfirmModal({
        title: `Apply ${newLabel} Preset?`,
        message: `This will reset roles and modules to the ${newLabel} defaults. Your current custom configuration will be replaced. You can still manually adjust after applying.`,
        confirmLabel: 'Apply Preset',
        confirmVariant: 'warning',
        onConfirm: () => {
          setConfirmModal(null);
          doApply();
        },
      });
    }
  };

  // ─── ROLE TOGGLE ──────────────────────────────────────────────────────
  const handleRoleToggle = (roleId: SchoolRoleId) => {
    const currentlyEnabled = roles[roleId];
    const newState = !currentlyEnabled;
    const descriptor = ROLE_MASTER.find(r => r.id === roleId)!;

    if (newState && !isRoleAvailable(roleId, modules)) {
      // Should not happen (toggle is disabled), but guard anyway
      return;
    }

    setRoles(prev => ({ ...prev, [roleId]: newState }));
    addHistory(
      makeHistoryEntry(
        newState ? 'role_enabled' : 'role_disabled',
        `${descriptor.label} Login`,
        currentlyEnabled ? 'Enabled' : 'Disabled',
        newState ? 'Enabled' : 'Disabled'
      )
    );
  };

  // ─── MODULE TOGGLE ─────────────────────────────────────────────────────
  const handleModuleToggle = (moduleId: ModuleId) => {
    const currentlyEnabled = modules[moduleId];
    const newState = !currentlyEnabled;
    const descriptor = MODULE_MASTER.find(m => m.id === moduleId)!;

    // If disabling a module that has a dependent role enabled, confirm
    if (!newState) {
      const dependentRole = ROLE_MASTER.find(
        r => r.requiredModule === moduleId && roles[r.id] === true
      );
      if (dependentRole) {
        setConfirmModal({
          title: `Disable ${descriptor.label}?`,
          message: `${descriptor.label} is currently enabled and ${dependentRole.label} login is active.\n\nDisabling this module will make the ${dependentRole.label} role unavailable and it will be automatically disabled.`,
          confirmLabel: 'Disable Module',
          confirmVariant: 'danger',
          onConfirm: () => {
            setConfirmModal(null);
            setModules(prev => ({ ...prev, [moduleId]: false }));
            setRoles(prev => ({ ...prev, [dependentRole.id]: false }));
            addHistory(makeHistoryEntry('module_disabled', `${descriptor.label} Module`, 'Enabled', 'Disabled'));
            addHistory(makeHistoryEntry('role_disabled', `${dependentRole.label} Login`, 'Enabled', 'Disabled (module disabled)'));
          },
        });
        return;
      }
    }

    setModules(prev => ({ ...prev, [moduleId]: newState }));

    // If enabling a module, also update roles availability
    if (newState) {
      addHistory(makeHistoryEntry('module_enabled', `${descriptor.label} Module`, 'Disabled', 'Enabled'));
    } else {
      // When disabling without dependent role active
      addHistory(makeHistoryEntry('module_disabled', `${descriptor.label} Module`, 'Enabled', 'Disabled'));
    }
  };

  // ─── ADD HISTORY ENTRY ────────────────────────────────────────────────
  const addHistory = (entry: ConfigHistoryEntry) => {
    setHistory(prev => [entry, ...prev]);
  };

  // ─── SAVE ─────────────────────────────────────────────────────────────
  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 600)); // mock delay

    const now = new Date().toISOString();
    const payload = { size: schoolSize, roles, modules, savedAt: now, history };
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(payload));
    } catch { /* localStorage unavailable */ }

    setSavedConfig({ size: schoolSize, roles, modules, savedAt: now });
    setIsSaving(false);
    showToast("School configuration saved successfully.");
    addHistory(makeHistoryEntry('config_reset', 'Configuration Saved', '', formatTimestamp(now)));
  };

  // ─── RESET TO PRESET ──────────────────────────────────────────────────
  const handleResetToPreset = () => {
    setConfirmModal({
      title: `Reset to ${PRESET_LABELS[schoolSize]} Preset?`,
      message: `This will discard all manual changes and reload the default ${PRESET_LABELS[schoolSize]} configuration.`,
      confirmLabel: 'Reset',
      confirmVariant: 'warning',
      onConfirm: () => {
        setConfirmModal(null);
        if (schoolSize === 'custom') {
          // Custom reset = all off except school-admin
          setRoles(buildRoles({ 'school-admin': true }));
          showToast("Reset to Custom (School Admin only).", "warning");
        } else {
          const { roles: r, modules: m } = applyPreset(schoolSize, modules);
          setRoles(r);
          setModules(m);
          showToast(`Reset to ${PRESET_LABELS[schoolSize]} defaults.`, "warning");
        }
        addHistory(makeHistoryEntry('config_reset', 'Reset to Preset', 'Custom', PRESET_LABELS[schoolSize]));
      },
    });
  };

  // ─── DERIVED VALUES ────────────────────────────────────────────────────
  const enabledRoleCount = countEnabledRoles(roles);
  const enabledModuleCount = countEnabledModules(modules);
  const enabledConditionalCount = countConditionalModules(modules);
  const enabledRoleNames = ROLE_MASTER.filter(r => roles[r.id]).map(r => r.label);

  // ─────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col gap-6">

      {/* Toast */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}

      {/* Confirm Modal */}
      {confirmModal && (
        <ConfirmModal
          title={confirmModal.title}
          message={confirmModal.message}
          confirmLabel={confirmModal.confirmLabel}
          confirmVariant={confirmModal.confirmVariant}
          onConfirm={confirmModal.onConfirm}
          onCancel={() => setConfirmModal(null)}
        />
      )}

      {/* ── Header bar ───────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-card border border-border rounded-lg px-5 py-4">
        <div>
          <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
            <Settings2 size={18} className="text-primary" />
            School Configuration
          </h2>
          <p className="text-xs text-text-secondary mt-0.5">
            Configure operational modes, active logins, and enabled modules for this school.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {hasUnsavedChanges && (
            <span className="flex items-center gap-1.5 text-xs font-semibold text-warning bg-warning-bg px-3 py-1.5 rounded-full">
              <AlertTriangle size={12} />
              Unsaved Changes
            </span>
          )}
          <button
            onClick={handleResetToPreset}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold border border-border rounded-md text-text-secondary hover:bg-bg-page hover:text-text-primary transition-colors"
          >
            <RotateCcw size={13} />
            Reset to Preset
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-primary text-white rounded-md hover:bg-primary-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Save size={13} />
            {isSaving ? "Saving..." : "Save Configuration"}
          </button>
        </div>
      </div>

      {/* ── Summary Cards ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Size */}
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-[11px] text-text-secondary uppercase font-semibold tracking-wide">School Mode</p>
          <p className="text-base font-bold text-text-primary mt-1">{PRESET_LABELS[schoolSize]}</p>
          <p className="text-[11px] text-text-secondary mt-0.5 line-clamp-2">{PRESET_DESCRIPTIONS[schoolSize]}</p>
        </div>
        {/* Active Logins */}
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-[11px] text-text-secondary uppercase font-semibold tracking-wide">Active Logins</p>
          <p className="text-2xl font-bold text-primary mt-1">{enabledRoleCount}</p>
          <p className="text-[11px] text-text-secondary mt-0.5">of 10 operational roles</p>
        </div>
        {/* Active Modules */}
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-[11px] text-text-secondary uppercase font-semibold tracking-wide">Active Modules</p>
          <p className="text-2xl font-bold text-primary mt-1">{enabledModuleCount}</p>
          <p className="text-[11px] text-text-secondary mt-0.5">of {MODULE_MASTER.length} available</p>
        </div>
        {/* Last Saved */}
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-[11px] text-text-secondary uppercase font-semibold tracking-wide">Last Saved</p>
          <p className="text-xs font-semibold text-text-primary mt-1">
            {savedConfig?.savedAt ? formatTimestamp(savedConfig.savedAt) : "Not saved yet"}
          </p>
          <p className="text-[11px] text-text-secondary mt-0.5">by {MOCK_SCHOOL.lastSavedBy}</p>
        </div>
      </div>

      {/* Active Logins summary strip */}
      {enabledRoleCount > 0 && (
        <div className="bg-primary-subtle border border-primary/20 rounded-lg px-4 py-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-primary flex items-center gap-1.5">
            <UserCheck size={14} />
            Active Logins:
          </span>
          {enabledRoleNames.map(name => (
            <span
              key={name}
              className="text-[11px] font-semibold bg-primary text-white px-2.5 py-0.5 rounded-full"
            >
              {name}
            </span>
          ))}
        </div>
      )}

      {/* ── SECTION 1: School Size ──────────────────────────────────────── */}
      <SectionCard
        icon={<Layers size={16} className="text-primary" />}
        title="School Size / Operational Mode"
        description="Select the school's operational scale. Presets load default role and module configurations."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(["small", "medium", "large", "custom"] as SchoolSize[]).map((size) => (
            <button
              key={size}
              id={`size-btn-${size}`}
              onClick={() => handleSizeChange(size)}
              className={cn(
                "flex flex-col gap-1.5 p-4 rounded-lg border-2 text-left transition-all",
                schoolSize === size
                  ? "border-primary bg-primary-subtle"
                  : "border-border bg-bg-page hover:border-primary/40 hover:bg-primary-subtle/40"
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn("text-sm font-bold", schoolSize === size ? "text-primary" : "text-text-primary")}>
                  {PRESET_LABELS[size]}
                </span>
                {schoolSize === size && (
                  <span className="text-[10px] font-bold bg-primary text-white px-1.5 py-0.5 rounded">Active</span>
                )}
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">{PRESET_DESCRIPTIONS[size]}</p>
              {size !== 'custom' && (
                <p className="text-[11px] font-semibold text-primary mt-1">
                  {size === 'small' ? '1 login' : size === 'medium' ? '4 logins' : '7+ logins'}
                </p>
              )}
            </button>
          ))}
        </div>
      </SectionCard>

      {/* ── SECTION 2: Enabled Logins ───────────────────────────────────── */}
      <SectionCard
        icon={<Users size={16} className="text-primary" />}
        title="Enabled Logins"
        description="Control which operational roles can log in to this school's ERP. Super Admin is a platform-level role and is not listed here."
        collapsible
        isOpen={roleSectionOpen}
        onToggle={() => setRoleSectionOpen(p => !p)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ROLE_MASTER.map((role) => {
            const available = isRoleAvailable(role.id, modules);
            const enabled = roles[role.id];
            const Icon = ROLE_ICONS[role.id];

            const conditionalModuleName =
              role.requiredModule
                ? MODULE_MASTER.find(m => m.id === role.requiredModule)?.label ?? role.requiredModule
                : null;

            return (
              <div
                key={role.id}
                className={cn(
                  "flex items-start gap-3 p-4 rounded-lg border transition-all",
                  enabled
                    ? "border-primary/30 bg-primary-subtle/40"
                    : available
                    ? "border-border bg-bg-page"
                    : "border-border bg-bg-page opacity-60"
                )}
              >
                {/* Icon */}
                <div className={cn(
                  "p-2 rounded-md shrink-0",
                  enabled ? "bg-primary text-white" : "bg-border/60 text-text-secondary"
                )}>
                  <Icon size={16} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-text-primary">{role.label}</span>
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full",
                      enabled ? "bg-success-bg text-success" : "bg-border/60 text-text-secondary"
                    )}>
                      {enabled ? "Enabled" : "Disabled"}
                    </span>
                    {role.requiredModule && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-warning-bg text-warning">
                        Conditional
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{role.description}</p>
                  {/* Dependency warning */}
                  {!available && conditionalModuleName && (
                    <p className="text-[11px] text-warning font-semibold mt-1.5 flex items-center gap-1">
                      <Info size={11} />
                      Enable {conditionalModuleName} module to activate this login.
                    </p>
                  )}
                </div>

                {/* Toggle */}
                <div className="shrink-0 mt-0.5">
                  <Toggle
                    id={`role-toggle-${role.id}`}
                    checked={enabled}
                    onChange={() => handleRoleToggle(role.id)}
                    disabled={!available}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>

      {/* ── SECTION 3: Enabled Modules ──────────────────────────────────── */}
      <SectionCard
        icon={<Layers size={16} className="text-primary" />}
        title="Enabled Modules"
        description="Enable or disable modules for this school. Infrastructure modules (Library, Transport, Hostel) control availability of conditional roles."
        collapsible
        isOpen={moduleSectionOpen}
        onToggle={() => setModuleSectionOpen(p => !p)}
      >
        {MODULE_CATEGORY_META.map((cat) => {
          const catModules = MODULE_MASTER.filter(m => m.category === cat.id);
          if (catModules.length === 0) return null;
          return (
            <div key={cat.id} className="mb-6 last:mb-0">
              <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-3 pb-2 border-b border-border">
                {cat.label}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {catModules.map((mod) => {
                  const enabled = modules[mod.id];
                  const isInfraModule = ['library', 'transport', 'hostel'].includes(mod.id);
                  const dependentRole = ROLE_MASTER.find(r => r.requiredModule === mod.id);
                  const dependentRoleEnabled = dependentRole ? roles[dependentRole.id] : false;

                  return (
                    <div
                      key={mod.id}
                      className={cn(
                        "flex items-start gap-3 p-3.5 rounded-lg border transition-all",
                        enabled
                          ? "border-primary/30 bg-primary-subtle/30"
                          : "border-border bg-bg-page"
                      )}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-text-primary">{mod.label}</span>
                          {isInfraModule && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-warning-bg text-warning">
                              Controls Role
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{mod.description}</p>
                        {isInfraModule && dependentRole && (
                          <p className="text-[11px] text-text-secondary mt-1 flex items-center gap-1">
                            <Info size={10} />
                            {enabled
                              ? `${dependentRole.label} login is available.`
                              : `${dependentRole.label} login unavailable until enabled.`}
                            {dependentRoleEnabled && enabled && (
                              <span className="text-success font-semibold ml-1">● Active</span>
                            )}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 mt-0.5 flex flex-col items-end gap-1">
                        <Toggle
                          id={`module-toggle-${mod.id}`}
                          checked={enabled}
                          onChange={() => handleModuleToggle(mod.id)}
                        />
                        <span className={cn(
                          "text-[10px] font-bold",
                          enabled ? "text-success" : "text-text-disabled"
                        )}>
                          {enabled ? "ON" : "OFF"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Conditional modules summary */}
        <div className="mt-4 p-3 bg-warning-bg border border-warning/20 rounded-lg">
          <p className="text-xs font-semibold text-warning flex items-center gap-1.5">
            <Info size={13} />
            Conditional Modules: Library, Transport, Hostel control login availability for Librarian, Transport Manager, and Hostel Warden respectively.
          </p>
        </div>
      </SectionCard>

      {/* ── SECTION 4: Configuration History ───────────────────────────── */}
      <SectionCard
        icon={<History size={16} className="text-primary" />}
        title="Configuration History"
        description="Track every role and module configuration change."
        collapsible
        isOpen={historySectionOpen}
        onToggle={() => setHistorySectionOpen(p => !p)}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-[11px] font-semibold text-text-secondary uppercase tracking-wide pb-2 pr-4">Change</th>
                <th className="text-left text-[11px] font-semibold text-text-secondary uppercase tracking-wide pb-2 pr-4 whitespace-nowrap">Old Value</th>
                <th className="text-left text-[11px] font-semibold text-text-secondary uppercase tracking-wide pb-2 pr-4 whitespace-nowrap">New Value</th>
                <th className="text-left text-[11px] font-semibold text-text-secondary uppercase tracking-wide pb-2 pr-4">By</th>
                <th className="text-left text-[11px] font-semibold text-text-secondary uppercase tracking-wide pb-2 whitespace-nowrap">Date & Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {history.slice(0, 20).map((entry) => (
                <tr key={entry.id} className="hover:bg-bg-page transition-colors">
                  <td className="py-2.5 pr-4">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "inline-block w-2 h-2 rounded-full shrink-0",
                        entry.changeType.includes('enabled') ? "bg-success"
                          : entry.changeType.includes('disabled') ? "bg-danger"
                          : "bg-info"
                      )} />
                      <span className="text-xs font-semibold text-text-primary whitespace-nowrap">{entry.label}</span>
                    </div>
                  </td>
                  <td className="py-2.5 pr-4">
                    {entry.oldValue && (
                      <span className="text-[11px] font-mono bg-danger-bg text-danger px-2 py-0.5 rounded line-through opacity-70">
                        {entry.oldValue}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 pr-4">
                    {entry.newValue && (
                      <span className="text-[11px] font-mono bg-success-bg text-success px-2 py-0.5 rounded">
                        {entry.newValue}
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 pr-4 text-xs text-text-secondary whitespace-nowrap">{entry.changedBy}</td>
                  <td className="py-2.5 text-xs text-text-secondary whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {formatTimestamp(entry.timestamp)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {history.length === 0 && (
            <div className="text-center py-8 text-text-secondary text-sm">No configuration changes yet.</div>
          )}
        </div>
      </SectionCard>

      {/* Bottom save bar */}
      {hasUnsavedChanges && (
        <div className="sticky bottom-0 bg-card border-t border-warning/30 px-5 py-3 flex items-center justify-between gap-3 rounded-b-lg shadow-lg">
          <span className="text-xs font-semibold text-warning flex items-center gap-1.5">
            <AlertTriangle size={14} />
            You have unsaved changes.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (savedConfig) {
                  setSchoolSize(savedConfig.size);
                  setRoles(savedConfig.roles);
                  setModules(savedConfig.modules);
                  showToast("Changes discarded.", "warning");
                }
              }}
              className="px-3 py-1.5 text-xs font-medium border border-border rounded-md text-text-secondary hover:bg-bg-page transition-colors"
            >
              Discard
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-1.5 text-xs font-bold bg-primary text-white rounded-md hover:bg-primary-hover transition-colors disabled:opacity-70"
            >
              {isSaving ? "Saving..." : "Save Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SECTION CARD WRAPPER ──────────────────────────────────────────────────
function SectionCard({
  icon,
  title,
  description,
  children,
  collapsible,
  isOpen,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  collapsible?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div
        className={cn(
          "flex items-start justify-between gap-3 px-5 py-4 border-b border-border",
          collapsible && "cursor-pointer hover:bg-bg-page transition-colors select-none"
        )}
        onClick={collapsible ? onToggle : undefined}
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0">{icon}</div>
          <div>
            <h3 className="text-sm font-bold text-text-primary">{title}</h3>
            <p className="text-xs text-text-secondary mt-0.5">{description}</p>
          </div>
        </div>
        {collapsible && (
          <div className="shrink-0 mt-0.5 text-text-secondary">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        )}
      </div>
      {(!collapsible || isOpen) && (
        <div className="p-5">{children}</div>
      )}
    </div>
  );
}
