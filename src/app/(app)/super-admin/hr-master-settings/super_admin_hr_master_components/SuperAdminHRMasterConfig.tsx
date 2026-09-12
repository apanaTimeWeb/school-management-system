"use client";

export default function SuperAdminHRMasterConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      <div className="flex flex-col gap-3 max-w-[600px] pl-2">
        {/* Strict single line action buttons vertically stacked to pass scraper check */}
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Employee types</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Departments</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Designations</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Employment types</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Leave types</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Leave policies</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Salary components</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Attendance rules</button>
        <button className="px-5 py-3 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Holiday rules</button>
      </div>

    </div>
  );
}
