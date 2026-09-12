"use client";

export default function SuperAdminApprovalWorkflowConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        Super Admin define कर सके:
      </div>

      <div className="flex flex-col items-center bg-bg-page border border-border rounded-md p-4 w-fit mt-[-10px]">
        <div className="text-sm font-bold text-text-primary">Request</div>
        <div className="text-sm font-bold text-text-secondary whitespace-pre">   ↓</div>
        <div className="text-sm font-bold text-text-primary">Teacher/Staff</div>
        <div className="text-sm font-bold text-text-secondary whitespace-pre">   ↓</div>
        <div className="text-sm font-bold text-text-primary">Admin</div>
        <div className="text-sm font-bold text-text-secondary whitespace-pre">   ↓</div>
        <div className="text-sm font-bold text-text-primary">Principal</div>
        <div className="text-sm font-bold text-text-secondary whitespace-pre">   ↓</div>
        <div className="text-sm font-bold text-text-primary">Approved</div>
      </div>

      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit mt-[-10px]">
        Applicable to:
      </div>

      <div className="flex flex-col gap-5 max-w-[600px] pl-2 mt-[-10px]">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Leave</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Fee concession</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Refund</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Purchase</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Admission</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">TC</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Certificate</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Student transfer</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-text-secondary">Expense</label>
          <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
        </div>
      </div>

    </div>
  );
}
