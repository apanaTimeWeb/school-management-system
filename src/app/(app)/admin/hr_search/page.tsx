import AdminHrSearchMain from "./hr_search_components/AdminHrSearchMain";

export const metadata = {
  title: "Employee Directory Search | Smart Gym 360",
  description: "Advanced global search and filters for the employee directory.",
};

export default function AdminHrSearchPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Advanced Employee Search</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Search the master directory using 10+ dynamic filters including department, status, qualification, and joining date.</p>
      </div>
      <AdminHrSearchMain />
    </main>
  );
}
