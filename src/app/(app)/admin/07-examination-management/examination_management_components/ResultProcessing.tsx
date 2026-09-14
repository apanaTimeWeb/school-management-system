"use client";

import React, { useState } from 'react';
import { Cpu, Award, FileText, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

export default function ResultProcessing() {
  const [activeTab, setActiveTab] = useState('process');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const processResults = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsGenerated(true);
    }, 3000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full min-h-[500px] fade-in">
      <div className="w-full md:w-64 bg-card border border-border rounded-xl shadow-sm flex flex-col p-2 h-fit shrink-0">
        <button onClick={() => setActiveTab('process')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition mb-1", activeTab === 'process' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:bg-bg-page')}>
          <Cpu size={18} /> Result Generation
        </button>
        <button onClick={() => setActiveTab('calculations')} className={clsx("flex items-center gap-3 p-3 rounded-lg text-left text-sm font-semibold transition", activeTab === 'calculations' ? 'bg-info/10 text-info' : 'text-text-secondary hover:bg-bg-page')}>
          <Award size={18} /> Ranks & GPA View
        </button>
      </div>

      <div className="flex-1 bg-card border border-border rounded-xl shadow-sm p-6 overflow-y-auto">
        
        {activeTab === 'process' && (
          <div className="flex flex-col gap-6 fade-in h-full">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Result Generation Engine</h2>
            
            <div className="flex flex-col items-center justify-center py-10 gap-4 flex-1">
              <div className={clsx("w-24 h-24 rounded-full flex items-center justify-center transition-all", isProcessing ? "bg-primary/20 text-primary animate-pulse scale-110" : isGenerated ? "bg-success/20 text-success" : "bg-bg-page text-text-secondary border-2 border-border")}>
                {isGenerated ? <CheckCircle size={48} /> : <Cpu size={48} />}
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                {isProcessing ? "Processing Results..." : isGenerated ? "Results Generated Successfully!" : "Ready to Process"}
              </h3>
              <p className="text-sm text-text-secondary text-center max-w-md">
                The engine calculates Percentages, GPA/CGPA, Ranks, and Pass/Fail statuses across all subjects based on the Grade Configuration.
              </p>
              
              <div className="bg-bg-page border border-border p-4 rounded-lg mt-4 flex gap-4">
                <div className="flex flex-col gap-1.5 w-48">
                  <label className="text-xs font-semibold text-text-secondary">Target Exam</label>
                  <select disabled={isProcessing || isGenerated} className="bg-bg-input border border-border rounded-md px-3 py-1.5 text-sm outline-none focus:border-primary disabled:opacity-50">
                    <option>Term 1 Exam (Class X)</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button 
                    onClick={processResults} 
                    disabled={isProcessing || isGenerated}
                    className="bg-primary text-black px-6 py-1.5 h-[34px] rounded-md text-sm font-bold shadow-sm hover:bg-primary-hover active:scale-95 transition disabled:opacity-50"
                  >
                    Start Batch Processing
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calculations' && (
          <div className="flex flex-col gap-6 fade-in">
            <h2 className="text-xl font-bold text-text-primary border-b border-border pb-2">Calculated Results (Read-Only)</h2>
            
            {isGenerated ? (
              <table className="w-full text-left border-collapse border border-border rounded-lg overflow-hidden mt-2">
                <thead className="bg-bg-page">
                  <tr>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Rank</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Student Name</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Percentage</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">GPA</th>
                    <th className="p-3 text-xs font-bold text-text-secondary uppercase">Pass/Fail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border bg-card">
                    <td className="p-3 font-bold text-primary text-sm">#1</td>
                    <td className="p-3 text-sm font-bold">Rohan Sharma</td>
                    <td className="p-3 text-sm font-semibold">92.5%</td>
                    <td className="p-3 text-sm font-semibold">9.2</td>
                    <td className="p-3"><span className="bg-success-bg text-success text-xs font-bold px-2 py-1 rounded">PASS</span></td>
                  </tr>
                  <tr className="border-t border-border bg-card">
                    <td className="p-3 font-bold text-text-primary text-sm">#2</td>
                    <td className="p-3 text-sm font-bold">Aarav Patel</td>
                    <td className="p-3 text-sm font-semibold">85.0%</td>
                    <td className="p-3 text-sm font-semibold">8.5</td>
                    <td className="p-3"><span className="bg-success-bg text-success text-xs font-bold px-2 py-1 rounded">PASS</span></td>
                  </tr>
                  <tr className="border-t border-border bg-card">
                    <td className="p-3 font-bold text-text-primary text-sm">-</td>
                    <td className="p-3 text-sm font-bold">Sneha Verma</td>
                    <td className="p-3 text-sm font-semibold text-danger">45.0%</td>
                    <td className="p-3 text-sm font-semibold">4.5</td>
                    <td className="p-3"><span className="bg-danger-bg text-danger border border-danger/30 text-xs font-bold px-2 py-1 rounded">FAIL</span></td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 opacity-50">
                <FileText size={48} className="text-text-secondary mb-4" />
                <p className="text-sm font-bold text-text-secondary">No results generated yet.</p>
                <p className="text-xs text-text-secondary mt-1">Please run the Result Generation Engine first.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
