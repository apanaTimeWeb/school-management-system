"use client";

import { CheckSquare, Square, Clock } from "lucide-react";
import type { ActionItem } from "../hr_meetings_types/HrMeetingsTypes";

interface HrMeetingsActionItemsProps {
  actionItems: (ActionItem & { meetingTitle: string })[];
}

export default function HrMeetingsActionItems({ actionItems }: HrMeetingsActionItemsProps) {

  if (actionItems.length === 0) {
    return (
      <div className="w-full p-12 flex flex-col items-center justify-center bg-card border border-border rounded-lg border-dashed">
         <span className="text-muted-foreground text-sm font-bold">No action items found across any meetings.</span>
      </div>
    );
  }

  return (
    <div className="motion-safe:animate-in motion-safe:fade-in duration-300">
      <div className="w-full overflow-x-auto bg-card border border-border rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-input/50">
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Task / Action Item</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Assignee</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Deadline</th>
              <th className="p-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">Origin Meeting</th>
            </tr>
          </thead>
          <tbody>
            {actionItems.map(ai => (
              <tr key={ai.id} className="border-b border-border hover:bg-input/30 transition-colors">
                <td className="p-4">
                  {ai.status === 'Closed' ? (
                    <span className="flex items-center gap-1 text-success text-xs font-bold"><CheckSquare size={16}/> Closed</span>
                  ) : ai.status === 'In Progress' ? (
                    <span className="flex items-center gap-1 text-info text-xs font-bold"><Clock size={16}/> In Progress</span>
                  ) : (
                    <span className="flex items-center gap-1 text-muted-foreground text-xs font-bold"><Square size={16}/> Open</span>
                  )}
                </td>
                <td className={`p-4 text-sm font-bold ${ai.status === 'Closed' ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {ai.task}
                </td>
                <td className="p-4 text-sm text-foreground font-medium">{ai.assignee}</td>
                <td className="p-4 text-sm text-danger font-medium">{ai.deadline}</td>
                <td className="p-4 text-xs font-bold text-muted-foreground bg-input/50 rounded-md inline-block mt-3 px-2 py-1">{ai.meetingTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

