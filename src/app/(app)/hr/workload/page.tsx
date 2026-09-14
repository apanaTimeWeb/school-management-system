import HrWorkloadMain from "./hr_workload_components/HrWorkloadMain";

export const metadata = {
  title: "Workload & Assignment | Smart Gym 360",
  description: "Manage teacher workload, subject assignments, and additional responsibilities.",
};

export default function HrWorkloadPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Teacher Workload & Assignments</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Manage class/subject mapping, period distributions, and track maximum workload limits to prevent burnout.</p>
      </div>
      <HrWorkloadMain />
    </main>
  );
}

