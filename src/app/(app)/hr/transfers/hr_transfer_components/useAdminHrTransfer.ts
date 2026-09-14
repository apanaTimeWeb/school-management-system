"use client";

import { useState, useEffect } from "react";
import { fetchTransferRequests, fetchTransferHistory } from "../hr_transfer_api/AdminHrTransferApi";
import type { TransferRequest, TransferStatus } from "../hr_transfer_types/AdminHrTransferTypes";

export function useAdminHrTransfer() {
  const [activeTab, setActiveTab] = useState<'Requests' | 'History'>('Requests');
  
  const [requests, setRequests] = useState<TransferRequest[]>([]);
  const [history, setHistory] = useState<TransferRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [reqType, setReqType] = useState("All");
  const [reqSearch, setReqSearch] = useState("");

  const [isInitiateModalOpen, setIsInitiateModalOpen] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Requests') {
        const res = await fetchTransferRequests({ type: reqType, search: reqSearch });
        if (res.success) setRequests(res.data);
      } else {
        const res = await fetchTransferHistory({ type: reqType, search: reqSearch });
        if (res.success) setHistory(res.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadData();
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab, reqType, reqSearch]);

  const updateRequestStatus = (id: string, newStatus: TransferStatus) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
    alert(`Request ${id} marked as ${newStatus}.`);
  };

  const submitNewRequest = (data: any) => {
    const newReq: TransferRequest = {
      id: `req-${Math.floor(Math.random()*1000)}`,
      employeeId: data.empId || "EMP-XXX",
      employeeName: data.empName || "Unknown Employee",
      type: data.type,
      currentValue: data.currentValue,
      proposedValue: data.proposedValue,
      effectiveDate: data.effectiveDate,
      reason: data.reason,
      requestedBy: "Current Admin",
      requestedOn: new Date().toISOString().split('T')[0],
      status: "Pending Approval"
    };
    
    setRequests(prev => [newReq, ...prev]);
    alert("Success: New transfer/promotion request initiated.");
    setIsInitiateModalOpen(false);
    setActiveTab('Requests');
  };

  return {
    activeTab, setActiveTab,
    requests, history, isLoading,
    reqType, setReqType,
    reqSearch, setReqSearch,
    isInitiateModalOpen, setIsInitiateModalOpen,
    updateRequestStatus, submitNewRequest
  };
}
