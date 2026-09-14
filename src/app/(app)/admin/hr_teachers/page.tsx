import AdminHrTeachersMain from "./hr_teachers_components/AdminHrTeachersMain";

export const metadata = {
  title: "Teacher Management | Smart Gym 360",
  description: "Manage teacher directory, workload, and profiles.",
};

export default function AdminHrTeachersPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Teacher Directory</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Manage teaching staff, subjects, and workload assignments.</p>
      </div>
      <AdminHrTeachersMain />
    </main>
  );
}
