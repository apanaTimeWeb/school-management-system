"use client";

import { useState, useEffect } from "react";
import { X, Save, User, Briefcase, FileText, Upload } from "lucide-react";
import type { Employee } from "../hr_employees_types/HrEmployeesTypes";

interface HrEmployeeEditModalProps {
  employee: Employee | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedEmployee: Employee) => void;
}

export default function HrEmployeeEditModal({ employee, isOpen, onClose, onSave }: HrEmployeeEditModalProps) {
  const [formData, setFormData] = useState<Employee | null>(null);
  const [activeTab, setActiveTab] = useState<'Personal' | 'Contact' | 'Joining'>('Personal');

  useEffect(() => {
    if (employee) {
      setFormData(JSON.parse(JSON.stringify(employee)));
    }
  }, [employee]);

  if (!isOpen || !formData) return null;

  const handleChange = (section: keyof Employee, field: string, value: string) => {
    setFormData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [section]: {
          ...(prev[section] as any),
          [field]: value
        }
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in">
      <div className="bg-card w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-input/30">
          <div>
            <h2 className="text-xl font-bold text-foreground">Edit Employee: {formData.employeeId}</h2>
            <p className="text-sm text-muted-foreground">{formData.personal.firstName} {formData.personal.lastName}</p>
          </div>
          <button onClick={onClose} className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-6 pt-4 border-b border-border bg-input/10">
          <button onClick={() => setActiveTab('Personal')} className={`px-4 py-2 font-bold text-sm border-b-2 transition-colors ${activeTab === 'Personal' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>Personal Info</button>
          <button onClick={() => setActiveTab('Contact')} className={`px-4 py-2 font-bold text-sm border-b-2 transition-colors ${activeTab === 'Contact' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>Contact & Emergency</button>
          <button onClick={() => setActiveTab('Joining')} className={`px-4 py-2 font-bold text-sm border-b-2 transition-colors ${activeTab === 'Joining' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>Job & Role</button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <form id="edit-employee-form" onSubmit={handleSubmit} className="space-y-6">
            
            {activeTab === 'Personal' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 motion-safe:animate-in motion-safe:fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">First Name</label>
                  <input type="text" value={formData.personal.firstName} onChange={e => handleChange('personal', 'firstName', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Last Name</label>
                  <input type="text" value={formData.personal.lastName} onChange={e => handleChange('personal', 'lastName', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Date of Birth</label>
                  <input type="date" value={formData.personal.dob} onChange={e => handleChange('personal', 'dob', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Gender</label>
                  <select value={formData.personal.gender} onChange={e => handleChange('personal', 'gender', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'Contact' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 motion-safe:animate-in motion-safe:fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Phone Number</label>
                  <input type="text" value={formData.contact.phone} onChange={e => handleChange('contact', 'phone', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Email Address</label>
                  <input type="email" value={formData.contact.email} onChange={e => handleChange('contact', 'email', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-foreground">Residential Address</label>
                  <textarea value={formData.contact.address} onChange={e => handleChange('contact', 'address', e.target.value)} rows={3} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none resize-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Emergency Contact Name</label>
                  <input type="text" value={formData.contact.emergencyContactName} onChange={e => handleChange('contact', 'emergencyContactName', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Emergency Contact Phone</label>
                  <input type="text" value={formData.contact.emergencyContactPhone} onChange={e => handleChange('contact', 'emergencyContactPhone', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
              </div>
            )}

            {activeTab === 'Joining' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 motion-safe:animate-in motion-safe:fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Department</label>
                  <input type="text" value={formData.joining.department} onChange={e => handleChange('joining', 'department', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Designation</label>
                  <input type="text" value={formData.joining.designation} onChange={e => handleChange('joining', 'designation', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Employment Type</label>
                  <select value={formData.joining.employmentType} onChange={e => handleChange('joining', 'employmentType', e.target.value)} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none">
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Intern">Intern</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})} className="w-full p-2.5 bg-input border border-border rounded-md text-sm text-foreground focus:border-primary outline-none">
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Suspended">Suspended</option>
                    <option value="Exited">Exited</option>
                  </select>
                </div>
              </div>
            )}

          </form>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-input/30">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-foreground hover:bg-input border border-transparent hover:border-border rounded-lg transition-colors">
            Cancel
          </button>
          <button type="submit" form="edit-employee-form" className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-lg shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95">
            <Save size={18} />
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

