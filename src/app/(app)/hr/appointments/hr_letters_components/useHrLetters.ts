"use client";

import { useState, useEffect } from "react";
import { fetchLetterTemplates, fetchLetterHistory } from "../hr_letters_api/HrLettersApi";
import type { LetterTemplate, GeneratedLetter } from "../hr_letters_types/HrLettersTypes";

export function useHrLetters() {
  const [activeTab, setActiveTab] = useState<'Templates' | 'History'>('Templates');
  
  const [templates, setTemplates] = useState<LetterTemplate[]>([]);
  const [history, setHistory] = useState<GeneratedLetter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters for History
  const [histType, setHistType] = useState("All");
  const [histSearch, setHistSearch] = useState("");

  const [selectedTemplate, setSelectedTemplate] = useState<LetterTemplate | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'Templates') {
        const res = await fetchLetterTemplates();
        if (res.success) setTemplates(res.data);
      } else {
        const res = await fetchLetterHistory({ type: histType, search: histSearch });
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
  }, [activeTab, histType, histSearch]);

  const openGenerator = (template: LetterTemplate) => setSelectedTemplate(template);
  const closeGenerator = () => setSelectedTemplate(null);

  const saveGeneratedLetter = (employeeName: string) => {
    if (!selectedTemplate) return;
    const newLetter: GeneratedLetter = {
      id: `let-${Math.floor(Math.random()*1000)}`,
      employeeId: `EMP-${Math.floor(Math.random()*100)}`,
      employeeName: employeeName || "Unknown Employee",
      letterType: selectedTemplate.type,
      generatedDate: new Date().toISOString().split('T')[0],
      generatedBy: "Current User",
      status: "Generated",
      referenceNo: `REF-GEN-${Math.floor(Math.random()*10000)}`
    };
    
    setHistory(prev => [newLetter, ...prev]);
    alert("Success: Letter generated and saved to history!");
    closeGenerator();
    setActiveTab('History');
  };

  return {
    activeTab, setActiveTab,
    templates, history, isLoading,
    histType, setHistType,
    histSearch, setHistSearch,
    selectedTemplate, openGenerator, closeGenerator,
    saveGeneratedLetter
  };
}

