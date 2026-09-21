"use client";

import { useState, useEffect } from "react";
import { DEMO_SCHOOLS } from "@/app/auth/auth_mocks/auth_mock_fixtures";

const LS_KEY = "school_erp_config_sch_1";

export function useSchoolConfig() {
  const [config, setConfig] = useState<{
    isLoaded: boolean;
    activeSchoolName: string;
    roles: Record<string, boolean>;
    modules: Record<string, boolean>;
  }>({
    isLoaded: false,
    activeSchoolName: "Loading...",
    roles: {},
    modules: {},
  });

  useEffect(() => {
    try {
      const activeSchoolId = localStorage.getItem("demo_active_school") || "school-c-large";
      
      let roles: Record<string, boolean> = {};
      let modules: Record<string, boolean> = {};
      let schoolName = "";

      if (activeSchoolId === "local-custom") {
        const raw = localStorage.getItem(LS_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          roles = parsed.roles || {};
          modules = parsed.modules || {};
          schoolName = "Your Custom School (Local)";
        }
      } else {
        const demoSchool = DEMO_SCHOOLS.find(s => s.id === activeSchoolId);
        if (demoSchool) {
          roles = demoSchool.roles || {};
          modules = demoSchool.modules || {};
          schoolName = demoSchool.name;
        }
      }

      // Default modules if not present in demo object (for smaller schools, some modules might be missing entirely in the object, meaning false)
      // Actually, demo school data for Large explicitly sets them. For others they are omitted, meaning false.

      setConfig({
        isLoaded: true,
        activeSchoolName: schoolName,
        roles,
        modules,
      });
    } catch {
      setConfig(prev => ({ ...prev, isLoaded: true }));
    }
  }, []);

  return config;
}
