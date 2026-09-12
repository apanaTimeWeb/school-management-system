"use client";

export default function SuperAdminEmailConfig() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col gap-8">
      
      {/* SMTP Section */}
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-bold text-text-primary border-b border-border pb-2">SMTP</h2>
        
        <div className="flex flex-col gap-4 max-w-[600px] pl-2">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Sender name</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Sender email</label>
            <input type="email" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Host</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Port</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Encryption</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Username</label>
            <input type="text" className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-text-secondary">Password</label>
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
