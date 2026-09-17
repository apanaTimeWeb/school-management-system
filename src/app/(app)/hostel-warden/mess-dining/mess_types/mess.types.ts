export type MealType = 'Breakfast' | 'Lunch' | 'Snacks' | 'Dinner';
export type DietPreference = 'Veg' | 'Non-Veg' | 'Jain' | 'Vegan';

export interface DailyMenu {
  id: string;
  day: string;
  breakfast: string;
  lunch: string;
  snacks: string;
  dinner: string;
}

export interface MessAttendance {
  id: string;
  studentName: string;
  studentId: string;
  dietPreference: DietPreference;
  mealType: MealType;
  scannedTime: string;
  status: 'SCANNED' | 'EXEMPTED' | 'MISSED';
  isGuest: boolean;
}

export interface MessAnalytics {
  date: string;
  totalMealsPrepared: number;
  mealsConsumed: number;
  foodWastageKg: number;
}

export interface MessCommitteeMeeting {
  id: string;
  date: string;
  agenda: string;
  minutes: string;
  actionItems: string[];
}
