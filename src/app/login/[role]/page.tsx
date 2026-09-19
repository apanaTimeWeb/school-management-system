"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Lock, User, AlertTriangle, ShieldAlert, Eye, EyeOff } from 'lucide-react';
import { ROLE_LOGIN_CONFIG, DEMO_SCHOOLS } from '../login_mock_data';

const LS_KEY = "school_erp_config_sch_1";

export default function DynamicRoleLogin() {
  const router = useRouter();
  const params = useParams();
  const roleKey = params.role as string;

  const [loading, setLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [activeSchoolName, setActiveSchoolName] = useState('');

  const roleConfig = ROLE_LOGIN_CONFIG[roleKey];

  useEffect(() => {
    if (!roleConfig) {
      setLoading(false);
      return;
    }
    const activeSchoolId = localStorage.getItem('demo_active_school') || 'school-c-large';

    let activeRoles: Record<string, boolean> = {};
    let schoolName = '';

    if (activeSchoolId === 'local-custom') {
      try {
        const raw = localStorage.getItem(LS_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          activeRoles = parsed.roles || {};
          schoolName = 'Your Custom School (Local)';
        }
      } catch { /* ignore */ }
    } else {
      const demoSchool = DEMO_SCHOOLS.find(s => s.id === activeSchoolId);
      if (demoSchool) {
        activeRoles = demoSchool.roles;
        schoolName = demoSchool.name;
      }
    }

    setIsEnabled(!!activeRoles[roleKey]);
    setActiveSchoolName(schoolName || 'Unknown School');
    setLoading(false);
  }, [roleKey, roleConfig]);

  // Invalid role route
  if (!loading && !roleConfig) {
    return (
      <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">Role Not Found</h1>
        <p className="text-text-secondary mb-6 text-sm">The login role you requested does not exist.</p>
        <Link href="/login" className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
          Back to Login Selection
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // Disabled Role
  if (!isEnabled) {
    return (
      <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-4 relative">
        <Link href="/login" className="absolute top-5 left-4 sm:top-8 sm:left-8 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-semibold text-sm">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="bg-white border border-border rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 text-center">
          <div className="w-16 h-16 bg-danger-bg rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldAlert className="text-danger" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">Access Disabled</h2>
          <p className="text-text-secondary text-sm mb-6 leading-relaxed">
            <strong className="text-text-primary">{roleConfig.label}</strong> login is not enabled for{' '}
            <strong className="text-text-primary">{activeSchoolName}</strong>.
            <br /><br />
            Please configure the school settings in Super Admin to enable this login.
          </p>
          <Link href="/login" className="inline-flex bg-bg-page border border-border text-text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-bg-page/80 transition-colors w-full justify-center text-sm">
            Back to Login Selection
          </Link>
        </div>
      </div>
    );
  }

  const Icon = roleConfig.icon;

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const user = formData.get('username') as string;
    const pass = formData.get('password') as string;

    setTimeout(() => {
      if (user === roleConfig.demoUser && pass === roleConfig.demoPass) {
        router.push(roleConfig.dashboardRoute);
      } else {
        setError('Invalid username or password. (Hint: credentials are pre-filled)');
        setIsLoggingIn(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bg-main">
      {/* Back button */}
      <Link
        href="/login"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors font-semibold text-sm z-50 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-border"
      >
        <ArrowLeft size={15} /> Back
      </Link>

      {/* Left Branding Panel — desktop only */}
      <div
        className="hidden md:flex md:w-[45%] lg:w-1/2 flex-col items-center justify-center p-8 lg:p-12 text-center"
        style={{ backgroundColor: roleConfig.bgColor }}
      >
        <div
          className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-3xl font-bold mb-6"
          style={{ color: roleConfig.color }}
        >
          {activeSchoolName.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-2xl lg:text-3xl font-extrabold text-text-primary mb-2 leading-tight">{activeSchoolName}</h1>
        <p className="text-text-secondary text-base lg:text-lg mb-8">School ERP Portal</p>

        <div className="bg-white/60 px-5 py-3 rounded-full backdrop-blur-sm border border-white/80 flex items-center gap-3">
          <Icon size={20} color={roleConfig.color} />
          <span className="font-bold text-text-primary text-sm">Logging in as {roleConfig.label}</span>
        </div>
      </div>

      {/* Right Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-screen md:min-h-0">
        <div className="w-full max-w-[420px] mt-12 md:mt-0">

          {/* Mobile school name (hidden on desktop) */}
          <div className="md:hidden text-center mb-6">
            <h1 className="text-xl font-extrabold text-text-primary mb-1">{activeSchoolName}</h1>
            <p className="text-text-secondary text-sm">School ERP Portal</p>
          </div>

          <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden">
            {/* Role Header */}
            <div className="p-6 sm:p-8 text-center border-b border-border" style={{ backgroundColor: roleConfig.bgColor }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Icon color={roleConfig.color} size={28} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary">{roleConfig.label}</h2>
              <p className="text-text-secondary mt-1 text-xs sm:text-sm">{roleConfig.description}</p>
            </div>

            {/* Form */}
            <div className="p-5 sm:p-8">
              {error && (
                <div className="mb-5 p-3 bg-danger-bg border border-danger/30 rounded-lg flex items-start gap-2 text-danger text-xs sm:text-sm font-semibold">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Username</label>
                  <div className="relative">
                    <input
                      name="username"
                      type="text"
                      defaultValue={roleConfig.demoUser}
                      className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2.5 sm:py-3 text-sm font-medium focus:outline-none focus:ring-2 transition-all"
                      style={{ '--tw-ring-color': roleConfig.color } as React.CSSProperties}
                      required
                    />
                    <User className="absolute left-3 top-3 sm:top-3.5 text-text-secondary" size={15} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      defaultValue={roleConfig.demoPass}
                      className="w-full bg-input border border-border rounded-lg pl-10 pr-10 py-2.5 sm:py-3 text-sm font-medium focus:outline-none focus:ring-2 transition-all tracking-widest"
                      style={{ '--tw-ring-color': roleConfig.color } as React.CSSProperties}
                      required
                    />
                    <Lock className="absolute left-3 top-3 sm:top-3.5 text-text-secondary" size={15} />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 sm:top-3.5 text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-border" defaultChecked />
                    <span className="text-xs sm:text-sm font-medium text-text-secondary">Remember me</span>
                  </label>
                  <button type="button" className="text-xs sm:text-sm font-bold transition-colors hover:underline" style={{ color: roleConfig.color }}>
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="mt-3 w-full text-white font-bold py-3 sm:py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                  style={{ backgroundColor: roleConfig.color }}
                >
                  {isLoggingIn ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    `Login as ${roleConfig.label}`
                  )}
                </button>
              </form>

              <div className="mt-6 text-center pt-5 border-t border-border">
                <p className="text-xs text-text-secondary/80 font-medium">
                  🔒 Demo mode — credentials are pre-filled for testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
