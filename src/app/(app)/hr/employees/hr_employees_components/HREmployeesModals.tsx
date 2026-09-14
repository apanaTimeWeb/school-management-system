"use client";
import React from "react";
import { X } from "lucide-react";
import { useHREmployeesStore } from "../hr_employees_store/useHREmployeesStore";

export default function HREmployeesModals() {
  const { 
    isAddModalOpen, setAddModalOpen,
    isViewModalOpen, setViewModalOpen,
    selectedEmployee
  } = useHREmployeesStore();

  return (
    <>
      {/* View Modal */}
      {isViewModalOpen && selectedEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm fade-in">
          <div className="bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden flex flex-col scale-in">
            <div className="p-4 border-b border-border flex justify-between items-center bg-bg-input">
              <h3 className="text-lg font-black text-text-primary">Employee Details</h3>
              <button 
                onClick={() => setViewModalOpen(false)}
                className="p-2 text-text-secondary hover:text-danger hover:bg-danger/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-black text-xl shrink-0">
                  {selectedEmployee.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-black text-text-primary">{selectedEmployee.name}</h4>
                  <p className="text-sm font-bold text-text-secondary">{selectedEmployee.designation} • {selectedEmployee.department}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Employee ID</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedEmployee.employeeId}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Status</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedEmployee.status}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Phone</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedEmployee.phone}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Email</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5 truncate" title={selectedEmployee.email}>{selectedEmployee.email}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Date of Joining</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">{selectedEmployee.dateOfJoin}</p>
                </div>
                <div className="p-3 bg-bg-page border border-border rounded-xl">
                  <span className="text-[10px] font-bold text-text-secondary uppercase">Base Salary</span>
                  <p className="text-sm font-bold text-text-primary mt-0.5">₹{selectedEmployee.salary.toLocaleString()}</p>
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
              <h3 className="text-lg font-black text-text-primary">Add New Employee</h3>
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
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500" placeholder="e.g. Ramesh Kumar" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Employee ID</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500" placeholder="e.g. E105" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Department</label>
                  <select className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500">
                    <option>Administration</option>
                    <option>Office</option>
                    <option>IT</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Designation</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500" placeholder="e.g. Clerk" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Phone Number</label>
                  <input type="text" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500" placeholder="+91 XXXXXXXXXX" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email Address</label>
                  <input type="email" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500" placeholder="email@school.edu" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Date of Joining</label>
                  <input type="date" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500 text-text-primary" />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">Base Salary</label>
                  <input type="number" className="bg-bg-page border border-border rounded-lg px-3 py-2 text-sm font-bold outline-none focus:border-indigo-500" placeholder="₹ Amount" />
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
                className="px-4 py-2 font-bold text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
              >
                Save Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
