"use client";
import React, { useState } from "react";
import { X, CheckCircle, Circle, Save } from "lucide-react";
import { useHROnboardingStore } from "../hr_onboarding_store/useHROnboardingStore";
import clsx from "clsx";

export default function HROnboardingModals() {
  const { 
    isActionModalOpen, setActionModalOpen,
    selectedRecord
  } = useHROnboardingStore();

  const [localTasks, setLocalTasks] = useState(selectedRecord?.tasks || []);

  React.useEffect(() => {
    if (selectedRecord) {
      setLocalTasks(selectedRecord.tasks);
    }
  }, [selectedRecord]);

  if (!selectedRecord || !isActionModalOpen) return null;

  const toggleTask = (id: string) => {
    setLocalTasks(prev => prev.map(t => 
      t.id === id ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' } : t
    ));
  };

  const progress = Math.round((localTasks.filter(t => t.status === 'Completed').length / localTasks.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
      <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
        <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
          <h3 className="text-lg font-black text-text-primary">Onboarding Checklist</h3>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-black text-lg shrink-0">
              {selectedRecord.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-black text-text-primary">{selectedRecord.name}</h4>
              <p className="text-sm font-bold text-text-secondary">{selectedRecord.position} • Joining: {selectedRecord.joiningDate}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-text-secondary uppercase">Overall Progress</span>
              <span className={clsx("text-sm font-black", progress === 100 ? "text-emerald-600" : "text-sky-600")}>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div 
                className={clsx(
                  "h-full transition-all duration-300",
                  progress === 100 ? "bg-emerald-500" : "bg-sky-500"
                )}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-bg-input px-4 py-2 border-b border-border">
              <span className="text-[11px] font-bold text-text-secondary uppercase">Tasks to complete</span>
            </div>
            <div className="divide-y divide-border">
              {localTasks.map(task => (
                <div 
                  key={task.id} 
                  className={clsx(
                    "flex items-center justify-between p-3 cursor-pointer hover:bg-bg-page transition-colors",
                    task.status === 'Completed' ? "bg-bg-page/50" : "bg-card"
                  )}
                  onClick={() => toggleTask(task.id)}
                >
                  <span className={clsx(
                    "text-sm font-bold transition-colors",
                    task.status === 'Completed' ? "text-text-secondary line-through" : "text-text-primary"
                  )}>
                    {task.taskName}
                  </span>
                  {task.status === 'Completed' ? (
                    <CheckCircle size={20} className="text-emerald-500" />
                  ) : (
                    <Circle size={20} className="text-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border flex justify-between bg-bg-input items-center">
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => setActionModalOpen(false)}
            className="px-4 py-2 font-bold text-sm text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors shadow-md flex items-center gap-2"
          >
            <Save size={16} /> Save Progress
          </button>
        </div>
      </div>
    </div>
  );
}
