/**
 * School Configuration Types — FRONTEND ONLY (Mock/Hardcoded)
 * No backend, no API, no database.
 */

// ─── School Size ───────────────────────────────────────────────
export type SchoolSize = 'small' | 'medium' | 'large' | 'custom';

// ─── Operational Role IDs (Super Admin excluded) ───────────────
export type SchoolRoleId =
  | 'school-admin'
  | 'principal'
  | 'teacher'
  | 'accountant'
  | 'hr'
  | 'student'
  | 'parent'
  | 'librarian'
  | 'transport-manager'
  | 'hostel-warden';

// ─── Module IDs ────────────────────────────────────────────────
export type ModuleId =
  | 'admissions'
  | 'students'
  | 'parents-guardians'
  | 'academics'
  | 'attendance'
  | 'timetable'
  | 'examinations'
  | 'results'
  | 'fees-finance'
  | 'staff-hr'
  | 'leave-management'
  | 'communication'
  | 'events-activities'
  | 'documents-certificates'
  | 'library'
  | 'transport'
  | 'hostel'
  | 'inventory-assets'
  | 'purchase-expenses'
  | 'health-medical'
  | 'discipline-grievance'
  | 'approval-center'
  | 'reports-analytics'
  | 'website-public-content';

export type ModuleCategory =
  | 'core'
  | 'academic'
  | 'financial'
  | 'communication'
  | 'infrastructure'
  | 'management'
  | 'analytics';

// ─── Descriptors ───────────────────────────────────────────────
export interface RoleDescriptor {
  id: SchoolRoleId;
  label: string;
  description: string;
  requiredModule?: ModuleId; // role only available when this module is ON
}

export interface ModuleDescriptor {
  id: ModuleId;
  label: string;
  description: string;
  category: ModuleCategory;
}

// ─── School Config (what gets saved per school) ────────────────
export interface SchoolConfig {
  schoolId: string;
  schoolName: string;
  schoolSize: SchoolSize;
  roles: Record<SchoolRoleId, boolean>;
  modules: Record<ModuleId, boolean>;
  lastSavedAt: string | null;
  lastSavedBy: string;
}

// ─── History log entry ─────────────────────────────────────────
export type ChangeType =
  | 'school_size_changed'
  | 'role_enabled'
  | 'role_disabled'
  | 'module_enabled'
  | 'module_disabled'
  | 'preset_applied'
  | 'config_reset';

export interface ConfigHistoryEntry {
  id: string;
  changeType: ChangeType;
  label: string;
  oldValue: string;
  newValue: string;
  changedBy: string;
  timestamp: string;
}
