"use client";

import React, { useState } from 'react';
import { LayoutTemplate, Globe, BarChart2 } from 'lucide-react';
import clsx from 'clsx';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const reportData = [
  { name: 'Mathematics', score: 85, avg: 70 },
  { name: 'Science', score: 92, avg: 72 },
  { name: 'English', score: 78, avg: 75 },
];

export default function ReportCards() {
  const [activeTab, setActiveTab] = useState('publish');
  const [isPublished, setIsPublished] = useState(false);

  const togglePublish = () => {
    setIsPublished(!isPublished);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('publish')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'publish' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Globe size={18} /> Publish Results
        </button>
        <button onClick={() => setActiveTab('template')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'template' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <LayoutTemplate size={18} /> Report Card View
        </button>
        <button onClick={() => setActiveTab('reports')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'reports' ? 'bg-success/10 text-success' : 'text-text-secondary hover:bg-bg-page')}>
          <BarChart2 size={18} /> Analytical Reports
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'publish' && (
          <div className="flex flex-col gap-6 fade-in h-full justify-center items-center">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2 w-full text-left">Result Publish / Unpublish</h2>
            
            <div className="bg-bg-page border border-border p-6 rounded-xl flex flex-col items-center gap-4 mt-6 max-w-md w-full">
              <Globe size={40} className={isPublished ? "text-success" : "text-text-secondary"} />
              <div className="text-center">
                <h3 className="font-bold text-lg text-text-primary">Term 1 Exam (Class X)</h3>
                <p className={clsx("text-sm font-bold mt-1", isPublished ? "text-success" : "text-warning")}>
                  {isPublished ? "LIVE - Visible to Parents & Students" : "DRAFT - Hidden from Portals"}
                </p>
              </div>
              <button 
                onClick={togglePublish}
                className={clsx("px-8 py-3 rounded-lg font-bold shadow-sm transition-all text-white w-full", isPublished ? "bg-danger hover:bg-danger/90" : "bg-primary hover:bg-primary-hover")}
              >
                {isPublished ? "Unpublish Results" : "Publish Results Online"}
              </button>
            </div>
          </div>
        )}

        {activeTab === 'template' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Digital Report Card Preview</h2>
            
            <div className="bg-white border-2 border-border p-8 rounded-lg shadow-md max-w-2xl mx-auto w-full text-black">
              <div className="text-center border-b-2 border-black pb-4 mb-4">
                <h1 className="text-2xl font-black uppercase">Excellence High School</h1>
                <h2 className="text-lg font-bold">Term 1 Examination (2026-2027)</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm font-semibold mb-6">
                <div>Student: <span className="font-normal border-b border-black inline-block w-40">Rohan Sharma</span></div>
                <div>Class: <span className="font-normal border-b border-black inline-block w-40">X - A</span></div>
                <div>Roll No: <span className="font-normal border-b border-black inline-block w-40">2</span></div>
                <div>Percentage: <span className="font-normal border-b border-black inline-block w-40">92.5%</span></div>
              </div>
              <table className="w-full border-collapse border border-black mb-6">
                <thead>
                  <tr>
                    <th className="border border-black p-2 bg-gray-100">Subject</th>
                    <th className="border border-black p-2 bg-gray-100">Max Marks</th>
                    <th className="border border-black p-2 bg-gray-100">Marks Obtained</th>
                    <th className="border border-black p-2 bg-gray-100">Grade</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border border-black p-2 text-left">Mathematics</td>
                    <td className="border border-black p-2">100</td>
                    <td className="border border-black p-2">92</td>
                    <td className="border border-black p-2 font-bold text-green-700">A+</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-2 text-left">Science</td>
                    <td className="border border-black p-2">100</td>
                    <td className="border border-black p-2">88</td>
                    <td className="border border-black p-2 font-bold text-green-600">A</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-between items-end mt-10">
                <div className="border-t border-black pt-1 px-4 text-xs font-bold">Class Teacher Signature</div>
                <div className="border-t border-black pt-1 px-4 text-xs font-bold">Principal Signature</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="flex flex-col gap-6 fade-in h-full">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Exam Result Analytics</h2>
            
            <div className="bg-bg-page border border-border p-4 rounded-lg flex-1 min-h-[300px] flex flex-col">
              <h3 className="font-bold text-sm text-text-secondary mb-4 text-center">Class Performance vs Class Average (Term 1)</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={reportData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                    <Tooltip cursor={{fill: 'var(--card)'}} contentStyle={{ backgroundColor: 'var(--bg-popover)', border: '1px solid var(--border)', borderRadius: '8px' }} />
                    <Bar dataKey="score" name="Highest Score" fill="var(--primary)" radius={[4,4,0,0]} />
                    <Bar dataKey="avg" name="Class Average" fill="var(--info)" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
