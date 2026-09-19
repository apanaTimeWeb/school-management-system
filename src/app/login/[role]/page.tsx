"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Lock, User, AlertTriangle, ShieldAlert } from 'lucide-react';
import { ROLE_LOGIN_CONFIG, DEMO_SCHOOLS } from '../login_mock_data';

// ─── LOCALSTORAGE KEY ──────────────────────────────────────────────────────
const LS_KEY = "school_erp_config_sch_1";

export default function DynamicRoleLogin() {
  const router = useRouter();
  const params = useParams();
  const roleKey = params.role as string;
  
  const [loading, setLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState('');
  
  const [isEnabled, setIsEnabled] = useState(false);
  const [activeSchoolName, setActiveSchoolName] = useState('');
  
  const roleConfig = ROLE_LOGIN_CONFIG[roleKey];

  useEffect(() => {
    // 1. Check if valid role route
    if (!roleConfig) {
      setLoading(false);
      return;
    }

    // 2. Load selected school
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
      } catch {
        // fallback
      }
    } else {
      const demoSchool = DEMO_SCHOOLS.find(s => s.id === activeSchoolId);
      if (demoSchool) {
        activeRoles = demoSchool.roles;
        schoolName = demoSchool.name;
      }
    }

    // 3. Verify role is enabled
    setIsEnabled(!!activeRoles[roleKey]);
    setActiveSchoolName(schoolName || 'Unknown School');
    setLoading(false);
  }, [roleKey, roleConfig]);

  // Invalid role route
  if (!loading && !roleConfig) {
    return (
      <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Role Not Found</h1>
        <p className="text-text-secondary mb-6">The login role you requested does not exist.</p>
        <Link href="/login" className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Back to Login Selection
        </Link>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // Disabled Role Access Screen
  if (!isEnabled) {
    return (
      <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 relative">
        <Link href="/login" className="absolute top-8 left-8 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-semibold text-sm">
          <ArrowLeft size={16} /> Back to Login Selection
        </Link>
        <div className="bg-white border border-border rounded-2xl shadow-xl w-full max-w-md p-8 text-center animate-in zoom-in-95">
          <div className="w-16 h-16 bg-danger-bg rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldAlert className="text-danger" size={32} />
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-2">Access Disabled</h2>
          <p className="text-text-secondary text-sm mb-6 leading-relaxed">
            <strong className="text-text-primary">{roleConfig.label}</strong> login is not enabled for <strong className="text-text-primary">{activeSchoolName}</strong>. 
            <br/><br/>
            Please configure the school settings in Super Admin to enable this login.
          </p>
          <Link href="/login" className="inline-flex bg-bg-page border border-border text-text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-bg-page/80 transition-colors w-full justify-center">
            Back to Login Selection
          </Link>
        </div>
      </div>
    );
  }

  // Active Login Screen
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
        // Success -> redirect
        router.push(roleConfig.dashboardRoute);
      } else {
        // Error
        setError('Invalid username or password.');
        setIsLoggingIn(false);
      }
    }, 800); // simulate network
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bg-main relative">
      <Link href="/login" className="absolute top-6 left-6 flex items-center gap-2 text-text-secondary hover:text-primary transition-colors font-semibold text-sm z-50 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-border">
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Left panel: School Branding */}
      <div 
        className="hidden md:flex flex-1 flex-col items-center justify-center p-12 text-center"
        style={{ backgroundColor: roleConfig.bgColor }}
      >
        <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-3xl font-bold mb-6" style={{ color: roleConfig.color }}>
          {activeSchoolName.charAt(0)}
        </div>
        <h1 className="text-3xl font-extrabold text-text-primary mb-2">{activeSchoolName}</h1>
        <p className="text-text-secondary text-lg mb-8">School ERP Portal</p>
        
        <div className="bg-white/60 px-6 py-3 rounded-full backdrop-blur-sm border border-white flex items-center gap-3">
          <Icon size={20} color={roleConfig.color} />
          <span className="font-bold text-text-primary">Logging in as {roleConfig.label}</span>
        </div>
      </div>

      {/* Right panel: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-bg-main relative">
        <div className="w-full max-w-md">
          {/* Mobile header (hidden on desktop) */}
          <div className="md:hidden text-center mb-8 mt-12">
            <h1 className="text-2xl font-extrabold text-text-primary mb-1">{activeSchoolName}</h1>
            <p className="text-text-secondary text-sm">School ERP Portal</p>
          </div>

          <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center border-b border-border" style={{ backgroundColor: roleConfig.bgColor }}>
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Icon color={roleConfig.color} size={32} />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">{roleConfig.label}</h2>
              <p className="text-text-secondary mt-1 text-sm">{roleConfig.description}</p>
            </div>

            <div className="p-8">
              {error && (
                <div className="mb-6 p-3 bg-danger-bg border border-danger/30 rounded-lg flex items-center gap-2 text-danger text-sm font-semibold animate-in fade-in slide-in-from-top-2">
                  <AlertTriangle size={16} />
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Username</label>
                  <div className="relative">
                    <input 
                      name="username"
                      type="text" 
                      defaultValue={roleConfig.demoUser}
                      className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:outline-none transition-colors"
                      style={{ outlineColor: roleConfig.color, outlineWidth: '2px' }}
                      required
                    />
                    <User className="absolute left-3 top-3.5 text-text-secondary" size={16} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Password</label>
                  <div className="relative">
                    <input 
                      name="password"
                      type="password" 
                      defaultValue={roleConfig.demoPass}
                      className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-3 text-sm font-medium focus:outline-none transition-colors tracking-widest"
                      style={{ outlineColor: roleConfig.color, outlineWidth: '2px' }}
                      required
                    />
                    <Lock className="absolute left-3 top-3.5 text-text-secondary" size={16} />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" defaultChecked />
                    <span className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Remember me</span>
                  </label>
                  <button type="button" className="text-sm font-bold transition-colors hover:underline" style={{ color: roleConfig.color }}>
                    Forgot Password?
                  </button>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoggingIn}
                  className="mt-4 w-full text-white font-bold py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: roleConfig.color }}
                >
                  {isLoggingIn ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    \`Login as \${roleConfig.label}\`
                  )}
                </button>
              </form>
              
              <div className="mt-8 text-center pt-6 border-t border-border">
                <p className="text-xs text-text-secondary/80 font-medium">
                  Demo mode active. Credentials are pre-filled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
