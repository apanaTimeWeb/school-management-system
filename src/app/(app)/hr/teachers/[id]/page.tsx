import AdminHrTeachersProfileMain from "./hr_teachers_profile_components/AdminHrTeachersProfileMain";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AdminHrTeachersUrlConfig } from "../hr_teachers_url_config";

export const metadata = {
  title: "Teacher Profile | Smart Gym 360",
  description: "View and manage teacher details and assignments.",
};

export default function AdminHrTeachersProfilePage({ params }: { params: { id: string } }) {
  return (
    <main className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <Link href={AdminHrTeachersUrlConfig.routes.list} className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-4">
          <ArrowLeft size={16} /> Back to Teacher Directory
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Teacher Profile</h1>
      </div>
      <AdminHrTeachersProfileMain id={params.id} />
    </main>
  );
}
