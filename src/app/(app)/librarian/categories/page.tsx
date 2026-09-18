"use client";

import React, { useState } from "react";
import {
  Layers,
  Book,
  GraduationCap,
  Plus,
  Edit,
  Trash2,
  X,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  Bookmark,
  Newspaper,
  BookOpen,
  FolderOpen
} from "lucide-react";

type CategoryType = 'Main' | 'Subject' | 'Class';

interface Category {
  id: string;
  name: string;
  type: CategoryType;
  description: string;
  bookCount: number;
  iconType: string;
}

const MOCK_CATEGORIES: Category[] = [
  // Main Categories
  { id: "CAT-1", name: "Fiction", type: "Main", description: "Imaginative or invented stories.", bookCount: 1250, iconType: "Book" },
  { id: "CAT-2", name: "Non-Fiction", type: "Main", description: "Informative or factual books.", bookCount: 980, iconType: "FileText" },
  { id: "CAT-3", name: "Reference", type: "Main", description: "Dictionaries, encyclopedias, atlases.", bookCount: 340, iconType: "Bookmark" },
  { id: "CAT-4", name: "Competitive", type: "Main", description: "JEE, NEET, UPSC preparation books.", bookCount: 560, iconType: "GraduationCap" },
  { id: "CAT-5", name: "General Knowledge", type: "Main", description: "Trivia, facts, and general awareness.", bookCount: 420, iconType: "Layers" },
  { id: "CAT-6", name: "Children's Books", type: "Main", description: "Books targeted at young readers.", bookCount: 890, iconType: "BookOpen" },
  { id: "CAT-7", name: "Magazines", type: "Main", description: "Monthly and weekly publications.", bookCount: 150, iconType: "Newspaper" },
  { id: "CAT-8", name: "Journals", type: "Main", description: "Academic and scientific journals.", bookCount: 85, iconType: "FileText" },
  { id: "CAT-9", name: "Newspapers", type: "Main", description: "Daily news publications.", bookCount: 30, iconType: "Newspaper" },
  
  // Subject Categories
  { id: "SUB-1", name: "Mathematics", type: "Subject", description: "Algebra, Calculus, Geometry.", bookCount: 1450, iconType: "FolderOpen" },
  { id: "SUB-2", name: "Physics", type: "Subject", description: "Mechanics, Thermodynamics, Optics.", bookCount: 1200, iconType: "FolderOpen" },
  { id: "SUB-3", name: "Chemistry", type: "Subject", description: "Organic, Inorganic, Physical.", bookCount: 1100, iconType: "FolderOpen" },
  { id: "SUB-4", name: "Biology", type: "Subject", description: "Botany, Zoology, Human Anatomy.", bookCount: 950, iconType: "FolderOpen" },
  { id: "SUB-5", name: "History", type: "Subject", description: "World History, Indian History.", bookCount: 800, iconType: "FolderOpen" },
  
  // Class-wise Categories
  { id: "CLS-1", name: "Class 10", type: "Class", description: "All subjects for Class 10 Board.", bookCount: 650, iconType: "GraduationCap" },
  { id: "CLS-2", name: "Class 11", type: "Class", description: "All subjects for Class 11.", bookCount: 780, iconType: "GraduationCap" },
  { id: "CLS-3", name: "Class 12", type: "Class", description: "All subjects for Class 12 Board.", bookCount: 820, iconType: "GraduationCap" },
];

export default function CategoriesClassification() {
  const [categories, setCategories] = useState<Category[]>(MOCK_CATEGORIES);
  const [activeTab, setActiveTab] = useState<CategoryType>('Main');
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modals state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentCat, setCurrentCat] = useState<Category>({ id: "", name: "", type: "Main", description: "", bookCount: 0, iconType: "FolderOpen" });
  const [isEditing, setIsEditing] = useState(false);

  // Filter Categories
  const filteredCategories = categories.filter(c => 
    c.type === activeTab && 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Icon Helper
  const getIcon = (iconType: string, className: string = "w-6 h-6") => {
    switch (iconType) {
      case 'Book': return <Book className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Bookmark': return <Bookmark className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Newspaper': return <Newspaper className={className} />;
      case 'FolderOpen': default: return <FolderOpen className={className} />;
    }
  };

  // Handlers
  const handleAdd = () => {
    setCurrentCat({ id: `NEW-${Date.now()}`, name: "", type: activeTab, description: "", bookCount: 0, iconType: "FolderOpen" });
    setIsEditing(false);
    setIsFormOpen(true);
  };

  const handleEdit = (cat: Category) => {
    setCurrentCat(cat);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (cat: Category) => {
    setCurrentCat(cat);
    setIsDeleteOpen(true);
  };

  const saveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setCategories(categories.map(c => c.id === currentCat.id ? currentCat : c));
    } else {
      setCategories([...categories, currentCat]);
    }
    setIsFormOpen(false);
  };

  const deleteCategory = () => {
    setCategories(categories.filter(c => c.id !== currentCat.id));
    setIsDeleteOpen(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50/50">
      
      {/* Header & Tabs */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Layers className="w-8 h-8 text-indigo-600" />
              Categories & Classification
            </h1>
            <p className="text-gray-500 mt-1">Organize your library books into structured hierarchies.</p>
          </div>
          
          <button 
            onClick={handleAdd}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2 w-full md:w-auto justify-center"
          >
            <Plus className="w-5 h-5" /> Add Category
          </button>
        </div>

        {/* Tabs & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
            <button 
              onClick={() => setActiveTab('Main')}
              className={`px-5 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'Main' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
            >
              <Book className="w-4 h-4" /> Book Categories
            </button>
            <button 
              onClick={() => setActiveTab('Subject')}
              className={`px-5 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'Subject' ? 'bg-emerald-50 text-emerald-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
            >
              <FileText className="w-4 h-4" /> Subjects
            </button>
            <button 
              onClick={() => setActiveTab('Class')}
              className={`px-5 py-2.5 rounded-xl font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === 'Class' ? 'bg-amber-50 text-amber-700' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}
            >
              <GraduationCap className="w-4 h-4" /> Class-wise
            </button>
          </div>
          
          <div className="relative w-full md:w-72 shrink-0">
            <input 
              type="text" 
              placeholder={`Search ${activeTab.toLowerCase()} categories...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col group relative overflow-hidden">
              
              {/* Top Section */}
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl border ${
                  cat.type === 'Main' ? 'bg-indigo-50 border-indigo-100 text-indigo-600' :
                  cat.type === 'Subject' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' :
                  'bg-amber-50 border-amber-100 text-amber-600'
                }`}>
                  {getIcon(cat.iconType, "w-6 h-6")}
                </div>
                
                {/* Actions */}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => handleEdit(cat)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDeleteClick(cat)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Delete">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Middle */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{cat.description || "No description provided."}</p>
              </div>
              
              {/* Bottom */}
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Books Assigned</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  cat.bookCount > 0 ? 'bg-gray-100 text-gray-700' : 'bg-red-50 text-red-600'
                }`}>
                  {cat.bookCount} {cat.bookCount === 1 ? 'Book' : 'Books'}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-gray-100 border-dashed">
            <Layers className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-800 mb-1">No Categories Found</h3>
            <p className="text-gray-500">There are no {activeTab.toLowerCase()} categories matching your search.</p>
            <button onClick={handleAdd} className="mt-4 text-indigo-600 font-medium hover:text-indigo-700 flex items-center justify-center gap-1 mx-auto">
              <Plus className="w-4 h-4" /> Add One Now
            </button>
          </div>
        )}
      </div>


      {/* Add / Edit Category Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                {isEditing ? <Edit className="w-5 h-5 text-emerald-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                {isEditing ? `Edit Category` : "Add New Category"}
              </h2>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={saveCategory} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Classification Type *</label>
                <select 
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white"
                  value={currentCat.type}
                  onChange={(e) => setCurrentCat({...currentCat, type: e.target.value as CategoryType})}
                  required
                >
                  <option value="Main">Main Book Category (e.g. Fiction, Magazine)</option>
                  <option value="Subject">Subject Category (e.g. Science, Math)</option>
                  <option value="Class">Class-wise (e.g. Class 10, Class 11)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name *</label>
                <input 
                  required type="text" 
                  value={currentCat.name}
                  onChange={(e) => setCurrentCat({...currentCat, name: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                  placeholder="e.g. Mystery Novels"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  rows={3}
                  value={currentCat.description}
                  onChange={(e) => setCurrentCat({...currentCat, description: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                  placeholder="A short description about this category..."
                />
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsFormOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                  <CheckCircle2 className="w-4 h-4" />
                  {isEditing ? "Save Changes" : "Create Category"}
                </button>
              </div>
            </form>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Category?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Are you sure you want to delete <span className="font-bold text-gray-800">"{currentCat.name}"</span>? 
              {currentCat.bookCount > 0 && <span className="block mt-2 text-rose-600 font-medium">Warning: This category currently has {currentCat.bookCount} books assigned to it!</span>}
            </p>
            <div className="flex flex-col gap-2">
              <button onClick={deleteCategory} className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-medium transition-colors">
                Yes, Delete It
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
