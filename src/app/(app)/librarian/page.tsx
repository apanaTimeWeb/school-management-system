"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  BookCopy,
  BookCheck,
  BookUp,
  AlertTriangle,
  BookX,
  Users,
  UserCheck,
  UserCog,
  CalendarPlus,
  CalendarCheck,
  Clock,
  Banknote,
  Search,
  Bell,
  ArrowRight,
  BookMarked,
} from "lucide-react";

export default function LibrarianDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      title: "Total Books",
      value: "15,234",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
      borderColor: "border-blue-200",
      link: "/librarian/books",
    },
    {
      title: "Total Copies",
      value: "42,105",
      icon: BookCopy,
      color: "bg-indigo-100 text-indigo-600",
      borderColor: "border-indigo-200",
      link: "/librarian/books/copies",
    },
    {
      title: "Available Books",
      value: "12,840",
      icon: BookCheck,
      color: "bg-emerald-100 text-emerald-600",
      borderColor: "border-emerald-200",
      link: "/librarian/books?status=available",
    },
    {
      title: "Issued Books",
      value: "2,394",
      icon: BookUp,
      color: "bg-amber-100 text-amber-600",
      borderColor: "border-amber-200",
      link: "/librarian/circulation/issued",
    },
    {
      title: "Overdue Books",
      value: "145",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      borderColor: "border-red-200",
      link: "/librarian/circulation/overdue",
    },
    {
      title: "Lost/Damaged",
      value: "32",
      icon: BookX,
      color: "bg-rose-100 text-rose-600",
      borderColor: "border-rose-200",
      link: "/librarian/books/lost-damaged",
    },
    {
      title: "Total Members",
      value: "3,850",
      icon: Users,
      color: "bg-cyan-100 text-cyan-600",
      borderColor: "border-cyan-200",
      link: "/librarian/members",
    },
    {
      title: "Students with Books",
      value: "1,820",
      icon: UserCheck,
      color: "bg-sky-100 text-sky-600",
      borderColor: "border-sky-200",
      link: "/librarian/members/students?hasBooks=true",
    },
    {
      title: "Staff with Books",
      value: "145",
      icon: UserCog,
      color: "bg-violet-100 text-violet-600",
      borderColor: "border-violet-200",
      link: "/librarian/members/staff?hasBooks=true",
    },
    {
      title: "Today's Issue",
      value: "84",
      icon: CalendarPlus,
      color: "bg-fuchsia-100 text-fuchsia-600",
      borderColor: "border-fuchsia-200",
      link: "/librarian/circulation/today-issue",
    },
    {
      title: "Today's Returns",
      value: "62",
      icon: CalendarCheck,
      color: "bg-teal-100 text-teal-600",
      borderColor: "border-teal-200",
      link: "/librarian/circulation/today-return",
    },
    {
      title: "Pending Returns",
      value: "215",
      icon: Clock,
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200",
      link: "/librarian/circulation/pending",
    },
    {
      title: "Fine Outstanding",
      value: "₹4,250",
      icon: Banknote,
      color: "bg-pink-100 text-pink-600",
      borderColor: "border-pink-200",
      link: "/librarian/fines",
    },
  ];

  const recentTransactions = [
    { id: "TRX-001", student: "Rahul Sharma (Class 10A)", book: "Physics NCERT", type: "Issue", date: "Today, 10:30 AM", status: "Active" },
    { id: "TRX-002", student: "Priya Singh (Class 12B)", book: "Macbeth", type: "Return", date: "Today, 09:45 AM", status: "Completed" },
    { id: "TRX-003", student: "Amit Kumar (Staff)", book: "Advanced Calculus", type: "Issue", date: "Today, 09:15 AM", status: "Active" },
    { id: "TRX-004", student: "Sneha Patel (Class 8C)", book: "Harry Potter", type: "Return", date: "Yesterday, 02:20 PM", status: "Completed" },
    { id: "TRX-005", student: "Vikram Singh (Class 9A)", book: "Biology Grade 9", type: "Fine Paid", date: "Yesterday, 12:10 PM", status: "Paid (₹50)" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "15 books are overdue by more than 7 days.", link: "/librarian/circulation/overdue?days=7" },
    { id: 2, type: "info", message: "New stock of 50 Science books arrived, pending cataloging.", link: "/librarian/books/new-arrivals" },
    { id: 3, type: "danger", message: "Library software maintenance scheduled for this Saturday.", link: "#" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would route to a search results page or filter data
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      {/* Header & Quick Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BookMarked className="w-8 h-8 text-indigo-600" />
            Librarian Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's an overview of your library operations.</p>
        </div>

        <form onSubmit={handleSearch} className="w-full md:w-auto relative group">
          <input
            type="text"
            placeholder="Quick search books, members..."
            className="w-full md:w-80 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm group-hover:shadow-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <button type="submit" className="hidden" />
        </form>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link href={stat.link} key={index}>
              <div
                className={`bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1 group-hover:text-gray-700 transition-colors">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.color} border ${stat.borderColor} transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                {/* Decorative background circle on hover */}
                <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${stat.color.split(' ')[0]}`} />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 md:p-6 border-b border-gray-100 flex justify-between items-center bg-white">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-500" />
              Recent Transactions
            </h2>
            <Link href="/librarian/circulation" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-gray-500 text-sm border-b border-gray-100">
                  <th className="py-3 px-6 font-medium">Transaction ID</th>
                  <th className="py-3 px-6 font-medium">Member</th>
                  <th className="py-3 px-6 font-medium">Book</th>
                  <th className="py-3 px-6 font-medium">Type</th>
                  <th className="py-3 px-6 font-medium">Date/Time</th>
                  <th className="py-3 px-6 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-50">
                {recentTransactions.map((trx, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="py-4 px-6 font-medium text-gray-700">{trx.id}</td>
                    <td className="py-4 px-6 text-gray-600">{trx.student}</td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{trx.book}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        trx.type === 'Issue' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                        trx.type === 'Return' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                        'bg-purple-50 text-purple-700 border-purple-200'
                      }`}>
                        {trx.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-500">{trx.date}</td>
                    <td className="py-4 px-6">
                       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        trx.status === 'Active' ? 'text-blue-600 bg-blue-50' : 
                        trx.status === 'Completed' ? 'text-emerald-600 bg-emerald-50' : 
                        'text-gray-600 bg-gray-100'
                      }`}>
                        {trx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Alerts & Actions */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-rose-500" />
              Important Alerts
            </h2>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <Link href={alert.link} key={alert.id} className="block">
                  <div className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                    alert.type === 'warning' ? 'bg-orange-50/50 border-orange-100 hover:bg-orange-50' :
                    alert.type === 'danger' ? 'bg-rose-50/50 border-rose-100 hover:bg-rose-50' :
                    'bg-blue-50/50 border-blue-100 hover:bg-blue-50'
                  }`}>
                    {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />}
                    {alert.type === 'danger' && <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />}
                    {alert.type === 'info' && <Bell className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />}
                    
                    <p className={`text-sm ${
                      alert.type === 'warning' ? 'text-orange-800' :
                      alert.type === 'danger' ? 'text-rose-800' :
                      'text-blue-800'
                    }`}>
                      {alert.message}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <button className="w-full mt-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200">
              View All Notifications
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl shadow-md p-5 md:p-6 text-white relative overflow-hidden">
             {/* Abstract circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-300 opacity-20 rounded-full blur-xl translate-y-1/3 -translate-x-1/4"></div>
            
            <h2 className="text-lg font-bold mb-4 relative z-10">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <Link href="/librarian/circulation/issue">
                <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                  <BookUp className="w-4 h-4" /> Issue Book
                </button>
              </Link>
              <Link href="/librarian/circulation/return">
                <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                  <BookCheck className="w-4 h-4" /> Return Book
                </button>
              </Link>
              <Link href="/librarian/books/add">
                <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                  <BookPlus className="w-4 h-4" /> Add Book
                </button>
              </Link>
              <Link href="/librarian/members/add">
                <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                  <UserPlus className="w-4 h-4" /> Add Member
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary inline icon components to ensure everything works if lucide-react misses them
function BookPlus(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
      <path d="M9 10h6"/>
      <path d="M12 7v6"/>
    </svg>
  );
}

function UserPlus(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" x2="19" y1="8" y2="14"/>
      <line x1="22" x2="16" y1="11" y2="11"/>
    </svg>
  );
}
