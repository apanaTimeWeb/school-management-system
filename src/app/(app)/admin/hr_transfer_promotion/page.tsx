import AdminHrTransferMain from "./hr_transfer_components/AdminHrTransferMain";

export const metadata = {
  title: "Transfers & Promotions | Smart Gym 360",
  description: "Manage employee transfers, promotions, demotions, and department changes.",
};

export default function AdminHrTransferPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee Transfers & Promotions</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Initiate, review, and approve departmental changes, campus transfers, and role updates.</p>
      </div>
      <AdminHrTransferMain />
    </main>
  );
}
