import { MOCK_LIBRARY_DATA } from '../student_library_constants/student_library_constants';
import type { StudentLibraryData } from '../student_library_types/student_library_types';

/**
 * RESPONSIBILITY: Fetches library catalog and handles book operations.
 */
export async function fetchStudentLibraryData(): Promise<{ data: StudentLibraryData, success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    success: true,
    message: "Library data fetched successfully",
    data: MOCK_LIBRARY_DATA,
  };
}

export async function reserveBook(bookId: string): Promise<{ success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API delay
  return {
    success: true,
    message: "Book reserved successfully. Please collect it from the library counter within 24 hours.",
  };
}

export async function renewBook(issueId: string): Promise<{ success: boolean, message: string, newDueDate?: string }> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    message: "Book renewed for another 7 days successfully.",
    newDueDate: "Oct 22, 2024" // Mock new date
  };
}
