"use client";

import React, { useState } from "react";
import {
  Building2,
  Search,
  Plus,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  XCircle,
  FileText,
  Banknote,
  MoreVertical,
  X,
  CreditCard,
  Briefcase,
  User
} from "lucide-react";

interface Invoice {
  id: string;
  invoiceNo: string;
  date: string;
  quantity: number;
  totalAmount: number;
  status: 'Paid' | 'Unpaid' | 'Partial';
}

interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  status: 'Active' | 'Inactive';
  outstandingAmount: number;
  totalPurchases: number;
  invoices: Invoice[];
}

const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: "SUP-001",
    name: "Oxford University Press India",
    contactPerson: "Mr. Rajeev Sharma",
    phone: "+91 9876543210",
    email: "sales.india@oup.com",
    address: "YMCA Library Building, New Delhi - 110001",
    status: "Active",
    outstandingAmount: 15500,
    totalPurchases: 250000,
    invoices: [
      { id: "INV-101", invoiceNo: "OUP-2023-992", date: "2023-11-01", quantity: 50, totalAmount: 45000, status: "Paid" },
      { id: "INV-102", invoiceNo: "OUP-2023-1005", date: "2023-11-15", quantity: 15, totalAmount: 15500, status: "Unpaid" }
    ]
  },
  {
    id: "SUP-002",
    name: "Bharti Bhawan Publishers",
    contactPerson: "Amit Gupta",
    phone: "+91 9123456789",
    email: "contact@bhartibhawan.in",
    address: "Thakurbari Road, Kadamkuan, Patna - 800003",
    status: "Active",
    outstandingAmount: 0,
    totalPurchases: 85000,
    invoices: [
      { id: "INV-201", invoiceNo: "BB-441", date: "2023-10-05", quantity: 25, totalAmount: 11250, status: "Paid" }
    ]
  },
  {
    id: "SUP-003",
    name: "Penguin Random House",
    contactPerson: "Sneha Roy",
    phone: "+91 9988776655",
    email: "orders@penguin.co.in",
    address: "7th Floor, Infinity Tower C, Gurgaon - 122002",
    status: "Inactive",
    outstandingAmount: 5000,
    totalPurchases: 45000,
    invoices: [
      { id: "INV-301", invoiceNo: "PRH-22-09", date: "2022-09-12", quantity: 10, totalAmount: 5000, status: "Unpaid" }
    ]
  }
];

export default function SuppliersManagement() {
  const [suppliers, setSuppliers] = useState<Supplier[]>(MOCK_SUPPLIERS);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modals
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  // New Supplier Form
  const [newSupplier, setNewSupplier] = useState<Partial<Supplier>>({ status: 'Active' });

  // Payment Form
  const [paymentAmount, setPaymentAmount] = useState<number | "">("");

  // Filters
  const filteredSuppliers = suppliers.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()));

  // Metrics
  const totalOutstanding = suppliers.reduce((acc, curr) => acc + curr.outstandingAmount, 0);
  const activeCount = suppliers.filter(s => s.status === 'Active').length;

  const handleOpenProfile = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setIsProfileOpen(true);
  };

  const handleOpenPayment = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    setPaymentAmount(supplier.outstandingAmount);
    setIsPayModalOpen(true);
  };

  const processPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSupplier || paymentAmount === "" || paymentAmount <= 0) return;

    // Simulate payment clearing
    const updated = suppliers.map(s => {
      if (s.id === selectedSupplier.id) {
        const remaining = s.outstandingAmount - (paymentAmount as number);
        
        // Mark all unpaid invoices as paid (simple mock logic)
        const updatedInvoices = s.invoices.map(inv => inv.status === 'Unpaid' ? { ...inv, status: 'Paid' as 'Paid' } : inv);

        const newSup = { ...s, outstandingAmount: Math.max(0, remaining), invoices: updatedInvoices };
        if (isProfileOpen) setSelectedSupplier(newSup); // Update open profile if active
        return newSup;
      }
      return s;
    });

    setSuppliers(updated);
    setIsPayModalOpen(false);
    alert(`Payment of ₹${paymentAmount} processed for ${selectedSupplier.name}.`);
  };

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Supplier = {
      id: `SUP-${Math.floor(100 + Math.random() * 900)}`,
      name: newSupplier.name || "Unknown",
      contactPerson: newSupplier.contactPerson || "Unknown",
      phone: newSupplier.phone || "",
      email: newSupplier.email || "",
      address: newSupplier.address || "",
      status: 'Active',
      outstandingAmount: 0,
      totalPurchases: 0,
      invoices: []
    };
    setSuppliers([created, ...suppliers]);
    setIsAddModalOpen(false);
    setNewSupplier({ status: 'Active' });
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-cyan-600" />
            Supplier Management
          </h1>
          <p className="text-gray-500 mt-1">Manage library book suppliers, invoices, and outstanding payments.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add Supplier
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-gray-800"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Suppliers</p>
          <h3 className="text-3xl font-black text-gray-800">{suppliers.length}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
            <Briefcase className="w-24 h-24 text-gray-800" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-emerald-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Active Suppliers</p>
          <h3 className="text-3xl font-black text-emerald-600">{activeCount}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <CheckCircle2 className="w-24 h-24 text-emerald-600" />
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-rose-100 shadow-sm relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-2 bg-rose-500"></div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Outstanding Dues</p>
          <h3 className="text-3xl font-black text-rose-600">₹{totalOutstanding}</h3>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
            <Banknote className="w-24 h-24 text-rose-600" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
         <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search Supplier or Contact Person..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm bg-gray-50/50"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredSuppliers.length > 0 ? (
          filteredSuppliers.map((supplier) => (
            <div key={supplier.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:border-cyan-200 hover:shadow-md transition-all relative">
              
              {/* Header */}
              <div className="p-5 border-b border-gray-100 flex items-start gap-4 bg-gradient-to-br from-white to-gray-50">
                <div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-xl flex items-center justify-center font-bold shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-1">{supplier.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-gray-500">{supplier.id}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${supplier.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-600'}`}>
                      {supplier.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-5 flex-1 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <User className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="font-medium text-gray-700">{supplier.contactPerson}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-600">{supplier.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                  <span className="text-gray-600 line-clamp-1">{supplier.email}</span>
                </div>
              </div>

              {/* Financials & Actions */}
              <div className="p-5 bg-gray-50 border-t border-gray-100 mt-auto">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Purchases</p>
                    <p className="font-bold text-gray-800">₹{supplier.totalPurchases.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Outstanding</p>
                    <p className={`font-black ${supplier.outstandingAmount > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                      ₹{supplier.outstandingAmount.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleOpenProfile(supplier)}
                    className="flex-1 py-2 bg-white border border-gray-200 text-gray-700 font-bold text-sm rounded-lg hover:bg-gray-50 hover:text-cyan-600 hover:border-cyan-200 transition-colors"
                  >
                    View Details
                  </button>
                  {supplier.outstandingAmount > 0 && (
                    <button 
                      onClick={() => handleOpenPayment(supplier)}
                      className="flex-1 py-2 bg-rose-600 text-white font-bold text-sm rounded-lg hover:bg-rose-700 transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      <CreditCard className="w-4 h-4" /> Pay Dues
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-1 lg:col-span-2 xl:col-span-3 text-center py-16 bg-white rounded-2xl border border-gray-100 border-dashed">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">No Suppliers Found</h3>
            <p className="text-gray-500 text-sm">Add a new supplier to get started.</p>
          </div>
        )}
      </div>


      {/* Supplier Profile Modal */}
      {isProfileOpen && selectedSupplier && (
        <div className="fixed inset-0 z-50 flex justify-end bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            
            {/* Header */}
            <div className="bg-cyan-600 p-6 md:p-8 flex justify-between items-start text-white shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black leading-tight mb-1">{selectedSupplier.name}</h2>
                  <div className="flex items-center gap-3">
                    <span className="bg-cyan-800 text-cyan-100 px-2 py-0.5 rounded text-xs font-mono font-bold">{selectedSupplier.id}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${selectedSupplier.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-gray-500 text-white'}`}>
                      {selectedSupplier.status}
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsProfileOpen(false)} className="text-cyan-100 hover:text-white p-2 rounded-lg hover:bg-cyan-700 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50">
              
              {/* Financial Summary */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Purchased Value</p>
                  <p className="text-2xl font-black text-gray-800">₹{selectedSupplier.totalPurchases.toLocaleString()}</p>
                </div>
                <div className={`p-5 rounded-2xl border shadow-sm ${selectedSupplier.outstandingAmount > 0 ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50 border-emerald-100'}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${selectedSupplier.outstandingAmount > 0 ? 'text-rose-400' : 'text-emerald-500'}`}>Outstanding Dues</p>
                  <p className={`text-2xl font-black ${selectedSupplier.outstandingAmount > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    ₹{selectedSupplier.outstandingAmount.toLocaleString()}
                  </p>
                  {selectedSupplier.outstandingAmount > 0 && (
                     <button onClick={() => handleOpenPayment(selectedSupplier)} className="mt-3 w-full py-2 bg-rose-600 text-white text-xs font-bold rounded-lg hover:bg-rose-700 transition-colors shadow-sm">
                       Make Payment Now
                     </button>
                  )}
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
                <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider flex items-center gap-2 border-b pb-2">
                  <User className="w-4 h-4 text-cyan-500" /> Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Contact Person</p>
                    <p className="font-bold text-gray-800">{selectedSupplier.contactPerson}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Phone Number</p>
                    <p className="font-medium text-gray-700">{selectedSupplier.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Email Address</p>
                    <p className="font-medium text-gray-700">{selectedSupplier.email}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Physical Address</p>
                    <p className="font-medium text-gray-700">{selectedSupplier.address}</p>
                  </div>
                </div>
              </div>

              {/* Invoices List */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-500" /> Purchase History & Invoices
                  </h3>
                  <span className="bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full text-xs font-bold">
                    {selectedSupplier.invoices.length} Records
                  </span>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {selectedSupplier.invoices.length > 0 ? (
                    selectedSupplier.invoices.map(inv => (
                      <div key={inv.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{inv.invoiceNo}</p>
                            <p className="text-xs text-gray-500 font-mono mt-0.5">Date: {inv.date} • Qty: {inv.quantity} Items</p>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto ml-12 md:ml-0">
                          <p className="font-black text-gray-800">₹{inv.totalAmount.toLocaleString()}</p>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-1 ${inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                            {inv.status}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-500 text-sm">No invoices recorded for this supplier.</div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}


      {/* Add Supplier Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            <div className="bg-cyan-600 p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Plus className="w-5 h-5" /> Add New Supplier
              </h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-cyan-200 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleAddSupplier} className="p-6 space-y-4 bg-white max-h-[70vh] overflow-y-auto">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Company / Supplier Name *</label>
                <input required type="text" value={newSupplier.name || ""} onChange={e => setNewSupplier({...newSupplier, name: e.target.value})} placeholder="e.g. Oxford University Press" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Contact Person *</label>
                  <input required type="text" value={newSupplier.contactPerson || ""} onChange={e => setNewSupplier({...newSupplier, contactPerson: e.target.value})} placeholder="e.g. Rajeev Sharma" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number *</label>
                  <input required type="text" value={newSupplier.phone || ""} onChange={e => setNewSupplier({...newSupplier, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                <input type="email" value={newSupplier.email || ""} onChange={e => setNewSupplier({...newSupplier, email: e.target.value})} placeholder="contact@supplier.com" className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Address</label>
                <textarea rows={2} value={newSupplier.address || ""} onChange={e => setNewSupplier({...newSupplier, address: e.target.value})} placeholder="Physical location..." className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"></textarea>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-colors shadow-md">
                  Register Supplier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pay Dues Modal */}
      {isPayModalOpen && selectedSupplier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            <div className="bg-rose-600 p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CreditCard className="w-5 h-5" /> Process Payment
              </h2>
              <button onClick={() => setIsPayModalOpen(false)} className="text-rose-200 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={processPayment} className="p-6 bg-white">
              <div className="text-center mb-6">
                 <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Outstanding Dues</p>
                 <p className="text-4xl font-black text-rose-600">₹{selectedSupplier.outstandingAmount.toLocaleString()}</p>
                 <p className="text-xs text-gray-500 mt-2 font-medium">Supplier: {selectedSupplier.name}</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-1">Amount to Pay Now (₹) *</label>
                <input 
                  required type="number" min="1" max={selectedSupplier.outstandingAmount}
                  value={paymentAmount || ""} 
                  onChange={e => setPaymentAmount(parseInt(e.target.value) || "")} 
                  className="w-full px-4 py-3 rounded-xl border-2 border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 font-black text-lg text-rose-700 bg-rose-50" 
                />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 transition-colors shadow-md flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Confirm Payment Transfer
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
