"use client";

import { X, Printer, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import type { IdCardEmployeeRecord } from "../hr_id_cards_types/HrIdCardsTypes";
import HrIdCardVisual from "./HrIdCardVisual";

interface HrIdCardsPreviewModalProps {
  records: IdCardEmployeeRecord[];
  isOpen: boolean;
  close: () => void;
  markAsPrinted: (ids: string[]) => void;
}

export default function HrIdCardsPreviewModal({ records, isOpen, close, markAsPrinted }: HrIdCardsPreviewModalProps) {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen, records]);

  if (!isOpen || records.length === 0) return null;

  const currentRecord = records[currentIndex];

  const handlePrint = () => {
    // Collect all IDs in this preview batch to mark them as printed
    const ids = records.map(r => r.id);
    markAsPrinted(ids);
  };

  const nextCard = () => setCurrentIndex(prev => Math.min(prev + 1, records.length - 1));
  const prevCard = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm motion-safe:transition-opacity">
      <div className="bg-card border border-border rounded-xl w-full max-w-4xl shadow-2xl overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-overlay">
          <div>
            <h2 className="text-2xl font-bold text-foreground">ID Card Preview Generator</h2>
            <div className="flex gap-3 mt-1">
              <span className="text-sm font-bold text-primary">Previewing {records.length} Card{records.length > 1 ? 's' : ''}</span>
            </div>
          </div>
          <button onClick={close} className="p-2 hover:bg-input rounded-full text-muted-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center bg-input/10">
          
          {/* Card Carousel Area */}
          <div className="w-full flex items-center justify-center gap-8 mb-8">
            {records.length > 1 && (
              <button onClick={prevCard} disabled={currentIndex === 0} className="p-3 rounded-full bg-card shadow border border-border text-foreground disabled:opacity-30 hover:bg-primary hover:text-white transition-colors">
                <ChevronLeft size={24}/>
              </button>
            )}
            
            <div className="motion-safe:animate-in motion-safe:zoom-in-95">
              <HrIdCardVisual record={currentRecord} />
            </div>

            {records.length > 1 && (
              <button onClick={nextCard} disabled={currentIndex === records.length - 1} className="p-3 rounded-full bg-card shadow border border-border text-foreground disabled:opacity-30 hover:bg-primary hover:text-white transition-colors">
                <ChevronRight size={24}/>
              </button>
            )}
          </div>

          {/* Indicator */}
          {records.length > 1 && (
            <p className="text-sm font-bold text-muted-foreground mb-6">Showing Card {currentIndex + 1} of {records.length}</p>
          )}

          {/* Print Action */}
          <button 
            onClick={handlePrint}
            className="px-8 py-3 bg-primary text-card font-bold text-sm rounded-md hover:bg-yellow-500 shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
          >
            <Printer size={18} /> Send {records.length} Card{records.length > 1 ? 's' : ''} to Printer
          </button>

        </div>
      </div>
    </div>
  );
}

