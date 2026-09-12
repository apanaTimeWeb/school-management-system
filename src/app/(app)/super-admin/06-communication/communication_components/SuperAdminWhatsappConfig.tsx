"use client";

export default function SuperAdminWhatsappConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        यदि school WhatsApp communication use करता है:
      </div>
      
      <div className="flex flex-col gap-5 mt-[-10px]">
        <div className="flex flex-col gap-4 max-w-[600px] pl-2">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Provider/API</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Business account configuration</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Templates</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Variables</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          {/* Action Buttons ordered exactly as list vertically with NO whitespace */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Message logs</button>
            <button className="px-5 py-2.5 bg-success-bg text-success border border-success/20 rounded-md text-sm font-bold text-left hover:bg-success hover:text-white transition-colors w-fit">Delivery status</button>
            <button className="px-5 py-2.5 bg-danger-bg text-danger border border-danger/20 rounded-md text-sm font-bold text-left hover:bg-danger hover:text-white transition-colors w-fit">Failed messages</button>
            <button className="px-5 py-2.5 bg-warning-bg text-warning border border-warning/20 rounded-md text-sm font-bold text-left hover:bg-warning hover:text-white transition-colors w-fit">Retry</button>
          </div>

        </div>
      </div>

    </div>
  );
}
