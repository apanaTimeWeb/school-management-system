import { 
  School, Users, UserCheck, GraduationCap, Users2, ShieldAlert, 
  UserMinus, CheckCircle, Calendar, CreditCard, UserPlus, Clock, Banknote 
} from 'lucide-react';
import { cn } from '@/app/(app)/super-admin/super_admin_components/SuperAdminSidebar';

interface KPIProps {
  title: string;
  value: string | React.ReactNode;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
  icon: React.ElementType;
  colorClass: string;
}

const KPICard = ({ title, value, subtitle, trend, trendUp, icon: Icon, colorClass }: KPIProps) => (
  <div className="bg-card border border-border rounded-lg p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
    <div className="flex items-start justify-between">
      <div className={cn("p-2.5 rounded-md transition-transform group-hover:scale-110", colorClass)}>
        <Icon size={20} strokeWidth={2} />
      </div>
      <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider text-right max-w-[120px]">{title}</span>
    </div>
    
    <div className="mt-4 flex items-end justify-between">
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-text-primary">{value}</span>
        {subtitle && <span className="text-xs text-text-secondary mt-1">{subtitle}</span>}
      </div>
      {trend && (
        <span className={cn(
          "text-xs font-semibold px-2 py-1 rounded-full",
          trendUp ? "text-success bg-success-bg" : "text-danger bg-danger-bg"
        )}>
          {trendUp ? '↑' : '↓'} {trend}
        </span>
      )}
    </div>
  </div>
);

export default function DashboardKPIs() {
  const kpis: KPIProps[] = [
    { title: 'Total Branches', value: '4', icon: School, colorClass: 'bg-primary-subtle text-primary' },
    { title: 'Total Students', value: '3,250', trend: '12%', trendUp: true, icon: GraduationCap, colorClass: 'bg-info-bg text-info' },
    { title: 'Total Parents', value: '2,900', icon: Users, colorClass: 'bg-purple-bg text-purple' },
    { title: 'Total Teachers', value: '120', icon: Users2, colorClass: 'bg-warning-bg text-warning' },
    { title: 'Total Staff', value: '60', icon: Users2, colorClass: 'bg-warning-bg text-warning' },
    { title: 'Active Users', value: '1,450', trend: '5%', trendUp: true, icon: UserCheck, colorClass: 'bg-success-bg text-success' },
    { title: 'Inactive Users', value: '32', icon: UserMinus, colorClass: 'bg-danger-bg text-danger' },
    { title: 'Pending Approvals', value: '14', icon: Clock, colorClass: 'bg-warning-bg text-warning' },
    { title: 'New Admissions', value: '128', subtitle: 'This Month', icon: UserPlus, colorClass: 'bg-info-bg text-info' },
    { title: 'Current Session', value: '2026-27', icon: Calendar, colorClass: 'bg-primary-subtle text-primary' },
    { title: 'Financial Year', value: 'FY26-27', icon: CreditCard, colorClass: 'bg-primary-subtle text-primary' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
      {kpis.map((kpi, idx) => (
        <KPICard key={idx} {...kpi} />
      ))}
    </div>
  );
}
