"use client";

import { useHrTeachersList } from "./useHrTeachersList";
import HrTeachersToolbar from "./HrTeachersToolbar";
import HrTeachersTable from "./HrTeachersTable";
import { Loader2 } from "lucide-react";

export default function HrTeachersMain() {
  const { 
    teachers, isLoading, error, 
    search, setSearch, 
    status, setStatus, 
    department, setDepartment 
  } = useHrTeachersList();

  return (
    <div className="flex flex-col w-full">
      <HrTeachersToolbar 
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
        <HrTeachersTable teachers={teachers} />
      )}
    </div>
  );
}

