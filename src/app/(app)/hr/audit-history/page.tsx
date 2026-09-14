import HrAuditMain from "./hr_audit_components/HrAuditMain";

export const metadata = {
  title: "Audit & History Log | Smart Gym 360",
  description: "Secure tracking of sensitive HR actions and state changes.",
};

export default function HrAuditPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Audit & History Logs</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Monitor sensitive system actions (Salary changes, Promotions, Terminations) with before & after state diffs.</p>
      </div>
      <HrAuditMain />
    </main>
  );
}

