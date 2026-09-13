"use client";
import React, { useEffect, useState } from 'react';
import { PrincipalHostelRoom } from '../hostel_types/PrincipalHostel.types';
import { fetchPrincipalHostelRooms } from '../hostel_api/PrincipalHostelApi';
import { Home, Users, CheckCircle, Settings, BedDouble } from 'lucide-react';
import { usePrincipalHostelStore } from '../hostel_store/usePrincipalHostelStore';
import clsx from 'clsx';

export default function PrincipalHostelOverviewTab() {
  const [rooms, setRooms] = useState<PrincipalHostelRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedRoom } = usePrincipalHostelStore();

  useEffect(() => {
    let isMounted = true;
    fetchPrincipalHostelRooms().then(data => {
      if (isMounted) {
        setRooms(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => <div key={i} className="h-40 bg-skeleton-base animate-pulse rounded-xl" />)}
      </div>
    );
  }

  const totalCapacity = rooms.reduce((acc, curr) => acc + curr.capacity, 0);
  const totalOccupied = rooms.reduce((acc, curr) => acc + curr.occupied, 0);
  const availableBeds = totalCapacity - totalOccupied;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Home size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Total Rooms</p>
            <h3 className="text-[20px] font-bold text-text-primary">{rooms.length}</h3>
          </div>
        </div>
        <div className="bg-card border border-info/30 p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info shrink-0"><Users size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Hostel Capacity</p>
            <h3 className="text-[20px] font-bold text-text-primary">{totalOccupied} / {totalCapacity} Occupied</h3>
          </div>
        </div>
        <div className="bg-card border border-success/30 p-5 rounded-xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0"><CheckCircle size={24}/></div>
          <div>
            <p className="text-[12px] text-text-secondary font-bold mb-0.5">Available Beds</p>
            <h3 className="text-[20px] font-bold text-text-primary">{availableBeds} Beds</h3>
          </div>
        </div>
      </div>

      <h3 className="text-[16px] font-bold text-text-primary mt-6 mb-4 flex items-center gap-2"><BedDouble size={18}/> Room Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div>
                <h3 className="text-[18px] font-bold text-text-primary leading-tight mb-1">Room {room.roomNumber}</h3>
                <p className="text-[12px] font-mono text-text-secondary bg-black/20 inline-block px-1.5 rounded">{room.block}</p>
              </div>
              <span className={clsx("shrink-0 ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border", 
                room.status === 'Available' ? 'bg-success/10 text-success border-success/30' :
                room.status === 'Full' ? 'bg-danger/10 text-danger border-danger/30' :
                'bg-warning/10 text-warning border-warning/30'
              )}>
                {room.status === 'Maintenance' && <Settings size={10}/>}
                {room.status}
              </span>
            </div>

            <div className="space-y-3 flex-1 relative z-10">
              <div className="flex justify-between items-center text-[12px] mb-1.5">
                <span className="text-text-secondary">Occupancy</span>
                <span className="font-bold text-text-primary">{room.occupied} / {room.capacity}</span>
              </div>
              <div className="w-full bg-input rounded-full h-1.5 overflow-hidden">
                <div className={clsx("h-full transition-all", 
                  (room.occupied / room.capacity) === 1 ? 'bg-danger' : 
                  (room.occupied / room.capacity) > 0.5 ? 'bg-warning' : 'bg-primary'
                )} style={{ width: `${(room.capacity === 0 ? 0 : (room.occupied / room.capacity)) * 100}%` }} />
              </div>
            </div>

            <button 
              onClick={() => setSelectedRoom(room)}
              className="w-full mt-4 py-2 rounded-md bg-page hover:bg-white/5 border border-border text-text-primary text-[12px] font-bold transition-colors relative z-10"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
