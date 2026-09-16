"use client";

import React, { useState } from 'react';
import { 
  Star, ChevronDown, CheckCircle2, 
  Send, Plus, Clock, MessageSquare, ThumbsUp, Shield,
  GraduationCap, Building, Trophy, Bus, BookOpen
} from 'lucide-react';
import clsx from 'clsx';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const feedbackHistory = {
  'c1': [
    { 
      id: 1, 
      date: '10 Oct, 2023', 
      category: 'Teacher Feedback', 
      rating: 5,
      comments: 'Mrs. Sharma is doing a wonderful job explaining complex maths concepts. Aarav really enjoys her classes.',
      isAnonymous: false,
      status: 'Reviewed by Management'
    },
    { 
      id: 2, 
      date: '05 Sep, 2023', 
      category: 'Event Feedback', 
      rating: 4,
      comments: 'The annual sports day was well organized. However, seating arrangements for parents could be improved.',
      isAnonymous: true,
      status: 'Noted for next event'
    }
  ],
  'c2': [
    { 
      id: 3, 
      date: '22 Aug, 2023', 
      category: 'Service Feedback', 
      rating: 3,
      comments: 'The canteen food quality has slightly degraded over the last month.',
      isAnonymous: false,
      status: 'Action Taken'
    }
  ]
};

const CATEGORIES = [
  { id: 'Teacher Feedback', icon: <GraduationCap size={16} />, color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
  { id: 'School Feedback', icon: <Building size={16} />, color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  { id: 'Event Feedback', icon: <Trophy size={16} />, color: 'bg-orange-50 text-orange-600 border-orange-200' },
  { id: 'Academic Feedback', icon: <BookOpen size={16} />, color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { id: 'Service Feedback', icon: <Bus size={16} />, color: 'bg-pink-50 text-pink-600 border-pink-200' },
  { id: 'General Suggestion', icon: <ThumbsUp size={16} />, color: 'bg-purple-50 text-purple-600 border-purple-200' },
];

export default function FeedbackPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  const [activeTab, setActiveTab] = useState<'submit' | 'history'>('submit');

  const [rating, setRating] = useState(5);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const history = feedbackHistory[selectedChildId as keyof typeof feedbackHistory];

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your feedback has been submitted successfully.");
    setActiveTab('history');
    setRating(5);
    setIsAnonymous(false);
  };

  const getCategoryStyle = (catName: string) => {
    return CATEGORIES.find(c => c.id === catName) || CATEGORIES[5];
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Feedback & Suggestions</h1>
          <p className="text-text-secondary text-sm mt-1">Help us improve by sharing your valuable feedback.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm min-h-[500px]">
        
        {/* Tabs */}
        <div className="flex border-b border-border bg-page/30">
          <button 
            onClick={() => setActiveTab('submit')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'submit' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <Plus size={18} /> Give Feedback
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={clsx(
              "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
              activeTab === 'history' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
            )}
          >
            <Clock size={18} /> My Feedbacks
          </button>
        </div>

        <div className="p-6">
           {activeTab === 'submit' ? (
             
             /* Submit Feedback Tab */
             <div className="animate-[fadeIn_0.3s_ease-out] max-w-2xl mx-auto">
               
               <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
                 
                 {/* Decorative background element */}
                 <div className="absolute -top-10 -right-10 text-indigo-50 opacity-50 rotate-12 pointer-events-none">
                    <ThumbsUp size={150} />
                 </div>

                 <h3 className="font-bold text-text-primary mb-6 flex items-center gap-2 border-b border-border pb-2 relative z-10">
                   <Star size={18} className="text-orange-500" /> Share Your Thoughts
                 </h3>
                 
                 <form onSubmit={handleFeedbackSubmit} className="space-y-6 relative z-10">
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div>
                       <label className="block text-sm font-bold text-text-secondary mb-2">Feedback Category</label>
                       <select className="w-full p-3 bg-page border border-border rounded-xl text-text-primary focus:outline-none focus:border-indigo-500 font-medium">
                         {CATEGORIES.map(cat => (
                           <option key={cat.id}>{cat.id}</option>
                         ))}
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-text-secondary mb-2">Overall Rating</label>
                       <div className="flex gap-2 p-2 bg-page border border-border rounded-xl items-center h-[50px]">
                         {[1, 2, 3, 4, 5].map(star => (
                           <button 
                             key={star} 
                             type="button"
                             onClick={() => setRating(star)}
                             className="focus:outline-none transition-transform hover:scale-110"
                           >
                             <Star 
                               size={24} 
                               className={clsx(
                                 "transition-colors", 
                                 rating >= star ? "fill-orange-400 text-orange-400" : "text-border"
                               )} 
                             />
                           </button>
                         ))}
                       </div>
                     </div>
                   </div>

                   <div>
                     <label className="block text-sm font-bold text-text-secondary mb-2">Detailed Comments / Suggestions</label>
                     <textarea 
                       rows={5}
                       placeholder="Please be specific. Your feedback helps us improve..."
                       className="w-full p-3 bg-page border border-border rounded-xl text-text-primary focus:outline-none focus:border-indigo-500 resize-none font-medium placeholder:text-text-tertiary"
                       required
                     ></textarea>
                   </div>
                   
                   {/* Anonymous Toggle */}
                   <div className="flex items-center gap-3 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
                      <div 
                        className={clsx(
                          "w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors",
                          isAnonymous ? "bg-indigo-600" : "bg-indigo-200"
                        )}
                        onClick={() => setIsAnonymous(!isAnonymous)}
                      >
                         <div className={clsx(
                           "w-3 h-3 bg-white rounded-full shadow-sm transition-transform",
                           isAnonymous ? "translate-x-5" : "translate-x-0"
                         )}></div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-indigo-900 flex items-center gap-1.5">
                          Submit Anonymously <Shield size={14} className="text-indigo-500" />
                        </p>
                        <p className="text-xs font-medium text-indigo-700 mt-0.5">Your name will not be shared with the teachers or staff.</p>
                      </div>
                   </div>

                   <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 mt-4">
                     <Send size={18} /> Submit Feedback
                   </button>

                 </form>
               </div>

             </div>
             
           ) : (
             
             /* Feedback History Tab */
             <div className="animate-[fadeIn_0.3s_ease-out] max-w-4xl mx-auto">
               
               {history.length === 0 ? (
                 <div className="text-center py-16">
                    <div className="w-16 h-16 bg-page rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-border text-text-tertiary">
                      <MessageSquare size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">No Feedback Submitted</h3>
                    <p className="text-sm text-text-secondary">You haven't submitted any feedback yet.</p>
                 </div>
               ) : (
                 <div className="space-y-6">
                   {history.map(item => {
                     const catStyle = getCategoryStyle(item.category);
                     
                     return (
                       <div key={item.id} className="border border-border rounded-2xl bg-white p-5 hover:shadow-md transition-shadow relative overflow-hidden">
                         
                         {item.isAnonymous && (
                           <div className="absolute top-4 right-4 text-[10px] font-bold text-text-tertiary bg-page px-2 py-1 rounded border border-border flex items-center gap-1">
                             <Shield size={12} /> Sent Anonymously
                           </div>
                         )}

                         <div className="flex items-center gap-3 mb-4 pr-32">
                           <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center border", catStyle.color)}>
                             {catStyle.icon}
                           </div>
                           <div>
                             <h4 className="font-bold text-text-primary">{item.category}</h4>
                             <p className="text-xs text-text-tertiary font-bold mt-0.5">{item.date}</p>
                           </div>
                         </div>
                         
                         <div className="flex gap-1 mb-3">
                           {[1, 2, 3, 4, 5].map(star => (
                             <Star 
                               key={star} 
                               size={14} 
                               className={clsx(star <= item.rating ? "fill-orange-400 text-orange-400" : "text-border")} 
                             />
                           ))}
                         </div>
                         
                         <p className="text-sm text-text-primary font-medium bg-page p-4 rounded-xl border border-border/50">
                           "{item.comments}"
                         </p>

                         {item.status && (
                           <div className="mt-4 pt-3 border-t border-border border-dashed flex items-center gap-2 text-xs font-bold text-indigo-600">
                             <CheckCircle2 size={14} /> Status: {item.status}
                           </div>
                         )}
                         
                       </div>
                     )
                   })}
                 </div>
               )}

             </div>

           )}
        </div>
      </div>
    </div>
  );
}
