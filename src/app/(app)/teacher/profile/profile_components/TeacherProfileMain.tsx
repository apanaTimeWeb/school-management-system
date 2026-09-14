"use client";
import React, { useState } from 'react';
import { UserCircle, User, BookOpen, ShieldCheck, Activity, CheckCircle2, MonitorSmartphone, Clock, Smartphone, AlertTriangle, Key, Save, Edit3 } from 'lucide-react';
import { TEACHER_PROFILE_MOCK } from '../profile_constants/TeacherProfileMockData';

type Tab = 'Personal' | 'Academic' | 'Security' | 'Sessions';

export default function TeacherProfileMain() {
  const [activeTab, setActiveTab] = useState<Tab>('Personal');

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
           <UserCircle className="text-primary" size={24}/> My Profile
        </h1>
        <p className="text-[14px] text-text-secondary mt-1">Manage your personal information, assignments, and account security.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar Profile Card & Tabs */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-4 relative">
              <User size={40} className="text-primary"/>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-black border border-border flex items-center justify-center hover:bg-page hover:text-primary transition-colors text-text-secondary">
                <Edit3 size={14}/>
              </button>
            </div>
            <h2 className="text-[18px] font-bold text-text-primary">{TEACHER_PROFILE_MOCK.personalDetails.name}</h2>
            <p className="text-[13px] text-text-secondary font-bold tracking-wider mt-1">{TEACHER_PROFILE_MOCK.personalDetails.employeeId}</p>
            <div className="mt-3 px-3 py-1 bg-success/20 text-success border border-success/20 rounded-full text-[11px] font-bold uppercase tracking-wider">
              Active Teacher
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1">
            <TabButton icon={<User size={18}/>} label="Personal Details" isActive={activeTab === 'Personal'} onClick={() => setActiveTab('Personal')} />
            <TabButton icon={<BookOpen size={18}/>} label="Academic Details" isActive={activeTab === 'Academic'} onClick={() => setActiveTab('Academic')} />
            <TabButton icon={<ShieldCheck size={18}/>} label="Security & Password" isActive={activeTab === 'Security'} onClick={() => setActiveTab('Security')} />
            <TabButton icon={<Activity size={18}/>} label="Active Sessions" isActive={activeTab === 'Sessions'} onClick={() => setActiveTab('Sessions')} />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          {activeTab === 'Personal' && <PersonalDetailsTab />}
          {activeTab === 'Academic' && <AcademicDetailsTab />}
          {activeTab === 'Security' && <SecurityTab />}
          {activeTab === 'Sessions' && <SessionsTab />}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Tab Button Component
// ----------------------------------------------------
function TabButton({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] font-bold transition-colors ${
        isActive ? 'bg-primary/10 text-primary' : 'hover:bg-page text-text-secondary hover:text-text-primary'
      }`}
    >
      {icon} {label}
    </button>
  );
}

// ----------------------------------------------------
// Tab 1: Personal Details
// ----------------------------------------------------
function PersonalDetailsTab() {
  const { personalDetails } = TEACHER_PROFILE_MOCK;
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10">
          <h2 className="text-[16px] font-bold text-text-primary">Basic Information</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
           <DetailItem label="Full Name" value={personalDetails.name} />
           <DetailItem label="Employee ID" value={personalDetails.employeeId} />
           <DetailItem label="Email Address" value={personalDetails.email} />
           <DetailItem label="Phone Number" value={personalDetails.phone} />
           <DetailItem label="Date of Birth" value={personalDetails.dob} />
           <DetailItem label="Blood Group" value={personalDetails.bloodGroup} />
           <div className="md:col-span-2">
             <DetailItem label="Residential Address" value={personalDetails.address} />
           </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10">
          <h2 className="text-[16px] font-bold text-text-primary">Qualifications</h2>
        </div>
        <div className="p-6 space-y-4">
          {personalDetails.qualifications.map((q, idx) => (
            <div key={idx} className="flex items-start justify-between bg-page border border-border p-4 rounded-lg">
               <div>
                 <h3 className="text-[15px] font-bold text-primary">{q.degree}</h3>
                 <p className="text-[13px] text-text-secondary mt-1">{q.institution}</p>
               </div>
               <span className="text-[12px] font-bold text-text-primary bg-input px-3 py-1 rounded border border-border">Class of {q.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[11px] text-text-secondary uppercase font-bold tracking-wider mb-1">{label}</p>
      <p className="text-[14px] text-text-primary font-medium">{value}</p>
    </div>
  );
}

// ----------------------------------------------------
// Tab 2: Academic Assignments
// ----------------------------------------------------
function AcademicDetailsTab() {
  const { assignments } = TEACHER_PROFILE_MOCK;
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10">
          <h2 className="text-[16px] font-bold text-text-primary">Assigned Subjects</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {assignments.subjects.map((sub, idx) => (
            <div key={idx} className="bg-page border border-border p-4 rounded-lg flex flex-col">
              <h3 className="text-[16px] font-bold text-text-primary mb-2">{sub.name}</h3>
              <div className="flex items-center gap-2 mt-auto">
                 <span className="text-[10px] font-bold uppercase tracking-wider text-info bg-info/10 px-2 py-1 rounded border border-info/20">{sub.type}</span>
                 <span className="text-[10px] font-bold uppercase tracking-wider text-warning bg-warning/10 px-2 py-1 rounded border border-warning/20">{sub.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10">
          <h2 className="text-[16px] font-bold text-text-primary">Assigned Classes</h2>
        </div>
        <div className="p-0 divide-y divide-border">
          {assignments.classes.map((cls, idx) => (
            <div key={idx} className="flex items-center justify-between p-6 hover:bg-page transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                   {cls.className.split(' ')[1]}
                 </div>
                 <h3 className="text-[15px] font-bold text-text-primary">{cls.className}</h3>
               </div>
               <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded ${
                 cls.role === 'Class Teacher' ? 'bg-success/20 text-success border border-success/20' : 'bg-input text-text-secondary border border-border'
               }`}>
                 {cls.role}
               </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------
// Tab 3: Security & Passwords
// ----------------------------------------------------
function SecurityTab() {
  const { security } = TEACHER_PROFILE_MOCK;
  const [is2FA, setIs2FA] = useState(security.is2FAEnabled);
  const [passwordMsg, setPasswordMsg] = useState('');
  
  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg('Password updated successfully!');
    setTimeout(() => setPasswordMsg(''), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10">
          <h2 className="text-[16px] font-bold text-text-primary">Change Password</h2>
        </div>
        <form className="p-6 space-y-4 max-w-md" onSubmit={handleUpdatePassword}>
           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Current Password</label>
             <input type="password" placeholder="••••••••" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
           </div>
           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">New Password</label>
             <input type="password" placeholder="Enter new password" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
           </div>
           <div>
             <label className="block text-[12px] font-bold text-text-secondary uppercase mb-2">Confirm New Password</label>
             <input type="password" placeholder="Re-enter new password" className="w-full bg-input border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary focus:border-primary focus:outline-none" required />
           </div>
           <button type="submit" className="px-5 py-2.5 bg-primary text-white font-bold text-[13px] rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-colors mt-2">
             <Key size={16} /> Update Password
           </button>
           {passwordMsg && <p className="text-success text-[13px] font-bold mt-2 animate-in fade-in">{passwordMsg}</p>}
        </form>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10">
          <h2 className="text-[16px] font-bold text-text-primary">Two-Factor Authentication (2FA)</h2>
        </div>
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
           <div className="flex-1">
             <h3 className="text-[15px] font-bold text-text-primary mb-1">Add an extra layer of security</h3>
             <p className="text-[13px] text-text-secondary">Require both a password and an authentication code from your mobile device to log into your account.</p>
           </div>
           <button 
             onClick={() => setIs2FA(!is2FA)}
             className={`px-5 py-2.5 font-bold text-[13px] rounded-lg border flex items-center gap-2 transition-colors ${
               is2FA 
               ? 'bg-success/10 text-success border-success/50 hover:bg-success/20' 
               : 'bg-page text-text-primary border-border hover:border-primary/50'
             }`}
           >
             {is2FA ? <><CheckCircle2 size={16}/> 2FA Enabled</> : 'Enable 2FA'}
           </button>
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------
// Tab 4: Sessions & History
// ----------------------------------------------------
function SessionsTab() {
  const { sessions } = TEACHER_PROFILE_MOCK;
  const [activeSessions, setActiveSessions] = useState(sessions.active);

  const handleRevokeAll = () => {
    setActiveSessions(activeSessions.filter(s => s.isCurrent));
  };

  const handleLogout = (idx: number) => {
    setActiveSessions(activeSessions.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10 flex items-center justify-between">
          <h2 className="text-[16px] font-bold text-text-primary">Active Sessions</h2>
          {activeSessions.length > 1 && (
            <button onClick={handleRevokeAll} className="text-[12px] font-bold text-danger hover:underline">Revoke All</button>
          )}
        </div>
        <div className="p-0 divide-y divide-border">
          {activeSessions.map((ses, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-page transition-colors gap-4">
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-xl bg-input border border-border flex items-center justify-center text-text-secondary shrink-0">
                   {ses.device.includes('iPhone') || ses.device.includes('Mobile') ? <Smartphone size={20}/> : <MonitorSmartphone size={20}/>}
                 </div>
                 <div>
                   <h3 className="text-[15px] font-bold text-text-primary flex items-center gap-2">
                     {ses.device} 
                     {ses.isCurrent && <span className="text-[10px] bg-success/20 text-success px-2 py-0.5 rounded uppercase tracking-wider">Current</span>}
                   </h3>
                   <p className="text-[12px] text-text-secondary mt-1">{ses.location} • IP: {ses.ip}</p>
                   <p className="text-[11px] font-bold text-info mt-1 flex items-center gap-1"><Clock size={12}/> Last Active: {ses.lastActive}</p>
                 </div>
               </div>
               {!ses.isCurrent && (
                 <button onClick={() => handleLogout(idx)} className="px-4 py-2 bg-page border border-danger/30 text-danger hover:bg-danger/10 font-bold text-[12px] rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto">
                   Log Out
                 </button>
               )}
            </div>
          ))}
          {activeSessions.length === 0 && (
            <div className="p-6 text-center text-text-secondary">No active sessions found.</div>
          )}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-black/10">
          <h2 className="text-[16px] font-bold text-text-primary">Recent Login History</h2>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-page/50 border-b border-border">
                <th className="px-6 py-3 text-[11px] font-bold text-text-secondary uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-[11px] font-bold text-text-secondary uppercase tracking-wider">Device & Browser</th>
                <th className="px-6 py-3 text-[11px] font-bold text-text-secondary uppercase tracking-wider">IP Address</th>
                <th className="px-6 py-3 text-[11px] font-bold text-text-secondary uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sessions.history.map((hist, idx) => (
                <tr key={idx} className="hover:bg-page transition-colors">
                  <td className="px-6 py-4 text-[13px] text-text-primary whitespace-nowrap">{hist.date}</td>
                  <td className="px-6 py-4 text-[13px] text-text-primary">{hist.device}</td>
                  <td className="px-6 py-4 text-[13px] text-text-secondary">{hist.ip}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit ${hist.status === 'Success' ? 'text-success' : 'text-danger'}`}>
                      {hist.status === 'Success' ? <CheckCircle2 size={14}/> : <AlertTriangle size={14}/>} {hist.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
