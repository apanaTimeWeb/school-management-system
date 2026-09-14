import AdminHrMyProfileMain from "./hr_my_profile_components/AdminHrMyProfileMain";

export const metadata = {
  title: "My Profile & Settings | Smart Gym 360",
  description: "Manage your personal profile, security settings, 2FA, and active sessions.",
};

export default function AdminHrMyProfilePage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Profile Settings</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Manage your account details, security preferences, and monitor active login sessions.</p>
      </div>
      <AdminHrMyProfileMain />
    </main>
  );
}
