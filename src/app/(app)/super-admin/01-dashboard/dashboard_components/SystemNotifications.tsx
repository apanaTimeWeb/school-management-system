import { Bell } from "lucide-react";

export default function SystemNotifications() {
  const notifications = [
    { id: 1, title: 'New Admission Application', time: '10 mins ago', type: 'info' },
    { id: 2, title: 'Fee Payment Received', time: '1 hour ago', type: 'success' },
    { id: 3, title: 'Teacher Leave Request', time: '2 hours ago', type: 'warning' },
    { id: 4, title: 'Daily Backup Completed', time: '5 hours ago', type: 'success' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-text-primary flex items-center gap-2">
          <Bell size={18} className="text-info" />
          System Notifications
        </h3>
        <button className="text-xs text-primary hover:underline">View All</button>
      </div>
      
      <ul className="space-y-3">
        {notifications.map((notif) => (
          <li key={notif.id} className="flex justify-between items-start border-b border-border pb-2 last:border-0 last:pb-0">
            <span className="text-sm text-text-primary">{notif.title}</span>
            <span className="text-[10px] text-text-secondary bg-bg-page px-2 py-0.5 rounded ml-2 shrink-0">{notif.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
