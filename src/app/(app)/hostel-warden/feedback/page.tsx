import React from 'react';
import FeedbackMain from './feedback_components/FeedbackMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback & Suggestions | Hostel Warden',
  description: 'Review and respond to student feedback, complaints, and anonymous suggestions.',
};

export default function FeedbackPage() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-64px)] bg-[var(--bg-page)] text-[var(--text-primary)] p-6">
      <FeedbackMain />
    </div>
  );
}
