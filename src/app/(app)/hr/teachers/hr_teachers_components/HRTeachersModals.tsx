"use client";
import React from "react";
import { X } from "lucide-react";
import { useHRTeachersStore } from "../hr_teachers_store/useHRTeachersStore";

export default function HRTeachersModals() {
  const { 
    isAddModalOpen, setAddModalOpen,
    isViewModalOpen, setViewModalOpen,
    selectedTeacher
  } = useHRTeachersStore();

  return (
    <>
      {/* View Modal */}
      {isViewModalOpen && selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
          <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
            <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
              <h3 className="text-lg font-black text-text-primary">Teacher Details</h3>
              <button 
                onClick={() => setViewModalOpen(false)}
                className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-black text-xl shrink-0">
                  {selectedTeacher.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-black text-text-primary">{selectedTeacher.name}</h4>
                  <p className="text-sm font-bold text-text-secondary">{selectedTeacher.qualification}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Teacher ID</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedTeacher.teacherId}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Status</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedTeacher.status}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl col-span-2">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Subjects Taught</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedTeacher.subjects.map(sub => (
                      <span key={sub} className="px-2 py-0.5 rounded text-[11px] font-bold bg-bg-input border border-border text-text-secondary">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Phone</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedTeacher.phone}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Email</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5 truncate" title={selectedTeacher.email}>{selectedTeacher.email}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Date of Joining</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedTeacher.dateOfJoin}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Base Salary</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">₹{selectedTeacher.salary.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border flex justify-end gap-3 bg-bg-input">
              <button 
                onClick={() => setViewModalOpen(false)}
                className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
          <div className="bg-card w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
            <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
              <h3 className="text-lg font-black text-text-primary">Add New Teacher</h3>
              <button 
                onClick={() => setAddModalOpen(false)}
                className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto custom-scrollbar max-h-[70vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Full Name</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500" placeholder="e.g. Dr. Ananya Sharma" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Teacher ID</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500" placeholder="e.g. T105" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Qualification</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500" placeholder="e.g. Ph.D. Mathematics" />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Subjects Taught (comma separated)</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500" placeholder="e.g. Mathematics, Physics" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Phone Number</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500" placeholder="+91 XXXXXXXXXX" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                  <input type="email" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500" placeholder="email@school.edu" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Date of Joining</label>
                  <input type="date" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500 text-text-primary" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Base Salary</label>
                  <input type="number" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-purple-500" placeholder="₹ Amount" />
                </div>
                
              </div>
            </div>
            <div className="p-4 border-t border-border flex justify-end gap-3 bg-bg-input">
              <button 
                onClick={() => setAddModalOpen(false)}
                className="px-4 py-2 font-bold text-sm text-text-secondary bg-bg-page border border-border rounded-lg hover:bg-border transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setAddModalOpen(false)}
                className="px-4 py-2 font-bold text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors shadow-md"
              >
                Save Teacher
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
