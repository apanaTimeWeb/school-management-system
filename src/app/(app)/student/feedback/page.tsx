import React from 'react';
import StudentFeedbackMain from './student_feedback_components/StudentFeedbackMain';

export const metadata = {
  title: "Feedback & Suggestions | Smart Gym 360",
  description: "Share your thoughts, suggestions, and grievances securely.",
};

export default function StudentFeedbackPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Feedback & Suggestions</h1>
        <p className="text-sm text-text-secondary mt-1">Share your feedback on courses, teachers, or report any grievances.</p>
      </div>
      <StudentFeedbackMain />
    </main>
  );
}
