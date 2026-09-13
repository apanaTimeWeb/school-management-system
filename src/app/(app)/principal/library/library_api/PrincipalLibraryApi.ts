import { PrincipalLibraryStats, PrincipalBorrowedBook } from '../library_types/PrincipalLibrary.types';
import { PRINCIPAL_MOCK_LIBRARY_STATS, PRINCIPAL_MOCK_BORROWED_BOOKS } from '../library_constants/PrincipalLibraryConstants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const MOCK_DELAY = 500;

export const fetchPrincipalLibraryStats = async (): Promise<PrincipalLibraryStats> => {
  await delay(MOCK_DELAY);
  return { ...PRINCIPAL_MOCK_LIBRARY_STATS };
};

export const fetchPrincipalBorrowedBooks = async (): Promise<PrincipalBorrowedBook[]> => {
  await delay(MOCK_DELAY);
  return [...PRINCIPAL_MOCK_BORROWED_BOOKS];
};
