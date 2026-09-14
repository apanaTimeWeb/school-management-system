import HrEmployeesProfileMain from "./hr_employees_profile_components/HrEmployeesProfileMain";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { HrEmployeesUrlConfig } from "../hr_employees_url_config";

export const metadata = {
  title: "Employee Profile | Smart Gym 360",
  description: "View and manage employee profile.",
};

export default function HrEmployeesProfilePage({ params }: { params: { id: string } }) {
  return (
    <main className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6">
        <Link href={HrEmployeesUrlConfig.routes.list} className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft size={16} /> Back to Employee List
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Employee Profile</h1>
      </div>
      <HrEmployeesProfileMain id={params.id} />
    </main>
  );
}
