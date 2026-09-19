"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft, ArrowRight, ChevronDown, CheckCircle2, Building, X } from 'lucide-react';
import { DEMO_SCHOOLS, ROLE_LOGIN_CONFIG } from './login_mock_data';

const LS_KEY = "school_erp_config_sch_1";

export default function LoginSelectionPage() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('school-c-large');
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [localCustomConfig, setLocalCustomConfig] = useState<any>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setLocalCustomConfig({
          id: 'local-custom',
          name: 'Your Custom School (Local)',
          size: parsed.size,
          roles: parsed.roles,
          modules: parsed.modules,
        });
      }
      // Also respect previously selected school
      const prevSelected = localStorage.getItem('demo_active_school');
      if (prevSelected) setSelectedSchoolId(prevSelected);
    } catch { /* ignore */ }
  }, []);

  const allOptions = [...DEMO_SCHOOLS, ...(localCustomConfig ? [localCustomConfig] : [])];
  const activeSchool = allOptions.find(s => s.id === selectedSchoolId) || allOptions[0];

  const visibleRoles = Object.keys(activeSchool.roles)
    .filter(roleId => activeSchool.roles[roleId as keyof typeof activeSchool.roles] === true)
    .map(roleId => ROLE_LOGIN_CONFIG[roleId])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-bg-main flex flex-col font-sans">
      {/* Top nav */}
      <div className="w-full px-4 sm:px-6 pt-5 pb-2 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors font-semibold text-sm">
          <ArrowLeft size={16} /> Back
        </Link>
        <Link
          href="/login/super-admin"
          className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-[#1E3A8A] transition-colors bg-white px-3 py-2 rounded-full border border-border hover:border-[#1E3A8A]/30 shadow-sm"
        >
          <Shield size={13} />
          <span className="hidden sm:inline">Platform Super Admin</span>
          <span className="sm:hidden">Super Admin</span>
        </Link>
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-col">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-md">
              S
            </div>
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
              School<span className="text-primary">ERP</span>
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary mb-1">Welcome back</h1>
          <p className="text-text-secondary text-sm sm:text-base">Select your school and account type to continue.</p>
        </div>

        {/* Demo School Selector */}
        <div className="max-w-md mx-auto w-full mb-8 sm:mb-10 relative z-50">
          <label className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 block text-center">
            Demo School Selection
          </label>
          <div className="relative">
            <button
              onClick={() => setIsSelectorOpen(!isSelectorOpen)}
              className="w-full bg-white border border-border rounded-xl px-4 py-3 sm:py-3.5 flex items-center justify-between hover:border-primary transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="bg-primary-subtle p-2 rounded-lg text-primary shrink-0">
                  <Building size={16} />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-sm font-bold text-text-primary truncate">{activeSchool.name}</p>
                  <p className="text-[11px] text-text-secondary uppercase font-semibold">Mode: {activeSchool.size}</p>
                </div>
              </div>
              <ChevronDown size={18} className={`text-text-secondary shrink-0 transition-transform ${isSelectorOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSelectorOpen && (
              <>
                {/* Backdrop to close on outside click */}
                <div className="fixed inset-0 z-40" onClick={() => setIsSelectorOpen(false)} />
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-border rounded-xl shadow-2xl overflow-hidden py-1 z-50">
                  {allOptions.map(school => (
                    <button
                      key={school.id}
                      onClick={() => {
                        setSelectedSchoolId(school.id);
                        setIsSelectorOpen(false);
                        localStorage.setItem('demo_active_school', school.id);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-bg-page transition-colors ${selectedSchoolId === school.id ? 'bg-primary-subtle/30' : ''}`}
                    >
                      <div>
                        <p className="text-sm font-bold text-text-primary">{school.name}</p>
                        <p className="text-[11px] text-text-secondary uppercase">{school.size} mode</p>
                      </div>
                      {selectedSchoolId === school.id && <CheckCircle2 size={16} className="text-primary shrink-0" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Dynamic Login Cards */}
        <div className="bg-white border border-border rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8 border-b border-border pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-text-primary">
                {activeSchool.name} Portal
              </h2>
              <p className="text-sm text-text-secondary mt-1">Choose how you want to continue</p>
            </div>
            <div className="bg-bg-page px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-text-secondary self-start sm:self-auto">
              {visibleRoles.length} role{visibleRoles.length !== 1 ? 's' : ''} enabled
            </div>
          </div>

          {visibleRoles.length === 0 ? (
            <div className="text-center py-10 sm:py-16">
              <div className="w-16 h-16 bg-bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                <Shield className="text-text-disabled" size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">No Logins Enabled</h3>
              <p className="text-sm text-text-secondary max-w-sm mx-auto">
                No operational login has been enabled for this school. Please contact your system administrator.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {visibleRoles.map(role => {
                const Icon = role.icon;
                return (
                  <Link
                    key={role.id}
                    href={role.route}
                    className="group bg-white border border-border rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center text-center relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-1"
                      style={{ backgroundColor: role.color }}
                    />
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform mt-1"
                      style={{ backgroundColor: role.bgColor }}
                    >
                      <Icon color={role.color} size={24} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1">{role.label}</h3>
                    <p className="text-text-secondary text-xs font-medium mb-4 sm:mb-6 line-clamp-2 min-h-[32px]">{role.description}</p>

                    <div
                      className="mt-auto flex items-center gap-2 font-bold px-3 sm:px-4 py-2 rounded-lg transition-colors w-full justify-center text-xs sm:text-[13px] border border-transparent"
                      style={{ color: role.color, backgroundColor: role.bgColor }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = role.color;
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = role.bgColor;
                        e.currentTarget.style.color = role.color;
                      }}
                    >
                      Continue <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
