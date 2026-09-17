import type { DailyMenu, MessAttendance, MessAnalytics, MessCommitteeMeeting } from '../mess_types/mess.types';

export const MOCK_DAILY_MENU: DailyMenu[] = [
  {
    id: 'MNU-MON',
    day: 'Monday',
    breakfast: 'Poha, Jalebi, Tea/Coffee',
    lunch: 'Dal Makhani, Rice, Roti, Salad',
    snacks: 'Samosa, Tea',
    dinner: 'Paneer Butter Masala, Roti, Rice, Gulab Jamun'
  },
  {
    id: 'MNU-TUE',
    day: 'Tuesday',
    breakfast: 'Aloo Paratha, Curd, Pickle',
    lunch: 'Rajma, Rice, Roti, Salad',
    snacks: 'Pakora, Tea',
    dinner: 'Mix Veg, Roti, Dal Tadka'
  }
];

export const MOCK_MESS_ATTENDANCE: MessAttendance[] = [
  {
    id: 'MATT-001',
    studentName: 'Amit Kumar',
    studentId: 'STU-1024',
    dietPreference: 'Veg',
    mealType: 'Lunch',
    scannedTime: '13:05:22',
    status: 'SCANNED',
    isGuest: false
  },
  {
    id: 'MATT-002',
    studentName: 'Sneha Patel',
    studentId: 'STU-1025',
    dietPreference: 'Jain',
    mealType: 'Lunch',
    scannedTime: '13:10:45',
    status: 'SCANNED',
    isGuest: false
  },
  {
    id: 'MATT-003',
    studentName: 'Rahul Singh',
    studentId: 'STU-0998',
    dietPreference: 'Non-Veg',
    mealType: 'Lunch',
    scannedTime: '',
    status: 'EXEMPTED',
    isGuest: false
  },
  {
    id: 'MATT-004',
    studentName: 'Guest of Priya',
    studentId: 'GST-001',
    dietPreference: 'Veg',
    mealType: 'Lunch',
    scannedTime: '13:30:00',
    status: 'SCANNED',
    isGuest: true
  }
];

export const MOCK_MESS_ANALYTICS: MessAnalytics = {
  date: new Date().toISOString().split('T')[0],
  totalMealsPrepared: 400,
  mealsConsumed: 385,
  foodWastageKg: 12.5
};

export const MOCK_MESS_MEETINGS: MessCommitteeMeeting[] = [
  {
    id: 'MTG-001',
    date: '2023-11-01',
    agenda: 'Menu Revision for Winter Season',
    minutes: 'Discussed adding more hot beverages and seasonal vegetables. Agreed to reduce spice levels based on feedback.',
    actionItems: ['Update Monday breakfast menu', 'Procure seasonal veg vendor']
  }
];
