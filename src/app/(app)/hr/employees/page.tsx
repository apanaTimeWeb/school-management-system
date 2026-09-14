import HrEmployeesMain from "./hr_employees_components/HrEmployeesMain";

export const metadata = {
  title: "Employee Management | Smart Gym 360",
  description: "View and manage all staff and employees.",
};

export default function HrEmployeesPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Employee Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage staff directory, access profiles, and update records.</p>
      </div>
      <HrEmployeesMain />
    </main>
  );
}

