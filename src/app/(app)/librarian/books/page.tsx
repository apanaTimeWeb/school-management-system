"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  X,
  Filter,
  Image as ImageIcon,
  MoreVertical,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Archive,
  Wrench,
  Clock,
} from "lucide-react";

// Types
type BookStatus = 'Available' | 'Issued' | 'Reserved' | 'Lost' | 'Damaged' | 'Under Repair' | 'Archived';

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  edition: string;
  language: string;
  category: string;
  subject: string;
  classGrade: string;
  publicationYear: string;
  pages: number;
  description: string;
  coverImage: string;
  shelf: string;
  rack: string;
  tags: string;
  status: BookStatus;
}

const MOCK_BOOKS: Book[] = [
  {
    id: "B-1001",
    title: "Advanced Mathematics",
    author: "R.D. Sharma",
    publisher: "Dhanpat Rai",
    isbn: "978-81-9364-780-6",
    edition: "15th",
    language: "English",
    category: "Academic",
    subject: "Mathematics",
    classGrade: "12",
    publicationYear: "2023",
    pages: 850,
    description: "Comprehensive textbook for Class 12 Mathematics covering all CBSE topics.",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80",
    shelf: "A1",
    rack: "R3",
    tags: "Maths, CBSE, Boards",
    status: "Available"
  },
  {
    id: "B-1002",
    title: "Physics Concepts",
    author: "H.C. Verma",
    publisher: "Bharati Bhawan",
    isbn: "978-81-7709-187-8",
    edition: "Part 1",
    language: "English",
    category: "Academic",
    subject: "Physics",
    classGrade: "11",
    publicationYear: "2022",
    pages: 450,
    description: "Fundamental physics concepts for competitive exams and class 11.",
    coverImage: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&q=80",
    shelf: "B2",
    rack: "R1",
    tags: "Physics, JEE, NEET",
    status: "Issued"
  },
  {
    id: "B-1003",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publisher: "Bloomsbury",
    isbn: "978-0-7475-3269-9",
    edition: "1st",
    language: "English",
    category: "Fiction",
    subject: "Fantasy",
    classGrade: "All",
    publicationYear: "1997",
    pages: 223,
    description: "A boy discovers he is a wizard and attends a school of magic.",
    coverImage: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=500&q=80",
    shelf: "F1",
    rack: "R5",
    tags: "Magic, Story, Kids",
    status: "Damaged"
  }
];

const emptyBook: Book = {
  id: "", title: "", author: "", publisher: "", isbn: "", edition: "", language: "", category: "",
  subject: "", classGrade: "", publicationYear: "", pages: 0, description: "", coverImage: "",
  shelf: "", rack: "", tags: "", status: "Available"
};

export default function BookCatalog() {
  const [books, setBooks] = useState<Book[]>(MOCK_BOOKS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All");

  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  
  const [currentBook, setCurrentBook] = useState<Book>(emptyBook);
  const [isEditing, setIsEditing] = useState(false);

  // Filter books
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || book.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Handlers
  const openAddModal = () => {
    setCurrentBook({ ...emptyBook, id: `B-${1000 + books.length + 1}` });
    setIsEditing(false);
    setIsFormOpen(true);
  };

  const openEditModal = (book: Book) => {
    setCurrentBook(book);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const openViewModal = (book: Book) => {
    setCurrentBook(book);
    setIsViewOpen(true);
  };

  const openDeleteModal = (book: Book) => {
    setCurrentBook(book);
    setIsDeleteOpen(true);
  };

  const saveBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setBooks(books.map(b => b.id === currentBook.id ? currentBook : b));
    } else {
      setBooks([currentBook, ...books]);
    }
    setIsFormOpen(false);
  };

  const deleteBook = () => {
    setBooks(books.filter(b => b.id !== currentBook.id));
    setIsDeleteOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentBook(prev => ({ ...prev, [name]: value }));
  };

  const getStatusBadge = (status: BookStatus) => {
    switch (status) {
      case 'Available': return <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-max"><CheckCircle2 className="w-3 h-3"/> Available</span>;
      case 'Issued': return <span className="bg-blue-100 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-max"><Clock className="w-3 h-3"/> Issued</span>;
      case 'Reserved': return <span className="bg-purple-100 text-purple-700 border border-purple-200 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-max"><AlertCircle className="w-3 h-3"/> Reserved</span>;
      case 'Lost': return <span className="bg-red-100 text-red-700 border border-red-200 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-max"><XCircle className="w-3 h-3"/> Lost</span>;
      case 'Damaged': return <span className="bg-orange-100 text-orange-700 border border-orange-200 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-max"><AlertCircle className="w-3 h-3"/> Damaged</span>;
      case 'Under Repair': return <span className="bg-amber-100 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-max"><Wrench className="w-3 h-3"/> Under Repair</span>;
      case 'Archived': return <span className="bg-gray-100 text-gray-700 border border-gray-300 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-max"><Archive className="w-3 h-3"/> Archived</span>;
      default: return <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-semibold">{status}</span>;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            Book Catalog
          </h1>
          <p className="text-gray-500 mt-1">Manage all library books, copies, and their physical locations.</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Book
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search by title, author, or ID..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-5 h-5 text-gray-500" />
          <select 
            className="w-full md:w-auto px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Issued">Issued</option>
            <option value="Reserved">Reserved</option>
            <option value="Lost">Lost</option>
            <option value="Damaged">Damaged</option>
            <option value="Under Repair">Under Repair</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Book List / Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 text-gray-500 text-sm border-b border-gray-100">
                <th className="py-4 px-6 font-medium">Book Details</th>
                <th className="py-4 px-6 font-medium">Category / Subject</th>
                <th className="py-4 px-6 font-medium">Location</th>
                <th className="py-4 px-6 font-medium">Status</th>
                <th className="py-4 px-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book.id} className="hover:bg-indigo-50/30 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-16 bg-gray-100 rounded-md overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                          {book.coverImage ? (
                            <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <ImageIcon className="w-6 h-6" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-indigo-600 mb-0.5">{book.id}</p>
                          <h3 className="text-base font-bold text-gray-800 line-clamp-1">{book.title}</h3>
                          <p className="text-sm text-gray-500">{book.author}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm font-medium text-gray-700">{book.category}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{book.subject}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Shelf:</span> {book.shelf || '-'}
                        <br />
                        <span className="font-medium text-gray-700">Rack:</span> {book.rack || '-'}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(book.status)}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => openViewModal(book)}
                          className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => openEditModal(book)}
                          className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                          title="Edit Book"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => openDeleteModal(book)}
                          className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete/Archive"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-500">
                    <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-lg font-medium">No books found</p>
                    <p className="text-sm">Try adjusting your search or filters.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl my-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                {isEditing ? <Edit className="w-5 h-5 text-emerald-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                {isEditing ? "Edit Book Details" : "Add New Book"}
              </h2>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={saveBook} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1: Basic Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 border-b pb-2">Basic Info</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Book Title *</label>
                    <input required type="text" name="title" value={currentBook.title} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Author *</label>
                    <input required type="text" name="author" value={currentBook.author} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Publisher</label>
                    <input type="text" name="publisher" value={currentBook.publisher} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ISBN</label>
                    <input type="text" name="isbn" value={currentBook.isbn} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Edition</label>
                      <input type="text" name="edition" value={currentBook.edition} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pages</label>
                      <input type="number" name="pages" value={currentBook.pages} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                  </div>
                </div>

                {/* Column 2: Classification */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 border-b pb-2">Classification</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select required name="category" value={currentBook.category} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                      <option value="">Select Category</option>
                      <option value="Academic">Academic / Textbooks</option>
                      <option value="Fiction">Fiction / Novels</option>
                      <option value="Reference">Reference (Dictionary, Atlas)</option>
                      <option value="Biography">Biography</option>
                      <option value="Journals">Journals / Magazines</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" name="subject" value={currentBook.subject} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class/Grade</label>
                    <input type="text" name="classGrade" value={currentBook.classGrade} onChange={handleInputChange} placeholder="e.g. 10, 11, All" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                      <input type="text" name="language" value={currentBook.language} onChange={handleInputChange} placeholder="English, Hindi, etc." className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pub. Year</label>
                      <input type="text" name="publicationYear" value={currentBook.publicationYear} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                    <input type="text" name="tags" value={currentBook.tags} onChange={handleInputChange} placeholder="Comma separated keywords" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                </div>

                {/* Column 3: Location, Status & Media */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700 border-b pb-2">Location & Media</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Shelf</label>
                      <input type="text" name="shelf" value={currentBook.shelf} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rack</label>
                      <input type="text" name="rack" value={currentBook.rack} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Book Status</label>
                    <select name="status" value={currentBook.status} onChange={handleInputChange} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                      <option value="Available">Available</option>
                      <option value="Issued">Issued</option>
                      <option value="Reserved">Reserved</option>
                      <option value="Lost">Lost</option>
                      <option value="Damaged">Damaged</option>
                      <option value="Under Repair">Under Repair</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                    <input type="text" name="coverImage" value={currentBook.coverImage} onChange={handleInputChange} placeholder="https://..." className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea name="description" value={currentBook.description} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"></textarea>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsFormOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  {isEditing ? "Update Book" : "Save Book"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {isViewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                Book Details: {currentBook.id}
              </h2>
              <div className="flex items-center gap-2">
                <button onClick={() => { setIsViewOpen(false); openEditModal(currentBook); }} className="p-2 bg-white border border-gray-200 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors shadow-sm">
                  <Edit className="w-5 h-5" />
                </button>
                <button onClick={() => setIsViewOpen(false)} className="p-2 bg-white border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 aspect-[3/4]">
                  {currentBook.coverImage ? (
                     <img src={currentBook.coverImage} alt={currentBook.title} className="w-full h-full object-cover" />
                  ) : (
                     <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                        <span className="text-sm font-medium">No Cover</span>
                     </div>
                  )}
                </div>
                <div className="mt-4 flex justify-center">
                   {getStatusBadge(currentBook.status)}
                </div>
              </div>
              
              <div className="w-full md:w-2/3 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                <div className="col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentBook.title}</h3>
                  <p className="text-lg text-indigo-600 font-medium">{currentBook.author}</p>
                </div>
                
                <div className="col-span-2 mt-2">
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {currentBook.description || "No description provided."}
                  </p>
                </div>

                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">Publisher</span><span className="font-medium text-gray-800">{currentBook.publisher || '-'}</span></div>
                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">ISBN</span><span className="font-medium text-gray-800">{currentBook.isbn || '-'}</span></div>
                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">Category</span><span className="font-medium text-gray-800">{currentBook.category || '-'}</span></div>
                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">Subject</span><span className="font-medium text-gray-800">{currentBook.subject || '-'}</span></div>
                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">Class/Grade</span><span className="font-medium text-gray-800">{currentBook.classGrade || '-'}</span></div>
                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">Edition</span><span className="font-medium text-gray-800">{currentBook.edition || '-'}</span></div>
                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">Language</span><span className="font-medium text-gray-800">{currentBook.language || '-'}</span></div>
                <div><span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">Pages & Year</span><span className="font-medium text-gray-800">{currentBook.pages ? `${currentBook.pages} p` : '-'} • {currentBook.publicationYear || '-'}</span></div>
                
                <div className="col-span-2 mt-2 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                   <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                     <span className="text-blue-600 block text-xs uppercase tracking-wider font-semibold mb-1">Physical Location</span>
                     <div className="flex gap-4">
                       <div><span className="text-gray-500 text-xs">Shelf:</span> <span className="font-medium text-gray-800">{currentBook.shelf || '-'}</span></div>
                       <div><span className="text-gray-500 text-xs">Rack:</span> <span className="font-medium text-gray-800">{currentBook.rack || '-'}</span></div>
                     </div>
                   </div>
                   <div className="bg-purple-50/50 p-3 rounded-xl border border-purple-100">
                     <span className="text-purple-600 block text-xs uppercase tracking-wider font-semibold mb-1">Tags / Keywords</span>
                     <p className="font-medium text-gray-800 text-xs mt-1">{currentBook.tags || '-'}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete or Archive?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Are you sure you want to remove <span className="font-bold text-gray-800">{currentBook.title}</span>? You can archive it instead if you want to keep the records.
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={deleteBook} className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-medium transition-colors">
                Yes, Delete Book
              </button>
              <button onClick={() => {
                setBooks(books.map(b => b.id === currentBook.id ? { ...b, status: 'Archived' } : b));
                setIsDeleteOpen(false);
              }} className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition-colors">
                Archive Instead
              </button>
              <button onClick={() => setIsDeleteOpen(false)} className="w-full py-2.5 text-gray-500 hover:text-gray-700 font-medium transition-colors mt-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
