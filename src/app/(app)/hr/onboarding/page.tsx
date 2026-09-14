import HrOnboardingMain from "./hr_onboarding_components/HrOnboardingMain";

export const metadata = {
  title: "Onboarding | Smart Gym 360",
  description: "Manage new employee joining checklist, documents, and system access.",
};

export default function HrOnboardingPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee Onboarding</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Verify documents, complete checklists, and grant system access via RBAC.</p>
      </div>
      <HrOnboardingMain />
    </main>
  );
}

