"use client";

import { useAdminHrTeachersList } from "./useAdminHrTeachersList";
import AdminHrTeachersToolbar from "./AdminHrTeachersToolbar";
import AdminHrTeachersTable from "./AdminHrTeachersTable";
import { Loader2 } from "lucide-react";

export default function AdminHrTeachersMain() {
  const { 
    teachers, isLoading, error, 
    search, setSearch, 
    status, setStatus, 
    department, setDepartment 
  } = useAdminHrTeachersList();

  return (
    <div className="flex flex-col w-full">
      <AdminHrTeachersToolbar 
        search={search} setSearch={setSearch}
        status={status} setStatus={setStatus}
        department={department} setDepartment={setDepartment}
      />
      
      {error && (
        <div className="p-4 mb-4 bg-danger/10 border border-danger text-danger rounded-md text-sm font-bold">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="w-full p-20 flex flex-col items-center justify-center bg-card border border-border rounded-lg shadow-sm">
          <Loader2 className="animate-spin text-primary mb-4" size={36} />
          <span className="text-sm text-muted-foreground font-bold">Loading Teacher Directory...</span>
        </div>
      ) : (
        <AdminHrTeachersTable teachers={teachers} />
      )}
    </div>
  );
}
