import React from 'react';
import StudentProfileMain from './student_profile_components/StudentProfileMain';

export const metadata = {
  title: "My Profile | Smart Gym 360",
  description: "View your personal and academic profile details.",
};

export default function StudentProfilePage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">My Profile</h1>
          <p className="text-sm text-text-secondary mt-1">Manage and view your personal, academic, and contact details.</p>
        </div>
      </div>
      <StudentProfileMain />
    </main>
  );
}
