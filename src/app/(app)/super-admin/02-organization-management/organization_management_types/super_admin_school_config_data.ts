/**
 * School Configuration — Master Data & Helpers
 * FRONTEND ONLY — no backend, no API.
 */

import type {
  SchoolRoleId,
  ModuleId,
  RoleDescriptor,
  ModuleDescriptor,
  SchoolConfig,
  SchoolSize,
  ConfigHistoryEntry,
  ChangeType,
} from './super_admin_school_config.types';

// ─────────────────────────────────────────────────────────────────
// ROLE MASTER — 10 operational roles (Super Admin NOT included)
// ─────────────────────────────────────────────────────────────────
export const ROLE_MASTER: RoleDescriptor[] = [
  {
    id: 'school-admin',
    label: 'School Admin',
    description: 'Full school management. Manages all modules when other roles are not active.',
  },
  {
    id: 'principal',
    label: 'Principal',
    description: 'Academic oversight — teachers, classes, timetable, and academic reports.',
  },
  {
    id: 'teacher',
    label: 'Teacher',
    description: 'Classroom management — attendance, marks, homework, and timetable.',
  },
  {
    id: 'accountant',
    label: 'Accountant',
    description: 'Fees & finance — collection, receipts, expenses, and financial reports.',
  },
  {
    id: 'hr',
    label: 'HR / Office',
    description: 'Human resources — staff records, payroll, leave management, and HR reports.',
  },
  {
    id: 'student',
    label: 'Student',
    description: 'Student portal — results, attendance, timetable, homework, and notices.',
  },
  {
    id: 'parent',
    label: 'Parent / Guardian',
    description: 'Parent portal — monitor child progress, fee status, and communicate with school.',
  },
  {
    id: 'librarian',
    label: 'Librarian',
    description: 'Library management — books, members, issue/return, and fines.',
    requiredModule: 'library',
  },
  {
    id: 'transport-manager',
    label: 'Transport Manager',
    description: 'Transport — vehicles, routes, stops, driver management.',
    requiredModule: 'transport',
  },
  {
    id: 'hostel-warden',
    label: 'Hostel Warden',
    description: 'Hostel — room allocation, bed management, and visitor records.',
    requiredModule: 'hostel',
  },
];

// ─────────────────────────────────────────────────────────────────
// MODULE MASTER — 24 modules
// ─────────────────────────────────────────────────────────────────
export const MODULE_MASTER: ModuleDescriptor[] = [
  // Core
  { id: 'admissions', label: 'Admissions', description: 'Student admission and enrollment workflow.', category: 'core' },
  { id: 'students', label: 'Students', description: 'Student profiles, records, and history.', category: 'core' },
  { id: 'parents-guardians', label: 'Parents & Guardians', description: 'Parent profiles and guardian linking.', category: 'core' },
  // Academic
  { id: 'academics', label: 'Academics', description: 'Curriculum, subjects, and academic planning.', category: 'academic' },
  { id: 'attendance', label: 'Attendance', description: 'Daily attendance tracking for students and staff.', category: 'academic' },
  { id: 'timetable', label: 'Timetable', description: 'Class timetable and period scheduling.', category: 'academic' },
  { id: 'examinations', label: 'Examinations', description: 'Exam scheduling, hall tickets, and seating.', category: 'academic' },
  { id: 'results', label: 'Results', description: 'Mark entry, result processing, and report cards.', category: 'academic' },
  // Financial
  { id: 'fees-finance', label: 'Fees & Finance', description: 'Fee structure, collection, receipts, and dues.', category: 'financial' },
  { id: 'purchase-expenses', label: 'Purchase & Expenses', description: 'Vendor purchases, petty cash, and expense tracking.', category: 'financial' },
  // Management
  { id: 'staff-hr', label: 'Staff & HR', description: 'Staff profiles, employment, payroll, and appraisals.', category: 'management' },
  { id: 'leave-management', label: 'Leave Management', description: 'Staff and student leave applications and approvals.', category: 'management' },
  { id: 'documents-certificates', label: 'Documents & Certificates', description: 'TC, bonafide, character certificates, and document issuance.', category: 'management' },
  { id: 'discipline-grievance', label: 'Discipline & Grievance', description: 'Student discipline records, incidents, and grievance tracking.', category: 'management' },
  { id: 'approval-center', label: 'Approval Center', description: 'Multi-level approval workflows for leave, fees, and requests.', category: 'management' },
  // Communication
  { id: 'communication', label: 'Communication', description: 'SMS, email, WhatsApp, and internal school notices.', category: 'communication' },
  { id: 'events-activities', label: 'Events & Activities', description: 'School events, competitions, and activity calendar.', category: 'communication' },
  { id: 'website-public-content', label: 'Website / Public Content', description: 'School website CMS, public announcements, and news.', category: 'communication' },
  // Infrastructure
  { id: 'library', label: 'Library', description: 'Books, members, issue/return, and library fines.', category: 'infrastructure' },
  { id: 'transport', label: 'Transport', description: 'Vehicles, routes, stops, and transport fee allocation.', category: 'infrastructure' },
  { id: 'hostel', label: 'Hostel', description: 'Rooms, beds, hostel allocation, and visitor management.', category: 'infrastructure' },
  { id: 'inventory-assets', label: 'Inventory & Assets', description: 'Stock, vendors, purchases, and material issuance.', category: 'infrastructure' },
  { id: 'health-medical', label: 'Health & Medical', description: 'Student health records, treatments, and clinic visits.', category: 'infrastructure' },
  // Analytics
  { id: 'reports-analytics', label: 'Reports & Analytics', description: 'Dashboards, reports, and data exports.', category: 'analytics' },
];

// ─────────────────────────────────────────────────────────────────
// MODULE CATEGORIES for UI grouping
// ─────────────────────────────────────────────────────────────────
export const MODULE_CATEGORY_META: { id: string; label: string }[] = [
  { id: 'core', label: 'Core' },
  { id: 'academic', label: 'Academic' },
  { id: 'financial', label: 'Financial' },
  { id: 'management', label: 'Management' },
  { id: 'communication', label: 'Communication' },
  { id: 'infrastructure', label: 'Infrastructure & Facilities' },
  { id: 'analytics', label: 'Analytics & Reporting' },
];

// ─────────────────────────────────────────────────────────────────
// HELPER — build all-false role map
// ─────────────────────────────────────────────────────────────────
export function buildRoles(
  overrides: Partial<Record<SchoolRoleId, boolean>> = {}
): Record<SchoolRoleId, boolean> {
  return {
    'school-admin': false,
    'principal': false,
    'teacher': false,
    'accountant': false,
    'hr': false,
    'student': false,
    'parent': false,
    'librarian': false,
    'transport-manager': false,
    'hostel-warden': false,
    ...overrides,
  };
}

// ─────────────────────────────────────────────────────────────────
// HELPER — build all-false module map
// ─────────────────────────────────────────────────────────────────
export function buildModules(
  overrides: Partial<Record<ModuleId, boolean>> = {}
): Record<ModuleId, boolean> {
  const base = MODULE_MASTER.reduce((acc, m) => {
    acc[m.id] = false;
    return acc;
  }, {} as Record<ModuleId, boolean>);
  return { ...base, ...overrides };
}

// ─────────────────────────────────────────────────────────────────
// PRESETS
// ─────────────────────────────────────────────────────────────────
export const PRESET_ROLES: Record<SchoolSize, Partial<Record<SchoolRoleId, boolean>>> = {
  small: {
    'school-admin': true,
  },
  medium: {
    'school-admin': true,
    'principal': true,
    'teacher': true,
    'accountant': true,
  },
  large: {
    'school-admin': true,
    'principal': true,
    'teacher': true,
    'accountant': true,
    'hr': true,
    'student': true,
    'parent': true,
    // librarian / transport-manager / hostel-warden are CONDITIONAL
  },
  custom: {
    'school-admin': true, // keep at least school-admin on
  },
};

export const PRESET_MODULES: Record<
  Exclude<SchoolSize, 'custom'>,
  Partial<Record<ModuleId, boolean>>
> = {
  small: {
    'admissions': true,
    'students': true,
    'parents-guardians': true,
    'academics': true,
    'attendance': true,
    'timetable': true,
    'examinations': true,
    'results': true,
    'fees-finance': true,
    'staff-hr': true,
    'reports-analytics': true,
  },
  medium: {
    'admissions': true,
    'students': true,
    'parents-guardians': true,
    'academics': true,
    'attendance': true,
    'timetable': true,
    'examinations': true,
    'results': true,
    'fees-finance': true,
    'staff-hr': true,
    'leave-management': true,
    'communication': true,
    'documents-certificates': true,
    'reports-analytics': true,
  },
  large: {
    'admissions': true,
    'students': true,
    'parents-guardians': true,
    'academics': true,
    'attendance': true,
    'timetable': true,
    'examinations': true,
    'results': true,
    'fees-finance': true,
    'staff-hr': true,
    'leave-management': true,
    'communication': true,
    'events-activities': true,
    'documents-certificates': true,
    'inventory-assets': true,
    'purchase-expenses': true,
    'discipline-grievance': true,
    'approval-center': true,
    'reports-analytics': true,
  },
};

/**
 * Apply a size preset to build fresh roles + modules.
 * For "custom" we keep existing roles/modules as-is (just change the size label).
 * For "large" preset, conditional roles (librarian/transport/hostel)
 * follow the current module state.
 */
export function applyPreset(
  size: SchoolSize,
  currentModules: Record<ModuleId, boolean>
): { roles: Record<SchoolRoleId, boolean>; modules: Record<ModuleId, boolean> } {
  if (size === 'custom') {
    // Custom: do not reset anything — caller keeps existing state
    return { roles: buildRoles(PRESET_ROLES.custom), modules: currentModules };
  }

  const presetRoleOverrides = { ...PRESET_ROLES[size] };

  // For large: conditional roles depend on module state
  if (size === 'large') {
    presetRoleOverrides['librarian'] = currentModules['library'] ?? false;
    presetRoleOverrides['transport-manager'] = currentModules['transport'] ?? false;
    presetRoleOverrides['hostel-warden'] = currentModules['hostel'] ?? false;
  }

  return {
    roles: buildRoles(presetRoleOverrides),
    modules: buildModules(PRESET_MODULES[size]),
  };
}

// ─────────────────────────────────────────────────────────────────
// MOCK INITIAL SCHOOL DATA
// ─────────────────────────────────────────────────────────────────
export const MOCK_SCHOOL: SchoolConfig = {
  schoolId: 'sch_1',
  schoolName: 'Smart Gym International School',
  schoolSize: 'medium',
  roles: buildRoles({
    'school-admin': true,
    'principal': true,
    'teacher': true,
    'accountant': true,
  }),
  modules: buildModules({
    'admissions': true,
    'students': true,
    'parents-guardians': true,
    'academics': true,
    'attendance': true,
    'timetable': true,
    'examinations': true,
    'results': true,
    'fees-finance': true,
    'staff-hr': true,
    'leave-management': true,
    'communication': true,
    'documents-certificates': true,
    'reports-analytics': true,
  }),
  lastSavedAt: '2026-09-17T09:00:00.000Z',
  lastSavedBy: 'Super Admin',
};

// ─────────────────────────────────────────────────────────────────
// MOCK HISTORY LOG
// ─────────────────────────────────────────────────────────────────
export const MOCK_HISTORY: ConfigHistoryEntry[] = [
  {
    id: 'h1',
    changeType: 'school_size_changed',
    label: 'School Size Changed',
    oldValue: 'Small School',
    newValue: 'Medium School',
    changedBy: 'Super Admin',
    timestamp: '2026-09-17T09:00:00.000Z',
  },
  {
    id: 'h2',
    changeType: 'role_enabled',
    label: 'Teacher Login',
    oldValue: 'Disabled',
    newValue: 'Enabled',
    changedBy: 'Super Admin',
    timestamp: '2026-09-17T09:05:12.000Z',
  },
  {
    id: 'h3',
    changeType: 'module_enabled',
    label: 'Library Module',
    oldValue: 'Disabled',
    newValue: 'Enabled',
    changedBy: 'Super Admin',
    timestamp: '2026-09-16T14:20:00.000Z',
  },
  {
    id: 'h4',
    changeType: 'role_enabled',
    label: 'Librarian Login',
    oldValue: 'Disabled',
    newValue: 'Enabled',
    changedBy: 'Super Admin',
    timestamp: '2026-09-16T14:22:45.000Z',
  },
  {
    id: 'h5',
    changeType: 'module_disabled',
    label: 'Transport Module',
    oldValue: 'Enabled',
    newValue: 'Disabled',
    changedBy: 'Super Admin',
    timestamp: '2026-09-15T10:30:00.000Z',
  },
];

// ─────────────────────────────────────────────────────────────────
// AUDIT LOG BUILDER
// ─────────────────────────────────────────────────────────────────
export function makeHistoryEntry(
  changeType: ChangeType,
  label: string,
  oldValue: string,
  newValue: string,
  changedBy = 'Super Admin'
): ConfigHistoryEntry {
  return {
    id: `h-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    changeType,
    label,
    oldValue,
    newValue,
    changedBy,
    timestamp: new Date().toISOString(),
  };
}

// ─────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────

/** Check if a role can be toggled ON (its required module must be ON) */
export function isRoleAvailable(
  roleId: SchoolRoleId,
  modules: Record<ModuleId, boolean>
): boolean {
  const descriptor = ROLE_MASTER.find(r => r.id === roleId);
  if (!descriptor) return false;
  if (descriptor.requiredModule) {
    return modules[descriptor.requiredModule] === true;
  }
  return true;
}

/** Format ISO timestamp to readable string */
export function formatTimestamp(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

/** Count enabled roles */
export function countEnabledRoles(roles: Record<SchoolRoleId, boolean>): number {
  return Object.values(roles).filter(Boolean).length;
}

/** Count enabled modules */
export function countEnabledModules(modules: Record<ModuleId, boolean>): number {
  return Object.values(modules).filter(Boolean).length;
}

/** Count conditional modules (library, transport, hostel) that are enabled */
export function countConditionalModules(modules: Record<ModuleId, boolean>): number {
  const conditional: ModuleId[] = ['library', 'transport', 'hostel'];
  return conditional.filter(id => modules[id]).length;
}

export const PRESET_LABELS: Record<SchoolSize, string> = {
  small: 'Small School',
  medium: 'Medium School',
  large: 'Large School',
  custom: 'Custom',
};

export const PRESET_DESCRIPTIONS: Record<SchoolSize, string> = {
  small: 'Ideal for 50–200 students. Runs through School Admin only.',
  medium: 'Ideal for 200–800 students. Core staff roles activated.',
  large: 'Ideal for 800+ students. Full role set with conditional roles.',
  custom: 'Manually control every role and module independently.',
};
