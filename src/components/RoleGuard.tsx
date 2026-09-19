"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { useSchoolConfig } from '@/hooks/useSchoolConfig';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

// Mapping URL prefixes to their configuration role keys
const ROLE_PREFIX_MAP: Record<string, string> = {
  '/admin': 'school-admin',
  '/principal': 'principal',
  '/teacher': 'teacher',
  '/accountant': 'accountant',
  '/hr': 'hr',
  '/student': 'student',
  '/parent': 'parent',
  '/librarian': 'librarian',
  '/transport-manager': 'transport-manager',
  '/hostel-warden': 'hostel-warden'
};

const MODULE_PREFIX_MAP: Record<string, string> = {
  '/hostel': 'hostel',
  '/transport': 'transport'
};

export default function RoleGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { roles, modules, isLoaded, activeSchoolName } = useSchoolConfig();

  // Find which role this path belongs to
  const matchingRolePrefix = Object.keys(ROLE_PREFIX_MAP).find(prefix => pathname.startsWith(prefix));
  const matchingModulePrefix = Object.keys(MODULE_PREFIX_MAP).find(prefix => pathname.startsWith(prefix));

  // If not a protected route (e.g. super-admin, login) — allow through
  if (!matchingRolePrefix && !matchingModulePrefix) {
    return <>{children}</>;
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // Check if access should be granted
  let isEnabled = false;
  if (matchingRolePrefix) {
    const roleKey = ROLE_PREFIX_MAP[matchingRolePrefix];
    if (roles[roleKey]) isEnabled = true;
  }
  if (!isEnabled && matchingModulePrefix) {
    const moduleKey = MODULE_PREFIX_MAP[matchingModulePrefix];
    if (modules[moduleKey]) isEnabled = true;
  }

  if (!isEnabled) {
    return (
      <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-4 text-center relative">
        <div className="bg-white border border-border rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 text-center animate-in zoom-in-95">
          <div className="w-16 h-16 bg-danger-bg rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldAlert className="text-danger" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">Access Disabled</h2>
          <p className="text-text-secondary text-sm mb-6 leading-relaxed">
            This dashboard is not enabled for <strong className="text-text-primary">{activeSchoolName}</strong>.
            <br /><br />
            Please configure the school settings in Super Admin to enable this module.
          </p>
          <Link href="/login" className="inline-flex bg-bg-page border border-border text-text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-bg-page/80 transition-colors w-full justify-center">
            Back to Login Selection
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
