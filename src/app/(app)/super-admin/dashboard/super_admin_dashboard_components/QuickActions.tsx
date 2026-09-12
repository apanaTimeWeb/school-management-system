import { 
  Plus, UserPlus, CalendarPlus, Settings, ShieldCheck, 
  School, GraduationCap, Key, DatabaseBackup, History 
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/app/(app)/super-admin/super_admin_components/SuperAdminSidebar';

export default function QuickActions() {
  const actions = [
    { label: 'Add School/Branch', icon: Plus, href: '/super-admin/schools/add', color: 'bg-primary-subtle text-primary hover:bg-primary hover:text-white border-primary' },
    { label: 'Add User', icon: UserPlus, href: '/super-admin/users/add', color: 'bg-info-bg text-info hover:bg-info hover:text-white border-info' },
    { label: 'Create Session', icon: CalendarPlus, href: '/super-admin/sessions/create', color: 'bg-purple-bg text-purple hover:bg-purple hover:text-white border-purple' },
    { label: 'Create Class', icon: GraduationCap, href: '/super-admin/structure/class/create', color: 'bg-success-bg text-success hover:bg-success hover:text-white border-success' },
    { label: 'Create Role', icon: Key, href: '/super-admin/roles/create', color: 'bg-warning-bg text-warning hover:bg-warning hover:text-white border-warning' },
    { label: 'Permissions', icon: ShieldCheck, href: '/super-admin/permissions', color: 'bg-danger-bg text-danger hover:bg-danger hover:text-white border-danger' },
    { label: 'System Settings', icon: Settings, href: '/super-admin/settings', color: 'bg-primary-subtle text-primary hover:bg-primary hover:text-white border-primary' },
    { label: 'Backup', icon: DatabaseBackup, href: '/super-admin/backups', color: 'bg-purple-bg text-purple hover:bg-purple hover:text-white border-purple' },
    { label: 'Audit Logs', icon: History, href: '/super-admin/audit', color: 'bg-info-bg text-info hover:bg-info hover:text-white border-info' },
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
              className={cn(
                "flex items-center gap-2 px-4 py-2 border rounded-md transition-all duration-200 group",
                action.color
              )}
            >
              <Icon size={16} strokeWidth={2} className="transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
