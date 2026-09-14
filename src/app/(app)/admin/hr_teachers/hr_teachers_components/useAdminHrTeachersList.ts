"use client";

import { useState, useEffect } from "react";
import { fetchTeachers } from "../hr_teachers_api/AdminHrTeachersApi";
import type { Teacher, FetchTeachersParams } from "../hr_teachers_types/AdminHrTeachersTypes";

export function useAdminHrTeachersList() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [department, setDepartment] = useState("All");

  const loadTeachers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const params: FetchTeachersParams = {};
      if (search) params.search = search;
      if (status !== "All") params.status = status;
      if (department !== "All") params.department = department;

      const response = await fetchTeachers(params);
      if (response.success) {
        setTeachers(response.data);
      } else {
        setError("Failed to fetch teachers.");
      }
    } catch (err) {
      setError("An error occurred while fetching teachers.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadTeachers();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, status, department]);

  return {
    teachers,
    isLoading,
    error,
    search, setSearch,
    status, setStatus,
    department, setDepartment
  };
}
