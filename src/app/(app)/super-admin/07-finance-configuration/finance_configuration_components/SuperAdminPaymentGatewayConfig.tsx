"use client";

export default function SuperAdminPaymentGatewayConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border border-info/30 rounded-md text-info text-sm font-bold w-fit">
        Super Admin level पर:
      </div>
      
      <div className="flex flex-col gap-5 mt-[-10px]">
        <div className="flex flex-col gap-4 max-w-[600px] pl-2">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Gateway configuration</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">API keys</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Secret keys</label>
            <input type="password" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
            <span className="text-[10px] font-semibold text-warning mt-1">Secret keys UI में plain text में नहीं दिखनी चाहिए।</span>
          </div>

          {/* Mode Actions */}
          <div className="flex flex-col gap-3 mt-2">
            <button className="px-5 py-2 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Test mode</button>
            <button className="px-5 py-2 bg-success-bg text-success border border-success/20 rounded-md text-sm font-bold text-left hover:bg-success hover:text-white transition-colors w-fit">Live mode</button>
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <label className="text-xs font-bold text-text-secondary">Currency</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Payment methods</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Webhook configuration</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          {/* Log Actions */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors w-fit">Transaction logs</button>
            <button className="px-5 py-2.5 bg-danger-bg text-danger border border-danger/20 rounded-md text-sm font-bold text-left hover:bg-danger hover:text-white transition-colors w-fit">Failed transactions</button>
            <button className="px-5 py-2.5 bg-info-bg text-info border border-info/20 rounded-md text-sm font-bold text-left hover:bg-info hover:text-white transition-colors w-fit">Refund configuration</button>
            <button className="px-5 py-2.5 bg-warning-bg text-warning border border-warning/20 rounded-md text-sm font-bold text-left hover:bg-warning hover:text-white transition-colors w-fit">Reconciliation</button>
          </div>

        </div>
      </div>

    </div>
  );
}
