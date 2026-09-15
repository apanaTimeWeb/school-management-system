"use client";

import React from 'react';
import type { TransportRoute, TransportStop, TransportFeeInfo } from '../student_transport_types/student_transport_types';
import { BusFront, MapPin, User, Phone, Map, Wallet, Clock, ArrowRightLeft } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  route: TransportRoute;
  stop: TransportStop;
  feeInfo: TransportFeeInfo;
}

export default function StudentTransportRouteDetails({ route, stop, feeInfo }: Props) {
  
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm w-full flex flex-col">
      <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
          <BusFront size={24} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-text-primary">{route.routeName}</h2>
          <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{route.busNumber} • {route.vehicleType}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        
        {/* Stop Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-text-secondary flex items-center gap-2 uppercase">
            <MapPin size={16} className="text-danger" /> Assigned Stop
          </h3>
          <div className="bg-page border border-border rounded-lg p-4">
            <span className="text-base font-bold text-text-primary block mb-3">{stop.stopName}</span>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <div className="flex flex-col">
                <span className="text-[10px] text-text-secondary uppercase">Pickup</span>
                <span className="text-primary flex items-center gap-1"><Clock size={12}/> {stop.pickupTime}</span>
              </div>
              <ArrowRightLeft size={16} className="text-border" />
              <div className="flex flex-col">
                <span className="text-[10px] text-text-secondary uppercase">Drop</span>
                <span className="text-info flex items-center gap-1"><Clock size={12}/> {stop.dropTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-text-secondary flex items-center gap-2 uppercase">
            <User size={16} className="text-success" /> Crew Details
          </h3>
          <div className="space-y-2">
            <div className="bg-page border border-border rounded-lg p-3 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-text-secondary uppercase">Driver</span>
                <span className="text-sm font-bold text-text-primary">{route.driverName}</span>
              </div>
              <a href={`tel:${route.driverPhone}`} className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center hover:bg-success hover:text-white transition-colors">
                <Phone size={14} />
              </a>
            </div>
            <div className="bg-page border border-border rounded-lg p-3 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-text-secondary uppercase">Attendant</span>
                <span className="text-sm font-bold text-text-primary">{route.attendantName}</span>
              </div>
              <a href={`tel:${route.attendantPhone}`} className="w-8 h-8 rounded-full bg-info/10 text-info flex items-center justify-center hover:bg-info hover:text-white transition-colors">
                <Phone size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Fee Footer */}
      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet size={16} className="text-text-secondary" />
          <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Transport Fee Status</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-text-primary">₹{feeInfo.monthlyFee} /mo</span>
          <span className={clsx(
            "text-[10px] font-bold px-2 py-0.5 rounded uppercase",
            feeInfo.status === 'Paid' ? "bg-success/10 text-success border border-success/20" : "bg-danger/10 text-danger border border-danger/20"
          )}>
            {feeInfo.status}
          </span>
        </div>
      </div>

    </div>
  );
}
