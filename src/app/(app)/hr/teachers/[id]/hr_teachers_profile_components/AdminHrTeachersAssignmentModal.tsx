"use client";

import { Check, X, Users } from "lucide-react";
import { useState } from "react";

interface AdminHrTeachersAssignmentModalProps {
  isOpen: boolean;
  close: () => void;
  currentClass: string | null;
}

export default function AdminHrTeachersAssignmentModal({ isOpen, close, currentClass }: AdminHrTeachersAssignmentModalProps) {
  const [selectedClass, setSelectedClass] = useState(currentClass || "");

  if (!isOpen) return null;

  const handleSave = () => {
    alert(`Mock Save: Assigned as Class Teacher for ${selectedClass}`);
    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-overlay border border-border rounded-xl w-full max-w-md shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95">
        
        <div className="flex items-center justify-between p-5 border-b border-border bg-card">
          <h3 className="text-lg font-bold flex items-center gap-2 text-primary">
            <Users size={20} /> Assign Class Teacher
          </h3>
          <button onClick={close} className="p-1 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Select the class and section to assign this teacher as the Class Teacher.
          </p>

          <div className="mb-6">
            <label className="block text-xs font-bold text-muted-foreground uppercase mb-2">Class & Section</label>
            <select 
              className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground focus:border-primary outline-none"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">-- Remove Assignment --</option>
              <option value="9-A">Class 9 - A</option>
              <option value="9-B">Class 9 - B</option>
              <option value="10-A">Class 10 - A</option>
              <option value="11-Science">Class 11 - Science</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button onClick={close} className="px-4 py-2 text-sm font-bold border border-border text-foreground rounded-md hover:bg-input transition-colors">Cancel</button>
            <button 
              onClick={handleSave} 
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-md shadow-lg transition-all active:scale-95 bg-primary hover:bg-yellow-500 shadow-primary/20"
            >
              <Check size={16} /> Save Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
