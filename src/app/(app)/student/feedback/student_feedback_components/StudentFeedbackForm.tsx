"use client";

import React, { useState } from 'react';
import type { FeedbackCategory, FeedbackSubmission } from '../student_feedback_types/student_feedback_types';
import { Send, Loader2, Star, EyeOff, ShieldAlert } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  allowAnonymous: boolean;
  teachersList: string[];
  coursesList: string[];
  onSubmit: (payload: Partial<FeedbackSubmission>) => Promise<{success: boolean, message: string}>;
}

export default function StudentFeedbackForm({ allowAnonymous, teachersList, coursesList, onSubmit }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [category, setCategory] = useState<FeedbackCategory>('Course Feedback');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [comments, setComments] = useState('');
  
  // Specific targets depending on category
  const [target, setTarget] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comments.trim()) return;
    
    setIsSubmitting(true);
    // Combine target into comments if applicable just for mock
    const finalComments = target ? `[Target: ${target}] ${comments}` : comments;
    
    const res = await onSubmit({ category, rating, isAnonymous, comments: finalComments });
    setIsSubmitting(false);
    
    if (res.success) {
      setComments('');
      setRating(0);
      setTarget('');
      alert(res.message);
    }
  };

  const showRating = category !== 'Complaint/Grievance' && category !== 'Suggestion';

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-5 md:p-8 shadow-sm max-w-3xl motion-safe:animate-[fadeIn_0.3s_ease-out]">
      <h2 className="text-xl font-bold text-text-primary mb-6">Tell us what you think!</h2>

      <div className="space-y-6">
        
        {/* Category */}
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Feedback Type</label>
          <div className="flex flex-wrap gap-2">
            {(['Course Feedback', 'Teacher Feedback', 'School Feedback', 'Event Feedback', 'Suggestion', 'Complaint/Grievance'] as FeedbackCategory[]).map(cat => (
              <button
                key={cat} type="button"
                onClick={() => { setCategory(cat); setTarget(''); }}
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-bold border transition-colors",
                  category === cat 
                    ? (cat === 'Complaint/Grievance' ? "bg-danger text-white border-danger" : "bg-primary text-white border-primary")
                    : "bg-page text-text-secondary border-border hover:border-primary/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Target Selection */}
        {category === 'Teacher Feedback' && (
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Select Teacher</label>
            <select value={target} onChange={(e) => setTarget(e.target.value)} required className="w-full bg-page border border-border text-text-primary text-sm rounded-lg px-4 py-3 outline-none focus:border-primary">
              <option value="">-- Choose Teacher --</option>
              {teachersList.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        )}
        
        {category === 'Course Feedback' && (
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Select Course</label>
            <select value={target} onChange={(e) => setTarget(e.target.value)} required className="w-full bg-page border border-border text-text-primary text-sm rounded-lg px-4 py-3 outline-none focus:border-primary">
              <option value="">-- Choose Course --</option>
              {coursesList.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        )}

        {/* Rating */}
        {showRating && (
          <div>
            <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Your Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star} type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="p-1 focus:outline-none transition-transform hover:scale-110"
                >
                  <Star 
                    size={32} 
                    className={clsx(
                      "transition-colors",
                      (hoverRating || rating) >= star ? "fill-amber-500 text-amber-500" : "fill-transparent text-border"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Comments */}
        <div>
          <label className="block text-xs font-bold text-text-secondary uppercase mb-2">Detailed Comments</label>
          <textarea 
            required rows={5} value={comments} onChange={(e) => setComments(e.target.value)}
            placeholder="Please share your thoughts..."
            className="w-full bg-page border border-border text-text-primary text-sm rounded-lg px-4 py-3 outline-none focus:border-primary custom-scrollbar resize-y"
          />
        </div>

        {/* Options */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border">
          
          {allowAnonymous ? (
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input 
                  type="checkbox" className="sr-only" 
                  checked={isAnonymous} onChange={(e) => setIsAnonymous(e.target.checked)} 
                />
                <div className={clsx("w-10 h-6 rounded-full transition-colors", isAnonymous ? "bg-primary" : "bg-border")}></div>
                <div className={clsx("absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform", isAnonymous ? "translate-x-4" : "")}></div>
              </div>
              <span className="text-sm font-bold text-text-secondary group-hover:text-text-primary flex items-center gap-1.5 transition-colors">
                <EyeOff size={16} /> Submit Anonymously
              </span>
            </label>
          ) : (
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg">
              <ShieldAlert size={14} /> Anonymous feedback is currently disabled by admin.
            </div>
          )}

          <button 
            type="submit" disabled={isSubmitting || !comments.trim() || (showRating && rating === 0)}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
          >
            {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : <><Send size={18} /> Submit</>}
          </button>
        </div>

      </div>
    </form>
  );
}
