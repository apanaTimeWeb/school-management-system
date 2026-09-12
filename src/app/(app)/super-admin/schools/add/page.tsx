import SuperAdminSchoolForm from "./super_admin_schools_components/SuperAdminSchoolForm";

export default function AddSchoolPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-bold text-text-primary">Add New School</h1>
        <p className="text-sm text-text-secondary mt-1">Configure a new school or main branch in the system.</p>
      </div>

      <SuperAdminSchoolForm />

    </div>
  );
}
