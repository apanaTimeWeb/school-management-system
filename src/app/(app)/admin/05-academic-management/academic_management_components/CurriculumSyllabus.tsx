"use client";

import React, { useState } from 'react';
import { FileCode2, BookText, Upload, Download } from 'lucide-react';
import clsx from 'clsx';

export default function CurriculumSyllabus() {
  const [activeTab, setActiveTab] = useState('curriculum');

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('curriculum')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'curriculum' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <FileCode2 size={18} /> Curriculum Builder
        </button>
        <button onClick={() => setActiveTab('syllabus')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'syllabus' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <BookText size={18} /> Syllabus Uploads
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'curriculum' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Curriculum Builder</h2>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Class</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Class X</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Subject</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mathematics</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Unit / Chapter Name</label>
                  <input type="text" placeholder="e.g. Algebra" className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary">Curriculum Objectives / Topics</label>
                <textarea className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary min-h-[100px]" placeholder="List the topics to be covered..."></textarea>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold shadow-sm">Save Curriculum Node</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'syllabus' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Syllabus PDF Uploads</h2>
            
            <div className="flex flex-col gap-4 bg-bg-page border border-border p-5 rounded-lg max-w-xl">
              <h3 className="font-bold text-sm text-text-secondary uppercase">Upload Syllabus Document</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Class</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Class X</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-text-secondary">Subject</label>
                  <select className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary">
                    <option>Mathematics</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-text-secondary">Select PDF</label>
                  <div className="flex gap-2">
                    <input type="file" accept=".pdf" className="flex-1 bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <button className="bg-primary text-white px-4 py-1.5 rounded-md text-sm font-bold shadow-sm flex items-center gap-2"><Upload size={16}/> Upload</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-sm text-text-secondary uppercase mb-3">Available Syllabus Files</h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-text-primary">Class X - Science</span>
                    <span className="text-xs text-text-secondary">Uploaded on Oct 1, 2026</span>
                  </div>
                  <button className="text-primary bg-primary/10 p-2 rounded hover:bg-primary/20"><Download size={16}/></button>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
