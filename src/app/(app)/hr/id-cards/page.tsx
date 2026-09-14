import AdminHrIdCardsMain from "./hr_id_cards_components/AdminHrIdCardsMain";

export const metadata = {
  title: "ID Cards | Smart Gym 360",
  description: "Generate and print ID cards for teachers, staff, and admin.",
};

export default function AdminHrIdCardsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee ID Card Generator</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Preview, generate, and bulk print beautiful ID cards with auto-generated QR codes.</p>
      </div>
      <AdminHrIdCardsMain />
    </main>
  );
}
