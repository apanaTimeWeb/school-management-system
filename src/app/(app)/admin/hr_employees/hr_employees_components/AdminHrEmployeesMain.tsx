"use client";

import { useAdminHrEmployeesList } from "./useAdminHrEmployeesList";
import AdminHrEmployeesToolbar from "./AdminHrEmployeesToolbar";
import AdminHrEmployeesTable from "./AdminHrEmployeesTable";
import { Loader2 } from "lucide-react";

export default function AdminHrEmployeesMain() {
  const { 
    employees, isLoading, error, 
    search, setSearch, 
    status, setStatus, 
    department, setDepartment 
  } = useAdminHrEmployeesList();

  return (
    <div className="flex flex-col w-full">
      <AdminHrEmployeesToolbar 
        search={search} setSearch={setSearch}
        status={status} setStatus={setStatus}
        department={department} setDepartment={setDepartment}
      />
      
      {error && (
        <div className="p-4 mb-4 bg-danger/10 border border-danger text-danger rounded-md text-sm">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg">
          <Loader2 className="animate-spin text-primary mb-4" size={32} />
          <span className="text-sm text-muted-foreground">Loading employees...</span>
        </div>
      ) : (
        <AdminHrEmployeesTable employees={employees} />
      )}
    </div>
  );
}
