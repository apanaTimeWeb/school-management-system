import React from 'react';
import StudentStudyMaterialMain from './student_study_material_components/StudentStudyMaterialMain';

export const metadata = {
  title: "Study Material | School ERP 360",
  description: "Browse and download study materials, notes, and videos.",
};

export default function StudentStudyMaterialPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Study Material</h1>
        <p className="text-sm text-text-secondary mt-1">Access notes, documents, videos, and links shared by your teachers.</p>
      </div>
      <StudentStudyMaterialMain />
    </main>
  );
}
