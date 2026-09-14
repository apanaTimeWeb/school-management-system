import AdminHrDocumentsMain from "./hr_documents_components/AdminHrDocumentsMain";

export const metadata = {
  title: "Employee Documents | Smart Gym 360",
  description: "Secure vault for managing and verifying employee documents.",
};

export default function AdminHrDocumentsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee Document Vault</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Manage, verify, and track expiry alerts for all staff and teacher documents.</p>
      </div>
      <AdminHrDocumentsMain />
    </main>
  );
}
