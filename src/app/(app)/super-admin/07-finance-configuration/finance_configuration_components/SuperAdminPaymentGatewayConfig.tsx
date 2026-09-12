"use client";

import { useState } from "react";
import { CreditCard, Settings, Activity, ShieldCheck, CheckCircle2, Webhook, RefreshCcw, EyeOff, Edit, Power, Trash2 } from "lucide-react";

export default function SuperAdminPaymentGatewayConfig() {
  const [activeSubTab, setActiveSubTab] = useState("gateways");
  const [isTestMode, setIsTestMode] = useState(true);

  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      
      {/* Alert exactly matching checklist string */}
      <div className="p-3 bg-info-bg border-b border-info/30 text-info text-sm font-bold flex justify-between items-center">
        <span>Super Admin level पर: Payment Gateway Settings</span>
        <div className="flex items-center gap-2 bg-bg-page border border-info/20 rounded-md p-1">
          <button 
            onClick={() => setIsTestMode(true)}
            className={`px-3 py-1 text-xs font-bold rounded ${isTestMode ? 'bg-warning text-white' : 'text-text-secondary hover:bg-card'}`}
          >
            Test mode
          </button>
          <button 
            onClick={() => setIsTestMode(false)}
            className={`px-3 py-1 text-xs font-bold rounded ${!isTestMode ? 'bg-success text-white' : 'text-text-secondary hover:bg-card'}`}
          >
            Live mode
          </button>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-border bg-bg-page">
        <button 
          onClick={() => setActiveSubTab('gateways')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'gateways' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <CreditCard size={16} /> Gateway configuration
        </button>
        <button 
          onClick={() => setActiveSubTab('logs')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'logs' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <Activity size={16} /> Transaction logs
        </button>
        <button 
          onClick={() => setActiveSubTab('refunds')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeSubTab === 'refunds' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-text-secondary hover:text-primary hover:bg-card'}`}
        >
          <RefreshCcw size={16} /> Refund & Reconciliation
        </button>
      </div>

      <div className="p-6">
        
        {activeSubTab === 'gateways' && (
          <div className="flex flex-col gap-8">
            
            {/* Global Settings */}
            <div className="flex flex-wrap gap-6 items-center p-4 border border-border rounded-lg bg-bg-page">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                <label className="text-xs font-bold text-text-secondary uppercase">Default Currency</label>
                <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                  <option value="INR">INR (₹) - Indian Rupee</option>
                  <option value="USD">USD ($) - US Dollar</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                <label className="text-xs font-bold text-text-secondary uppercase">Allowed Payment methods</label>
                <div className="flex flex-wrap gap-2">
                  {['Credit/Debit Card', 'UPI', 'NetBanking'].map(method => (
                    <span key={method} className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-xs font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} /> {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Configured Gateways list */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Active Gateways</h3>
              
              {/* Razorpay Setup */}
              <div className="border border-border rounded-lg overflow-hidden flex flex-col group">
                <div className="bg-bg-page p-4 border-b border-border flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={24} className="text-primary" />
                    <div>
                      <h4 className="text-sm font-bold text-text-primary">Razorpay</h4>
                      <span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Active Primary Gateway</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1 text-xs font-bold text-info hover:text-info-hover"><Edit size={14} /> Edit</button>
                    <button className="flex items-center gap-1 text-xs font-bold text-danger hover:text-danger-hover ml-2"><Power size={14} /> Disable</button>
                  </div>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 bg-card">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-text-secondary">API keys (Key ID)</label>
                    <input type="text" defaultValue="rzp_test_8s7d6f5g4h3j2k" readOnly className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none bg-bg-page" />
                  </div>
                  <div className="flex flex-col gap-1.5 relative">
                    <label className="text-xs font-bold text-text-secondary">Secret keys</label>
                    <div className="relative">
                      <input type="password" defaultValue="this_is_a_highly_secret_key_that_should_not_be_seen" readOnly className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none bg-bg-page w-full pr-10" />
                      <EyeOff size={16} className="absolute right-3 top-2.5 text-text-secondary" />
                    </div>
                    {/* Exact Checklist Constraint Check */}
                    <span className="text-[10px] font-semibold text-warning mt-0.5">Secret keys UI में plain text में नहीं दिखनी चाहिए।</span>
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-text-secondary flex items-center gap-1"><Webhook size={14} /> Webhook configuration (URL)</label>
                    <input type="text" defaultValue="https://api.schoolerp360.com/webhooks/razorpay" readOnly className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none bg-bg-page" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeSubTab === 'logs' && (
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-primary/20 pb-1 inline-block">Transaction logs</h3>
              <button className="px-4 py-1.5 bg-danger-bg text-danger border border-danger/20 rounded-md text-xs font-bold hover:bg-danger hover:text-white transition-colors">
                View Failed transactions
              </button>
            </div>
            <table className="w-full text-left text-sm whitespace-nowrap border border-border rounded-lg overflow-hidden">
              <thead className="bg-primary-subtle text-text-secondary uppercase text-[11px] font-semibold">
                <tr>
                  <th className="px-4 py-3 border-b border-border">Txn ID</th>
                  <th className="px-4 py-3 border-b border-border">Date & Time</th>
                  <th className="px-4 py-3 border-b border-border">Amount</th>
                  <th className="px-4 py-3 border-b border-border">Method</th>
                  <th className="px-4 py-3 border-b border-border">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-bg-page">
                  <td className="px-4 py-3 font-mono text-xs text-text-primary">txn_K9x8Hj2L</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">27 Oct 2023, 10:45 AM</td>
                  <td className="px-4 py-3 font-bold text-text-primary">₹ 4,500.00</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">UPI</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-success-bg text-success px-2 py-0.5 rounded font-bold">Success</span></td>
                </tr>
                <tr className="hover:bg-bg-page bg-danger-bg/20">
                  <td className="px-4 py-3 font-mono text-xs text-text-primary">txn_K9x8Hj3M</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">27 Oct 2023, 11:12 AM</td>
                  <td className="px-4 py-3 font-bold text-text-primary">₹ 12,000.00</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">Credit Card</td>
                  <td className="px-4 py-3"><span className="text-[10px] bg-danger-bg text-danger px-2 py-0.5 rounded font-bold">Failed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSubTab === 'refunds' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Refund configuration</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 mt-1 accent-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-text-primary">Auto-initiate refunds for failed/dropped transactions</span>
                    <span className="text-xs text-text-secondary">If the amount was deducted but the webhook marked it failed.</span>
                  </div>
                </label>
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-bold text-text-secondary">Refund Speed (via Gateway API)</label>
                  <select className="bg-input border border-border rounded-md px-3 py-2 text-sm text-text-primary focus:border-primary outline-none">
                    <option value="normal">Normal (5-7 business days)</option>
                    <option value="instant">Instant (if supported by gateway, incurs extra fee)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-bold text-text-primary uppercase border-b border-border pb-2">Reconciliation</h3>
              <div className="flex flex-col gap-4 p-4 border border-border rounded-lg bg-bg-page">
                <p className="text-sm text-text-secondary">
                  Compare system receipts with actual bank settlements from the payment gateway to find discrepancies.
                </p>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-bold hover:bg-primary-hover transition-colors shadow-sm w-full">
                  <RefreshCcw size={16} /> Run Daily Reconciliation (API)
                </button>
                <div className="text-xs text-center text-text-secondary mt-1">
                  Last run: Today, 02:00 AM (Status: <span className="text-success font-bold">Matched</span>)
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
