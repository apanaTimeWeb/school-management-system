import { MonitorSmartphone } from "lucide-react";

export default function RecentLoginActivity() {
  const logins = [
    { id: 1, name: 'Principal (North Branch)', details: 'Mac OS Safari • 192.168.1.5', time: '2m ago' },
    { id: 2, name: 'Admin (Main Campus)', details: 'Windows Chrome • 10.0.0.5', time: '15m ago' },
    { id: 3, name: 'Accountant (East Branch)', details: 'Android App • 172.16.0.4', time: '1h ago' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
        <MonitorSmartphone size={18} className="text-text-secondary" />
        Recent Login Activity
      </h3>
      <ul className="space-y-4">
        {logins.map((login) => (
          <li key={login.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3 last:border-0 last:pb-0">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-primary">{login.name}</span>
              <span className="text-xs text-text-secondary">{login.details}</span>
            </div>
            <span className="text-[10px] text-text-secondary bg-bg-page px-2 py-1 rounded w-fit">{login.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
