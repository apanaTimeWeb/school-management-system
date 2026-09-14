import AdminHrExitMain from "./hr_exit_components/AdminHrExitMain";

export const metadata = {
  title: "Employee Exit | Smart Gym 360",
  description: "Manage resignations, clearances, and employee offboarding.",
};

export default function AdminHrExitPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee Exit & Offboarding</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Track resignations, process clearance checklists, and manage final separation documents.</p>
      </div>
      <AdminHrExitMain />
    </main>
  );
}
