import { Plus, UserPlus, CalendarPlus, Settings, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function QuickActions() {
  const actions = [
    { label: 'Add School/Branch', icon: Plus, href: '/super-admin/schools/add', color: 'bg-primary text-white' },
    { label: 'Add User', icon: UserPlus, href: '/super-admin/users/add', color: 'bg-info text-white' },
    { label: 'Create Session', icon: CalendarPlus, href: '/super-admin/sessions/create', color: 'bg-purple text-white' },
    { label: 'Permissions', icon: ShieldCheck, href: '/super-admin/permissions', color: 'bg-warning text-white' },
    { label: 'Settings', icon: Settings, href: '/super-admin/settings', color: 'bg-success text-white' },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-base font-semibold text-text-primary mb-4">Quick Actions</h3>
      <div className="flex flex-wrap gap-3">
        {actions.map((action, idx) => {
          const Icon = action.icon;
          return (
            <Link 
              key={idx}
              href={action.href}
              className="flex items-center gap-2 px-4 py-2.5 bg-bg-page border border-border rounded-md hover:border-primary hover:bg-primary-subtle transition-all duration-200 group"
            >
              <div className={`p-1.5 rounded ${action.color} group-hover:scale-110 transition-transform`}>
                <Icon size={16} strokeWidth={2} className="text-white" />
              </div>
              <span className="text-sm font-medium text-text-primary">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
