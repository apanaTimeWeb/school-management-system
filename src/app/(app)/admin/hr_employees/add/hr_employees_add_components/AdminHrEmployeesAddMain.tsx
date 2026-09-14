"use client";

import { useAdminHrEmployeesAdd } from "./useAdminHrEmployeesAdd";
import AdminHrEmployeesAddStepper from "./AdminHrEmployeesAddStepper";
import { Loader2 } from "lucide-react";

export default function AdminHrEmployeesAddMain() {
  const { currentStep, formData, updateFormData, nextStep, prevStep, submitForm, isSubmitting } = useAdminHrEmployeesAdd();

  return (
    <div className="w-full max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-lg p-6 md:p-8">
      <AdminHrEmployeesAddStepper currentStep={currentStep} />

      <div className="min-h-[300px] py-4">
        {currentStep === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-bold text-foreground mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">First Name</label>
                <input type="text" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground" 
                  value={formData.personal.firstName} onChange={(e) => updateFormData('personal', { firstName: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Last Name</label>
                <input type="text" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
                  value={formData.personal.lastName} onChange={(e) => updateFormData('personal', { lastName: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Date of Birth</label>
                <input type="date" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
                  value={formData.personal.dob} onChange={(e) => updateFormData('personal', { dob: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Gender</label>
                <select className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
                  value={formData.personal.gender} onChange={(e) => updateFormData('personal', { gender: e.target.value })}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-lg font-bold text-foreground mb-4">Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Phone</label>
                <input type="tel" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground" 
                  value={formData.contact.phone} onChange={(e) => updateFormData('contact', { phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Email</label>
                <input type="email" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
                  value={formData.contact.email} onChange={(e) => updateFormData('contact', { email: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Full Address</label>
                <textarea className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground min-h-[80px]"
                  value={formData.contact.address} onChange={(e) => updateFormData('contact', { address: e.target.value })} />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
             <h3 className="text-lg font-bold text-foreground mb-4">Joining Details</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Department</label>
                  <input type="text" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground" 
                    value={formData.joining.department} onChange={(e) => updateFormData('joining', { department: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Designation</label>
                  <input type="text" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
                    value={formData.joining.designation} onChange={(e) => updateFormData('joining', { designation: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Join Date</label>
                  <input type="date" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
                    value={formData.joining.joinDate} onChange={(e) => updateFormData('joining', { joinDate: e.target.value })} />
                </div>
             </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
             <h3 className="text-lg font-bold text-foreground mb-4">Bank & Documents</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Bank Name</label>
                  <input type="text" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground" 
                    value={formData.bank.bankName} onChange={(e) => updateFormData('bank', { bankName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase">Account Number</label>
                  <input type="text" className="w-full bg-input border border-border rounded-md px-3 py-2 text-sm focus:border-primary focus:outline-none text-foreground"
                    value={formData.bank.accountNumber} onChange={(e) => updateFormData('bank', { accountNumber: e.target.value })} />
                </div>
             </div>
             <div className="mt-6 p-6 border-2 border-dashed border-border rounded-lg text-center bg-input/50">
               <span className="text-sm text-muted-foreground font-medium">Drag & Drop Documents Here</span>
             </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-border mt-6">
        <button 
          onClick={prevStep}
          disabled={currentStep === 1 || isSubmitting}
          className="px-6 py-2 rounded-md font-semibold text-sm border border-border text-foreground hover:bg-input disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Back
        </button>
        {currentStep < 4 ? (
          <button 
            onClick={nextStep}
            className="px-6 py-2 rounded-md font-semibold text-sm bg-primary text-card hover:bg-yellow-500 shadow-md transition-all active:scale-95"
          >
            Next Step
          </button>
        ) : (
          <button 
            onClick={submitForm}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2 rounded-md font-semibold text-sm bg-success text-white hover:bg-green-600 shadow-lg shadow-green-900/20 transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100"
          >
            {isSubmitting && <Loader2 size={16} className="animate-spin" />}
            {isSubmitting ? 'Saving...' : 'Submit Employee'}
          </button>
        )}
      </div>
    </div>
  );
}
