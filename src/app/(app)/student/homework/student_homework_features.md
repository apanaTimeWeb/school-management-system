# Student Homework — Feature Map

## Module Purpose
The Student Homework module (`/student/homework`) allows students to view, filter, and read details about their homework and assignments. It features a modal implementation to show extended details, attachments, and feedback without navigating away from the list.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_homework_components/` | Visual layouts of the homework list and modal | `StudentHomeworkMain.tsx`, `StudentHomeworkList.tsx`, `StudentHomeworkDetailsModal.tsx` |
| `student_homework_api/` | Fetches data | `student_homework_api.ts` |
| `student_homework_types/` | Data interfaces | `student_homework_types.ts` |
| `student_homework_constants/` | Mock data for UI testing | `student_homework_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Status Filtering | `/student/homework` | Filter list by 'All', 'Pending', 'Overdue', 'Completed' | `StudentHomeworkMain` | `GET /api/student/homework` | ✅ MOCKED |
| Homework Cards | `/student/homework` | View summary cards showing subject, title, due date, status | `StudentHomeworkList` | `GET /api/student/homework` | ✅ MOCKED |
| Details Modal | `/student/homework` | Click a card to read full description, view/download attachments, and see teacher feedback (if completed) | `StudentHomeworkDetailsModal` | N/A (Data passed as prop) | ✅ MOCKED |
| Submission Mock | `/student/homework` | Click "Submit" on pending tasks | `StudentHomeworkDetailsModal` | (To be implemented) | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Filtering
1. The user clicks the "Pending" pill filter.
2. The `StudentHomeworkMain` state updates, re-rendering `StudentHomeworkList` to show only tasks with status `Pending`.

### Flow 2: Viewing Details & Attachments
1. The user clicks anywhere on a Homework Card.
2. A beautiful modal (`StudentHomeworkDetailsModal`) slides in (`motion-safe:animate-[slideIn_0.3s]`).
3. Inside the modal, the user can read the full description. If attachments exist, they are rendered as clickable files.
4. The user clicks "Close" or presses the `Escape` key to close the modal.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines (Modal logic kept lean).
- [x] Rule 2: Isolation — exclusively in `student/homework`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-popover`, `bg-overlay/80`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe` animations for Modal overlay (`fadeIn`) and container (`slideIn`).
