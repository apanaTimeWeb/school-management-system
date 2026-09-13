"use client";
import React, { useState } from 'react';
import { FileText, Search, CalendarCheck, BookOpen, PenTool, Award, User, Users, TrendingUp, Activity, FileDown } from 'lucide-react';
import { useTeacherReportsStore } from '../reports_store/useTeacherReportsStore';
import { TEACHER_REPORTS_LIST } from '../reports_constants/TeacherReportsMockData';
import TeacherReportGeneratorModal from './TeacherReportGeneratorModal';

export default function TeacherReportsMain() {
  const { openGeneratorModal } = useTeacherReportsStore();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Academic' | 'Administrative' | 'Analytics'>('All');

  const filteredReports = TEACHER_REPORTS_LIST.filter(rep => {
    const matchSearch = rep.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || rep.category === activeCategory;
    return matchSearch && matchCat;
  });

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'calendar': return <CalendarCheck size={24} className="text-warning"/>;
      case 'book': return <BookOpen size={24} className="text-info"/>;
      case 'file': return <FileText size={24} className="text-primary"/>;
      case 'pen': return <PenTool size={24} className="text-success"/>;
      case 'award': return <Award size={24} className="text-primary"/>;
      case 'user': return <User size={24} className="text-info"/>;
      case 'users': return <Users size={24} className="text-primary"/>;
      case 'trending': return <TrendingUp size={24} className="text-success"/>;
      case 'activity': return <Activity size={24} className="text-danger"/>;
      default: return <FileText size={24} className="text-primary"/>;
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-text-primary flex items-center gap-2">
           <FileDown className="text-primary" size={24}/> Reports Center
        </h1>
        <p className="text-[14px] text-text-secondary mt-1">Generate and download academic, administrative, and analytical reports.</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search reports..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-input border border-border rounded-lg pl-10 pr-4 py-2 text-[14px] text-text-primary focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
          {['All', 'Academic', 'Administrative', 'Analytics'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-colors whitespace-nowrap ${
                activeCategory === cat 
                ? 'bg-primary text-black' 
                : 'bg-page border border-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((rep) => (
          <div key={rep.id} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors flex flex-col group">
            
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-input border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                {getIcon(rep.icon)}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${
                rep.category === 'Analytics' ? 'bg-info/10 text-info border-info/20' : 
                rep.category === 'Academic' ? 'bg-primary/10 text-primary border-primary/20' : 
                'bg-warning/10 text-warning border-warning/20'
              }`}>
                {rep.category}
              </span>
            </div>

            <h3 className="text-[16px] font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">{rep.title}</h3>
            <p className="text-[13px] text-text-secondary flex-1 leading-relaxed mb-5">
              {rep.description}
            </p>

            <button 
              onClick={() => openGeneratorModal(rep.title)}
              className="w-full py-2.5 bg-page border border-border text-text-primary font-bold text-[13px] rounded-lg group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-colors flex items-center justify-center gap-2"
            >
              <FileDown size={16} /> Configure & Generate
            </button>

          </div>
        ))}

        {filteredReports.length === 0 && (
          <div className="col-span-full py-16 text-center text-text-secondary bg-card rounded-xl border border-border">
            <FileText size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-[16px] font-bold text-text-primary">No Reports Found</p>
            <p className="text-[13px] mt-1">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>

      <TeacherReportGeneratorModal />
    </div>
  );
}
