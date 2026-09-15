import React from 'react';
import StudentOnlineTestsMain from './student_online_tests_components/StudentOnlineTestsMain';

export const metadata = {
  title: "Online Tests & Quizzes | Smart Gym 360",
  description: "Take online assessments, quizzes and view your past scores.",
};

export default function StudentOnlineTestsPage() {
  return (
    <main className="w-full h-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col">
      <div className="mb-6 shrink-0">
        <h1 className="text-2xl font-bold text-text-primary">Online Tests & Quizzes</h1>
        <p className="text-sm text-text-secondary mt-1">Take pending assessments and view your attempt history.</p>
      </div>
      <div className="flex-1 min-h-[500px]">
        <StudentOnlineTestsMain />
      </div>
    </main>
  );
}
