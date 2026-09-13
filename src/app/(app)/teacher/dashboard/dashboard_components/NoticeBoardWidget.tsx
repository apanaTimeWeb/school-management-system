"use client";
import React from 'react';
import { Bell, Megaphone } from 'lucide-react';
import { TEACHER_MOCK_DATA } from '../dashboard_constants/TeacherMockData';

export default function NoticeBoardWidget() {
  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-border bg-black/20 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-text-primary flex items-center gap-2">
          <Bell className="text-danger" size={18} />
          Notice Board
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        
        {/* Announcements */}
        <div>
          <h4 className="text-[12px] font-bold text-text-secondary uppercase tracking-wider mb-2 flex items-center gap-2">
            <Megaphone size={14} className="text-warning"/> Announcements
          </h4>
          <div className="space-y-3">
            {TEACHER_MOCK_DATA.announcements.map(ann => (
              <div key={ann.id} className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                <h5 className="text-[13px] font-bold text-warning mb-1">{ann.title}</h5>
                <p className="text-[12px] text-text-secondary leading-relaxed">{ann.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="pt-2">
          <h4 className="text-[12px] font-bold text-text-secondary uppercase tracking-wider mb-2">Recent Notifications</h4>
          <div className="space-y-3">
            {TEACHER_MOCK_DATA.notifications.map(notif => (
              <div key={notif.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-danger"></div>
                <div>
                  <p className="text-[13px] font-medium text-text-primary">{notif.title}</p>
                  <p className="text-[11px] text-text-secondary mt-0.5">{notif.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
