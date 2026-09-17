"use client";

import React, { useState } from 'react';
import TransportParentViewChildSelector from './TransportParentViewChildSelector';
import TransportParentViewInfoCard from './TransportParentViewInfoCard';
import TransportParentViewLiveTracking from './TransportParentViewLiveTracking';
import TransportParentViewAlerts from './TransportParentViewAlerts';
import { MOCK_PARENT_CHILDREN } from '../transport_parent_view_constants/transport_parent_view.constants';

// RESPONSIBILITY: Main orchestrator for Parent Transport View module

export default function TransportParentViewMain() {
  const [children] = useState(MOCK_PARENT_CHILDREN);
  const [selectedChildId, setSelectedChildId] = useState(children[0]?.studentId || '');

  const activeChild = children.find(c => c.studentId === selectedChildId);

  if (!activeChild) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-[var(--text-secondary)]">No transport records found for this account.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-card)] p-4 rounded-xl border border-[var(--border)] shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-2xl">📱</span> Transport Portal
          </h1>
          <p className="text-[14px] text-[var(--text-secondary)] mt-1">
            Track your child's school bus in real-time, view schedules, and receive alerts.
          </p>
        </div>
      </div>

      {/* Child Selector (Conditional if > 1 child) */}
      <TransportParentViewChildSelector 
        childrenProfiles={children}
        selectedChildId={selectedChildId}
        onSelectChild={setSelectedChildId}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Info & Map */}
        <div className="flex-1 flex flex-col gap-6">
          <TransportParentViewInfoCard child={activeChild} />
          
          <div className="flex-1 min-h-[400px]">
            <TransportParentViewLiveTracking child={activeChild} />
          </div>
        </div>

        {/* Right Column: Alerts */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <TransportParentViewAlerts alerts={activeChild.alerts} />
        </div>

      </div>
      
    </div>
  );
}
