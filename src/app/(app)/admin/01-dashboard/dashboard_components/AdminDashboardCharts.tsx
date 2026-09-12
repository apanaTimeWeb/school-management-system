"use client";

import { BarChart3, PieChart, TrendingUp } from "lucide-react";

export default function AdminDashboardCharts() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Top Row: Admission & Fee Charts + Attendance Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Admission & Fee Charts */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Admission & Fee Charts</h3>
            <BarChart3 size={18} className="text-text-secondary" />
          </div>
          <div className="h-48 flex items-center justify-center bg-bg-page border border-dashed border-border rounded">
            <div className="flex items-end justify-center gap-4 h-32 w-full px-8">
              <div className="w-8 bg-primary rounded-t-sm h-[60%]"></div>
              <div className="w-8 bg-success rounded-t-sm h-[80%]"></div>
              <div className="w-8 bg-info rounded-t-sm h-[45%]"></div>
              <div className="w-8 bg-warning rounded-t-sm h-[90%]"></div>
            </div>
          </div>
          <div className="flex justify-between mt-3 text-[10px] text-text-secondary uppercase">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
        </div>

        {/* Attendance Analytics */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Attendance Analytics</h3>
            <PieChart size={18} className="text-text-secondary" />
          </div>
          <div className="h-48 flex flex-col items-center justify-center bg-bg-page border border-dashed border-border rounded">
             <div className="relative w-32 h-32 rounded-full border-[16px] border-success border-r-danger border-b-warning"></div>
             <div className="flex gap-4 mt-4 text-xs font-semibold">
               <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success"></span> Present</span>
               <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-danger"></span> Absent</span>
               <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-warning"></span> Leave</span>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Academic Performance Summary */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
          <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Academic Performance Summary</h3>
          <TrendingUp size={18} className="text-text-secondary" />
        </div>
        <div className="h-48 flex items-center justify-center bg-bg-page border border-dashed border-border rounded relative overflow-hidden">
           
           <svg viewBox="0 0 100 20" className="w-full h-full text-primary absolute bottom-0">
             <polyline 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="0.5"
               points="0,15 10,12 20,18 30,8 40,10 50,5 60,12 70,2 80,8 90,4 100,2"
             />
             <polygon 
               fill="currentColor" 
               className="opacity-10"
               points="0,20 0,15 10,12 20,18 30,8 40,10 50,5 60,12 70,2 80,8 90,4 100,2 100,20"
             />
           </svg>

           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-sm font-bold text-text-secondary bg-card/80 px-3 py-1 rounded backdrop-blur">
                Overall School Average: 82.5%
              </span>
           </div>
        </div>
      </div>

    </div>
  );
}
