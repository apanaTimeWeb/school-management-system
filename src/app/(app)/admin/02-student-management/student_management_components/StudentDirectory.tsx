"use client";

import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, Trash2, Download, CheckCircle, X, User } from 'lucide-react';
import clsx from 'clsx';

const mockStudents = [
  { id: 'STU001', name: 'Aarav Patel', class: 'X - A', rollNo: '12', parent: 'Rajesh Patel', phone: '+91 9876543210', status: 'Active' },
  { id: 'STU002', name: 'Priya Sharma', class: 'IX - B', rollNo: '24', parent: 'Sanjay Sharma', phone: '+91 9876543211', status: 'Active' },
  { id: 'STU003', name: 'Rahul Verma', class: 'XI - Sci', rollNo: '05', parent: 'Amit Verma', phone: '+91 9876543212', status: 'Inactive' },
  { id: 'STU004', name: 'Sneha Gupta', class: 'VIII - C', rollNo: '31', parent: 'Vikram Gupta', phone: '+91 9876543213', status: 'Active' },
  { id: 'STU005', name: 'Karan Singh', class: 'XII - Com', rollNo: '18', parent: 'Jaswinder Singh', phone: '+91 9876543214', status: 'Active' },
];

export default function StudentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal States
  const [viewStudent, setViewStudent] = useState<any>(null);
  const [editStudent, setEditStudent] = useState<any>(null);
  const [deleteStudent, setDeleteStudent] = useState<any>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setViewStudent(null);
    setEditStudent(null);
    setDeleteStudent(null);
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm flex flex-col fade-in relative min-h-[500px]">
      
      {showToast && (
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 fade-in z-50">
          <CheckCircle size={16} /> {toastMsg}
        </div>
      )}

      {/* Toolbar */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, ID or phone..." 
            className="w-full pl-10 pr-4 py-2 bg-bg-page border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 bg-bg-page border border-border rounded-md text-sm font-semibold hover:bg-border/50 transition flex-1 sm:flex-none justify-center">
            <Filter size={16} /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-md text-sm font-semibold hover:bg-secondary-hover transition flex-1 sm:flex-none justify-center">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-bg-page/50 border-b border-border">
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Student Info</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Class & Roll</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Parent/Guardian</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Contact</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-text-secondary uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student) => (
              <tr key={student.id} className="border-b border-border/50 hover:bg-bg-page/30 transition">
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-text-primary">{student.name}</span>
                    <span className="text-xs text-text-secondary font-mono">{student.id}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-text-primary">{student.class}</span>
                    <span className="text-xs text-text-secondary">Roll: {student.rollNo}</span>
                  </div>
                </td>
                <td className="p-4 text-sm font-medium text-text-primary">{student.parent}</td>
                <td className="p-4 text-sm text-text-secondary font-mono">{student.phone}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                    student.status === 'Active' ? 'bg-success-bg text-success border border-success/20' : 'bg-danger-bg text-danger border border-danger/20'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => setViewStudent(student)} className="p-1.5 text-text-secondary hover:text-primary hover:bg-primary-subtle rounded transition" title="View Profile">
                      <Eye size={18} />
                    </button>
                    <button onClick={() => setEditStudent(student)} className="p-1.5 text-text-secondary hover:text-info hover:bg-info-bg rounded transition" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => setDeleteStudent(student)} className="p-1.5 text-text-secondary hover:text-danger hover:bg-danger-bg rounded transition" title="Archive/Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {viewStudent && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center fade-in p-4">
           <div className="bg-card w-full max-w-md rounded-xl shadow-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
                <h3 className="font-bold text-lg flex items-center gap-2"><User size={20} className="text-primary"/> Student Details</h3>
                <button onClick={() => setViewStudent(null)} className="text-text-secondary hover:text-danger"><X size={20}/></button>
              </div>
              <div className="p-6 flex flex-col gap-4">
                 <div className="flex items-center gap-4 border-b border-border pb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-black">
                      {viewStudent.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{viewStudent.name}</h4>
                      <p className="text-sm font-semibold text-text-secondary">{viewStudent.id} • Class {viewStudent.class}</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4 text-sm">
                   <div>
                     <span className="text-[10px] uppercase font-bold text-text-secondary">Parent Name</span>
                     <p className="font-semibold">{viewStudent.parent}</p>
                   </div>
                   <div>
                     <span className="text-[10px] uppercase font-bold text-text-secondary">Phone Number</span>
                     <p className="font-semibold">{viewStudent.phone}</p>
                   </div>
                   <div>
                     <span className="text-[10px] uppercase font-bold text-text-secondary">Roll Number</span>
                     <p className="font-semibold">{viewStudent.rollNo}</p>
                   </div>
                   <div>
                     <span className="text-[10px] uppercase font-bold text-text-secondary">Status</span>
                     <p className={clsx("font-bold", viewStudent.status === 'Active' ? 'text-success' : 'text-danger')}>{viewStudent.status}</p>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Edit Modal */}
      {editStudent && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center fade-in p-4">
           <div className="bg-card w-full max-w-md rounded-xl shadow-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page">
                <h3 className="font-bold text-lg flex items-center gap-2"><Edit size={20} className="text-info"/> Edit Student</h3>
                <button onClick={() => setEditStudent(null)} className="text-text-secondary hover:text-danger"><X size={20}/></button>
              </div>
              <div className="p-6 flex flex-col gap-4">
                 <div className="flex flex-col gap-1">
                   <label className="text-xs font-bold text-text-secondary uppercase">Student Name</label>
                   <input type="text" defaultValue={editStudent.name} className="bg-bg-input border border-border rounded px-3 py-2 text-sm font-semibold outline-none focus:border-info"/>
                 </div>
                 <div className="flex flex-col gap-1">
                   <label className="text-xs font-bold text-text-secondary uppercase">Parent/Guardian Name</label>
                   <input type="text" defaultValue={editStudent.parent} className="bg-bg-input border border-border rounded px-3 py-2 text-sm font-semibold outline-none focus:border-info"/>
                 </div>
                 <div className="flex flex-col gap-1">
                   <label className="text-xs font-bold text-text-secondary uppercase">Phone Number</label>
                   <input type="text" defaultValue={editStudent.phone} className="bg-bg-input border border-border rounded px-3 py-2 text-sm font-semibold outline-none focus:border-info"/>
                 </div>
                 <button onClick={()=>triggerToast('Student updated successfully!')} className="w-full bg-info text-white py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-info/90 transition mt-2">
                   Save Changes
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteStudent && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center fade-in p-4">
           <div className="bg-card w-full max-w-sm rounded-xl shadow-xl overflow-hidden text-center p-6 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-danger-bg text-danger rounded-full flex items-center justify-center border-4 border-danger/20">
                <Trash2 size={32}/>
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-primary">Delete Student?</h3>
                <p className="text-sm font-semibold text-text-secondary mt-1">Are you sure you want to delete <span className="font-bold text-text-primary">{deleteStudent.name}</span>? This action cannot be undone.</p>
              </div>
              <div className="flex gap-3 w-full mt-2">
                 <button onClick={() => setDeleteStudent(null)} className="flex-1 bg-bg-page border border-border py-2.5 rounded-lg text-sm font-bold hover:bg-border/50 transition">Cancel</button>
                 <button onClick={() => triggerToast('Student deleted permanently.')} className="flex-1 bg-danger text-white py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-danger/90 transition">Delete</button>
              </div>
           </div>
        </div>
      )}
      
    </div>
  );
}
