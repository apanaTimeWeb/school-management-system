"use client";

import { useState, useEffect } from "react";
import { fetchEmployeesForIdCards } from "../hr_id_cards_api/AdminHrIdCardsApi";
import type { IdCardEmployeeRecord } from "../hr_id_cards_types/AdminHrIdCardsTypes";

export function useAdminHrIdCards() {
  const [employees, setEmployees] = useState<IdCardEmployeeRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [roleFilter, setRoleFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");

  // Bulk Selection
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  // Modal Preview State
  const [previewRecords, setPreviewRecords] = useState<IdCardEmployeeRecord[]>([]);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchEmployeesForIdCards({ role: roleFilter, search: searchFilter });
      if (res.success) {
        setEmployees(res.data);
        // Clean up selectedIds if they are no longer in the filtered list
        const fetchedIds = res.data.map(e => e.id);
        setSelectedIds(prev => prev.filter(id => fetchedIds.includes(id)));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => loadData(), 300);
    return () => clearTimeout(timer);
  }, [roleFilter, searchFilter]);

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === employees.length) {
      setSelectedIds([]); // deselect all
    } else {
      setSelectedIds(employees.map(e => e.id)); // select all visible
    }
  };

  const previewSingle = (record: IdCardEmployeeRecord) => {
    setPreviewRecords([record]);
    setIsPreviewModalOpen(true);
  };

  const previewBulk = () => {
    if (selectedIds.length === 0) {
      console.warn("Please select at least one employee to generate ID cards.");
      return;
    }
    const recordsToPreview = employees.filter(e => selectedIds.includes(e.id));
    setPreviewRecords(recordsToPreview);
    setIsPreviewModalOpen(true);
  };

  const closePreview = () => {
    setIsPreviewModalOpen(false);
    setPreviewRecords([]);
  };

  const markAsPrinted = (idsToMark: string[]) => {
    setEmployees(prev => prev.map(e => idsToMark.includes(e.id) ? { ...e, idCardPrinted: true } : e));
    console.log(`Success: ${idsToMark.length} ID Card(s) have been sent to the printer and marked as printed.`);
    closePreview();
    setSelectedIds([]); // clear selection after print
  };

  return {
    employees, isLoading,
    roleFilter, setRoleFilter,
    searchFilter, setSearchFilter,
    selectedIds, toggleSelection, toggleSelectAll,
    previewRecords, isPreviewModalOpen,
    previewSingle, previewBulk, closePreview, markAsPrinted
  };
}
