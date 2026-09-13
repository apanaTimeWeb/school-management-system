import { PrincipalHealthStudent, PrincipalMedicalIncident, PrincipalHealthStats } from '../health_types/PrincipalHealth.types';

export const PRINCIPAL_MOCK_HEALTH_STATS: PrincipalHealthStats = {
  totalStudents: 1540,
  studentsWithCheckups: 1420,
  activeMedicalAlerts: 45,
  emergenciesThisMonth: 2
};

export const PRINCIPAL_MOCK_HEALTH_STUDENTS: PrincipalHealthStudent[] = [
  {
    id: 'HS-001',
    studentId: 'STU-1122',
    studentName: 'Aarav Sharma',
    classAndSection: '10-A',
    bloodGroup: 'B+',
    heightCm: 165,
    weightKg: 55,
    allergies: ['Peanuts', 'Dust'],
    medicalConditions: ['Asthma'],
    lastCheckupDate: '2023-09-15',
    alertLevel: 'High'
  },
  {
    id: 'HS-002',
    studentId: 'STU-1300',
    studentName: 'Rohan Verma',
    classAndSection: '12-B',
    bloodGroup: 'O+',
    heightCm: 172,
    weightKg: 68,
    allergies: [],
    medicalConditions: [],
    lastCheckupDate: '2023-08-20',
  },
  {
    id: 'HS-003',
    studentId: 'STU-0988',
    studentName: 'Sneha Patil',
    classAndSection: '11-C',
    bloodGroup: 'A-',
    heightCm: 158,
    weightKg: 48,
    allergies: ['Penicillin'],
    medicalConditions: ['Mild Anemia'],
    lastCheckupDate: '2023-10-05',
    alertLevel: 'Medium'
  }
];

export const PRINCIPAL_MOCK_MEDICAL_INCIDENTS: PrincipalMedicalIncident[] = [
  {
    id: 'MI-001',
    studentId: 'STU-1122',
    studentName: 'Aarav Sharma',
    classAndSection: '10-A',
    date: '2023-11-20',
    time: '10:30 AM',
    severity: 'Emergency',
    incidentType: 'Asthma Attack',
    description: 'Student experienced severe breathlessness during PT period. Inhaler was administered immediately.',
    actionTaken: 'Sent to medical room, provided oxygen via nebulizer, and observed until stabilized.',
    parentNotified: true,
    status: 'Resolved'
  },
  {
    id: 'MI-002',
    studentId: 'STU-2233',
    studentName: 'Karan Singh',
    classAndSection: '8-B',
    date: '2023-11-21',
    time: '12:15 PM',
    severity: 'Minor',
    incidentType: 'Sports Injury',
    description: 'Twisted ankle while playing basketball on the court.',
    actionTaken: 'Ice pack applied and pain relief spray provided. Advised rest for the day.',
    parentNotified: false,
    status: 'Open'
  }
];
