export const TEACHER_PROFILE_MOCK = {
  personalDetails: {
    name: 'Rohit Sharma',
    employeeId: 'EMP-T-1023',
    email: 'rohit.sharma@school.edu',
    phone: '+91 98765 43210',
    dob: '15-Aug-1985',
    bloodGroup: 'B+',
    address: '123, Rose Villa, MG Road, Mumbai, India',
    qualifications: [
      { degree: 'M.Sc. Mathematics', institution: 'Mumbai University', year: '2008' },
      { degree: 'B.Ed.', institution: 'State College of Education', year: '2010' }
    ]
  },
  assignments: {
    subjects: [
      { name: 'Mathematics', type: 'Theory', level: 'Advanced' },
      { name: 'Physics', type: 'Theory & Practical', level: 'Intermediate' }
    ],
    classes: [
      { className: 'Class 10 A', role: 'Class Teacher' },
      { className: 'Class 10 B', role: 'Subject Teacher' },
      { className: 'Class 11 Sci', role: 'Subject Teacher' }
    ]
  },
  security: {
    is2FAEnabled: true,
    lastPasswordChange: '2023-10-15'
  },
  sessions: {
    active: [
      { device: 'Windows 11 PC - Chrome', ip: '192.168.1.45', location: 'Mumbai, India', lastActive: 'Active Now', isCurrent: true },
      { device: 'iPhone 13 - Safari', ip: '103.11.22.33', location: 'Mumbai, India', lastActive: '2 hours ago', isCurrent: false }
    ],
    history: [
      { date: '2023-11-20 09:30 AM', device: 'Windows 11 PC - Chrome', ip: '192.168.1.45', status: 'Success' },
      { date: '2023-11-19 10:15 AM', device: 'Windows 11 PC - Chrome', ip: '192.168.1.45', status: 'Success' },
      { date: '2023-11-18 08:45 PM', device: 'Unknown Device', ip: '45.22.11.90', status: 'Failed Attempt' }
    ]
  }
};
