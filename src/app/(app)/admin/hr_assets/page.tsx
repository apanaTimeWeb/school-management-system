import AdminHrAssetsMain from "./hr_assets_components/AdminHrAssetsMain";

export const metadata = {
  title: "Employee Assets | Smart Gym 360",
  description: "Track and manage laptops, ID cards, keys, and other assets assigned to employees.",
};

export default function AdminHrAssetsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Asset Management & Allocation</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Track laptops, keys, ID cards, and uniforms assigned to staff. Manage returns and damaged items.</p>
      </div>
      <AdminHrAssetsMain />
    </main>
  );
}
