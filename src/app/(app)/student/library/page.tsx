import React from 'react';
import StudentLibraryMain from './student_library_components/StudentLibraryMain';

export const metadata = {
  title: "Library | School ERP 360",
  description: "Search books, manage issued items, and track your library history.",
};

export default function StudentLibraryPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">School Library</h1>
        <p className="text-sm text-text-secondary mt-1">Discover new books, renew your issued items, and clear fines.</p>
      </div>
      <StudentLibraryMain />
    </main>
  );
}
