import { PrincipalLibraryStats, PrincipalBorrowedBook } from '../library_types/PrincipalLibrary.types';

export const PRINCIPAL_MOCK_LIBRARY_STATS: PrincipalLibraryStats = {
  totalBooks: 15420,
  booksIssued: 1245,
  booksAvailable: 14175,
  totalMembers: 2150,
  activeReaders: 850,
  overdueCount: 42
};

export const PRINCIPAL_MOCK_BORROWED_BOOKS: PrincipalBorrowedBook[] = [
  {
    id: 'TXN-001',
    bookTitle: 'Concepts of Physics - Vol 1',
    bookId: 'BK-1045',
    author: 'H.C. Verma',
    category: 'Science & Physics',
    borrowerName: 'Rohan Sharma',
    borrowerId: 'STU-1122',
    borrowerType: 'Student',
    classAndSection: '11-A',
    issueDate: '2023-11-10',
    dueDate: '2023-11-24',
    status: 'Issued'
  },
  {
    id: 'TXN-002',
    bookTitle: 'The Alchemist',
    bookId: 'BK-3021',
    author: 'Paulo Coelho',
    category: 'Literature',
    borrowerName: 'Sneha Patil',
    borrowerId: 'STU-0988',
    borrowerType: 'Student',
    classAndSection: '12-B',
    issueDate: '2023-10-20',
    dueDate: '2023-11-04',
    status: 'Overdue',
    fineAmount: 150
  },
  {
    id: 'TXN-003',
    bookTitle: 'Modern Indian History',
    bookId: 'BK-5011',
    author: 'Bipan Chandra',
    category: 'History',
    borrowerName: 'Mr. Arvind Kumar',
    borrowerId: 'EMP-045',
    borrowerType: 'Staff',
    issueDate: '2023-10-15',
    dueDate: '2023-11-15',
    status: 'Overdue',
    fineAmount: 0 // Staff might not have fines
  },
  {
    id: 'TXN-004',
    bookTitle: 'Introduction to Algorithms',
    bookId: 'BK-8842',
    author: 'Thomas H. Cormen',
    category: 'Computer Science',
    borrowerName: 'Karan Singh',
    borrowerId: 'STU-1300',
    borrowerType: 'Student',
    classAndSection: '11-C',
    issueDate: '2023-11-18',
    dueDate: '2023-12-02',
    status: 'Issued'
  },
  {
    id: 'TXN-005',
    bookTitle: 'Atomic Habits',
    bookId: 'BK-9921',
    author: 'James Clear',
    category: 'Self-Help',
    borrowerName: 'Aditi Jain',
    borrowerId: 'STU-1405',
    borrowerType: 'Student',
    classAndSection: '10-A',
    issueDate: '2023-11-01',
    dueDate: '2023-11-15',
    returnDate: '2023-11-14',
    status: 'Returned'
  }
];
