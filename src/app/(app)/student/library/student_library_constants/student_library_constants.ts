import type { StudentLibraryData } from '../student_library_types/student_library_types';

export const MOCK_LIBRARY_DATA: StudentLibraryData = {
  catalog: [
    {
      id: "book_1",
      title: "The Fundamentals of Physics",
      author: "Resnick Halliday",
      category: "Science",
      coverImageColor: "bg-blue-600",
      isAvailable: true,
      totalCopies: 5,
      availableCopies: 2
    },
    {
      id: "book_2",
      title: "Advanced Mathematics Vol 2",
      author: "R.D. Sharma",
      category: "Mathematics",
      coverImageColor: "bg-emerald-600",
      isAvailable: false,
      totalCopies: 3,
      availableCopies: 0
    },
    {
      id: "book_3",
      title: "History of Modern India",
      author: "Bipan Chandra",
      category: "History",
      coverImageColor: "bg-amber-600",
      isAvailable: true,
      totalCopies: 10,
      availableCopies: 7
    },
    {
      id: "book_4",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      category: "Fiction",
      coverImageColor: "bg-purple-600",
      isAvailable: true,
      totalCopies: 2,
      availableCopies: 1
    }
  ],
  issuedBooks: [
    {
      id: "iss_1",
      bookId: "book_5",
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      issuedDate: "Oct 01, 2024",
      dueDate: "Oct 15, 2024",
      fineAmount: 0,
      isOverdue: false,
      renewCount: 0
    },
    {
      id: "iss_2",
      bookId: "book_6",
      title: "Organic Chemistry",
      author: "Morrison & Boyd",
      issuedDate: "Sep 10, 2024",
      dueDate: "Sep 24, 2024",
      fineAmount: 150, // Rs. 10 per day late fine
      isOverdue: true,
      renewCount: 1
    }
  ],
  history: [
    {
      id: "hist_1",
      title: "Concepts of Physics Part 1",
      issuedDate: "Aug 01, 2024",
      returnedDate: "Aug 14, 2024",
      finePaid: 0,
      status: "Returned"
    },
    {
      id: "hist_2",
      title: "The Alchemist",
      issuedDate: "Jul 10, 2024",
      returnedDate: "Jul 28, 2024",
      finePaid: 40,
      status: "Returned"
    }
  ]
};
