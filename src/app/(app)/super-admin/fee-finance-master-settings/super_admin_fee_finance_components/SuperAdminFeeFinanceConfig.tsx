"use client";

export default function SuperAdminFeeFinanceConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        Super Admin master configuration कर सके:
      </div>
      
      <div className="flex flex-col gap-5 mt-[-10px]">
        <div className="flex flex-col gap-3 max-w-[600px] pl-2">
          
          {/* Menu Action Buttons ordered exactly as list vertically with NO whitespace */}
          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Fee types</button>
          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Payment modes</button>
          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Fine rules</button>
          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Discount types</button>
          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Scholarship types</button>
          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Refund rules</button>

          <div className="flex flex-col gap-1.5 mt-2">
            <label className="text-xs font-bold text-text-secondary">Receipt numbering</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5 mb-2">
            <label className="text-xs font-bold text-text-secondary">Invoice numbering</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Financial categories</button>
          <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Tax configuration where applicable</button>

        </div>
      </div>

    </div>
  );
}
