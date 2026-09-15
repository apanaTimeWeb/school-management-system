export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  category: string;
  coverImageColor: string;
  isAvailable: boolean;
  totalCopies: number;
  availableCopies: number;
}

export interface IssuedBook {
  id: string; // Issue record ID
  bookId: string;
  title: string;
  author: string;
  issuedDate: string;
  dueDate: string;
  fineAmount: number;
  isOverdue: boolean;
  renewCount: number; // e.g., max 2 renewals allowed
}

export interface LibraryHistoryRecord {
  id: string;
  title: string;
  issuedDate: string;
  returnedDate: string;
  finePaid: number;
  status: 'Returned' | 'Lost';
}

export interface StudentLibraryData {
  catalog: LibraryBook[];
  issuedBooks: IssuedBook[];
  history: LibraryHistoryRecord[];
}
