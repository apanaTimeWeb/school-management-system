# Student Library — Feature Map

## Module Purpose
The Student Library module (`/student/library`) provides students with a digital interface to the school's physical library. Students can search the catalog, reserve available books, view currently issued books (including fines and due dates), request renewals, and track their past borrowing history.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_library_components/` | Visual UI: Tabs, Discover Grid, Issued List, History Table | `StudentLibraryMain.tsx`, `StudentLibraryDiscover.tsx`, `StudentLibraryIssued.tsx`, `StudentLibraryHistory.tsx` |
| `student_library_api/` | Fetches data and handles mock Reserve/Renew actions | `student_library_api.ts` |
| `student_library_types/` | Data interfaces | `student_library_types.ts` |
| `student_library_constants/` | Mock data for testing | `student_library_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Tabbed Navigation | `/student/library` | Switch between 'Discover Books', 'My Issued Books', and 'Library History'. The 'Issued' tab shows a counter badge if books are issued. | `StudentLibraryMain` | N/A | ✅ IMPLEMENTED |
| Search Catalog | `/student/library` | Type in a search bar to instantly filter the book grid by title, author, or category (client-side). | `StudentLibraryDiscover` | `GET /api/student/library` | ✅ MOCKED |
| Reserve Book | `/student/library` | Click "Reserve Book" on available items. Button shows a loading state during the mock API call. | `StudentLibraryDiscover` | `POST /api/student/library/reserve` | ✅ IMPLEMENTED |
| Manage Issued Books | `/student/library` | View due dates. If overdue, the card borders turn red and display the fine amount. Click "Renew Book" to mock extending the due date. | `StudentLibraryIssued` | `POST /api/student/library/renew` | ✅ IMPLEMENTED |
| History | `/student/library` | View a table of previously returned/lost books and fine amounts paid. | `StudentLibraryHistory` | `GET /api/student/library` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Renewing a Book
1. The user navigates to the "My Issued Books" tab (`StudentLibraryIssued`).
2. They identify a book nearing its due date and click "Renew Book".
3. The button state changes to `processingId === book.id`, showing a loading spinner for ~800ms.
4. The mock API returns success with a new due date.
5. The local state (`localBooks`) optimistically updates: the due date extends, and `renewCount` increments. An alert notifies the user. If `renewCount` reaches the max limit, the button becomes disabled.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/library`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
