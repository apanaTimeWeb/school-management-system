import AdminHrCommMain from "./hr_communication_components/AdminHrCommMain";

export const metadata = {
  title: "Staff Communication | Smart Gym 360",
  description: "Manage unified inbox, broadcasts, and notification channels for staff.",
};

export default function AdminHrCommPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Staff Communication Center</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Manage all internal announcements, alerts, and multi-channel notifications (In-App, Email, SMS, WhatsApp).</p>
      </div>
      <AdminHrCommMain />
    </main>
  );
}
