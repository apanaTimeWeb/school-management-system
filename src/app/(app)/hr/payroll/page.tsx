import HrPayrollMain from "./hr_payroll_components/HrPayrollMain";

export const metadata = {
  title: "Payroll Data | Smart Gym 360",
  description: "Manage salary structures, deductions, and payroll processing.",
};

export default function HrPayrollPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee Payroll Management</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Review salary structures, process monthly payroll pipelines, and generate payslips securely.</p>
      </div>
      <HrPayrollMain />
    </main>
  );
}

