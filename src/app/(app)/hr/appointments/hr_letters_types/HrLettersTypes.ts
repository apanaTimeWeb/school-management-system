export type LetterType = 'Appointment Letter' | 'Joining Letter' | 'Experience Certificate' | 'Relieving Letter' | 'Salary/Employment Letter' | 'Custom HR Letter';

export interface LetterTemplate {
  id: string;
  type: LetterType;
  title: string;
  description: string;
  defaultContent: string;
}

export interface GeneratedLetter {
  id: string;
  employeeId: string;
  employeeName: string;
  letterType: LetterType;
  generatedDate: string;
  generatedBy: string;
  status: 'Generated' | 'Emailed' | 'Printed';
  referenceNo: string;
}

export interface FetchLettersParams {
  search?: string;
  type?: string;
}

export interface LettersResponse<T> {
  success: boolean;
  data: T;
}
