"use client";

import { useHrEmployeesList } from "./useHrEmployeesList";
import HrEmployeesToolbar from "./HrEmployeesToolbar";
import HrEmployeesTable from "./HrEmployeesTable";
import { Loader2 } from "lucide-react";

export default function HrEmployeesMain() {
  const { 
    employees, isLoading, error, 
    search, setSearch, 
    status, setStatus, 
    department, setDepartment 
  } = useHrEmployeesList();

  return (
    <div className="flex flex-col w-full">
      <HrEmployeesToolbar 
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
        <HrEmployeesTable employees={employees} />
      )}
    </div>
  );
}

