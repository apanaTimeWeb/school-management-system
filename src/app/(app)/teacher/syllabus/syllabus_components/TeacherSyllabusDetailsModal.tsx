"use client";
import React, { useState } from 'react';
import { X, CheckCircle2, Circle, ChevronDown, MessageSquare, Save, Calendar } from 'lucide-react';
import { useTeacherSyllabusStore, ChapterData } from '../syllabus_store/useTeacherSyllabusStore';

export default function TeacherSyllabusDetailsModal() {
  const { isDetailsModalOpen, closeDetailsModal, selectedSyllabus } = useTeacherSyllabusStore();
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [localSyllabus, setLocalSyllabus] = useState<typeof selectedSyllabus>(null);
  const [successMsgTopicId, setSuccessMsgTopicId] = useState<string | null>(null);

  React.useEffect(() => {
    setLocalSyllabus(selectedSyllabus);
  }, [selectedSyllabus]);

  if (!isDetailsModalOpen || !localSyllabus) return null;

  const toggleChapter = (chapterId: string) => {
    setExpandedChapter(prev => prev === chapterId ? null : chapterId);
  };

  const handleToggleTopic = (e: React.MouseEvent, chapterId: string, topicId: string) => {
    e.stopPropagation();
    if (!localSyllabus) return;
    
    const updatedSyllabus = { ...localSyllabus };
    const chapterIndex = updatedSyllabus.chapters.findIndex(c => c.id === chapterId);
    if (chapterIndex === -1) return;
    
    const topicIndex = updatedSyllabus.chapters[chapterIndex].topics.findIndex(t => t.id === topicId);
    if (topicIndex === -1) return;
    
    updatedSyllabus.chapters[chapterIndex].topics[topicIndex].isCompleted = !updatedSyllabus.chapters[chapterIndex].topics[topicIndex].isCompleted;
    setLocalSyllabus(updatedSyllabus);
  };

  const handleSaveRemarks = (e: React.FormEvent, topicId: string) => {
    e.preventDefault();
    setSuccessMsgTopicId(topicId);
    setTimeout(() => setSuccessMsgTopicId(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-3xl bg-bg-main h-full shadow-2xl flex flex-col border-l border-border animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-5 bg-card border-b border-border flex items-start justify-between shrink-0">
          <div>
            <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary mb-2 inline-block">Syllabus Tracker</span>
            <h2 className="text-[20px] font-bold text-text-primary line-clamp-1">{localSyllabus.subject}</h2>
            <p className="text-[13px] text-text-secondary mt-1">{localSyllabus.class} • Overall Progress: <span className="text-success font-bold">{localSyllabus.overallProgress}%</span></p>
          </div>
          <button onClick={closeDetailsModal} className="p-2 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
          
          {localSyllabus.chapters.map((chapter) => (
            <div key={chapter.id} className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300">
              
              {/* Chapter Header (Accordion Toggle) */}
              <div 
                onClick={() => toggleChapter(chapter.id)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
              >
                 <div className="flex-1">
                   <h3 className="text-[15px] font-bold text-text-primary mb-1 flex items-center gap-2">
                     <ChevronDown size={18} className={`text-text-secondary transition-transform duration-300 ${expandedChapter === chapter.id ? 'rotate-180' : ''}`} />
                     {chapter.name}
                   </h3>
                   <div className="pl-6 flex items-center gap-4 text-[12px]">
                     <div className="flex-1 max-w-[200px] h-1.5 bg-input rounded-full overflow-hidden">
                        <div className="h-full bg-primary transition-all" style={{ width: `${chapter.progressPercent}%` }}></div>
                     </div>
                     <span className="text-text-secondary">{chapter.progressPercent}% Completed</span>
                   </div>
                 </div>
              </div>

              {/* Topics List */}
              {expandedChapter === chapter.id && (
                <div className="border-t border-border bg-page p-4 space-y-3">
                  {chapter.topics.map((topic) => (
                    <div key={topic.id} className="flex flex-col sm:flex-row sm:items-start justify-between p-4 bg-card border border-border rounded-lg gap-4 group hover:border-primary/50 transition-colors">
                      
                      {/* Topic Info & Toggle */}
                      <div className="flex items-start gap-3 flex-1">
                        <button 
                          onClick={(e) => handleToggleTopic(e, chapter.id, topic.id)}
                          className={`mt-0.5 rounded-full transition-colors ${topic.isCompleted ? 'text-success hover:text-success/80' : 'text-text-secondary hover:text-warning'}`}
                        >
                          {topic.isCompleted ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                        </button>
                        <div>
                          <p className={`text-[14px] font-bold transition-colors ${topic.isCompleted ? 'text-text-primary' : 'text-text-primary group-hover:text-primary'}`}>
                            {topic.name}
                          </p>
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${topic.isCompleted ? 'text-success' : 'text-warning'}`}>
                            {topic.isCompleted ? 'Completed' : 'Pending'}
                          </span>
                        </div>
                      </div>

                      {/* Edit Meta (Date & Remarks) */}
                      {topic.isCompleted && (
                        <div className="w-full sm:w-1/2 shrink-0 bg-page border border-border rounded-lg p-3 relative overflow-hidden">
                          {successMsgTopicId === topic.id ? (
                            <div className="absolute inset-0 bg-success/10 backdrop-blur-sm flex items-center justify-center animate-in fade-in z-10">
                              <span className="text-success text-[13px] font-bold">Saved Successfully!</span>
                            </div>
                          ) : null}
                          <form onSubmit={(e) => handleSaveRemarks(e, topic.id)} className="space-y-3 relative z-0">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-text-secondary" />
                              <input 
                                type="date" 
                                defaultValue={topic.completionDate} 
                                className="bg-transparent border-none text-[12px] text-text-primary focus:outline-none focus:ring-0 w-full"
                              />
                            </div>
                            <div className="flex items-start gap-2 border-t border-border pt-2">
                              <MessageSquare size={14} className="text-text-secondary mt-1" />
                              <textarea 
                                defaultValue={topic.remarks}
                                placeholder="Add academic remarks (optional)..."
                                className="bg-transparent border-none text-[12px] text-text-primary focus:outline-none focus:ring-0 w-full h-10 resize-none custom-scrollbar"
                              ></textarea>
                            </div>
                            <div className="flex justify-end">
                              <button type="submit" className="text-[11px] font-bold text-primary hover:text-primary/80 flex items-center gap-1">
                                <Save size={12}/> Update
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                      
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
