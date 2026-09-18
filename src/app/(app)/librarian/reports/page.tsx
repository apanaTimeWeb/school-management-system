"use client";

import React, { useState } from "react";
import {
  PieChart,
  BookOpen,
  Users,
  ArrowRightLeft,
  Banknote,
  ShieldCheck,
  FileText,
  Download,
  Printer,
  X,
  Search,
  Filter,
  Layers,
  BookUp,
  Ghost,
  PenTool,
  Library,
  GraduationCap,
  Briefcase,
  Trophy,
  CalendarDays,
  CalendarClock,
  Clock,
  RefreshCw,
  Bookmark,
  Coins,
  AlertTriangle,
  History,
  Archive,
  Eye,
  LineChart
} from "lucide-react";

type ReportCategory = 'Books' | 'Members' | 'Transactions' | 'Financial' | 'Audit';

interface ReportDefinition {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bg: string;
}

const REPORT_DEFINITIONS: Record<ReportCategory, ReportDefinition[]> = {
  Books: [
    { id: 'b_inv', title: 'Book Inventory', description: 'Complete catalog of all books.', icon: Library, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { id: 'b_avail', title: 'Available Books', description: 'Books currently on shelves.', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 'b_issued', title: 'Issued Books', description: 'Books currently checked out.', icon: BookUp, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 'b_lost', title: 'Lost Books', description: 'Books marked as lost.', icon: Ghost, color: 'text-rose-600', bg: 'bg-rose-100' },
    { id: 'b_damaged', title: 'Damaged Books', description: 'Books reported damaged.', icon: PenTool, color: 'text-orange-600', bg: 'bg-orange-100' },
    { id: 'b_cat', title: 'Category-wise Books', description: 'Inventory grouped by subject.', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-100' },
  ],
  Members: [
    { id: 'm_stu', title: 'Student-wise Borrowing', description: 'Activity by students.', icon: GraduationCap, color: 'text-cyan-600', bg: 'bg-cyan-100' },
    { id: 'm_cls', title: 'Class-wise Borrowing', description: 'Activity grouped by class.', icon: Users, color: 'text-teal-600', bg: 'bg-teal-100' },
    { id: 'm_tea', title: 'Teacher-wise Borrowing', description: 'Activity by staff members.', icon: Briefcase, color: 'text-slate-600', bg: 'bg-slate-100' },
    { id: 'm_act', title: 'Most Active Members', description: 'Top readers ranking.', icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-100' },
  ],
  Transactions: [
    { id: 't_diss', title: 'Daily Issue', description: 'Books issued today.', icon: CalendarDays, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 't_dret', title: 'Daily Return', description: 'Books returned today.', icon: ArrowRightLeft, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 't_mon', title: 'Monthly Transactions', description: 'Aggregated monthly log.', icon: CalendarClock, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { id: 't_over', title: 'Overdue Report', description: 'All currently overdue books.', icon: Clock, color: 'text-rose-600', bg: 'bg-rose-100' },
    { id: 't_ren', title: 'Renewal Report', description: 'Books renewed recently.', icon: RefreshCw, color: 'text-sky-600', bg: 'bg-sky-100' },
    { id: 't_res', title: 'Reservation Report', description: 'Current hold queues.', icon: Bookmark, color: 'text-amber-600', bg: 'bg-amber-100' },
  ],
  Financial: [
    { id: 'f_col', title: 'Fine Collection', description: 'Total fines collected.', icon: Banknote, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 'f_out', title: 'Outstanding Fine', description: 'Unpaid dues by members.', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-100' },
    { id: 'f_lost', title: 'Lost Book Recovery', description: 'Payments for lost items.', icon: Coins, color: 'text-amber-600', bg: 'bg-amber-100' },
    { id: 'f_dam', title: 'Damage Charges', description: 'Fines collected for damage.', icon: Banknote, color: 'text-orange-600', bg: 'bg-orange-100' },
  ],
  Audit: [
    { id: 'a_man', title: 'Manual Adjustments', description: 'Stock corrections made.', icon: PenTool, color: 'text-purple-600', bg: 'bg-purple-100' },
    { id: 'a_del', title: 'Deleted/Archived Records', description: 'Removed catalog items.', icon: Archive, color: 'text-gray-600', bg: 'bg-gray-100' },
    { id: 'a_his', title: 'Full Transaction History', description: 'Master audit trail.', icon: History, color: 'text-indigo-600', bg: 'bg-indigo-100' },
  ]
};

export default function ReportsDashboard() {
  const [activeCategory, setActiveCategory] = useState<ReportCategory>('Books');
  const [searchQuery, setSearchQuery] = useState("");
  
  const [selectedReport, setSelectedReport] = useState<ReportDefinition | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeReports = REPORT_DEFINITIONS[activeCategory].filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenReport = (report: ReportDefinition) => {
    setSelectedReport(report);
    setIsGenerating(true);
    // Simulate report generation delay
    setTimeout(() => {
      setIsGenerating(false);
    }, 1000);
  };

  const getCategoryIcon = (cat: ReportCategory) => {
    switch(cat) {
      case 'Books': return <BookOpen className="w-5 h-5" />;
      case 'Members': return <Users className="w-5 h-5" />;
      case 'Transactions': return <ArrowRightLeft className="w-5 h-5" />;
      case 'Financial': return <Banknote className="w-5 h-5" />;
      case 'Audit': return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <PieChart className="w-8 h-8 text-fuchsia-600" />
            Library Reports & Analytics
          </h1>
          <p className="text-gray-500 mt-1">Generate comprehensive reports for inventory, members, transactions, and finances.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Categories */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-row lg:flex-col gap-2 overflow-x-auto">
            {(Object.keys(REPORT_DEFINITIONS) as ReportCategory[]).map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap lg:whitespace-normal ${activeCategory === category ? 'bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-100 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <div className={`${activeCategory === category ? 'text-fuchsia-600' : 'text-gray-400'}`}>
                  {getCategoryIcon(category)}
                </div>
                {category} Reports
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                {getCategoryIcon(activeCategory)} {activeCategory} Reports
              </h2>
              <p className="text-sm text-gray-500">Select a report module to generate data.</p>
            </div>
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all text-sm bg-gray-50"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeReports.map(report => (
              <div 
                key={report.id} 
                onClick={() => handleOpenReport(report)}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-fuchsia-300 hover:shadow-md transition-all cursor-pointer group flex flex-col items-start"
              >
                <div className={`w-14 h-14 ${report.bg} ${report.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <report.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{report.title}</h3>
                <p className="text-sm text-gray-500 flex-1">{report.description}</p>
                
                <div className="w-full mt-5 pt-4 border-t border-gray-50 flex items-center justify-between text-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-wider">Generate Now</span>
                  <LineChart className="w-4 h-4" />
                </div>
              </div>
            ))}

            {activeReports.length === 0 && (
              <div className="col-span-1 md:col-span-2 xl:col-span-3 py-16 text-center border-2 border-dashed border-gray-200 rounded-2xl">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-medium text-gray-800">No reports matched your search</h3>
              </div>
            )}
          </div>

        </div>
      </div>


      {/* Unified Report Viewer Modal */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-900/70 backdrop-blur-sm">
          <div className="bg-gray-50 w-full max-w-5xl h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 relative">
            
            {/* Modal Header */}
            <div className={`${selectedReport.bg} p-6 flex justify-between items-center border-b border-gray-200 shrink-0`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm ${selectedReport.color}`}>
                  <selectedReport.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{selectedReport.title} Report</h2>
                  <p className="text-sm text-gray-600 font-medium">Generated on {new Date().toLocaleString()}</p>
                </div>
              </div>
              <button onClick={() => setSelectedReport(null)} className="text-gray-500 hover:text-gray-800 bg-white p-2 rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Toolbar */}
            <div className="bg-white px-6 py-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4 shrink-0 shadow-sm z-10">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">
                  <Filter className="w-4 h-4 text-gray-400" /> Advanced Filters
                </button>
                <div className="h-6 w-px bg-gray-200 mx-2"></div>
                <span className="text-sm text-gray-500 font-medium">Data Period: <b>This Month</b></span>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors">
                  <Printer className="w-4 h-4" /> Print
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-bold hover:bg-emerald-100 transition-colors">
                  <Download className="w-4 h-4" /> Export CSV
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-lg text-sm font-bold hover:bg-rose-100 transition-colors">
                  <FileText className="w-4 h-4" /> Export PDF
                </button>
              </div>
            </div>

            {/* Modal Content / Data Table Mock */}
            <div className="flex-1 overflow-y-auto p-6 relative">
              {isGenerating ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-20">
                  <span className="w-12 h-12 border-4 border-gray-200 border-t-fuchsia-600 rounded-full animate-spin mb-4"></span>
                  <h3 className="font-bold text-gray-800 text-lg">Generating Report Data...</h3>
                  <p className="text-gray-500 text-sm">Crunching numbers from the database</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden animate-in fade-in duration-500">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-100 text-gray-600 text-xs uppercase tracking-wider">
                        <th className="py-4 px-6 font-bold"># ID</th>
                        <th className="py-4 px-6 font-bold">Record Reference</th>
                        <th className="py-4 px-6 font-bold">Category/Type</th>
                        <th className="py-4 px-6 font-bold">Date Logged</th>
                        <th className="py-4 px-6 font-bold text-right">Metric/Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[...Array(12)].map((_, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="py-4 px-6 font-mono text-xs text-gray-500">REC-90{i}</td>
                          <td className="py-4 px-6 font-bold text-gray-800">Sample {selectedReport.title} Data Point {i+1}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">Standard</td>
                          <td className="py-4 px-6 text-sm text-gray-500">2023-11-{String(i+1).padStart(2, '0')}</td>
                          <td className="py-4 px-6 text-right font-black text-gray-700">{Math.floor(Math.random() * 500) + 1}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-4 border-t border-gray-200 bg-gray-50 text-center text-sm text-gray-500 font-medium">
                    Showing 1 to 12 of 12 records found.
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
