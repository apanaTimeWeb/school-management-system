import type { LetterTemplate, GeneratedLetter, FetchLettersParams, LettersResponse } from '../hr_letters_types/AdminHrLettersTypes';
import { MOCK_LETTER_TEMPLATES, MOCK_GENERATED_LETTERS } from '../hr_letters_constants/AdminHrLettersConstants';

export async function fetchLetterTemplates(): Promise<LettersResponse<LetterTemplate[]>> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return { success: true, data: MOCK_LETTER_TEMPLATES };
}

export async function fetchLetterHistory(params?: FetchLettersParams): Promise<LettersResponse<GeneratedLetter[]>> {
  await new Promise(resolve => setTimeout(resolve, 500));
  let filtered = [...MOCK_GENERATED_LETTERS];

  if (params?.type && params.type !== "All") {
    filtered = filtered.filter(l => l.letterType === params.type);
  }
  
  if (params?.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(l => 
      l.employeeName.toLowerCase().includes(q) || 
      l.referenceNo.toLowerCase().includes(q) ||
      l.employeeId.toLowerCase().includes(q)
    );
  }

  return { success: true, data: filtered };
}
