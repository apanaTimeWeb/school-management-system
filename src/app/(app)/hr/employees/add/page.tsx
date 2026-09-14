import HrEmployeesAddMain from "./hr_employees_add_components/HrEmployeesAddMain";

export const metadata = {
  title: "Add Employee | Smart Gym 360",
  description: "Onboard a new employee.",
};

export default function HrEmployeesAddPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-foreground">Onboard New Employee</h1>
        <p className="text-sm text-muted-foreground mt-1">Fill out the multi-step form to add a staff member.</p>
      </div>
      <HrEmployeesAddMain />
    </main>
  );
}

