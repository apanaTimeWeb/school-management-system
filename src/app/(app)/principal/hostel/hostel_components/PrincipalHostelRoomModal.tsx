"use client";
import React from 'react';
import { X, Home, User, BedDouble, Settings } from 'lucide-react';
import { usePrincipalHostelStore } from '../hostel_store/usePrincipalHostelStore';
import clsx from 'clsx';

export default function PrincipalHostelRoomModal() {
  const { selectedRoom, setSelectedRoom } = usePrincipalHostelStore();

  if (!selectedRoom) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-0">
      <div className="w-full max-w-lg bg-bg-main border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        <div className="px-5 py-4 bg-card border-b border-border flex items-center justify-between shrink-0">
          <h2 className="text-[16px] font-bold text-text-primary flex items-center gap-2">
            <Home className="text-primary" size={18} /> 
            Room Details
          </h2>
          <button 
            onClick={() => setSelectedRoom(null)}
            className="p-1.5 rounded-full bg-page hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          
          <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <h3 className="text-[24px] font-bold text-text-primary mb-1">Room {selectedRoom.roomNumber}</h3>
              <p className="text-[14px] text-text-secondary">{selectedRoom.block} | Floor {selectedRoom.floor}</p>
            </div>
            <span className={clsx("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold border", 
                selectedRoom.status === 'Available' ? 'bg-success/10 text-success border-success/30' :
                selectedRoom.status === 'Full' ? 'bg-danger/10 text-danger border-danger/30' :
                'bg-warning/10 text-warning border-warning/30'
            )}>
              {selectedRoom.status === 'Maintenance' && <Settings size={12}/>}
              {selectedRoom.status}
            </span>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg flex flex-col gap-1">
            <h4 className="text-[12px] text-text-secondary font-bold mb-1 flex items-center gap-1.5"><User size={14}/> Warden / Caretaker Info</h4>
            <p className="text-[15px] font-bold text-text-primary">{selectedRoom.wardenName}</p>
          </div>

          <div className="bg-card border border-border p-4 rounded-lg flex flex-col gap-1">
            <h4 className="text-[12px] text-text-secondary font-bold mb-3 flex items-center gap-1.5"><BedDouble size={14}/> Bed Occupancy Details</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[...Array(selectedRoom.capacity)].map((_, idx) => {
                const isOccupied = idx < selectedRoom.occupied;
                return (
                  <div key={idx} className={clsx("p-3 rounded-lg border text-center", 
                    isOccupied ? "bg-primary/10 border-primary/30" : "bg-page border-border"
                  )}>
                    <BedDouble size={20} className={clsx("mx-auto mb-2", isOccupied ? "text-primary" : "text-text-secondary")} />
                    <p className="text-[11px] font-bold text-text-primary">Bed {idx + 1}</p>
                    <p className={clsx("text-[10px]", isOccupied ? "text-primary" : "text-text-secondary")}>
                      {isOccupied ? "Occupied" : "Available"}
                    </p>
                  </div>
                )
              })}
            </div>
            
            <div className="flex justify-between items-center text-[13px] mt-4 pt-3 border-t border-border">
              <span className="text-text-secondary">Overall Occupancy</span>
              <span className="font-bold text-text-primary">{selectedRoom.occupied} / {selectedRoom.capacity}</span>
            </div>
            <div className="w-full bg-input rounded-full h-1.5 mt-1.5 overflow-hidden">
              <div className={clsx("h-full transition-all", 
                (selectedRoom.occupied / selectedRoom.capacity) === 1 ? 'bg-danger' : 
                (selectedRoom.occupied / selectedRoom.capacity) > 0.5 ? 'bg-warning' : 'bg-primary'
              )} style={{ width: `${(selectedRoom.capacity === 0 ? 0 : (selectedRoom.occupied / selectedRoom.capacity)) * 100}%` }} />
            </div>
          </div>

        </div>

        <div className="px-5 py-4 border-t border-border bg-card flex justify-end shrink-0 gap-3">
          <button
            onClick={() => setSelectedRoom(null)}
            className="px-6 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[13px] font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
