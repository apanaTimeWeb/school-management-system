"use client";

export default function SuperAdminEmailConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* SMTP Section */}
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-bold text-text-primary uppercase border-b border-border pb-2">SMTP</h2>
        
        <div className="flex flex-col gap-4 max-w-[600px] pl-2">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Sender name</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" placeholder="e.g. ApanaTime ERP" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Sender email</label>
            <input type="email" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" placeholder="e.g. no-reply@apanatime.com" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Host</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" placeholder="smtp.gmail.com" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Port</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" placeholder="465 or 587" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Encryption</label>
            <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
              <option>SSL</option>
              <option>TLS</option>
              <option>None</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Username</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary uppercase">Password</label>
            <input type="password" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          {/* Action Buttons ordered exactly as list vertically */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="px-5 py-2.5 bg-success text-white rounded-md text-sm font-bold text-left hover:bg-success/90 transition-colors shadow-sm">
              Test email
            </button>
            <button className="px-5 py-2.5 bg-bg-page text-text-secondary border border-border rounded-md text-sm font-bold text-left hover:bg-card hover:text-primary transition-colors">
              Email logs
            </button>
            <button className="px-5 py-2.5 bg-warning-bg text-warning border border-warning/20 rounded-md text-sm font-bold text-left hover:bg-warning hover:text-white transition-colors">
              Failed email retry
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
