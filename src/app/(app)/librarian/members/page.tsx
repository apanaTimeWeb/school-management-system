"use client";

import React, { useState } from "react";
import {
  Users,
  Search,
  Plus,
  User,
  GraduationCap,
  Briefcase,
  Shield,
  Edit,
  Trash2,
  X,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Phone,
  Mail,
  Calendar,
  BookMarked,
  Banknote,
  History,
  AlertTriangle
} from "lucide-react";

type MemberRole = 'Student' | 'Teacher' | 'Staff' | 'Other' | 'All';
type MemberStatus = 'Active' | 'Suspended' | 'Expired';

interface BorrowedBook {
  bookId: string;
  title: string;
  issueDate: string;
  dueDate: string;
  isOverdue: boolean;
}

interface HistoryRecord {
  id: string;
  bookId: string;
  title: string;
  issueDate: string;
  returnDate: string;
  fine: number;
}

interface Member {
  id: string;
  memberId: string;
  name: string;
  role: MemberRole;
  status: MemberStatus;
  classDepartment: string;
  email: string;
  phone: string;
  membershipStart: string;
  membershipEnd: string;
  borrowingLimit: number;
  fineBalance: number;
  currentBooks: BorrowedBook[];
  borrowingHistory: HistoryRecord[];
}

const MOCK_MEMBERS: Member[] = [
  {
    id: "M-1",
    memberId: "LIB-STU-001",
    name: "Rahul Sharma",
    role: "Student",
    status: "Active",
    classDepartment: "Class 10A",
    email: "rahul.s@student.edu",
    phone: "+91 9876543210",
    membershipStart: "2023-04-01",
    membershipEnd: "2024-03-31",
    borrowingLimit: 3,
    fineBalance: 0,
    currentBooks: [
      { bookId: "B-1001", title: "Mathematics Class 10", issueDate: "2023-10-15", dueDate: "2023-10-29", isOverdue: false }
    ],
    borrowingHistory: [
      { id: "H-1", bookId: "B-1055", title: "Physics Vol 1", issueDate: "2023-08-01", returnDate: "2023-08-14", fine: 0 }
    ]
  },
  {
    id: "M-2",
    memberId: "LIB-TEA-001",
    name: "Priya Singh",
    role: "Teacher",
    status: "Active",
    classDepartment: "Science Dept",
    email: "priya.singh@school.edu",
    phone: "+91 9876543211",
    membershipStart: "2022-04-01",
    membershipEnd: "2025-03-31",
    borrowingLimit: 10,
    fineBalance: 50,
    currentBooks: [
      { bookId: "B-2004", title: "Advanced Chemistry", issueDate: "2023-09-10", dueDate: "2023-10-10", isOverdue: true }
    ],
    borrowingHistory: [
      { id: "H-2", bookId: "B-3012", title: "Lab Manual", issueDate: "2023-05-10", returnDate: "2023-06-15", fine: 0 }
    ]
  },
  {
    id: "M-3",
    memberId: "LIB-STU-002",
    name: "Amit Kumar",
    role: "Student",
    status: "Suspended",
    classDepartment: "Class 12B",
    email: "amit.k@student.edu",
    phone: "+91 9876543212",
    membershipStart: "2023-04-01",
    membershipEnd: "2024-03-31",
    borrowingLimit: 3,
    fineBalance: 250,
    currentBooks: [
      { bookId: "B-1088", title: "English Grammar", issueDate: "2023-07-01", dueDate: "2023-07-15", isOverdue: true },
      { bookId: "B-1089", title: "Macbeth", issueDate: "2023-07-01", dueDate: "2023-07-15", isOverdue: true }
    ],
    borrowingHistory: []
  },
  {
    id: "M-4",
    memberId: "LIB-STF-001",
    name: "Vikram Gupta",
    role: "Staff",
    status: "Expired",
    classDepartment: "Administration",
    email: "vikram.g@school.edu",
    phone: "+91 9876543213",
    membershipStart: "2021-01-01",
    membershipEnd: "2022-12-31",
    borrowingLimit: 5,
    fineBalance: 0,
    currentBooks: [],
    borrowingHistory: [
      { id: "H-3", bookId: "B-4001", title: "Management Principles", issueDate: "2021-05-10", returnDate: "2021-06-01", fine: 0 }
    ]
  }
];

const emptyMember: Member = {
  id: "", memberId: "", name: "", role: "Student", status: "Active", classDepartment: "",
  email: "", phone: "", membershipStart: "", membershipEnd: "", borrowingLimit: 3,
  fineBalance: 0, currentBooks: [], borrowingHistory: []
};

export default function LibraryMembers() {
  const [members, setMembers] = useState<Member[]>(MOCK_MEMBERS);
  const [activeTab, setActiveTab] = useState<MemberRole>('All');
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  
  const [currentMember, setCurrentMember] = useState<Member>(emptyMember);
  const [isEditing, setIsEditing] = useState(false);

  // Filters
  const filteredMembers = members.filter(m => 
    (activeTab === 'All' || m.role === activeTab) && 
    (m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.memberId.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // UI Helpers
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const getRoleBadge = (role: MemberRole) => {
    switch(role) {
      case 'Student': return <span className="bg-sky-100 text-sky-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 w-max"><GraduationCap className="w-3 h-3"/> Student</span>;
      case 'Teacher': return <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 w-max"><Briefcase className="w-3 h-3"/> Teacher</span>;
      case 'Staff': return <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 w-max"><User className="w-3 h-3"/> Staff</span>;
      case 'Other': return <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 w-max"><Shield className="w-3 h-3"/> Other</span>;
      default: return null;
    }
  };

  const getStatusBadge = (status: MemberStatus) => {
    switch(status) {
      case 'Active': return <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><CheckCircle2 className="w-3.5 h-3.5"/> Active</span>;
      case 'Suspended': return <span className="bg-rose-100 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><AlertTriangle className="w-3.5 h-3.5"/> Suspended</span>;
      case 'Expired': return <span className="bg-gray-100 text-gray-700 border border-gray-300 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max"><XCircle className="w-3.5 h-3.5"/> Expired</span>;
    }
  };

  // Handlers
  const openAddModal = () => {
    setCurrentMember({ ...emptyMember, id: `M-${Date.now()}`, memberId: `LIB-NEW-${members.length + 1}` });
    setIsEditing(false);
    setIsFormOpen(true);
  };

  const openEditModal = (m: Member, e: React.MouseEvent) => {
    e.stopPropagation(); // prevent opening profile
    setCurrentMember(m);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const openProfile = (m: Member) => {
    setCurrentMember(m);
    setIsProfileOpen(true);
  };

  const handleDeleteClick = (m: Member, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMember(m);
    setIsDeleteOpen(true);
  };

  const saveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setMembers(members.map(m => m.id === currentMember.id ? currentMember : m));
    } else {
      setMembers([...members, currentMember]);
    }
    setIsFormOpen(false);
  };

  const deleteMember = () => {
    setMembers(members.filter(m => m.id !== currentMember.id));
    setIsDeleteOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentMember(prev => ({ ...prev, [name]: value }));
  };

  const payFine = () => {
    if(currentMember.fineBalance > 0) {
      alert(`Payment received: ₹${currentMember.fineBalance}`);
      const updatedMember = { ...currentMember, fineBalance: 0 };
      setCurrentMember(updatedMember);
      setMembers(members.map(m => m.id === updatedMember.id ? updatedMember : m));
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="w-8 h-8 text-indigo-600" />
            Library Members
          </h1>
          <p className="text-gray-500 mt-1">Manage library memberships, borrowing limits, and fines.</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 w-full md:w-auto justify-center"
        >
          <Plus className="w-5 h-5" />
          Add New Member
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col xl:flex-row gap-4 items-center justify-between">
        
        {/* Role Tabs */}
        <div className="flex gap-2 w-full xl:w-auto overflow-x-auto hide-scrollbar pb-2 xl:pb-0">
          {['All', 'Student', 'Teacher', 'Staff', 'Other'].map((role) => (
            <button 
              key={role}
              onClick={() => setActiveTab(role as MemberRole)}
              className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors flex items-center gap-2 text-sm ${
                activeTab === role 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {role === 'All' && <Users className="w-4 h-4" />}
              {role === 'Student' && <GraduationCap className="w-4 h-4" />}
              {role === 'Teacher' && <Briefcase className="w-4 h-4" />}
              {role === 'Staff' && <User className="w-4 h-4" />}
              {role === 'Other' && <Shield className="w-4 h-4" />}
              {role}s
            </button>
          ))}
        </div>
        
        {/* Search */}
        <div className="relative w-full xl:w-80 shrink-0">
          <input
            type="text"
            placeholder="Search by Name or Member ID..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm bg-gray-50/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <div 
              key={member.id} 
              onClick={() => openProfile(member)}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 group cursor-pointer relative"
            >
              {/* Quick Actions (Hover) */}
              <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button onClick={(e) => openEditModal(member, e)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors bg-white shadow-sm border border-gray-100" title="Edit">
                   <Edit className="w-4 h-4" />
                 </button>
                 <button onClick={(e) => handleDeleteClick(member, e)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors bg-white shadow-sm border border-gray-100" title="Delete">
                   <Trash2 className="w-4 h-4" />
                 </button>
              </div>

              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shrink-0 shadow-sm ${
                  member.role === 'Student' ? 'bg-sky-100 text-sky-700' :
                  member.role === 'Teacher' ? 'bg-purple-100 text-purple-700' :
                  member.role === 'Staff' ? 'bg-amber-100 text-amber-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {getInitials(member.name)}
                </div>
                
                {/* Info */}
                <div className="pt-1 pr-16">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                  <p className="text-sm text-gray-500 font-mono mt-0.5">{member.memberId}</p>
                  <div className="mt-1.5">{getRoleBadge(member.role)}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm border-y border-gray-50 py-4 mb-4">
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-0.5">Class/Dept</p>
                   <p className="font-medium text-gray-800">{member.classDepartment || '-'}</p>
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-0.5">Status</p>
                   <div className="mt-1">{getStatusBadge(member.status)}</div>
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-0.5">Books Taken</p>
                   <p className={`font-medium ${member.currentBooks.length >= member.borrowingLimit ? 'text-orange-600' : 'text-gray-800'}`}>
                     {member.currentBooks.length} / {member.borrowingLimit}
                   </p>
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-0.5">Fine Balance</p>
                   <p className={`font-bold ${member.fineBalance > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                     ₹{member.fineBalance}
                   </p>
                 </div>
              </div>

              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-3.5 h-3.5 mr-1" /> Valid: {member.membershipStart} to {member.membershipEnd}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-gray-100 border-dashed">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">No Members Found</h3>
            <p className="text-gray-500">Try adjusting your filters or add a new member.</p>
          </div>
        )}
      </div>


      {/* Add / Edit Member Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl my-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                {isEditing ? <Edit className="w-5 h-5 text-emerald-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                {isEditing ? "Edit Member Details" : "Register New Member"}
              </h2>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={saveMember} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                
                <div className="md:col-span-2"><h3 className="font-bold text-gray-700 border-b pb-2">Basic Details</h3></div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Member ID (Auto/Manual) *</label>
                  <input required type="text" name="memberId" value={currentMember.memberId} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required type="text" name="name" value={currentMember.name} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                  <select name="role" value={currentMember.role} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Staff">Staff</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class / Department</label>
                  <input type="text" name="classDepartment" value={currentMember.classDepartment} onChange={handleInputChange} placeholder="e.g. Class 10A, Science Dept" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                <div className="md:col-span-2 mt-2"><h3 className="font-bold text-gray-700 border-b pb-2">Contact & Membership</h3></div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" value={currentMember.email} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="text" name="phone" value={currentMember.phone} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership Status</label>
                  <select name="status" value={currentMember.status} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
                    <option value="Expired">Expired</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Borrowing Limit (Books)</label>
                  <input type="number" name="borrowingLimit" value={currentMember.borrowingLimit} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership Start Date</label>
                  <input type="date" name="membershipStart" value={currentMember.membershipStart} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership End Date</label>
                  <input type="date" name="membershipEnd" value={currentMember.membershipEnd} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsFormOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  {isEditing ? "Update Member" : "Save Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Member Profile Modal (View Details, Books, History, Fines) */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50 shrink-0 rounded-t-2xl">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                Member Profile Overview
              </h2>
              <div className="flex items-center gap-2">
                <button onClick={(e) => { setIsProfileOpen(false); openEditModal(currentMember, e); }} className="p-2 bg-white border border-gray-200 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors shadow-sm" title="Edit Profile">
                  <Edit className="w-5 h-5" />
                </button>
                <button onClick={() => setIsProfileOpen(false)} className="p-2 bg-white border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6">
               
               {/* Top Section - Profile summary & Fines */}
               <div className="flex flex-col lg:flex-row gap-6 mb-8">
                 {/* ID Card */}
                 <div className="flex-1 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl shadow-md p-6 text-white relative overflow-hidden flex items-center gap-6">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold shrink-0 shadow-lg bg-white/20 backdrop-blur-md border border-white/30`}>
                      {getInitials(currentMember.name)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{currentMember.name}</h2>
                      <p className="text-indigo-200 font-mono text-sm mb-3">{currentMember.memberId}</p>
                      <div className="flex items-center gap-3">
                        <span className="bg-white/20 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                          {currentMember.role}
                        </span>
                        <span className="bg-white/20 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                          {currentMember.classDepartment || "No Dept"}
                        </span>
                      </div>
                    </div>
                 </div>

                 {/* Fine Balance Box */}
                 <div className="lg:w-72 shrink-0 bg-white border border-rose-100 rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    {currentMember.fineBalance > 0 ? (
                      <>
                        <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
                          <Banknote className="w-6 h-6 text-rose-600" />
                        </div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Outstanding Fine</p>
                        <h3 className="text-3xl font-bold text-rose-600 mb-4">₹{currentMember.fineBalance}</h3>
                        <button onClick={payFine} className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 rounded-xl transition-colors text-sm">
                          Pay Fine Now
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                        </div>
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Outstanding Fine</p>
                        <h3 className="text-3xl font-bold text-emerald-600 mb-4">₹0</h3>
                        <p className="text-sm text-gray-400">All dues are cleared.</p>
                      </>
                    )}
                 </div>
               </div>

               {/* Current Issued Books */}
               <div className="mb-8">
                 <div className="flex justify-between items-center mb-4">
                   <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                     <BookMarked className="w-5 h-5 text-indigo-500" />
                     Currently Borrowed Books ({currentMember.currentBooks.length}/{currentMember.borrowingLimit})
                   </h3>
                 </div>
                 
                 {currentMember.currentBooks.length > 0 ? (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {currentMember.currentBooks.map((book, idx) => (
                       <div key={idx} className={`p-4 rounded-xl border ${book.isOverdue ? 'bg-rose-50 border-rose-200' : 'bg-gray-50 border-gray-200'} flex justify-between items-start`}>
                         <div>
                           <p className="text-xs font-mono text-gray-500 mb-1">{book.bookId}</p>
                           <h4 className="font-bold text-gray-800">{book.title}</h4>
                           <div className="text-xs mt-2 space-y-1">
                             <p className="text-gray-600">Issued: <span className="font-medium">{book.issueDate}</span></p>
                             <p className={`${book.isOverdue ? 'text-rose-600 font-bold' : 'text-gray-600'}`}>
                               Due: <span className="font-medium">{book.dueDate}</span> {book.isOverdue && "(OVERDUE)"}
                             </p>
                           </div>
                         </div>
                         <button className="text-xs font-medium bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                           Return Book
                         </button>
                       </div>
                     ))}
                   </div>
                 ) : (
                   <div className="bg-gray-50 border border-gray-100 border-dashed rounded-xl p-8 text-center">
                     <p className="text-gray-500 font-medium">No books currently borrowed.</p>
                   </div>
                 )}
               </div>

               {/* Borrowing History Table */}
               <div>
                 <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                   <History className="w-5 h-5 text-indigo-500" />
                   Borrowing History
                 </h3>
                 
                 {currentMember.borrowingHistory.length > 0 ? (
                   <div className="border border-gray-100 rounded-xl overflow-hidden">
                     <table className="w-full text-left border-collapse">
                       <thead>
                         <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                           <th className="py-3 px-4 font-medium">Book</th>
                           <th className="py-3 px-4 font-medium">Issue Date</th>
                           <th className="py-3 px-4 font-medium">Return Date</th>
                           <th className="py-3 px-4 font-medium text-right">Fine</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-50 text-sm">
                         {currentMember.borrowingHistory.map((hist) => (
                           <tr key={hist.id}>
                             <td className="py-3 px-4">
                               <p className="font-bold text-gray-800">{hist.title}</p>
                               <p className="text-xs text-gray-500 font-mono">{hist.bookId}</p>
                             </td>
                             <td className="py-3 px-4 text-gray-600">{hist.issueDate}</td>
                             <td className="py-3 px-4 text-gray-600">{hist.returnDate}</td>
                             <td className="py-3 px-4 text-right font-medium">
                               {hist.fine > 0 ? <span className="text-rose-600">₹{hist.fine}</span> : <span className="text-emerald-600">₹0</span>}
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 ) : (
                   <div className="bg-gray-50 border border-gray-100 border-dashed rounded-xl p-8 text-center">
                     <p className="text-gray-500 font-medium">No borrowing history found.</p>
                   </div>
                 )}
               </div>

            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {isDeleteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Remove Member?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Are you sure you want to remove <span className="font-bold text-gray-800">{currentMember.name}</span>? 
              {currentMember.currentBooks.length > 0 && <span className="block mt-2 text-rose-600 font-medium">Cannot delete: This member has unreturned books.</span>}
            </p>
            <div className="flex flex-col gap-2">
              <button 
                onClick={deleteMember} 
                disabled={currentMember.currentBooks.length > 0}
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors"
              >
                Yes, Remove Member
              </button>
              <button onClick={() => setIsDeleteOpen(false)} className="w-full py-2.5 text-gray-500 hover:text-gray-700 font-medium transition-colors mt-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
