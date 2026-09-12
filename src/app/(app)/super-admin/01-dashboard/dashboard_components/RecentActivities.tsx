import { Activity } from "lucide-react";

export default function RecentActivities() {
  const activities = [
    { id: 1, action: 'Role Updated', user: 'System Admin', target: 'Teacher Role', time: '2 mins ago' },
    { id: 2, action: 'Branch Added', user: 'Super Admin', target: 'East Campus', time: '1 hour ago' },
    { id: 3, action: 'Session Created', user: 'System Admin', target: '2027-2028', time: '3 hours ago' },
    { id: 4, action: 'Settings Changed', user: 'Super Admin', target: 'Payment Gateway', time: 'Yesterday' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-base font-semibold text-text-primary mb-4 flex items-center gap-2">
        <Activity size={18} className="text-primary" />
        Recent Activities
      </h3>
      <div className="relative border-l border-border ml-3 space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative pl-6">
            <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-primary rounded-full border-2 border-card"></span>
            <div className="flex flex-col">
              <span className="text-sm text-text-primary font-medium">
                {activity.action} <span className="font-normal text-text-secondary">on</span> {activity.target}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-primary">{activity.user}</span>
                <span className="text-xs text-text-secondary">• {activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
