import HrOfficeMain from "./office_admin_components/HrOfficeMain";

export const metadata = {
  title: "Office Administration | Smart Gym 360",
  description: "Manage internal circulars, notices, administrative tasks, and official correspondence.",
};

export default function HrOfficePage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Office Administration Hub</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Publish circulars, assign administrative tasks, and maintain official school records centrally.</p>
      </div>
      <HrOfficeMain />
    </main>
  );
}

