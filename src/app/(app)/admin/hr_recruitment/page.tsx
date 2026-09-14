import AdminHrRecruitmentMain from "./hr_recruitment_components/AdminHrRecruitmentMain";

export const metadata = {
  title: "Recruitment | Smart Gym 360",
  description: "Manage job positions and candidate applications pipeline.",
};

export default function AdminHrRecruitmentPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Recruitment & Hiring</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Track vacancies, review candidates, and manage the interview pipeline.</p>
      </div>
      <AdminHrRecruitmentMain />
    </main>
  );
}
