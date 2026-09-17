"use client";

import React, { useState, useEffect } from 'react';
import { 
  Wallet, ChevronDown, CheckCircle2, CreditCard, History, 
  Download, FileText, AlertCircle, RefreshCw, Smartphone, 
  Building2, ShieldCheck, FileCheck2
} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

// Mock Data
const childrenList = [
  { id: 'c1', name: 'Aarav Kumar', class: 'Class 5', section: 'A', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=b6e3f4' },
  { id: 'c2', name: 'Riya Kumar', class: 'Class 8', section: 'B', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=f4b6e3' },
];

const feeData = {
  'c1': {
    dues: [
      { id: 1, type: 'Tuition Fee - Q3', amount: 15000, dueDate: '15 Oct, 2023', minPartial: 5000, hasInstallment: true },
      { id: 2, type: 'Transport Fee - Oct', amount: 2500, dueDate: '10 Oct, 2023', minPartial: 2500, hasInstallment: false },
      { id: 3, type: 'Library Fine', amount: 150, dueDate: '30 Sep, 2023', minPartial: 150, hasInstallment: false, isOverdue: true },
    ],
    history: [
      { id: 'TXN89234', type: 'Tuition Fee - Q2', amount: 15000, date: '10 Jul, 2023', status: 'Success' },
      { id: 'TXN81231', type: 'Transport Fee - Jul', amount: 2500, date: '05 Jul, 2023', status: 'Success' },
    ]
  },
  'c2': {
    dues: [
      { id: 4, type: 'Tuition Fee - Q3', amount: 18000, dueDate: '15 Oct, 2023', minPartial: 6000, hasInstallment: true },
      { id: 5, type: 'Lab Fee - Annual', amount: 4000, dueDate: '30 Oct, 2023', minPartial: 2000, hasInstallment: false },
    ],
    history: [
      { id: 'TXN89235', type: 'Tuition Fee - Q2', amount: 18000, date: '10 Jul, 2023', status: 'Success' },
    ]
  }
};

export default function FeesPage() {
  const [selectedChildId, setSelectedChildId] = useState(childrenList[0].id);
  const [showChildSwitcher, setShowChildSwitcher] = useState(false);
  
  const [activeTab, setActiveTab] = useState<'pay' | 'history'>('pay');
  const [selectedFee, setSelectedFee] = useState<any>(null);
  
  const [paymentMode, setPaymentMode] = useState<'full' | 'installment' | 'partial'>('full');
  const [partialAmount, setPartialAmount] = useState<string>('');
  
  const [paymentState, setPaymentState] = useState<'idle' | 'processing' | 'verifying' | 'success' | 'failed'>('idle');
  const [transactionId, setTransactionId] = useState('');

  const childInfo = childrenList.find(c => c.id === selectedChildId)!;
  const currentData = feeData[selectedChildId as keyof typeof feeData];

  // Reset states when child changes
  useEffect(() => {
    setSelectedFee(null);
    setPaymentState('idle');
    setPaymentMode('full');
    setPartialAmount('');
  }, [selectedChildId]);

  const calculateAmountToPay = () => {
    if (!selectedFee) return 0;
    if (paymentMode === 'full') return selectedFee.amount;
    if (paymentMode === 'installment') return Math.round(selectedFee.amount / 3); // Mock 3 installments
    if (paymentMode === 'partial') return Number(partialAmount) || 0;
    return 0;
  };

  const handleProcessPayment = () => {
    const amount = calculateAmountToPay();
    if (amount <= 0) return alert('Invalid amount');
    if (paymentMode === 'partial' && amount < selectedFee.minPartial) return alert(`Minimum partial payment is ₹${selectedFee.minPartial}`);

    // Step 1: Open mock gateway
    setPaymentState('processing');
    
    // Simulate Gateway Processing Delay
    setTimeout(() => {
      // Step 2: Gateway returns to app, app triggers SERVER-SIDE verification
      // "Payment status server-side verify होना चाहिए; केवल frontend success message पर भरोसा नहीं करना है"
      setPaymentState('verifying');
      
      // Simulate server-to-server verification delay
      setTimeout(() => {
        setTransactionId(`TXN${Math.floor(Math.random() * 1000000)}`);
        setPaymentState('success');
      }, 2500);
      
    }, 2000);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header & Child Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">Online Fee Payment</h1>
          <p className="text-text-secondary text-sm mt-1">Pay your dues securely and download receipts.</p>
        </div>
        
        <div className="relative z-30">
          <button 
            onClick={() => setShowChildSwitcher(!showChildSwitcher)}
            className="flex items-center gap-3 px-4 py-2 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 transition-colors focus:outline-none"
          >
            <img src={childInfo.avatar} alt={childInfo.name} className="w-8 h-8 rounded-full border border-pink-300" />
            <div className="text-left">
              <p className="text-sm font-bold text-pink-700 leading-none">{childInfo.name}</p>
              <p className="text-[10px] font-bold text-pink-500 uppercase mt-1">{childInfo.class} - {childInfo.section}</p>
            </div>
            <ChevronDown size={16} className={clsx("text-pink-600 transition-transform", showChildSwitcher && "rotate-180")} />
          </button>
          
          {showChildSwitcher && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-border rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.15s_ease-out]">
              {childrenList.map((child) => (
                <button
                  key={child.id}
                  onClick={() => { setSelectedChildId(child.id); setShowChildSwitcher(false); }}
                  className={clsx(
                    "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-page",
                    selectedChildId === child.id ? "bg-pink-50 border-l-4 border-pink-500" : "border-l-4 border-transparent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <img src={child.avatar} alt={child.name} className="w-8 h-8 rounded-full bg-page border border-border" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{child.name}</p>
                      <p className="text-xs text-text-secondary">{child.class} - {child.section}</p>
                    </div>
                  </div>
                  {selectedChildId === child.id && <CheckCircle2 size={16} className="text-pink-500" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left/Main Column: Fee Selection & History */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            
            {/* Tabs */}
            <div className="flex border-b border-border bg-page/30">
              <button 
                onClick={() => { setActiveTab('pay'); setPaymentState('idle'); }}
                className={clsx(
                  "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
                  activeTab === 'pay' ? "border-indigo-500 text-indigo-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
                )}
              >
                <Wallet size={18} /> Pending Dues
              </button>
              <button 
                onClick={() => setActiveTab('history')}
                className={clsx(
                  "flex-1 flex items-center justify-center gap-2 py-4 font-bold text-sm transition-all border-b-2",
                  activeTab === 'history' ? "border-emerald-500 text-emerald-600 bg-white" : "border-transparent text-text-secondary hover:text-text-primary"
                )}
              >
                <History size={18} /> Payment History
              </button>
            </div>

            {activeTab === 'pay' ? (
              <div className="p-6">
                
                {paymentState === 'idle' ? (
                  <>
                    <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wider">Select Fee to Pay</h3>
                    
                    {currentData.dues.length === 0 ? (
                       <div className="text-center py-10">
                         <CheckCircle2 size={40} className="mx-auto text-emerald-500 mb-3" />
                         <p className="font-bold text-text-primary">No Pending Dues!</p>
                       </div>
                    ) : (
                      <div className="space-y-3">
                        {currentData.dues.map((fee) => (
                          <div 
                            key={fee.id}
                            onClick={() => { setSelectedFee(fee); setPaymentMode('full'); setPartialAmount(''); }}
                            className={clsx(
                              "p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all",
                              selectedFee?.id === fee.id 
                                ? "border-indigo-500 bg-indigo-50 shadow-sm" 
                                : "border-border bg-white hover:border-indigo-300 hover:bg-page"
                            )}
                          >
                             <div className="flex items-center gap-4">
                               <div className={clsx(
                                 "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                                 selectedFee?.id === fee.id ? "border-indigo-500" : "border-border"
                               )}>
                                  {selectedFee?.id === fee.id && <div className="w-3 h-3 rounded-full bg-indigo-500"></div>}
                               </div>
                               <div>
                                 <h4 className="font-bold text-text-primary">{fee.type}</h4>
                                 <div className="flex items-center gap-3 mt-1">
                                   <p className="text-xs text-text-secondary">Due: <span className={clsx("font-bold", (fee as any).isOverdue ? "text-red-500" : "")}>{fee.dueDate}</span></p>
                                   {(fee as any).isOverdue && <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-[10px] font-bold">Overdue</span>}
                                 </div>
                               </div>
                             </div>
                             <div className="text-right">
                               <p className="text-lg font-extrabold text-indigo-700">₹{fee.amount.toLocaleString()}</p>
                             </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  
                  /* Payment Processing UI */
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-[fadeIn_0.3s_ease-out]">
                     
                     {paymentState === 'processing' && (
                       <>
                         <div className="relative w-20 h-20 mb-6">
                           <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                           <div className="absolute inset-0 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
                           <Smartphone size={24} className="absolute inset-0 m-auto text-indigo-500 animate-pulse" />
                         </div>
                         <h3 className="text-xl font-bold text-text-primary mb-2">Awaiting Payment...</h3>
                         <p className="text-sm text-text-secondary max-w-xs mx-auto">Please complete the payment on the secure gateway window.</p>
                       </>
                     )}

                     {paymentState === 'verifying' && (
                       <>
                         <div className="relative w-20 h-20 mb-6">
                           <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                           <div className="absolute inset-0 border-4 border-teal-500 rounded-full border-r-transparent animate-spin"></div>
                           <ShieldCheck size={24} className="absolute inset-0 m-auto text-teal-500 animate-pulse" />
                         </div>
                         <h3 className="text-xl font-bold text-text-primary mb-2">Verifying Payment</h3>
                         <p className="text-sm text-text-secondary max-w-xs mx-auto text-teal-600 font-semibold bg-teal-50 px-3 py-1 rounded-full border border-teal-100 mt-2">
                           Secure Server-Side Verification in progress...
                         </p>
                       </>
                     )}

                     {paymentState === 'success' && (
                       <>
                         <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-inner border-2 border-emerald-500">
                           <CheckCircle2 size={40} className="text-emerald-500" />
                         </div>
                         <h3 className="text-2xl font-extrabold text-emerald-600 mb-2">Payment Successful!</h3>
                         <p className="text-sm text-text-secondary mb-1">Your payment of <strong>₹{calculateAmountToPay().toLocaleString()}</strong> has been received.</p>
                         <p className="text-xs font-bold text-text-tertiary mb-8">Transaction ID: {transactionId}</p>
                         
                         <div className="flex gap-4">
                           <button onClick={() => setPaymentState('idle')} className="px-6 py-2 border border-border rounded-xl font-bold text-sm text-text-primary hover:bg-page transition-colors">
                             Pay Another Fee
                           </button>
                           <button className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors shadow-sm">
                             <Download size={16}/> Download Receipt
                           </button>
                         </div>
                       </>
                     )}

                  </div>
                )}
              </div>
            ) : (
              
              /* Payment History */
              <div className="p-0">
                <div className="divide-y divide-border">
                  {currentData.history.length === 0 ? (
                    <div className="p-8 text-center text-text-tertiary font-semibold">No payment history found.</div>
                  ) : (
                    currentData.history.map((hist, idx) => (
                      <div key={idx} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-page/30 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-xl flex items-center justify-center">
                            <FileCheck2 size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-text-primary">{hist.type}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-semibold text-text-secondary">{hist.date}</span>
                              <span className="w-1 h-1 rounded-full bg-border"></span>
                              <span className="text-xs font-bold text-text-tertiary">ID: {hist.id}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                           <div className="text-left md:text-right">
                             <p className="text-sm font-extrabold text-emerald-600">₹{hist.amount.toLocaleString()}</p>
                             <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 mt-0.5">{hist.status}</p>
                           </div>
                           <button className="flex items-center justify-center p-2 bg-page border border-border rounded-lg text-text-secondary hover:text-indigo-600 transition-colors">
                             <Download size={16} />
                           </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

            )}
          </div>
          
        </div>

        {/* Right Column: Checkout Panel */}
        <div className="space-y-6">
          
          <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden sticky top-6">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-900 px-6 py-4 text-white">
              <h3 className="font-bold flex items-center gap-2"><CreditCard size={18}/> Checkout Details</h3>
            </div>
            
            <div className="p-6">
              {!selectedFee || paymentState !== 'idle' ? (
                <div className="text-center py-8">
                   <div className="w-16 h-16 bg-page border border-dashed border-border rounded-full flex items-center justify-center mx-auto mb-3">
                     <Wallet size={24} className="text-text-tertiary opacity-50" />
                   </div>
                   <p className="text-sm text-text-secondary">Please select a fee from the list to view payment options.</p>
                </div>
              ) : (
                <div className="space-y-6 animate-[fadeIn_0.2s_ease-out]">
                  
                  {/* Payment Modes */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-wider">Select Payment Mode</p>
                    
                    <label className={clsx("flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-colors", paymentMode === 'full' ? "bg-indigo-50 border-indigo-200" : "bg-white hover:bg-page")}>
                      <input type="radio" name="payMode" checked={paymentMode === 'full'} onChange={() => setPaymentMode('full')} className="mt-1 accent-indigo-600" />
                      <div>
                        <p className={clsx("text-sm font-bold", paymentMode === 'full' ? "text-indigo-800" : "text-text-primary")}>Pay Full Amount</p>
                        <p className="text-xs text-text-secondary mt-0.5">₹{selectedFee.amount.toLocaleString()}</p>
                      </div>
                    </label>

                    {selectedFee.hasInstallment && (
                      <label className={clsx("flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-colors", paymentMode === 'installment' ? "bg-indigo-50 border-indigo-200" : "bg-white hover:bg-page")}>
                        <input type="radio" name="payMode" checked={paymentMode === 'installment'} onChange={() => setPaymentMode('installment')} className="mt-1 accent-indigo-600" />
                        <div>
                          <p className={clsx("text-sm font-bold", paymentMode === 'installment' ? "text-indigo-800" : "text-text-primary")}>Pay in Installments</p>
                          <p className="text-xs text-text-secondary mt-0.5">3 EMIs of ₹{Math.round(selectedFee.amount / 3).toLocaleString()}</p>
                        </div>
                      </label>
                    )}

                    <label className={clsx("flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-colors", paymentMode === 'partial' ? "bg-indigo-50 border-indigo-200" : "bg-white hover:bg-page")}>
                      <input type="radio" name="payMode" checked={paymentMode === 'partial'} onChange={() => setPaymentMode('partial')} className="mt-1 accent-indigo-600" />
                      <div className="w-full">
                        <p className={clsx("text-sm font-bold", paymentMode === 'partial' ? "text-indigo-800" : "text-text-primary")}>Partial Payment</p>
                        {paymentMode === 'partial' && (
                          <div className="mt-2 relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary font-bold">₹</span>
                            <input 
                              type="number" 
                              placeholder={`Min ₹${selectedFee.minPartial}`}
                              value={partialAmount}
                              onChange={(e) => setPartialAmount(e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 border border-indigo-200 rounded-lg text-sm font-bold focus:outline-none focus:ring-2 ring-indigo-500/20"
                            />
                          </div>
                        )}
                      </div>
                    </label>

                  </div>

                  {/* Summary */}
                  <div className="bg-page p-4 rounded-xl space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Subtotal</span>
                      <span className="font-bold text-text-primary">₹{calculateAmountToPay().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Convenience Fee</span>
                      <span className="font-bold text-text-primary">₹0</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2 mt-2">
                      <span className="font-bold text-text-primary">Total Payable</span>
                      <span className="font-extrabold text-indigo-700 text-lg">₹{calculateAmountToPay().toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <button 
                    onClick={handleProcessPayment}
                    className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    Proceed to Pay <ChevronDown className="-rotate-90" size={18} />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-text-tertiary">
                     <ShieldCheck size={20} className="text-emerald-500 opacity-70" />
                     <Building2 size={20} className="opacity-70" />
                     <CreditCard size={20} className="opacity-70" />
                  </div>
                  
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
