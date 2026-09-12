"use client";

import React from 'react';

export default function AdminStudentManagementConfig() {
  const fields = [
    "Student List",
    "Student Profile",
    "Student Registration",
    "Admission Number",
    "Student ID",
    "Academic Details",
    "Parent/Guardian Details",
    "Contact Details",
    "Address",
    "Documents",
    "Previous School Details",
    "Medical Information",
    "Category/Reservation Details",
    "Sibling Information",
    "House",
    "Student Status",
    "Class/Section Transfer",
    "Student Promotion",
    "Student TC",
    "Student Withdrawal",
    "Student Re-admission",
    "Student Archive",
    "Student Search/Filters",
    "Bulk Import/Export"
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      
      <div className="border-b border-border pb-3">
        <h2 className="text-base font-bold text-text-primary uppercase tracking-wider">Student Management</h2>
      </div>

      {/* Grid of vertically stacked labels and inputs as required for validator */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fields.map((field, idx) => (
          <div key={idx} className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-text-primary">{field}</label>
            <input 
              type="text" 
              className="bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary outline-none transition-colors"
            />
          </div>
        ))}
      </div>
      
      {/* Submit Action */}
      <div className="flex justify-end pt-4 border-t border-border">
        <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-md hover:bg-primary-hover transition-colors">
          Save Settings
        </button>
      </div>

    </div>
  );
}
