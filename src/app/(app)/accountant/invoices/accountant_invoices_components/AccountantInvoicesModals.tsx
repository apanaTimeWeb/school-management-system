"use client";
import React, { useState } from "react";
import { X, Plus, Trash2, Save, Printer, Download, FileSpreadsheet, Building2 } from "lucide-react";
import { useAccountantInvoicesStore } from "../accountant_invoices_store/useAccountantInvoicesStore";
import { formatCurrency } from "../accountant_invoices_utils/AccountantInvoicesConstants";
import clsx from "clsx";

export default function AccountantInvoicesModals() {
  const { 
    isGenerateModalOpen, setGenerateModalOpen,
    isViewModalOpen, setViewModalOpen,
    selectedInvoice
  } = useAccountantInvoicesStore();

  // Generate Invoice Form State
  const [studentId, setStudentId] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [feeItems, setFeeItems] = useState([{ desc: "", amount: "" }]);
  const [taxPercent, setTaxPercent] = useState("0");

  const addFeeItem = () => setFeeItems([...feeItems, { desc: "", amount: "" }]);
  const removeFeeItem = (index: number) => setFeeItems(feeItems.filter((_, i) => i !== index));
  const updateFeeItem = (index: number, field: string, value: string) => {
    const newItems: any = [...feeItems];
    newItems[index][field] = value;
    setFeeItems(newItems);
  };

  const subTotal = feeItems.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
  const taxAmount = subTotal * (Number(taxPercent) / 100);
  const grandTotal = subTotal + taxAmount;

  const handleGenerate = () => {
    alert("Invoice Generated Successfully!");
    setGenerateModalOpen(false);
  };

  return (
    <>
      {/* Generate Invoice Modal */}
      {isGenerateModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b border-border bg-primary/10 shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2"><Plus size={18} className="text-primary"/> Generate New Invoice</h3>
              <button onClick={() => setGenerateModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Student ID / Reg No</label>
                  <input 
                    type="text" 
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="e.g. STU-1001" 
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">Due Date</label>
                  <input 
                    type="date" 
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-semibold text-text-secondary">Fee Particulars</label>
                  <button onClick={addFeeItem} className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    <Plus size={12} /> Add Item
                  </button>
                </div>
                
                <div className="space-y-2">
                  {feeItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input 
                        type="text" 
                        value={item.desc}
                        onChange={(e) => updateFeeItem(idx, 'desc', e.target.value)}
                        placeholder="Description (e.g. Tuition Fee)" 
                        className="flex-1 bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                      />
                      <input 
                        type="number" 
                        value={item.amount}
                        onChange={(e) => updateFeeItem(idx, 'amount', e.target.value)}
                        placeholder="Amount" 
                        className="w-32 bg-bg-input border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:border-primary outline-none"
                      />
                      <button onClick={() => removeFeeItem(idx)} className="p-2 text-text-secondary hover:text-danger bg-bg-page border border-border rounded-lg" disabled={feeItems.length === 1}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border">
                <div className="w-64 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="font-bold text-text-primary">{formatCurrency(subTotal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Tax (%)</span>
                    <input 
                      type="number" 
                      value={taxPercent}
                      onChange={(e) => setTaxPercent(e.target.value)}
                      className="w-16 bg-bg-input border border-border rounded px-2 py-1 text-xs text-right text-text-primary outline-none"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-primary font-bold">Total Amount</span>
                    <span className="text-lg font-black text-primary">{formatCurrency(grandTotal)}</span>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-end gap-3 shrink-0">
              <button onClick={() => setGenerateModalOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">Cancel</button>
              <button onClick={handleGenerate} className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary-hover shadow-md transition-colors" disabled={subTotal <= 0}>
                <Save size={16} /> Generate & Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View PDF Invoice Modal */}
      {isViewModalOpen && selectedInvoice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[95vh]">
            <div className="flex justify-between items-center p-4 border-b border-border bg-bg-page shrink-0">
              <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                <FileSpreadsheet size={18} /> Invoice Preview
              </h3>
              <button onClick={() => setViewModalOpen(false)} className="text-text-secondary hover:text-danger transition-colors"><X size={20} /></button>
            </div>
            
            {/* INVOICE BODY (Printable Area) */}
            <div className="p-8 overflow-y-auto bg-white text-black min-h-[500px]">
              
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-gray-200 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">School ERP 360</h1>
                    <p className="text-xs text-gray-500 mt-1">123 Education Lane, Knowledge City</p>
                    <p className="text-xs text-gray-500">GSTIN: 29XXXXX1234X1Z5</p>
                  </div>
                </div>
                <div className="text-right">
                  <h2 className="text-3xl font-black text-gray-300 uppercase tracking-widest">INVOICE</h2>
                  <p className="text-sm font-bold text-gray-800 mt-2">{selectedInvoice.invoiceNo}</p>
                  <p className="text-xs text-gray-500">Issued: {selectedInvoice.issueDate}</p>
                </div>
              </div>

              {/* Bill To & Info */}
              <div className="flex justify-between mb-8">
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Billed To</h3>
                  <p className="text-lg font-bold text-gray-900">{selectedInvoice.studentName}</p>
                  <p className="text-sm text-gray-600 font-semibold">{selectedInvoice.studentId} • {selectedInvoice.className}</p>
                </div>
                <div className="text-right">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Payment Details</h3>
                  <p className="text-sm font-semibold text-gray-600">Due Date: <span className="font-bold text-red-600">{selectedInvoice.dueDate}</span></p>
                  <div className="mt-2 inline-block px-3 py-1 rounded-full border border-gray-300 text-xs font-bold text-gray-700 uppercase">
                    Status: {selectedInvoice.status}
                  </div>
                </div>
              </div>

              {/* Line Items */}
              <table className="w-full text-left mb-8 border-collapse">
                <thead>
                  <tr className="border-y-2 border-gray-200">
                    <th className="py-3 px-2 text-xs font-bold text-gray-500 uppercase">Item Description</th>
                    <th className="py-3 px-2 text-xs font-bold text-gray-500 uppercase text-right w-32">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {selectedInvoice.feeDetails.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-2 font-semibold text-gray-800">{item.description}</td>
                      <td className="py-3 px-2 font-bold text-gray-900 text-right">{formatCurrency(item.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Totals */}
              <div className="flex justify-end">
                <div className="w-64 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600 font-semibold px-2">
                    <span>Subtotal</span>
                    <span>{formatCurrency(selectedInvoice.subTotal)}</span>
                  </div>
                  {selectedInvoice.taxAmount > 0 && (
                    <div className="flex justify-between text-sm text-gray-600 font-semibold px-2">
                      <span>Tax</span>
                      <span>{formatCurrency(selectedInvoice.taxAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-black text-gray-900 border-t-2 border-gray-900 pt-3 px-2">
                    <span>Total Due</span>
                    <span>{formatCurrency(selectedInvoice.totalAmount)}</span>
                  </div>
                </div>
              </div>

              {selectedInvoice.notes && (
                <div className="mt-12 p-3 bg-gray-50 border-l-4 border-yellow-500 text-xs text-gray-600">
                  <strong>Notes:</strong> {selectedInvoice.notes}
                </div>
              )}

            </div>
            
            <div className="p-4 border-t border-border bg-bg-page flex justify-between shrink-0">
              <div className="flex gap-2">
                <button 
                  onClick={() => alert("Printing Invoice...")}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-bg-input text-text-primary border border-border rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Printer size={16} /> Print
                </button>
                <button 
                  onClick={() => alert("Downloading PDF...")}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-info/10 text-info border border-info/20 rounded-lg hover:bg-info/20 transition-colors"
                >
                  <Download size={16} /> Download PDF
                </button>
              </div>
              <button onClick={() => setViewModalOpen(false)} className="px-5 py-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
