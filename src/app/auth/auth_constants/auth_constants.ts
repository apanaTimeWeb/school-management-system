import { Shield, School, GraduationCap, Calculator, Users, UserCircle, BookOpen, Bus, Key, Building2 } from 'lucide-react';

export const ROLE_LOGIN_CONFIG: Record<string, any> = {
  'super-admin': {
    id: 'super-admin',
    label: 'Super Admin',
    description: 'Platform Management & Settings',
    icon: Shield,
    color: '#1E3A8A',
    bgColor: '#1E3A8A0D',
    route: '/auth/login/super-admin',
    dashboardRoute: '/super-admin/01-dashboard',
    demoUser: 'super',
    demoPass: 'super123'
  },
  'school-admin': {
    id: 'school-admin',
    label: 'School Admin',
    description: 'School Management & Operations',
    icon: School,
    color: '#0F766E', // Primary
    bgColor: '#0F766E0D', // Light bg (5-10%)
    route: '/auth/login/school-admin',
    dashboardRoute: '/admin/01-dashboard',
    demoUser: 'admin',
    demoPass: 'admin123'
  },
  'principal': {
    id: 'principal',
    label: 'Principal',
    description: 'Executive Overview & Dashboards',
    icon: Building2,
    color: '#7C3AED',
    bgColor: '#7C3AED0D',
    route: '/auth/login/principal',
    dashboardRoute: '/principal/dashboard',
    demoUser: 'principal',
    demoPass: 'principal123'
  },
  'teacher': {
    id: 'teacher',
    label: 'Teacher',
    description: 'Classes, Grades & Students',
    icon: GraduationCap,
    color: '#15803D',
    bgColor: '#15803D0D',
    route: '/auth/login/teacher',
    dashboardRoute: '/teacher/dashboard',
    demoUser: 'teacher',
    demoPass: 'teacher123'
  },
  'accountant': {
    id: 'accountant',
    label: 'Accountant',
    description: 'Finance, Fees & Expense Tracking',
    icon: Calculator,
    color: '#475569',
    bgColor: '#4755690D',
    route: '/auth/login/accountant',
    dashboardRoute: '/accountant/dashboard',
    demoUser: 'accountant',
    demoPass: 'accountant123'
  },
  'hr': {
    id: 'hr',
    label: 'HR / Office',
    description: 'Staff, Payroll & HR Operations',
    icon: Users,
    color: '#BE185D',
    bgColor: '#BE185D0D',
    route: '/auth/login/hr',
    dashboardRoute: '/hr/dashboard',
    demoUser: 'hr',
    demoPass: 'hr123'
  },
  'student': {
    id: 'student',
    label: 'Student',
    description: 'Academics, Timetable & Exams',
    icon: UserCircle,
    color: '#0284C7',
    bgColor: '#0284C70D',
    route: '/auth/login/student',
    dashboardRoute: '/student/dashboard',
    demoUser: 'student',
    demoPass: 'student123'
  },
  'parent': {
    id: 'parent',
    label: 'Parent / Guardian',
    description: 'Fees, Attendance & Progress',
    icon: Users,
    color: '#B45309',
    bgColor: '#B453090D',
    route: '/auth/login/parent',
    dashboardRoute: '/parent/dashboard',
    demoUser: 'parent',
    demoPass: 'parent123'
  },
  'librarian': {
    id: 'librarian',
    label: 'Librarian',
    description: 'Books, Circulation & Records',
    icon: BookOpen,
    color: '#6D28D9',
    bgColor: '#6D28D90D',
    route: '/auth/login/librarian',
    dashboardRoute: '/librarian',
    demoUser: 'librarian',
    demoPass: 'librarian123'
  },
  'transport-manager': {
    id: 'transport-manager',
    label: 'Transport Manager',
    description: 'Vehicles, Routes & Tracking',
    icon: Bus,
    color: '#0891B2',
    bgColor: '#0891B20D',
    route: '/auth/login/transport-manager',
    dashboardRoute: '/transport-manager/dashboard',
    demoUser: 'transport',
    demoPass: 'transport123'
  },
  'hostel-warden': {
    id: 'hostel-warden',
    label: 'Hostel Warden',
    description: 'Hostels, Rooms & Allocations',
    icon: Key,
    color: '#166534',
    bgColor: '#1665340D',
    route: '/auth/login/hostel-warden',
    dashboardRoute: '/hostel-warden/dashboard',
    demoUser: 'hostel',
    demoPass: 'hostel123'
  }
};
