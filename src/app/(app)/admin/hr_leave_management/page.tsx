import AdminHrLeaveMain from "./hr_leave_components/AdminHrLeaveMain";

export const metadata = {
  title: "Leave Management | Smart Gym 360",
  description: "Manage employee leave applications, balances, and holidays.",
};

export default function AdminHrLeavePage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Leave Management</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Review leave applications, track balances, and configure leave types.</p>
      </div>
      <AdminHrLeaveMain />
    </main>
  );
}
