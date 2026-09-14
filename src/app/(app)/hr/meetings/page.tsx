import HrMeetingsMain from "./hr_meetings_components/HrMeetingsMain";

export const metadata = {
  title: "Staff Meetings | Smart Gym 360",
  description: "Schedule meetings, record attendance, take minutes, and track action items.",
};

export default function HrMeetingsPage() {
  return (
    <main className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 motion-safe:animate-in motion-safe:fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Staff Meetings & Minutes</h1>
        <p className="text-sm font-medium text-muted-foreground mt-1">Plan department syncs, record official meeting minutes, mark attendance, and track follow-up action items centrally.</p>
      </div>
      <HrMeetingsMain />
    </main>
  );
}

