"use client";

import { useState, useEffect } from "react";
import { fetchEmployees } from "../hr_employees_api/AdminHrEmployeesApi";
import type { Employee, FetchEmployeesParams } from "../hr_employees_types/AdminHrEmployeesTypes";

export function useAdminHrEmployeesList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [department, setDepartment] = useState("All");

  const loadEmployees = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const params: FetchEmployeesParams = {};
      if (search) params.search = search;
      if (status !== "All") params.status = status;
      if (department !== "All") params.department = department;

      const response = await fetchEmployees(params);
      if (response.success) {
        setEmployees(response.data);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Failed to fetch employees. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Debounce search slightly
    const timer = setTimeout(() => {
      loadEmployees();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, status, department]);

  return {
    employees,
    isLoading,
    error,
    search,
    setSearch,
    status,
    setStatus,
    department,
    setDepartment,
    reload: loadEmployees
  };
}
