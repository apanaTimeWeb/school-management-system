"use client";

import { useState } from "react";
import { Plug, CreditCard, MessageSquare, Mail, Fingerprint, Map, Cloud, Calculator, Video, Eye, EyeOff, Activity, Link, CheckCircle2, XCircle } from "lucide-react";

export default function SuperAdminIntegrationManagementConfig() {
  const [activeTab, setActiveTab] = useState("communication");
  const [showSecret, setShowSecret] = useState(false);

  // Reusable Integration Card Component
  const IntegrationCard = ({ title, icon: Icon, status, provider }: any) => (
    <div className="flex flex-col gap-4 p-5 bg-bg-page border border-border rounded-xl group hover:border-primary transition-colors relative overflow-hidden">
      {status === 'connected' && <div className="absolute top-0 right-0 w-2 h-full bg-success"></div>}
      {status === 'disconnected' && <div className="absolute top-0 right-0 w-2 h-full bg-border"></div>}
      {status === 'error' && <div className="absolute top-0 right-0 w-2 h-full bg-danger"></div>}

      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
            <Icon size={24} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-text-primary">{title}</h4>
            <span className="text-xs font-semibold text-text-secondary">{provider}</span>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" defaultChecked={status === 'connected'} className="sr-only peer" />
          <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-text-secondary uppercase">API Key / Client ID</label>
          <input type="text" defaultValue="sk_test_51Nx..." className="bg-input border border-border rounded-md px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none" />
        </div>
        <div className="flex flex-col gap-1.5 relative">
          <label className="text-[10px] font-bold text-text-secondary uppercase">Secret Key / Webhook Secret</label>
          <div className="relative">
            <input type={showSecret ? "text" : "password"} defaultValue="whsec_8849fjd93..." className="bg-input border border-border rounded-md px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none w-full pr-8" />
            <button onClick={() => setShowSecret(!showSecret)} className="absolute right-2 top-1.5 text-text-secondary hover:text-primary">
              {showSecret ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-text-secondary uppercase">Endpoint URL (Optional)</label>
          <input type="text" placeholder="https://api.provider.com/v1" className="bg-input border border-border rounded-md px-3 py-1.5 text-xs text-text-primary focus:border-primary outline-none" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-page border border-border hover:border-primary text-text-primary rounded-md text-xs font-bold transition-colors">
            <Link size={12} /> Test Connection
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-page border border-border hover:border-primary text-text-primary rounded-md text-xs font-bold transition-colors">
            <Activity size={12} /> View Logs
          </button>
        </div>
        {status === 'connected' && <span className="flex items-center gap-1 text-[10px] font-bold text-success"><CheckCircle2 size={12} /> OK</span>}
        {status === 'error' && <span className="flex items-center gap-1 text-[10px] font-bold text-danger"><XCircle size={12} /> Error</span>}
      </div>
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex items-center gap-2">
        <Plug size={16} /> Integration Management (Third-Party Services)
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveTab('communication')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'communication' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <MessageSquare size={16} /> Communication
        </button>
        <button 
          onClick={() => setActiveTab('finance')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'finance' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <CreditCard size={16} /> Finance & Accounts
        </button>
        <button 
          onClick={() => setActiveTab('hardware')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'hardware' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Fingerprint size={16} /> Hardware & Tracking
        </button>
        <button 
          onClick={() => setActiveTab('cloud')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeTab === 'cloud' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Cloud size={16} /> Cloud & E-Learning
        </button>
      </div>

      <div className="p-6">
        
        {activeTab === 'communication' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <IntegrationCard title="SMS Gateway" provider="Twilio / Msg91" icon={MessageSquare} status="connected" />
            <IntegrationCard title="Email Service (SMTP/API)" provider="SendGrid / AWS SES" icon={Mail} status="connected" />
            <IntegrationCard title="WhatsApp Business API" provider="Meta / WATI" icon={MessageSquare} status="disconnected" />
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <IntegrationCard title="Payment Gateway" provider="Razorpay / Stripe" icon={CreditCard} status="connected" />
            <IntegrationCard title="Accounting Software" provider="Tally / QuickBooks" icon={Calculator} status="error" />
          </div>
        )}

        {activeTab === 'hardware' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <IntegrationCard title="Biometric System" provider="eSSL / Matrix" icon={Fingerprint} status="connected" />
            <IntegrationCard title="GPS Tracking" provider="TrackMate / GeoLocate" icon={Map} status="disconnected" />
          </div>
        )}

        {activeTab === 'cloud' && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <IntegrationCard title="Google Services" provider="Google Workspace / SSO" icon={Cloud} status="connected" />
            <IntegrationCard title="Cloud Storage" provider="AWS S3 / Google Drive" icon={Cloud} status="connected" />
            <IntegrationCard title="Online Meeting / E-Learning" provider="Zoom / MS Teams / Moodle" icon={Video} status="disconnected" />
          </div>
        )}

      </div>
    </div>
  );
}
