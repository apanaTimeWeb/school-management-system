import { ShieldAlert } from "lucide-react";

export default function SystemAlerts() {
  const alerts = [
    { id: 1, title: 'Storage almost full', desc: 'Database at 85% capacity.', type: 'warning' },
    { id: 2, title: 'Payment gateway failure', desc: '3 transactions failed in last 1hr.', type: 'danger' },
    { id: 3, title: 'Multiple failed logins', desc: 'IP 192.168.1.105 blocked temporarily.', type: 'danger' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
        <ShieldAlert size={18} className="text-danger" />
        <span className="w-2 h-2 rounded-full bg-danger animate-pulse hidden sm:block"></span>
        System Alerts
      </h3>
      <ul className="space-y-4">
        {alerts.map((alert) => (
          <li key={alert.id} className={`flex gap-3 border-l-2 pl-3 ${alert.type === 'warning' ? 'border-warning' : 'border-danger'}`}>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-primary">{alert.title}</span>
              <span className="text-xs text-text-secondary">{alert.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
