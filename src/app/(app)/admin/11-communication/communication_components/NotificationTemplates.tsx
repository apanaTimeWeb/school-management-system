"use client";

import React, { useState } from 'react';
import { Copy, Plus, Trash2, CheckCircle } from 'lucide-react';

export default function NotificationTemplates() {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Fee Reminder', type: 'SMS', content: 'Dear Parent, fee for {student_name} is due on {due_date}. Please pay to avoid late fines.' },
    { id: 2, title: 'Absence Alert', type: 'WhatsApp', content: 'Alert: {student_name} is absent today ({date}) without prior notice. - School Admin' },
  ]);
  const [showToast, setShowToast] = useState(false);

  const deleteItem = (id: number) => {
    setTemplates(templates.filter(t => t.id !== id));
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 h-full fade-in relative">
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-10">
          <CheckCircle size={16} /> Copied to clipboard!
        </div>
      )}

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
          <h2 className="text-xl font-bold text-text-primary">Communication Templates</h2>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition flex items-center gap-2">
            <Plus size={16}/> Create Template
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map(t => (
            <div key={t.id} className="bg-bg-page border border-border rounded-lg p-5 shadow-sm relative group">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="bg-info-bg text-info text-[10px] font-bold px-2 py-0.5 rounded uppercase">{t.type}</span>
                  <h3 className="font-bold text-text-primary text-sm">{t.name || t.title}</h3>
                </div>
                <button onClick={() => deleteItem(t.id)} className="text-text-secondary hover:text-danger transition"><Trash2 size={16}/></button>
              </div>
              
              <div className="bg-bg-input border border-border rounded p-3 text-sm text-text-secondary italic mb-3">
                "{t.content}"
              </div>
              
              <button onClick={() => copyText(t.content)} className="flex items-center gap-2 text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded transition">
                <Copy size={14}/> Copy Content
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
