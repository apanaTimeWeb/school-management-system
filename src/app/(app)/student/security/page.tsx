import React from 'react';
import StudentSecurityMain from './student_security_components/StudentSecurityMain';

export const metadata = {
  title: "Account Security | Smart Gym 360",
  description: "Manage your account security, passwords, and active sessions.",
};

export default function StudentSecurityPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Account Security</h1>
        <p className="text-sm text-text-secondary mt-1">Manage your password, two-factor authentication, and monitor active sessions.</p>
      </div>
      <StudentSecurityMain />
    </main>
  );
}
