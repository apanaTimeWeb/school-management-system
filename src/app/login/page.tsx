"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft, ArrowRight, ChevronDown, CheckCircle2, Building } from 'lucide-react';
import { DEMO_SCHOOLS, ROLE_LOGIN_CONFIG } from './login_mock_data';

// ─── LOCALSTORAGE KEY ──────────────────────────────────────────────────────
const LS_KEY = "school_erp_config_sch_1";

export default function LoginSelectionPage() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('school-c-large'); // default to large demo
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [localCustomConfig, setLocalCustomConfig] = useState<any>(null);

  // Load custom local config if exists
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
    } catch {
      // ignore
    }
  }, []);

  const allOptions = [...DEMO_SCHOOLS, ...(localCustomConfig ? [localCustomConfig] : [])];
  const activeSchool = allOptions.find(s => s.id === selectedSchoolId) || allOptions[0];

  // Helper to get visible roles
  const visibleRoles = Object.keys(activeSchool.roles)
    .filter(roleId => activeSchool.roles[roleId as keyof typeof activeSchool.roles] === true)
    // Map to config
    .map(roleId => ROLE_LOGIN_CONFIG[roleId])
    .filter(Boolean); // filter out if not found (e.g. school-admin is found, but super admin is separate)

  return (
    <div className="min-h-screen bg-bg-main flex flex-col font-sans relative">
      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-semibold text-sm">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col mt-8">
        
        {/* Header & Title */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-3xl shadow-md">
              S
            </div>
            <span className="text-4xl font-extrabold tracking-tight text-text-primary">
              School<span className="text-primary">ERP</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-1">Welcome back</h1>
          <p className="text-text-secondary text-base">Select your school and account type to continue.</p>
        </div>

        {/* Demo School Selector */}
        <div className="max-w-md mx-auto w-full mb-10 relative z-50">
          <label className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 block text-center">
            Demo School Selection
          </label>
          <div className="relative">
            <button 
              onClick={() => setIsSelectorOpen(!isSelectorOpen)}
              className="w-full bg-white border border-border rounded-xl px-4 py-3.5 flex items-center justify-between hover:border-primary transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary-subtle p-2 rounded-lg text-primary">
                  <Building size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-text-primary">{activeSchool.name}</p>
                  <p className="text-[11px] text-text-secondary uppercase font-semibold">Mode: {activeSchool.size}</p>
                </div>
              </div>
              <ChevronDown size={18} className="text-text-secondary" />
            </button>

            {isSelectorOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white border border-border rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-in slide-in-from-top-2">
                {allOptions.map(school => (
                  <button
                    key={school.id}
                    onClick={() => {
                      setSelectedSchoolId(school.id);
                      setIsSelectorOpen(false);
                      // Save selection for individual login pages to read
                      localStorage.setItem('demo_active_school', school.id);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-bg-page transition-colors ${selectedSchoolId === school.id ? 'bg-primary-subtle/30' : ''}`}
                  >
                    <div>
                      <p className="text-sm font-bold text-text-primary">{school.name}</p>
                      <p className="text-[11px] text-text-secondary uppercase">{school.size} mode</p>
                    </div>
                    {selectedSchoolId === school.id && <CheckCircle2 size={16} className="text-primary" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Super Admin Static Link */}
        <div className="max-w-6xl mx-auto w-full flex justify-end mb-4">
          <Link href="/login/super-admin" className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-[#1E3A8A] transition-colors bg-white px-4 py-2 rounded-full border border-border hover:border-[#1E3A8A]/30 shadow-sm">
            <Shield size={14} />
            Platform Super Admin
          </Link>
        </div>

        {/* Dynamic Login Cards */}
        <div className="bg-white border border-border rounded-2xl shadow-sm p-8 lg:p-10">
          <div className="mb-8 border-b border-border pb-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                {activeSchool.name} Portal
              </h2>
              <p className="text-sm text-text-secondary mt-1">Choose how you want to continue</p>
            </div>
            <div className="bg-bg-page px-3 py-1.5 rounded-lg border border-border text-xs font-semibold text-text-secondary">
              {visibleRoles.length} operational roles enabled
            </div>
          </div>

          {visibleRoles.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-border">
                <Shield className="text-text-disabled" size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">No Logins Enabled</h3>
              <p className="text-sm text-text-secondary max-w-sm mx-auto">
                No operational login has been enabled for this school. Please contact your system administrator.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {visibleRoles.map(role => {
                const Icon = role.icon;
                return (
                  <Link 
                    key={role.id}
                    href={role.route} 
                    className="group bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center text-center relative overflow-hidden"
                  >
                    <div 
                      className="absolute top-0 left-0 w-full h-1 transition-colors"
                      style={{ backgroundColor: role.color }}
                    />
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mt-2"
                      style={{ backgroundColor: role.bgColor }}
                    >
                      <Icon color={role.color} size={28} />
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-1">{role.label}</h3>
                    <p className="text-text-secondary text-xs font-medium mb-6 line-clamp-2 min-h-[32px]">{role.description}</p>
                    
                    <div 
                      className="mt-auto flex items-center gap-2 font-bold px-4 py-2 rounded-lg transition-colors w-full justify-center text-[13px] border"
                      style={{ 
                        color: role.color,
                        backgroundColor: role.bgColor,
                        borderColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = role.color;
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = role.bgColor;
                        e.currentTarget.style.color = role.color;
                      }}
                    >
                      Continue <ArrowRight size={14} />
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
