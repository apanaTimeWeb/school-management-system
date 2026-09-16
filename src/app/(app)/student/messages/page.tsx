import React from 'react';
import StudentMessagesMain from './student_messages_components/StudentMessagesMain';

export const metadata = {
  title: "Messages | School ERP 360",
  description: "View and reply to messages from teachers and school administration.",
};

export default function StudentMessagesPage() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] flex flex-col">
      <div className="mb-6 shrink-0">
        <h1 className="text-2xl font-bold text-text-primary">Messages</h1>
        <p className="text-sm text-text-secondary mt-1">Direct communication with your teachers and school admins.</p>
      </div>
      <div className="flex-1 min-h-0">
        <StudentMessagesMain />
      </div>
    </main>
  );
}
