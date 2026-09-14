import AdminHrLettersMain from "./hr_letters_components/AdminHrLettersMain";

export const metadata = {
  title: "Appointment & Letters | Smart Gym 360",
  description: "Generate and manage official HR letters and certificates.",
};

export default function AdminHrLettersPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Appointment & HR Letters</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Generate official templates, preview letters, and manage historical records.</p>
      </div>
      <AdminHrLettersMain />
    </main>
  );
}
