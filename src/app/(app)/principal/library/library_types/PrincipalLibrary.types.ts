export interface PrincipalLibraryStats {
  totalBooks: number;
  booksIssued: number;
  booksAvailable: number;
  totalMembers: number;
  activeReaders: number;
  overdueCount: number;
}

export type PrincipalBorrowStatus = 'Issued' | 'Overdue' | 'Returned';

export interface PrincipalBorrowedBook {
  id: string; // Transaction ID
  bookTitle: string;
  bookId: string;
  author: string;
  category: string;
  borrowerName: string;
  borrowerId: string;
  borrowerType: 'Student' | 'Staff';
  classAndSection?: string;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: PrincipalBorrowStatus;
  fineAmount?: number;
}
