"use client";

import React, { useState } from "react";
import {
  ScanLine,
  QrCode,
  Barcode,
  Printer,
  Search,
  BookOpen,
  User,
  Settings,
  ArrowRight,
  BookUp,
  BookDown,
  Layers,
  Copy,
  CheckCircle2,
  X
} from "lucide-react";

type TabMode = 'Generator' | 'Scanner';
type TargetType = 'Book' | 'Member';
type LabelFormat = 'Barcode' | 'QR';

export default function BarcodeManagement() {
  const [activeTab, setActiveTab] = useState<TabMode>('Generator');

  // Generator States
  const [targetType, setTargetType] = useState<TargetType>('Book');
  const [labelFormat, setLabelFormat] = useState<LabelFormat>('Barcode');
  const [isBulk, setIsBulk] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [generatedLabels, setGeneratedLabels] = useState<{id: string, name: string, type: TargetType}[]>([]);

  // Scanner States
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{type: TargetType, id: string, name: string, status: string} | null>(null);
  const [scanInput, setScanInput] = useState("");

  // Handlers for Generator
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue && !isBulk) return;

    if (isBulk) {
      // Generate bulk mock data
      const bulkData = [];
      for(let i = 1; i <= 12; i++) {
        const id = targetType === 'Book' ? `ACC-${Math.floor(1000 + Math.random() * 9000)}` : `LIB-STU-${Math.floor(100 + Math.random() * 900)}`;
        const name = targetType === 'Book' ? `Book Series Vol ${i}` : `Student ${i}`;
        bulkData.push({ id, name, type: targetType });
      }
      setGeneratedLabels(bulkData);
    } else {
      // Single generate
      const name = targetType === 'Book' ? "Mathematics Class 10" : "Rahul Sharma";
      setGeneratedLabels([{ id: inputValue, name, type: targetType }]);
    }
  };

  const handlePrint = () => {
    alert(`Sent ${generatedLabels.length} labels to Printer.`);
  };

  // Handlers for Scanner
  const simulateScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanInput) return;
    setIsScanning(true);
    
    // Simulate delay
    setTimeout(() => {
      // Simple mock logic: if it starts with LIB, it's a member. Else book.
      if (scanInput.toUpperCase().startsWith("LIB")) {
        setScanResult({
          type: 'Member',
          id: scanInput.toUpperCase(),
          name: "Rahul Sharma (Student)",
          status: "Active - Limit 3 Books"
        });
      } else {
        setScanResult({
          type: 'Book',
          id: scanInput.toUpperCase(),
          name: "Physics Concepts - HC Verma",
          status: "Available in Inventory"
        });
      }
      setIsScanning(false);
      setScanInput("");
    }, 1000);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <ScanLine className="w-8 h-8 text-indigo-600" />
          Barcode & QR Management
        </h1>
        <p className="text-gray-500 mt-1">Generate labels, print accession barcodes, and fast-scan for counter actions.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setActiveTab('Generator')}
          className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'Generator' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
        >
          <Printer className="w-5 h-5" /> Generate Labels
        </button>
        <button 
          onClick={() => setActiveTab('Scanner')}
          className={`flex-1 md:flex-none px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'Scanner' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
        >
          <ScanLine className="w-5 h-5" /> Fast Scanner Tool
        </button>
      </div>

      {/* ----------------- GENERATOR TAB ----------------- */}
      {activeTab === 'Generator' && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Controls Panel */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-indigo-500" /> Generator Settings
              </h2>
              
              <form onSubmit={handleGenerate} className="space-y-5">
                
                {/* Target Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Target Entity</label>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setTargetType('Book')} className={`flex-1 py-2 rounded-lg border-2 font-bold text-sm transition-all flex justify-center items-center gap-2 ${targetType === 'Book' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                      <BookOpen className="w-4 h-4"/> Book
                    </button>
                    <button type="button" onClick={() => setTargetType('Member')} className={`flex-1 py-2 rounded-lg border-2 font-bold text-sm transition-all flex justify-center items-center gap-2 ${targetType === 'Member' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                      <User className="w-4 h-4"/> Member
                    </button>
                  </div>
                </div>

                {/* Label Format */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Label Format</label>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setLabelFormat('Barcode')} className={`flex-1 py-2 rounded-lg border-2 font-bold text-sm transition-all flex justify-center items-center gap-2 ${labelFormat === 'Barcode' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                      <Barcode className="w-4 h-4"/> Barcode
                    </button>
                    <button type="button" onClick={() => setLabelFormat('QR')} className={`flex-1 py-2 rounded-lg border-2 font-bold text-sm transition-all flex justify-center items-center gap-2 ${labelFormat === 'QR' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                      <QrCode className="w-4 h-4"/> QR Code
                    </button>
                  </div>
                </div>

                {/* Bulk vs Single */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                  <div>
                    <label className="text-sm font-bold text-gray-800">Bulk Generation</label>
                    <p className="text-xs text-gray-500">Generate for entire category</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={isBulk} onChange={() => setIsBulk(!isBulk)} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                {!isBulk ? (
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">{targetType === 'Book' ? 'Accession Number / Barcode' : 'Member ID'} *</label>
                    <input 
                      required type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={targetType === 'Book' ? "e.g. 890123456" : "e.g. LIB-STU-001"}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Select Category to Bulk Print</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>Newly Added Books (Last 7 Days)</option>
                      <option>All Science Books</option>
                      <option>New Student Admissions</option>
                    </select>
                  </div>
                )}

                <button type="submit" className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors shadow-md mt-4 flex items-center justify-center gap-2">
                  <Layers className="w-5 h-5" /> Generate Preview
                </button>
              </form>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="font-bold text-gray-800 flex items-center gap-2">
                <Printer className="w-5 h-5 text-gray-400" /> Preview ({generatedLabels.length} Labels)
              </h2>
              {generatedLabels.length > 0 && (
                <button onClick={handlePrint} className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm flex items-center gap-2 text-sm">
                  <Printer className="w-4 h-4" /> Print Labels
                </button>
              )}
            </div>
            
            <div className="p-6 flex-1 bg-gray-100/50 min-h-[400px]">
              {generatedLabels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {generatedLabels.map((label, idx) => (
                    <div key={idx} className="bg-white border-2 border-dashed border-gray-300 p-4 rounded-xl flex flex-col items-center justify-center gap-2 relative group hover:border-indigo-400 transition-colors">
                      <p className="text-[10px] font-bold text-gray-400 uppercase">{label.type} Label</p>
                      
                      {/* Mock Barcode / QR Visuals */}
                      {labelFormat === 'Barcode' ? (
                        <div className="flex flex-col items-center gap-1 w-full mt-2">
                          {/* Fake barcode lines */}
                          <div className="h-16 w-full flex bg-white px-2 justify-between">
                            {[...Array(25)].map((_, i) => (
                              <div key={i} className="bg-black h-full" style={{ width: `${Math.random() * 4 + 1}px` }}></div>
                            ))}
                          </div>
                          <p className="font-mono text-sm tracking-widest font-bold text-gray-800">{label.id}</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2 w-full mt-2">
                          {/* Fake QR */}
                          <div className="w-24 h-24 bg-white border-4 border-black p-1 relative">
                             <div className="w-4 h-4 bg-black absolute top-0 left-0"></div>
                             <div className="w-4 h-4 bg-black absolute top-0 right-0"></div>
                             <div className="w-4 h-4 bg-black absolute bottom-0 left-0"></div>
                             {/* random noise */}
                             <div className="absolute inset-2 flex flex-wrap gap-0.5 overflow-hidden">
                               {[...Array(64)].map((_, i) => (
                                 <div key={i} className="w-2 h-2" style={{ backgroundColor: Math.random() > 0.5 ? 'black' : 'transparent' }}></div>
                               ))}
                             </div>
                          </div>
                          <p className="font-mono text-xs font-bold text-gray-800">{label.id}</p>
                        </div>
                      )}
                      
                      <p className="text-xs font-semibold text-gray-600 line-clamp-1 text-center w-full mt-2 border-t pt-2">{label.name}</p>
                      
                      {/* Reprint action */}
                      <button className="absolute inset-0 bg-indigo-900/80 text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center rounded-xl transition-opacity font-bold gap-1 backdrop-blur-sm">
                         <Printer className="w-6 h-6" /> Single Print
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                  <Barcode className="w-16 h-16 mb-4 opacity-20" />
                  <p>Configure settings and click generate to preview labels.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      {/* ----------------- SCANNER TAB (FAST ACTIONS) ----------------- */}
      {activeTab === 'Scanner' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-800 relative">
            
            {/* Top Bar */}
            <div className="bg-gray-950 p-4 flex justify-between items-center text-gray-300 border-b border-gray-800">
               <div className="flex items-center gap-2 font-mono text-sm">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                 Scanner Active
               </div>
               <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-white transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Camera View */}
              <div className="aspect-square md:aspect-auto md:h-[500px] bg-black relative flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-800 overflow-hidden">
                <div className="w-64 h-64 border-2 border-dashed border-emerald-500/50 relative">
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-emerald-500"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-emerald-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-emerald-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-emerald-500"></div>
                  
                  {isScanning && <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 opacity-80 animate-[scan_1.5s_ease-in-out_infinite] shadow-[0_0_15px_3px_rgba(52,211,153,0.6)]"></div>}
                </div>
                <p className="text-gray-500 font-mono mt-6 text-sm">Align Barcode/QR inside frame</p>

                {/* Manual Fallback inside camera view */}
                <form onSubmit={simulateScan} className="absolute bottom-6 left-6 right-6 flex gap-2">
                   <input 
                     type="text" 
                     value={scanInput}
                     onChange={(e) => setScanInput(e.target.value)}
                     placeholder="Or type barcode..." 
                     className="flex-1 bg-gray-900/80 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-emerald-500 font-mono text-sm backdrop-blur-md"
                   />
                   <button type="submit" disabled={isScanning} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                     Scan
                   </button>
                </form>
              </div>

              {/* Action View */}
              <div className="p-6 md:p-8 bg-gray-900 flex flex-col justify-center">
                
                {!scanResult ? (
                  <div className="text-center text-gray-500">
                    <ScanLine className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <h3 className="text-xl font-medium text-gray-400 mb-2">Awaiting Scan</h3>
                    <p className="text-sm">Scan a book or member card to reveal fast counter actions.</p>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${scanResult.type === 'Member' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {scanResult.type === 'Member' ? <User className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{scanResult.type} Scanned</p>
                        <h3 className="text-2xl font-bold text-white leading-tight">{scanResult.name}</h3>
                      </div>
                    </div>

                    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 mb-8 space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Barcode/ID:</span>
                         <span className="font-mono font-bold text-gray-200">{scanResult.id}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                         <span className="text-gray-400">Status:</span>
                         <span className="font-bold text-emerald-400">{scanResult.status}</span>
                       </div>
                    </div>

                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Fast Actions</h4>
                    
                    {scanResult.type === 'Book' ? (
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-bold transition-all shadow-md flex flex-col items-center justify-center gap-2 group">
                          <BookUp className="w-6 h-6 group-hover:scale-110 transition-transform" /> Issue Book
                        </button>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl font-bold transition-all shadow-md flex flex-col items-center justify-center gap-2 group">
                          <BookDown className="w-6 h-6 group-hover:scale-110 transition-transform" /> Return Book
                        </button>
                        <button className="col-span-2 bg-gray-800 hover:bg-gray-700 text-gray-200 p-3 rounded-xl font-bold transition-all border border-gray-700 mt-2 text-sm">
                          View Book Profile
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2">
                          <BookUp className="w-5 h-5" /> Issue Book to {scanResult.name.split(' ')[0]}
                        </button>
                        <button className="bg-rose-600/20 text-rose-400 hover:bg-rose-600/30 p-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 border border-rose-900/50">
                          <Banknote className="w-4 h-4" /> Collect Fine (₹0)
                        </button>
                      </div>
                    )}

                    <button onClick={() => setScanResult(null)} className="mt-8 text-sm text-gray-500 hover:text-gray-300 w-full text-center flex items-center justify-center gap-1 font-medium transition-colors">
                      <X className="w-4 h-4" /> Clear & Scan Next
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
